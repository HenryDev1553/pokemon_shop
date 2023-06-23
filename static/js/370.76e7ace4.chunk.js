"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[370],{17264:function(e,n,a){a.d(n,{T:function(){return l}});var r=a(74165),t=a(15861),o=a(69829),c=a(12481),s=a(29573),i=a(14509),u=a(16448),l=(0,o.hg)("pokemon/addPkemon",function(){var e=(0,t.Z)((0,r.Z)().mark((function e(n,a){var t,o,l,d,m,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.getState,o=a.dispatch,e.prev=1,l=t(),d=l.app.userInfo,m=l.pokemon.userPokemons,null!==d&&void 0!==d&&d.email){e.next=5;break}return e.abrupt("return",o((0,u.fz)("Please login in order to add pokemon to your collection.")));case 5:if(-1!==m.findIndex((function(e){return e.name===n.name}))){e.next=16;break}return p=[],n.stats?p=n.types:n.types.forEach((function(e){return p.push(Object.keys(e).toString())})),e.next=11,(0,c.ET)(s.qF,{pokemon:{id:n.id,name:n.name,types:p},email:d.email});case 11:return e.next=13,o((0,i.v)());case 13:o((0,u.fz)("".concat(n.name," added to your collection."))),e.next=17;break;case 16:o((0,u.fz)("".concat(n.name," already part of your collection.")));case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),console.log({err:e.t0});case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(n,a){return e.apply(this,arguments)}}())},30620:function(e,n,a){var r=a(74165),t=a(15861),o=(a(72791),a(40071)),c=a(56355),s=a(42178),i=a(64740),u=a(19125),l=a(57689),d=a(16448),m=a(17264),p=a(76591),f=a(80184);n.Z=function(e){var n=e.pokemons,a=(0,i.T)(),k=(0,l.s0)(),h=(0,l.TH)();return(0,f.jsx)("div",{className:"pokemon-card-grid-container",children:(0,f.jsx)("div",{className:"pokemon-card-grid",children:n&&n.length>0&&(null===n||void 0===n?void 0:n.map((function(e){return(0,f.jsxs)("div",{className:"pokemon-card",children:[(0,f.jsx)("div",{className:"pokemon-card-list",children:h.pathname.includes("/pokemon")||h.pathname.includes("/search")?(0,f.jsx)(c.wEH,{className:"plus",onClick:function(){return a((0,m.T)(e))}}):(0,f.jsx)(c.Xm5,{className:"trash",onClick:(0,t.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a((0,u.R)({id:e.firebaseId}));case 2:a((0,d.fz)("Pokemon Removed Successfully."));case 3:case"end":return n.stop()}}),n)})))})}),(0,f.jsx)("div",{className:"pokemon-card-compare",children:(0,f.jsx)(o.pIN,{onClick:function(){a((0,s.a$)(e)),a((0,d.fz)("".concat(e.name," has been added to compare queue.")))}})}),(0,f.jsx)("h3",{className:"pokemon-card-title",children:e.name}),(0,f.jsx)("img",{src:e.image,alt:"",className:"pokemon-card-image",loading:"lazy",onClick:function(){a((0,d.vF)(p.X$.description)),a((0,s.H4)(void 0)),k("/pokemon/".concat(e.id))}}),(0,f.jsx)("div",{className:"pokemon-card-types",children:e.types.map((function(e,n){var a=Object.keys(e);return(0,f.jsxs)("div",{className:"pokemon-card-types-type",children:[(0,f.jsx)("img",{src:e[a[0]].image,alt:"pokemon type",className:"pokemon-card-types-type-image",loading:"lazy"}),(0,f.jsx)("h6",{className:"pokemon-card-types-type-text",children:a[0]})]},n)}))})]},e.id)})))})})}},16370:function(e,n,a){a.r(n);var r=a(74165),t=a(15861),o=a(93433),c=a(72791),s=a(35328),i=a(91216),u=a(64740),l=a(33111),d=a(71581),m=a(24248),p=a(16448),f=a(30620),k=a(80184);n.default=(0,s.Z)((function(){var e=(0,i.Ds)((function(e){return v(e)}),300),n=(0,u.C)((function(e){return e.app.isLoading})),a=(0,u.T)(),s=(0,u.C)((function(e){return e.pokemon})),h=s.allPokemon,x=s.randomPokemons;(0,c.useEffect)((function(){a((0,l.N)())}),[a]),(0,c.useEffect)((function(){if(h){var e=(0,o.Z)(h).sort((function(){return Math.random()-Math.random()})).slice(0,20);a((0,d.I)(e))}}),[h,a]),(0,c.useEffect)((function(){x&&a((0,p.K4)(!1))}),[x,a]);var v=function(){var e=(0,t.Z)((0,r.Z)().mark((function e(n){var t,c,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.length?(t=h.filter((function(e){return e.name.includes(n.toLowerCase())})),a((0,d.I)(t))):(c=(0,o.Z)(h),s=c.sort((function(){return Math.random()-Math.random()})).slice(0,20),a((0,d.I)(s)));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,k.jsx)(k.Fragment,{children:n?(0,k.jsx)(m.Z,{}):(0,k.jsxs)("div",{className:"search",children:[(0,k.jsx)("input",{type:"text",onChange:function(n){return e(n.target.value)},className:"pokemon-searchbar",placeholder:"Search Pokemon"}),(0,k.jsx)(f.Z,{pokemons:x})]})})}))},35328:function(e,n,a){a(72791);var r=a(80184);n.Z=function(e){return function(){return(0,r.jsx)("div",{className:"content",children:(0,r.jsx)(e,{})})}}}}]);
//# sourceMappingURL=370.76e7ace4.chunk.js.map