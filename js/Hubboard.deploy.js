smalltalk.addPackage('Hubboard', {});
smalltalk.addClass('IssueTile', smalltalk.Widget, ['raw', 'title', 'body', 'issueId', 'number', 'project', 'projectOwner', 'issueStatus', 'comments', 'fullProjectName', 'elementId', 'model'], 'Hubboard');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["issuetile"]);smalltalk.send($rec, "_id_", [smalltalk.send(self, "_elementId", [])]);smalltalk.send($rec, "_at_put_", [unescape("data-project"), smalltalk.send(self['@model'], "_projectName", [])]);smalltalk.send($rec, "_at_put_", [unescape("data-issueid"), smalltalk.send(self['@model'], "_issueId", [])]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderHeader_", [html]);return (function($rec){smalltalk.send($rec, "_class_", ["title"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@model'], "_title", [])]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_postRender", []);
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
unescape('_elementId'),
smalltalk.method({
selector: unescape('elementId'),
fn: function (){
var self=this;
return (($receiver = self['@elementId']) == nil || $receiver == undefined) ? (function(){return (self['@elementId']=smalltalk.send("issuetile_", "__comma", [smalltalk.send(smalltalk.send(self['@model'], "_issueId", []), "_asString", [])]));})() : $receiver;
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_moveTo_'),
smalltalk.method({
selector: unescape('moveTo%3A'),
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
unescape('_numberClass'),
smalltalk.method({
selector: unescape('numberClass'),
fn: function (){
var self=this;
var numberClass=nil;
(numberClass="number");
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("open")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" open"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" open"]));})]));
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("inprogress")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" inprogress"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" inprogress"]));})]));
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("closed")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" closed"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" closed"]));})]));
return numberClass;
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_postRender'),
smalltalk.method({
selector: unescape('postRender'),
fn: function (){
var self=this;
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("closed")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("zIndex", "__minus_gt", ["10000"]),smalltalk.send("snap", "__minus_gt", [true])])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("zIndex", "__minus_gt", ["10000"]),smalltalk.send("snap", "__minus_gt", [true])])]);})]));
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_dblclick_", [(function(event){return smalltalk.send(self, "_viewIssue_", [event]);})]);
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_updateHeaderClass'),
smalltalk.method({
selector: unescape('updateHeaderClass'),
fn: function (){
var self=this;
var element=nil;
(element=smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "__comma", [unescape("%20%3E%20div.number")]), "_asJQuery", []));
smalltalk.send(element, "_removeClass", []);
smalltalk.send(element, "_addClass_", [smalltalk.send(self, "_numberClass", [])]);
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_withModel_'),
smalltalk.method({
selector: unescape('withModel%3A'),
fn: function (anIssue){
var self=this;
(self['@model']=anIssue);
(self['@number']=smalltalk.send(anIssue, "_number", []));
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_model'),
smalltalk.method({
selector: unescape('model'),
fn: function (){
var self=this;
return self['@model'];
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_addComment_'),
smalltalk.method({
selector: unescape('addComment%3A'),
fn: function (clickEvent){
var self=this;
var dialog=nil;
(dialog=smalltalk.send(smalltalk.send((smalltalk.CommentDialog || CommentDialog), "_new", []), "_withIssue_", [self['@model']]));
smalltalk.send(dialog, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_viewIssue_'),
smalltalk.method({
selector: unescape('viewIssue%3A'),
fn: function (onClickEvent){
var self=this;
var dialog=nil;
(dialog=smalltalk.send(smalltalk.send((smalltalk.IssueDetailDialog || IssueDetailDialog), "_new", []), "_withIssue_", [self['@model']]));
smalltalk.send(dialog, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
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
unescape('_renderHeader_'),
smalltalk.method({
selector: unescape('renderHeader%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [smalltalk.send(self, "_numberClass", [])]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(self['@model'], "_url", [])]);smalltalk.send($rec, "_target_", ["_blank"]);smalltalk.send($rec, "_with_", [smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(smalltalk.send(self['@model'], "_number", []), "_asString", [])])]);return smalltalk.send($rec, "_onClick_", [(function(event){smalltalk.send(self, "_viewIssue_", [event]);return smalltalk.send(event, "_preventDefault", []);})]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [" in "]);(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//github.com/"), "__comma", [smalltalk.send(self['@model'], "_projectOwner", [])])]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@model'], "_projectOwner", [])]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [unescape("%20/%20")]);(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//github.com/"), "__comma", [smalltalk.send(self['@model'], "_projectName", [])])]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@model'], "_project", [])]);})(smalltalk.send(html, "_a", []));return (function($rec){smalltalk.send($rec, "_style_", [unescape("float%3Aright%3B")]);smalltalk.send($rec, "_class_", ["comments"]);return smalltalk.send($rec, "_with_", [(function(){(($receiver = smalltalk.send(self['@model'], "_pullRequest", [])) != nil && $receiver != undefined) ? (function(){return (function($rec){smalltalk.send($rec, "_class_", ["pull_req"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_target_", ["_blank"]);smalltalk.send($rec, "_href_", [smalltalk.send(self['@model'], "_pullRequest", [])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [unescape("/images/pull_request.png")]);})]);})(smalltalk.send(html, "_a", []));return smalltalk.send(html, "_with_", ["Code Attached"]);})]);})(smalltalk.send(html, "_span", []));})() : nil;smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@model'], "_comments", []), "_asString", []), "__comma", [" comments"])]);return (function($rec){smalltalk.send($rec, "_class_", ["add_comment"]);smalltalk.send($rec, "_title_", ["Add Comment"]);smalltalk.send($rec, "_with_", [unescape("+")]);return smalltalk.send($rec, "_onClick_", [(function(event){return smalltalk.send(self, "_addComment_", [event]);})]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.IssueTile);



smalltalk.addClass('HubboardApp', smalltalk.Object, ['token', 'issueMap', 'issueApi', 'userApi', 'knownRepos', 'userData', 'refreshIntervalId', 'currentProject', 'refreshInterval', 'sortedRepos', 'assignedProjects'], 'Hubboard');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@token']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", ["github_access_token"]));
(self['@issueMap']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
(self['@knownRepos']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
(self['@assignedProjects']=smalltalk.send((smalltalk.Set || Set), "_new", []));
(self['@refreshInterval']=(120000));
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
smalltalk.send(self, "_showSpinner", []);
smalltalk.send(self['@userApi'], "_fetchCurrent_", [(function(data){var allRepos=nil;
(allRepos=smalltalk.send((smalltalk.Array || Array), "_new", []));(self['@userData']=data);smalltalk.send(smalltalk.send(unescape("%23logout-username"), "_asJQuery", []), "_text_", [smalltalk.send(smalltalk.send(unescape("%28"), "__comma", [smalltalk.send(data, "_at_", ["login"])]), "__comma", [unescape("%29")])]);return smalltalk.send((smalltalk.Repo || Repo), "_fetchReposForToken_withEachDo_finally_", [self['@token'], (function(result){return ((($receiver = smalltalk.send(result, "_at_", ["has_issues"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(allRepos, "_add_", [result]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(allRepos, "_add_", [result]);})]));}), (function(){smalltalk.send(allRepos, "_do_", [(function(item){var owner=nil;
(owner=smalltalk.send(smalltalk.send(item, "_at_", ["owner"]), "_at_", ["login"]));return smalltalk.send(self['@knownRepos'], "_at_put_", [smalltalk.send(smalltalk.send(owner, "__comma", [unescape("/")]), "__comma", [smalltalk.send(item, "_at_", ["name"])]), item]);})]);smalltalk.send(self, "_sortedRepos", []);return smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dcreate_issue%5D"), "_asJQuery", []), "_removeAttr_", ["disabled"]);})]);})]);
smalltalk.send(self, "_refresh", []);
smalltalk.send(self, "_startRefreshTimer", []);
smalltalk.send(smalltalk.send(".issuecolumn", "_asJQuery", []), "_droppable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("tolerance", "__minus_gt", ["pointer"]),smalltalk.send("accept", "__minus_gt", [".issuetile"]),smalltalk.send("drop", "__minus_gt", [(function(event, ui){return smalltalk.send(self, "_handleDrop_with_", [event, ui]);})])])]);
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
} catch(e) {if(e.name === 'stReturn' && e.selector === '_handleDrop_with_'){return e.fn()} throw(e)}}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
fn: function (){
var self=this;
smalltalk.send(self, "_flushColumns", []);
smalltalk.send(self['@issueApi'], "_issues_loadAll_", [(function(issue){var tile=nil;
var issueId=nil;
(issueId=smalltalk.send(issue, "_issueId", []));(tile=smalltalk.send(self['@issueMap'], "_at_ifAbsent_", [issueId, (function(){return smalltalk.send((smalltalk.IssueTile || IssueTile), "_new", []);})]));smalltalk.send(tile, "_withModel_", [issue]);smalltalk.send(self['@assignedProjects'], "_add_", [smalltalk.send(issue, "_projectName", [])]);smalltalk.send(self['@issueMap'], "_at_put_", [issueId, tile]);((($receiver = smalltalk.send(self, "_inProgress_", [smalltalk.send(issue, "_labels", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(tile, "_setOpen", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23openissues"), "_asJQuery", [])]);})() : (function(){smalltalk.send(tile, "_setInProgress", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", [])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(tile, "_setOpen", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23openissues"), "_asJQuery", [])]);}), (function(){smalltalk.send(tile, "_setInProgress", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", [])]);})]));(($receiver = self['@currentProject']) != nil && $receiver != undefined) ? (function(){return ((($receiver = smalltalk.send(self['@currentProject'], "__eq", [smalltalk.send(issue, "_projectName", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})]));})() : nil;smalltalk.send(self, "_hideSpinner", []);return smalltalk.send(self, "_updateFilter", []);}), false]);
smalltalk.send(self['@issueApi'], "_recentlyClosed_loadAll_", [(function(issue){var tile=nil;
var issueId=nil;
(issueId=smalltalk.send(issue, "_issueId", []));(tile=smalltalk.send(self['@issueMap'], "_at_ifAbsent_", [issueId, (function(){return smalltalk.send((smalltalk.IssueTile || IssueTile), "_new", []);})]));smalltalk.send(tile, "_withModel_", [issue]);smalltalk.send(tile, "_setClosed", []);smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23closedissues"), "_asJQuery", [])]);return (($receiver = self['@currentProject']) != nil && $receiver != undefined) ? (function(){return ((($receiver = smalltalk.send(self['@currentProject'], "__eq", [smalltalk.send(issue, "_projectName", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})]));})() : nil;}), false]);
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
(project=smalltalk.send(element, "_val", []));return ((($receiver = smalltalk.send(project, "__eq", ["All"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_showAll", []);})() : (function(){return smalltalk.send(self, "_showOnly_", [project]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_showAll", []);}), (function(){return smalltalk.send(self, "_showOnly_", [project]);})]));})]);
smalltalk.send(element, "_empty", []);
smalltalk.send((function(html){return (function($rec){smalltalk.send($rec, "_value_", ["All"]);return smalltalk.send($rec, "_with_", ["View All Projects"]);})(smalltalk.send(html, "_option", []));}), "_appendToJQuery_", [element]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_issueMap", []), "_values", []), "_do_", [(function(issue){return smalltalk.send(self['@assignedProjects'], "_add_", [smalltalk.send(smalltalk.send(issue, "_model", []), "_projectName", [])]);})]);
smalltalk.send(self['@assignedProjects'], "_do_", [(function(project){return smalltalk.send((function(html){return (function($rec){smalltalk.send($rec, "_value_", [project]);return smalltalk.send($rec, "_with_", [project]);})(smalltalk.send(html, "_option", []));}), "_appendToJQuery_", [element]);})]);
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
smalltalk.send(smalltalk.send(".issuetile", "_asJQuery", []), "_hide", []);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape(".issuetile%5Bdata-project%3D%22"), "__comma", [aProjectName]), "__comma", [unescape("%22%5D")]), "_asJQuery", []), "_show", []);
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_currentProject'),
smalltalk.method({
selector: unescape('currentProject'),
fn: function (){
var self=this;
return self['@currentProject'];
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_flushColumns'),
smalltalk.method({
selector: unescape('flushColumns'),
fn: function (){
var self=this;
var clearBlock=nil;
(clearBlock=(function(index, element){var item=nil;
(item=smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [element]));smalltalk.send(item, "_draggable_", ["destroy"]);return smalltalk.send(smalltalk.send(item, "_remove", []), "_removeData", []);}));
smalltalk.send(smalltalk.send(unescape("%23openissues%20%3E%20*"), "_asJQuery", []), "_each_", [clearBlock]);
smalltalk.send(smalltalk.send(unescape("%23inprogressissues%20%3E%20*"), "_asJQuery", []), "_each_", [clearBlock]);
smalltalk.send(smalltalk.send(unescape("%23closedissues%20%3E%20*"), "_asJQuery", []), "_each_", [clearBlock]);
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_showSpinner'),
smalltalk.method({
selector: unescape('showSpinner'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(unescape("%23spinner"), "_asJQuery", []), "_show", []);
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_hideSpinner'),
smalltalk.method({
selector: unescape('hideSpinner'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(unescape("%23spinner"), "_asJQuery", []), "_hide", []);
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_startRefreshTimer'),
smalltalk.method({
selector: unescape('startRefreshTimer'),
fn: function (){
var self=this;
(($receiver = self['@refreshIntervalId']) == nil || $receiver == undefined) ? (function(){return (self['@refreshIntervalId']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_setInterval_every_", [(function(){return smalltalk.send(self, "_refresh", []);}), self['@refreshInterval']]));})() : $receiver;
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_stopRefreshTimer'),
smalltalk.method({
selector: unescape('stopRefreshTimer'),
fn: function (){
var self=this;
(($receiver = self['@refreshIntervalId']) != nil && $receiver != undefined) ? (function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_clearInterval_", [self['@refreshIntervalId']]);return (self['@refreshIntervalId']=nil);})() : nil;
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_sortedRepos'),
smalltalk.method({
selector: unescape('sortedRepos'),
fn: function (){
var self=this;
return (($receiver = self['@sortedRepos']) == nil || $receiver == undefined) ? (function(){var names=nil;
(names=smalltalk.send(self['@knownRepos'], "_keys", []));return (self['@sortedRepos']=smalltalk.send(names, "_sort_", [(function(left, right){return ((($receiver = smalltalk.send(smalltalk.send(self['@knownRepos'], "_at_", [left]), "_at_", ["updated_at"])).klass === smalltalk.Number) ? $receiver >smalltalk.send(smalltalk.send(self['@knownRepos'], "_at_", [right]), "_at_", ["updated_at"]) : smalltalk.send($receiver, "__gt", [smalltalk.send(smalltalk.send(self['@knownRepos'], "_at_", [right]), "_at_", ["updated_at"])]));})]));})() : $receiver;
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_setKnownRepos_'),
smalltalk.method({
selector: unescape('setKnownRepos%3A'),
fn: function (newKnownRepos){
var self=this;
(self['@knownRepos']=newKnownRepos);
return self;}
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_assignedProjects'),
smalltalk.method({
selector: unescape('assignedProjects'),
fn: function (){
var self=this;
return self['@assignedProjects'];
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


smalltalk.addClass('HBDialog', smalltalk.Widget, ['modal', 'minWidth', 'draggable', 'elementId', 'position'], 'Hubboard');
smalltalk.addMethod(
unescape('_becomeDialog'),
smalltalk.method({
selector: unescape('becomeDialog'),
fn: function (){
var self=this;
return smalltalk.send(self, "_becomeDialog_", [(function(){return nil;})]);
return self;}
}),
smalltalk.HBDialog);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@modal']=true);
(self['@minWidth']=(500));
(self['@draggable']=false);
(self['@position']="center");
return self;}
}),
smalltalk.HBDialog);

smalltalk.addMethod(
unescape('_becomeDialog_'),
smalltalk.method({
selector: unescape('becomeDialog%3A'),
fn: function (aBlockCallback){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_dialog_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("modal", "__minus_gt", [self['@modal']]),smalltalk.send("minWidth", "__minus_gt", [self['@minWidth']]),smalltalk.send("draggable", "__minus_gt", [self['@draggable']]),smalltalk.send("position", "__minus_gt", [self['@position']]),smalltalk.send("close", "__minus_gt", [(function(event, ui){return smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_remove", []);})])])]);
smalltalk.send(aBlockCallback, "_value", []);
return self;}
}),
smalltalk.HBDialog);

smalltalk.addMethod(
unescape('_elementId'),
smalltalk.method({
selector: unescape('elementId'),
fn: function (){
var self=this;
return smalltalk.send(unescape("%23"), "__comma", [self['@elementId']]);
return self;}
}),
smalltalk.HBDialog);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_elementId", []), "_asJQuery", []);
return self;}
}),
smalltalk.HBDialog);


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
smalltalk.HBDialog.klass);


smalltalk.addClass('NewIssueDialog', smalltalk.HBDialog, [], 'Hubboard');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
var currentUser=nil;
(currentUser=smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_user", []), "_at_", ["login"]));
(function($rec){smalltalk.send($rec, "_at_put_", ["title", "Create a new issue"]);smalltalk.send($rec, "_id_", [self['@elementId']]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_name_", ["new_issue_form"]);smalltalk.send($rec, "_onSubmit_", [(function(event){smalltalk.send(self, "_submit", []);return smalltalk.send(event, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_for_", ["assignee"]);return smalltalk.send($rec, "_with_", ["Assign to: "]);})(smalltalk.send(html, "_label", []));(function($rec){smalltalk.send($rec, "_name_", ["assignee"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_value_", [currentUser]);return smalltalk.send($rec, "_with_", [currentUser]);})(smalltalk.send(html, "_option", []));})]);})(smalltalk.send(html, "_select", []));smalltalk.send(html, "_br", []);(function($rec){smalltalk.send($rec, "_for_", ["project"]);return smalltalk.send($rec, "_with_", ["Project: "]);})(smalltalk.send(html, "_label", []));(function($rec){smalltalk.send($rec, "_name_", ["project"]);smalltalk.send($rec, "_onChange_", [(function(event){return smalltalk.send(self, "_updateCollaborators", []);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_sortedRepos", []), "_do_", [(function(repo){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_currentProject", []), "__eq", [repo])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_value_", [repo]);smalltalk.send($rec, "_with_", [repo]);return smalltalk.send($rec, "_at_put_", ["selected", "true"]);})(smalltalk.send(html, "_option", []));})() : (function(){return (function($rec){smalltalk.send($rec, "_value_", [repo]);return smalltalk.send($rec, "_with_", [repo]);})(smalltalk.send(html, "_option", []));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function($rec){smalltalk.send($rec, "_value_", [repo]);smalltalk.send($rec, "_with_", [repo]);return smalltalk.send($rec, "_at_put_", ["selected", "true"]);})(smalltalk.send(html, "_option", []));}), (function(){return (function($rec){smalltalk.send($rec, "_value_", [repo]);return smalltalk.send($rec, "_with_", [repo]);})(smalltalk.send(html, "_option", []));})]));})]);})]);})(smalltalk.send(html, "_select", []));smalltalk.send(html, "_br", []);(function($rec){smalltalk.send($rec, "_for_", ["title"]);return smalltalk.send($rec, "_with_", ["Title: "]);})(smalltalk.send(html, "_label", []));(function($rec){smalltalk.send($rec, "_name_", ["title"]);return smalltalk.send($rec, "_at_put_", ["size", "40"]);})(smalltalk.send(html, "_input", []));smalltalk.send(html, "_br", []);(function($rec){smalltalk.send($rec, "_with_", ["Add body"]);smalltalk.send($rec, "_class_", [unescape("dialog-add-body")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(unescape("%23dialog-body"), "_asJQuery", []), "_show", []);})]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_br", []);(function($rec){smalltalk.send($rec, "_id_", [unescape("dialog-body")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", [(function($rec){smalltalk.send($rec, "_setName_", ["body"]);smalltalk.send($rec, "_setColumns_", [(40)]);return smalltalk.send($rec, "_setRows_", [(8)]);})(smalltalk.send((smalltalk.MarkdownTextArea || MarkdownTextArea), "_new", []))]);return smalltalk.send(html, "_br", []);})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_style_", [unescape("float%3A%20right%3B")]);smalltalk.send($rec, "_type_", ["submit"]);return smalltalk.send($rec, "_with_", ["Create"]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_form", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_becomeDialog_", [(function(){return smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dtitle%5D"), "_asJQuery", []), "_focus", []);})]);
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
(data=smalltalk.HashedCollection._fromPairs_([smalltalk.send("title", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dtitle%5D"), "_asJQuery", []), "_val", [])]),smalltalk.send("assignee", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dassignee%5D"), "_asJQuery", []), "_val", [])]),smalltalk.send("project", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dproject%5D"), "_asJQuery", []), "_val", [])]),smalltalk.send("body", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dbody%5D"), "_asJQuery", []), "_val", [])])]));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(data, "_at_", ["title"]), "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["You should probably add a title"]);return (function(){throw({name: 'stReturn', selector: '_submit', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["You should probably add a title"]);return (function(){throw({name: 'stReturn', selector: '_submit', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [unescape("/issues/create"), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(data, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_dialog_", ["close"]);return smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_refresh", []);})])])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_submit'){return e.fn()} throw(e)}}
}),
smalltalk.NewIssueDialog);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.HBDialog);
(self['@minWidth']=(450));
(self['@elementId']="new_issue");
return self;}
}),
smalltalk.NewIssueDialog);

smalltalk.addMethod(
unescape('_buttons'),
smalltalk.method({
selector: unescape('buttons'),
fn: function (){
var self=this;
return nil;
return self;}
}),
smalltalk.NewIssueDialog);

smalltalk.addMethod(
unescape('_updateCollaborators'),
smalltalk.method({
selector: unescape('updateCollaborators'),
fn: function (){
var self=this;
try{var project=nil;
var assignee=nil;
(project=smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dproject%5D"), "_asJQuery", []), "_val", []));
(assignee=smalltalk.send(unescape("%3Ainput%5Bname%3Dassignee%5D"), "_asJQuery", []));
(($receiver = project) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_updateCollaborators', fn: function(){return false}})})();})() : $receiver;
smalltalk.send((smalltalk.Repo || Repo), "_collaboratorsFor_with_", [project, (function(results){var currentUser=nil;
(currentUser=smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_user", []), "_at_", ["login"]));smalltalk.send(assignee, "_empty", []);smalltalk.send((function(html){return smalltalk.send(results, "_do_", [(function(result){var userName=nil;
(userName=smalltalk.send(result, "_at_", ["login"]));return (function($rec){smalltalk.send($rec, "_value_", [userName]);return smalltalk.send($rec, "_with_", [userName]);})(smalltalk.send(html, "_option", []));})]);}), "_appendToJQuery_", [assignee]);return smalltalk.send(assignee, "_val_", [currentUser]);})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_updateCollaborators'){return e.fn()} throw(e)}}
}),
smalltalk.NewIssueDialog);



smalltalk.addClass('IssueDetailDialog', smalltalk.HBDialog, ['model'], 'Hubboard');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.HBDialog);
(self['@minWidth']=(650));
(self['@elementId']="issue_detail");
(self['@model']=nil);
(self['@draggable']=true);
(self['@position']="top");
return self;}
}),
smalltalk.IssueDetailDialog);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_at_put_", ["title", smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self['@model'], "_number", [])]), "__comma", [unescape("%20-%20")]), "__comma", [smalltalk.send(self['@model'], "_title", [])])]);smalltalk.send($rec, "_id_", [self['@elementId']]);return smalltalk.send($rec, "_with_", [(function(){var body=nil;
(body=smalltalk.send(self['@model'], "_body", []));((($receiver = smalltalk.send(smalltalk.send(body, "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (body="No description given");})() : (function(){return (body=smalltalk.send((smalltalk.Markdown || Markdown), "_asTagBrush_", [smalltalk.send(smalltalk.send(self['@model'], "_body", []), "_asString", [])]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (body="No description given");}), (function(){return (body=smalltalk.send((smalltalk.Markdown || Markdown), "_asTagBrush_", [smalltalk.send(smalltalk.send(self['@model'], "_body", []), "_asString", [])]));})]));smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [body]);(function($rec){smalltalk.send($rec, "_id_", ["comments_container"]);smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_hr", []);smalltalk.send(smalltalk.send(html, "_strong", []), "_with_", ["Comments:"]);smalltalk.send(html, "_hr", []);return (function($rec){smalltalk.send($rec, "_id_", ["comments"]);return smalltalk.send($rec, "_style_", [unescape("overflow%3A%20auto%3B%20max-height%3A%20300px")]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));(function($rec){smalltalk.send($rec, "_style_", [unescape("float%3A%20right%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(self['@model'], "_url", [])]);smalltalk.send($rec, "_target_", ["_blank"]);return smalltalk.send($rec, "_with_", ["View on GitHub"]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_style_", [unescape("float%3A%20right%3B%20margin-right%3A%2010px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_id_", ["dialog_add_comment"]);smalltalk.send($rec, "_with_", ["Add Comment"]);return smalltalk.send($rec, "_onClick_", [(function(){var dialog=nil;
(dialog=smalltalk.send(smalltalk.send((smalltalk.CommentDialog || CommentDialog), "_new", []), "_withIssue_", [self['@model']]));return smalltalk.send(dialog, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_becomeDialog_", [(function(){return smalltalk.send(smalltalk.send(unescape("%23dialog_add_comment"), "_asJQuery", []), "_focus", []);})]);
smalltalk.send(self['@model'], "_loadComments_", [(function(comments){return smalltalk.send(smalltalk.send(comments, "_reversed", []), "_do_", [(function(comment){return smalltalk.send((function(html){return smalltalk.send(self, "_renderComment_onto_", [comment, html]);}), "_appendToJQuery_", [smalltalk.send(unescape("%23comments"), "_asJQuery", [])]);})]);})]);
return self;}
}),
smalltalk.IssueDetailDialog);

smalltalk.addMethod(
unescape('_withIssue_'),
smalltalk.method({
selector: unescape('withIssue%3A'),
fn: function (anIssue){
var self=this;
(self['@model']=anIssue);
return self;
return self;}
}),
smalltalk.IssueDetailDialog);

smalltalk.addMethod(
unescape('_renderComment_onto_'),
smalltalk.method({
selector: unescape('renderComment%3Aonto%3A'),
fn: function (comment, html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["comment_detail"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_strong", []), "_with_", [smalltalk.send("By: ", "__comma", [smalltalk.send(comment, "_login", [])])]);return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.Markdown || Markdown), "_asTagBrush_", [smalltalk.send(comment, "_body", [])])]);})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(html, "_hr", []);
smalltalk.send(smalltalk.send(unescape("%23comments_container"), "_asJQuery", []), "_show", []);
return self;}
}),
smalltalk.IssueDetailDialog);



smalltalk.addClass('CommentDialog', smalltalk.HBDialog, ['model'], 'Hubboard');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.HBDialog);
(self['@minWidth']=(450));
(self['@elementId']="new_comment");
return self;}
}),
smalltalk.CommentDialog);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_at_put_", ["title", smalltalk.send(unescape("Add%20a%20comment%20to%20issue%20%23"), "__comma", [smalltalk.send(self['@model'], "_number", [])])]);smalltalk.send($rec, "_id_", [self['@elementId']]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_name_", ["new_comment_form"]);smalltalk.send($rec, "_onSubmit_", [(function(event){smalltalk.send(self, "_submit", []);return smalltalk.send(event, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_type_", ["hidden"]);smalltalk.send($rec, "_name_", ["number"]);return smalltalk.send($rec, "_value_", [smalltalk.send(self['@model'], "_number", [])]);})(smalltalk.send(html, "_input", []));(function($rec){smalltalk.send($rec, "_id_", [unescape("dialog-body")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", [(function($rec){smalltalk.send($rec, "_setName_", ["body"]);smalltalk.send($rec, "_setColumns_", [(45)]);return smalltalk.send($rec, "_setRows_", [(8)]);})(smalltalk.send((smalltalk.MarkdownTextArea || MarkdownTextArea), "_new", []))]);return smalltalk.send(html, "_br", []);})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_style_", [unescape("float%3A%20right%3B")]);smalltalk.send($rec, "_type_", ["submit"]);return smalltalk.send($rec, "_with_", ["Add Comment"]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_form", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_becomeDialog_", [(function(){return smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dbody%5D"), "_asJQuery", []), "_focus", []);})]);
return self;}
}),
smalltalk.CommentDialog);

