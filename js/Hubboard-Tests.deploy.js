smalltalk.addPackage('Hubboard-Tests', {});
smalltalk.addClass('HubboardAppTests', smalltalk.TestCase, [], 'Hubboard-Tests');
smalltalk.addMethod(
unescape('_testIsInProgressWithNoLabels'),
smalltalk.method({
selector: unescape('testIsInProgressWithNoLabels'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_inProgress_", [smalltalk.send((smalltalk.Array || Array), "_new", [])]));
smalltalk.send(self, "_assert_equals_", [false, result]);
return self;}
}),
smalltalk.HubboardAppTests);

smalltalk.addMethod(
unescape('_testIsInProgressWithLabels'),
smalltalk.method({
selector: unescape('testIsInProgressWithLabels'),
fn: function (){
var self=this;
var result=nil;
var mocklabel=nil;
(mocklabel=(function($rec){smalltalk.send($rec, "_at_put_", ["name", unescape("in-progress")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
(result=smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_inProgress_", [(function($rec){smalltalk.send($rec, "_add_", [mocklabel]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Array || Array), "_new", []))]));
smalltalk.send(self, "_assert_equals_", [true, result]);
return self;}
}),
smalltalk.HubboardAppTests);



smalltalk.addClass('IssueTileTests', smalltalk.TestCase, ['object'], 'Hubboard-Tests');
smalltalk.addMethod(
unescape('_testParsingProjectFromUrl'),
smalltalk.method({
selector: unescape('testParsingProjectFromUrl'),
fn: function (){
var self=this;
var url=nil;
(url=unescape("https%3A//github.com/rtyler/resin/issues/1"));
(result=smalltalk.send(self['@object'], "_parseUrl_", [url]));
smalltalk.send(self, "_assert_equals_", ["rtyler", smalltalk.send((typeof result == 'undefined' ? nil : result), "_at_", ["owner"])]);
smalltalk.send(self, "_assert_equals_", ["resin", smalltalk.send((typeof result == 'undefined' ? nil : result), "_at_", ["project"])]);
return self;}
}),
smalltalk.IssueTileTests);

smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
fn: function (){
var self=this;
(self['@object']=smalltalk.send((smalltalk.IssueTile || IssueTile), "_new", []));
return self;}
}),
smalltalk.IssueTileTests);



