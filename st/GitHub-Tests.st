Smalltalk current createPackage: 'GitHub-Tests' properties: #{}!
TestCase subclass: #IssuesTests
	instanceVariableNames: 'object'
	category: 'GitHub-Tests'!

!IssuesTests methodsFor: 'not yet classified'!

setUp
	object := Issues new.
!

testApiUrlWithNoToken
	| result |
	result := object apiUrlFor: '/issues'.
	self assert: 'https://api.github.com/issues' equals: result.
!

testApiUrlWithAToken
	| result |
	object setToken: 'deadbeef'.
	result := object apiUrlFor: '/issues'.
	self assert: 'https://api.github.com/issues?access_token=deadbeef' equals: result.
! !

