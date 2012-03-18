smalltalk.addPackage('GitHub', {});
smalltalk.addClass('Issues', smalltalk.Object, ['token', 'authenticated'], 'GitHub');
smalltalk.addMethod(
unescape('_baseUrl'),
smalltalk.method({
selector: unescape('baseUrl'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("https%3A//api.github.com");
return self;},
args: [],
source: unescape('baseUrl%0A%09%22Return%20the%20GitHub%20API%20url%20base%22%0A%09%5E%20%27https%3A//api.github.com%27.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Issues);

smalltalk.addMethod(
unescape('_setToken_'),
smalltalk.method({
selector: unescape('setToken%3A'),
category: 'not yet classified',
fn: function (anAccessToken){
var self=this;
(self['@token']=anAccessToken);
(self['@authenticated']=true);
return self;},
args: ["anAccessToken"],
source: unescape('setToken%3A%20anAccessToken%0A%09%22Set%20the%20OAuth%20token%20we%20can%20use%22%0A%09token%20%3A%3D%20anAccessToken.%0A%09authenticated%20%3A%3D%20true.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Issues);

smalltalk.addMethod(
unescape('_apiUrlFor_'),
smalltalk.method({
selector: unescape('apiUrlFor%3A'),
category: 'not yet classified',
fn: function (apiString){
var self=this;
var url=nil;
(url=smalltalk.send(smalltalk.send("", "__comma", [smalltalk.send(self, "_baseUrl", [])]), "__comma", [apiString]));
((($receiver = self['@authenticated']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (url=smalltalk.send(smalltalk.send(smalltalk.send("", "__comma", [url]), "__comma", [unescape("%3Faccess_token%3D")]), "__comma", [self['@token']]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (url=smalltalk.send(smalltalk.send(smalltalk.send("", "__comma", [url]), "__comma", [unescape("%3Faccess_token%3D")]), "__comma", [self['@token']]));})]));
return url;
return self;},
args: ["apiString"],
source: unescape('apiUrlFor%3A%20apiString%0A%09%22Return%20the%20combined%20URL%20with%20an%20access%20token%20if%20we%20have%20one%22%0A%09%7C%20url%20%7C%0A%09url%20%3A%3D%20%27%27%2C%20%28self%20baseUrl%29%2C%20apiString.%0A%09authenticated%20ifTrue%3A%20%5B%20url%20%3A%3D%20%27%27%2C%20url%2C%20%27%3Faccess_token%3D%27%2C%20token%20%5D.%0A%09%5E%20url.'),
messageSends: [unescape("%2C"), "baseUrl", "ifTrue:"],
referencedClasses: []
}),
smalltalk.Issues);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function (){
var self=this;
(self['@authenticated']=false);
(self['@token']=nil);
return self;},
args: [],
source: unescape('initialize%0A%09authenticated%20%3A%3D%20false.%0A%09token%20%3A%3D%20nil.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Issues);

smalltalk.addMethod(
unescape('_issues_loadAll_'),
smalltalk.method({
selector: unescape('issues%3AloadAll%3A'),
category: 'not yet classified',
fn: function (aPageCallback, shouldLoadAll){
var self=this;
try{((($receiver = self['@authenticated']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load issues unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_issues_loadAll_', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load issues unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_issues_loadAll_', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(self, "_apiUrlFor_", [unescape("/issues")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(result){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(result, "_meta", [])]);smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(result, "_data", [])]);return smalltalk.send(aPageCallback, "_value_", [smalltalk.send(result, "_data", [])]);})])])]);
(function(){throw({name: 'stReturn', selector: '_issues_loadAll_', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_issues_loadAll_'){return e.fn()} throw(e)}},
args: ["aPageCallback", "shouldLoadAll"],
source: unescape('issues%3A%20aPageCallback%20loadAll%3A%20shouldLoadAll%0A%09%22Call%20aPageCallback%20with%20every%20page%20of%20issues%20loaded%20from%20GitHub%22%0A%09authenticated%20ifFalse%3A%20%5B%20console%20log%3A%20%27Cannot%20load%20issues%20unless%20we%20have%20an%20access%20token%27.%20%5E%20false%20%5D.%0A%0A%09jQuery%20ajax%3A%20%28self%20apiUrlFor%3A%20%27/issues%27%29%20options%3A%20%23%7B%0A%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%27success%27%20-%3E%20%5B%20%3Aresult%20%7C%0A%09%09%09%09console%20log%3A%20%28result%20meta%29.%0A%09%09%09%09console%20log%3A%20%28result%20data%29.%0A%09%09%09%09aPageCallback%20value%3A%20%28result%20data%29.%0A%09%09%09%5D%0A%09%7D.%0A%09%5E%20true.%20'),
messageSends: ["ifFalse:", "log:", "ajax:options:", "apiUrlFor:", unescape("-%3E"), "meta", "data", "value:"],
referencedClasses: []
}),
smalltalk.Issues);

smalltalk.addMethod(
unescape('_recentlyClosed_loadAll_'),
smalltalk.method({
selector: unescape('recentlyClosed%3AloadAll%3A'),
category: 'not yet classified',
fn: function (aPageCallback, shouldLoadAll){
var self=this;
try{((($receiver = self['@authenticated']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load issues unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_recentlyClosed_loadAll_', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load issues unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_recentlyClosed_loadAll_', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(self, "_apiUrlFor_", [unescape("/issues")]), "__comma", [unescape("%26state%3Dclosed%26per_page%3D10")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(result){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(result, "_meta", [])]);smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(result, "_data", [])]);return smalltalk.send(aPageCallback, "_value_", [smalltalk.send(result, "_data", [])]);})])])]);
(function(){throw({name: 'stReturn', selector: '_recentlyClosed_loadAll_', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_recentlyClosed_loadAll_'){return e.fn()} throw(e)}},
args: ["aPageCallback", "shouldLoadAll"],
source: unescape('recentlyClosed%3A%20aPageCallback%20loadAll%3A%20shouldLoadAll%0A%09%22Call%20aPageCallback%20with%20pages%20of%20issues%20that%20have%20been%20closed%20in%20the%20last%20week%20%22%0A%09authenticated%20ifFalse%3A%20%5B%20console%20log%3A%20%27Cannot%20load%20issues%20unless%20we%20have%20an%20access%20token%27.%20%5E%20false%20%5D.%0A%0A%09jQuery%20ajax%3A%20%28%28self%20apiUrlFor%3A%20%27/issues%27%29%2C%20%27%26state%3Dclosed%26per_page%3D10%27%29%20options%3A%20%23%7B%0A%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%27success%27%20-%3E%20%5B%20%3Aresult%20%7C%0A%09%09%09%09console%20log%3A%20%28result%20meta%29.%0A%09%09%09%09console%20log%3A%20%28result%20data%29.%0A%09%09%09%09aPageCallback%20value%3A%20%28result%20data%29.%0A%09%09%09%5D%0A%09%7D.%0A%09%5E%20true.%20'),
messageSends: ["ifFalse:", "log:", "ajax:options:", unescape("%2C"), "apiUrlFor:", unescape("-%3E"), "meta", "data", "value:"],
referencedClasses: []
}),
smalltalk.Issues);



