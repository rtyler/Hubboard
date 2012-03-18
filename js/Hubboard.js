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
(function($rec){smalltalk.send($rec, "_class_", ["issuetile"]);smalltalk.send($rec, "_id_", [smalltalk.send(self, "_elementId", [])]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [numberClass]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(self['@raw'], "_at_", ["html_url"])]);smalltalk.send($rec, "_target_", ["_blank"]);return smalltalk.send($rec, "_with_", [smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self['@number'], "_asString", [])])]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [" in "]);(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//github.com/"), "__comma", [self['@projectOwner']])]);return smalltalk.send($rec, "_with_", [self['@projectOwner']]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [unescape("/")]);return (function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("https%3A//github.com/"), "__comma", [self['@projectOwner']]), "__comma", [unescape("/")]), "__comma", [self['@project']])]);return smalltalk.send($rec, "_with_", [self['@project']]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));(function($rec){smalltalk.send($rec, "_class_", ["title"]);return smalltalk.send($rec, "_with_", [self['@title']]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_br", []);})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("zIndex", "__minus_gt", ["10000"]),smalltalk.send("snap", "__minus_gt", [true])])]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%7C%20numberClass%20%7C%0A%09numberClass%20%3A%3D%20%27number%27.%0A%0A%09issueStatus%20%3D%20%23open%20ifTrue%3A%20%5B%20numberClass%20%3A%3D%20numberClass%2C%20%27%20open%27%20%5D.%20%0A%09issueStatus%20%3D%20%23inprogress%20ifTrue%3A%20%5B%20numberClass%20%3A%3D%20numberClass%2C%20%27%20inprogress%27%20%5D.%20%0A%0A%09html%20div%0A%09%09class%3A%20%27issuetile%27%3B%0A%09%09id%3A%20self%20elementId%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20numberClass%3B%0A%09%09%09%09with%3A%20%5B%20%0A%09%09%09%09%09html%20a%20href%3A%20%28raw%20at%3A%20%27html_url%27%29%3B%20target%3A%20%27_blank%27%3B%20with%3A%20%28%27%23%27%2C%20number%20asString%29.%0A%09%09%09%09%09html%20with%3A%20%27%20in%20%27.%0A%09%09%09%09%09html%20a%20href%3A%20%28%27https%3A//github.com/%27%2C%20projectOwner%29%3B%20with%3A%20projectOwner.%0A%09%09%09%09%09html%20with%3A%20%27/%27.%0A%09%09%09%09%09html%20%20a%20href%3A%20%28%27https%3A//github.com/%27%2C%20projectOwner%2C%20%27/%27%2C%20project%29%3B%20with%3A%20project.%0A%09%09%09%09%5D.%0A%09%09%09html%20span%20class%3A%20%27title%27%3B%20with%3A%20title.%0A%09%09%09html%20br.%0A%09%09%5D.%0A%0A%09%22After%20we%20render%2C%20we%20should%20probably%20make%20this%20sucker%20draggable%22%0A%09self%20asJQuery%20draggable%3A%20%23%7B%27zIndex%27%20-%3E%20%2710000%27.%20%27snap%27%20-%3E%20true%20%7D.'),
messageSends: ["ifTrue:", unescape("%3D"), unescape("%2C"), "class:", "id:", "elementId", "with:", "href:", "at:", "target:", "asString", "a", "div", "span", "br", "draggable:", "asJQuery", unescape("-%3E")],
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

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "_asJQuery", []);
return self;},
args: [],
source: unescape('asJQuery%0A%09%5E%20%28%27%23%27%2C%20self%20elementId%29%20asJQuery.'),
messageSends: ["asJQuery", unescape("%2C"), "elementId"],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_elementId'),
smalltalk.method({
selector: unescape('elementId'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send("issuetile_", "__comma", [smalltalk.send(self['@issueId'], "_asString", [])]);
return self;},
args: [],
source: unescape('elementId%0A%09%5E%20%27issuetile_%27%2C%20issueId%20asString.'),
messageSends: [unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_moveTo_'),
smalltalk.method({
selector: unescape('moveTo%3A'),
category: 'not yet classified',
fn: function (aColumnId){
var self=this;
try{((($receiver = smalltalk.send(aColumnId, "__eq", ["inprogressissues"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("/repos/"), "__comma", [self['@projectOwner']]), "__comma", [unescape("/")]), "__comma", [self['@project']]), "__comma", [unescape("/issues/")]), "__comma", [self['@number']]), "__comma", [unescape("/labels")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [unescape("in-progress")]),smalltalk.send("success", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["win"]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["fail"]);})])])]);return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("/repos/"), "__comma", [self['@projectOwner']]), "__comma", [unescape("/")]), "__comma", [self['@project']]), "__comma", [unescape("/issues/")]), "__comma", [self['@number']]), "__comma", [unescape("/labels")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [unescape("in-progress")]),smalltalk.send("success", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["win"]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["fail"]);})])])]);return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})]));
((($receiver = smalltalk.send(aColumnId, "__eq", ["openissues"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})]));
((($receiver = smalltalk.send(aColumnId, "__eq", ["closedissues"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_moveTo_'){return e.fn()} throw(e)}},
args: ["aColumnId"],
source: unescape('moveTo%3A%20aColumnId%0A%09%22Handle%20the%20invocation%20of%20the%20right%20callbacks%20when%20we%20move%20from%20one%20column%20to%20another%0A%09%20The%20lines%20blur%20a%20bit%20here%20on%20%27view%27%20versus%20%27controller%27%22%0A%0A%09aColumnId%20%3D%20%27inprogressissues%27%20ifTrue%3A%20%5B%0A%09%09jQuery%20ajax%3A%20%28%27/repos/%27%2C%20projectOwner%2C%20%27/%27%2C%20project%2C%20%27/issues/%27%2C%20number%2C%20%27/labels%27%29%0A%09%09%09%09options%3A%20%23%7B%0A%09%09%09%09%09%27type%27%20-%3E%20%27POST%27.%0A%09%09%09%09%09%27dataType%27%20-%3E%20%27json%27.%0A%09%09%09%09%09%27data%27%20-%3E%20%27in-progress%27.%0A%09%09%09%09%09%27success%27%20-%3E%20%5B%20console%20log%3A%20%27win%27%20%5D.%0A%09%09%09%09%09%27error%27%20-%3E%20%5B%20console%20log%3A%20%27fail%27%5D%0A%09%09%09%09%09%7D.%0A%09%09%5E%20true.%0A%09%5D.%0A%0A%09aColumnId%20%3D%20%27openissues%27%20ifTrue%3A%20%5B%0A%09%09%5E%20%20true.%0A%09%5D.%0A%0A%09aColumnId%20%3D%20%27closedissues%27%20ifTrue%3A%20%5B%0A%09%09%5E%20true.%0A%09%5D.'),
messageSends: ["ifTrue:", unescape("%3D"), "ajax:options:", unescape("%2C"), unescape("-%3E"), "log:"],
referencedClasses: []
}),
smalltalk.IssueTile);



smalltalk.addClass('HubboardApp', smalltalk.Object, ['token', 'issueMap'], 'Hubboard');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function (){
var self=this;
(self['@token']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", ["github_access_token"]));
(self['@issueMap']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('initialize%0A%09token%20%3A%3D%20window%20at%3A%20%27github_access_token%27.%0A%09issueMap%20%3A%3D%20Dictionary%20new.'),
messageSends: ["at:", "new"],
referencedClasses: ["Dictionary"]
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
(tile=smalltalk.send(smalltalk.send((smalltalk.IssueTile || IssueTile), "_new", []), "_withData_", [issue]));smalltalk.send(self['@issueMap'], "_at_put_", [smalltalk.send(tile, "_elementId", []), tile]);return ((($receiver = smalltalk.send(self, "_inProgress_", [smalltalk.send(issue, "_at_", ["labels"])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(tile, "_setOpen", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23openissues"), "_asJQuery", [])]);})() : (function(){smalltalk.send(tile, "_setInProgress", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", [])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(tile, "_setOpen", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23openissues"), "_asJQuery", [])]);}), (function(){smalltalk.send(tile, "_setInProgress", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", [])]);})]));})]);}), false]);
smalltalk.send(smalltalk.send(".issuecolumn", "_asJQuery", []), "_droppable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("tolerance", "__minus_gt", ["pointer"]),smalltalk.send("drop", "__minus_gt", [(function(event, ui){return smalltalk.send(self, "_handleDrop_with_", [event, ui]);})])])]);
return self;},
args: [],
source: unescape('bootstrap%0A%09%7C%20api%20%7C%0A%09api%20%3A%3D%20Issues%20new%20setToken%3A%20token.%0A%09api%20issues%3A%20%5B%20%3Aissues%20%7C%0A%09%09issues%20do%3A%20%5B%20%3Aissue%20%7C%0A%09%09%09%7C%20tile%20%7C%0A%09%09%09tile%20%3A%3D%20IssueTile%20new%20withData%3A%20issue.%0A%09%09%09issueMap%20at%3A%20%28tile%20elementId%29%20put%3A%20tile.%0A%09%09%09%28self%20inProgress%3A%20%28issue%20at%3A%20%27labels%27%29%29%0A%09%09%09%09%09ifFalse%3A%20%5B%20tile%20setOpen.%20tile%20appendToJQuery%3A%20%28%27%23openissues%27%20asJQuery%29%20%5D%0A%09%09%09%09%09ifTrue%3A%20%5B%20tile%20setInProgress.%20tile%20appendToJQuery%3A%20%28%27%23inprogressissues%27%20asJQuery%29%20%5D%0A%09%5D%5D%20loadAll%3A%20false.%0A%0A%09%27.issuecolumn%27%20asJQuery%20droppable%3A%20%23%7B%27tolerance%27%20-%3E%20%27pointer%27.%0A%09%09%27drop%27%20-%3E%20%5B%20%3Aevent%20%3Aui%20%7C%20self%20handleDrop%3A%20event%20with%3A%20ui%5D%7D.'),
messageSends: ["setToken:", "new", "issues:loadAll:", "do:", "withData:", "at:put:", "elementId", "ifFalse:ifTrue:", "inProgress:", "at:", "setOpen", "appendToJQuery:", "asJQuery", "setInProgress", "droppable:", unescape("-%3E"), "handleDrop:with:"],
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

