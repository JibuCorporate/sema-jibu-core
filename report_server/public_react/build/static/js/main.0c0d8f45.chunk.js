(this.webpackJsonpreactadmin=this.webpackJsonpreactadmin||[]).push([[0],{309:function(e,t){e.exports.backendUrl="http://142.93.115.206:3002/",e.exports.webUrl="http://localhost:3002",e.exports.port=3e3},352:function(e,t,a){e.exports=a(524)},357:function(e,t,a){},524:function(e,t,a){"use strict";a.r(t);var r,n=a(0),c=a.n(n),o=a(15),i=a.n(o),s=(a(357),a(607)),u=a(606),l=a(305),m=a.n(l),d=a(608),E=a(609),f=a(591),b=a(592),p=a(618),g=a(617),k=a(611),j=a(596),O=a(610),h=a(621),v=function(e,t){return"/sema/users/admin"},P=a(612),w=a(324),T=a(594),y=function(e){return c.a.createElement(w.a,e,c.a.createElement(T.a,null))},U=function(e,t){return"/sema/users/admin"},C={name:"sema/users/admin",options:{label:"Users"},icon:m.a,list:function(e){return c.a.createElement(d.a,Object.assign({title:"Users"},e),c.a.createElement(E.a,{rowClick:"edit"},c.a.createElement(f.a,{source:"id"}),c.a.createElement(f.a,{source:"firstName"}),c.a.createElement(f.a,{source:"lastName"}),c.a.createElement(f.a,{source:"username"}),c.a.createElement(b.a,{source:"email"}),c.a.createElement(p.a,{source:"role",reference:"sema/roles/admin",link:!1},c.a.createElement(f.a,{source:"authority"})),c.a.createElement(p.a,{source:"kiosk",reference:"sema/kiosks/admin",link:!1},c.a.createElement(f.a,{source:"name"}))))},create:function(e){return c.a.createElement(g.a,Object.assign({title:"Register User"},e),c.a.createElement(k.a,{redirect:v},c.a.createElement(j.a,{source:"firstName"}),c.a.createElement(j.a,{source:"lastName"}),c.a.createElement(j.a,{source:"username"}),c.a.createElement(j.a,{source:"password"}),c.a.createElement(O.a,{label:"Kiosk",source:"kiosk",reference:"sema/kiosks/admin"},c.a.createElement(h.a,{optionText:"name"})),c.a.createElement(j.a,{source:"email"}),c.a.createElement(O.a,{label:"Role",source:"role",reference:"sema/roles/admin"},c.a.createElement(h.a,{optionText:"authority"}))))},edit:function(e){return c.a.createElement(P.a,Object.assign({title:"Edit User"},e),c.a.createElement(k.a,{toolbar:c.a.createElement(y,null),redirect:U},c.a.createElement(j.a,{source:"firstName"}),c.a.createElement(j.a,{source:"lastName"}),c.a.createElement(j.a,{source:"username"}),c.a.createElement(j.a,{source:"email"}),c.a.createElement(O.a,{label:"Role",source:"role",reference:"sema/roles/admin"},c.a.createElement(h.a,{optionText:"authority"})),c.a.createElement(O.a,{label:"Kiosk",source:"kiosk",reference:"sema/kiosks/admin"},c.a.createElement(h.a,{optionText:"name"}))))}},I=a(599),S=function(e,t,a){return"sema/products/admin"},x=function(e,t){return"sema/products/admin"},A={name:"sema/products/admin",options:{label:"Products"},icon:I.a,create:function(e){return c.a.createElement(g.a,Object.assign({title:"Create Product"},e),c.a.createElement(k.a,{redirect:S},c.a.createElement(j.a,{source:"description"}),c.a.createElement(j.a,{source:"sku"}),c.a.createElement(j.a,{source:"priceAmount"}),c.a.createElement(j.a,{source:"priceCurrency"}),c.a.createElement(j.a,{source:"unitMeasurement"})))},edit:function(e){return c.a.createElement(P.a,Object.assign({title:"Edit Product"},e),c.a.createElement(k.a,{redirect:x},c.a.createElement(j.a,{source:"description"}),c.a.createElement(j.a,{source:"sku"}),c.a.createElement(j.a,{source:"priceAmount"}),c.a.createElement(j.a,{source:"priceCurrency"}),c.a.createElement(j.a,{source:"unitMeasurement"})))},list:function(e){return c.a.createElement(d.a,Object.assign({title:"Products"},e),c.a.createElement(E.a,{rowClick:"edit"},c.a.createElement(f.a,{source:"id"}),c.a.createElement(f.a,{source:"description"}),c.a.createElement(f.a,{source:"sku"}),c.a.createElement(f.a,{source:"priceAmount"}),c.a.createElement(f.a,{source:"priceCurrency"}),c.a.createElement(f.a,{source:"unitMeasurement"})))}},N=a(601),K=a(600),M=function(e,t){return"sema/kiosks/admin"},R=function(e){var t=e.record;return c.a.createElement("span",null,"Kiosk #",t.id)},G=function(e,t){return"sema/kiosks/admin"},L={name:"sema/kiosks/admin",options:{label:"Kiosks"},icon:N.a,list:function(e){return c.a.createElement(d.a,Object.assign({title:"Kiosks"},e),c.a.createElement(E.a,{rowClick:"edit"},c.a.createElement(f.a,{source:"id"}),c.a.createElement(f.a,{source:"name"}),c.a.createElement(K.a,{label:"Created",source:"created_at"})))},create:function(e){return c.a.createElement(g.a,Object.assign({title:"Add Kiosk"},e),c.a.createElement(k.a,{redirect:M},c.a.createElement(j.a,{source:"name"})))},edit:function(e){return c.a.createElement(P.a,Object.assign({title:c.a.createElement(R,null)},e),c.a.createElement(k.a,{redirect:G},c.a.createElement(f.a,{source:"id"}),c.a.createElement(j.a,{source:"name"})))}},B={name:"sema/roles/admin",options:{label:"Roles"},icon:a(602).a},W=a(586),_=a(590),D=a(603),J=function(){return c.a.createElement(W.a,null,c.a.createElement(D.a,{title:"Welcome SEMA Admin"}),c.a.createElement(_.a,null,"..."))},q=a(613),z=function(e){return c.a.createElement(q.a,{backgroundImage:"https://jibuco.com/wp-content/uploads/2020/03/bottlesrackmin-scaled.jpg"})},$=a(12),F=a(113),H=a(307),Q=a.n(H),V=(r={},Object($.a)(r,F.b,(function(e){if(401===e.status)return Promise.reject();return Promise.resolve()})),Object($.a)(r,F.d,(function(e,t){var a=e.username,r=e.password;return t.post("/sema/login",{usernameOrEmail:a,password:r}).then((function(e){return console.log("response",e),e.data})).then((function(e){var t=e.token;localStorage.setItem("token",t)}))})),Object($.a)(r,F.e,(function(e,t){return localStorage.removeItem("token"),Promise.resolve()})),Object($.a)(r,F.a,(function(e){if(!localStorage.getItem("token"))return Promise.reject();return Promise.resolve()})),Object($.a)(r,F.c,(function(){var e=function(){var e=localStorage.getItem("token");return e?Q()(e):null}();return e?Promise.resolve(e):Promise.reject()})),r);function X(e){return function(t,a){return(0,V[t])(a,e)}}var Y=a(112),Z=a(308),ee=a.n(Z);var te,ae=function(e){var t=ee.a.create({baseURL:e});return t.interceptors.request.use((function(e){var t=localStorage.getItem("token");return Object(Y.a)({},e,{headers:Object(Y.a)({},e.headers,{},t?{Authorization:"Bearer ".concat(t)}:{})})})),t}(a(309).backendUrl),re=a(605),ne=a(114),ce=a(40),oe=(te={},Object($.a)(te,ce.a,(function(e,t){return{method:"POST",url:e,data:t.data}})),Object($.a)(te,ce.b,(function(e,t){return{method:"DELETE",url:"".concat(e,"/").concat(t.id)}})),Object($.a)(te,ce.c,(function(e,t){var a=t.ids;return{method:"DELETE",url:"".concat(e,"?").concat(Object(ne.stringify)({ids:a}))}})),Object($.a)(te,ce.d,(function(e,t){return{method:"GET",url:"".concat(e,"?").concat(Object(ne.stringify)(Object(Y.a)({},t.pagination,{},t.sort,{filter:t.filter})))}})),Object($.a)(te,ce.e,(function(e,t){var a=t.ids;return{method:"GET",url:"".concat(e,"?").concat(Object(ne.stringify)({ids:a}))}})),Object($.a)(te,ce.f,(function(e,t){var a=t.pagination,r=a.page,n=a.perPage,c=t.sort,o=c.field,i=c.order,s={field:o,order:i,page:r,perPage:n,filter:Object(Y.a)({},t.filter,Object($.a)({},t.target,t.id))};return{method:"GET",url:"".concat(e,"?").concat(Object(ne.stringify)(s))}})),Object($.a)(te,ce.g,(function(e,t){return{method:"GET",url:"".concat(e,"/").concat(t.id)}})),Object($.a)(te,ce.h,(function(e,t){return{method:"PUT",url:"".concat(e,"/").concat(t.id),data:t.data}})),Object($.a)(te,ce.i,(function(e,t){var a=t.ids,r=t.data;return{method:"PUT",url:"".concat(e,"?").concat(Object(ne.stringify)({ids:a})),data:r}})),te),ie={"sample/resouce":Object($.a)({},"SAMPLE_CUSTOM_ACTION",(function(e,t){return{url:e,params:t}}))};var se,ue=a(326),le=function(e){return Object(ue.a)(function(e){return function(t,a,r){if("admin/print-runs"===a&&(t===ce.d||t===ce.g))return{subscribe:function(n){var c=setInterval((function(){e(t,a,r).then((function(e){return n.next(e)})).catch((function(e){return n.error(e)}))}),3e3);return{unsubscribe:function(){c&&(clearInterval(c),c=void 0,n.complete())}}}}}}(e))},me=(se=ae,function(e,t,a){var r=function(e,t){return oe[e]?oe[e]:ie[t]&&ie[t][e]?ie[t][e]:void 0}(e,t);if(!r)return Promise.reject(new re.a("Unsupported action"));var n=r("/".concat(t),a);return se(n).then((function(e){return e.data})).catch((function(e){return e.response&&e.response.data&&e.response.data.message?Promise.reject(new re.a(e.response.data.message,e.response.status)):Promise.reject(new re.a(e.message))}))}),de=(le(me),function(){return c.a.createElement(s.a,{dashboard:J,authProvider:X(ae),dataProvider:me,customSagas:[le],loginPage:z},c.a.createElement(u.a,C),c.a.createElement(u.a,A),c.a.createElement(u.a,L),c.a.createElement(u.a,B))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[352,1,2]]]);
//# sourceMappingURL=main.0c0d8f45.chunk.js.map