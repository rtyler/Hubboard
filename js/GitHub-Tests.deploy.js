smalltalk.addPackage('GitHub-Tests', {});
smalltalk.addClass('IssuesTests', smalltalk.TestCase, ['object'], 'GitHub-Tests');
smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
fn: function (){
var self=this;
(self['@object']=smalltalk.send((smalltalk.Issues || Issues), "_new", []));
return self;}
}),
smalltalk.IssuesTests);

smalltalk.addMethod(
unescape('_testApiUrlWithNoToken'),
smalltalk.method({
selector: unescape('testApiUrlWithNoToken'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self['@object'], "_apiUrlFor_", [unescape("/issues")]));
smalltalk.send(self, "_assert_equals_", [unescape("https%3A//api.github.com/issues"), result]);
return self;}
}),
smalltalk.IssuesTests);

smalltalk.addMethod(
unescape('_testApiUrlWithAToken'),
smalltalk.method({
selector: unescape('testApiUrlWithAToken'),
fn: function (){
var self=this;
var result=nil;
smalltalk.send(self['@object'], "_setToken_", ["deadbeef"]);
(result=smalltalk.send(self['@object'], "_apiUrlFor_", [unescape("/issues")]));
smalltalk.send(self, "_assert_equals_", [unescape("https%3A//api.github.com/issues%3Faccess_token%3Ddeadbeef"), result]);
return self;}
}),
smalltalk.IssuesTests);