smalltalk.addMethod(
unescape('_handleDrop_with_'),
smalltalk.method({
selector: unescape('handleDrop%3Awith%3A'),
category: 'not yet classified',
fn: function (theEvent, aWidget){
var self=this;
try{var tile=nil;
var currentParent=nil;
var newParent=nil;
(tile=smalltalk.send(self['@issueMap'], "_at_", [smalltalk.send(smalltalk.send(smalltalk.send(aWidget, "_draggable", []), "_at_", [(0)]), "_at_", ["id"])]));
(currentParent=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_parent", []), "_at_", [(0)]), "_at_", ["id"]));
(newParent=smalltalk.send(smalltalk.send(theEvent, "_target", []), "_at_", ["id"]));
smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_css_is_", ["position", "static"]);
((($receiver = smalltalk.send(currentParent, "__eq", [newParent])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_handleDrop_with_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_handleDrop_with_', fn: function(){return true}})})();})]));
smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [newParent]), "_asJQuery", []), "_append_", [smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_detach", [])]);
smalltalk.send(tile, "_moveTo_", [newParent]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_handleDrop_with_'){return e.fn()} throw(e)}},
args: ["theEvent", "aWidget"],
source: unescape('handleDrop%3A%20theEvent%20with%3A%20aWidget%0A%09%22%20This%20function%20should%20handle%20the%20initial%20drop%20of%20one%20IssueTile%20onto%20a%20new%20column%20%22%0A%09%7C%20tile%20currentParent%20newParent%20%7C%0A%09tile%20%3A%3D%20issueMap%20at%3A%20%28%28aWidget%20draggable%20at%3A%200%29%20at%3A%20%27id%27%29.%0A%09%22jQuery%20is%20going%20to%20give%20this%20to%20us%20in%20an%20array%2C%20how%20annoying%22%0A%09currentParent%20%3A%3D%20%28tile%20asJQuery%20parent%20at%3A%200%29%20at%3A%20%27id%27.%20%0A%09newParent%20%3A%3D%20theEvent%20target%20at%3A%20%27id%27.%0A%0A%09tile%20asJQuery%20css%3A%20%27position%27%20is%3A%27static%27.%0A%0A%09%22We%20will%20receive%20drag%20events%20onto%20the%20same%20column%2C%20don%27t%20do%20anything%20in%20that%20case%22%0A%09currentParent%20%3D%20newParent%20ifTrue%3A%20%5B%20%5E%20true%20%5D.%0A%09%28%27%23%27%2C%20newParent%29%20asJQuery%20append%3A%20%28tile%20asJQuery%20detach%29.%0A%0A%09tile%20moveTo%3A%20newParent.'),
messageSends: ["at:", "draggable", "parent", "asJQuery", "target", "css:is:", "ifTrue:", unescape("%3D"), "append:", unescape("%2C"), "detach", "moveTo:"],
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


