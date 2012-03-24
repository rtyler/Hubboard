Smalltalk current createPackage: 'Hubboard' properties: #{}!
Widget subclass: #IssueTile
	instanceVariableNames: 'raw title body issueId number project projectOwner issueStatus comments fullProjectName elementId model'
	category: 'Hubboard'!

!IssueTile methodsFor: 'accessors'!

elementId
	^ elementId ifNil: [ elementId := 'issuetile_', (model issueId asString) ].
!

model
	^ model.
! !

!IssueTile methodsFor: 'not yet classified'!

withData: dataHash
	"Set up a the tile with data from the GitHub API"
	| issueInfo |
	raw := dataHash.
	issueId := dataHash at: 'id'.
	number := dataHash at: 'number'.
	title := dataHash at: 'title'.
	body := dataHash at: 'body'.
	comments := dataHash at: 'comments'.

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

moveTo: aColumnId
	"Handle the invocation of the right callbacks when we move from one column to another
	 The lines blur a bit here on 'view' versus 'controller'"
	| postData successBlock url |
	postData := #{'project' -> model projectName }.


	aColumnId = 'inprogressissues' ifTrue: [
		url := '/issues/', number, '/label'.
		successBlock := [ self setInProgress. ].
	].
	aColumnId = 'openissues' ifTrue: [
		url := '/issues/', number, '/revert'.
		successBlock := [ self setOpen ]
	].
	aColumnId = 'closedissues' ifTrue: [
		url := '/issues/', number, '/close'.
		successBlock := [ self setClosed ].
	].
	
	url ifNotNil: [
		HubboardApp current showSpinner.
		jQuery ajax: url
				options: #{
					'type' -> 'POST'.
					'dataType' -> 'json'.
					'data' -> postData asJSONString.
					'success' -> [
						successBlock ifNotNil: [ successBlock value ].
						self updateHeaderClass.
						HubboardApp current hideSpinner.
					].
					'error' -> [ HubboardApp current hideSpinner. console log: 'fail']
					}.
		^ true.
	].
	^ false.
!

setClosed
	"Set this issue as a closed issue, should not be draggable as a result"
	issueStatus := #closed.
	self asJQuery draggable: 'disable'.
!

withModel: anIssue
	model := anIssue.
	number := anIssue number.
! !

!IssueTile methodsFor: 'rendering'!

renderOn: html
	html div
		class: 'issuetile';
		id: self elementId;
		at: 'data-project' put: (model projectName);
		at: 'data-issueid' put: (model issueId);
		with: [
			html div
				class: self numberClass;
				with: [ 
					html a href: (model url); target: '_blank'; with: ('#', (model number) asString).
					html with: ' in '.
					html a href: ('https://github.com/', (model projectOwner)); with: (model projectOwner).
					html with: ' / '.
					html  a href: ('https://github.com/', (model projectName)); with: (model project).
					html span
						style: 'float:right;';
						class: 'comments';
						with: (model comments asString, ' comments').
				].
			html div class: 'title'; with: (model title).
		].
	self postRender.
!

numberClass
	| numberClass |
	numberClass := 'number'.
	issueStatus = #open ifTrue: [ numberClass := numberClass, ' open' ]. 
	issueStatus = #inprogress ifTrue: [ numberClass := numberClass, ' inprogress' ]. 
	issueStatus = #closed ifTrue: [ numberClass := numberClass, ' closed'].
	^ numberClass.
!

postRender
	"Run actions after we've rendered the DOM elements "

	"Make the tile draggable"
	issueStatus = #closed ifFalse: [ self asJQuery draggable: #{'zIndex' -> '10000'. 'snap' -> true }].
!

updateHeaderClass
	|element |
	element := ('#', self elementId, ' > div.number') asJQuery.
	element removeClass.
	element addClass: (self numberClass).
! !

Object subclass: #HubboardApp
	instanceVariableNames: 'token issueMap issueApi userApi knownRepos userData refreshIntervalId currentProject refreshInterval'
	category: 'Hubboard'!

!HubboardApp methodsFor: 'accessors'!

inProgress: arrayOfLabels
	"Return true if we find the 'in-progress' label"
	arrayOfLabels ifNil: [ ^ false ].

	arrayOfLabels do: [ :label |
		(label at: 'name') = 'in-progress' ifTrue: [ ^ true ].
	].
	^ false.
!

knownRepos
	^ knownRepos.
!

issueMap
	^ issueMap.
!

user
	^ userData.
!

currentProject
	^ currentProject.
