Smalltalk current createPackage: 'Hubboard-Tests' properties: #{}!
TestCase subclass: #HubboardAppTests
	instanceVariableNames: ''
	category: 'Hubboard-Tests'!

!HubboardAppTests methodsFor: 'not yet classified'!

testIsInProgressWithNoLabels
	"Verify we say that this thing is not in progress if there are no labels"
	| result |
	result := HubboardApp current inProgress: (Array new).
	self assert: false equals: result.
!

testIsInProgressWithLabels
	"Verify we say that this thing is not in progress if there are no labels"
	| result mocklabel |
	mocklabel := Dictionary new at: 'name' put: 'in-progress'; yourself.
	result := HubboardApp current inProgress: (Array new add: mocklabel; yourself).
	self assert: true equals: result.
! !

TestCase subclass: #IssueTileTests
	instanceVariableNames: 'object'
	category: 'Hubboard-Tests'!

!IssueTileTests methodsFor: 'not yet classified'!

testParsingProjectFromUrl
	"Verify we can parse the html_url for an issue into the owner/project pairs"
	| url |
	url := 'https://github.com/rtyler/resin/issues/1'.
	result := object parseUrl: url.
	self assert: 'rtyler' equals: (result at: 'owner').
	self assert: 'resin' equals: (result at: 'project').
!

setUp
	object := IssueTile new.
! !

