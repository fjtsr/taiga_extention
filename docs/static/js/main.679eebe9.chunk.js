(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){e.exports=a(299)},142:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n,c,r=a(1),u=a.n(r),s=a(30),o=a.n(s),i=(a(142),a(144),a(17)),l=a(302),d=a(296),m=a(295),f=a(300),_=a(294),p=a(293),E=a(14),b=a.n(E),S=a(23),O=a.n(S);!function(e){e.SET_URL="SET_URL",e.SET_PID="SET_PID",e.SET_MID="SET_MID",e.SET_MILESTONES="SET_MILESTONES",e.SET_CUSTOM_EID="SET_CUSTOM_EID",e.SET_CUSTOM_RID="SET_CUSTOM_RID",e.SET_CUSTOM_ATTRS="SET_CUSTOM_ATTRS",e.SET_BIZ_DAYS="SET_BIZ_DAYS",e.ADD_BIZ_DAY="ADD_BIZ_DAY",e.REMOVE_BIZ_DAY="REMOVE_BIZ_DAY",e.SET_TASKS="SET_TASKS",e.SET_CUSTOM_VALUE_MAP="SET_CUSTOM_VALUE_MAP"}(n||(n={})),function(e){e.URL="taiga_url",e.PID="taiga_pid",e.MID="taiga_mid",e.CUSTOM_EID="taiga_custom_eid",e.CUSTOM_RID="taiga_custom_rid",e.BIZ_DAYS="taiga_biz_days"}(c||(c={}));var v=function(e){return localStorage.getItem(e)||""},y=function(e,t){return t?v("".concat(t,"/").concat(e)):""},T=function(e,t){localStorage.setItem(e,t)},j=function(e,t,a){t&&T("".concat(t,"/").concat(e),a)},D=function(){var e=v(c.URL),t=v(c.PID),a=v(c.MID),n=y(c.CUSTOM_EID,t),r=y(c.CUSTOM_RID,t),u=y(c.BIZ_DAYS,a);return{url:e,pid:t,mid:a,custom_eid:n,custom_rid:r,custom_attrs:[],biz_days:b.a.compact(u.split(",")).sort(),milestones:[],tasks:[],custom_value_map:new WeakMap}},C=a(88),h=a(20),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_URL:var a=t.payload.url;return T(c.URL,a),Object(h.a)({},e,{url:a});case n.SET_PID:var r=t.payload.pid;return T(c.PID,r),Object(h.a)({},e,{pid:r,mid:"",custom_eid:y(c.CUSTOM_EID,r),custom_rid:y(c.CUSTOM_RID,r),custom_attrs:[],milestones:[],custom_value_map:new WeakMap});case n.SET_MID:var u=t.payload.mid;return T(c.MID,u),Object(h.a)({},e,{mid:u,tasks:[],biz_days:b.a.compact(y(c.BIZ_DAYS,u).split(",")).sort()});case n.SET_MILESTONES:var s=t.payload.milestones;return Object(h.a)({},e,{milestones:s});case n.SET_CUSTOM_EID:var o=t.payload.custom_eid;return j(c.CUSTOM_EID,e.pid,o),Object(h.a)({},e,{custom_eid:o});case n.SET_CUSTOM_ATTRS:var i=t.payload.custom_attrs;return Object(h.a)({},e,{custom_attrs:i});case n.SET_CUSTOM_RID:var l=t.payload.custom_rid;return j(c.CUSTOM_RID,e.pid,l),Object(h.a)({},e,{custom_rid:l});case n.SET_BIZ_DAYS:var d=t.payload.biz_days;return j(c.BIZ_DAYS,e.mid,d.join(",")),Object(h.a)({},e,{biz_days:d});case n.ADD_BIZ_DAY:var m=t.payload.biz_day,f=b.a.chain(Object(C.a)(e.biz_days).concat([m])).uniq().sort().value();return j(c.BIZ_DAYS,e.mid,f.join(",")),Object(h.a)({},e,{biz_days:f});case n.REMOVE_BIZ_DAY:var _=t.payload.biz_day,p=b.a.reject(Object(C.a)(e.biz_days),function(e){return e===_});return j(c.BIZ_DAYS,e.mid,p.join(",")),Object(h.a)({},e,{biz_days:p});case n.SET_TASKS:var E=t.payload.tasks;return Object(h.a)({},e,{tasks:E});case n.SET_CUSTOM_VALUE_MAP:var S=t.payload.custom_value_map;return Object(h.a)({},e,{custom_value_map:S});default:return e}},M=function(e){return"".concat(e.replace(/[\xa5\/]$/,""),"/api/v1")},I=D(),g=Object(r.createContext)({state:I,setUrl:function(e){},setPid:function(e){},setMid:function(e){},setMilestones:function(e){},setCustomEid:function(e){},setCustomRid:function(e){},setCustomAttrs:function(e){},setBizDays:function(e){},addBizDay:function(e){},removeBizDay:function(e){},setTasks:function(e){},setCustomValueMap:function(e){}}),A=function(e){var t=e.children,a=Object(r.useReducer)(k,I),c=Object(i.a)(a,2),s=c[0],o=c[1],l={state:s,setUrl:Object(r.useCallback)(function(e){o({type:n.SET_URL,payload:{url:e}})},[o]),setPid:Object(r.useCallback)(function(e){o({type:n.SET_PID,payload:{pid:e}})},[o]),setMid:Object(r.useCallback)(function(e){o({type:n.SET_MID,payload:{mid:e}})},[o]),setMilestones:Object(r.useCallback)(function(e){o({type:n.SET_MILESTONES,payload:{milestones:e}})},[o]),setCustomEid:Object(r.useCallback)(function(e){o({type:n.SET_CUSTOM_EID,payload:{custom_eid:e}})},[o]),setCustomRid:Object(r.useCallback)(function(e){o({type:n.SET_CUSTOM_RID,payload:{custom_rid:e}})},[o]),setCustomAttrs:Object(r.useCallback)(function(e){o({type:n.SET_CUSTOM_ATTRS,payload:{custom_attrs:e}})},[o]),setBizDays:Object(r.useCallback)(function(e){o({type:n.SET_BIZ_DAYS,payload:{biz_days:e}})},[o]),addBizDay:Object(r.useCallback)(function(e){o({type:n.ADD_BIZ_DAY,payload:{biz_day:e}})},[o]),removeBizDay:Object(r.useCallback)(function(e){o({type:n.REMOVE_BIZ_DAY,payload:{biz_day:e}})},[o]),setTasks:Object(r.useCallback)(function(e){o({type:n.SET_TASKS,payload:{tasks:e}})},[o]),setCustomValueMap:Object(r.useCallback)(function(e){o({type:n.SET_CUSTOM_VALUE_MAP,payload:{custom_value_map:e}})},[o])};return u.a.createElement(g.Provider,{value:l},t)},U=a(15),w=a.n(U),Y=a(26),B=a(31),R=a.n(B),z=a(12),x=function(e,t,a){return e.has(t)?Number(b.a.get(e.get(t),"attributes_values.".concat(a),"0").replace(/[^0-9.]/g,"")):0},N=function(e,t,a,n){var c=Number(a),r=Number(n);return b.a.mapValues(function(e){return b.a.groupBy(e,"assigned_to")}(e),function(e){return b.a.chain(e).map(function(e){return{e:x(t,e,c),r:x(t,e,r)}}).reduce(function(e,t){return{e:e.e+t.e,r:e.r+t.r}},{e:0,r:0}).value()})},Z=function(e,t){return e.find(function(e){return e.id===t})},P=function(){var e=Object(r.useContext)(g).state,t=e.url,a=e.pid,n=e.tasks,c=e.custom_value_map,s=e.custom_attrs,o=e.custom_eid,l=e.custom_rid,d=Object(r.useState)([]),m=Object(i.a)(d,2),f=m[0],_=m[1];Object(r.useEffect)(function(){t&&a&&Object(Y.a)(w.a.mark(function e(){var n,c;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(M(t),"/projects/").concat(a));case 2:n=e.sent,c=n.data.members,_(c);case 5:case"end":return e.stop()}},e,this)}))()},[t,a,_]);var p=N(n,c,o,l),E=Z(s,Number(o)),S=Z(s,Number(l));return E&&S?u.a.createElement(z.g,null,u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Name"),u.a.createElement("th",null,E.name),u.a.createElement("th",null,S.name))),u.a.createElement("tbody",null,f.map(function(e){return u.a.createElement("tr",{key:e.id},u.a.createElement("td",null,e.username),u.a.createElement("td",null,b.a.get(p,"".concat(e.id,".e"))),u.a.createElement("td",null,b.a.get(p,"".concat(e.id,".r"))))}))):null},L=function(e,t,a){return b.a.chain(t).map(function(t){return x(e,t,Number(a))}).sum().value()},V=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useContext)(g).state,s=c.tasks,o=c.biz_days,E=c.custom_value_map,b=c.custom_eid;return Object(r.useEffect)(function(){var e=o.length;if(e>1&&s.length>0&&b){var t=L(E,function(e,t){return e.filter(function(e){return O()(t).diff(O()(e.created_date))>0})}(s,o[1]),b),a=o.map(function(a,n){var c="day ".concat(n+1),r=t-t*n/(e-1);return O()().diff(O()(a),"days")>=0?{label:c,estimate:r,result:t-L(E,function(e,t){return e.filter(function(e){return!!e.finished_date&&O()(t).diff(O()(e.finished_date))>0})}(s,a),b),add:0===n?0:L(E,function(e,t){return e.filter(function(e){return O()(t).format("YYYY-MM-DD")===O()(e.created_date).format("YYYY-MM-DD")})}(s,a),b)}:{label:c,estimate:r}});n(a)}else n([])},[s,o,b,E,n]),0===a.length?null:u.a.createElement(l.a,{data:a,width:800,height:400},u.a.createElement(d.a,null),u.a.createElement(m.a,{dataKey:"label"}),u.a.createElement(f.a,null),u.a.createElement(_.a,{dataKey:"result",fill:"#8884d8",stackId:"a"}),u.a.createElement(_.a,{dataKey:"add",fill:"#82ca9d",stackId:"a"}),u.a.createElement(p.a,{dataKey:"estimate"}))},K=function(){var e=Object(r.useContext)(g),t=e.state,a=t.url,n=t.pid,c=e.setPid,s=Object(r.useState)([]),o=Object(i.a)(s,2),l=o[0],d=o[1],m=Object(r.useCallback)(function(e){var t=e.target.value;t&&c(t)},[c]);return Object(r.useEffect)(function(){a&&Object(Y.a)(w.a.mark(function e(){var t,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(M(a),"/projects"));case 2:t=e.sent,n=t.data,d(n);case 5:case"end":return e.stop()}},e,this)}))()},[a,d]),u.a.createElement(z.d,{className:"col"},u.a.createElement(z.e,{addonType:"prepend"},"Project"),u.a.createElement(z.c,{value:n,type:"select",onChange:m},u.a.createElement("option",{value:""}," --- "),l.map(function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.name)})))},W=function(){var e=Object(r.useContext)(g),t=e.state,a=t.url,n=t.pid,c=t.mid,s=e.setMid,o=e.setMilestones,l=e.setTasks,d=Object(r.useState)([]),m=Object(i.a)(d,2),f=m[0],_=m[1],p=Object(r.useCallback)(function(e){var t=e.target.value;t&&s(t)},[s,f]);return Object(r.useEffect)(function(){a&&n&&Object(Y.a)(w.a.mark(function e(){var t,c;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(M(a),"/milestones"),{params:{project:n}});case 2:t=e.sent,c=t.data,_(c),o(c);case 6:case"end":return e.stop()}},e,this)}))()},[a,n,_,o]),Object(r.useEffect)(function(){a&&c&&Object(Y.a)(w.a.mark(function e(){var t,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(M(a),"/tasks"),{headers:{"x-disable-pagination":!0},params:{milestone:c}});case 2:t=e.sent,n=t.data,l(n);case 5:case"end":return e.stop()}},e,this)}))()},[a,c,l]),u.a.createElement(z.d,{className:"col"},u.a.createElement(z.e,{addonType:"prepend"},"Sprint"),u.a.createElement(z.c,{type:"select",value:c,onChange:p},u.a.createElement("option",{value:""}," --- "),f.map(function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.name)})))},J=function(){var e=Object(r.useContext)(g),t=e.state,a=t.url,n=t.pid,c=t.custom_eid,s=t.custom_rid,o=t.tasks,l=e.setCustomEid,d=e.setCustomRid,m=e.setCustomAttrs,f=e.setCustomValueMap,_=Object(r.useState)([]),p=Object(i.a)(_,2),E=p[0],b=p[1],S=Object(r.useCallback)(function(e){var t=e.target.value;if(t)switch(e.target.name){case"eid":l(t);break;case"rid":d(t)}},[l,d]);return Object(r.useEffect)(function(){a&&n&&Object(Y.a)(w.a.mark(function e(){var t,c;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(M(a),"/task-custom-attributes"),{params:{project:n}});case 2:t=e.sent,c=t.data,b(c),m(c);case 6:case"end":return e.stop()}},e,this)}))()},[a,n,b,m]),Object(r.useEffect)(function(){a&&o.length&&c&&s&&Object(Y.a)(w.a.mark(function e(){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=WeakMap,e.next=3,Promise.all(o.map(function(){var e=Object(Y.a)(w.a.mark(function e(t){var n,c;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(M(a),"/tasks/custom-attributes-values/").concat(t.id));case 2:return n=e.sent,c=n.data,e.abrupt("return",[t,c]);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 3:e.t1=e.sent,t=new e.t0(e.t1),f(t);case 6:case"end":return e.stop()}},e,this)}))()},[a,o,c,s,f]),u.a.createElement("div",{className:"row"},u.a.createElement(z.d,{className:"col"},u.a.createElement(z.e,{addonType:"prepend"},"Estimate"),u.a.createElement(z.c,{value:c,name:"eid",type:"select",onChange:S},u.a.createElement("option",{value:""}," --- "),E.map(function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.name)}))),u.a.createElement(z.d,{className:"col"},u.a.createElement(z.e,{addonType:"prepend"},"Result"),u.a.createElement(z.c,{value:s,name:"rid",type:"select",onChange:S},u.a.createElement("option",null," --- "),E.map(function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.name)}))))},$=a(87),q=a.n($),F=function(e){var t=e.item,a=e.biz_days,n=Object(r.useContext)(g),c=n.addBizDay,s=n.removeBizDay,o=t.format("YYYY-MM-DD"),i=Object(r.useCallback)(function(e){var t=e.target.value;e.target.checked?c(t):s(t)},[c,s]);return u.a.createElement("div",{className:"form-check form-check-inline"},u.a.createElement(z.c,{onChange:i,disabled:q.a.isWeekendDay(t),id:o,value:o,type:"checkbox",defaultChecked:b.a.includes(a,o),className:"form-check-input"}),u.a.createElement(z.f,{className:"form-check-label",for:o},o))},G=function(){var e=Object(r.useContext)(g),t=e.state,a=t.mid,n=t.milestones,c=t.biz_days,s=e.setBizDays,o=Object(r.useState)([]),l=Object(i.a)(o,2),d=l[0],m=l[1];return Object(r.useEffect)(function(){var e=function(e,t){return t.find(function(t){return String(t.id)===e})}(a,n);if(e){var t=function(e){var t=O()(e.estimated_start).local(),a=O()(e.estimated_finish).local().diff(t,"days");return b.a.times(a).map(function(e){return t.clone().add(e,"days")})}(e);m(t),c.length<=1&&s(t.filter(function(e){return q.a.isWeekDay(e)}).map(function(e){return e.format("YYYY-MM-DD")}))}},[a,n,c]),0===d.length?null:u.a.createElement(u.a.Fragment,null,d.map(function(e){return u.a.createElement(F,{key:e.toString(),item:e,biz_days:c})}))},H=function(){var e=Object(r.useContext)(g),t=e.state,a=e.setUrl,n=Object(r.useState)(""),c=Object(i.a)(n,2),s=c[0],o=c[1],l=Object(r.useCallback)(function(e){o(e.target.value)},[o]),d=Object(r.useCallback)(function(e){s&&a(s),e.preventDefault()},[s,a]);return u.a.createElement(z.b,{onSubmit:d},u.a.createElement(z.d,null,u.a.createElement(z.e,{addonType:"prepend"},"URL"),u.a.createElement(z.c,{defaultValue:t.url,onChange:l,placeholder:"http://hostname:port"}),u.a.createElement(z.e,{addonType:"append"},u.a.createElement(z.a,null,"Set"))),u.a.createElement("div",{className:"row"},u.a.createElement(K,null),u.a.createElement(W,null)),u.a.createElement(J,null),u.a.createElement(G,null))},Q=function(){return u.a.createElement("div",{className:"container"},u.a.createElement(A,null,u.a.createElement(H,null),u.a.createElement(P,null),u.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(u.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,2,1]]]);
//# sourceMappingURL=main.679eebe9.chunk.js.map