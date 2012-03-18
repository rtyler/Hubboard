smalltalk.addPackage('GitHub', {});
smalltalk.addClass('Issues', smalltalk.Object, ['token', 'authenticated'], 'GitHub');
smalltalk.addMethod(
unescape('_baseUrl'),
smalltalk.method({
selector: unescape('baseUrl'),
fn: function (){
var self=this;
return unescape("https%3A//api.github.com");
return self;}
}),
smalltalk.Issues);

smalltalk.addMethod(
unescape('_setToken_'),
smalltalk.method({
selector: unescape('setToken%3A'),
fn: function (anAccessToken){
var self=this;
(self['@token']=anAccessToken);
(self['@authenticated']=true);
return self;}
}),
smalltalk.Issues);

smalltalk.addMethod(
unescape('_apiUrlFor_'),
smalltalk.method({
selector: unescape('apiUrlFor%3A'),
fn: function (apiString){
var self=this;
var url=nil;
(url=smalltalk.send(smalltalk.send("", "__comma", [smalltalk.send(self, "_baseUrl", [])]), "__comma", [apiString]));
((($receiver = self['@authenticated']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (url=smalltalk.send(smalltalk.send(smalltalk.send("", "__comma", [url]), "__comma", [unescape("%3Faccess_token%3D")]), "__comma", [self['@token']]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (url=smalltalk.send(smalltalk.send(smalltalk.send("", "__comma", [url]), "__comma", [unescape("%3Faccess_token%3D")]), "__comma", [self['@token']]));})]));
return url;
return self;}
}),
smalltalk.Issues);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@authenticated']=false);
(self['@token']=nil);
return self;}
}),
smalltalk.Issues);

smalltalk.addMethod(
unescape('_issues_loadAll_'),
smalltalk.method({
selector: unescape('issues%3AloadAll%3A'),
fn: function (aPageCallback, shouldLoadAll){
var self=this;
try{((($receiver = self['@authenticated']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load issues unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_issues_loadAll_', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load issues unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_issues_loadAll_', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(self, "_apiUrlFor_", [unescape("/issues")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(result){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(result, "_meta", [])]);smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(result, "_data", [])]);return smalltalk.send(aPageCallback, "_value_", [smalltalk.send(result, "_data", [])]);})])])]);
(function(){throw({name: 'stReturn', selector: '_issues_loadAll_', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_issues_loadAll_'){return e.fn()} throw(e)}}
}),
smalltalk.Issues);



