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
!

asJQuery
	^ ('#', self elementId) asJQuery.
! !

!IssueTile methodsFor: 'actions'!

setOpen
	"Set this issue as an open issue"
	issueStatus := #open.
!

setInProgress
	"Set this issue as an inprogress issue"
	issueStatus := #inprogress.
!

setClosed
	"Set this issue as a closed issue, should not be draggable as a result"
	issueStatus := #closed.
	self asJQuery draggable: 'disable'.
!

viewIssue: onClickEvent
	| dialog |
	dialog := IssueDetailDialog new withIssue: model.
	dialog appendToJQuery: 'body' asJQuery.
! !

!IssueTile methodsFor: 'initializers'!

withModel: anIssue
	model := anIssue.
	number := anIssue number.
! !

!IssueTile methodsFor: 'not yet classified'!

parseUrl: aUrl
	"Return a Hash with the 'owner' and 'project' based on the given Issue URL"
	| parts |
	parts := <aUrl.split('/')>.
	
	^ #{'owner' -> (parts at: 4).
		'project' -> (parts at: 5)}.
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
! !

!IssueTile methodsFor: 'rendering'!

renderOn: html
	html div
		class: 'issuetile';
		id: self elementId;
		at: 'data-project' put: (model projectName);
		at: 'data-issueid' put: (model issueId);
		with: [
			self renderHeader: html.
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

	"Make ourselves double-clickable"
	self asJQuery dblclick: [ :event | self viewIssue: event ].
!

updateHeaderClass
	|element |
	element := ('#', self elementId, ' > div.number') asJQuery.
	element removeClass.
	element addClass: (self numberClass).
!

addComment: clickEvent
	| dialog |
	dialog := CommentDialog new withIssue: model.
	dialog appendToJQuery: 'body' asJQuery.
!

renderHeader: html
	html div
		class: self numberClass;
		with: [ 
			html a href: (model url); target: '_blank'; with: ('#', (model number) asString); onClick: [ :event | self viewIssue: event. event preventDefault ].
			html with: ' in '.
			html a href: ('https://github.com/', (model projectOwner)); with: (model projectOwner).
			html with: ' / '.
			html  a href: ('https://github.com/', (model projectName)); with: (model project).
			html div
				style: 'float:right;';
				class: 'comments';
				with: [
					model pullRequest ifNotNil: [
						html span
							class: 'pull_req';
							with: [
								html a target: '_blank'; href: (model pullRequest); with: [ html img src: '/images/pull_request.png' ].
								html with: 'Code Attached'.
							].
						].
					html span with: (model comments asString, ' comments').
					html button
						class: 'add_comment';
						title: 'Add Comment';
						with: '+';
						onClick: [ :event | self addComment: event ].
				].
		].
! !

Object subclass: #HubboardApp
	instanceVariableNames: 'token issueMap issueApi userApi knownRepos userData refreshIntervalId currentProject refreshInterval sortedRepos'
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
!

sortedRepos
	" Return an Array of repos (owner/reponame) sorted by the most recently updated "
	^ sortedRepos ifNil: [
		| names |
		names := knownRepos keys.
		sortedRepos := names sort: [ :left :right |
			((knownRepos at: left) at: 'updated_at') > ((knownRepos at: right) at: 'updated_at')
		].
	].
!

setKnownRepos: newKnownRepos
	" Ideally, this method should not really be used outside of test cases "
	knownRepos := newKnownRepos.
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
			(self inProgress: (issue labels))
					ifFalse: [ tile setOpen. tile appendToJQuery: ('#openissues' asJQuery) ]
					ifTrue: [ tile setInProgress. tile appendToJQuery: ('#inprogressissues' asJQuery) ].
			currentProject ifNotNil: [
				currentProject = (issue projectName) ifFalse: [tile asJQuery hide].
			].
			self hideSpinner.
			self updateFilter.
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
	| element assignedProjects |
	assignedProjects := Set new.

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
	self issueMap values do: [ :issue | assignedProjects add: (issue model projectName) ].
	assignedProjects do: [ :project |
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
	knownRepos := Dictionary new.
	refreshInterval := 120000.
!

bootstrap
	issueApi := Issues new setToken: token.
	userApi := Users new setToken: token.
	self showSpinner.
	userApi fetchCurrent: [ :data |
		| allRepos |
		allRepos := Array new.
		userData := data.
		'#logout-username' asJQuery text: ('(', (data at: 'login'), ')').
		" Once we have information about the user, let's fire up our repo backfill "	
		Repo fetchReposFor: (data at: 'login')
			withEachDo: [ :result | (result at: 'has_issues') ifTrue: [ allRepos add: result ] ]
			finally: [
				allRepos do: [ :item |
					| owner |
					owner := ((item at: 'owner') at: 'login').
					knownRepos at: (owner, '/', (item at: 'name')) put: item.
				].
				self sortedRepos. "Pre-sort our repos just to make things easier on the user"
				':input[name=create_issue]' asJQuery removeAttr: 'disabled'.
		].
	].
	self refresh.
	self startRefreshTimer.
	'.issuecolumn' asJQuery droppable: #{
			'tolerance' -> 'pointer'.
			'accept' -> '.issuetile'.
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
	instanceVariableNames: 'modal minWidth draggable elementId position'
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
			'position' -> position.
			'close' -> [ :event :ui |
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
	position := 'center'.
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
	| currentUser |
	currentUser := HubboardApp current user at: 'login'.

	html div
		at: 'title' put: 'Create a new issue';
		id: elementId;
		with: [
			html form name: 'new_issue_form'; onSubmit: [ :event | self submit. event preventDefault ]; with: [
				html label for: 'assignee'; with: 'Assign to: '.
				html select name: 'assignee';
					with: [ html option value: currentUser; with: currentUser. ].
				html br.
				html label for: 'project'; with: 'Project: '.
				html select
					name: 'project';
					onChange: [ :event | self updateCollaborators ];
					with: [
						HubboardApp current sortedRepos do: [ :repo |
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
						html with: (MarkdownTextArea new setName: 'body'; setColumns: 40; setRows: 8).
						html br.
					].
				html button style: 'float: right;'; type: 'submit'; with: 'Create'.
			]
	].

	self becomeDialog: [ ':input[name=title]' asJQuery focus ].
!

buttons
	^ nil.
!

updateCollaborators
	" Update the <select/> with collaborators from the API"
	| project assignee |
	project := ':input[name=project]' asJQuery val.
	assignee := ':input[name=assignee]' asJQuery.

	project ifNil: [ ^ false ].

	Repo collaboratorsFor: project with: [ :results |
		| currentUser |
		currentUser := HubboardApp current user at: 'login'.
		assignee empty.
		[ :html |
			results do: [ :result |
				| userName |
				userName := result at: 'login'.
				html option value: userName; with: userName.
			].
		] appendToJQuery: assignee.
		" Select ourselves after we update the list "
		assignee val: currentUser.
	].
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
	draggable := true.
	position := 'top'.
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
			| body |
			body := model body.
			(body size) = 0
				ifTrue: [ body := 'No description given'.]
				ifFalse: [ body := Markdown asTagBrush: (model body asString) ].
			html div with: body.
			html div
				id: 'comments_container';
				style: 'display: none;';
				with: [
					html hr.
					html strong with: 'Comments:'.
					html hr.
					html div id: 'comments'; style: 'overflow: auto; max-height: 300px'.
				].
			html div
				style: 'float: right;';
				with: [ html a href: (model url); target: '_blank'; with: 'View on GitHub'].
			html div
				style: 'float: right; margin-right: 10px;';
				with: [ html a href: '#'; id: 'dialog_add_comment'; with: 'Add Comment'; onClick: [
						| dialog |
					dialog := CommentDialog new withIssue: model.
					dialog appendToJQuery: 'body' asJQuery.
				]].
	].

	self becomeDialog: [ '#dialog_add_comment' asJQuery focus ].

	model loadComments: [ :comments | comments reversed do: [ :comment | [ :html | self renderComment: comment onto: html ] appendToJQuery: '#comments' asJQuery ] ].
!

renderComment: comment onto: html

	html div
		class: 'comment_detail';
		with: [
			html strong with: 'By: ', (comment login).
			html with: (Markdown asTagBrush: (comment body)).
		].

	html hr.

	'#comments_container' asJQuery show.
! !

HBDialog subclass: #CommentDialog
	instanceVariableNames: 'model'
	category: 'Hubboard'!

!CommentDialog methodsFor: 'actions'!

submit
	"Take the values out of the form and actually submit them"
	| data |
	data := #{
		'project' -> model projectName.
		'body' -> ':input[name=body]' asJQuery val
	}.

	((data at: 'body') size) = 0 ifTrue: [ window alert: 'You should probably add a comment'. ^ false ].

	jQuery ajax: '/issues/', (model number), '/comment' options: #{'type' -> 'POST'.
			'dataType' -> 'json'.
			'data' -> data asJSONString.
			'success' -> [ self asJQuery dialog: 'close'. HubboardApp current refresh.]}.
! !

!CommentDialog methodsFor: 'initializers'!

initialize
	super initialize.
	minWidth := 450.
	elementId := 'new_comment'.
!

withIssue: anIssue
	model := anIssue.
! !

!CommentDialog methodsFor: 'rendering'!

renderOn: html
	html div
		at: 'title' put: 'Add a comment to issue #', (model number);
		id: elementId;
		with: [
			html form name: 'new_comment_form'; onSubmit: [ :event | self submit. event preventDefault ]; with: [
				html input type: 'hidden'; name: 'number'; value: (model number).
				html div
					id: 'dialog-body';
					with: [
						html with: (MarkdownTextArea new setName: 'body'; setColumns: 45; setRows: 8).
						html br.
					].
				html button style: 'float: right;'; type: 'submit'; with: 'Add Comment'.
			]
	].

	self becomeDialog: [ ':input[name=body]' asJQuery focus ].
! !

!String methodsFor: '*Hubboard'!

split: aDelimiter
	"Split the string based on the delimiter into an Array of sub-strings"
	^ <self.split(aDelimiter);>.
! !

