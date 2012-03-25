smalltalk.addPackage('Hubboard', {});
smalltalk.addClass('IssueTile', smalltalk.Widget, ['raw', 'title', 'body', 'issueId', 'number', 'project', 'projectOwner', 'issueStatus', 'comments', 'fullProjectName', 'elementId', 'model'], 'Hubboard');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["issuetile"]);smalltalk.send($rec, "_id_", [smalltalk.send(self, "_elementId", [])]);smalltalk.send($rec, "_at_put_", [unescape("data-project"), smalltalk.send(self['@model'], "_projectName", [])]);smalltalk.send($rec, "_at_put_", [unescape("data-issueid"), smalltalk.send(self['@model'], "_issueId", [])]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [smalltalk.send(self, "_numberClass", [])]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(self['@model'], "_url", [])]);smalltalk.send($rec, "_target_", ["_blank"]);smalltalk.send($rec, "_with_", [smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(smalltalk.send(self['@model'], "_number", []), "_asString", [])])]);return smalltalk.send($rec, "_onClick_", [(function(event){smalltalk.send(self, "_viewIssue_", [event]);return smalltalk.send(event, "_preventDefault", []);})]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [" in "]);(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//github.com/"), "__comma", [smalltalk.send(self['@model'], "_projectOwner", [])])]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@model'], "_projectOwner", [])]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [unescape("%20/%20")]);(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//github.com/"), "__comma", [smalltalk.send(self['@model'], "_projectName", [])])]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@model'], "_project", [])]);})(smalltalk.send(html, "_a", []));return (function($rec){smalltalk.send($rec, "_style_", [unescape("float%3Aright%3B")]);smalltalk.send($rec, "_class_", ["comments"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@model'], "_comments", []), "_asString", []), "__comma", [" comments"])]);return (function($rec){smalltalk.send($rec, "_class_", ["add_comment"]);smalltalk.send($rec, "_title_", ["Add Comment"]);smalltalk.send($rec, "_with_", [unescape("+")]);return smalltalk.send($rec, "_onClick_", [(function(event){return smalltalk.send(self, "_addComment_", [event]);})]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_class_", ["title"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@model'], "_title", [])]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_postRender", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27issuetile%27%3B%0A%09%09id%3A%20self%20elementId%3B%0A%09%09at%3A%20%27data-project%27%20put%3A%20%28model%20projectName%29%3B%0A%09%09at%3A%20%27data-issueid%27%20put%3A%20%28model%20issueId%29%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20self%20numberClass%3B%0A%09%09%09%09with%3A%20%5B%20%0A%09%09%09%09%09html%20a%20href%3A%20%28model%20url%29%3B%20target%3A%20%27_blank%27%3B%20with%3A%20%28%27%23%27%2C%20%28model%20number%29%20asString%29%3B%20onClick%3A%20%5B%20%3Aevent%20%7C%20self%20viewIssue%3A%20event.%20event%20preventDefault%20%5D.%0A%09%09%09%09%09html%20with%3A%20%27%20in%20%27.%0A%09%09%09%09%09html%20a%20href%3A%20%28%27https%3A//github.com/%27%2C%20%28model%20projectOwner%29%29%3B%20with%3A%20%28model%20projectOwner%29.%0A%09%09%09%09%09html%20with%3A%20%27%20/%20%27.%0A%09%09%09%09%09html%20%20a%20href%3A%20%28%27https%3A//github.com/%27%2C%20%28model%20projectName%29%29%3B%20with%3A%20%28model%20project%29.%0A%09%09%09%09%09html%20div%0A%09%09%09%09%09%09style%3A%20%27float%3Aright%3B%27%3B%0A%09%09%09%09%09%09class%3A%20%27comments%27%3B%0A%09%09%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09%09%09html%20span%20with%3A%20%28model%20comments%20asString%2C%20%27%20comments%27%29.%0A%09%09%09%09%09%09%09html%20button%0A%09%09%09%09%09%09%09%09class%3A%20%27add_comment%27%3B%0A%09%09%09%09%09%09%09%09title%3A%20%27Add%20Comment%27%3B%0A%09%09%09%09%09%09%09%09with%3A%20%27+%27%3B%0A%09%09%09%09%09%09%09%09onClick%3A%20%5B%20%3Aevent%20%7C%20self%20addComment%3A%20event%20%5D.%0A%09%09%09%09%09%09%5D.%0A%09%09%09%09%5D.%0A%09%09%09html%20div%20class%3A%20%27title%27%3B%20with%3A%20%28model%20title%29.%0A%09%09%5D.%0A%09self%20postRender.'),
messageSends: ["class:", "id:", "elementId", "at:put:", "projectName", "issueId", "with:", "numberClass", "href:", "url", "target:", unescape("%2C"), "asString", "number", "onClick:", "viewIssue:", "preventDefault", "a", "projectOwner", "project", "style:", "span", "comments", "title:", "addComment:", "button", "div", "title", "postRender"],
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
category: 'actions',
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
category: 'actions',
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
unescape('_elementId'),
smalltalk.method({
selector: unescape('elementId'),
category: 'accessors',
fn: function (){
var self=this;
return (($receiver = self['@elementId']) == nil || $receiver == undefined) ? (function(){return (self['@elementId']=smalltalk.send("issuetile_", "__comma", [smalltalk.send(smalltalk.send(self['@model'], "_issueId", []), "_asString", [])]));})() : $receiver;
return self;},
args: [],
source: unescape('elementId%0A%09%5E%20elementId%20ifNil%3A%20%5B%20elementId%20%3A%3D%20%27issuetile_%27%2C%20%28model%20issueId%20asString%29%20%5D.'),
messageSends: ["ifNil:", unescape("%2C"), "asString", "issueId"],
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
try{var postData=nil;
var successBlock=nil;
var url=nil;
(postData=smalltalk.HashedCollection._fromPairs_([smalltalk.send("project", "__minus_gt", [smalltalk.send(self['@model'], "_projectName", [])])]));
((($receiver = smalltalk.send(aColumnId, "__eq", ["inprogressissues"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(url=smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [self['@number']]), "__comma", [unescape("/label")]));return (successBlock=(function(){return smalltalk.send(self, "_setInProgress", []);}));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(url=smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [self['@number']]), "__comma", [unescape("/label")]));return (successBlock=(function(){return smalltalk.send(self, "_setInProgress", []);}));})]));
((($receiver = smalltalk.send(aColumnId, "__eq", ["openissues"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(url=smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [self['@number']]), "__comma", [unescape("/revert")]));return (successBlock=(function(){return smalltalk.send(self, "_setOpen", []);}));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(url=smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [self['@number']]), "__comma", [unescape("/revert")]));return (successBlock=(function(){return smalltalk.send(self, "_setOpen", []);}));})]));
((($receiver = smalltalk.send(aColumnId, "__eq", ["closedissues"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(url=smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [self['@number']]), "__comma", [unescape("/close")]));return (successBlock=(function(){return smalltalk.send(self, "_setClosed", []);}));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(url=smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [self['@number']]), "__comma", [unescape("/close")]));return (successBlock=(function(){return smalltalk.send(self, "_setClosed", []);}));})]));
(($receiver = url) != nil && $receiver != undefined) ? (function(){smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_showSpinner", []);smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [url, smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(postData, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){(($receiver = successBlock) != nil && $receiver != undefined) ? (function(){return smalltalk.send(successBlock, "_value", []);})() : nil;smalltalk.send(self, "_updateHeaderClass", []);return smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_hideSpinner", []);})]),smalltalk.send("error", "__minus_gt", [(function(){smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_hideSpinner", []);return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["fail"]);})])])]);return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})() : nil;
(function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return false}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_moveTo_'){return e.fn()} throw(e)}},
args: ["aColumnId"],
source: unescape('moveTo%3A%20aColumnId%0A%09%22Handle%20the%20invocation%20of%20the%20right%20callbacks%20when%20we%20move%20from%20one%20column%20to%20another%0A%09%20The%20lines%20blur%20a%20bit%20here%20on%20%27view%27%20versus%20%27controller%27%22%0A%09%7C%20postData%20successBlock%20url%20%7C%0A%09postData%20%3A%3D%20%23%7B%27project%27%20-%3E%20model%20projectName%20%7D.%0A%0A%0A%09aColumnId%20%3D%20%27inprogressissues%27%20ifTrue%3A%20%5B%0A%09%09url%20%3A%3D%20%27/issues/%27%2C%20number%2C%20%27/label%27.%0A%09%09successBlock%20%3A%3D%20%5B%20self%20setInProgress.%20%5D.%0A%09%5D.%0A%09aColumnId%20%3D%20%27openissues%27%20ifTrue%3A%20%5B%0A%09%09url%20%3A%3D%20%27/issues/%27%2C%20number%2C%20%27/revert%27.%0A%09%09successBlock%20%3A%3D%20%5B%20self%20setOpen%20%5D%0A%09%5D.%0A%09aColumnId%20%3D%20%27closedissues%27%20ifTrue%3A%20%5B%0A%09%09url%20%3A%3D%20%27/issues/%27%2C%20number%2C%20%27/close%27.%0A%09%09successBlock%20%3A%3D%20%5B%20self%20setClosed%20%5D.%0A%09%5D.%0A%09%0A%09url%20ifNotNil%3A%20%5B%0A%09%09HubboardApp%20current%20showSpinner.%0A%09%09jQuery%20ajax%3A%20url%0A%09%09%09%09options%3A%20%23%7B%0A%09%09%09%09%09%27type%27%20-%3E%20%27POST%27.%0A%09%09%09%09%09%27dataType%27%20-%3E%20%27json%27.%0A%09%09%09%09%09%27data%27%20-%3E%20postData%20asJSONString.%0A%09%09%09%09%09%27success%27%20-%3E%20%5B%0A%09%09%09%09%09%09successBlock%20ifNotNil%3A%20%5B%20successBlock%20value%20%5D.%0A%09%09%09%09%09%09self%20updateHeaderClass.%0A%09%09%09%09%09%09HubboardApp%20current%20hideSpinner.%0A%09%09%09%09%09%5D.%0A%09%09%09%09%09%27error%27%20-%3E%20%5B%20HubboardApp%20current%20hideSpinner.%20console%20log%3A%20%27fail%27%5D%0A%09%09%09%09%09%7D.%0A%09%09%5E%20true.%0A%09%5D.%0A%09%5E%20false.'),
messageSends: [unescape("-%3E"), "projectName", "ifTrue:", unescape("%3D"), unescape("%2C"), "setInProgress", "setOpen", "setClosed", "ifNotNil:", "showSpinner", "current", "ajax:options:", "asJSONString", "value", "updateHeaderClass", "hideSpinner", "log:"],
referencedClasses: ["HubboardApp"]
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_setClosed'),
smalltalk.method({
selector: unescape('setClosed'),
category: 'actions',
fn: function (){
var self=this;
(self['@issueStatus']=smalltalk.symbolFor("closed"));
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_draggable_", ["disable"]);
return self;},
args: [],
source: unescape('setClosed%0A%09%22Set%20this%20issue%20as%20a%20closed%20issue%2C%20should%20not%20be%20draggable%20as%20a%20result%22%0A%09issueStatus%20%3A%3D%20%23closed.%0A%09self%20asJQuery%20draggable%3A%20%27disable%27.'),
messageSends: ["draggable:", "asJQuery"],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_numberClass'),
smalltalk.method({
selector: unescape('numberClass'),
category: 'rendering',
fn: function (){
var self=this;
var numberClass=nil;
(numberClass="number");
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("open")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" open"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" open"]));})]));
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("inprogress")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" inprogress"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" inprogress"]));})]));
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("closed")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" closed"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" closed"]));})]));
return numberClass;
return self;},
args: [],
source: unescape('numberClass%0A%09%7C%20numberClass%20%7C%0A%09numberClass%20%3A%3D%20%27number%27.%0A%09issueStatus%20%3D%20%23open%20ifTrue%3A%20%5B%20numberClass%20%3A%3D%20numberClass%2C%20%27%20open%27%20%5D.%20%0A%09issueStatus%20%3D%20%23inprogress%20ifTrue%3A%20%5B%20numberClass%20%3A%3D%20numberClass%2C%20%27%20inprogress%27%20%5D.%20%0A%09issueStatus%20%3D%20%23closed%20ifTrue%3A%20%5B%20numberClass%20%3A%3D%20numberClass%2C%20%27%20closed%27%5D.%0A%09%5E%20numberClass.'),
messageSends: ["ifTrue:", unescape("%3D"), unescape("%2C")],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_postRender'),
smalltalk.method({
selector: unescape('postRender'),
category: 'rendering',
fn: function (){
var self=this;
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("closed")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("zIndex", "__minus_gt", ["10000"]),smalltalk.send("snap", "__minus_gt", [true])])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("zIndex", "__minus_gt", ["10000"]),smalltalk.send("snap", "__minus_gt", [true])])]);})]));
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_dblclick_", [(function(event){return smalltalk.send(self, "_viewIssue_", [event]);})]);
return self;},
args: [],
source: unescape('postRender%0A%09%22Run%20actions%20after%20we%27ve%20rendered%20the%20DOM%20elements%20%22%0A%0A%09%22Make%20the%20tile%20draggable%22%0A%09issueStatus%20%3D%20%23closed%20ifFalse%3A%20%5B%20self%20asJQuery%20draggable%3A%20%23%7B%27zIndex%27%20-%3E%20%2710000%27.%20%27snap%27%20-%3E%20true%20%7D%5D.%0A%0A%09%22Make%20ourselves%20double-clickable%22%0A%09self%20asJQuery%20dblclick%3A%20%5B%20%3Aevent%20%7C%20self%20viewIssue%3A%20event%20%5D.'),
messageSends: ["ifFalse:", unescape("%3D"), "draggable:", "asJQuery", unescape("-%3E"), "dblclick:", "viewIssue:"],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_updateHeaderClass'),
smalltalk.method({
selector: unescape('updateHeaderClass'),
category: 'rendering',
fn: function (){
var self=this;
var element=nil;
(element=smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "__comma", [unescape("%20%3E%20div.number")]), "_asJQuery", []));
smalltalk.send(element, "_removeClass", []);
smalltalk.send(element, "_addClass_", [smalltalk.send(self, "_numberClass", [])]);
return self;},
args: [],
source: unescape('updateHeaderClass%0A%09%7Celement%20%7C%0A%09element%20%3A%3D%20%28%27%23%27%2C%20self%20elementId%2C%20%27%20%3E%20div.number%27%29%20asJQuery.%0A%09element%20removeClass.%0A%09element%20addClass%3A%20%28self%20numberClass%29.'),
messageSends: ["asJQuery", unescape("%2C"), "elementId", "removeClass", "addClass:", "numberClass"],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_withModel_'),
smalltalk.method({
selector: unescape('withModel%3A'),
category: 'initializers',
fn: function (anIssue){
var self=this;
(self['@model']=anIssue);
(self['@number']=smalltalk.send(anIssue, "_number", []));
return self;},
args: ["anIssue"],
source: unescape('withModel%3A%20anIssue%0A%09model%20%3A%3D%20anIssue.%0A%09number%20%3A%3D%20anIssue%20number.'),
messageSends: ["number"],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_model'),
smalltalk.method({
selector: unescape('model'),
category: 'accessors',
fn: function (){
var self=this;
return self['@model'];
return self;},
args: [],
source: unescape('model%0A%09%5E%20model.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_addComment_'),
smalltalk.method({
selector: unescape('addComment%3A'),
category: 'rendering',
fn: function (clickEvent){
var self=this;
var dialog=nil;
(dialog=smalltalk.send(smalltalk.send((smalltalk.CommentDialog || CommentDialog), "_new", []), "_withIssue_", [self['@model']]));
smalltalk.send(dialog, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: ["clickEvent"],
source: unescape('addComment%3A%20clickEvent%0A%09%7C%20dialog%20%7C%0A%09dialog%20%3A%3D%20CommentDialog%20new%20withIssue%3A%20model.%0A%09dialog%20appendToJQuery%3A%20%27body%27%20asJQuery.'),
messageSends: ["withIssue:", "new", "appendToJQuery:", "asJQuery"],
referencedClasses: ["CommentDialog"]
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_viewIssue_'),
smalltalk.method({
selector: unescape('viewIssue%3A'),
category: 'actions',
fn: function (onClickEvent){
var self=this;
var dialog=nil;
(dialog=smalltalk.send(smalltalk.send((smalltalk.IssueDetailDialog || IssueDetailDialog), "_new", []), "_withIssue_", [self['@model']]));
smalltalk.send(dialog, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: ["onClickEvent"],
source: unescape('viewIssue%3A%20onClickEvent%0A%09%7C%20dialog%20%7C%0A%09dialog%20%3A%3D%20IssueDetailDialog%20new%20withIssue%3A%20model.%0A%09dialog%20appendToJQuery%3A%20%27body%27%20asJQuery.%0A%09'),
messageSends: ["withIssue:", "new", "appendToJQuery:", "asJQuery"],
referencedClasses: ["IssueDetailDialog"]
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
category: 'accessors',
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



smalltalk.addClass('HubboardApp', smalltalk.Object, ['token', 'issueMap', 'issueApi', 'userApi', 'knownRepos', 'userData', 'refreshIntervalId', 'currentProject', 'refreshInterval'], 'Hubboard');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializers',
fn: function (){
var self=this;
(self['@token']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", ["github_access_token"]));
(self['@issueMap']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
(self['@knownRepos']=smalltalk.send((smalltalk.Set || Set), "_new", []));
(self['@refreshInterval']=(120000));
return self;},
args: [],
source: unescape('initialize%0A%09token%20%3A%3D%20window%20at%3A%20%27github_access_token%27.%0A%09issueMap%20%3A%3D%20Dictionary%20new.%0A%09knownRepos%20%3A%3D%20Set%20new.%0A%09refreshInterval%20%3A%3D%20120000.'),
messageSends: ["at:", "new"],
referencedClasses: ["Dictionary", "Set"]
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_bootstrap'),
smalltalk.method({
selector: unescape('bootstrap'),
category: 'initializers',
fn: function (){
var self=this;
(self['@issueApi']=smalltalk.send(smalltalk.send((smalltalk.Issues || Issues), "_new", []), "_setToken_", [self['@token']]));
(self['@userApi']=smalltalk.send(smalltalk.send((smalltalk.Users || Users), "_new", []), "_setToken_", [self['@token']]));
smalltalk.send(self, "_showSpinner", []);
smalltalk.send(self['@userApi'], "_fetchCurrent_", [(function(data){(self['@userData']=data);return smalltalk.send(smalltalk.send(unescape("%23logout-username"), "_asJQuery", []), "_text_", [smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [smalltalk.send(data, "_at_", ["login"])]), "__comma", [unescape("%29")])]);})]);
smalltalk.send(self, "_refresh", []);
smalltalk.send(self, "_startRefreshTimer", []);
smalltalk.send(smalltalk.send(".issuecolumn", "_asJQuery", []), "_droppable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("tolerance", "__minus_gt", ["pointer"]),smalltalk.send("drop", "__minus_gt", [(function(event, ui){return smalltalk.send(self, "_handleDrop_with_", [event, ui]);})])])]);
return self;},
args: [],
source: unescape('bootstrap%0A%09issueApi%20%3A%3D%20Issues%20new%20setToken%3A%20token.%0A%09userApi%20%3A%3D%20Users%20new%20setToken%3A%20token.%0A%09self%20showSpinner.%0A%09userApi%20fetchCurrent%3A%20%5B%20%3Adata%20%7C%20userData%20%3A%3D%20data.%20%27%23logout-username%27%20asJQuery%20text%3A%20%28%27%28%27%2C%20%28data%20at%3A%20%27login%27%29%2C%20%27%29%27%29%20%5D.%0A%09self%20refresh.%0A%09self%20startRefreshTimer.%0A%09%27.issuecolumn%27%20asJQuery%20droppable%3A%20%23%7B%27tolerance%27%20-%3E%20%27pointer%27.%0A%09%09%27drop%27%20-%3E%20%5B%20%3Aevent%20%3Aui%20%7C%20self%20handleDrop%3A%20event%20with%3A%20ui%5D%7D.'),
messageSends: ["setToken:", "new", "showSpinner", "fetchCurrent:", "text:", "asJQuery", unescape("%2C"), "at:", "refresh", "startRefreshTimer", "droppable:", unescape("-%3E"), "handleDrop:with:"],
referencedClasses: ["Issues", "Users"]
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_inProgress_'),
smalltalk.method({
selector: unescape('inProgress%3A'),
category: 'accessors',
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
category: 'actions',
fn: function (theEvent, aWidget){
var self=this;
try{var tile=nil;
var currentParent=nil;
var newParent=nil;
var issueId=nil;
(issueId=smalltalk.send(smalltalk.send(smalltalk.send(aWidget, "_draggable", []), "_at_", [(0)]), "_at_", ["id"]));
(tile=smalltalk.send(self['@issueMap'], "_at_", [smalltalk.send(smalltalk.send(smalltalk.send(issueId, "_split_", ["issuetile_"]), "_at_", [(2)]), "_asNumber", [])]));
(currentParent=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_parent", []), "_at_", [(0)]), "_at_", ["id"]));
(newParent=smalltalk.send(smalltalk.send(theEvent, "_target", []), "_at_", ["id"]));
smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_css_is_", ["position", "static"]);
((($receiver = smalltalk.send(currentParent, "__eq", [newParent])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_handleDrop_with_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_handleDrop_with_', fn: function(){return true}})})();})]));
smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [newParent]), "_asJQuery", []), "_append_", [smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_detach", [])]);
smalltalk.send(tile, "_moveTo_", [newParent]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_handleDrop_with_'){return e.fn()} throw(e)}},
args: ["theEvent", "aWidget"],
source: unescape('handleDrop%3A%20theEvent%20with%3A%20aWidget%0A%09%22%20This%20function%20should%20handle%20the%20initial%20drop%20of%20one%20IssueTile%20onto%20a%20new%20column%20%22%0A%09%7C%20tile%20currentParent%20newParent%20issueId%20%7C%0A%09issueId%20%3A%3D%20%28%28aWidget%20draggable%20at%3A%200%29%20at%3A%20%27id%27%29.%0A%09tile%20%3A%3D%20issueMap%20at%3A%20%28%28%28issueId%20split%3A%20%27issuetile_%27%29%20at%3A%202%29%20asNumber%29.%0A%09%22jQuery%20is%20going%20to%20give%20this%20to%20us%20in%20an%20array%2C%20how%20annoying%22%0A%09currentParent%20%3A%3D%20%28tile%20asJQuery%20parent%20at%3A%200%29%20at%3A%20%27id%27.%20%0A%09newParent%20%3A%3D%20theEvent%20target%20at%3A%20%27id%27.%0A%0A%09tile%20asJQuery%20css%3A%20%27position%27%20is%3A%27static%27.%0A%0A%09%22We%20will%20receive%20drag%20events%20onto%20the%20same%20column%2C%20don%27t%20do%20anything%20in%20that%20case%22%0A%09currentParent%20%3D%20newParent%20ifTrue%3A%20%5B%20%5E%20true%20%5D.%0A%09%28%27%23%27%2C%20newParent%29%20asJQuery%20append%3A%20%28tile%20asJQuery%20detach%29.%0A%0A%09tile%20moveTo%3A%20newParent.'),
messageSends: ["at:", "draggable", "asNumber", "split:", "parent", "asJQuery", "target", "css:is:", "ifTrue:", unescape("%3D"), "append:", unescape("%2C"), "detach", "moveTo:"],
referencedClasses: []
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_flushColumns", []);
smalltalk.send(self['@issueApi'], "_issues_loadAll_", [(function(issue){var tile=nil;
var issueId=nil;
(issueId=smalltalk.send(issue, "_issueId", []));(tile=smalltalk.send(self['@issueMap'], "_at_ifAbsent_", [issueId, (function(){return smalltalk.send((smalltalk.IssueTile || IssueTile), "_new", []);})]));smalltalk.send(tile, "_withModel_", [issue]);smalltalk.send(self['@issueMap'], "_at_put_", [issueId, tile]);smalltalk.send(self['@knownRepos'], "_add_", [smalltalk.send(issue, "_projectName", [])]);((($receiver = smalltalk.send(self, "_inProgress_", [smalltalk.send(issue, "_labels", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(tile, "_setOpen", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23openissues"), "_asJQuery", [])]);})() : (function(){smalltalk.send(tile, "_setInProgress", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", [])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(tile, "_setOpen", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23openissues"), "_asJQuery", [])]);}), (function(){smalltalk.send(tile, "_setInProgress", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", [])]);})]));(($receiver = self['@currentProject']) != nil && $receiver != undefined) ? (function(){return ((($receiver = smalltalk.send(self['@currentProject'], "__eq", [smalltalk.send(issue, "_projectName", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})]));})() : nil;smalltalk.send(self, "_updateFilter", []);return smalltalk.send(self, "_hideSpinner", []);}), false]);
smalltalk.send(self['@issueApi'], "_recentlyClosed_loadAll_", [(function(issue){var tile=nil;
var issueId=nil;
(issueId=smalltalk.send(issue, "_issueId", []));(tile=smalltalk.send(self['@issueMap'], "_at_ifAbsent_", [issueId, (function(){return smalltalk.send((smalltalk.IssueTile || IssueTile), "_new", []);})]));smalltalk.send(tile, "_withModel_", [issue]);smalltalk.send(tile, "_setClosed", []);smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23closedissues"), "_asJQuery", [])]);return (($receiver = self['@currentProject']) != nil && $receiver != undefined) ? (function(){return ((($receiver = smalltalk.send(self['@currentProject'], "__eq", [smalltalk.send(issue, "_projectName", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})]));})() : nil;}), false]);
return self;},
args: [],
source: unescape('refresh%0A%09self%20flushColumns.%0A%0A%09issueApi%20issues%3A%20%5B%20%3Aissue%20%7C%0A%09%09%09%7C%20tile%20issueId%20%7C%0A%09%09%09issueId%20%3A%3D%20issue%20issueId.%0A%09%09%09tile%20%3A%3D%20issueMap%20at%3A%20issueId%20ifAbsent%3A%20%5B%20IssueTile%20new%20%5D.%0A%09%09%09tile%20withModel%3A%20issue.%0A%09%09%09issueMap%20at%3A%20issueId%20put%3A%20tile.%0A%09%09%09knownRepos%20add%3A%20%28issue%20projectName%29.%0A%09%09%09%28self%20inProgress%3A%20%28issue%20labels%29%29%0A%09%09%09%09%09ifFalse%3A%20%5B%20tile%20setOpen.%20tile%20appendToJQuery%3A%20%28%27%23openissues%27%20asJQuery%29%20%5D%0A%09%09%09%09%09ifTrue%3A%20%5B%20tile%20setInProgress.%20tile%20appendToJQuery%3A%20%28%27%23inprogressissues%27%20asJQuery%29%20%5D.%0A%09%09%09currentProject%20ifNotNil%3A%20%5B%0A%09%09%09%09currentProject%20%3D%20%28issue%20projectName%29%20ifFalse%3A%20%5Btile%20asJQuery%20hide%5D.%0A%09%09%09%5D.%0A%09%09%09self%20updateFilter.%0A%09%09%09self%20hideSpinner.%0A%09%09%5D%20loadAll%3A%20false.%0A%0A%09issueApi%20recentlyClosed%3A%20%5B%20%3Aissue%20%7C%0A%09%09%09%7C%20tile%20issueId%20%7C%0A%09%09%09issueId%20%3A%3D%20issue%20issueId.%0A%09%09%09tile%20%3A%3D%20issueMap%20at%3A%20issueId%20ifAbsent%3A%20%5B%20IssueTile%20new%20%5D.%0A%09%09%09tile%20withModel%3A%20issue.%0A%09%09%09tile%20setClosed.%0A%09%09%09tile%20appendToJQuery%3A%20%28%27%23closedissues%27%20asJQuery%29.%0A%09%09%09currentProject%20ifNotNil%3A%20%5B%0A%09%09%09%09currentProject%20%3D%20%28issue%20projectName%29%20ifFalse%3A%20%5Btile%20asJQuery%20hide%5D.%0A%09%09%09%5D%0A%09%5D%20loadAll%3A%20false.'),
messageSends: ["flushColumns", "issues:loadAll:", "issueId", "at:ifAbsent:", "new", "withModel:", "at:put:", "add:", "projectName", "ifFalse:ifTrue:", "inProgress:", "labels", "setOpen", "appendToJQuery:", "asJQuery", "setInProgress", "ifNotNil:", "ifFalse:", unescape("%3D"), "hide", "updateFilter", "hideSpinner", "recentlyClosed:loadAll:", "setClosed"],
referencedClasses: ["IssueTile"]
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_knownRepos'),
smalltalk.method({
selector: unescape('knownRepos'),
category: 'accessors',
fn: function (){
var self=this;
return self['@knownRepos'];
return self;},
args: [],
source: unescape('knownRepos%0A%09%5E%20knownRepos.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_issueMap'),
smalltalk.method({
selector: unescape('issueMap'),
category: 'accessors',
fn: function (){
var self=this;
return self['@issueMap'];
return self;},
args: [],
source: unescape('issueMap%0A%09%5E%20issueMap.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_user'),
smalltalk.method({
selector: unescape('user'),
category: 'accessors',
fn: function (){
var self=this;
return self['@userData'];
return self;},
args: [],
source: unescape('user%0A%09%5E%20userData.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_updateFilter'),
smalltalk.method({
selector: unescape('updateFilter'),
category: 'actions',
fn: function (){
var self=this;
try{var element=nil;
(($receiver = self['@currentProject']) != nil && $receiver != undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_updateFilter', fn: function(){return true}})})();})() : nil;
(element=smalltalk.send(".projectselect", "_asJQuery", []));
smalltalk.send(element, "_change_", [(function(event){var project=nil;
(project=smalltalk.send(element, "_val", []));return ((($receiver = smalltalk.send(project, "__eq", ["All"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_showAll", []);})() : (function(){return smalltalk.send(self, "_showOnly_", [project]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_showAll", []);}), (function(){return smalltalk.send(self, "_showOnly_", [project]);})]));})]);
smalltalk.send(element, "_empty", []);
smalltalk.send((function(html){return (function($rec){smalltalk.send($rec, "_value_", ["All"]);return smalltalk.send($rec, "_with_", ["View All Projects"]);})(smalltalk.send(html, "_option", []));}), "_appendToJQuery_", [element]);
smalltalk.send(self['@knownRepos'], "_do_", [(function(project){return smalltalk.send((function(html){return (function($rec){smalltalk.send($rec, "_value_", [project]);return smalltalk.send($rec, "_with_", [project]);})(smalltalk.send(html, "_option", []));}), "_appendToJQuery_", [element]);})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_updateFilter'){return e.fn()} throw(e)}},
args: [],
source: unescape('updateFilter%0A%09%7C%20element%20%7C%0A%0A%09%22%20If%20we%20have%20a%20currently%20selected%20project%2C%20no%20sense%20in%20running%20the%20rest%20of%20this%20code%20%22%0A%09currentProject%20ifNotNil%3A%20%5B%20%5E%20true%20%5D.%0A%0A%09element%20%3A%3D%20%27.projectselect%27%20asJQuery.%0A%09element%20change%3A%20%5B%20%3Aevent%20%7C%0A%09%09%7C%20project%20%7C%0A%09%09project%20%3A%3D%20element%20val.%0A%09%09project%20%3D%20%27All%27%0A%09%09%09ifTrue%3A%20%5B%20self%20showAll%20%5D%0A%09%09%09ifFalse%3A%20%5B%20self%20showOnly%3A%20project%20%5D.%0A%09%5D.%0A%0A%09element%20empty.%0A%0A%09%5B%20%3Ahtml%20%7C%20html%20option%20value%3A%20%27All%27%3B%20with%3A%20%27View%20All%20Projects%27%20%5D%20appendToJQuery%3A%20element.%0A%09knownRepos%20do%3A%20%5B%20%3Aproject%20%7C%0A%09%09%5B%20%3Ahtml%20%7C%20html%20option%20value%3A%20project%3B%20with%3A%20project%20%5D%20appendToJQuery%3A%20element.%0A%09%5D.'),
messageSends: ["ifNotNil:", "asJQuery", "change:", "val", "ifTrue:ifFalse:", unescape("%3D"), "showAll", "showOnly:", "empty", "appendToJQuery:", "value:", "with:", "option", "do:"],
referencedClasses: []
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_showAll'),
smalltalk.method({
selector: unescape('showAll'),
category: 'ui',
fn: function (){
var self=this;
(self['@currentProject']=nil);
smalltalk.send(smalltalk.send(".issuetile", "_asJQuery", []), "_show", []);
return self;},
args: [],
source: unescape('showAll%0A%09%22Make%20sure%20all%20issue%20tiles%20are%20visible%22%0A%09currentProject%20%3A%3D%20nil.%0A%09%27.issuetile%27%20asJQuery%20show.'),
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_showOnly_'),
smalltalk.method({
selector: unescape('showOnly%3A'),
category: 'ui',
fn: function (aProjectName){
var self=this;
(self['@currentProject']=aProjectName);
smalltalk.send(smalltalk.send(".issuetile", "_asJQuery", []), "_hide", []);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape(".issuetile%5Bdata-project%3D%22"), "__comma", [aProjectName]), "__comma", [unescape("%22%5D")]), "_asJQuery", []), "_show", []);
return self;},
args: ["aProjectName"],
source: unescape('showOnly%3A%20aProjectName%0A%09%22Only%20show%20tiles%20with%20data-project%3DaProjectName%22%0A%09currentProject%20%3A%3D%20aProjectName.%0A%09%27.issuetile%27%20asJQuery%20hide.%0A%09%28%27.issuetile%5Bdata-project%3D%22%27%2C%20aProjectName%2C%20%27%22%5D%27%29%20asJQuery%20show.'),
messageSends: ["hide", "asJQuery", "show", unescape("%2C")],
referencedClasses: []
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_currentProject'),
smalltalk.method({
selector: unescape('currentProject'),
category: 'accessors',
fn: function (){
var self=this;
return self['@currentProject'];
return self;},
args: [],
source: unescape('currentProject%0A%09%5E%20currentProject.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_flushColumns'),
smalltalk.method({
selector: unescape('flushColumns'),
category: 'ui',
fn: function (){
var self=this;
var clearBlock=nil;
(clearBlock=(function(index, element){var item=nil;
(item=smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [element]));smalltalk.send(item, "_draggable_", ["destroy"]);return smalltalk.send(smalltalk.send(item, "_remove", []), "_removeData", []);}));
smalltalk.send(smalltalk.send(unescape("%23openissues%20%3E%20*"), "_asJQuery", []), "_each_", [clearBlock]);
smalltalk.send(smalltalk.send(unescape("%23inprogressissues%20%3E%20*"), "_asJQuery", []), "_each_", [clearBlock]);
smalltalk.send(smalltalk.send(unescape("%23closedissues%20%3E%20*"), "_asJQuery", []), "_each_", [clearBlock]);
return self;},
args: [],
source: unescape('flushColumns%0A%09%7C%20clearBlock%20%7C%0A%09clearBlock%20%3A%3D%20%5B%20%3Aindex%20%3Aelement%20%7C%0A%09%09%7C%20item%20%7C%0A%09%09item%20%3A%3D%20window%20jQuery%3A%20element.%0A%09%09item%20draggable%3A%20%27destroy%27.%0A%09%09item%20remove%20removeData.%0A%09%5D.%0A%09%27%23openissues%20%3E%20*%27%20asJQuery%20each%3A%20clearBlock.%0A%09%27%23inprogressissues%20%3E%20*%27%20asJQuery%20each%3A%20clearBlock.%0A%09%27%23closedissues%20%3E%20*%27%20asJQuery%20each%3A%20clearBlock.'),
messageSends: ["jQuery:", "draggable:", "removeData", "remove", "each:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_showSpinner'),
smalltalk.method({
selector: unescape('showSpinner'),
category: 'ui',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(unescape("%23spinner"), "_asJQuery", []), "_show", []);
return self;},
args: [],
source: unescape('showSpinner%0A%09%27%23spinner%27%20asJQuery%20show.'),
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_hideSpinner'),
smalltalk.method({
selector: unescape('hideSpinner'),
category: 'ui',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(unescape("%23spinner"), "_asJQuery", []), "_hide", []);
return self;},
args: [],
source: unescape('hideSpinner%0A%09%27%23spinner%27%20asJQuery%20hide.'),
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_startRefreshTimer'),
smalltalk.method({
selector: unescape('startRefreshTimer'),
category: 'actions',
fn: function (){
var self=this;
(($receiver = self['@refreshIntervalId']) == nil || $receiver == undefined) ? (function(){return (self['@refreshIntervalId']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_setInterval_every_", [(function(){return smalltalk.send(self, "_refresh", []);}), self['@refreshInterval']]));})() : $receiver;
return self;},
args: [],
source: unescape('startRefreshTimer%0A%09refreshIntervalId%20ifNil%3A%20%5B%0A%09%09refreshIntervalId%20%3A%3D%20window%20setInterval%3A%20%5B%20self%20refresh%20%5D%20every%3A%20refreshInterval.%0A%09%5D.'),
messageSends: ["ifNil:", "setInterval:every:", "refresh"],
referencedClasses: []
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_stopRefreshTimer'),
smalltalk.method({
selector: unescape('stopRefreshTimer'),
category: 'actions',
fn: function (){
var self=this;
(($receiver = self['@refreshIntervalId']) != nil && $receiver != undefined) ? (function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_clearInterval_", [self['@refreshIntervalId']]);return (self['@refreshIntervalId']=nil);})() : nil;
return self;},
args: [],
source: unescape('stopRefreshTimer%0A%09refreshIntervalId%20ifNotNil%3A%20%5B%0A%09%09window%20clearInterval%3A%20refreshIntervalId.%0A%09%09refreshIntervalId%20%3A%3D%20nil.%0A%09%5D.%0A'),
messageSends: ["ifNotNil:", "clearInterval:"],
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


smalltalk.addClass('HBDialog', smalltalk.Widget, ['modal', 'minWidth', 'draggable', 'elementId', 'position'], 'Hubboard');
smalltalk.addMethod(
unescape('_becomeDialog'),
smalltalk.method({
selector: unescape('becomeDialog'),
category: 'dialog-helpers',
fn: function (){
var self=this;
return smalltalk.send(self, "_becomeDialog_", [(function(){return nil;})]);
return self;},
args: [],
source: unescape('becomeDialog%0A%09%5E%20self%20becomeDialog%3A%20%5B%5D.'),
messageSends: ["becomeDialog:"],
referencedClasses: []
}),
smalltalk.HBDialog);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializers',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@modal']=true);
(self['@minWidth']=(500));
(self['@draggable']=false);
(self['@position']="center");
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09modal%20%3A%3D%20true.%0A%09minWidth%20%3A%3D%20500.%0A%09draggable%20%3A%3D%20false.%0A%09position%20%3A%3D%20%27center%27.'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.HBDialog);

smalltalk.addMethod(
unescape('_becomeDialog_'),
smalltalk.method({
selector: unescape('becomeDialog%3A'),
category: 'dialog-helpers',
fn: function (aBlockCallback){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_dialog_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("modal", "__minus_gt", [self['@modal']]),smalltalk.send("minWidth", "__minus_gt", [self['@minWidth']]),smalltalk.send("draggable", "__minus_gt", [self['@draggable']]),smalltalk.send("position", "__minus_gt", [self['@position']]),smalltalk.send("close", "__minus_gt", [(function(event, ui){smalltalk.send(smalltalk.send(unescape(".ui-dialog"), "_asJQuery", []), "_remove", []);return smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_remove", []);})])])]);
smalltalk.send(aBlockCallback, "_value", []);
return self;},
args: ["aBlockCallback"],
source: unescape('becomeDialog%3A%20aBlockCallback%0A%09self%20asJQuery%20dialog%3A%20%23%7B%0A%09%09%09%27modal%27%20-%3E%20modal.%0A%09%09%09%27minWidth%27%20-%3E%20minWidth.%0A%09%09%09%27draggable%27%20-%3E%20draggable.%0A%09%09%09%27position%27%20-%3E%20position.%0A%09%09%09%27close%27%20-%3E%20%5B%20%3Aevent%20%3Aui%20%7C%0A%09%09%09%09%22Ugly%20hack%20to%20make%20sure%20we%20nuke%20all%20trash%20the%20jQuery%20UI%20Dialog%20leaves%20around%22%0A%09%09%09%09%27.ui-dialog%27%20asJQuery%20remove.%0A%09%09%09%09self%20asJQuery%20remove.%0A%09%09%09%5D%7D.%0A%09aBlockCallback%20value.'),
messageSends: ["dialog:", "asJQuery", unescape("-%3E"), "remove", "value"],
referencedClasses: []
}),
smalltalk.HBDialog);

smalltalk.addMethod(
unescape('_elementId'),
smalltalk.method({
selector: unescape('elementId'),
category: 'accessors',
fn: function (){
var self=this;
return smalltalk.send(unescape("%23"), "__comma", [self['@elementId']]);
return self;},
args: [],
source: unescape('elementId%0A%09%5E%20%28%27%23%27%2C%20elementId%29.'),
messageSends: [unescape("%2C")],
referencedClasses: []
}),
smalltalk.HBDialog);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
category: 'accessors',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_elementId", []), "_asJQuery", []);
return self;},
args: [],
source: unescape('asJQuery%0A%09%5E%20self%20elementId%20asJQuery.'),
messageSends: ["asJQuery", "elementId"],
referencedClasses: []
}),
smalltalk.HBDialog);



smalltalk.addClass('NewIssueDialog', smalltalk.HBDialog, [], 'Hubboard');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_at_put_", ["title", "Create a new issue"]);smalltalk.send($rec, "_id_", [self['@elementId']]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_name_", ["new_issue_form"]);smalltalk.send($rec, "_onSubmit_", [(function(event){smalltalk.send(self, "_submit", []);return smalltalk.send(event, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_for_", ["assignee"]);return smalltalk.send($rec, "_with_", ["Assign to: "]);})(smalltalk.send(html, "_label", []));(function($rec){smalltalk.send($rec, "_type_", ["hidden"]);smalltalk.send($rec, "_name_", ["assignee"]);return smalltalk.send($rec, "_value_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_user", []), "_at_", ["login"])]);})(smalltalk.send(html, "_input", []));smalltalk.send(smalltalk.send(html, "_strong", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_user", []), "_at_", ["login"])]);smalltalk.send(html, "_br", []);(function($rec){smalltalk.send($rec, "_for_", ["project"]);return smalltalk.send($rec, "_with_", ["Project: "]);})(smalltalk.send(html, "_label", []));(function($rec){smalltalk.send($rec, "_name_", ["project"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_knownRepos", []), "_do_", [(function(repo){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_currentProject", []), "__eq", [repo])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_value_", [repo]);smalltalk.send($rec, "_with_", [repo]);return smalltalk.send($rec, "_at_put_", ["selected", "true"]);})(smalltalk.send(html, "_option", []));})() : (function(){return (function($rec){smalltalk.send($rec, "_value_", [repo]);return smalltalk.send($rec, "_with_", [repo]);})(smalltalk.send(html, "_option", []));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function($rec){smalltalk.send($rec, "_value_", [repo]);smalltalk.send($rec, "_with_", [repo]);return smalltalk.send($rec, "_at_put_", ["selected", "true"]);})(smalltalk.send(html, "_option", []));}), (function(){return (function($rec){smalltalk.send($rec, "_value_", [repo]);return smalltalk.send($rec, "_with_", [repo]);})(smalltalk.send(html, "_option", []));})]));})]);})]);})(smalltalk.send(html, "_select", []));smalltalk.send(html, "_br", []);(function($rec){smalltalk.send($rec, "_for_", ["title"]);return smalltalk.send($rec, "_with_", ["Title: "]);})(smalltalk.send(html, "_label", []));(function($rec){smalltalk.send($rec, "_name_", ["title"]);return smalltalk.send($rec, "_at_put_", ["size", "40"]);})(smalltalk.send(html, "_input", []));smalltalk.send(html, "_br", []);(function($rec){smalltalk.send($rec, "_with_", ["Add body"]);smalltalk.send($rec, "_class_", [unescape("dialog-add-body")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(unescape("%23dialog-body"), "_asJQuery", []), "_show", []);})]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_br", []);(function($rec){smalltalk.send($rec, "_id_", [unescape("dialog-body")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", [(function($rec){smalltalk.send($rec, "_setName_", ["body"]);smalltalk.send($rec, "_setColumns_", [(40)]);return smalltalk.send($rec, "_setRows_", [(8)]);})(smalltalk.send((smalltalk.MarkdownTextArea || MarkdownTextArea), "_new", []))]);return smalltalk.send(html, "_br", []);})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_style_", [unescape("float%3A%20right%3B")]);smalltalk.send($rec, "_type_", ["submit"]);return smalltalk.send($rec, "_with_", ["Create"]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_form", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_becomeDialog_", [(function(){return smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dtitle%5D"), "_asJQuery", []), "_focus", []);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%0A%09%09at%3A%20%27title%27%20put%3A%20%27Create%20a%20new%20issue%27%3B%0A%09%09id%3A%20elementId%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20form%20name%3A%20%27new_issue_form%27%3B%20onSubmit%3A%20%5B%20%3Aevent%20%7C%20self%20submit.%20event%20preventDefault%20%5D%3B%20with%3A%20%5B%0A%09%09%09%09html%20label%20for%3A%20%27assignee%27%3B%20with%3A%20%27Assign%20to%3A%20%27.%0A%09%09%09%09html%20input%20type%3A%20%27hidden%27%3B%20name%3A%20%27assignee%27%3B%20value%3A%20%28HubboardApp%20current%20user%20at%3A%20%27login%27%29.%0A%09%09%09%09html%20strong%20with%3A%20%28HubboardApp%20current%20user%20at%3A%20%27login%27%29.%0A%09%09%09%09html%20br.%0A%09%09%09%09html%20label%20for%3A%20%27project%27%3B%20with%3A%20%27Project%3A%20%27.%0A%09%09%09%09html%20select%0A%09%09%09%09%09name%3A%20%27project%27%3B%0A%09%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09%09HubboardApp%20current%20knownRepos%20do%3A%20%5B%20%3Arepo%20%7C%0A%09%09%09%09%09%09%09%28HubboardApp%20current%20currentProject%29%20%3D%20repo%0A%09%09%09%09%09%09%09%09ifTrue%3A%20%5B%20html%20option%20value%3A%20repo%3B%20with%3A%20repo%3B%20at%3A%20%27selected%27%20put%3A%20%27true%27%20%5D%0A%09%09%09%09%09%09%09%09ifFalse%3A%20%5Bhtml%20option%20value%3A%20repo%3B%20with%3A%20repo%20%5D.%0A%09%09%09%09%09%09%09%5D%0A%09%09%09%09%09%09%5D.%0A%09%09%09%09html%20br.%0A%09%09%09%09html%20label%20for%3A%20%27title%27%3B%20with%3A%20%27Title%3A%20%27.%0A%09%09%09%09html%20input%20name%3A%20%27title%27%3B%20at%3A%20%27size%27%20put%3A%20%2740%27.%0A%09%09%09%09html%20br.%0A%09%09%09%09html%20a%20with%3A%20%27Add%20body%27%3B%20class%3A%20%27dialog-add-body%27%3B%20onClick%3A%20%5B%20%27%23dialog-body%27%20asJQuery%20show%20%5D.%0A%09%09%09%09html%20br.%0A%09%09%09%09html%20div%0A%09%09%09%09%09id%3A%20%27dialog-body%27%3B%0A%09%09%09%09%09style%3A%20%27display%3A%20none%3B%27%3B%0A%09%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09%09html%20with%3A%20%28MarkdownTextArea%20new%20setName%3A%20%27body%27%3B%20setColumns%3A%2040%3B%20setRows%3A%208%29.%0A%09%09%09%09%09%09html%20br.%0A%09%09%09%09%09%5D.%0A%09%09%09%09html%20button%20style%3A%20%27float%3A%20right%3B%27%3B%20type%3A%20%27submit%27%3B%20with%3A%20%27Create%27.%0A%09%09%09%5D%0A%09%5D.%0A%0A%09self%20becomeDialog%3A%20%5B%20%27%3Ainput%5Bname%3Dtitle%5D%27%20asJQuery%20focus%20%5D.'),
messageSends: ["at:put:", "id:", "with:", "name:", "onSubmit:", "submit", "preventDefault", "for:", "label", "type:", "value:", "at:", "user", "current", "input", "strong", "br", "do:", "knownRepos", "ifTrue:ifFalse:", unescape("%3D"), "currentProject", "option", "select", "class:", "onClick:", "show", "asJQuery", "a", "style:", "setName:", "setColumns:", "setRows:", "new", "div", "button", "form", "becomeDialog:", "focus"],
referencedClasses: ["HubboardApp", "MarkdownTextArea"]
}),
smalltalk.NewIssueDialog);

smalltalk.addMethod(
unescape('_submit'),
smalltalk.method({
selector: unescape('submit'),
category: 'actions',
fn: function (){
var self=this;
try{var data=nil;
(data=smalltalk.HashedCollection._fromPairs_([smalltalk.send("title", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dtitle%5D"), "_asJQuery", []), "_val", [])]),smalltalk.send("assignee", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dassignee%5D"), "_asJQuery", []), "_val", [])]),smalltalk.send("project", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dproject%5D"), "_asJQuery", []), "_val", [])]),smalltalk.send("body", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dbody%5D"), "_asJQuery", []), "_val", [])])]));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(data, "_at_", ["title"]), "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["You should probably add a title"]);return (function(){throw({name: 'stReturn', selector: '_submit', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["You should probably add a title"]);return (function(){throw({name: 'stReturn', selector: '_submit', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [unescape("/issues/create"), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(data, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_dialog_", ["close"]);return smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_refresh", []);})])])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_submit'){return e.fn()} throw(e)}},
args: [],
source: unescape('submit%0A%09%22Take%20the%20values%20out%20of%20the%20form%20and%20actually%20submit%20them%22%0A%09%7C%20data%20%7C%0A%09data%20%3A%3D%20%23%7B%0A%09%09%27title%27%20-%3E%20%27%3Ainput%5Bname%3Dtitle%5D%27%20asJQuery%20val.%0A%09%09%27assignee%27%20-%3E%20%27%3Ainput%5Bname%3Dassignee%5D%27%20asJQuery%20val.%0A%09%09%27project%27%20-%3E%20%27%3Ainput%5Bname%3Dproject%5D%27%20asJQuery%20val.%0A%09%09%27body%27%20-%3E%20%27%3Ainput%5Bname%3Dbody%5D%27%20asJQuery%20val%0A%09%7D.%0A%0A%09%28%28data%20at%3A%20%27title%27%29%20size%29%20%3D%200%20ifTrue%3A%20%5B%20window%20alert%3A%20%27You%20should%20probably%20add%20a%20title%27.%20%5E%20false%20%5D.%0A%0A%09jQuery%20ajax%3A%20%27/issues/create%27%20options%3A%20%23%7B%27type%27%20-%3E%20%27POST%27.%0A%09%09%09%27dataType%27%20-%3E%20%27json%27.%0A%09%09%09%27data%27%20-%3E%20data%20asJSONString.%0A%09%09%09%27success%27%20-%3E%20%5B%20self%20asJQuery%20dialog%3A%20%27close%27.%20HubboardApp%20current%20refresh.%5D%7D.%0A%0A'),
messageSends: [unescape("-%3E"), "val", "asJQuery", "ifTrue:", unescape("%3D"), "size", "at:", "alert:", "ajax:options:", "asJSONString", "dialog:", "refresh", "current"],
referencedClasses: ["HubboardApp"]
}),
smalltalk.NewIssueDialog);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializers',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.HBDialog);
(self['@minWidth']=(450));
(self['@elementId']="new_issue");
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09minWidth%20%3A%3D%20450.%0A%09elementId%20%3A%3D%20%27new_issue%27.'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.NewIssueDialog);


smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
category: 'not yet classified',
fn: function (){
var self=this;
var dialog=nil;
(dialog=smalltalk.send(self, "_new", [], smalltalk.Widget.klass));
smalltalk.send(dialog, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: unescape('show%0A%09%22%20Creates%20and%20adds%20the%20DOM%20elements%20to%20the%20body%20tag%20%22%0A%09%7C%20dialog%20%7C%0A%09dialog%20%3A%3D%20super%20new.%0A%09dialog%20appendToJQuery%3A%20%28%27body%27%20asJQuery%29.'),
messageSends: ["new", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.NewIssueDialog.klass);


smalltalk.addClass('IssueDetailDialog', smalltalk.HBDialog, ['model'], 'Hubboard');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializers',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.HBDialog);
(self['@minWidth']=(650));
(self['@elementId']="issue_detail");
(self['@model']=nil);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09minWidth%20%3A%3D%20650.%0A%09elementId%20%3A%3D%20%27issue_detail%27.%0A%09model%20%3A%3D%20nil.'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.IssueDetailDialog);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_at_put_", ["title", smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self['@model'], "_number", [])]), "__comma", [unescape("%20-%20")]), "__comma", [smalltalk.send(self['@model'], "_title", [])])]);smalltalk.send($rec, "_id_", [self['@elementId']]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [smalltalk.send((smalltalk.Markdown || Markdown), "_asTagBrush_", [smalltalk.send(smalltalk.send(self['@model'], "_body", []), "_asString", [])])]);smalltalk.send(html, "_hr", []);smalltalk.send(smalltalk.send(html, "_strong", []), "_with_", ["Comments:"]);smalltalk.send(html, "_hr", []);(function($rec){smalltalk.send($rec, "_id_", ["comments"]);return smalltalk.send($rec, "_style_", [unescape("overflow%3A%20auto%3B%20max-height%3A%20300px")]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_style_", [unescape("float%3A%20right%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(self['@model'], "_url", [])]);return smalltalk.send($rec, "_with_", ["view on GitHub"]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_becomeDialog", []);
smalltalk.send(self['@model'], "_loadComments_", [(function(comments){return smalltalk.send(comments, "_do_", [(function(comment){return smalltalk.send((function(html){return smalltalk.send(self, "_renderComment_onto_", [comment, html]);}), "_appendToJQuery_", [smalltalk.send(unescape("%23comments"), "_asJQuery", [])]);})]);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%0A%09%09at%3A%20%27title%27%20put%3A%20%27%23%27%2C%20%28model%20number%29%2C%20%27%20-%20%27%2C%20%28model%20title%29%3B%0A%09%09id%3A%20elementId%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%20with%3A%20%28Markdown%20asTagBrush%3A%20%28model%20body%20asString%29%29.%0A%09%09%09html%20hr.%0A%09%09%09html%20strong%20with%3A%20%27Comments%3A%27.%0A%09%09%09html%20hr.%0A%09%09%09html%20div%20id%3A%20%27comments%27%3B%20style%3A%20%27overflow%3A%20auto%3B%20max-height%3A%20300px%27.%0A%09%09%09html%20div%0A%09%09%09%09style%3A%20%27float%3A%20right%3B%27%3B%0A%09%09%09%09with%3A%20%5B%20html%20a%20href%3A%20%28model%20url%29%3B%20with%3A%20%27view%20on%20GitHub%27%5D.%0A%09%5D.%0A%0A%09self%20becomeDialog.%0A%0A%09model%20loadComments%3A%20%5B%20%3Acomments%20%7C%20comments%20do%3A%20%5B%20%3Acomment%20%7C%20%5B%20%3Ahtml%20%7C%20self%20renderComment%3A%20comment%20onto%3A%20html%20%5D%20appendToJQuery%3A%20%27%23comments%27%20asJQuery%20%5D%20%5D.'),
messageSends: ["at:put:", unescape("%2C"), "number", "title", "id:", "with:", "div", "asTagBrush:", "asString", "body", "hr", "strong", "style:", "href:", "url", "a", "becomeDialog", "loadComments:", "do:", "appendToJQuery:", "renderComment:onto:", "asJQuery"],
referencedClasses: ["Markdown"]
}),
smalltalk.IssueDetailDialog);

smalltalk.addMethod(
unescape('_withIssue_'),
smalltalk.method({
selector: unescape('withIssue%3A'),
category: 'initializers',
fn: function (anIssue){
var self=this;
(self['@model']=anIssue);
return self;
return self;},
args: ["anIssue"],
source: unescape('withIssue%3A%20anIssue%0A%09model%20%3A%3D%20anIssue.%0A%09%5E%20self.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IssueDetailDialog);

smalltalk.addMethod(
unescape('_renderComment_onto_'),
smalltalk.method({
selector: unescape('renderComment%3Aonto%3A'),
category: 'rendering',
fn: function (comment, html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["comment_detail"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_strong", []), "_with_", [smalltalk.send("By: ", "__comma", [smalltalk.send(comment, "_login", [])])]);return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.Markdown || Markdown), "_asTagBrush_", [smalltalk.send(comment, "_body", [])])]);})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(html, "_hr", []);
return self;},
args: ["comment", "html"],
source: unescape('renderComment%3A%20comment%20onto%3A%20html%0A%0A%09html%20div%0A%09%09class%3A%20%27comment_detail%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20strong%20with%3A%20%27By%3A%20%27%2C%20%28comment%20login%29.%0A%09%09%09html%20with%3A%20%28Markdown%20asTagBrush%3A%20%28comment%20body%29%29.%0A%09%09%5D.%0A%0A%09html%20hr.'),
messageSends: ["class:", "with:", "strong", unescape("%2C"), "login", "asTagBrush:", "body", "div", "hr"],
referencedClasses: ["Markdown"]
}),
smalltalk.IssueDetailDialog);



smalltalk.addClass('CommentDialog', smalltalk.HBDialog, ['model'], 'Hubboard');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializers',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.HBDialog);
(self['@minWidth']=(450));
(self['@elementId']="new_comment");
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09minWidth%20%3A%3D%20450.%0A%09elementId%20%3A%3D%20%27new_comment%27.'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.CommentDialog);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_at_put_", ["title", smalltalk.send(unescape("Add%20a%20comment%20to%20issue%20%23"), "__comma", [smalltalk.send(self['@model'], "_number", [])])]);smalltalk.send($rec, "_id_", [self['@elementId']]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_name_", ["new_comment_form"]);smalltalk.send($rec, "_onSubmit_", [(function(event){smalltalk.send(self, "_submit", []);return smalltalk.send(event, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_type_", ["hidden"]);smalltalk.send($rec, "_name_", ["number"]);return smalltalk.send($rec, "_value_", [smalltalk.send(self['@model'], "_number", [])]);})(smalltalk.send(html, "_input", []));(function($rec){smalltalk.send($rec, "_id_", [unescape("dialog-body")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", [(function($rec){smalltalk.send($rec, "_setName_", ["body"]);smalltalk.send($rec, "_setColumns_", [(45)]);return smalltalk.send($rec, "_setRows_", [(8)]);})(smalltalk.send((smalltalk.MarkdownTextArea || MarkdownTextArea), "_new", []))]);return smalltalk.send(html, "_br", []);})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_style_", [unescape("float%3A%20right%3B")]);smalltalk.send($rec, "_type_", ["submit"]);return smalltalk.send($rec, "_with_", ["Add Comment"]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_form", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_becomeDialog_", [(function(){return smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dbody%5D"), "_asJQuery", []), "_focus", []);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%0A%09%09at%3A%20%27title%27%20put%3A%20%27Add%20a%20comment%20to%20issue%20%23%27%2C%20%28model%20number%29%3B%0A%09%09id%3A%20elementId%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20form%20name%3A%20%27new_comment_form%27%3B%20onSubmit%3A%20%5B%20%3Aevent%20%7C%20self%20submit.%20event%20preventDefault%20%5D%3B%20with%3A%20%5B%0A%09%09%09%09html%20input%20type%3A%20%27hidden%27%3B%20name%3A%20%27number%27%3B%20value%3A%20%28model%20number%29.%0A%09%09%09%09html%20div%0A%09%09%09%09%09id%3A%20%27dialog-body%27%3B%0A%09%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09%09html%20with%3A%20%28MarkdownTextArea%20new%20setName%3A%20%27body%27%3B%20setColumns%3A%2045%3B%20setRows%3A%208%29.%0A%09%09%09%09%09%09html%20br.%0A%09%09%09%09%09%5D.%0A%09%09%09%09html%20button%20style%3A%20%27float%3A%20right%3B%27%3B%20type%3A%20%27submit%27%3B%20with%3A%20%27Add%20Comment%27.%0A%09%09%09%5D%0A%09%5D.%0A%0A%09self%20becomeDialog%3A%20%5B%20%27%3Ainput%5Bname%3Dbody%5D%27%20asJQuery%20focus%20%5D.'),
messageSends: ["at:put:", unescape("%2C"), "number", "id:", "with:", "name:", "onSubmit:", "submit", "preventDefault", "type:", "value:", "input", "setName:", "setColumns:", "setRows:", "new", "br", "div", "style:", "button", "form", "becomeDialog:", "focus", "asJQuery"],
referencedClasses: ["MarkdownTextArea"]
}),
smalltalk.CommentDialog);

smalltalk.addMethod(
unescape('_withIssue_'),
smalltalk.method({
selector: unescape('withIssue%3A'),
category: 'initializers',
fn: function (anIssue){
var self=this;
(self['@model']=anIssue);
return self;},
args: ["anIssue"],
source: unescape('withIssue%3A%20anIssue%0A%09model%20%3A%3D%20anIssue.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CommentDialog);

smalltalk.addMethod(
unescape('_submit'),
smalltalk.method({
selector: unescape('submit'),
category: 'actions',
fn: function (){
var self=this;
try{var data=nil;
(data=smalltalk.HashedCollection._fromPairs_([smalltalk.send("project", "__minus_gt", [smalltalk.send(self['@model'], "_projectName", [])]),smalltalk.send("body", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dbody%5D"), "_asJQuery", []), "_val", [])])]));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(data, "_at_", ["body"]), "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["You should probably add a comment"]);return (function(){throw({name: 'stReturn', selector: '_submit', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["You should probably add a comment"]);return (function(){throw({name: 'stReturn', selector: '_submit', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [smalltalk.send(self['@model'], "_number", [])]), "__comma", [unescape("/comment")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(data, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_dialog_", ["close"]);return smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_refresh", []);})])])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_submit'){return e.fn()} throw(e)}},
args: [],
source: unescape('submit%0A%09%22Take%20the%20values%20out%20of%20the%20form%20and%20actually%20submit%20them%22%0A%09%7C%20data%20%7C%0A%09data%20%3A%3D%20%23%7B%0A%09%09%27project%27%20-%3E%20model%20projectName.%0A%09%09%27body%27%20-%3E%20%27%3Ainput%5Bname%3Dbody%5D%27%20asJQuery%20val%0A%09%7D.%0A%0A%09%28%28data%20at%3A%20%27body%27%29%20size%29%20%3D%200%20ifTrue%3A%20%5B%20window%20alert%3A%20%27You%20should%20probably%20add%20a%20comment%27.%20%5E%20false%20%5D.%0A%0A%09jQuery%20ajax%3A%20%27/issues/%27%2C%20%28model%20number%29%2C%20%27/comment%27%20options%3A%20%23%7B%27type%27%20-%3E%20%27POST%27.%0A%09%09%09%27dataType%27%20-%3E%20%27json%27.%0A%09%09%09%27data%27%20-%3E%20data%20asJSONString.%0A%09%09%09%27success%27%20-%3E%20%5B%20self%20asJQuery%20dialog%3A%20%27close%27.%20HubboardApp%20current%20refresh.%5D%7D.%0A'),
messageSends: [unescape("-%3E"), "projectName", "val", "asJQuery", "ifTrue:", unescape("%3D"), "size", "at:", "alert:", "ajax:options:", unescape("%2C"), "number", "asJSONString", "dialog:", "refresh", "current"],
referencedClasses: ["HubboardApp"]
}),
smalltalk.CommentDialog);



smalltalk.addMethod(
unescape('_split_'),
smalltalk.method({
selector: unescape('split%3A'),
category: '*Hubboard',
fn: function (aDelimiter){
var self=this;
return self.split(aDelimiter);;
return self;},
args: ["aDelimiter"],
source: unescape('split%3A%20aDelimiter%0A%09%22Split%20the%20string%20based%20on%20the%20delimiter%20into%20an%20Array%20of%20sub-strings%22%0A%09%5E%20%3Cself.split%28aDelimiter%29%3B%3E.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.String);

