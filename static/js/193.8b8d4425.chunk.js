"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[193],{4290:function(n,e,t){t.d(e,{a:function(){return i}});var r=t(8748),o=t(184),i=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r.g4,{height:"100",width:"100",radius:"9",color:"blueviolet",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},visible:!0})})}},7047:function(n,e,t){t.d(e,{e:function(){return l}});var r,o,i=t(168),a=t(6031),u=t(3504),c=a.ZP.li(r||(r=(0,i.Z)(["\n  list-style: inside;\n  text-decoration: none;\n  margin-bottom: 5px;\n"]))),s=(0,a.ZP)(u.rU)(o||(o=(0,i.Z)(["\n  text-decoration: none;\n  font-size: 18px;\n  color: black;\n  &:hover {\n    color: blueviolet;\n  }\n"]))),p=t(184);function l(n){var e=n.movies,t=n.location;return(0,p.jsx)("ul",{children:e.map((function(n){var e=n.id,r=n.title;return(0,p.jsx)(c,{children:(0,p.jsx)(s,{to:"/movies/".concat(e),state:{from:t},children:r})},e)}))})}},5193:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,o,i,a,u=t(5861),c=t(885),s=t(7757),p=t.n(s),l=t(5705),d=t(4386),f=t(168),h=t(6031),x=(0,h.ZP)(l.l0)(r||(r=(0,f.Z)(["\n  margin-bottom: 20px;\n"]))),v=(0,h.ZP)(l.gN)(o||(o=(0,f.Z)(["\n  width: 200px;\n  font-size: 20px;\n  border-radius: 5px;\n  border: 0.5px solid black;\n  outline: none;\n  padding: 5px;\n  margin-right: 10px;\n  ::placeholder {\n    font-size: 16px;\n  }\n"]))),m=h.ZP.button(i||(i=(0,f.Z)(["\n  border: 0.5px solid black;\n  border-radius: 5px;\n  padding: 5px;\n  outline: none;\n  font-size: 20px;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  &:hover,\n  :focus,\n  :active {\n    background-color: skyblue;\n    color: white;\n  }\n"]))),b=h.ZP.p(a||(a=(0,f.Z)(["\n  color: red;\n  font-size: 16px;\n  padding: 5px;\n"]))),g=t(184);function y(n){var e=n.onSubmit,t=d.Ry().shape({query:d.Z_().required("This field cannot be empty")});return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(l.J9,{initialValues:{query:""},validationSchema:t,onSubmit:function(n,t){var r=t.resetForm;e(n),r()},children:(0,g.jsxs)(x,{children:[(0,g.jsx)(v,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,g.jsx)(m,{type:"submit",children:"Search"}),(0,g.jsx)(l.Bc,{render:function(n){return(0,g.jsx)(b,{children:n})},name:"query"})]})})})}var Z,w=t(2791),k=t(5929),j=t(7047),S=t(3504),_=t(6871),q=h.ZP.div(Z||(Z=(0,f.Z)(["\n  margin-top: 15px;\n  padding: 15px;\n"]))),z=t(7596),P=t(4290);var C=function(){var n,e=(0,w.useState)([]),t=(0,c.Z)(e,2),r=t[0],o=t[1],i=(0,w.useState)(!1),a=(0,c.Z)(i,2),s=a[0],l=a[1],d=(0,_.TH)(),f=(0,S.lr)(),h=(0,c.Z)(f,2),x=h[0],v=h[1],m=null!==(n=x.get("query"))&&void 0!==n?n:"";return(0,w.useEffect)((function(){function n(){return(n=(0,u.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,k.IR)(m);case 3:e=n.sent,o(e),l(!1),0===e.length&&z.Am.error("Sorry, there are no movies for this request."),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),z.Am.error("Oops! Something went wrong!");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}""!==m&&null!==m&&m&&(!function(){n.apply(this,arguments)}(),l(!0))}),[m]),(0,g.jsxs)(q,{children:[(0,g.jsx)(y,{onSubmit:function(n){n&&v(n)}}),s&&(0,g.jsx)(P.a,{}),r&&(0,g.jsx)(j.e,{movies:r,location:d})]})}},5929:function(n,e,t){t.d(e,{zv:function(){return h},tx:function(){return x},YJ:function(){return d},IR:function(){return p},_L:function(){return c}});var r=t(5861),o=t(7757),i=t.n(o),a=t(4569),u=t.n(a)().create({baseURL:"https://api.themoviedb.org/3",language:"en-US",params:{api_key:"644038bd8c4d79d1d14f251b1d12234c"}});function c(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/search/movie",{params:{query:e}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return u.get("/movie/".concat(n,"/credits"))}function x(n){return u.get("/movie/".concat(n,"/reviews"))}}}]);
//# sourceMappingURL=193.8b8d4425.chunk.js.map