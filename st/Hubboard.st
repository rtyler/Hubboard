Smalltalk current createPackage: 'Hubboard' properties: #{}!
Object subclass: #HubboardApp
	instanceVariableNames: 'token'
	category: 'Hubboard'!

!HubboardApp methodsFor: 'not yet classified'!

initialize
	token := window at: 'github_access_token'.
!

bootstrap
	| api |
	api := Issues new setToken: token.
	api issues: [ :issues |
		issues do: [ :issue |
			| tile |
			tile := IssueTile new withData: issue.
			(self inProgress: (issue at: 'labels'))
					ifFalse: [ tile setOpen. tile appendToJQuery: ('#openissues' asJQuery) ]
					ifTrue: [ tile setInProgress. tile appendToJQuery: ('#inprogressissues' asJQuery) ]
	]] loadAll: false.

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
	tile := aWidget draggable.
	"jQuery is going to give this to us in an array, how annoying"
	currentParent := (tile parent at: 0) at: 'id'. 
	newParent := theEvent target at: 'id'.

	tile css: 'position' is:'static'.

	"We will receive drag events onto the same column, don't do anything in that case"
	currentParent = newParent ifTrue: [ ^ true ].
	('#', newParent) asJQuery append: (tile detach).

	console log: ((tile at: 0) at: 'id').
	console log: ('Moved to: ', newParent).
! !

HubboardApp class instanceVariableNames: 'current'!

!HubboardApp class methodsFor: 'not yet classified'!

current
	^ current ifNil: [ current := super new ].
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
	self asJQuery draggable: #{'zIndex' -> '10000' }.
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
! !

