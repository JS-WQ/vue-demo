webpackJsonp([1],{"2NQT":function(e,t){},"8rg7":function(e,t){},"9qSv":function(e,t){},D7EY:function(e,t){},IRjC:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("4bK6"),n=s.n(i),r=s("zL8q"),a=s.n(r),o=(s("tvR6"),s("NcP2"),s("JnRc")),l=s.n(o);l.a.init({appId:"uYbyAtISGBqo5fqSx7S7coXe-gzGzoHsz",appKey:"bNSqKcbNOJz7ElpDXTNVJzRg"});var u=l.a,c={name:"signUp",data:function(){return{formData:{username:"",password:"",eMail:""}}},props:["signUpVisi"],methods:{signUp:function(){var e=new u.User;e.setUsername(this.formData.username),e.setPassword(this.formData.password),e.setEmail(this.formData.eMail),e.signUp().then(function(e){},function(e){console.log(e)})}},created:function(){}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"signUp"},[s("div",{staticClass:"signUpLeft"},[s("h1",[e._v("IResumer")]),e._v(" "),s("h2",[e._v("Sign in")]),e._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),e.signUp(t)}}},[s("div",{staticClass:"formRow"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:e.formData.username},on:{input:function(t){t.target.composing||e.$set(e.formData,"username",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"formRow"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.formData.password},on:{input:function(t){t.target.composing||e.$set(e.formData,"password",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"formRow"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.eMail,expression:"formData.eMail"}],attrs:{type:"text",placeholder:"e-mail"},domProps:{value:e.formData.eMail},on:{input:function(t){t.target.composing||e.$set(e.formData,"eMail",t.target.value)}}})]),e._v(" "),e._m(0)])]),e._v(" "),s("img",{attrs:{src:"http://wx2.sinaimg.cn/mw690/0060lm7Tly1frvr196wirj309b0drdgq.jpg"}})])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"formActions"},[t("input",{attrs:{type:"submit",value:"Sign in"}})])}]};var p=s("VU/8")(c,m,!1,function(e){s("2NQT")},null,null).exports,v={name:"login",props:["loginVisi","iresum","username"],data:function(){return{formData:{username:"",password:"",inlogined:!1}}},methods:{login:function(){var e=this;u.User.logIn(this.formData.username,this.formData.password).then(function(t){console.log("登录成功"),e.inlogined=!0,e.$emit("changedata",!0),e.$emit("changeuse",e.formData.username);var s=new u.Query("IRusmer");s.descending("createdAt"),s.include("IRusmer"),s.include("IRusmer.targetAVUser"),s.find().then(function(t){t.forEach(function(t){t.get("imx");e.iresum.imx=t.get("imx"),e.iresum.workExpress=t.get("workExpress"),e.iresum.studyExpress=t.get("studyExpress"),e.iresum.itemsdemo=t.get("itemsdemo"),e.iresum.prizes=t.get("prizes")})})},function(e){console.log(e)})},changeSign:function(){this.$emit("changeSign",null)}}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("div",{staticClass:"loginLeft"},[s("h1",[e._v("IResumer")]),e._v(" "),s("h2",[e._v("Login")]),e._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[s("div",{staticClass:"formRow"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:e.formData.username},on:{input:function(t){t.target.composing||e.$set(e.formData,"username",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"formRow"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.formData.password},on:{input:function(t){t.target.composing||e.$set(e.formData,"password",t.target.value)}}})]),e._v(" "),e._m(0)]),e._v(" "),s("div",{staticClass:"toSign"},[s("p",[e._v("Don't have account ?")]),e._v(" "),s("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.changeSign(t)}}},[e._v("Sign up now")])])]),e._v(" "),s("img",{attrs:{src:"http://wx2.sinaimg.cn/mw690/0060lm7Tly1frvr196wirj309b0drdgq.jpg"}})])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"formActions"},[t("input",{attrs:{type:"submit",value:"Login"}})])}]};var f=s("VU/8")(v,d,!1,function(e){s("b2Kq")},null,null).exports,g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"box"},[t("div",{staticClass:"box-ct"},[t("header",[t("i",{staticClass:"el-icon-error",on:{click:this.close}})]),this._v(" "),t("main",[this._t("default")],2)])])},staticRenderFns:[]};var _={name:"Topbar",data:function(){return{signUpVisi:!1,loginVisi:!1,inlogined:!1,username:"",objectId:""}},props:["iresum"],methods:{preview:function(){document.querySelector("#app").setAttribute("class","onpreview")},ResumFolder:function(){var e=this,t=new u.Query("IRusmer");t.descending("createdAt"),t.include("IRusmer"),t.include("IRusmer.targetAVUser"),t.find().then(function(t){e.objectId=t[0].id;var s=u.Object.createWithoutData("IRusmer",e.objectId);s.set("imx",e.iresum.imx),s.set("workExpress",e.iresum.workExpress),s.set("studyExpress",e.iresum.studyExpress),s.set("itemsdemo",e.iresum.itemsdemo),s.set("prizes",e.iresum.prizes),s.set("callme",e.iresum.callme),s.save()}).catch(function(){var t=new(u.Object.extend("IRusmer")),s=new u.ACL;s.setPublicReadAccess(!1),s.setPublicWriteAccess(!1),s.setReadAccess(u.User.current(),!0),s.setWriteAccess(u.User.current(),!0),t.setACL(s),t.set("imx",e.iresum.imx),t.set("workExpress",e.iresum.workExpress),t.set("studyExpress",e.iresum.studyExpress),t.set("itemsdemo",e.iresum.itemsdemo),t.set("prizes",e.iresum.prizes),t.set("callme",e.iresum.callme),t.save()})},leaveResum:function(){u.User.logOut(),location.reload()},changedata:function(e){this.inlogined=e},changeuse:function(e){this.username=e},changeSign:function(){this.signUpVisi=!0,this.loginVisi=!1}},components:{loginSignBox:s("VU/8")({name:"loginSignBox",props:["visible"],methods:{close:function(){this.$emit("close")}}},g,!1,function(e){s("9qSv")},null,null).exports,signUp:p,login:f}},h={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"topbar"}},[s("div",{staticClass:"topNav"},[s("div",{staticClass:"logo"},[e._v("IResumer")]),e._v(" "),s("div",{staticClass:"actions"},[e.inlogined?s("div",{staticClass:"userActioned",on:{changedata:e.changedata}},[s("p",[e._v("你好,"+e._s(e.username))]),e._v(" "),s("el-button",{attrs:{round:""},on:{click:e.preview}},[e._v("预览")]),e._v(" "),s("el-button",{attrs:{round:""},on:{click:e.ResumFolder}},[e._v("保存")]),e._v(" "),s("el-button",{attrs:{round:""},on:{click:e.leaveResum}},[e._v("退出")])],1):s("div",{staticClass:"userActions"},[s("el-button",{attrs:{round:""},on:{click:function(t){t.preventDefault(),e.signUpVisi=!0,e.loginVisi=!1}}},[e._v("注册")]),e._v(" "),s("loginSignBox",{attrs:{visible:e.signUpVisi},on:{close:function(t){e.signUpVisi=!1}}},[s("signUp",{attrs:{signUpVisi:e.signUpVisi},on:{success:function(t){e.login(t)}}})],1),e._v(" "),s("el-button",{attrs:{round:""},on:{click:function(t){t.preventDefault(),e.loginVisi=!0,e.signUpVisi=!1}}},[e._v("登录")]),e._v(" "),s("loginSignBox",{attrs:{visible:e.loginVisi},on:{close:function(t){e.loginVisi=!1}}},[s("login",{attrs:{loginVisi:e.loginVisi,iresum:e.iresum,inlogined:e.inlogined,username:e.username},on:{success:function(t){e.login(t)},changedata:e.changedata,changeuse:e.changeuse,changeSign:e.changeSign}})],1)],1)])])])},staticRenderFns:[]};var b=s("VU/8")(_,h,!1,function(e){s("pPWt")},null,null).exports,w=s("fZjL"),x=s.n(w),y={props:["iMessage","title","labels"],computed:{keys:function(){return x()(this.iMessage)}},created:function(){console.log()}},E={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v(e._s(e.title))]),e._v(" "),s("el-form",e._l(e.keys,function(t,i){return s("el-form-item",{key:i,attrs:{label:e.labels[t]||t}},[s("el-input",{model:{value:e.iMessage[t],callback:function(s){e.$set(e.iMessage,t,s)},expression:"iMessage[key]"}})],1)}))],1)},staticRenderFns:[]};var k={props:["items","labels","title"],computed:{keys:function(){return x()(this.items[0])}},methods:{additem:function(){var e={};this.keys.map(function(t){e[t]=""}),this.items.push(e)},removeitem:function(e){this.items.splice(e,1)}}},D={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v(e._s(e.title))]),e._v(" "),s("el-form",[e._l(e.items,function(t,i){return s("div",[e._l(e.keys,function(i,n){return s("el-form-item",{key:n,attrs:{label:e.labels[i]||i}},[s("el-input",{model:{value:t[i],callback:function(s){e.$set(t,i,s)},expression:"work[key]"}})],1)}),e._v(" "),s("i",{staticClass:"el-icon-circle-close-outline",on:{click:function(t){e.removeitem(i)}}}),e._v(" "),s("hr")],2)}),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.additem()}}},[e._v("新建一个")])],2)],1)},staticRenderFns:[]};var R={components:{iMessage:s("VU/8")(y,E,!1,function(e){s("bWGy")},null,null).exports,items:s("VU/8")(k,D,!1,function(e){s("wMIn")},null,null).exports},props:["iresum"],data:function(){return{currentTab:0,icons:["shenfenzheng1","gongzuo","xuexi1","xiangmu","jiangbei","dianhua"]}},created:function(){}},U={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"editor"}},[s("ol",{staticClass:"nav"},e._l([0,1,2,3,4,5],function(t){return s("li",{class:{active:e.currentTab===t},on:{click:function(s){e.currentTab=t}}},[s("svg",{staticClass:"icon"},[s("use",{attrs:{"xlink:href":"#icon-"+e.icons[t]}})])])})),e._v(" "),s("ol",{staticClass:"paners"},[s("li",{class:{active:0===e.currentTab}},[s("iMessage",{attrs:{iMessage:e.iresum.imx,labels:e.iresum.labels,title:"个人信息"}})],1),e._v(" "),s("li",{class:{active:1===e.currentTab}},[s("items",{attrs:{items:e.iresum.workExpress,labels:e.iresum.labels,title:"工作经历"}})],1),e._v(" "),s("li",{class:{active:2===e.currentTab}},[s("items",{attrs:{items:e.iresum.studyExpress,labels:e.iresum.labels,title:"学习经历"}})],1),e._v(" "),s("li",{class:{active:3===e.currentTab}},[s("items",{attrs:{items:e.iresum.itemsdemo,labels:e.iresum.labels,title:"参与项目"}})],1),e._v(" "),s("li",{class:{active:4===e.currentTab}},[s("items",{attrs:{items:e.iresum.prizes,labels:e.iresum.labels,title:"获奖情况"}})],1),e._v(" "),s("li",{class:{active:5===e.currentTab}},[s("iMessage",{attrs:{iMessage:e.iresum.callme,labels:e.iresum.labels,title:"联系方式"}})],1)])])},staticRenderFns:[]};var C={props:["iresum"],methods:{filter:function(e){var t=this;return e.filter(function(e){return!t.isEmpty(e)})},isEmpty:function(e){var t=!0;for(var s in e)if(e[s]){t=!1;break}return t},messEmpty:function(e){for(var t in e)if(e[t])return!0},offshow:function(){document.querySelector(".onpreview").setAttribute("class","")}}},S={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"preview"}},[s("i",{staticClass:"el-icon-circle-close-outline",on:{click:function(t){e.offshow()}}}),e._v(" "),e.messEmpty(e.iresum.imx)?s("section",[s("h2",[e._v("个人信息")]),e._v(" "),e._l(e.iresum.imx,function(t,i){return s("ul",[t?s("li",[e._v(e._s(e.iresum.labels[i])+":"+e._s(t))]):e._e()])})],2):e._e(),e._v(" "),e.filter(e.iresum.workExpress).length>0?s("section",[s("h2",[e._v("工作经验")]),e._v(" "),s("ul",{staticStyle:{"list-style":"none"}},e._l(e.filter(e.iresum.workExpress),function(t){return s("li",[s("h2",[e._v(e._s(t.company))]),e._v(" "),s("span",[e._v(e._s(t.content))])])}))]):e._e(),e._v(" "),e.filter(e.iresum.studyExpress).length>0?s("section",[s("h2",[e._v("学习经历")]),e._v(" "),s("ul",e._l(e.filter(e.iresum.studyExpress),function(t){return s("li",[e._v("\n                "+e._s(t.schoolName)+" |\n                "+e._s(t.onlineSchool)+" |\n                "+e._s(t.degree)+"\n            ")])}))]):e._e(),e._v(" "),e.filter(e.iresum.itemsdemo).length>0?s("section",[s("h2",[e._v("项目和作品")]),e._v(" "),s("ul",e._l(e.filter(e.iresum.itemsdemo),function(t){return s("li",[s("a",{attrs:{href:t.itemHrf}},[e._v(e._s(t.itemName))]),e._v(" "),s("span",[e._v(":"+e._s(t.itemCont))])])}))]):e._e(),e._v(" "),e.filter(e.iresum.prizes).length>0?s("section",[s("h2",[e._v("获奖经历")]),e._v(" "),s("ul",e._l(e.filter(e.iresum.prizes),function(t){return s("li",[s("span",[e._v(e._s(t.prizeTime)+":")]),e._v(" "),s("span",[e._v(e._s(t.prizeCont))])])}))]):e._e(),e._v(" "),e.messEmpty(e.iresum.callme)?s("section",[s("h2",[e._v("联系方式")]),e._v(" "),e._l(e.iresum.callme,function(t,i){return s("ul",[t?s("li",[e._v(e._s(e.iresum.labels[i]||i)+":"+e._s(t))]):e._e()])})],2):e._e()])},staticRenderFns:[]};var V={name:"App",data:function(){return{iresum:{imx:{name:"",birth:"",worktime:"",dreamPosition:"",expectedSalary:"",Blog:"",Github:"",city:""},workExpress:[{company:"",content:""}],studyExpress:[{schoolName:"",onlineSchool:"",degree:""}],itemsdemo:[{itemName:"",itemCont:"",itemHrf:""}],prizes:[{prizeTime:"",prizeCont:""}],callme:{telephone:"",QQ:"",weixin:"",mail:"",address:""},labels:{name:"姓名",city:"期望城市",birth:"出生年月",worktime:"工作年限",dreamPosition:"期望职位",expectedSalary:"期望薪资",Blog:"技术博客",Github:"Github",company:"公司",content:"工作内容",schoolName:"学校名称",onlineSchool:"学习时间",degree:"学位",itemName:"项目名称",itemCont:"项目内容",itemHrf:"项目链接",prizeTime:"奖杯名",prizeCont:"奖杯内容",telephone:"电话号码",weixin:"微信",mail:"邮箱",address:"地址"}},actionType:"signUp",user:null}},components:{Topbar:b,Editor:s("VU/8")(R,U,!1,function(e){s("8rg7")},null,null).exports,Preview:s("VU/8")(C,S,!1,function(e){s("D7EY")},null,null).exports},methods:{},created:function(){localStorage.getItem("state");var e=u.User.current();e&&(this.user=e.toJSON())}},z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Topbar",{attrs:{actionType:this.actionType,iresum:this.iresum}}),this._v(" "),t("main",[t("Editor",{attrs:{iresum:this.iresum}}),this._v(" "),t("Preview",{attrs:{iresum:this.iresum}})],1)],1)},staticRenderFns:[]};var T=s("VU/8")(V,z,!1,function(e){s("IRjC")},null,null).exports;n.a.use(a.a),n.a.config.productionTip=!1,new n.a({el:"#app",data:{},components:{App:T},template:"<app/>"})},NcP2:function(e,t){},b2Kq:function(e,t){},bWGy:function(e,t){},pPWt:function(e,t){},tvR6:function(e,t){},wMIn:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.046c50316554bdcc5cbc.js.map