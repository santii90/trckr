webpackJsonp([1],{102:function(e,t,n){function o(e){n(55)}var c=n(29)(n(39),n(104),o,"data-v-c5c95e6e",null);e.exports=c.exports},103:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Welcome to the Tracker ")]),e._v(" "),n("router-view")],1)},staticRenderFns:[]}},104:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1"),e._v(" "),n("div",[n("ul",[e._v("\n      "+e._s(e.matches.length)+"\n      "),e._l(e.matches,function(t){return n("li",{key:t.id},[e._v("\n        "+e._s(t.formation)+" :\n        "),n("b",[e._v(e._s(t.ownScore)+" - "+e._s(t.rivalScore))])])})],2)]),e._v(" "),n("button",{on:{click:e.addMatch}},[e._v("Add Match")])])},staticRenderFns:[]}},109:function(e,t){},32:function(e,t,n){"use strict";var o=n(15),c=n(105),a=n(102),r=n.n(a),i=n(36);o.a.use(c.a);var s=n(101);o.a.use(s,i.a),t.a=new c.a({routes:[{path:"/",name:"Hello",component:r.a}]})},33:function(e,t,n){function o(e){n(54)}var c=n(29)(n(38),n(103),o,null,null);e.exports=c.exports},36:function(e,t,n){"use strict";var o=n(72),c=n(66),a=n(60),r=n(70),i=n(91),s=n.i({NODE_ENV:"production"}).PORT||3030,u=n.i({NODE_ENV:"production"}).HOST||"http://localhost",l=i(u+":"+s),f=o().configure(r(l)).configure(c()).configure(a({storage:window.localStorage}));f.service("match"),t.a=f},37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),c=n(33),a=n.n(c),r=n(32);o.a.config.productionTip=!1,new o.a({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})},38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App",matches:[],test:["hi","bye"]}},created:function(){var e=this;this.$services.match.on("created",function(t){e.matches.push(t)}),this.$services.match.find({query:{$limit:100}}).then(function(t){e.matches=t.data})},methods:{addMatch:function(){console.log("Clicked"),this.$services.match.create({formation:"4-1-2-1-2",ownScore:4,rivalScore:2}),this.getMatches}}}},54:function(e,t){},55:function(e,t){}},[37]);
//# sourceMappingURL=app.c82160e25deef3d789cc.js.map