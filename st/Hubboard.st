Smalltalk current createPackage: 'Hubboard' properties: #{}!
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
		class: ('issuetile issuetile_', issueId asString);
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
! !

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
!

inProgress: arrayOfLabels
	"Return true if we find the 'in-progress' label"
	arrayOfLabels ifNil: [ ^ false ].

	arrayOfLabels do: [ :label |
		(label at: 'name') = 'in-progress' ifTrue: [ ^ true ].
	].
	^ false.
! !

HubboardApp class instanceVariableNames: 'current'!

!HubboardApp class methodsFor: 'not yet classified'!

current
	^ current ifNil: [ current := super new ].
! !

