"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{4290:function(t,n,e){e.d(n,{a:function(){return u}});var r=e(8748),a=e(184),u=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.g4,{height:"100",width:"100",radius:"9",color:"blueviolet",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},visible:!0})})}},9779:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r,a=e(5861),u=e(885),i=e(7757),c=e.n(i),s=e(2791),o=e(6871),p=e(5929),f=e(7596),h=e(168),l=e(6031).ZP.p(r||(r=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 600;\n  margin-right: auto;\n  margin-left: auto;\n"]))),d=e(4290),v=e(184);var m=function(){var t=(0,o.UO)().movieId,n=(0,s.useState)([]),e=(0,u.Z)(n,2),r=e[0],i=e[1],h=(0,s.useState)(!1),m=(0,u.Z)(h,2),g=m[0],x=m[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.tx)(t);case 3:e=n.sent,i(e.data.results),x(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),f.Am.error("Oops! Something went wrong!");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n(),x(!0)}),[t]),(0,v.jsxs)(v.Fragment,{children:[g&&(0,v.jsx)(d.a,{}),(0,v.jsx)("ul",{children:r.length>0?r.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,v.jsxs)("li",{children:[(0,v.jsxs)("h3",{children:["Author: ",e]}),(0,v.jsx)("p",{children:r})]},n)})):(0,v.jsx)(l,{children:" We don't have any reviews for this movie. "})})]})}},5929:function(t,n,e){e.d(n,{zv:function(){return m},tx:function(){return g},YJ:function(){return d},IR:function(){return h},_L:function(){return p}});var r=e(5861),a=e(7757),u=e.n(a),i=e(4569),c=e.n(i),s="https://api.themoviedb.org/3",o="644038bd8c4d79d1d14f251b1d12234c";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("".concat(s,"/trending/movie/day?"),{params:{api_key:o}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("".concat(s,"/search/movie?"),{params:{query:n,page:1,api_key:o,language:"en-US"}});case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("".concat(s,"/movie/").concat(n,"?"),{params:{api_key:o}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return c().get("".concat(s,"/movie/").concat(t,"/credits?"),{params:{api_key:o}})}function g(t){return c().get("".concat(s,"/movie/").concat(t,"/reviews?"),{params:{api_key:o}})}}}]);
//# sourceMappingURL=779.c5f6dfbf.chunk.js.map