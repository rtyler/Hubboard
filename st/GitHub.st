Smalltalk current createPackage: 'GitHub' properties: #{}!
Object subclass: #Issues
	instanceVariableNames: 'token authenticated'
	category: 'GitHub'!

!Issues methodsFor: 'not yet classified'!

baseUrl
	"Return the GitHub API url base"
	^ 'https://api.github.com'.
!

setToken: anAccessToken
	"Set the OAuth token we can use"
	token := anAccessToken.
	authenticated := true.
!

apiUrlFor: apiString
	"Return the combined URL with an access token if we have one"
	| url |
	url := '', (self baseUrl), apiString.
	authenticated ifTrue: [ url := '', url, '?access_token=', token ].
	^ url.
!

initialize
	authenticated := false.
	token := nil.
!

issues: aPageCallback loadAll: shouldLoadAll
	"Call aPageCallback with every page of issues loaded from GitHub"
	authenticated ifFalse: [ console log: 'Cannot load issues unless we have an access token'. ^ false ].

	jQuery ajax: (self apiUrlFor: '/issues') options: #{
			'dataType' -> 'jsonp'.
			'success' -> [ :result |
				console log: (result meta).
				console log: (result data).
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

