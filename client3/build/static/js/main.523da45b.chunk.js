(this.webpackJsonpclient3=this.webpackJsonpclient3||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=a(15),s=a(29),l=a(57),u=a(147),d=a(148),p=a(139),j=a(151),b=a(146),f=a(17),m=a.n(f),h=a(30),x=a(31),O=a.n(x),g="https://memories-app-saurab.herokuapp.com/posts",v=function(e,t){return O.a.patch("".concat(g,"/").concat(e),t)},y=function(e){return O.a.delete("".concat(g,"/").concat(e))},C=function(e){return O.a.patch("".concat(g,"/").concat(e,"/likePost"))},w="CREATE",k="UPDATE",N="DELETE",E="FETCH",S="LIKEPOST",D="EDIT",T="CLEAR",_=(a(98),a.p+"static/media/memories.9cfa8a46.png"),z=a(145),A=a(136),I=a(138),M=a(150),W=a(141),B=a(142),F=a(140),L=a(143),P=a(144),R=a(58),H=a.n(R),J=a(133),U=Object(J.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),K=function(){return function(e){e({type:T,payload:null})}},V=a(5),q=function(e){var t=e.post,a=U(),n=Object(o.b)(),r=function(e){n(function(e){return function(t){t({type:D,payload:e})}}(e))};return Object(V.jsxs)(A.a,{className:a.card,children:[Object(V.jsx)(I.a,{className:a.media,title:t.title,image:t.selectedFile}),Object(V.jsxs)("div",{className:a.overlay,children:[Object(V.jsx)(p.a,{variant:"h6",color:"initial",children:t.creator}),Object(V.jsx)(p.a,{variant:"body2",color:"initial",children:H()(t.createdAt).fromNow()})]}),Object(V.jsx)("div",{className:a.overlay2,children:Object(V.jsx)(M.a,{style:{color:"white"},size:"small",onClick:function(){return r(t._id)},children:Object(V.jsx)(F.a,{fontSize:"default"})})}),Object(V.jsx)("div",{className:a.details,children:Object(V.jsx)(p.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(V.jsx)(p.a,{className:a.title,variant:"h6",gutterBottom:!0,children:t.title}),Object(V.jsx)(W.a,{children:Object(V.jsx)(p.a,{variant:"body2",component:"p",color:"textSecondary",children:t.message})}),Object(V.jsxs)(B.a,{className:a.cardActions,children:[Object(V.jsxs)(M.a,{size:"small",color:"primary",onClick:function(){var e;n((e=t._id,function(){var t=Object(h.a)(m.a.mark((function t(a){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C(e);case 3:n=t.sent,r=n.data,a({type:S,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(V.jsx)(L.a,{fontSize:"small"})," \xa0 Like \xa0",t.likeCount]}),Object(V.jsxs)(M.a,{size:"small",color:"primary",onClick:function(){var e;n((e=t._id,function(){var t=Object(h.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e);case 3:a({type:N,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(V.jsx)(P.a,{fontSize:"small"}),"Delete"]})]})]},t.id)},G=Object(J.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),Q=function(){var e=G(),t=Object(o.c)((function(e){return e.posts}));return t?Object(V.jsx)(b.a,{className:e.container,container:!0,alignItems:"stretch",spacing:3,children:t.map((function(e){return Object(V.jsx)(b.a,{item:!0,xs:12,sm:6,children:Object(V.jsx)(q,{post:e},e.id)},e.id)}))}):Object(V.jsx)(z.a,{color:"secondary"})},X=a(13),Y=a(20),Z=a(64),$=a(149),ee=a(62),te=a.n(ee),ae=Object(J.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ne=function(){var e=ae(),t=Object(o.b)(),a=Object(o.c)((function(e){return e.edit})),r=Object(o.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),c=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),i=Object(Y.a)(c,2),s=i[0],l=i[1];Object(n.useEffect)((function(){r&&l(r)}),[r]);var u=function(){t(K),l({creator:"",title:"",message:"",tags:"",selectedFile:""})};return Object(V.jsx)(Z.a,{className:e.paper,children:Object(V.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a?(t(function(e,t){return function(){var a=Object(h.a)(m.a.mark((function a(n){var r,c;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v(e,t);case 3:r=a.sent,c=r.data,n({type:k,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(a,s)),console.log(s)):t(function(e){return function(){var t=Object(h.a)(m.a.mark((function t(a){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,O.a.post(g,c);case 3:n=t.sent,r=n.data,a({type:w,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(s)),u()},autoComplete:"off",noValidate:!0,className:"".concat(e.form," ").concat(e.root),children:[Object(V.jsxs)(p.a,{variant:"h6",color:"inherit",children:[a?"Editing":"Creating"," a Memory"]}),Object(V.jsx)($.a,{variant:"outlined",name:"creator",id:"creator",label:"Creator",value:s.creator,onChange:function(e){return l(Object(X.a)(Object(X.a)({},s),{},{creator:e.target.value}))},fullWidth:!0}),Object(V.jsx)($.a,{variant:"outlined",name:"title",id:"title",label:"Title",value:s.title,onChange:function(e){return l(Object(X.a)(Object(X.a)({},s),{},{title:e.target.value}))},fullWidth:!0}),Object(V.jsx)($.a,{variant:"outlined",name:"message",id:"message",label:"Message",value:s.message,onChange:function(e){return l(Object(X.a)(Object(X.a)({},s),{},{message:e.target.value}))},fullWidth:!0}),Object(V.jsx)($.a,{variant:"outlined",name:"tags",id:"tags",label:"Tags",value:s.tags,onChange:function(e){return l(Object(X.a)(Object(X.a)({},s),{},{tags:e.target.value.split(",")}))},fullWidth:!0}),Object(V.jsx)("div",{className:e.buttonSubmit,children:Object(V.jsx)(te.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(X.a)(Object(X.a)({},s),{},{selectedFile:t}))}})}),Object(V.jsx)(M.a,{className:e.buttonSubmit,variant:"contained",color:"primary",type:"submit",size:"large",fullWidth:!0,children:a?"Update":"Create"}),Object(V.jsx)(M.a,{variant:"contained",color:"secondary",size:"small",fullWidth:!0,onClick:u,children:"Clear"})]})})},re=a(11),ce=Object(J.a)((function(e){return Object(re.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})}));var ie=function(){var e=ce(),t=Object(o.b)();return Object(n.useEffect)((function(){t(function(){var e=Object(h.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get(g);case 3:a=e.sent,n=a.data,t({type:E,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(V.jsxs)(u.a,{maxWidth:"lg",children:[Object(V.jsxs)(d.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(V.jsx)(p.a,{className:e.heading,variant:"h6",children:"MERN APP"}),Object(V.jsx)("img",{className:e.image,src:_,alt:"Memories",height:"60",width:"60"})]}),Object(V.jsx)(j.a,{in:!0,children:Object(V.jsx)(u.a,{children:Object(V.jsxs)(b.a,{container:!0,spacing:1,justifyContent:"space-between",alignItems:"stretch",className:e.mainContainer,children:[Object(V.jsx)(b.a,{item:!0,xs:12,sm:7,children:Object(V.jsx)(Q,{})}),Object(V.jsx)(b.a,{item:!0,xs:12,sm:4,children:Object(V.jsx)(ne,{})})]})})})]})},oe=(a(102),a(18)),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.payload;case w:return[].concat(Object(oe.a)(e),[t.payload]);case k:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case N:return e.filter((function(e){return e._id!==t.payload}));case S:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return e}},le=function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:case T:return e.payload;default:return null}},ue=Object(s.b)({posts:se,edit:le}),de=Object(s.d)(ue,Object(s.c)(Object(s.a)(l.a)));i.a.render(Object(V.jsx)(r.a.StrictMode,{children:Object(V.jsx)(o.a,{store:de,children:Object(V.jsx)(ie,{})})}),document.getElementById("root"))},98:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.523da45b.chunk.js.map