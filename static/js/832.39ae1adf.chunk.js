"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[832],{4290:function(n,e,t){t.d(e,{a:function(){return a}});var r=t(8748),o=t(184),a=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r.g4,{height:"100",width:"100",radius:"9",color:"blueviolet",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},visible:!0})})}},9832:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,o,a,i=t(5861),c=t(885),u=t(7757),s=t.n(u),p=t(5705),l=t(4386),d=t(168),f=t(6031),m=(0,f.ZP)(p.l0)(r||(r=(0,d.Z)(["\n  margin-bottom: 20px;\n"]))),h=(0,f.ZP)(p.gN)(o||(o=(0,d.Z)(["\n  width: 200px;\n  font-size: 20px;\n  border-radius: 5px;\n  border: 0.5px solid black;\n  outline: none;\n  padding: 5px;\n  margin-right: 10px;\n  ::placeholder {\n    font-size: 16px;\n  }\n"]))),v=f.ZP.button(a||(a=(0,d.Z)(["\n  border: 0.5px solid black;\n  border-radius: 5px;\n  padding: 5px;\n  outline: none;\n  font-size: 20px;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  &:hover,\n  :focus,\n  :active {\n    background-color: skyblue;\n    color: white;\n  }\n"]))),x=t(184);function b(n){var e=n.onSubmit,t=l.Ry().shape({movieName:l.Z_().required("This field cannot be empty")});return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(p.J9,{initialValues:{movieName:""},validationSchema:t,onSubmit:function(n,t){var r=t.resetForm;e(n),r()},children:(0,x.jsxs)(m,{children:[(0,x.jsx)(h,{name:"movieName",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,x.jsx)(v,{type:"submit",children:"Search"})]})})})}var g,y,k=t(2791),Z=t(5929),w=t(3504),j=f.ZP.li(g||(g=(0,d.Z)(["\n  list-style: inside;\n  text-decoration: none;\n  margin-bottom: 5px;\n"]))),_=(0,f.ZP)(w.rU)(y||(y=(0,d.Z)(["\n  text-decoration: none;\n  font-size: 18px;\n  color: black;\n  &:hover {\n    color: blueviolet;\n  }\n"])));function S(n){var e=n.movies,t=n.location;return(0,x.jsx)("ul",{children:e.map((function(n){var e=n.id,r=n.title;return(0,x.jsx)(j,{children:(0,x.jsx)(_,{to:"".concat(e),state:{from:t},children:r})},e)}))})}var z,P=t(6871),N=f.ZP.div(z||(z=(0,d.Z)(["\n  margin-top: 15px;\n  padding: 15px;\n"]))),C=t(7596),F=t(4290);var q=function(){var n,e=(0,k.useState)([]),t=(0,c.Z)(e,2),r=t[0],o=t[1],a=(0,k.useState)(!1),u=(0,c.Z)(a,2),p=u[0],l=u[1],d=(0,P.TH)(),f=(0,w.lr)(),m=(0,c.Z)(f,2),h=m[0],v=m[1],g=null!==(n=h.get("movieName"))&&void 0!==n?n:"";return(0,k.useEffect)((function(){function n(){return(n=(0,i.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,Z.IR)(g);case 3:e=n.sent,o(e),l(!1),0===e.length&&C.Am.error("Sorry, there are no movies for this request."),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),C.Am.error("Oops! Something went wrong!");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}""!==g&&null!==g&&g&&(!function(){n.apply(this,arguments)}(),l(!0))}),[g]),(0,x.jsxs)(N,{children:[(0,x.jsx)(b,{onSubmit:function(n){n&&v(n)}}),p&&(0,x.jsx)(F.a,{}),r&&(0,x.jsx)(S,{movies:r,location:d})]})}},5929:function(n,e,t){t.d(e,{zv:function(){return v},tx:function(){return x},YJ:function(){return m},IR:function(){return d},_L:function(){return p}});var r=t(5861),o=t(7757),a=t.n(o),i=t(4569),c=t.n(i),u="https://api.themoviedb.org/3",s="644038bd8c4d79d1d14f251b1d12234c";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(u,"/trending/movie/day?"),{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(u,"/search/movie?"),{params:{query:e,page:1,api_key:s,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(u,"/movie/").concat(e,"?"),{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return c().get("".concat(u,"/movie/").concat(n,"/credits?"),{params:{api_key:s}})}function x(n){return c().get("".concat(u,"/movie/").concat(n,"/reviews?"),{params:{api_key:s}})}}}]);
//# sourceMappingURL=832.39ae1adf.chunk.js.map