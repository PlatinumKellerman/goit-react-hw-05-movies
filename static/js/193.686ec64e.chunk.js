"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[193],{4290:function(n,t,e){e.d(t,{a:function(){return o}});var r=e(8748),i=e(184),o=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.g4,{height:"100",width:"100",radius:"9",color:"blueviolet",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},visible:!0})})}},7047:function(n,t,e){e.d(t,{e:function(){return w}});var r,i,o,a,c,u,s,p=e(168),l=e(6031),d=e(3504),f=l.ZP.ul(r||(r=(0,p.Z)(["\n  display: grid;\n  max-width: calc(100vw - 90px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),m=l.ZP.li(i||(i=(0,p.Z)(["\n  text-decoration: none;\n  margin-bottom: 5px;\n"]))),x=(0,l.ZP)(d.rU)(o||(o=(0,p.Z)(["\n  text-decoration: none;\n  font-size: 18px;\n  color: black;\n  &:hover {\n    color: blueviolet;\n  }\n"]))),h=l.ZP.div(a||(a=(0,p.Z)(["\n  max-width: 300px;\n  display: flex;\n  flex-direction: column;\n"]))),g=l.ZP.img(c||(c=(0,p.Z)(["\n  width: 300px;\n  height: 450px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    transform: scale(1.03);\n  }\n  margin-bottom: 10px;\n"]))),v=l.ZP.p(u||(u=(0,p.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  font-weight: 500;\n"]))),b=l.ZP.img(s||(s=(0,p.Z)(["\n  width: 300px;\n  height: 450px;\n  margin-bottom: 10px;\n"]))),Z=e(8563),y=e(184);function w(n){var t=n.movies,e=n.location;return console.log(t),(0,y.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.title,i=n.poster_path;return(0,y.jsx)(m,{children:(0,y.jsx)(x,{to:"/movies/".concat(t),state:{from:e},children:(0,y.jsxs)(h,{children:[i?(0,y.jsx)(g,{src:"https://image.tmdb.org/t/p/w500".concat(i),alt:r}):(0,y.jsx)(b,{src:Z,alt:"Poster Plug"}),(0,y.jsx)(v,{children:r})]})})},t)}))})}},5193:function(n,t,e){e.r(t),e.d(t,{default:function(){return C}});var r,i,o,a,c=e(5861),u=e(885),s=e(7757),p=e.n(s),l=e(5705),d=e(4386),f=e(168),m=e(6031),x=(0,m.ZP)(l.l0)(r||(r=(0,f.Z)(["\n  margin-bottom: 20px;\n"]))),h=(0,m.ZP)(l.gN)(i||(i=(0,f.Z)(["\n  width: 200px;\n  font-size: 20px;\n  border-radius: 5px;\n  border: 0.5px solid black;\n  outline: none;\n  padding: 5px;\n  margin-right: 10px;\n  ::placeholder {\n    font-size: 16px;\n  }\n"]))),g=m.ZP.button(o||(o=(0,f.Z)(["\n  border: 0.5px solid black;\n  border-radius: 5px;\n  padding: 5px;\n  outline: none;\n  font-size: 20px;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  &:hover,\n  :focus,\n  :active {\n    background-color: skyblue;\n    color: white;\n  }\n"]))),v=m.ZP.p(a||(a=(0,f.Z)(["\n  color: red;\n  font-size: 16px;\n  padding: 5px;\n"]))),b=e(184);function Z(n){var t=n.onSubmit,e=d.Ry().shape({query:d.Z_().required("This field cannot be empty")});return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(l.J9,{initialValues:{query:""},validationSchema:e,onSubmit:function(n,e){var r=e.resetForm;t(n),r()},children:(0,b.jsxs)(x,{children:[(0,b.jsx)(h,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,b.jsx)(g,{type:"submit",children:"Search"}),(0,b.jsx)(l.Bc,{render:function(n){return(0,b.jsx)(v,{children:n})},name:"query"})]})})})}var y,w=e(2791),j=e(5929),k=e(7047),P=e(3504),_=e(6871),S=m.ZP.div(y||(y=(0,f.Z)(["\n  margin-top: 15px;\n  padding: 15px;\n"]))),z=e(7596),q=e(4290);var C=function(){var n,t=(0,w.useState)([]),e=(0,u.Z)(t,2),r=e[0],i=e[1],o=(0,w.useState)(!1),a=(0,u.Z)(o,2),s=a[0],l=a[1],d=(0,_.TH)(),f=(0,P.lr)(),m=(0,u.Z)(f,2),x=m[0],h=m[1],g=null!==(n=x.get("query"))&&void 0!==n?n:"";return(0,w.useEffect)((function(){function n(){return(n=(0,c.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,j.IR)(g);case 3:t=n.sent,i(t),l(!1),0===t.length&&z.Am.error("Sorry, there are no movies for this request."),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),z.Am.error("Oops! Something went wrong!");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}""!==g&&null!==g&&g&&(!function(){n.apply(this,arguments)}(),l(!0))}),[g]),(0,b.jsxs)(S,{children:[(0,b.jsx)(Z,{onSubmit:function(n){n&&h(n)}}),s&&(0,b.jsx)(q.a,{}),r&&(0,b.jsx)(k.e,{movies:r,location:d})]})}},5929:function(n,t,e){e.d(t,{zv:function(){return m},tx:function(){return x},YJ:function(){return d},IR:function(){return p},_L:function(){return u}});var r=e(5861),i=e(7757),o=e.n(i),a=e(4569),c=e.n(a)().create({baseURL:"https://api.themoviedb.org/3",language:"en-US",params:{api_key:"644038bd8c4d79d1d14f251b1d12234c"}});function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie",{params:{query:t}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return c.get("/movie/".concat(n,"/credits"))}function x(n){return c.get("/movie/".concat(n,"/reviews"))}},8563:function(n,t,e){n.exports=e.p+"static/media/poster_plug.c04025af2282887e4c7d.jpg"}}]);
//# sourceMappingURL=193.686ec64e.chunk.js.map