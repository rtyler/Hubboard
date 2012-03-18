smalltalk.addPackage('Hubboard', {});
smalltalk.addClass('IssueTile', smalltalk.Widget, ['raw', 'title', 'body', 'issueId', 'number', 'project', 'projectOwner', 'issueStatus'], 'Hubboard');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
var numberClass=nil;
(numberClass="number");
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("open")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" open"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" open"]));})]));
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("inprogress")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" inprogress"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" inprogress"]));})]));
(function($rec){smalltalk.send($rec, "_class_", [smalltalk.send("issuetile issuetile_", "__comma", [smalltalk.send(self['@issueId'], "_asString", [])])]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [numberClass]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(self['@raw'], "_at_", ["html_url"])]);smalltalk.send($rec, "_target_", ["_blank"]);return smalltalk.send($rec, "_with_", [smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self['@number'], "_asString", [])])]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [" in "]);(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//github.com/"), "__comma", [self['@projectOwner']])]);return smalltalk.send($rec, "_with_", [self['@projectOwner']]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [unescape("/")]);return (function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("https%3A//github.com/"), "__comma", [self['@projectOwner']]), "__comma", [unescape("/")]), "__comma", [self['@project']])]);return smalltalk.send($rec, "_with_", [self['@project']]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));(function($rec){smalltalk.send($rec, "_class_", ["title"]);return smalltalk.send($rec, "_with_", [self['@title']]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_br", []);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%7C%20numberClass%20%7C%0A%09numberClass%20%3A%3D%20%27number%27.%0A%0A%09issueStatus%20%3D%20%23open%20ifTrue%3A%20%5B%20numberClass%20%3A%3D%20numberClass%2C%20%27%20open%27%20%5D.%20%0A%09issueStatus%20%3D%20%23inprogress%20ifTrue%3A%20%5B%20numberClass%20%3A%3D%20numberClass%2C%20%27%20inprogress%27%20%5D.%20%0A%0A%09html%20div%0A%09%09class%3A%20%28%27issuetile%20issuetile_%27%2C%20issueId%20asString%29%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20numberClass%3B%0A%09%09%09%09with%3A%20%5B%20%0A%09%09%09%09%09html%20a%20href%3A%20%28raw%20at%3A%20%27html_url%27%29%3B%20target%3A%20%27_blank%27%3B%20with%3A%20%28%27%23%27%2C%20number%20asString%29.%0A%09%09%09%09%09html%20with%3A%20%27%20in%20%27.%0A%09%09%09%09%09html%20a%20href%3A%20%28%27https%3A//github.com/%27%2C%20projectOwner%29%3B%20with%3A%20projectOwner.%0A%09%09%09%09%09html%20with%3A%20%27/%27.%0A%09%09%09%09%09html%20%20a%20href%3A%20%28%27https%3A//github.com/%27%2C%20projectOwner%2C%20%27/%27%2C%20project%29%3B%20with%3A%20project.%0A%09%09%09%09%5D.%0A%09%09%09html%20span%20class%3A%20%27title%27%3B%20with%3A%20title.%0A%09%09%09html%20br.%0A%09%09%5D.'),
messageSends: ["ifTrue:", unescape("%3D"), unescape("%2C"), "class:", "asString", "with:", "href:", "at:", "target:", "a", "div", "span", "br"],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_withData_'),
smalltalk.method({
selector: unescape('withData%3A'),
category: 'not yet classified',
fn: function (dataHash){
var self=this;
var issueInfo=nil;
(self['@raw']=dataHash);
(self['@issueId']=smalltalk.send(dataHash, "_at_", ["id"]));
(self['@number']=smalltalk.send(dataHash, "_at_", ["number"]));
(self['@title']=smalltalk.send(dataHash, "_at_", ["title"]));
(self['@body']=smalltalk.send(dataHash, "_at_", ["body"]));
(issueInfo=smalltalk.send(self, "_parseUrl_", [smalltalk.send(dataHash, "_at_", ["html_url"])]));
(self['@project']=smalltalk.send(issueInfo, "_at_", ["project"]));
(self['@projectOwner']=smalltalk.send(issueInfo, "_at_", ["owner"]));
return self;},
args: ["dataHash"],
source: unescape('withData%3A%20dataHash%0A%09%22Set%20up%20a%20the%20tile%20with%20data%20from%20the%20GitHub%20API%22%0A%09%7C%20issueInfo%20%7C%0A%09raw%20%3A%3D%20dataHash.%0A%09issueId%20%3A%3D%20dataHash%20at%3A%20%27id%27.%0A%09number%20%3A%3D%20dataHash%20at%3A%20%27number%27.%0A%09title%20%3A%3D%20dataHash%20at%3A%20%27title%27.%0A%09body%20%3A%3D%20dataHash%20at%3A%20%27body%27.%0A%0A%09issueInfo%20%3A%3D%20self%20parseUrl%3A%20%28dataHash%20at%3A%20%27html_url%27%29.%0A%09project%20%3A%3D%20issueInfo%20at%3A%20%27project%27.%0A%09projectOwner%20%3A%3D%20issueInfo%20at%3A%20%27owner%27.'),
messageSends: ["at:", "parseUrl:"],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_parseUrl_'),
smalltalk.method({
selector: unescape('parseUrl%3A'),
category: 'not yet classified',
fn: function (aUrl){
var self=this;
var parts=nil;
(parts=aUrl.split('/'));
return smalltalk.HashedCollection._fromPairs_([smalltalk.send("owner", "__minus_gt", [smalltalk.send(parts, "_at_", [(4)])]),smalltalk.send("project", "__minus_gt", [smalltalk.send(parts, "_at_", [(5)])])]);
return self;},
args: ["aUrl"],
source: unescape('parseUrl%3A%20aUrl%0A%09%22Return%20a%20Hash%20with%20the%20%27owner%27%20and%20%27project%27%20based%20on%20the%20given%20Issue%20URL%22%0A%09%7C%20parts%20%7C%0A%09parts%20%3A%3D%20%3CaUrl.split%28%27/%27%29%3E.%0A%09%0A%09%5E%20%23%7B%27owner%27%20-%3E%20%28parts%20at%3A%204%29.%0A%09%09%27project%27%20-%3E%20%28parts%20at%3A%205%29%7D.'),
messageSends: [unescape("-%3E"), "at:"],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_setOpen'),
smalltalk.method({
selector: unescape('setOpen'),
category: 'not yet classified',
fn: function (){
var self=this;
(self['@issueStatus']=smalltalk.symbolFor("open"));
return self;},
args: [],
source: unescape('setOpen%0A%09%22Set%20this%20issue%20as%20an%20open%20issue%22%0A%09issueStatus%20%3A%3D%20%23open.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_setInProgress'),
smalltalk.method({
selector: unescape('setInProgress'),
category: 'not yet classified',
fn: function (){
var self=this;
(self['@issueStatus']=smalltalk.symbolFor("inprogress"));
return self;},
args: [],
source: unescape('setInProgress%0A%09%22Set%20this%20issue%20as%20an%20inprogress%20issue%22%0A%09issueStatus%20%3A%3D%20%23inprogress.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IssueTile);



smalltalk.addClass('HubboardApp', smalltalk.Object, ['token'], 'Hubboard');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function (){
var self=this;
(self['@token']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", ["github_access_token"]));
return self;},
args: [],
source: unescape('initialize%0A%09token%20%3A%3D%20window%20at%3A%20%27github_access_token%27.'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_bootstrap'),
smalltalk.method({
selector: unescape('bootstrap'),
category: 'not yet classified',
fn: function (){
var self=this;
var api=nil;
(api=smalltalk.send(smalltalk.send((smalltalk.Issues || Issues), "_new", []), "_setToken_", [self['@token']]));
smalltalk.send(api, "_issues_loadAll_", [(function(issues){return smalltalk.send(issues, "_do_", [(function(issue){var tile=nil;
(tile=smalltalk.send(smalltalk.send((smalltalk.IssueTile || IssueTile), "_new", []), "_withData_", [issue]));return ((($receiver = smalltalk.send(self, "_inProgress_", [smalltalk.send(issue, "_at_", ["labels"])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(tile, "_setOpen", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23openissues"), "_asJQuery", [])]);})() : (function(){smalltalk.send(tile, "_setInProgress", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", [])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(tile, "_setOpen", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23openissues"), "_asJQuery", [])]);}), (function(){smalltalk.send(tile, "_setInProgress", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", [])]);})]));})]);}), false]);
return self;},
args: [],
source: unescape('bootstrap%0A%09%7C%20api%20%7C%0A%09api%20%3A%3D%20Issues%20new%20setToken%3A%20token.%0A%09api%20issues%3A%20%5B%20%3Aissues%20%7C%0A%09issues%20do%3A%20%5B%20%3Aissue%20%7C%0A%09%09%09%7C%20tile%20%7C%0A%09%09%09tile%20%3A%3D%20IssueTile%20new%20withData%3A%20issue.%0A%09%09%09%28self%20inProgress%3A%20%28issue%20at%3A%20%27labels%27%29%29%0A%09%09%09%09%09ifFalse%3A%20%5B%20tile%20setOpen.%20tile%20appendToJQuery%3A%20%28%27%23openissues%27%20asJQuery%29%20%5D%0A%09%09%09%09%09ifTrue%3A%20%5B%20tile%20setInProgress.%20tile%20appendToJQuery%3A%20%28%27%23inprogressissues%27%20asJQuery%29%20%5D%0A%09%5D%5D%20loadAll%3A%20false.'),
messageSends: ["setToken:", "new", "issues:loadAll:", "do:", "withData:", "ifFalse:ifTrue:", "inProgress:", "at:", "setOpen", "appendToJQuery:", "asJQuery", "setInProgress"],
referencedClasses: ["Issues", "IssueTile"]
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_inProgress_'),
smalltalk.method({
selector: unescape('inProgress%3A'),
category: 'not yet classified',
fn: function (arrayOfLabels){
var self=this;
try{(($receiver = arrayOfLabels) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_inProgress_', fn: function(){return false}})})();})() : $receiver;
smalltalk.send(arrayOfLabels, "_do_", [(function(label){return ((($receiver = smalltalk.send(smalltalk.send(label, "_at_", ["name"]), "__eq", [unescape("in-progress")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_inProgress_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_inProgress_', fn: function(){return true}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_inProgress_', fn: function(){return false}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_inProgress_'){return e.fn()} throw(e)}},
args: ["arrayOfLabels"],
source: unescape('inProgress%3A%20arrayOfLabels%0A%09%22Return%20true%20if%20we%20find%20the%20%27in-progress%27%20label%22%0A%09arrayOfLabels%20ifNil%3A%20%5B%20%5E%20false%20%5D.%0A%0A%09arrayOfLabels%20do%3A%20%5B%20%3Alabel%20%7C%0A%09%09%28label%20at%3A%20%27name%27%29%20%3D%20%27in-progress%27%20ifTrue%3A%20%5B%20%5E%20true%20%5D.%0A%09%5D.%0A%09%5E%20false.'),
messageSends: ["ifNil:", "do:", "ifTrue:", unescape("%3D"), "at:"],
referencedClasses: []
}),
smalltalk.HubboardApp);


smalltalk.HubboardApp.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'not yet classified',
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", [], smalltalk.Object.klass));})() : $receiver;
return self;},
args: [],
source: unescape('current%0A%09%5E%20current%20ifNil%3A%20%5B%20current%20%3A%3D%20super%20new%20%5D.'),
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.HubboardApp.klass);


