"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[82],{17264:function(e,n,r){r.d(n,{T:function(){return l}});var a=r(74165),t=r(15861),o=r(69829),c=r(12481),s=r(29573),i=r(14509),u=r(16448),l=(0,o.hg)("pokemon/addPkemon",function(){var e=(0,t.Z)((0,a.Z)().mark((function e(n,r){var t,o,l,d,m,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.getState,o=r.dispatch,e.prev=1,l=t(),d=l.app.userInfo,m=l.pokemon.userPokemons,null!==d&&void 0!==d&&d.email){e.next=5;break}return e.abrupt("return",o((0,u.fz)("Please login in order to add pokemon to your collection.")));case 5:if(-1!==m.findIndex((function(e){return e.name===n.name}))){e.next=16;break}return p=[],n.stats?p=n.types:n.types.forEach((function(e){return p.push(Object.keys(e).toString())})),e.next=11,(0,c.ET)(s.qF,{pokemon:{id:n.id,name:n.name,types:p},email:d.email});case 11:return e.next=13,o((0,i.v)());case 13:o((0,u.fz)("".concat(n.name," added to your collection."))),e.next=17;break;case 16:o((0,u.fz)("".concat(n.name," already part of your collection.")));case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),console.log({err:e.t0});case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(n,r){return e.apply(this,arguments)}}())},30620:function(e,n,r){var a=r(74165),t=r(15861),o=(r(72791),r(40071)),c=r(56355),s=r(42178),i=r(64740),u=r(19125),l=r(57689),d=r(16448),m=r(17264),p=r(76591),f=r(80184);n.Z=function(e){var n=e.pokemons,r=(0,i.T)(),k=(0,l.s0)(),x=(0,l.TH)();return(0,f.jsx)("div",{className:"pokemon-card-grid-container",children:(0,f.jsx)("div",{className:"pokemon-card-grid",children:n&&n.length>0&&(null===n||void 0===n?void 0:n.map((function(e){return(0,f.jsxs)("div",{className:"pokemon-card",children:[(0,f.jsx)("div",{className:"pokemon-card-list",children:x.pathname.includes("/pokemon")||x.pathname.includes("/search")?(0,f.jsx)(c.wEH,{className:"plus",onClick:function(){return r((0,m.T)(e))}}):(0,f.jsx)(c.Xm5,{className:"trash",onClick:(0,t.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r((0,u.R)({id:e.firebaseId}));case 2:r((0,d.fz)("Pokemon Removed Successfully."));case 3:case"end":return n.stop()}}),n)})))})}),(0,f.jsx)("div",{className:"pokemon-card-compare",children:(0,f.jsx)(o.pIN,{onClick:function(){r((0,s.a$)(e)),r((0,d.fz)("".concat(e.name," has been added to compare queue.")))}})}),(0,f.jsx)("h3",{className:"pokemon-card-title",children:e.name}),(0,f.jsx)("img",{src:e.image,alt:"",className:"pokemon-card-image",loading:"lazy",onClick:function(){r((0,d.vF)(p.X$.description)),r((0,s.H4)(void 0)),k("/pokemon/".concat(e.id))}}),(0,f.jsx)("div",{className:"pokemon-card-types",children:e.types.map((function(e,n){var r=Object.keys(e);return(0,f.jsxs)("div",{className:"pokemon-card-types-type",children:[(0,f.jsx)("img",{src:e[r[0]].image,alt:"pokemon type",className:"pokemon-card-types-type-image",loading:"lazy"}),(0,f.jsx)("h6",{className:"pokemon-card-types-type-text",children:r[0]})]},n)}))})]},e.id)})))})})}},13082:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var a=r(72791),t=r(35328),o=r(74165),c=r(15861),s=r(64740),i=r(64981),u=r(29573),l=r(73728),d=r(12481),m=r(16448),p=r(80184);var f=function(){var e=(0,s.T)(),n=function(){var n=(0,c.Z)((0,o.Z)().mark((function n(){var r,a,t,c,s,l;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new i.hJ,n.next=3,(0,i.rh)(u.lX,r);case 3:if(a=n.sent,t=a.user,c=t.email,s=t.uid,!c){n.next=16;break}return l=(0,d.IO)(u.u8,(0,d.ar)("uid","==",s)),n.next=11,(0,d.PL)(l);case 11:if(0!==n.sent.docs.length){n.next=15;break}return n.next=15,(0,d.ET)((0,d.hJ)(u.h3,"users"),{uid:s,email:c});case 15:e((0,m.ij)({email:c}));case 16:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,p.jsx)("div",{className:"login",children:(0,p.jsxs)("button",{onClick:n,className:"login-btn",children:[(0,p.jsx)(l.JM8,{})," Login with Google"]})})},k=r(14509),x=r(30620);var h=(0,t.Z)((function(){var e=(0,s.C)((function(e){return e.app})).userInfo,n=(0,s.C)((function(e){return e.pokemon})).userPokemons,r=(0,s.T)();return(0,a.useEffect)((function(){r((0,k.v)())}),[e,r]),(0,p.jsx)("div",{className:"list",children:e?(0,p.jsx)(x.Z,{pokemons:n}):(0,p.jsx)(f,{})})}))},35328:function(e,n,r){r(72791);var a=r(80184);n.Z=function(e){return function(){return(0,a.jsx)("div",{className:"content",children:(0,a.jsx)(e,{})})}}}}]);
//# sourceMappingURL=82.f4d10d39.chunk.js.map