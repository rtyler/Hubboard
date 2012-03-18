smalltalk.addPackage('GitHub-Tests', {});
smalltalk.addClass('IssuesTests', smalltalk.TestCase, ['object'], 'GitHub-Tests');
smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
category: 'not yet classified',
fn: function (){
var self=this;
(self['@object']=smalltalk.send((smalltalk.Issues || Issues), "_new", []));
return self;},
args: [],
source: unescape('setUp%0A%09object%20%3A%3D%20Issues%20new.'),
messageSends: ["new"],
referencedClasses: ["Issues"]
}),
smalltalk.IssuesTests);

smalltalk.addMethod(
unescape('_testApiUrlWithNoToken'),
smalltalk.method({
selector: unescape('testApiUrlWithNoToken'),
category: 'not yet classified',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self['@object'], "_apiUrlFor_", [unescape("/issues")]));
smalltalk.send(self, "_assert_equals_", [unescape("https%3A//api.github.com/issues"), result]);
return self;},
args: [],
source: unescape('testApiUrlWithNoToken%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20object%20apiUrlFor%3A%20%27/issues%27.%0A%09self%20assert%3A%20%27https%3A//api.github.com/issues%27%20equals%3A%20result.'),
messageSends: ["apiUrlFor:", "assert:equals:"],
referencedClasses: []
}),
smalltalk.IssuesTests);

smalltalk.addMethod(
unescape('_testApiUrlWithAToken'),
smalltalk.method({
selector: unescape('testApiUrlWithAToken'),
category: 'not yet classified',
fn: function (){
var self=this;
var result=nil;
smalltalk.send(self['@object'], "_setToken_", ["deadbeef"]);
(result=smalltalk.send(self['@object'], "_apiUrlFor_", [unescape("/issues")]));
smalltalk.send(self, "_assert_equals_", [unescape("https%3A//api.github.com/issues%3Faccess_token%3Ddeadbeef"), result]);
return self;},
args: [],
source: unescape('testApiUrlWithAToken%0A%09%7C%20result%20%7C%0A%09object%20setToken%3A%20%27deadbeef%27.%0A%09result%20%3A%3D%20object%20apiUrlFor%3A%20%27/issues%27.%0A%09self%20assert%3A%20%27https%3A//api.github.com/issues%3Faccess_token%3Ddeadbeef%27%20equals%3A%20result.'),
messageSends: ["setToken:", "apiUrlFor:", "assert:equals:"],
referencedClasses: []
}),
smalltalk.IssuesTests);



