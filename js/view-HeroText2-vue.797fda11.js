(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-HeroText2-vue"],{5807:function(s,i,t){"use strict";t.r(i);var e=function(){var s=this,i=s.$createElement,t=s._self._c||i;return t("div",{staticClass:"hero-box"},[t("v-layout",{staticClass:"row"},[t("v-flex",{staticClass:"sm12"},[!1===s.hasUpcomingSession?t("div",{staticClass:"hy-h"},[s._v(s._s(s.$t("message")))]):s._e(),!1===s.hasUpcomingSession?t("div",{staticClass:"hy-text"},[s._v(s._s(s.$t("heroText.text1"))+" "),t("br"),s._v(" "+s._s(s.$t("heroText.text2")))]):s._e(),!0===s.hasBooking&&!1===s.isCancelled||!0===s.hasUpcomingSession?t("blockquote",[s._v(s._s(s.$t("home.student.studentBooking.desc")))]):s._e()])],1),t("v-layout",{staticClass:"prices-wrap"},[t("v-flex",[null===s.isSubscribed&&s.isTrial||void 0===s.isSubscribed&&s.isTrial?t("div",{staticClass:"newPlanType"},[s._v("Your first month is free of charge")]):"subscription-a"===this.SubscriptionCode||"subscription-b"===this.SubscriptionCode||"subscription-c"===this.SubscriptionCode||"subscription-a-uk"===this.SubscriptionCode||"subscription-b-uk"===this.SubscriptionCode||"subscription-c-uk"===this.SubscriptionCode||"subscription-a-us"===this.SubscriptionCode||"subscription-b-us"===this.SubscriptionCode||"subscription-c-us"===this.SubscriptionCode||"subscription-a-sek"===this.SubscriptionCode||"subscription-b-sek"===this.SubscriptionCode||"subscription-c-sek"===this.SubscriptionCode||"subscription-a-nor"===this.SubscriptionCode||"subscription-b-nor"===this.SubscriptionCode||"subscription-c-nor"===this.SubscriptionCode?t("div",{staticClass:"planType"},[s._v(s._s(s.planInfo))]):s.sessionTickets>0&&null===s.isSubscribed||s.sessionTickets>0&&void 0===s.isSubscribed?t("div",{staticClass:"newPlanType"},[s._v(s._s(s.sessionTickets)+" "+s._s(s.sessionText)+" remaining")]):t("div",{staticClass:"planType"},[s._v("No Plan")]),null===s.isSubscribed||void 0===s.isSubscribed?t("a",{staticClass:"subLink",on:{click:function(i){return s.checkPayment()}}},[s._v(s._s(s.linkText))]):t("a",{staticClass:"sub"},[s._v(s._s(s.sessionTickets)+" "+s._s(s.sessionText)+" remaining "+s._s(s.diffInDays)+" days left")])])],1)],1)},n=[],o=t("9ab4"),c=t("60a3"),r=t("b99e"),a=t("37db");let u=class extends c["c"]{constructor(){super(...arguments),this.sessionTickets=0,this.isTrial=null,this.isSubscribed=null,this.tempInfo="",this.planInfo="",this.modal=null,this.SubscriptionCode="",this.timeDelta=0,this.diffInTime=0,this.diffInDays=0,this.renewalDate=0,this.sessionText="",this.hasBooking=null,this.isCancelled=null,this.hasUpcomingSession=null,this.openPlans=null,this.getTicket="",this.increaseTicket="",this.linkText="Choose Subscription Plan",this.listenInterval=1500,this.listenHandle=null,this.savedCards=null}mounted(){r["a"].client.call.sessionTickets.get().response.then(s=>{this.sessionTickets=s.length,this.increaseTicket=window.localStorage.getItem("increaseticket"),window.localStorage.removeItem("increaseticket"),"planvise"===this.increaseTicket&&("subscription-a"===this.SubscriptionCode||"subscription-a-us"===this.SubscriptionCode||"subscription-a-uk"===this.SubscriptionCode||"subscription-a-sek"===this.SubscriptionCode||"subscription-a-nor"===this.SubscriptionCode?this.sessionTickets=this.sessionTickets+2:"subscription-b"===this.SubscriptionCode||"subscription-b-us"===this.SubscriptionCode||"subscription-b-uk"===this.SubscriptionCode||"subscription-b-sek"===this.SubscriptionCode||"subscription-b-nor"===this.SubscriptionCode?this.sessionTickets=this.sessionTickets+4:"subscription-c"===this.SubscriptionCode||"subscription-c-us"===this.SubscriptionCode||"subscription-c-uk"===this.SubscriptionCode||"subscription-c-sek"===this.SubscriptionCode||"subscription-c-nor"===this.SubscriptionCode?this.sessionTickets=this.sessionTickets+6:this.sessionTickets=this.sessionTickets+0),this.updateSessionTicket(),1===this.sessionTickets?this.sessionText="Session":this.sessionText="Sessions"})}created(){this.hasPlan(),this.getSystemTime(),this.daysRemaining(),r["a"].client.call.booking.get().response.then(s=>{s.length>0?(this.hasBooking=!0,this.isCancelled=!0):(this.hasBooking=!1,this.isCancelled=!0),r["a"].client.call.student.follows().response.then(s=>{s.length>0?this.hasUpcomingSession=!0:this.hasUpcomingSession=!1})})}destroyed(){null!==this.listenHandle&&clearTimeout(this.listenHandle)}checkPayment(){r["a"].client.call.payments.paymentMethodsGet("card").response.then(s=>{this.savedCards=[].slice.call(s),0===this.savedCards.length?(window.localStorage.setItem("routeplaninfo","yes"),this.$router.push("/card")):this.$emit("openPlan")})}updateSessionTicket(){this.listenHandle=window.setTimeout(()=>r["a"].client.call.sessionTickets.get().response.then(s=>{this.sessionTickets=s.length,this.updateSessionTicket()}),this.listenInterval)}getSystemTime(){r["a"].client.call.system.Time().response.then(s=>{this.systemTime=s.Time})}daysRemaining(){r["a"].client.call.subscriptions.get().response.then(s=>{this.timeDelta=new Date(s.RenewalDate).getTime()-Date.now(),this.diffInTime=this.timeDelta/864e5,this.diffInDays=Math.round(this.diffInTime)}).catch(s=>{})}hasPlan(){r["a"].client.call.subscriptions.get().response.then(s=>{this.isSubscribed=s,this.SubscriptionCode=s.SubscriptionCode,this.isTrial=s.IsTrial,null===this.isSubscribed||void 0===this.isSubscribed?(this.planInfo="No Plan",this.linkText="Choose Subscription Plan"):null!==this.isSubscribed&&(this.isTrial?"subscription-a"===this.SubscriptionCode||"subscription-a-us"===this.SubscriptionCode||"subscription-a-uk"===this.SubscriptionCode||"subscription-a-sek"===this.SubscriptionCode||"subscription-a-nor"===this.SubscriptionCode?this.planInfo="Rise (Free Trial)":"subscription-b"===this.SubscriptionCode||"subscription-b-us"===this.SubscriptionCode||"subscription-b-uk"===this.SubscriptionCode||"subscription-b-sek"===this.SubscriptionCode||"subscription-b-nor"===this.SubscriptionCode?this.planInfo="Steady (Free Trial)":this.planInfo="Guru (Free Trial)":null!==this.isSubscribed&&(!1===this.isTrial?"subscription-a"===this.SubscriptionCode||"subscription-a-us"===this.SubscriptionCode||"subscription-a-uk"===this.SubscriptionCode||"subscription-a-sek"===this.SubscriptionCode||"subscription-a-nor"===this.SubscriptionCode?this.planInfo="Rise":"subscription-b"===this.SubscriptionCode||"subscription-b-us"===this.SubscriptionCode||"subscription-b-uk"===this.SubscriptionCode||"subscription-b-sek"===this.SubscriptionCode||"subscription-b-nor"===this.SubscriptionCode?this.planInfo="Steady":this.planInfo="Guru":this.planInfo="No Plan"))}).catch(s=>{})}};o["__decorate"]([Object(c["b"])()],u.prototype,"activeItem",void 0),u=o["__decorate"]([Object(c["a"])({components:{CardPlans:a["default"]}})],u);var h=u,l=h,b=(t("d70c"),t("2877")),p=t("6544"),d=t.n(p),S=t("0e8f"),C=t("a722"),k=Object(b["a"])(l,e,n,!1,null,"7840d838",null);i["default"]=k.exports;d()(k,{VFlex:S["a"],VLayout:C["a"]})},"5f12":function(s,i,t){},d70c:function(s,i,t){"use strict";var e=t("5f12"),n=t.n(e);n.a}}]);
//# sourceMappingURL=view-HeroText2-vue.797fda11.js.map