! !

!HubboardApp methodsFor: 'actions'!

handleDrop: theEvent with: aWidget
	" This function should handle the initial drop of one IssueTile onto a new column "
	| tile currentParent newParent issueId |
	issueId := ((aWidget draggable at: 0) at: 'id').
	tile := issueMap at: (((issueId split: 'issuetile_') at: 2) asNumber).
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
	self flushColumns.

	issueApi issues: [ :issue |
			| tile issueId |
			issueId := issue issueId.
			tile := issueMap at: issueId ifAbsent: [ IssueTile new ].
			tile withModel: issue.
			issueMap at: issueId put: tile.
			knownRepos add: (issue projectName).
			(self inProgress: (issue labels))
					ifFalse: [ tile setOpen. tile appendToJQuery: ('#openissues' asJQuery) ]
					ifTrue: [ tile setInProgress. tile appendToJQuery: ('#inprogressissues' asJQuery) ].
			currentProject ifNotNil: [
				currentProject = (issue projectName) ifFalse: [tile asJQuery hide].
			].
			self updateFilter. "This might prove to be CPU intensive"
		] loadAll: false.

	issueApi recentlyClosed: [ :issue |
			| tile issueId |
			issueId := issue issueId.
			tile := issueMap at: issueId ifAbsent: [ IssueTile new ].
			tile withModel: issue.
			tile setClosed.
			tile appendToJQuery: ('#closedissues' asJQuery).
			currentProject ifNotNil: [
				currentProject = (issue projectName) ifFalse: [tile asJQuery hide].
			]
	] loadAll: false.
!

updateFilter
	| element |

	" If we have a currently selected project, no sense in running the rest of this code "
	currentProject ifNotNil: [ ^ true ].

	element := '.projectselect' asJQuery.
	element change: [ :event |
		| project |
		project := element val.
		project = 'All'
			ifTrue: [ self showAll ]
			ifFalse: [ self showOnly: project ].
	].

	element empty.

	[ :html | html option value: 'All'; with: 'View All Projects' ] appendToJQuery: element.
	knownRepos do: [ :project |
		[ :html | html option value: project; with: project ] appendToJQuery: element.
	].
!

startRefreshTimer
	refreshIntervalId ifNil: [
		refreshIntervalId := window setInterval: [ self refresh ] every: refreshInterval.
	].
!

stopRefreshTimer
	refreshIntervalId ifNotNil: [
		window clearInterval: refreshIntervalId.
		refreshIntervalId := nil.
	].
! !

!HubboardApp methodsFor: 'initializers'!

initialize
	token := window at: 'github_access_token'.
	issueMap := Dictionary new.
	knownRepos := Set new.
	refreshInterval := 120000.
!

bootstrap
	issueApi := Issues new setToken: token.
	userApi := Users new setToken: token.
	userApi fetchCurrent: [ :data | userData := data. '#logout-username' asJQuery text: ('(', (data at: 'login'), ')') ].
	self refresh.
	self startRefreshTimer.
	'.issuecolumn' asJQuery droppable: #{'tolerance' -> 'pointer'.
		'drop' -> [ :event :ui | self handleDrop: event with: ui]}.
! !

!HubboardApp methodsFor: 'ui'!

showAll
	"Make sure all issue tiles are visible"
	currentProject := nil.
	'.issuetile' asJQuery show.
!

showOnly: aProjectName
	"Only show tiles with data-project=aProjectName"
	currentProject := aProjectName.
	'.issuetile' asJQuery hide.
	('.issuetile[data-project="', aProjectName, '"]') asJQuery show.
!

flushColumns
	| clearBlock |
	clearBlock := [ :index :element |
		| item |
		item := window jQuery: element.
		item draggable: 'destroy'.
		item remove removeData.
	].
	'#openissues > *' asJQuery each: clearBlock.
	'#inprogressissues > *' asJQuery each: clearBlock.
	'#closedissues > *' asJQuery each: clearBlock.
!

showSpinner
	'#spinner' asJQuery show.
!

hideSpinner
	'#spinner' asJQuery hide.
! !

HubboardApp class instanceVariableNames: 'current'!

!HubboardApp class methodsFor: 'not yet classified'!

current
	^ current ifNil: [ current := super new ].
! !

Widget subclass: #HBDialog
	instanceVariableNames: 'modal minWidth draggable elementId'
	category: 'Hubboard'!

!HBDialog methodsFor: 'accessors'!

elementId
	^ ('#', elementId).
!

