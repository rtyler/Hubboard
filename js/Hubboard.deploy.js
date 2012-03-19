smalltalk.addPackage('Hubboard', {});
smalltalk.addClass('NewIssueDialog', smalltalk.Widget, [], 'Hubboard');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_at_put_", ["title", "Create a new issue"]);smalltalk.send($rec, "_class_", ["new_issue"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_name_", ["new_issue_form"]);smalltalk.send($rec, "_onSubmit_", [(function(event){smalltalk.send(self, "_submit", []);return smalltalk.send(event, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_for_", ["assignee"]);return smalltalk.send($rec, "_with_", ["Assign to: "]);})(smalltalk.send(html, "_label", []));(function($rec){smalltalk.send($rec, "_type_", ["hidden"]);smalltalk.send($rec, "_name_", ["assignee"]);return smalltalk.send($rec, "_value_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_user", []), "_at_", ["login"])]);})(smalltalk.send(html, "_input", []));smalltalk.send(smalltalk.send(html, "_strong", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_user", []), "_at_", ["login"])]);smalltalk.send(html, "_br", []);(function($rec){smalltalk.send($rec, "_for_", ["project"]);return smalltalk.send($rec, "_with_", ["Project: "]);})(smalltalk.send(html, "_label", []));(function($rec){smalltalk.send($rec, "_name_", ["project"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_knownRepos", []), "_do_", [(function(repo){return (function($rec){smalltalk.send($rec, "_value_", [repo]);return smalltalk.send($rec, "_with_", [repo]);})(smalltalk.send(html, "_option", []));})]);})]);})(smalltalk.send(html, "_select", []));smalltalk.send(html, "_br", []);(function($rec){smalltalk.send($rec, "_for_", ["title"]);return smalltalk.send($rec, "_with_", ["Title: "]);})(smalltalk.send(html, "_label", []));(function($rec){smalltalk.send($rec, "_name_", ["title"]);return smalltalk.send($rec, "_at_put_", ["size", "50"]);})(smalltalk.send(html, "_input", []));smalltalk.send(html, "_br", []);return (function($rec){smalltalk.send($rec, "_type_", ["submit"]);return smalltalk.send($rec, "_with_", ["Create"]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_form", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_becomeDialog", []);
return self;}
}),
smalltalk.NewIssueDialog);

smalltalk.addMethod(
unescape('_becomeDialog'),
smalltalk.method({
selector: unescape('becomeDialog'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(".new_issue", "_asJQuery", []), "_dialog_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("modal", "__minus_gt", [true]),smalltalk.send("minWidth", "__minus_gt", ["450"]),smalltalk.send("close", "__minus_gt", [(function(event, ui){smalltalk.send(smalltalk.send(unescape(".ui-dialog"), "_asJQuery", []), "_remove", []);return smalltalk.send(smalltalk.send(".new_issue", "_asJQuery", []), "_remove", []);})])])]);
return self;}
}),
smalltalk.NewIssueDialog);

smalltalk.addMethod(
unescape('_submit'),
smalltalk.method({
selector: unescape('submit'),
fn: function (){
var self=this;
try{var data=nil;
(data=smalltalk.HashedCollection._fromPairs_([smalltalk.send("title", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dtitle%5D"), "_asJQuery", []), "_val", [])]),smalltalk.send("assignee", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dassignee%5D"), "_asJQuery", []), "_val", [])]),smalltalk.send("project", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dproject%5D"), "_asJQuery", []), "_val", [])])]));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(data, "_at_", ["title"]), "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["You should probably add a title"]);return (function(){throw({name: 'stReturn', selector: '_submit', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["You should probably add a title"]);return (function(){throw({name: 'stReturn', selector: '_submit', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [unescape("/issues/create"), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(data, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){smalltalk.send(smalltalk.send(".new_issue", "_asJQuery", []), "_dialog_", ["close"]);return smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_refresh", []);})])])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_submit'){return e.fn()} throw(e)}}
}),
smalltalk.NewIssueDialog);


smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
fn: function (){
var self=this;
var dialog=nil;
(dialog=smalltalk.send(self, "_new", [], smalltalk.Widget.klass));
smalltalk.send(dialog, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.NewIssueDialog.klass);


smalltalk.addClass('IssueTile', smalltalk.Widget, ['raw', 'title', 'body', 'issueId', 'number', 'project', 'projectOwner', 'issueStatus'], 'Hubboard');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
var numberClass=nil;
(numberClass="number");
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("open")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" open"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" open"]));})]));
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("inprogress")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" inprogress"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" inprogress"]));})]));
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("closed")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" closed"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" closed"]));})]));
(function($rec){smalltalk.send($rec, "_class_", ["issuetile"]);smalltalk.send($rec, "_id_", [smalltalk.send(self, "_elementId", [])]);smalltalk.send($rec, "_at_put_", [unescape("data-project"), smalltalk.send(self, "_fullProjectName", [])]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [numberClass]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(self['@raw'], "_at_", ["html_url"])]);smalltalk.send($rec, "_target_", ["_blank"]);return smalltalk.send($rec, "_with_", [smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self['@number'], "_asString", [])])]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [" in "]);(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//github.com/"), "__comma", [self['@projectOwner']])]);return smalltalk.send($rec, "_with_", [self['@projectOwner']]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [unescape("%20/%20")]);return (function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//github.com/"), "__comma", [smalltalk.send(self, "_fullProjectName", [])])]);return smalltalk.send($rec, "_with_", [self['@project']]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));(function($rec){smalltalk.send($rec, "_class_", ["title"]);return smalltalk.send($rec, "_with_", [self['@title']]);})(smalltalk.send(html, "_span", []));return smalltalk.send(html, "_br", []);})]);})(smalltalk.send(html, "_div", []));
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("closed")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("zIndex", "__minus_gt", ["10000"]),smalltalk.send("snap", "__minus_gt", [true])])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("zIndex", "__minus_gt", ["10000"]),smalltalk.send("snap", "__minus_gt", [true])])]);})]));
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_withData_'),
smalltalk.method({
selector: unescape('withData%3A'),
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
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_parseUrl_'),
smalltalk.method({
selector: unescape('parseUrl%3A'),
fn: function (aUrl){
var self=this;
var parts=nil;
(parts=aUrl.split('/'));
return smalltalk.HashedCollection._fromPairs_([smalltalk.send("owner", "__minus_gt", [smalltalk.send(parts, "_at_", [(4)])]),smalltalk.send("project", "__minus_gt", [smalltalk.send(parts, "_at_", [(5)])])]);
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_setOpen'),
smalltalk.method({
selector: unescape('setOpen'),
fn: function (){
var self=this;
(self['@issueStatus']=smalltalk.symbolFor("open"));
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_setInProgress'),
smalltalk.method({
selector: unescape('setInProgress'),
fn: function (){
var self=this;
(self['@issueStatus']=smalltalk.symbolFor("inprogress"));
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "_asJQuery", []);
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_elementId'),
smalltalk.method({
selector: unescape('elementId'),
fn: function (){
var self=this;
return smalltalk.send("issuetile_", "__comma", [smalltalk.send(self['@issueId'], "_asString", [])]);
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_moveTo_'),
smalltalk.method({
selector: unescape('moveTo%3A'),
fn: function (aColumnId){
var self=this;
try{((($receiver = smalltalk.send(aColumnId, "__eq", ["inprogressissues"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("/repos/"), "__comma", [smalltalk.send(self, "_fullProjectName", [])]), "__comma", [unescape("/issues/")]), "__comma", [self['@number']]), "__comma", [unescape("/labels")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [unescape("in-progress")]),smalltalk.send("success", "__minus_gt", [(function(){smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "__comma", [unescape("%20%3E%20div.number")]), "_asJQuery", []), "_addClass_", ["inprogress"]);return smalltalk.send(self, "_setInProgress", []);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["fail"]);})])])]);return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("/repos/"), "__comma", [smalltalk.send(self, "_fullProjectName", [])]), "__comma", [unescape("/issues/")]), "__comma", [self['@number']]), "__comma", [unescape("/labels")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [unescape("in-progress")]),smalltalk.send("success", "__minus_gt", [(function(){smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "__comma", [unescape("%20%3E%20div.number")]), "_asJQuery", []), "_addClass_", ["inprogress"]);return smalltalk.send(self, "_setInProgress", []);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["fail"]);})])])]);return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})]));
((($receiver = smalltalk.send(aColumnId, "__eq", ["openissues"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})]));
((($receiver = smalltalk.send(aColumnId, "__eq", ["closedissues"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var data=nil;
(data=smalltalk.HashedCollection._fromPairs_([smalltalk.send("project", "__minus_gt", [smalltalk.send(self, "_fullProjectName", [])])]));smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [self['@number']]), "__comma", [unescape("/close")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(data, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){var element=nil;
(element=smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "__comma", [unescape("%20%3E%20div.number")]), "_asJQuery", []));smalltalk.send(element, "_removeClass_", ["inprogress"]);smalltalk.send(element, "_addClass_", ["closed"]);return smalltalk.send(self, "_setClosed", []);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["fail"]);})])])]);return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var data=nil;
(data=smalltalk.HashedCollection._fromPairs_([smalltalk.send("project", "__minus_gt", [smalltalk.send(self, "_fullProjectName", [])])]));smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [self['@number']]), "__comma", [unescape("/close")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(data, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){var element=nil;
(element=smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "__comma", [unescape("%20%3E%20div.number")]), "_asJQuery", []));smalltalk.send(element, "_removeClass_", ["inprogress"]);smalltalk.send(element, "_addClass_", ["closed"]);return smalltalk.send(self, "_setClosed", []);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["fail"]);})])])]);return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_moveTo_'){return e.fn()} throw(e)}}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_setClosed'),
smalltalk.method({
selector: unescape('setClosed'),
fn: function (){
var self=this;
(self['@issueStatus']=smalltalk.symbolFor("closed"));
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_draggable_", ["disable"]);
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_project'),
smalltalk.method({
selector: unescape('project'),
fn: function (){
var self=this;
return self['@project'];
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_projectOwner'),
smalltalk.method({
selector: unescape('projectOwner'),
fn: function (){
var self=this;
return self['@projectOwner'];
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_fullProjectName'),
smalltalk.method({
selector: unescape('fullProjectName'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@projectOwner'], "__comma", [unescape("/")]), "__comma", [self['@project']]);
return self;}
}),
smalltalk.IssueTile);



smalltalk.addClass('HubboardApp', smalltalk.Object, ['token', 'issueMap', 'issueApi', 'userApi', 'knownRepos', 'userData', 'refreshIntervalId', 'currentProject'], 'Hubboard');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@token']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", ["github_access_token"]));
(self['@issueMap']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
(self['@knownRepos']=smalltalk.send((smalltalk.Set || Set), "_new", []));
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_bootstrap'),
smalltalk.method({
selector: unescape('bootstrap'),
fn: function (){
var self=this;
(self['@issueApi']=smalltalk.send(smalltalk.send((smalltalk.Issues || Issues), "_new", []), "_setToken_", [self['@token']]));
(self['@userApi']=smalltalk.send(smalltalk.send((smalltalk.Users || Users), "_new", []), "_setToken_", [self['@token']]));
smalltalk.send(self['@userApi'], "_fetchCurrent_", [(function(data){return (self['@userData']=data);})]);
smalltalk.send(self, "_refresh", []);
(self['@refreshIntervalId']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_setInterval_every_", [(function(){return smalltalk.send(self, "_refresh", []);}), (120000)]));
smalltalk.send(smalltalk.send(".issuecolumn", "_asJQuery", []), "_droppable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("tolerance", "__minus_gt", ["pointer"]),smalltalk.send("drop", "__minus_gt", [(function(event, ui){return smalltalk.send(self, "_handleDrop_with_", [event, ui]);})])])]);
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_inProgress_'),
smalltalk.method({
selector: unescape('inProgress%3A'),
fn: function (arrayOfLabels){
var self=this;
try{(($receiver = arrayOfLabels) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_inProgress_', fn: function(){return false}})})();})() : $receiver;
smalltalk.send(arrayOfLabels, "_do_", [(function(label){return ((($receiver = smalltalk.send(smalltalk.send(label, "_at_", ["name"]), "__eq", [unescape("in-progress")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_inProgress_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_inProgress_', fn: function(){return true}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_inProgress_', fn: function(){return false}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_inProgress_'){return e.fn()} throw(e)}}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_handleDrop_with_'),
smalltalk.method({
selector: unescape('handleDrop%3Awith%3A'),
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
} catch(e) {if(e.name === 'stReturn' && e.selector === '_handleDrop_with_'){return e.fn()} throw(e)}}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(unescape("%23openissues"), "_asJQuery", []), "_empty", []);
smalltalk.send(smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", []), "_empty", []);
smalltalk.send(smalltalk.send(unescape("%23closedissues"), "_asJQuery", []), "_empty", []);
smalltalk.send(self['@issueApi'], "_issues_loadAll_", [(function(issues){smalltalk.send(issues, "_do_", [(function(issue){var tile=nil;
(tile=smalltalk.send(smalltalk.send((smalltalk.IssueTile || IssueTile), "_new", []), "_withData_", [issue]));smalltalk.send(self['@issueMap'], "_at_put_", [smalltalk.send(tile, "_elementId", []), tile]);smalltalk.send(self['@knownRepos'], "_add_", [smalltalk.send(tile, "_fullProjectName", [])]);((($receiver = smalltalk.send(self, "_inProgress_", [smalltalk.send(issue, "_at_", ["labels"])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(tile, "_setOpen", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23openissues"), "_asJQuery", [])]);})() : (function(){smalltalk.send(tile, "_setInProgress", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", [])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(tile, "_setOpen", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23openissues"), "_asJQuery", [])]);}), (function(){smalltalk.send(tile, "_setInProgress", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", [])]);})]));return (($receiver = self['@currentProject']) != nil && $receiver != undefined) ? (function(){return ((($receiver = smalltalk.send(self['@currentProject'], "__eq", [smalltalk.send(tile, "_fullProjectName", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})]));})() : nil;})]);return smalltalk.send(self, "_updateFilter", []);}), false]);
smalltalk.send(self['@issueApi'], "_recentlyClosed_loadAll_", [(function(issues){return smalltalk.send(issues, "_do_", [(function(issue){var tile=nil;
(tile=smalltalk.send(smalltalk.send((smalltalk.IssueTile || IssueTile), "_new", []), "_withData_", [issue]));smalltalk.send(tile, "_setClosed", []);smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23closedissues"), "_asJQuery", [])]);return (($receiver = self['@currentProject']) != nil && $receiver != undefined) ? (function(){return ((($receiver = smalltalk.send(self['@currentProject'], "__eq", [smalltalk.send(tile, "_fullProjectName", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})]));})() : nil;})]);}), false]);
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_knownRepos'),
smalltalk.method({
selector: unescape('knownRepos'),
fn: function (){
var self=this;
return self['@knownRepos'];
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_issueMap'),
smalltalk.method({
selector: unescape('issueMap'),
fn: function (){
var self=this;
return self['@issueMap'];
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_user'),
smalltalk.method({
selector: unescape('user'),
fn: function (){
var self=this;
return self['@userData'];
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_updateFilter'),
smalltalk.method({
selector: unescape('updateFilter'),
fn: function (){
var self=this;
try{var element=nil;
(($receiver = self['@currentProject']) != nil && $receiver != undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_updateFilter', fn: function(){return true}})})();})() : nil;
(element=smalltalk.send(".projectselect", "_asJQuery", []));
smalltalk.send(element, "_change_", [(function(event){var project=nil;
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["calling change event"]);(project=smalltalk.send(element, "_val", []));return ((($receiver = smalltalk.send(project, "__eq", ["All"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_showAll", []);})() : (function(){return smalltalk.send(self, "_showOnly_", [project]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_showAll", []);}), (function(){return smalltalk.send(self, "_showOnly_", [project]);})]));})]);
smalltalk.send(element, "_empty", []);
smalltalk.send((function(html){return (function($rec){smalltalk.send($rec, "_value_", ["All"]);return smalltalk.send($rec, "_with_", ["View All Projects"]);})(smalltalk.send(html, "_option", []));}), "_appendToJQuery_", [element]);
smalltalk.send(self['@knownRepos'], "_do_", [(function(project){return smalltalk.send((function(html){return (function($rec){smalltalk.send($rec, "_value_", [project]);return smalltalk.send($rec, "_with_", [project]);})(smalltalk.send(html, "_option", []));}), "_appendToJQuery_", [element]);})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_updateFilter'){return e.fn()} throw(e)}}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_showAll'),
smalltalk.method({
selector: unescape('showAll'),
fn: function (){
var self=this;
(self['@currentProject']=nil);
smalltalk.send(smalltalk.send(".issuetile", "_asJQuery", []), "_show", []);
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_showOnly_'),
smalltalk.method({
selector: unescape('showOnly%3A'),
fn: function (aProjectName){
var self=this;
(self['@currentProject']=aProjectName);
smalltalk.send(smalltalk.send(".issueTile", "_asJQuery", []), "_each_", [(function(index, tile){var tileProject=nil;
(tile=smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [tile]));(tileProject=smalltalk.send(tile, "_attr_", [unescape("data-project")]));return ((($receiver = smalltalk.send(tileProject, "__eq", [aProjectName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(tile, "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(tile, "_hide", []);})]));})]);
return self;}
}),
smalltalk.HubboardApp);


smalltalk.HubboardApp.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", [], smalltalk.Object.klass));})() : $receiver;
return self;}
}),
smalltalk.HubboardApp.klass);


