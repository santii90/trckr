webpackJsonp([1],{11:function(e,t,n){"use strict";var o=n(5),c=n(62),a=n(59),r=n.n(a),i=n(13);o.a.use(c.a);var s=n(58);o.a.use(s,i.a),t.a=new c.a({routes:[{path:"/",name:"Hello",component:r.a}]})},12:function(e,t,n){function o(e){n(18)}var c=n(10)(n(15),n(60),o,null,null);e.exports=c.exports},13:function(e,t,n){"use strict";var o=n(31),c=n.n(o),a=n(47),r=n.n(a),i=n(38),s=n(30),u=n(24),l=n.i({NODE_ENV:"production"}).PORT||3030,d=n.i({NODE_ENV:"production"}).HOST||"http://localhost",f=d+":"+l;console.log(f);var h=i().configure(c()(f).jquery(r.a)).configure(s()).configure(u({storage:window.localStorage}));h.service("match"),t.a=h},14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),c=n(12),a=n.n(c),r=n(11);o.a.config.productionTip=!1,new o.a({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},16:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App",matches:[],test:["hi","bye"]}},created:function(){var e=this;this.$services.match.on("created",function(t){e.matches.push(t)}),this.$services.match.find({query:{$limit:100}}).then(function(t){e.matches=t.data})},methods:{addMatch:function(){console.log("Clicked"),this.$services.match.create({formation:"4-1-2-1-2",ownScore:4,rivalScore:2}),this.getMatches}}}},18:function(e,t){},19:function(e,t){},59:function(e,t,n){function o(e){n(19)}var c=n(10)(n(16),n(61),o,"data-v-c5c95e6e",null);e.exports=c.exports},60:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Welcome to the Tracker ")]),e._v(" "),n("router-view")],1)},staticRenderFns:[]}},61:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1"),e._v(" "),n("div",[n("ul",[e._v("\n      "+e._s(e.matches.length)+"\n      "),e._l(e.matches,function(t){return n("li",{key:t.id},[e._v("\n        "+e._s(t.formation)+" :\n        "),n("b",[e._v(e._s(t.ownScore)+" - "+e._s(t.rivalScore))])])})],2)]),e._v(" "),n("button",{on:{click:e.addMatch}},[e._v("Add Match")])])},staticRenderFns:[]}}},[14]);
//# sourceMappingURL=app.0435170c43fe84871ce1.js.map