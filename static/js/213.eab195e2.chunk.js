"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[213],{197:function(n,e,t){t.d(e,{Ai:function(){return s},Hx:function(){return l},Y5:function(){return u},vw:function(){return o},xc:function(){return p}});var r=t(5861),i=t(7757),a=t.n(i),c=t(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTRiOWU0NzYwYjc1NjRlMTBhODBkMGM3MmY1MDY2NSIsInN1YiI6IjY1MzBmMzAwNTFhNjRlMDBlOWQwZDkwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F0V2ERrAtsa61fHF3dVDfjZxdlbA-rJZNB3SSptdH8c",c.Z.defaults.params={language:"en-US"};var o=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3555:function(n,e,t){t.d(e,{k:function(){return a}});var r,i=t(168),a=t(5867).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n"])))},7213:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,i,a,c,o,s,u,p,l,f,d,h,x,m,g=t(5861),v=t(9439),Z=t(7757),b=t.n(Z),j=t(7689),w=t(2791),k=t(8881),y=t(5218),P=t(861),z=t(197),I=t(3555),N=t(168),Y=t(5867),J=Y.ZP.div(r||(r=(0,N.Z)(["\n  display: flex;\n  align-items: flex-start;\n  gap: ",";\n  margin-bottom: ",";\n  padding: ",";\n  background-color: ",";\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n  border-radius: ",";\n"])),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.spacing(2)})),M=Y.ZP.img(i||(i=(0,N.Z)(["\n  height: auto;\n  border-radius: ",";\n\n  @media (max-width: 768px) {\n    margin-right: 0;\n    ",";\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(7)})),B=Y.ZP.div(a||(a=(0,N.Z)(["\n  flex: 1;\n"]))),S=Y.ZP.h2(c||(c=(0,N.Z)(["\n  font-size: 24px;\n  margin: 0;\n"]))),U=Y.ZP.span(o||(o=(0,N.Z)(["\n  font-size: 18px;\n  margin-top: ",";\n  display: block;\n  color: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.accent})),_=Y.ZP.h3(s||(s=(0,N.Z)(["\n  font-size: 20px;\n  margin-top: ",";\n"])),(function(n){return n.theme.spacing(4)})),A=Y.ZP.p(u||(u=(0,N.Z)(["\n  font-size: 16px;\n"]))),C=Y.ZP.h3(p||(p=(0,N.Z)(["\n  font-size: 20px;\n  margin-top: ",";\n"])),(function(n){return n.theme.spacing(7)})),O=Y.ZP.ul(l||(l=(0,N.Z)(["\n  font-size: 16px;\n  display: flex;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),R=t(184),D=function(n){var e=n.data,t=e.title,r=e.overview,i=e.vote_average,a=e.poster_path,c=e.release_date,o=e.genres,s=c?c.slice(0,4):null,u=Math.ceil(10*i);return(0,R.jsxs)(J,{children:[(0,R.jsx)(M,{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,R.jsxs)(B,{children:[(0,R.jsxs)(S,{children:[t," ",s&&"(".concat(s,")")]}),(0,R.jsxs)(U,{children:["User score: ",u,"%"]}),(0,R.jsx)(_,{children:"Overview"}),(0,R.jsx)(A,{children:r}),(0,R.jsx)(C,{children:"Genres"}),(0,R.jsx)(O,{children:o&&o.map((function(n){return(0,R.jsx)("li",{children:n.name},n.id)}))})]})]})},G=t(1087),T=Y.ZP.div(f||(f=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: ",";\n  background-color: ",";\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n  border-radius: ",";\n"])),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.spacing(2)})),W=(0,Y.ZP)(G.rU)(d||(d=(0,N.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  color: ",";\n  text-decoration: none;\n  margin-bottom: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.spacing(7)})),H=Y.ZP.p(h||(h=(0,N.Z)(["\n  font-size: 16px;\n  color: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.spacing(3)})),L=Y.ZP.li(x||(x=(0,N.Z)(["\n  font-size: 18px;\n  color: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return n.theme.spacing(2)})),V=(Y.ZP.span(m||(m=(0,N.Z)(["\n  margin-right: ",";\n"])),(function(n){return n.theme.spacing(1)})),function(){var n,e,t=(0,w.useState)([]),r=(0,v.Z)(t,2),i=r[0],a=r[1],c=(0,w.useState)(!1),o=(0,v.Z)(c,2),s=o[0],u=o[1],p=(0,w.useState)(!1),l=(0,v.Z)(p,2),f=l[0],d=l[1],h=(0,j.UO)().movieId,x=(0,j.TH)(),m=(0,w.useRef)(null!==(n=null===(e=x.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,w.useEffect)((function(){function n(){return(n=(0,g.Z)(b().mark((function n(){var e;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u(!0),d(!1),n.next=5,(0,z.Y5)(h);case 5:e=n.sent,a(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),d(!0);case 12:return n.prev=12,u(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}h&&function(){n.apply(this,arguments)}()}),[h]),(0,R.jsxs)("main",{children:[(0,R.jsxs)(W,{to:m.current,children:[" ",(0,R.jsx)(P.I_V,{}),"Go back"]}),(0,R.jsx)(D,{data:i}),(0,R.jsxs)(T,{children:[(0,R.jsx)(H,{children:"Additional information"}),(0,R.jsxs)("ul",{children:[(0,R.jsx)(L,{children:(0,R.jsx)(W,{to:"cast",children:"Cast"})}),(0,R.jsx)(L,{children:(0,R.jsx)(W,{to:"reviews",children:"Reviews"})})]})]}),(0,R.jsx)(w.Suspense,{fallback:(0,R.jsx)("div",{children:"Loading..."}),children:(0,R.jsx)(j.j3,{})}),s&&(0,R.jsx)(I.k,{children:(0,R.jsx)(k.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),f&&(0,R.jsx)("span",{children:"There was an error! Please, reload this page!"}),(0,R.jsx)(y.x7,{position:"top-right"})]})})}}]);
//# sourceMappingURL=213.eab195e2.chunk.js.map