smalltalk.addPackage('Hubboard-Tests', {});
smalltalk.addClass('IssueTileTests', smalltalk.TestCase, ['object'], 'Hubboard-Tests');
smalltalk.addMethod(
unescape('_testParsingProjectFromUrl'),
smalltalk.method({
selector: unescape('testParsingProjectFromUrl'),
category: 'testcases',
fn: function (){
var self=this;
var url=nil;
(url=unescape("https%3A//github.com/rtyler/resin/issues/1"));
(result=smalltalk.send(self['@object'], "_parseUrl_", [url]));
smalltalk.send(self, "_assert_equals_", ["rtyler", smalltalk.send((typeof result == 'undefined' ? nil : result), "_at_", ["owner"])]);
smalltalk.send(self, "_assert_equals_", ["resin", smalltalk.send((typeof result == 'undefined' ? nil : result), "_at_", ["project"])]);
return self;},
args: [],
source: unescape('testParsingProjectFromUrl%0A%09%22Verify%20we%20can%20parse%20the%20html_url%20for%20an%20issue%20into%20the%20owner/project%20pairs%22%0A%09%7C%20url%20%7C%0A%09url%20%3A%3D%20%27https%3A//github.com/rtyler/resin/issues/1%27.%0A%09result%20%3A%3D%20object%20parseUrl%3A%20url.%0A%09self%20assert%3A%20%27rtyler%27%20equals%3A%20%28result%20at%3A%20%27owner%27%29.%0A%09self%20assert%3A%20%27resin%27%20equals%3A%20%28result%20at%3A%20%27project%27%29.%0A%09'),
messageSends: ["parseUrl:", "assert:equals:", "at:"],
referencedClasses: []
}),
smalltalk.IssueTileTests);

smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
category: 'scaffolding',
fn: function (){
var self=this;
(self['@object']=smalltalk.send((smalltalk.IssueTile || IssueTile), "_new", []));
return self;},
args: [],
source: unescape('setUp%0A%09object%20%3A%3D%20IssueTile%20new.'),
messageSends: ["new"],
referencedClasses: ["IssueTile"]
}),
smalltalk.IssueTileTests);



smalltalk.addClass('HubboardAppTests', smalltalk.TestCase, [], 'Hubboard-Tests');
smalltalk.addMethod(
unescape('_testIsInProgressWithNoLabels'),
smalltalk.method({
selector: unescape('testIsInProgressWithNoLabels'),
category: 'testcases',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_inProgress_", [smalltalk.send((smalltalk.Array || Array), "_new", [])]));
smalltalk.send(self, "_assert_equals_", [false, result]);
return self;},
args: [],
source: unescape('testIsInProgressWithNoLabels%0A%09%22Verify%20we%20say%20that%20this%20thing%20is%20not%20in%20progress%20if%20there%20are%20no%20labels%22%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20HubboardApp%20current%20inProgress%3A%20%28Array%20new%29.%0A%09self%20assert%3A%20false%20equals%3A%20result.'),
messageSends: ["inProgress:", "current", "new", "assert:equals:"],
referencedClasses: ["HubboardApp", "Array"]
}),
smalltalk.HubboardAppTests);

smalltalk.addMethod(
unescape('_testIsInProgressWithLabels'),
smalltalk.method({
selector: unescape('testIsInProgressWithLabels'),
category: 'testcases',
fn: function (){
var self=this;
var result=nil;
var mocklabel=nil;
(mocklabel=(function($rec){smalltalk.send($rec, "_at_put_", ["name", unescape("in-progress")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
(result=smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_inProgress_", [(function($rec){smalltalk.send($rec, "_add_", [mocklabel]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_new", []))]));
smalltalk.send(self, "_assert_equals_", [true, result]);
return self;},
args: [],
source: unescape('testIsInProgressWithLabels%0A%09%22Verify%20we%20say%20that%20this%20thing%20is%20not%20in%20progress%20if%20there%20are%20no%20labels%22%0A%09%7C%20result%20mocklabel%20%7C%0A%09mocklabel%20%3A%3D%20Dictionary%20new%20at%3A%20%27name%27%20put%3A%20%27in-progress%27%3B%20yourself.%0A%09result%20%3A%3D%20HubboardApp%20current%20inProgress%3A%20%28Array%20new%20add%3A%20mocklabel%3B%20yourself%29.%0A%09self%20assert%3A%20true%20equals%3A%20result.'),
messageSends: ["at:put:", "yourself", "new", "inProgress:", "current", "add:", "assert:equals:"],
referencedClasses: ["Dictionary", "HubboardApp", "Array"]
}),
smalltalk.HubboardAppTests);



smalltalk.addClass('StringAdditionsTests', smalltalk.TestCase, [], 'Hubboard-Tests');
smalltalk.addMethod(
unescape('_testSpliting'),
smalltalk.method({
selector: unescape('testSpliting'),
category: 'testcases',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(unescape("part1/part2"), "_split_", [unescape("/")]));
smalltalk.send(self, "_assert_equals_", [(2), smalltalk.send(result, "_size", [])]);
smalltalk.send(self, "_assert_equals_", ["part1", smalltalk.send(result, "_at_", [(1)])]);
smalltalk.send(self, "_assert_equals_", ["part2", smalltalk.send(result, "_at_", [(2)])]);
return self;},
args: [],
source: unescape('testSpliting%0A%09%22Verify%20that%20we%20can%20split%20a%20string%20using%20the%20native%20JavaScript%20function%22%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20%27part1/part2%27%20split%3A%20%27/%27.%0A%09self%20assert%3A%202%20equals%3A%20%28result%20size%29.%0A%09self%20assert%3A%20%27part1%27%20equals%3A%20%28result%20at%3A%201%29.%0A%09self%20assert%3A%20%27part2%27%20equals%3A%20%28result%20at%3A%202%29.'),
messageSends: ["split:", "assert:equals:", "size", "at:"],
referencedClasses: []
}),
smalltalk.StringAdditionsTests);



