(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,a,t){e.exports={button:"Affairs_button__34vMv",focus:"Affairs_focus__2tewT",active:"Affairs_active__MWqFU",affair:"Affairs_affair__3o08k",item:"Affairs_item__1MZD9",high:"Affairs_high__3mKec",middle:"Affairs_middle__U5gom",low:"Affairs_low__zn56n"}},,function(e,a,t){e.exports={message:"Message_message__2gP3b",img:"Message_img__OMPcO",invertedBorderRadius:"Message_invertedBorderRadius__3S60O",angle:"Message_angle__zS6H5",messageText:"Message_messageText__2J6Ox",nameText:"Message_nameText__28Pbp",timeText:"Message_timeText__1JCFe"}},,,,,,function(e,a,t){e.exports={App:"App_App__2xOC2"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__1w0if",error:"Greeting_error__2NgCw"}},function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(8),l=t.n(i),c=(t(16),t(9)),s=t.n(c),o=t(3),m=t.n(o);var u=function(e){return n.a.createElement("div",{className:m.a.message},n.a.createElement("img",{src:e.avatar,alt:"avatar",className:m.a.img}),n.a.createElement("div",{className:m.a.angle}),n.a.createElement("div",{className:m.a.invertedBorderRadius},n.a.createElement("div",{className:m.a.nameText},e.name),n.a.createElement("div",{className:m.a.messageText},e.message),n.a.createElement("div",{className:m.a.timeText},e.time)))},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",d="Some Name",_="some text",v="22:00";var E=function(){return n.a.createElement("div",null,n.a.createElement("hr",null),"homeworks 1",n.a.createElement(u,{avatar:f,name:d,message:_,time:v}))},g=t(2),h=t(5),b=t(1),p=t.n(b);var k=function(e){var a=p.a.item+" "+p.a[e.affair.priority];return n.a.createElement("div",{className:p.a.affair},n.a.createElement("div",{className:p.a.item},e.affair.name),n.a.createElement("div",{className:a},"[",e.affair.priority,"]"),n.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:p.a.item+" "+p.a.button},"x"))};var w=function(e){var a=e.data.map((function(a){return n.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return p.a.button,"all"===e.filter&&p.a.active,p.a.button,"high"===e.filter&&p.a.active,p.a.button,"middle"===e.filter&&p.a.active,p.a.button,"low"===e.filter&&p.a.active,n.a.createElement("div",{style:p.a},a,n.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),n.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),n.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),n.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(r.useState)(C),a=Object(g.a)(e,2),t=a[0],i=a[1],l=Object(r.useState)("all"),c=Object(g.a)(l,2),s=c[0],o=c[1],m=function(e,a){return"all"===a?e:Object(h.a)(e.filter((function(e){return e.priority===a})))}(t,s);return n.a.createElement("div",null,n.a.createElement("hr",null),"homeworks 2",n.a.createElement(w,{data:m,setFilter:o,deleteAffairCallback:function(e){return i(function(e,a){return Object(h.a)(e.filter((function(e){return e._id!==a})))}(t,e))},filter:s}),n.a.createElement("hr",null),n.a.createElement("hr",null))},A=t(10),N=t.n(A),x=function(e){var a=e.name,t=e.setNameCallback,r=e.addUser,i=e.error,l=e.totalUsers;N.a.error;return n.a.createElement("div",null,n.a.createElement("input",{value:a,onChange:t,className:i?"error":""}),n.a.createElement("button",{onClick:r},"add"),n.a.createElement("span",null,l),i&&n.a.createElement("div",{className:"error"},i))},j=function(e){var a=e.users,t=e.addUserCallback,i=Object(r.useState)(""),l=Object(g.a)(i,2),c=l[0],s=l[1],o=Object(r.useState)(""),m=Object(g.a)(o,2),u=m[0],f=m[1],d=a.length;return n.a.createElement(x,{name:c,setNameCallback:function(e){f(""),s(e.currentTarget.value)},addUser:function(){var e=c.trim();""!==e?(alert("Hello ".concat(e,"!")),t(e),s("")):f("Title is required")},error:u,totalUsers:d})},M=t(19);var S=function(){var e=Object(r.useState)([]),a=Object(g.a)(e,2),t=a[0],i=a[1];return n.a.createElement("div",null,n.a.createElement("hr",null),"homeworks 3",n.a.createElement(j,{users:t,addUserCallback:function(e){i([].concat(Object(h.a)(t),[{_id:Object(M.a)(),name:e}]))}}),n.a.createElement("hr",null),n.a.createElement("hr",null))};var T=function(){return n.a.createElement("div",{className:s.a.App},n.a.createElement("div",null,"react homeworks:"),n.a.createElement(E,null),n.a.createElement(O,null),n.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.293b12bf.chunk.js.map