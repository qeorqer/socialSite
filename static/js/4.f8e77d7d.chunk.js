(this["webpackJsonpsocial-site"]=this["webpackJsonpsocial-site"]||[]).push([[4],{230:function(e,t,a){e.exports={formControl:"formControls_formControl__2y1jI",error:"formControls_error__aKERt",formSummaryError:"formControls_formSummaryError__1IXR4"}},231:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return c}));var n=a(240),r=a(0),o=a.n(r),s=a(230),u=a.n(s),i=function(e){e.input;var t=e.meta,a=Object(n.a)(e,["input","meta"]),r=t.error&&t.touched;return o.a.createElement("div",{className:u.a.formControl+" "+(r?u.a.error:"")},a.children,r&&o.a.createElement("span",null,t.error))},l=function(e){return o.a.createElement(i,e,o.a.createElement("textarea",Object.assign({},e.input,e))," ")},c=function(e){return o.a.createElement(i,e,o.a.createElement("input",Object.assign({},e.input,e))," ")}},232:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e?void 0:"The field is required"}},253:function(e,t,a){e.exports={ProfileInfo:"Profileinfo_ProfileInfo__2rKLf",logo:"Profileinfo_logo__iGagM",status:"Profileinfo_status__2w7Qr"}},254:function(e,t,a){e.exports={addPost:"Posts_addPost__1nbsT",posts:"Posts_posts__24Eqp",postsBlock:"Posts_postsBlock__NOCs4"}},295:function(e,t,a){},297:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a(28),o=a(31),s=a(30),u=a(0),i=a.n(u),l=a(295),c=a.n(l),f=a(253),m=a.n(f),p=a(73),d=a.n(p);var E=a(72);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(i){r=!0,o=i}finally{try{n||null==u.return||u.return()}finally{if(r)throw o}}return a}}(e,t)||Object(E.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(e){var t=b(Object(u.useState)(!1),2),a=t[0],n=t[1],r=b(Object(u.useState)(e.status),2),o=r[0],s=r[1];return Object(u.useEffect)((function(){s(e.status)}),[e.status]),i.a.createElement("div",{className:m.a.status},a?i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){s(e.currentTarget.value)},type:"text",value:o,autoFocus:!0}),i.a.createElement("button",{onClick:function(){n(!1),e.updateStatus(o)}},"Save")):i.a.createElement("p",{onDoubleClick:function(){n(!0)}},e.status?e.status:"Set your status"))},v=function(e){return i.a.createElement("div",{className:m.a.ProfileInfo},i.a.createElement("div",{className:m.a.logo},i.a.createElement("img",{src:e.profile.photos.large?e.profile.photos.large:d.a,alt:""})),i.a.createElement("div",{className:m.a.description},i.a.createElement(h,{status:e.status,updateStatus:e.updateStatus}),i.a.createElement("h2",null,e.profile.fullName)))},g=a(58),_=function(e){return i.a.createElement("div",null,e.message," ",i.a.createElement("div",null,i.a.createElement("button",null,"like"),i.a.createElement("span",null," ",e.likes)))},y=a(254),P=a.n(y),S=a(110),j=a(111),O=a(231),k=a(232),C=function(e){return i.a.createElement("form",{className:P.a.addPost,onSubmit:e.handleSubmit},i.a.createElement("p",null,"Add post"),i.a.createElement(S.a,{component:O.b,name:"post",validate:[k.a],placeholder:"Write your thoughts"}),i.a.createElement("button",null,"Add new"))},N=C=Object(j.a)({form:"addPost"})(C),I=i.a.memo((function(e){var t=e.profilePage.postsData.map((function(e){return i.a.createElement(_,{message:e.message,likes:e.likes,id:e.id,key:e.id})}));return i.a.createElement("div",{className:P.a.postsBlock},i.a.createElement("h2",null,"my posts"),i.a.createElement(N,{onSubmit:function(t){e.addPost(t.post)}}),i.a.createElement("div",{className:P.a.posts},t))})),w=a(20),x=Object(w.b)((function(e){return{profilePage:e.profilePage}}),{addPost:g.a})(I),A=a(36),T=function(e){return e.profile?i.a.createElement("div",{className:c.a.content},i.a.createElement(v,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(x,null)):i.a.createElement(A.a,null)},B=a(5),D=a(17),L=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.id)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return i.a.createElement(T,this.props)}}]),a}(i.a.Component);t.default=Object(D.d)(Object(w.b)((function(e){return{isLoading:e.usersPage.isLoading,profile:e.profilePage.profile,status:e.profilePage.status,id:e.auth.id}}),{getProfile:g.c,getStatus:g.d,updateStatus:g.e}),B.f)(L)}}]);
//# sourceMappingURL=4.f8e77d7d.chunk.js.map