asJQuery
	^ self elementId asJQuery.
! !

!HBDialog methodsFor: 'dialog-helpers'!

becomeDialog
	^ self becomeDialog: [].
!

becomeDialog: aBlockCallback
	self asJQuery dialog: #{
			'modal' -> modal.
			'minWidth' -> minWidth.
			'draggable' -> draggable.
			'close' -> [ :event :ui |
				"Ugly hack to make sure we nuke all trash the jQuery UI Dialog leaves around"
				'.ui-dialog' asJQuery remove.
				self asJQuery remove.
			]}.
	aBlockCallback value.
! !

!HBDialog methodsFor: 'initializers'!

initialize
	super initialize.
	modal := true.
	minWidth := 500.
	draggable := false.
! !

HBDialog subclass: #NewIssueDialog
	instanceVariableNames: ''
	category: 'Hubboard'!

!NewIssueDialog methodsFor: 'actions'!

submit
	"Take the values out of the form and actually submit them"
	| data |
	data := #{
		'title' -> ':input[name=title]' asJQuery val.
		'assignee' -> ':input[name=assignee]' asJQuery val.
		'project' -> ':input[name=project]' asJQuery val.
		'body' -> ':input[name=body]' asJQuery val
	}.

	((data at: 'title') size) = 0 ifTrue: [ window alert: 'You should probably add a title'. ^ false ].

	jQuery ajax: '/issues/create' options: #{'type' -> 'POST'.
			'dataType' -> 'json'.
			'data' -> data asJSONString.
			'success' -> [ self asJQuery dialog: 'close'. HubboardApp current refresh.]}.
! !

!NewIssueDialog methodsFor: 'initializers'!

initialize
	super initialize.
	minWidth := 450.
	elementId := 'new_issue'.
! !

!NewIssueDialog methodsFor: 'rendering'!

renderOn: html
	html div
		at: 'title' put: 'Create a new issue';
		id: elementId;
		with: [
			html form name: 'new_issue_form'; onSubmit: [ :event | self submit. event preventDefault ]; with: [
				html label for: 'assignee'; with: 'Assign to: '.
				html input type: 'hidden'; name: 'assignee'; value: (HubboardApp current user at: 'login').
				html strong with: (HubboardApp current user at: 'login').
				html br.
				html label for: 'project'; with: 'Project: '.
				html select
					name: 'project';
					with: [
						HubboardApp current knownRepos do: [ :repo |
							(HubboardApp current currentProject) = repo
								ifTrue: [ html option value: repo; with: repo; at: 'selected' put: 'true' ]
								ifFalse: [html option value: repo; with: repo ].
							]
						].
				html br.
				html label for: 'title'; with: 'Title: '.
				html input name: 'title'; at: 'size' put: '40'.
				html br.
				html a with: 'Add body'; class: 'dialog-add-body'; onClick: [ '#dialog-body' asJQuery show ].
				html br.
				html div
					id: 'dialog-body';
					style: 'display: none;';
					with: [
						html textarea name: 'body'; at: 'cols' put: 40; at: 'rows' put: 6.
						html br.
					].
				html button style: 'float: right;'; type: 'submit'; with: 'Create'.
			]
	].

	self becomeDialog: [ ':input[name=title]' asJQuery focus ].
! !

!NewIssueDialog class methodsFor: 'not yet classified'!

show
	" Creates and adds the DOM elements to the body tag "
	| dialog |
	dialog := super new.
	dialog appendToJQuery: ('body' asJQuery).
! !

HBDialog subclass: #IssueDetailDialog
	instanceVariableNames: 'model'
	category: 'Hubboard'!

!IssueDetailDialog methodsFor: 'initializers'!

initialize
	super initialize.
	minWidth := 650.
	elementId := 'issue_detail'.
	model := nil.
!

withIssue: anIssue
	model := anIssue.
	^ self.
! !

!IssueDetailDialog methodsFor: 'rendering'!

renderOn: html
	html div
		at: 'title' put: '#', (model number), ' - ', (model title);
		id: elementId;
		with: [
			html div with: (model body asString).
			html hr.
			html div id: 'comments'.
	].

	self becomeDialog.

	model loadComments: [ :comments | comments do: [ :comment | [ :html | html div with: (comment body) ] appendToJQuery: '#comments' asJQuery ] ].
! !

!String methodsFor: '*Hubboard'!

split: aDelimiter
	"Split the string based on the delimiter into an Array of sub-strings"
	^ <self.split(aDelimiter);>.
! !

