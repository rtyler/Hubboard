Smalltalk current createPackage: 'GitHub' properties: #{}!
Object subclass: #APIBase
	instanceVariableNames: 'token authenticated'
	category: 'GitHub'!

!APIBase methodsFor: 'not yet classified'!

baseUrl
	"Return the GitHub API url base"
	^ 'https://api.github.com'.
!

setToken: anAccessToken
	"Set the OAuth token we can use"
	token := anAccessToken.
	authenticated := true.
!

initialize
	authenticated := false.
	token := nil.
!

apiUrlFor: apiString
	"Return the combined URL with an access token if we have one"
	| url |
	url := '', (self baseUrl), apiString.
	authenticated ifTrue: [ url := '', url, '?access_token=', token ].
	^ url.
! !

APIBase subclass: #Users
	instanceVariableNames: ''
	category: 'GitHub'!

!Users methodsFor: 'not yet classified'!

fetchCurrent: andCallback
	"Fetch info about the current authenticated user"
	authenticated ifFalse: [ console log: 'Cannot load user information unless we have an access token'. ^ false ].

	jQuery ajax: (self apiUrlFor: '/user') options: #{
			'dataType' -> 'jsonp'.
			'success' -> [ :result |
				andCallback value: (result data) ]}.
	^ true.
! !

APIBase subclass: #Issues
	instanceVariableNames: ''
	category: 'GitHub'!

!Issues methodsFor: 'not yet classified'!

issues: aPageCallback loadAll: shouldLoadAll
	"Call aPageCallback with every page of issues loaded from GitHub"
	authenticated ifFalse: [ console log: 'Cannot load issues unless we have an access token'. ^ false ].

	jQuery ajax: (self apiUrlFor: '/issues') options: #{
			'dataType' -> 'jsonp'.
			'success' -> [ :result |
				aPageCallback value: (result data).
			]
	}.
	^ true.
!

recentlyClosed: aPageCallback loadAll: shouldLoadAll
	"Call aPageCallback with pages of issues that have been closed in the last week "
	authenticated ifFalse: [ console log: 'Cannot load issues unless we have an access token'. ^ false ].

	jQuery ajax: ((self apiUrlFor: '/issues'), '&state=closed&per_page=15') options: #{
			'dataType' -> 'jsonp'.
			'success' -> [ :result |
				console log: (result meta).
				console log: (result data).
				aPageCallback value: (result data).
			]
	}.
	^ true.
! !

