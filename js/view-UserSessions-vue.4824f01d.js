(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-UserSessions-vue","view-MessageBar-vue"],{"0147":function(t,s,e){},"0ae5":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.msg?e("div",{staticClass:"message-bar",class:{dark:t.dark}},[e("span",{domProps:{innerHTML:t._s(t.msg)}})]):e("div",{staticClass:"message-bar",class:{dark:t.dark}},[t._t("default")],2)},i=[],r=e("9ab4"),n=e("60a3");let o=class extends n["c"]{};r["__decorate"]([Object(n["b"])()],o.prototype,"msg",void 0),r["__decorate"]([Object(n["b"])({type:Boolean})],o.prototype,"dark",void 0),o=r["__decorate"]([Object(n["a"])({components:{}})],o);var c=o,l=c,u=(e("c1e3"),e("2877")),d=Object(u["a"])(l,a,i,!1,null,"59854c17",null);s["default"]=d.exports},"0e80":function(t,s,e){"use strict";var a=e("0147"),i=e.n(a);i.a},9100:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-container",{staticClass:"fluid user-sessions"},[a("v-layout",{staticClass:"column wrap"},[a("v-flex",{staticClass:"top-bar"},[a("button",{staticClass:"close",on:{click:function(s){return t.$emit("close")}}}),a("div",{staticClass:"h3"},[t._v(t._s(t.$t("mySessions")))])]),a("v-flex",{staticClass:"d-flex"},[a("ul",{staticClass:"sessions-history"},t._l(t.sessionsRange,function(s){return a("li",{key:s.Id},[a("a",{class:{disabled:!t.isCompletedAndStudent(s.State)},on:{click:function(e){return t.updateRating(s)}}},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:s.Participant.ProfilePictureUrl?s.Participant.ProfilePictureUrl:""+e("fad5")}})]),a("div",{staticClass:"data"},[a("h5",{staticClass:"name"},[t._v(t._s(s.Participant.FirstName+" "+s.Participant.LastName))]),a("h5",{staticClass:"time"},[t._v(t._s(t.sessionState[s.State]+", "+t.formatDate(s.ExpiresOn)))])]),a("div",{staticClass:"type"},[a("span",[t._v(t._s(t.formatTypeDuration(s.TrainingType,s.Duration)))]),t.isStudent?a("div",{staticClass:"rate"},t._l(Math.round(s.Rating),function(t){return a("span",{staticClass:"yp__star"})}),0):t._e()])])])}),0)]),null!==t.sessionsHistory?a("v-flex",[t.sessionsHistory.length>t.perPage?a("div",{staticClass:"pagination"},[a("a",{staticClass:"yp__arrow-left",class:{disabled:1===t.currPage},on:{click:function(s){t.historyPortion(Number(t.currPage)-1)}}}),a("label",{staticClass:"pages",attrs:{for:"pages"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.currPage,expression:"currPage"}],attrs:{type:"number",id:"pages"},domProps:{value:t.currPage},on:{change:function(s){return t.historyPortion(t.currPage)},input:function(s){s.target.composing||(t.currPage=s.target.value)}}}),a("span",[t._v(t._s("/ "+t.totalPages))])]),a("a",{staticClass:"yp__arrow-right",class:{disabled:t.currPage===t.totalPages},on:{click:function(s){t.historyPortion(Number(t.currPage)+1)}}})]):t._e(),0===t.sessionsHistory.length?a("MessageBar",{staticClass:"no-history",attrs:{msg:"No previous sessions."}}):t._e()],1):t._e()],1)],1)},i=[],r=e("9ab4"),n=e("60a3"),o=e("b99e"),c=e("e0cf"),l=e("0ae5");let u=class extends n["c"]{constructor(){super(...arguments),this.sessionsHistory=null,this.sessionsRange=null,this.totalPages=0,this.currPage=1,this.perPage=5,this.sessionState=c["b"],this.leadZero=(t=>t<10?t<0?"00":`0${t}`:`${t}`)}get isStudent(){return o["a"].isStudent}reload(){this.getSessionsHistory(),this.$emit("historyReloaded")}mounted(){this.getSessionsHistory()}getSessionsHistory(){this.isStudent?this.getForStudent():this.getForTrainer()}getForStudent(){o["a"].client.call.trainingSession.getForStudent().response.then(t=>{this.sessionsHistory=t.reverse(),this.totalPages=Math.ceil(this.sessionsHistory.length/this.perPage),this.historyPortion(this.currPage)})}getForTrainer(){o["a"].client.call.trainingSession.getForTrainer().response.then(t=>{this.sessionsHistory=t.reverse(),this.totalPages=Math.ceil(this.sessionsHistory.length/this.perPage),this.historyPortion(this.currPage)})}historyPortion(t){t=t>this.totalPages?this.totalPages:t<1?1:t;const s=(t-1)*this.perPage,e=s+this.perPage;this.sessionsRange=this.sessionsHistory.slice(s,e),this.currPage=t}formatDate(t){const s=new Date(t);return`${s.toLocaleDateString()}, ${this.amPm(s.getHours(),s.getMinutes()).toUpperCase()}`}formatTypeDuration(t,s){const e=c["c"][t],a=30===s?25:55;return`${this.capitalize(e)}, ${a}min`}capitalize(t){return t.charAt(0).toUpperCase()+t.slice(1)}amPm(t,s){const e=s&&s<10?this.leadZero(s):s;return t>12?`${t%12}${e?":"+e:""}pm`:t<12?`${t}${e?":"+e:""}am`:`12${e?":"+e:""}pm`}updateRating(t){3===t.State&&this.isStudent&&this.$emit("updateRating",t)}isCompletedAndStudent(t){return 3===t&&this.isStudent}};r["__decorate"]([Object(n["b"])()],u.prototype,"reloadHistory",void 0),r["__decorate"]([Object(n["d"])("reloadHistory")],u.prototype,"reload",null),u=r["__decorate"]([Object(n["a"])({components:{MessageBar:l["default"]}})],u);var d=u,g=d,p=(e("0e80"),e("2877")),h=e("6544"),m=e.n(h),v=e("a523"),f=e("0e8f"),P=e("a722"),y=Object(p["a"])(g,a,i,!1,null,"6ed3649a",null);s["default"]=y.exports;m()(y,{VContainer:v["a"],VFlex:f["a"],VLayout:P["a"]})},a523:function(t,s,e){"use strict";e("db6d");var a=e("e8f2");s["a"]=Object(a["a"])("container")},a576:function(t,s,e){},a722:function(t,s,e){"use strict";e("db6d");var a=e("e8f2");s["a"]=Object(a["a"])("layout")},c1e3:function(t,s,e){"use strict";var a=e("a576"),i=e.n(a);i.a},fad5:function(t,s,e){t.exports=e.p+"img/avatar-dummy.10e80969.jpg"}}]);
//# sourceMappingURL=view-UserSessions-vue.4824f01d.js.map