smalltalk.addMethod(
unescape('_withIssue_'),
smalltalk.method({
selector: unescape('withIssue%3A'),
fn: function (anIssue){
var self=this;
(self['@model']=anIssue);
return self;}
}),
smalltalk.CommentDialog);

smalltalk.addMethod(
unescape('_submit'),
smalltalk.method({
selector: unescape('submit'),
fn: function (){
var self=this;
try{var data=nil;
(data=smalltalk.HashedCollection._fromPairs_([smalltalk.send("project", "__minus_gt", [smalltalk.send(self['@model'], "_projectName", [])]),smalltalk.send("body", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dbody%5D"), "_asJQuery", []), "_val", [])])]));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(data, "_at_", ["body"]), "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["You should probably add a comment"]);return (function(){throw({name: 'stReturn', selector: '_submit', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["You should probably add a comment"]);return (function(){throw({name: 'stReturn', selector: '_submit', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [smalltalk.send(self['@model'], "_number", [])]), "__comma", [unescape("/comment")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(data, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_dialog_", ["close"]);return smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_refresh", []);})])])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_submit'){return e.fn()} throw(e)}}
}),
smalltalk.CommentDialog);



smalltalk.addClass('AboutDialog', smalltalk.HBDialog, [], 'Hubboard');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.HBDialog);
(self['@modal']=true);
(self['@elementId']="about_dialog");
return self;}
}),
smalltalk.AboutDialog);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", [self['@elementId']]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [unescape("/images/logo.png")]);smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [unescape("Hub%20board%20is%20a%20fairly%20straight-foward%20kan%20ban%20board%2C%20built%20on%20top%20of%20the%20GitHub%20v3%20API%20.%20")]);return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", ["The goal of Hub board is to help you rapidly interact with issues assigned to you in the various repositories you may work with."]);})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_becomeDialog", []);
return self;}
}),
smalltalk.AboutDialog);



smalltalk.addMethod(
unescape('_split_'),
smalltalk.method({
selector: unescape('split%3A'),
fn: function (aDelimiter){
var self=this;
return self.split(aDelimiter);;
return self;}
}),
smalltalk.String);

