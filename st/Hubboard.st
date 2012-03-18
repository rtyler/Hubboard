Smalltalk current createPackage: 'Hubboard' properties: #{}!
Widget subclass: #NewIssueDialog
	instanceVariableNames: ''
	category: 'Hubboard'!

!NewIssueDialog methodsFor: 'not yet classified'!

renderOn: html
	html div
		at: 'title' put: 'Create a new issue';
		class: 'new_issue';
		with: 'This feature is coming soon'.

	self becomeDialog.
!

becomeDialog
	'.new_issue' asJQuery dialog: #{
			'modal' -> true.
			'close' -> [ :event :ui |
				"Ugly hack to make sure we nuke all trash the jQuery UI Dialog leaves around"
				'.ui-dialog' asJQuery remove.
				'.new_issue' asJQuery remove.
			]}.
! !

!NewIssueDialog class methodsFor: 'not yet classified'!

show
	" Creates and adds the DOM elements to the body tag "
	| dialog |
	dialog := super new.
	dialog appendToJQuery: ('body' asJQuery).
! !

Widget subclass: #IssueTile
	instanceVariableNames: 'raw title body issueId number project projectOwner issueStatus'
	category: 'Hubboard'!

!IssueTile methodsFor: 'not yet classified'!

renderOn: html
	| numberClass |
	numberClass := 'number'.

	issueStatus = #open ifTrue: [ numberClass := numberClass, ' open' ]. 
	issueStatus = #inprogress ifTrue: [ numberClass := numberClass, ' inprogress' ]. 

	html div
		class: 'issuetile';
		id: self elementId;
		with: [
			html div
				class: numberClass;
				with: [ 
					html a href: (raw at: 'html_url'); target: '_blank'; with: ('#', number asString).
					html with: ' in '.
					html a href: ('https://github.com/', projectOwner); with: projectOwner.
					html with: '/'.
					html  a href: ('https://github.com/', projectOwner, '/', project); with: project.
				].
			html span class: 'title'; with: title.
			html br.
		].

	"After we render, we should probably make this sucker draggable"
	issueStatus = #closed ifFalse: [ self asJQuery draggable: #{'zIndex' -> '10000'. 'snap' -> true }].
!

withData: dataHash
	"Set up a the tile with data from the GitHub API"
	| issueInfo |
	raw := dataHash.
	issueId := dataHash at: 'id'.
	number := dataHash at: 'number'.
	title := dataHash at: 'title'.
	body := dataHash at: 'body'.

	issueInfo := self parseUrl: (dataHash at: 'html_url').
	project := issueInfo at: 'project'.
	projectOwner := issueInfo at: 'owner'.
!

parseUrl: aUrl
	"Return a Hash with the 'owner' and 'project' based on the given Issue URL"
	| parts |
	parts := <aUrl.split('/')>.
	
	^ #{'owner' -> (parts at: 4).
		'project' -> (parts at: 5)}.
!

setOpen
	"Set this issue as an open issue"
	issueStatus := #open.
!

setInProgress
	"Set this issue as an inprogress issue"
	issueStatus := #inprogress.
!

asJQuery
	^ ('#', self elementId) asJQuery.
!

elementId
	^ 'issuetile_', issueId asString.
!

moveTo: aColumnId
	"Handle the invocation of the right callbacks when we move from one column to another
	 The lines blur a bit here on 'view' versus 'controller'"

	aColumnId = 'inprogressissues' ifTrue: [
		jQuery ajax: ('/repos/', projectOwner, '/', project, '/issues/', number, '/labels')
				options: #{
					'type' -> 'POST'.
					'dataType' -> 'json'.
					'data' -> 'in-progress'.
					'success' -> [ console log: 'win' ].
					'error' -> [ console log: 'fail']
					}.
		^ true.
	].

	aColumnId = 'openissues' ifTrue: [
		^  true.
	].

	aColumnId = 'closedissues' ifTrue: [
		^ true.
	].
!

setClosed
	"Set this issue as a closed issue, should not be draggable as a result"
	issueStatus := #closed.
! !

Object subclass: #HubboardApp
	instanceVariableNames: 'token issueMap api'
	category: 'Hubboard'!

!HubboardApp methodsFor: 'not yet classified'!

initialize
	token := window at: 'github_access_token'.
	issueMap := Dictionary new.
!

bootstrap
	api := Issues new setToken: token.
	self refresh.
	'.issuecolumn' asJQuery droppable: #{'tolerance' -> 'pointer'.
		'drop' -> [ :event :ui | self handleDrop: event with: ui]}.
!

inProgress: arrayOfLabels
	"Return true if we find the 'in-progress' label"
	arrayOfLabels ifNil: [ ^ false ].

	arrayOfLabels do: [ :label |
		(label at: 'name') = 'in-progress' ifTrue: [ ^ true ].
	].
	^ false.
!

handleDrop: theEvent with: aWidget
	" This function should handle the initial drop of one IssueTile onto a new column "
	| tile currentParent newParent |
	tile := issueMap at: ((aWidget draggable at: 0) at: 'id').
	"jQuery is going to give this to us in an array, how annoying"
	currentParent := (tile asJQuery parent at: 0) at: 'id'. 
	newParent := theEvent target at: 'id'.

	tile asJQuery css: 'position' is:'static'.

	"We will receive drag events onto the same column, don't do anything in that case"
	currentParent = newParent ifTrue: [ ^ true ].
	('#', newParent) asJQuery append: (tile asJQuery detach).

	tile moveTo: newParent.
!

refresh
	'#openissues' asJQuery empty.
	'#inprogressissues' asJQuery empty.
	'#closedissues' asJQuery empty.
	api issues: [ :issues |
		issues do: [ :issue |
			| tile |
			tile := IssueTile new withData: issue.
			issueMap at: (tile elementId) put: tile.
			(self inProgress: (issue at: 'labels'))
					ifFalse: [ tile setOpen. tile appendToJQuery: ('#openissues' asJQuery) ]
					ifTrue: [ tile setInProgress. tile appendToJQuery: ('#inprogressissues' asJQuery) ]
	]] loadAll: false.

	api recentlyClosed: [ :issues |
		issues do: [ :issue |
			| tile |
			tile := IssueTile new withData: issue.
			tile setClosed.
			tile appendToJQuery: ('#closedissues' asJQuery).
	]] loadAll: false.
! !

HubboardApp class instanceVariableNames: 'current'!

!HubboardApp class methodsFor: 'not yet classified'!

current
	^ current ifNil: [ current := super new ].
! !

