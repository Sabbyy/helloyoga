(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-StudentBookings-vue","view-ListTeachers-vue","view-ListUpcoming-vue"],{"27db":function(t,e,i){},"5d2c":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.trainers.length?s("div",{staticClass:"trainers-list"},[s("div",{staticClass:"list-title"},[t._v(t._s(this.title))]),t._l(t.trainers,function(e){return s("a",{key:e.Id,staticClass:"trainer",class:{selected:e.Id===t.selectedTrainerId},on:{click:function(i){return i.stopPropagation(),t.trainerData(e)}}},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:e.ProfilePictureUrl?e.ProfilePictureUrl:""+i("fad5")}})]),s("h5",{staticClass:"name"},[t._v(t._s(""+e.FirstName))]),s("h5",{staticClass:"name"},[t._v(t._s(""+e.LastName))]),s("div",{staticClass:"rate"},t._l(Math.round(e.AverageRating),function(t){return s("span",{staticClass:"yp__star"})}),0)])})],2):t._e()},n=[],a=i("9ab4"),o=i("60a3");let r=class extends o["c"]{trainerData(t){this.$emit("trainerData",t)}};a["__decorate"]([Object(o["b"])()],r.prototype,"title",void 0),a["__decorate"]([Object(o["b"])()],r.prototype,"trainers",void 0),a["__decorate"]([Object(o["b"])()],r.prototype,"selectedTrainerId",void 0),r=a["__decorate"]([Object(o["a"])({components:{}})],r);var c=r,l=c,d=(i("b84c"),i("2877")),u=Object(d["a"])(l,s,n,!1,null,"ae9f109c",null);e["default"]=u.exports},6750:function(t,e,i){},"88d5":function(t,e,i){"use strict";var s=i("6750"),n=i.n(s);n.a},"8ebf":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return!t.bookings.length||1===t.bookings.length&&t.canceledBookingId?t._e():s("div",{staticClass:"bookings-list"},["success"===this.modalType?s("div",{staticClass:"list-title"},[t._v(t._s(t.title))]):t._e(),t._l(t.bookings,function(e){return e.Id!==t.canceledBookingId?s("a",{key:e.Id,staticClass:"booking",class:{selected:e.Id===t.selectedBookingId},on:{click:function(i){return i.stopPropagation(),t.timeUntilBooking(e.Id)}}},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:e.Participant.ProfilePictureUrl?e.Participant.ProfilePictureUrl:""+i("fad5")}})]),s("h5",{staticClass:"name"},[t._v(t._s(e.Participant.FirstName+" "+e.Participant.LastName))]),s("h5",{staticClass:"time"},[t._v(t._s(t.getTime(e.TimeSlot.Start)))])]):t._e()})],2)},n=[],a=i("9ab4"),o=i("60a3"),r=i("88c3"),c=i("b99e");let l=class extends o["c"]{constructor(){super(...arguments),this.modalType="",this.daysInWeek=[r["a"].t("sunday"),r["a"].t("monday"),r["a"].t("tuesday"),r["a"].t("wednesday"),r["a"].t("thursday"),r["a"].t("friday"),r["a"].t("saturday")],this.leadZero=(t=>t<10?t<0?"00":`0${t}`:`${t}`)}timeUntilBooking(t){const e=this.bookings.find(e=>e.Id===t);this.$emit("timeUntilBooking",e)}created(){this.getSessionTickets()}getTime(t){const e=this.getDayLabel(t),i=new Date(t).getHours(),s=new Date(t).getMinutes();return`${e} ${this.amPm(i,s)}`}getSessionTickets(){c["a"].client.call.sessionTickets.get().response.then(t=>{this.sessionTickets=t.length,this.modalType="success"})}getDayLabel(t){const e=new Date(t),i=new Date,s=new Date;return s.setDate(i.getDate()+1),e.getDate()===i.getDate()?r["a"].t("today").toString():e.getDate()===s.getDate()?r["a"].t("tomorrow").toString():`${this.daysInWeek[new Date(t).getDay()]} ${new Date(t).getMonth()+1}/${new Date(t).getDate()}`}amPm(t,e){const i=e&&e<10?this.leadZero(e):e;return t>12?`${t%12}${i?":"+i:""}pm`:t<12?`${t}${i?":"+i:""}am`:`12${i?":"+i:""}pm`}};a["__decorate"]([Object(o["b"])()],l.prototype,"title",void 0),a["__decorate"]([Object(o["b"])()],l.prototype,"bookings",void 0),a["__decorate"]([Object(o["b"])()],l.prototype,"selectedBookingId",void 0),a["__decorate"]([Object(o["b"])()],l.prototype,"canceledBookingId",void 0),l=a["__decorate"]([Object(o["a"])({components:{}})],l);var d=l,u=d,g=(i("964c"),i("2877")),h=Object(g["a"])(u,s,n,!1,null,"73c36881",null);e["default"]=h.exports},"964c":function(t,e,i){"use strict";var s=i("27db"),n=i.n(s);n.a},b84c:function(t,e,i){"use strict";var s=i("cffc"),n=i.n(s);n.a},cffc:function(t,e,i){},fad5:function(t,e,i){t.exports=i.p+"img/avatar-dummy.10e80969.jpg"},ff39:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"student-bookings"},[null!==t.bookings&&t.bookings.length||null!==t.trainers&&t.trainers.length?i("blockquote",[i("div",{staticClass:"btn-group hidden-sm-and-up"},[i("button",{staticClass:"btn-book yp-primary reverse",attrs:{type:"button"},on:{click:function(e){return t.$emit("showPanels")}}},[t._v(t._s(t.$t("home.student.studentBooking.bookSession")))])]),i("div",{staticClass:"btn-group fixed hidden-xs-only hidden-md-and-up"},[i("button",{staticClass:"btn-book yp-primary reverse",attrs:{type:"button"},on:{click:function(e){return t.$emit("showPanels")}}},[t._v(t._s(t.$t("home.student.studentBooking.bookSession")))])])]):t._e(),t.bookings?i("ListUpcoming",{attrs:{title:t.$t("home.student.studentBooking.upcoming"),bookings:t.bookings,selectedBookingId:t.selectedBookingId,canceledBookingId:t.canceledBookingId},on:{timeUntilBooking:t.timeUntilBooking}}):t._e(),t.trainers?i("ListTeachers",{attrs:{title:t.$t("home.student.studentBooking.myTeachers"),trainers:t.trainers,selectedTrainerId:t.selectedTrainerId},on:{trainerData:t.trainerData}}):t._e()],1)},n=[],a=i("9ab4"),o=i("60a3"),r=i("b99e"),c=i("5d2c"),l=i("8ebf");let d=class extends o["c"]{constructor(){super(...arguments),this.trainers=null,this.bookings=null,this.listenInterval=5e3,this.listenHandle=null,this.clientTimeDelta=0}created(){r["a"].client.call.system.Time().response.then(t=>this.clientTimeDelta=new Date(t.Time).getTime()-Date.now())}mounted(){this.listenBookingsAndTrainers()}destroyed(){null!==this.listenHandle&&clearTimeout(this.listenHandle)}listenBookingsAndTrainers(){this.getBookings().then(()=>{this.getTrainers().then(()=>{this.listenHandle=window.setTimeout(()=>this.listenBookingsAndTrainers(),this.listenInterval)})})}getBookings(){return r["a"].client.call.booking.get().response.then(t=>{this.bookings=t.filter(t=>!t.IsCancelled&&!t.IsUsed&&new Date(t.TimeSlot.End).getTime()>Date.now()+this.clientTimeDelta),this.bookings.length?(this.bookings=this.bookings.sort((t,e)=>t.TimeSlot.Start>e.TimeSlot.Start?1:-1),this.checkNextBooking(this.bookings),this.$emit("listUpcoming",!0)):this.$emit("listUpcoming",!1)})}getTrainers(){return r["a"].client.call.student.follows().response.then(t=>{this.trainers=t,this.trainers.length?this.$emit("listTrainers",!0):this.$emit("listTrainers",!1)})}checkNextBooking(t){const e=new Date(t[0].TimeSlot.Start).getTime()-(Date.now()+this.clientTimeDelta);e<12e4&&this.$emit("timeUntilBooking",t[0])}timeUntilBooking(t){this.$emit("timeUntilBooking",t)}trainerData(t){this.$emit("trainerData",t)}};a["__decorate"]([Object(o["b"])()],d.prototype,"selectedBookingId",void 0),a["__decorate"]([Object(o["b"])()],d.prototype,"selectedTrainerId",void 0),a["__decorate"]([Object(o["b"])()],d.prototype,"canceledBookingId",void 0),d=a["__decorate"]([Object(o["a"])({components:{ListTeachers:c["default"],ListUpcoming:l["default"]}})],d);var u=d,g=u,h=(i("88d5"),i("2877")),m=Object(h["a"])(g,s,n,!1,null,"072faac8",null);e["default"]=m.exports}}]);
//# sourceMappingURL=view-StudentBookings-vue.219bf8bf.js.map