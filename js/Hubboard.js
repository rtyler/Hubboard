smalltalk.addPackage('Hubboard', {});
smalltalk.addClass('NewIssueDialog', smalltalk.Widget, [], 'Hubboard');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_at_put_", ["title", "Create a new issue"]);smalltalk.send($rec, "_class_", ["new_issue"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_name_", ["new_issue_form"]);smalltalk.send($rec, "_onSubmit_", [(function(event){smalltalk.send(self, "_submit", []);return smalltalk.send(event, "_preventDefault", []);})]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_for_", ["assignee"]);return smalltalk.send($rec, "_with_", ["Assign to: "]);})(smalltalk.send(html, "_label", []));(function($rec){smalltalk.send($rec, "_type_", ["hidden"]);smalltalk.send($rec, "_name_", ["assignee"]);return smalltalk.send($rec, "_value_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_user", []), "_at_", ["login"])]);})(smalltalk.send(html, "_input", []));smalltalk.send(smalltalk.send(html, "_strong", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_user", []), "_at_", ["login"])]);smalltalk.send(html, "_br", []);(function($rec){smalltalk.send($rec, "_for_", ["project"]);return smalltalk.send($rec, "_with_", ["Project: "]);})(smalltalk.send(html, "_label", []));(function($rec){smalltalk.send($rec, "_name_", ["project"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_knownRepos", []), "_do_", [(function(repo){return (function($rec){smalltalk.send($rec, "_value_", [repo]);return smalltalk.send($rec, "_with_", [repo]);})(smalltalk.send(html, "_option", []));})]);})]);})(smalltalk.send(html, "_select", []));smalltalk.send(html, "_br", []);(function($rec){smalltalk.send($rec, "_for_", ["title"]);return smalltalk.send($rec, "_with_", ["Title: "]);})(smalltalk.send(html, "_label", []));(function($rec){smalltalk.send($rec, "_name_", ["title"]);return smalltalk.send($rec, "_at_put_", ["size", "50"]);})(smalltalk.send(html, "_input", []));smalltalk.send(html, "_br", []);(function($rec){smalltalk.send($rec, "_with_", ["Add body"]);smalltalk.send($rec, "_class_", [unescape("dialog-add-body")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(unescape("%23dialog-body"), "_asJQuery", []), "_show", []);})]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_br", []);(function($rec){smalltalk.send($rec, "_id_", [unescape("dialog-body")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_name_", ["body"]);smalltalk.send($rec, "_at_put_", ["cols", (50)]);return smalltalk.send($rec, "_at_put_", ["rows", (6)]);})(smalltalk.send(html, "_textarea", []));return smalltalk.send(html, "_br", []);})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_style_", [unescape("float%3A%20right%3B")]);smalltalk.send($rec, "_type_", ["submit"]);return smalltalk.send($rec, "_with_", ["Create"]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_form", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_becomeDialog", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%0A%09%09at%3A%20%27title%27%20put%3A%20%27Create%20a%20new%20issue%27%3B%0A%09%09class%3A%20%27new_issue%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20form%20name%3A%20%27new_issue_form%27%3B%20onSubmit%3A%20%5B%20%3Aevent%20%7C%20self%20submit.%20event%20preventDefault%20%5D%3B%20with%3A%20%5B%0A%09%09%09%09html%20label%20for%3A%20%27assignee%27%3B%20with%3A%20%27Assign%20to%3A%20%27.%0A%09%09%09%09html%20input%20type%3A%20%27hidden%27%3B%20name%3A%20%27assignee%27%3B%20value%3A%20%28HubboardApp%20current%20user%20at%3A%20%27login%27%29.%0A%09%09%09%09html%20strong%20with%3A%20%28HubboardApp%20current%20user%20at%3A%20%27login%27%29.%0A%09%09%09%09html%20br.%0A%09%09%09%09html%20label%20for%3A%20%27project%27%3B%20with%3A%20%27Project%3A%20%27.%0A%09%09%09%09html%20select%0A%09%09%09%09%09name%3A%20%27project%27%3B%0A%09%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09%09HubboardApp%20current%20knownRepos%20do%3A%20%5B%20%3Arepo%20%7C%20html%20option%20value%3A%20repo%3B%20with%3A%20repo%20%5D%5D.%0A%09%09%09%09html%20br.%0A%09%09%09%09html%20label%20for%3A%20%27title%27%3B%20with%3A%20%27Title%3A%20%27.%0A%09%09%09%09html%20input%20name%3A%20%27title%27%3B%20at%3A%20%27size%27%20put%3A%20%2750%27.%0A%09%09%09%09html%20br.%0A%09%09%09%09html%20a%20with%3A%20%27Add%20body%27%3B%20class%3A%20%27dialog-add-body%27%3B%20onClick%3A%20%5B%20%27%23dialog-body%27%20asJQuery%20show%20%5D.%0A%09%09%09%09html%20br.%0A%09%09%09%09html%20div%0A%09%09%09%09%09id%3A%20%27dialog-body%27%3B%0A%09%09%09%09%09style%3A%20%27display%3A%20none%3B%27%3B%0A%09%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09%09html%20textarea%20name%3A%20%27body%27%3B%20at%3A%20%27cols%27%20put%3A%2050%3B%20at%3A%20%27rows%27%20put%3A%206.%0A%09%09%09%09%09%09html%20br.%0A%09%09%09%09%09%5D.%0A%09%09%09%09html%20button%20style%3A%20%27float%3A%20right%3B%27%3B%20type%3A%20%27submit%27%3B%20with%3A%20%27Create%27.%0A%09%09%09%5D%0A%09%5D.%0A%0A%09self%20becomeDialog.'),
messageSends: ["at:put:", "class:", "with:", "name:", "onSubmit:", "submit", "preventDefault", "for:", "label", "type:", "value:", "at:", "user", "current", "input", "strong", "br", "do:", "knownRepos", "option", "select", "onClick:", "show", "asJQuery", "a", "id:", "style:", "textarea", "div", "button", "form", "becomeDialog"],
referencedClasses: ["HubboardApp"]
}),
smalltalk.NewIssueDialog);

smalltalk.addMethod(
unescape('_becomeDialog'),
smalltalk.method({
selector: unescape('becomeDialog'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(".new_issue", "_asJQuery", []), "_dialog_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("modal", "__minus_gt", [true]),smalltalk.send("minWidth", "__minus_gt", ["450"]),smalltalk.send("draggable", "__minus_gt", [false]),smalltalk.send("close", "__minus_gt", [(function(event, ui){smalltalk.send(smalltalk.send(unescape(".ui-dialog"), "_asJQuery", []), "_remove", []);return smalltalk.send(smalltalk.send(".new_issue", "_asJQuery", []), "_remove", []);})])])]);
return self;},
args: [],
source: unescape('becomeDialog%0A%09%27.new_issue%27%20asJQuery%20dialog%3A%20%23%7B%0A%09%09%09%27modal%27%20-%3E%20true.%0A%09%09%09%27minWidth%27%20-%3E%20%27450%27.%0A%09%09%09%27draggable%27%20-%3E%20false.%0A%09%09%09%27close%27%20-%3E%20%5B%20%3Aevent%20%3Aui%20%7C%0A%09%09%09%09%22Ugly%20hack%20to%20make%20sure%20we%20nuke%20all%20trash%20the%20jQuery%20UI%20Dialog%20leaves%20around%22%0A%09%09%09%09%27.ui-dialog%27%20asJQuery%20remove.%0A%09%09%09%09%27.new_issue%27%20asJQuery%20remove.%0A%09%09%09%5D%7D.'),
messageSends: ["dialog:", "asJQuery", unescape("-%3E"), "remove"],
referencedClasses: []
}),
smalltalk.NewIssueDialog);

smalltalk.addMethod(
unescape('_submit'),
smalltalk.method({
selector: unescape('submit'),
category: 'not yet classified',
fn: function (){
var self=this;
try{var data=nil;
(data=smalltalk.HashedCollection._fromPairs_([smalltalk.send("title", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dtitle%5D"), "_asJQuery", []), "_val", [])]),smalltalk.send("assignee", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dassignee%5D"), "_asJQuery", []), "_val", [])]),smalltalk.send("project", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dproject%5D"), "_asJQuery", []), "_val", [])]),smalltalk.send("body", "__minus_gt", [smalltalk.send(smalltalk.send(unescape("%3Ainput%5Bname%3Dbody%5D"), "_asJQuery", []), "_val", [])])]));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(data, "_at_", ["title"]), "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["You should probably add a title"]);return (function(){throw({name: 'stReturn', selector: '_submit', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["You should probably add a title"]);return (function(){throw({name: 'stReturn', selector: '_submit', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [unescape("/issues/create"), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(data, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){smalltalk.send(smalltalk.send(".new_issue", "_asJQuery", []), "_dialog_", ["close"]);return smalltalk.send(smalltalk.send((smalltalk.HubboardApp || HubboardApp), "_current", []), "_refresh", []);})])])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_submit'){return e.fn()} throw(e)}},
args: [],
source: unescape('submit%0A%09%22Take%20the%20values%20out%20of%20the%20form%20and%20actually%20submit%20them%22%0A%09%7C%20data%20%7C%0A%09data%20%3A%3D%20%23%7B%0A%09%09%27title%27%20-%3E%20%27%3Ainput%5Bname%3Dtitle%5D%27%20asJQuery%20val.%0A%09%09%27assignee%27%20-%3E%20%27%3Ainput%5Bname%3Dassignee%5D%27%20asJQuery%20val.%0A%09%09%27project%27%20-%3E%20%27%3Ainput%5Bname%3Dproject%5D%27%20asJQuery%20val.%0A%09%09%27body%27%20-%3E%20%27%3Ainput%5Bname%3Dbody%5D%27%20asJQuery%20val%0A%09%7D.%0A%0A%09%28%28data%20at%3A%20%27title%27%29%20size%29%20%3D%200%20ifTrue%3A%20%5B%20window%20alert%3A%20%27You%20should%20probably%20add%20a%20title%27.%20%5E%20false%20%5D.%0A%0A%09jQuery%20ajax%3A%20%27/issues/create%27%20options%3A%20%23%7B%27type%27%20-%3E%20%27POST%27.%0A%09%09%09%27dataType%27%20-%3E%20%27json%27.%0A%09%09%09%27data%27%20-%3E%20data%20asJSONString.%0A%09%09%09%27success%27%20-%3E%20%5B%20%27.new_issue%27%20asJQuery%20dialog%3A%20%27close%27.%20HubboardApp%20current%20refresh.%5D%7D.%0A%0A'),
messageSends: [unescape("-%3E"), "val", "asJQuery", "ifTrue:", unescape("%3D"), "size", "at:", "alert:", "ajax:options:", "asJSONString", "dialog:", "refresh", "current"],
referencedClasses: ["HubboardApp"]
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


smalltalk.addClass('IssueTile', smalltalk.Widget, ['raw', 'title', 'body', 'issueId', 'number', 'project', 'projectOwner', 'issueStatus', 'comments', 'fullProjectName', 'elementId'], 'Hubboard');
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
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("closed")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" closed"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (numberClass=smalltalk.send(numberClass, "__comma", [" closed"]));})]));
(function($rec){smalltalk.send($rec, "_class_", ["issuetile"]);smalltalk.send($rec, "_id_", [smalltalk.send(self, "_elementId", [])]);smalltalk.send($rec, "_at_put_", [unescape("data-project"), smalltalk.send(self, "_fullProjectName", [])]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [numberClass]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(self['@raw'], "_at_", ["html_url"])]);smalltalk.send($rec, "_target_", ["_blank"]);return smalltalk.send($rec, "_with_", [smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self['@number'], "_asString", [])])]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [" in "]);(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//github.com/"), "__comma", [self['@projectOwner']])]);return smalltalk.send($rec, "_with_", [self['@projectOwner']]);})(smalltalk.send(html, "_a", []));smalltalk.send(html, "_with_", [unescape("%20/%20")]);(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(unescape("https%3A//github.com/"), "__comma", [smalltalk.send(self, "_fullProjectName", [])])]);return smalltalk.send($rec, "_with_", [self['@project']]);})(smalltalk.send(html, "_a", []));return (function($rec){smalltalk.send($rec, "_style_", [unescape("float%3Aright%3B")]);smalltalk.send($rec, "_class_", ["comments"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self['@comments'], "_asString", []), "__comma", [" comments"])]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_class_", ["title"]);return smalltalk.send($rec, "_with_", [self['@title']]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
((($receiver = smalltalk.send(self['@issueStatus'], "__eq", [smalltalk.symbolFor("closed")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("zIndex", "__minus_gt", ["10000"]),smalltalk.send("snap", "__minus_gt", [true])])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_draggable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("zIndex", "__minus_gt", ["10000"]),smalltalk.send("snap", "__minus_gt", [true])])]);})]));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%7C%20numberClass%20%7C%0A%09numberClass%20%3A%3D%20%27number%27.%0A%0A%09issueStatus%20%3D%20%23open%20ifTrue%3A%20%5B%20numberClass%20%3A%3D%20numberClass%2C%20%27%20open%27%20%5D.%20%0A%09issueStatus%20%3D%20%23inprogress%20ifTrue%3A%20%5B%20numberClass%20%3A%3D%20numberClass%2C%20%27%20inprogress%27%20%5D.%20%0A%09issueStatus%20%3D%20%23closed%20ifTrue%3A%20%5B%20numberClass%20%3A%3D%20numberClass%2C%20%27%20closed%27%5D.%0A%0A%09html%20div%0A%09%09class%3A%20%27issuetile%27%3B%0A%09%09id%3A%20self%20elementId%3B%0A%09%09at%3A%20%27data-project%27%20put%3A%20self%20fullProjectName%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20numberClass%3B%0A%09%09%09%09with%3A%20%5B%20%0A%09%09%09%09%09html%20a%20href%3A%20%28raw%20at%3A%20%27html_url%27%29%3B%20target%3A%20%27_blank%27%3B%20with%3A%20%28%27%23%27%2C%20number%20asString%29.%0A%09%09%09%09%09html%20with%3A%20%27%20in%20%27.%0A%09%09%09%09%09html%20a%20href%3A%20%28%27https%3A//github.com/%27%2C%20projectOwner%29%3B%20with%3A%20projectOwner.%0A%09%09%09%09%09html%20with%3A%20%27%20/%20%27.%0A%09%09%09%09%09html%20%20a%20href%3A%20%28%27https%3A//github.com/%27%2C%20self%20fullProjectName%29%3B%20with%3A%20project.%0A%09%09%09%09%09html%20span%0A%09%09%09%09%09%09style%3A%20%27float%3Aright%3B%27%3B%0A%09%09%09%09%09%09class%3A%20%27comments%27%3B%0A%09%09%09%09%09%09with%3A%20%28comments%20asString%2C%20%27%20comments%27%29.%0A%09%09%09%09%5D.%0A%09%09%09html%20div%20class%3A%20%27title%27%3B%20with%3A%20title.%0A%09%09%5D.%0A%0A%09%22After%20we%20render%2C%20we%20should%20probably%20make%20this%20sucker%20draggable%22%0A%09issueStatus%20%3D%20%23closed%20ifFalse%3A%20%5B%20self%20asJQuery%20draggable%3A%20%23%7B%27zIndex%27%20-%3E%20%2710000%27.%20%27snap%27%20-%3E%20true%20%7D%5D.'),
messageSends: ["ifTrue:", unescape("%3D"), unescape("%2C"), "class:", "id:", "elementId", "at:put:", "fullProjectName", "with:", "href:", "at:", "target:", "asString", "a", "style:", "span", "div", "ifFalse:", "draggable:", "asJQuery", unescape("-%3E")],
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
(self['@comments']=smalltalk.send(dataHash, "_at_", ["comments"]));
(issueInfo=smalltalk.send(self, "_parseUrl_", [smalltalk.send(dataHash, "_at_", ["html_url"])]));
(self['@project']=smalltalk.send(issueInfo, "_at_", ["project"]));
(self['@projectOwner']=smalltalk.send(issueInfo, "_at_", ["owner"]));
return self;},
args: ["dataHash"],
source: unescape('withData%3A%20dataHash%0A%09%22Set%20up%20a%20the%20tile%20with%20data%20from%20the%20GitHub%20API%22%0A%09%7C%20issueInfo%20%7C%0A%09raw%20%3A%3D%20dataHash.%0A%09issueId%20%3A%3D%20dataHash%20at%3A%20%27id%27.%0A%09number%20%3A%3D%20dataHash%20at%3A%20%27number%27.%0A%09title%20%3A%3D%20dataHash%20at%3A%20%27title%27.%0A%09body%20%3A%3D%20dataHash%20at%3A%20%27body%27.%0A%09comments%20%3A%3D%20dataHash%20at%3A%20%27comments%27.%0A%0A%09issueInfo%20%3A%3D%20self%20parseUrl%3A%20%28dataHash%20at%3A%20%27html_url%27%29.%0A%09project%20%3A%3D%20issueInfo%20at%3A%20%27project%27.%0A%09projectOwner%20%3A%3D%20issueInfo%20at%3A%20%27owner%27.'),
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
return (($receiver = self['@elementId']) == nil || $receiver == undefined) ? (function(){return (self['@elementId']=smalltalk.send("issuetile_", "__comma", [smalltalk.send(self['@issueId'], "_asString", [])]));})() : $receiver;
return self;},
args: [],
source: unescape('elementId%0A%09%5E%20elementId%20ifNil%3A%20%5B%20elementId%20%3A%3D%20%27issuetile_%27%2C%20issueId%20asString%20%5D.'),
messageSends: ["ifNil:", unescape("%2C"), "asString"],
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
try{((($receiver = smalltalk.send(aColumnId, "__eq", ["inprogressissues"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var data=nil;
(data=smalltalk.HashedCollection._fromPairs_([smalltalk.send("project", "__minus_gt", [smalltalk.send(self, "_fullProjectName", [])])]));smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [self['@number']]), "__comma", [unescape("/label")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(data, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "__comma", [unescape("%20%3E%20div.number")]), "_asJQuery", []), "_addClass_", ["inprogress"]);return smalltalk.send(self, "_setInProgress", []);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["fail"]);})])])]);return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var data=nil;
(data=smalltalk.HashedCollection._fromPairs_([smalltalk.send("project", "__minus_gt", [smalltalk.send(self, "_fullProjectName", [])])]));smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [self['@number']]), "__comma", [unescape("/label")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(data, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "__comma", [unescape("%20%3E%20div.number")]), "_asJQuery", []), "_addClass_", ["inprogress"]);return smalltalk.send(self, "_setInProgress", []);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["fail"]);})])])]);return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})]));
((($receiver = smalltalk.send(aColumnId, "__eq", ["openissues"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var data=nil;
(data=smalltalk.HashedCollection._fromPairs_([smalltalk.send("project", "__minus_gt", [smalltalk.send(self, "_fullProjectName", [])])]));smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [self['@number']]), "__comma", [unescape("/revert")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(data, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "__comma", [unescape("%20%3E%20div.number")]), "_asJQuery", []), "_addClass_", ["open"]);return smalltalk.send(self, "_setOpen", []);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["fail"]);})])])]);return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var data=nil;
(data=smalltalk.HashedCollection._fromPairs_([smalltalk.send("project", "__minus_gt", [smalltalk.send(self, "_fullProjectName", [])])]));smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [self['@number']]), "__comma", [unescape("/revert")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(data, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "__comma", [unescape("%20%3E%20div.number")]), "_asJQuery", []), "_addClass_", ["open"]);return smalltalk.send(self, "_setOpen", []);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["fail"]);})])])]);return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})]));
((($receiver = smalltalk.send(aColumnId, "__eq", ["closedissues"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var data=nil;
(data=smalltalk.HashedCollection._fromPairs_([smalltalk.send("project", "__minus_gt", [smalltalk.send(self, "_fullProjectName", [])])]));smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [self['@number']]), "__comma", [unescape("/close")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(data, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){var element=nil;
(element=smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "__comma", [unescape("%20%3E%20div.number")]), "_asJQuery", []));smalltalk.send(element, "_removeClass_", ["inprogress"]);smalltalk.send(element, "_removeClass_", ["open"]);smalltalk.send(element, "_addClass_", ["closed"]);return smalltalk.send(self, "_setClosed", []);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["fail"]);})])])]);return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var data=nil;
(data=smalltalk.HashedCollection._fromPairs_([smalltalk.send("project", "__minus_gt", [smalltalk.send(self, "_fullProjectName", [])])]));smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("/issues/"), "__comma", [self['@number']]), "__comma", [unescape("/close")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(data, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(){var element=nil;
(element=smalltalk.send(smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "__comma", [unescape("%20%3E%20div.number")]), "_asJQuery", []));smalltalk.send(element, "_removeClass_", ["inprogress"]);smalltalk.send(element, "_removeClass_", ["open"]);smalltalk.send(element, "_addClass_", ["closed"]);return smalltalk.send(self, "_setClosed", []);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["fail"]);})])])]);return (function(){throw({name: 'stReturn', selector: '_moveTo_', fn: function(){return true}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_moveTo_'){return e.fn()} throw(e)}},
args: ["aColumnId"],
source: unescape('moveTo%3A%20aColumnId%0A%09%22Handle%20the%20invocation%20of%20the%20right%20callbacks%20when%20we%20move%20from%20one%20column%20to%20another%0A%09%20The%20lines%20blur%20a%20bit%20here%20on%20%27view%27%20versus%20%27controller%27%22%0A%0A%09aColumnId%20%3D%20%27inprogressissues%27%20ifTrue%3A%20%5B%0A%09%09%7C%20data%20%7C%0A%09%09data%20%3A%3D%20%23%7B%27project%27%20-%3E%20self%20fullProjectName%20%7D.%0A%09%09jQuery%20ajax%3A%20%28%27/issues/%27%2C%20number%2C%20%27/label%27%29%0A%09%09%09%09options%3A%20%23%7B%0A%09%09%09%09%09%27type%27%20-%3E%20%27POST%27.%0A%09%09%09%09%09%27dataType%27%20-%3E%20%27json%27.%0A%09%09%09%09%09%27data%27%20-%3E%20data%20asJSONString.%0A%09%09%09%09%09%27success%27%20-%3E%20%5B%0A%09%09%09%09%09%09%28%27%23%27%2C%20self%20elementId%2C%20%27%20%3E%20div.number%27%29%20asJQuery%20addClass%3A%20%27inprogress%27.%0A%09%09%09%09%09%09self%20setInProgress.%0A%09%09%09%09%09%5D.%0A%09%09%09%09%09%27error%27%20-%3E%20%5B%20console%20log%3A%20%27fail%27%5D%0A%09%09%09%09%09%7D.%0A%09%09%5E%20true.%0A%09%5D.%0A%0A%09aColumnId%20%3D%20%27openissues%27%20ifTrue%3A%20%5B%0A%09%09%7C%20data%20%7C%0A%09%09data%20%3A%3D%20%23%7B%27project%27%20-%3E%20self%20fullProjectName%20%7D.%0A%09%09jQuery%20ajax%3A%20%28%27/issues/%27%2C%20number%2C%20%27/revert%27%29%0A%09%09%09%09options%3A%20%23%7B%0A%09%09%09%09%09%27type%27%20-%3E%20%27POST%27.%0A%09%09%09%09%09%27dataType%27%20-%3E%20%27json%27.%0A%09%09%09%09%09%27data%27%20-%3E%20data%20asJSONString.%0A%09%09%09%09%09%27success%27%20-%3E%20%5B%0A%09%09%09%09%09%09%28%27%23%27%2C%20self%20elementId%2C%20%27%20%3E%20div.number%27%29%20asJQuery%20addClass%3A%20%27open%27.%0A%09%09%09%09%09%09self%20setOpen.%0A%09%09%09%09%09%5D.%0A%09%09%09%09%09%27error%27%20-%3E%20%5B%20console%20log%3A%20%27fail%27%5D%0A%09%09%09%09%09%7D.%0A%09%09%5E%20%20true.%0A%09%5D.%0A%0A%09aColumnId%20%3D%20%27closedissues%27%20ifTrue%3A%20%5B%0A%09%09%7C%20data%20%7C%0A%09%09data%20%3A%3D%20%23%7B%27project%27%20-%3E%20self%20fullProjectName%7D.%0A%09%09jQuery%20ajax%3A%20%28%27/issues/%27%2C%20number%2C%20%27/close%27%29%0A%09%09%09%09options%3A%20%23%7B%0A%09%09%09%09%09%27type%27%20-%3E%20%27POST%27.%0A%09%09%09%09%09%27dataType%27%20-%3E%20%27json%27.%0A%09%09%09%09%09%27data%27%20-%3E%20data%20asJSONString.%0A%09%09%09%09%09%27success%27%20-%3E%20%5B%0A%09%09%09%09%09%09%7C%20element%20%7C%0A%09%09%09%09%09%09element%20%3A%3D%20%28%27%23%27%2C%20self%20elementId%2C%20%27%20%3E%20div.number%27%29%20asJQuery.%0A%09%09%09%09%09%09element%20removeClass%3A%20%27inprogress%27.%0A%09%09%09%09%09%09element%20removeClass%3A%20%27open%27.%0A%09%09%09%09%09%09element%20addClass%3A%20%27closed%27.%0A%09%09%09%09%09%09self%20setClosed.%0A%09%09%09%09%09%5D.%0A%09%09%09%09%09%27error%27%20-%3E%20%5B%20console%20log%3A%20%27fail%27%5D%0A%09%09%09%09%09%7D.%0A%09%09%5E%20true.%0A%09%5D.'),
messageSends: ["ifTrue:", unescape("%3D"), unescape("-%3E"), "fullProjectName", "ajax:options:", unescape("%2C"), "asJSONString", "addClass:", "asJQuery", "elementId", "setInProgress", "log:", "setOpen", "removeClass:", "setClosed"],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_setClosed'),
smalltalk.method({
selector: unescape('setClosed'),
category: 'not yet classified',
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
unescape('_project'),
smalltalk.method({
selector: unescape('project'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@project'];
return self;},
args: [],
source: unescape('project%0A%09%5E%20project.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_projectOwner'),
smalltalk.method({
selector: unescape('projectOwner'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@projectOwner'];
return self;},
args: [],
source: unescape('projectOwner%0A%09%5E%20projectOwner.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.IssueTile);

smalltalk.addMethod(
unescape('_fullProjectName'),
smalltalk.method({
selector: unescape('fullProjectName'),
category: 'not yet classified',
fn: function (){
var self=this;
return (($receiver = self['@fullProjectName']) == nil || $receiver == undefined) ? (function(){return (self['@fullProjectName']=smalltalk.send(smalltalk.send(self['@projectOwner'], "__comma", [unescape("/")]), "__comma", [self['@project']]));})() : $receiver;
return self;},
args: [],
source: unescape('fullProjectName%0A%09%5E%20fullProjectName%20ifNil%3A%20%5B%20fullProjectName%20%3A%3D%20projectOwner%2C%20%27/%27%2C%20project%20%5D.'),
messageSends: ["ifNil:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.IssueTile);



smalltalk.addClass('HubboardApp', smalltalk.Object, ['token', 'issueMap', 'issueApi', 'userApi', 'knownRepos', 'userData', 'refreshIntervalId', 'currentProject'], 'Hubboard');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function (){
var self=this;
(self['@token']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", ["github_access_token"]));
(self['@issueMap']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
(self['@knownRepos']=smalltalk.send((smalltalk.Set || Set), "_new", []));
return self;},
args: [],
source: unescape('initialize%0A%09token%20%3A%3D%20window%20at%3A%20%27github_access_token%27.%0A%09issueMap%20%3A%3D%20Dictionary%20new.%0A%09knownRepos%20%3A%3D%20Set%20new.'),
messageSends: ["at:", "new"],
referencedClasses: ["Dictionary", "Set"]
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_bootstrap'),
smalltalk.method({
selector: unescape('bootstrap'),
category: 'not yet classified',
fn: function (){
var self=this;
(self['@issueApi']=smalltalk.send(smalltalk.send((smalltalk.Issues || Issues), "_new", []), "_setToken_", [self['@token']]));
(self['@userApi']=smalltalk.send(smalltalk.send((smalltalk.Users || Users), "_new", []), "_setToken_", [self['@token']]));
smalltalk.send(self['@userApi'], "_fetchCurrent_", [(function(data){return (self['@userData']=data);})]);
smalltalk.send(self, "_refresh", []);
(self['@refreshIntervalId']=smalltalk.send((typeof window == 'undefined' ? nil : window), "_setInterval_every_", [(function(){return smalltalk.send(self, "_refresh", []);}), (120000)]));
smalltalk.send(smalltalk.send(".issuecolumn", "_asJQuery", []), "_droppable_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("tolerance", "__minus_gt", ["pointer"]),smalltalk.send("drop", "__minus_gt", [(function(event, ui){return smalltalk.send(self, "_handleDrop_with_", [event, ui]);})])])]);
return self;},
args: [],
source: unescape('bootstrap%0A%09issueApi%20%3A%3D%20Issues%20new%20setToken%3A%20token.%0A%09userApi%20%3A%3D%20Users%20new%20setToken%3A%20token.%0A%09userApi%20fetchCurrent%3A%20%5B%20%3Adata%20%7C%20userData%20%3A%3D%20data%20%5D.%0A%09self%20refresh.%0A%09refreshIntervalId%20%3A%3D%20window%20setInterval%3A%20%5B%20self%20refresh%20%5D%20every%3A%20120000.%0A%09%27.issuecolumn%27%20asJQuery%20droppable%3A%20%23%7B%27tolerance%27%20-%3E%20%27pointer%27.%0A%09%09%27drop%27%20-%3E%20%5B%20%3Aevent%20%3Aui%20%7C%20self%20handleDrop%3A%20event%20with%3A%20ui%5D%7D.'),
messageSends: ["setToken:", "new", "fetchCurrent:", "refresh", "setInterval:every:", "droppable:", "asJQuery", unescape("-%3E"), "handleDrop:with:"],
referencedClasses: ["Issues", "Users"]
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

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
category: 'not yet classified',
fn: function (){
var self=this;
var clearBlock=nil;
(clearBlock=(function(index, element){var item=nil;
(item=smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [element]));smalltalk.send(item, "_draggable_", ["destroy"]);return smalltalk.send(smalltalk.send(item, "_remove", []), "_removeData", []);}));
smalltalk.send(smalltalk.send(unescape("%23openissues%20%3E%20*"), "_asJQuery", []), "_each_", [clearBlock]);
smalltalk.send(smalltalk.send(unescape("%23inprogressissues%20%3E%20*"), "_asJQuery", []), "_each_", [clearBlock]);
smalltalk.send(smalltalk.send(unescape("%23closedissues%20%3E%20*"), "_asJQuery", []), "_each_", [clearBlock]);
smalltalk.send(self['@issueApi'], "_issues_loadAll_", [(function(issues){smalltalk.send(issues, "_do_", [(function(issue){var tile=nil;
var issueId=nil;
(issueId=smalltalk.send(issue, "_at_", ["id"]));(tile=smalltalk.send(self['@issueMap'], "_at_ifAbsent_", [issueId, (function(){return smalltalk.send((smalltalk.IssueTile || IssueTile), "_new", []);})]));smalltalk.send(tile, "_withData_", [issue]);smalltalk.send(self['@issueMap'], "_at_put_", [issueId, tile]);smalltalk.send(self['@knownRepos'], "_add_", [smalltalk.send(tile, "_fullProjectName", [])]);((($receiver = smalltalk.send(self, "_inProgress_", [smalltalk.send(issue, "_at_", ["labels"])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(tile, "_setOpen", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23openissues"), "_asJQuery", [])]);})() : (function(){smalltalk.send(tile, "_setInProgress", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", [])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(tile, "_setOpen", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23openissues"), "_asJQuery", [])]);}), (function(){smalltalk.send(tile, "_setInProgress", []);return smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23inprogressissues"), "_asJQuery", [])]);})]));return (($receiver = self['@currentProject']) != nil && $receiver != undefined) ? (function(){return ((($receiver = smalltalk.send(self['@currentProject'], "__eq", [smalltalk.send(tile, "_fullProjectName", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})]));})() : nil;})]);return smalltalk.send(self, "_updateFilter", []);}), false]);
smalltalk.send(self['@issueApi'], "_recentlyClosed_loadAll_", [(function(issues){return smalltalk.send(issues, "_do_", [(function(issue){var tile=nil;
var issueId=nil;
(issueId=smalltalk.send(issue, "_at_", ["id"]));(tile=smalltalk.send(self['@issueMap'], "_at_ifAbsent_", [issueId, (function(){return smalltalk.send((smalltalk.IssueTile || IssueTile), "_new", []);})]));smalltalk.send(tile, "_withData_", [issue]);smalltalk.send(tile, "_setClosed", []);smalltalk.send(tile, "_appendToJQuery_", [smalltalk.send(unescape("%23closedissues"), "_asJQuery", [])]);return (($receiver = self['@currentProject']) != nil && $receiver != undefined) ? (function(){return ((($receiver = smalltalk.send(self['@currentProject'], "__eq", [smalltalk.send(tile, "_fullProjectName", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(tile, "_asJQuery", []), "_hide", []);})]));})() : nil;})]);}), false]);
return self;},
args: [],
source: unescape('refresh%0A%09%7C%20clearBlock%20%7C%0A%09clearBlock%20%3A%3D%20%5B%20%3Aindex%20%3Aelement%20%7C%0A%09%09%7C%20item%20%7C%0A%09%09item%20%3A%3D%20window%20jQuery%3A%20element.%0A%09%09item%20draggable%3A%20%27destroy%27.%0A%09%09item%20remove%20removeData.%0A%09%5D.%0A%09%27%23openissues%20%3E%20*%27%20asJQuery%20each%3A%20clearBlock.%0A%09%27%23inprogressissues%20%3E%20*%27%20asJQuery%20each%3A%20clearBlock.%0A%09%27%23closedissues%20%3E%20*%27%20asJQuery%20each%3A%20clearBlock.%0A%0A%09issueApi%20issues%3A%20%5B%20%3Aissues%20%7C%0A%09%09issues%20do%3A%20%5B%20%3Aissue%20%7C%0A%09%09%09%7C%20tile%20issueId%20%7C%0A%09%09%09issueId%20%3A%3D%20issue%20at%3A%20%27id%27.%0A%09%09%09tile%20%3A%3D%20issueMap%20at%3A%20issueId%20ifAbsent%3A%20%5B%20IssueTile%20new%20%5D.%0A%09%09%09tile%20withData%3A%20issue.%0A%09%09%09issueMap%20at%3A%20issueId%20put%3A%20tile.%0A%09%09%09knownRepos%20add%3A%20%28tile%20fullProjectName%29.%0A%09%09%09%28self%20inProgress%3A%20%28issue%20at%3A%20%27labels%27%29%29%0A%09%09%09%09%09ifFalse%3A%20%5B%20tile%20setOpen.%20tile%20appendToJQuery%3A%20%28%27%23openissues%27%20asJQuery%29%20%5D%0A%09%09%09%09%09ifTrue%3A%20%5B%20tile%20setInProgress.%20tile%20appendToJQuery%3A%20%28%27%23inprogressissues%27%20asJQuery%29%20%5D.%0A%09%09%09currentProject%20ifNotNil%3A%20%5B%0A%09%09%09%09currentProject%20%3D%20%28tile%20fullProjectName%29%20ifFalse%3A%20%5Btile%20asJQuery%20hide%5D.%0A%09%09%09%5D.%0A%09%09%5D.%0A%09%09%22%20Once%20we%27ve%20loaded%20all%20our%20knownRepos%20up%2C%20we%20can%20update%20the%20filter%22%0A%09%09self%20updateFilter.%0A%09%5D%20loadAll%3A%20false.%0A%0A%09issueApi%20recentlyClosed%3A%20%5B%20%3Aissues%20%7C%0A%09%09issues%20do%3A%20%5B%20%3Aissue%20%7C%0A%09%09%09%7C%20tile%20issueId%20%7C%0A%09%09%09issueId%20%3A%3D%20issue%20at%3A%20%27id%27.%0A%09%09%09tile%20%3A%3D%20issueMap%20at%3A%20issueId%20ifAbsent%3A%20%5B%20IssueTile%20new%20%5D.%0A%09%09%09tile%20withData%3A%20issue.%0A%09%09%09tile%20setClosed.%0A%09%09%09tile%20appendToJQuery%3A%20%28%27%23closedissues%27%20asJQuery%29.%0A%09%09%09currentProject%20ifNotNil%3A%20%5B%0A%09%09%09%09currentProject%20%3D%20%28tile%20fullProjectName%29%20ifFalse%3A%20%5Btile%20asJQuery%20hide%5D.%0A%09%09%09%5D.%0A%09%5D%5D%20loadAll%3A%20false.'),
messageSends: ["jQuery:", "draggable:", "removeData", "remove", "each:", "asJQuery", "issues:loadAll:", "do:", "at:", "at:ifAbsent:", "new", "withData:", "at:put:", "add:", "fullProjectName", "ifFalse:ifTrue:", "inProgress:", "setOpen", "appendToJQuery:", "setInProgress", "ifNotNil:", "ifFalse:", unescape("%3D"), "hide", "updateFilter", "recentlyClosed:loadAll:", "setClosed"],
referencedClasses: ["IssueTile"]
}),
smalltalk.HubboardApp);

smalltalk.addMethod(
unescape('_knownRepos'),
smalltalk.method({
selector: unescape('knownRepos'),
category: 'not yet classified',
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
category: 'not yet classified',
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
category: 'not yet classified',
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
category: 'not yet classified',
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
category: 'not yet classified',
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
category: 'not yet classified',
fn: function (aProjectName){
var self=this;
(self['@currentProject']=aProjectName);
smalltalk.send(smalltalk.send(".issueTile", "_asJQuery", []), "_each_", [(function(index, tile){var tileProject=nil;
(tile=smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [tile]));(tileProject=smalltalk.send(tile, "_attr_", [unescape("data-project")]));return ((($receiver = smalltalk.send(tileProject, "__eq", [aProjectName])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(tile, "_hide", []);})() : (function(){return smalltalk.send(tile, "_show", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(tile, "_hide", []);}), (function(){return smalltalk.send(tile, "_show", []);})]));})]);
return self;},
args: ["aProjectName"],
source: unescape('showOnly%3A%20aProjectName%0A%09%22Only%20show%20tiles%20with%20data-project%3DaProjectName%22%0A%09currentProject%20%3A%3D%20aProjectName.%0A%09%27.issueTile%27%20asJQuery%20each%3A%20%5B%20%3Aindex%20%3Atile%20%7C%0A%09%09%7C%20tileProject%20%7C%0A%09%09tile%20%3A%3D%20window%20jQuery%3A%20tile.%0A%09%09tileProject%20%3A%3D%20tile%20attr%3A%20%27data-project%27.%0A%09%09tileProject%20%3D%20aProjectName%0A%09%09%09ifFalse%3A%20%5B%20tile%20hide%20%5D%0A%09%09%09ifTrue%3A%20%5B%20tile%20show%20%5D.%0A%09%5D.'),
messageSends: ["each:", "asJQuery", "jQuery:", "attr:", "ifFalse:ifTrue:", unescape("%3D"), "hide", "show"],
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


