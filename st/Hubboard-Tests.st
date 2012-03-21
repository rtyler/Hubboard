Smalltalk current createPackage: 'Hubboard-Tests' properties: #{}!
TestCase subclass: #IssueTileTests
	instanceVariableNames: 'object'
	category: 'Hubboard-Tests'!

!IssueTileTests methodsFor: 'scaffolding'!

setUp
	object := IssueTile new.
! !

!IssueTileTests methodsFor: 'testcases'!

testParsingProjectFromUrl
	"Verify we can parse the html_url for an issue into the owner/project pairs"
	| url |
	url := 'https://github.com/rtyler/resin/issues/1'.
	result := object parseUrl: url.
	self assert: 'rtyler' equals: (result at: 'owner').
	self assert: 'resin' equals: (result at: 'project').
! !

TestCase subclass: #HubboardAppTests
	instanceVariableNames: ''
	category: 'Hubboard-Tests'!

!HubboardAppTests methodsFor: 'testcases'!

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

TestCase subclass: #StringAdditionsTests
	instanceVariableNames: ''
	category: 'Hubboard-Tests'!

!StringAdditionsTests methodsFor: 'testcases'!

testSpliting
	"Verify that we can split a string using the native JavaScript function"
	| result |
	result := 'part1/part2' split: '/'.
	self assert: 2 equals: (result size).
	self assert: 'part1' equals: (result at: 1).
	self assert: 'part2' equals: (result at: 2).
! !

