"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[304],{4290:function(n,t,e){e.d(t,{a:function(){return i}});var r=e(8748),a=e(184),i=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.g4,{height:"100",width:"100",radius:"9",color:"blueviolet",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},visible:!0})})}},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,i,c,o=e(5861),u=e(885),s=e(7757),p=e.n(s),f=e(2791),l=e(5929),d=e(6871),h=e(6221),v=e(168),x=e(6031),m=e(3504),g=x.ZP.h2(r||(r=(0,v.Z)(["\n  font-size: 30px;\n  font-weight: 600;\n"]))),y=x.ZP.li(a||(a=(0,v.Z)(["\n  list-style: inside;\n  text-decoration: none;\n  margin-bottom: 5px;\n"]))),w=(0,x.ZP)(m.rU)(i||(i=(0,v.Z)(["\n  text-decoration: none;\n  font-size: 18px;\n  color: black;\n  &:hover {\n    color: blueviolet;\n  }\n"]))),b=x.ZP.div(c||(c=(0,v.Z)(["\n  display: flex;\n"]))),k=e(7596),_=e(4290),Z=e(184);var j=function(){var n=(0,f.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)(!1),i=(0,u.Z)(a,2),c=i[0],s=i[1],v=(0,d.TH)();return(0,f.useEffect)((function(){var n=function(){var n=(0,o.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l._L)();case 3:t=n.sent,r(t),s(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),k.Am.error("Oops! Something went wrong!");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n(),s(!0)}),[]),(0,Z.jsxs)(h.W,{children:[(0,Z.jsxs)(b,{children:[(0,Z.jsx)(g,{children:"Trending today"}),c&&(0,Z.jsx)(_.a,{})]}),e&&(0,Z.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.title;return(0,Z.jsx)(y,{children:(0,Z.jsx)(w,{to:"/movies/".concat(t),state:{from:v},children:e})},t)}))})]})}},5929:function(n,t,e){e.d(t,{zv:function(){return x},tx:function(){return m},YJ:function(){return h},IR:function(){return l},_L:function(){return p}});var r=e(5861),a=e(7757),i=e.n(a),c=e(4569),o=e.n(c),u="https://api.themoviedb.org/3",s="644038bd8c4d79d1d14f251b1d12234c";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(u,"/trending/movie/day?"),{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(u,"/search/movie?"),{params:{query:t,page:1,api_key:s,language:"en-US"}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(u,"/movie/").concat(t,"?"),{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return o().get("".concat(u,"/movie/").concat(n,"/credits?"),{params:{api_key:s}})}function m(n){return o().get("".concat(u,"/movie/").concat(n,"/reviews?"),{params:{api_key:s}})}}}]);
//# sourceMappingURL=304.e904b1c5.chunk.js.map