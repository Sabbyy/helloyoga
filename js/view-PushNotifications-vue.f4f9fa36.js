(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-PushNotifications-vue","view-NotificationMessage-vue"],{"59ca":function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}var i=r(n("c23d"));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e.exports=i},"59ef":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"slide-notification",appear:""}},[n("div",{staticClass:"notification",class:{light:e.light},on:{click:function(t){return e.close()}}},[n("div",{staticClass:"msg",domProps:{innerHTML:e._s(e.msg)}})])])},i=[],o=n("9ab4"),s=n("60a3");let a=class extends s["c"]{constructor(){super(...arguments),this.autoHide=5e3}mounted(){this.hold||setTimeout(()=>this.close(),this.autoHide)}close(){this.$emit("close")}};o["__decorate"]([Object(s["b"])()],a.prototype,"msg",void 0),o["__decorate"]([Object(s["b"])({type:Boolean})],a.prototype,"light",void 0),o["__decorate"]([Object(s["b"])({type:Boolean})],a.prototype,"hold",void 0),a=o["__decorate"]([Object(s["a"])({components:{}})],a);var c=a,u=c,h=(n("5bc5"),n("2877")),l=Object(h["a"])(u,r,i,!1,null,"5463e194",null);t["default"]=l.exports},"5bc5":function(e,t,n){"use strict";var r=n("deeb"),i=n.n(r);i.a},"884f":function(e,t,n){"use strict";n.r(t);var r,i,o,s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pushNotifications"},[e.message?n("NotificationMessage",{attrs:{msg:e.message},on:{close:function(t){e.message=null}}}):e._e()],1)},a=[],c=n("9ab4"),u=n("60a3"),h=n("59ca"),l=n("c23d"),d=n.n(l),f=n("cd51"),p=(r={},r["only-available-in-window"]="This method is available in a Window context.",r["only-available-in-sw"]="This method is available in a service worker context.",r["should-be-overriden"]="This method should be overriden by extended classes.",r["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",r["permission-default"]="The required permissions were not granted and dismissed instead.",r["permission-blocked"]="The required permissions were not granted and blocked instead.",r["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",r["notifications-blocked"]="Notifications have been blocked.",r["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",r["sw-registration-expected"]="A service worker registration was the expected input.",r["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",r["invalid-saved-token"]="Unable to access details of the saved token.",r["sw-reg-redundant"]="The service worker being used for push was made redundant.",r["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",r["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",r["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",r["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",r["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",r["token-update-no-token"]="FCM returned no token when updating the user to push.",r["use-sw-before-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",r["invalid-delete-token"]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",r["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",r["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",r["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",r["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",r["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}",r["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",r["failed-to-delete-token"]="Unable to delete the currently saved token.",r["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",r["incorrect-gcm-sender-id"]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",r["bad-scope"]="The service worker scope must be a string with at least one character.",r["bad-vapid-key"]="The public VAPID key is not a Uint8Array with 65 bytes.",r["bad-subscription"]="The subscription must be a valid PushSubscription.",r["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",r["bad-push-set"]="The FCM push set used for storage / lookup was not not a valid push set string.",r["failed-delete-vapid-key"]="The VAPID key could not be deleted.",r["invalid-public-vapid-key"]="The public VAPID key must be a string.",r["use-public-key-before-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",r["public-vapid-key-decryption-failed"]="The public VAPID key did not equal 65 bytes when decrypted.",r),b=new f["ErrorFactory"]("messaging","Messaging",p),g=new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110]),v="https://fcm.googleapis.com";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function y(e,t){if(null==e||null==t)return!1;if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(var n=new DataView(e),r=new DataView(t),i=0;i<e.byteLength;i++)if(n.getUint8(i)!==r.getUint8(i))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,Object(c["__spread"])(t)))}function m(e){var t=_(e);return t.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e["TYPE_OF_MSG"]="firebase-messaging-msg-type",e["DATA"]="firebase-messaging-msg-data"})(i||(i={})),function(e){e["PUSH_MSG_RECEIVED"]="push-msg-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(o||(o={}));var w=function(){function e(){}return e.prototype.getToken=function(e,t,n){return Object(c["__awaiter"])(this,void 0,void 0,function(){var r,i,o,s,a,u,h,l,d;return Object(c["__generator"])(this,function(c){switch(c.label){case 0:r=m(t.getKey("p256dh")),i=m(t.getKey("auth")),o="authorized_entity="+e+"&endpoint="+t.endpoint+"&encryption_key="+r+"&encryption_auth="+i,y(n.buffer,g.buffer)||(s=m(n),o+="&application_pub_key="+s),a=new Headers,a.append("Content-Type","application/x-www-form-urlencoded"),u={method:"POST",headers:a,body:o},c.label=1;case 1:return c.trys.push([1,4,,5]),[4,fetch(v+"/fcm/connect/subscribe",u)];case 2:return l=c.sent(),[4,l.json()];case 3:return h=c.sent(),[3,5];case 4:throw c.sent(),b.create("token-subscribe-failed");case 5:if(h.error)throw d=h.error.message,b.create("token-subscribe-failed",{errorInfo:d});if(!h.token)throw b.create("token-subscribe-no-token");if(!h.pushSet)throw b.create("token-subscribe-no-push-set");return[2,{token:h.token,pushSet:h.pushSet}]}})})},e.prototype.updateToken=function(e,t,n,r,i){return Object(c["__awaiter"])(this,void 0,void 0,function(){var o,s,a,u,h,l,d,f,p;return Object(c["__generator"])(this,function(c){switch(c.label){case 0:o=m(r.getKey("p256dh")),s=m(r.getKey("auth")),a="push_set="+n+"&token="+t+"&authorized_entity="+e+"&endpoint="+r.endpoint+"&encryption_key="+o+"&encryption_auth="+s,y(i.buffer,g.buffer)||(u=m(i),a+="&application_pub_key="+u),h=new Headers,h.append("Content-Type","application/x-www-form-urlencoded"),l={method:"POST",headers:h,body:a},c.label=1;case 1:return c.trys.push([1,4,,5]),[4,fetch(v+"/fcm/connect/subscribe",l)];case 2:return f=c.sent(),[4,f.json()];case 3:return d=c.sent(),[3,5];case 4:throw c.sent(),b.create("token-update-failed");case 5:if(d.error)throw p=d.error.message,b.create("token-update-failed",{errorInfo:p});if(!d.token)throw b.create("token-update-no-token");return[2,d.token]}})})},e.prototype.deleteToken=function(e,t,n){return Object(c["__awaiter"])(this,void 0,void 0,function(){var r,i,o,s,a,u;return Object(c["__generator"])(this,function(c){switch(c.label){case 0:r="authorized_entity="+e+"&token="+t+"&pushSet="+n,i=new Headers,i.append("Content-Type","application/x-www-form-urlencoded"),o={method:"POST",headers:i,body:r},c.label=1;case 1:return c.trys.push([1,4,,5]),[4,fetch(v+"/fcm/connect/unsubscribe",o)];case 2:return s=c.sent(),[4,s.json()];case 3:if(a=c.sent(),a.error)throw u=a.error.message,b.create("token-unsubscribe-failed",{errorInfo:u});return[3,5];case 4:throw c.sent(),b.create("token-unsubscribe-failed");case 5:return[2]}})})},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length),o=0;o<r.length;++o)i[o]=r.charCodeAt(o);return i}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S="undefined",T="fcm_token_object_Store";function O(e){if(e.objectStoreNames.contains(T)){var t=e.transaction(T),n=t.objectStore(T),r=new w,i=n.openCursor();i.onerror=function(e){console.warn("Unable to cleanup old IDB.",e)},i.onsuccess=function(){var t=i.result;if(t){var n=t.value;r.deleteToken(n.fcmSenderId,n.fcmToken,n.fcmPushSet),t.continue()}else e.close(),indexedDB.deleteDatabase(S)}}}function E(){var e=indexedDB.open(S);e.onerror=function(e){},e.onsuccess=function(t){var n=e.result;O(n)}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N=function(){function e(){this.dbPromise=null}return e.prototype.get=function(e){return this.createTransaction(function(t){return t.get(e)})},e.prototype.getIndex=function(e,t){function n(n){var r=n.index(e);return r.get(t)}return this.createTransaction(n)},e.prototype.put=function(e){return this.createTransaction(function(t){return t.put(e)},"readwrite")},e.prototype.delete=function(e){return this.createTransaction(function(t){return t.delete(e)},"readwrite")},e.prototype.closeDatabase=function(){return Object(c["__awaiter"])(this,void 0,void 0,function(){var e;return Object(c["__generator"])(this,function(t){switch(t.label){case 0:return this.dbPromise?[4,this.dbPromise]:[3,2];case 1:e=t.sent(),e.close(),this.dbPromise=null,t.label=2;case 2:return[2]}})})},e.prototype.createTransaction=function(e,t){return void 0===t&&(t="readonly"),Object(c["__awaiter"])(this,void 0,void 0,function(){var n,r,i,o;return Object(c["__generator"])(this,function(s){switch(s.label){case 0:return[4,this.getDb()];case 1:return n=s.sent(),r=n.transaction(this.objectStoreName,t),i=r.objectStore(this.objectStoreName),[4,j(e(i))];case 2:return o=s.sent(),[2,new Promise(function(e,t){r.oncomplete=function(){e(o)},r.onerror=function(){t(r.error)}})]}})})},e.prototype.getDb=function(){var e=this;return this.dbPromise||(this.dbPromise=new Promise(function(t,n){var r=indexedDB.open(e.dbName,e.dbVersion);r.onsuccess=function(){t(r.result)},r.onerror=function(){e.dbPromise=null,n(r.error)},r.onupgradeneeded=function(t){return e.onDbUpgrade(r,t)}})),this.dbPromise},e}();function j(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}})}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_token_details_db",t.dbVersion=3,t.objectStoreName="fcm_token_object_Store",t}return Object(c["__extends"])(t,e),t.prototype.onDbUpgrade=function(e,t){var n=e.result;switch(t.oldVersion){case 0:var r=n.createObjectStore(this.objectStoreName,{keyPath:"swScope"});r.createIndex("fcmSenderId","fcmSenderId",{unique:!1}),r.createIndex("fcmToken","fcmToken",{unique:!0});case 1:E();case 2:r=e.transaction.objectStore(this.objectStoreName);var i=r.openCursor();i.onsuccess=function(){var e=i.result;if(e){var t=e.value,n=Object(c["__assign"])({},t);t.createTime||(n.createTime=Date.now()),"string"===typeof t.vapidKey&&(n.vapidKey=k(t.vapidKey)),"string"===typeof t.auth&&(n.auth=k(t.auth).buffer),"string"===typeof t.auth&&(n.p256dh=k(t.p256dh).buffer),e.update(n),e.continue()}}}},t.prototype.getTokenDetailsFromToken=function(e){return Object(c["__awaiter"])(this,void 0,void 0,function(){return Object(c["__generator"])(this,function(t){if(!e)throw b.create("bad-token");return D({fcmToken:e}),[2,this.getIndex("fcmToken",e)]})})},t.prototype.getTokenDetailsFromSWScope=function(e){return Object(c["__awaiter"])(this,void 0,void 0,function(){return Object(c["__generator"])(this,function(t){if(!e)throw b.create("bad-scope");return D({swScope:e}),[2,this.get(e)]})})},t.prototype.saveTokenDetails=function(e){return Object(c["__awaiter"])(this,void 0,void 0,function(){return Object(c["__generator"])(this,function(t){if(!e.swScope)throw b.create("bad-scope");if(!e.vapidKey)throw b.create("bad-vapid-key");if(!e.endpoint||!e.auth||!e.p256dh)throw b.create("bad-subscription");if(!e.fcmSenderId)throw b.create("bad-sender-id");if(!e.fcmToken)throw b.create("bad-token");if(!e.fcmPushSet)throw b.create("bad-push-set");return D(e),[2,this.put(e)]})})},t.prototype.deleteToken=function(e){return Object(c["__awaiter"])(this,void 0,void 0,function(){var t;return Object(c["__generator"])(this,function(n){switch(n.label){case 0:return"string"!==typeof e||0===e.length?[2,Promise.reject(b.create("invalid-delete-token"))]:[4,this.getTokenDetailsFromToken(e)];case 1:if(t=n.sent(),!t)throw b.create("delete-token-not-found");return[4,this.delete(t.swScope)];case 2:return n.sent(),[2,t]}})})},t}(N);function D(e){if(e.fcmToken&&("string"!==typeof e.fcmToken||0===e.fcmToken.length))throw b.create("bad-token");if(e.swScope&&("string"!==typeof e.swScope||0===e.swScope.length))throw b.create("bad-scope");if(e.vapidKey&&(!(e.vapidKey instanceof Uint8Array)||65!==e.vapidKey.length))throw b.create("bad-vapid-key");if(e.endpoint&&("string"!==typeof e.endpoint||0===e.endpoint.length))throw b.create("bad-subscription");if(e.auth&&!(e.auth instanceof ArrayBuffer))throw b.create("bad-subscription");if(e.p256dh&&!(e.p256dh instanceof ArrayBuffer))throw b.create("bad-subscription");if(e.fcmSenderId&&("string"!==typeof e.fcmSenderId||0===e.fcmSenderId.length))throw b.create("bad-sender-id");if(e.fcmPushSet&&("string"!==typeof e.fcmPushSet||0===e.fcmPushSet.length))throw b.create("bad-push-set")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P=65,C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_vapid_details_db",t.dbVersion=1,t.objectStoreName="fcm_vapid_object_Store",t}return Object(c["__extends"])(t,e),t.prototype.onDbUpgrade=function(e){var t=e.result;t.createObjectStore(this.objectStoreName,{keyPath:"swScope"})},t.prototype.getVapidFromSWScope=function(e){return Object(c["__awaiter"])(this,void 0,void 0,function(){var t;return Object(c["__generator"])(this,function(n){switch(n.label){case 0:if("string"!==typeof e||0===e.length)throw b.create("bad-scope");return[4,this.get(e)];case 1:return t=n.sent(),[2,t?t.vapidKey:void 0]}})})},t.prototype.saveVapidDetails=function(e,t){return Object(c["__awaiter"])(this,void 0,void 0,function(){var n;return Object(c["__generator"])(this,function(r){if("string"!==typeof e||0===e.length)throw b.create("bad-scope");if(null===t||t.length!==P)throw b.create("bad-vapid-key");return n={swScope:e,vapidKey:t},[2,this.put(n)]})})},t.prototype.deleteVapidDetails=function(e){return Object(c["__awaiter"])(this,void 0,void 0,function(){var t;return Object(c["__generator"])(this,function(n){switch(n.label){case 0:return[4,this.getVapidFromSWScope(e)];case 1:if(t=n.sent(),!t)throw b.create("delete-scope-not-found");return[4,this.delete(e)];case 2:return n.sent(),[2,t]}})})},t}(N),M="messagingSenderId",I=6048e5,R=function(){function e(e){var t=this;if(!e.options[M]||"string"!==typeof e.options[M])throw b.create("bad-sender-id");this.messagingSenderId=e.options[M],this.tokenDetailsModel=new A,this.vapidDetailsModel=new C,this.iidModel=new w,this.app=e,this.INTERNAL={delete:function(){return t.delete()}}}return e.prototype.getToken=function(){return Object(c["__awaiter"])(this,void 0,void 0,function(){var e,t,n,r,i;return Object(c["__generator"])(this,function(o){switch(o.label){case 0:if(e=this.getNotificationPermission_(),"denied"===e)throw b.create("notifications-blocked");return"granted"!==e?[2,null]:[4,this.getSWRegistration_()];case 1:return t=o.sent(),[4,this.getPublicVapidKey_()];case 2:return n=o.sent(),[4,this.getPushSubscription(t,n)];case 3:return r=o.sent(),[4,this.tokenDetailsModel.getTokenDetailsFromSWScope(t.scope)];case 4:return i=o.sent(),i?[2,this.manageExistingToken(t,r,n,i)]:[2,this.getNewToken(t,r,n)]}})})},e.prototype.manageExistingToken=function(e,t,n,r){return Object(c["__awaiter"])(this,void 0,void 0,function(){var i,o;return Object(c["__generator"])(this,function(s){switch(s.label){case 0:return i=F(t,n,r),i?(o=Date.now(),o<r.createTime+I?[2,r.fcmToken]:[2,this.updateToken(e,t,n,r)]):[4,this.deleteTokenFromDB(r.fcmToken)];case 1:return s.sent(),[2,this.getNewToken(e,t,n)]}})})},e.prototype.updateToken=function(e,t,n,r){return Object(c["__awaiter"])(this,void 0,void 0,function(){var i,o,s;return Object(c["__generator"])(this,function(a){switch(a.label){case 0:return a.trys.push([0,4,,6]),[4,this.iidModel.updateToken(this.messagingSenderId,r.fcmToken,r.fcmPushSet,t,n)];case 1:return i=a.sent(),o={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:i,fcmPushSet:r.fcmPushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(o)];case 2:return a.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return a.sent(),[2,i];case 4:return s=a.sent(),[4,this.deleteToken(r.fcmToken)];case 5:throw a.sent(),s;case 6:return[2]}})})},e.prototype.getNewToken=function(e,t,n){return Object(c["__awaiter"])(this,void 0,void 0,function(){var r,i;return Object(c["__generator"])(this,function(o){switch(o.label){case 0:return[4,this.iidModel.getToken(this.messagingSenderId,t,n)];case 1:return r=o.sent(),i={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:r.token,fcmPushSet:r.pushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(i)];case 2:return o.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return o.sent(),[2,r.token]}})})},e.prototype.deleteToken=function(e){return Object(c["__awaiter"])(this,void 0,void 0,function(){var t,n;return Object(c["__generator"])(this,function(r){switch(r.label){case 0:return[4,this.deleteTokenFromDB(e)];case 1:return r.sent(),[4,this.getSWRegistration_()];case 2:return t=r.sent(),t?[4,t.pushManager.getSubscription()]:[3,4];case 3:if(n=r.sent(),n)return[2,n.unsubscribe()];r.label=4;case 4:return[2,!0]}})})},e.prototype.deleteTokenFromDB=function(e){return Object(c["__awaiter"])(this,void 0,void 0,function(){var t;return Object(c["__generator"])(this,function(n){switch(n.label){case 0:return[4,this.tokenDetailsModel.deleteToken(e)];case 1:return t=n.sent(),[4,this.iidModel.deleteToken(t.fcmSenderId,t.fcmToken,t.fcmPushSet)];case 2:return n.sent(),[2]}})})},e.prototype.getPushSubscription=function(e,t){return e.pushManager.getSubscription().then(function(n){return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})})},e.prototype.requestPermission=function(){throw b.create("only-available-in-window")},e.prototype.useServiceWorker=function(e){throw b.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){throw b.create("only-available-in-window")},e.prototype.onMessage=function(e,t,n){throw b.create("only-available-in-window")},e.prototype.onTokenRefresh=function(e,t,n){throw b.create("only-available-in-window")},e.prototype.setBackgroundMessageHandler=function(e){throw b.create("only-available-in-sw")},e.prototype.delete=function(){return Object(c["__awaiter"])(this,void 0,void 0,function(){return Object(c["__generator"])(this,function(e){switch(e.label){case 0:return[4,Promise.all([this.tokenDetailsModel.closeDatabase(),this.vapidDetailsModel.closeDatabase()])];case 1:return e.sent(),[2]}})})},e.prototype.getNotificationPermission_=function(){return Notification.permission},e.prototype.getTokenDetailsModel=function(){return this.tokenDetailsModel},e.prototype.getVapidDetailsModel=function(){return this.vapidDetailsModel},e.prototype.getIidModel=function(){return this.iidModel},e}();function F(e,t,n){if(!n.vapidKey||!y(t.buffer,n.vapidKey.buffer))return!1;var r=e.endpoint===n.endpoint,i=y(e.getKey("auth"),n.auth),o=y(e.getKey("p256dh"),n.p256dh);return r&&i&&o}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L="FCM_MSG",V=function(e){function t(t){var n=e.call(this,t)||this;return n.bgMessageHandler=null,self.addEventListener("push",function(e){n.onPush(e)}),self.addEventListener("pushsubscriptionchange",function(e){n.onSubChange(e)}),self.addEventListener("notificationclick",function(e){n.onNotificationClick(e)}),n}return Object(c["__extends"])(t,e),t.prototype.onPush=function(e){e.waitUntil(this.onPush_(e))},t.prototype.onSubChange=function(e){e.waitUntil(this.onSubChange_(e))},t.prototype.onNotificationClick=function(e){e.waitUntil(this.onNotificationClick_(e))},t.prototype.onPush_=function(e){return Object(c["__awaiter"])(this,void 0,void 0,function(){var t,n,r,i,o,s,a;return Object(c["__generator"])(this,function(c){switch(c.label){case 0:if(!e.data)return[2];try{t=e.data.json()}catch(u){return[2]}return[4,this.hasVisibleClients_()];case 1:return n=c.sent(),n?[2,this.sendMessageToWindowClients_(t)]:(r=this.getNotificationData_(t),r?(i=r.title||"",[4,this.getSWRegistration_()]):[3,3]);case 2:return o=c.sent(),s=r.actions,a=Notification.maxActions,s&&a&&s.length>a&&console.warn("This browser only supports "+a+" actions.The remaining actions will not be displayed."),[2,o.showNotification(i,r)];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:return c.sent(),[2];case 5:return[2]}})})},t.prototype.onSubChange_=function(e){return Object(c["__awaiter"])(this,void 0,void 0,function(){var e,t,n,r,i;return Object(c["__generator"])(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this.getSWRegistration_()];case 1:return e=o.sent(),[3,3];case 2:throw t=o.sent(),b.create("unable-to-resubscribe",{errorInfo:t});case 3:return o.trys.push([3,5,,8]),[4,e.pushManager.getSubscription()];case 4:return o.sent(),[3,8];case 5:return n=o.sent(),r=this.getTokenDetailsModel(),[4,r.getTokenDetailsFromSWScope(e.scope)];case 6:if(i=o.sent(),!i)throw n;return[4,this.deleteToken(i.fcmToken)];case 7:throw o.sent(),n;case 8:return[2]}})})},t.prototype.onNotificationClick_=function(e){return Object(c["__awaiter"])(this,void 0,void 0,function(){var t,n,r,i;return Object(c["__generator"])(this,function(s){switch(s.label){case 0:return e.notification&&e.notification.data&&e.notification.data[L]?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),t=e.notification.data[L],t.notification?(n=t.fcmOptions&&t.fcmOptions.link||t.notification.click_action,n?[4,this.getWindowClient_(n)]:[2]):[2]):[2];case 1:return r=s.sent(),r?[3,3]:[4,self.clients.openWindow(n)];case 2:return r=s.sent(),[3,5];case 3:return[4,r.focus()];case 4:r=s.sent(),s.label=5;case 5:return r?(delete t.notification,delete t.fcmOptions,i=W(o.NOTIFICATION_CLICKED,t),[2,this.attemptToMessageClient_(r,i)]):[2]}})})},t.prototype.getNotificationData_=function(e){var t;if(e&&"object"===typeof e.notification){var n=Object(c["__assign"])({},e.notification);return n.data=Object(c["__assign"])({},e.notification.data,(t={},t[L]=e,t)),n}},t.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!==typeof e)throw b.create("bg-handler-function-expected");this.bgMessageHandler=e},t.prototype.getWindowClient_=function(e){return Object(c["__awaiter"])(this,void 0,void 0,function(){var t,n,r,i,o;return Object(c["__generator"])(this,function(s){switch(s.label){case 0:return t=new URL(e,self.location.href).href,[4,x()];case 1:for(n=s.sent(),r=null,i=0;i<n.length;i++)if(o=new URL(n[i].url,self.location.href).href,o===t){r=n[i];break}return[2,r]}})})},t.prototype.attemptToMessageClient_=function(e,t){return Object(c["__awaiter"])(this,void 0,void 0,function(){return Object(c["__generator"])(this,function(n){if(!e)throw b.create("no-window-client-to-msg");return e.postMessage(t),[2]})})},t.prototype.hasVisibleClients_=function(){return Object(c["__awaiter"])(this,void 0,void 0,function(){var e;return Object(c["__generator"])(this,function(t){switch(t.label){case 0:return[4,x()];case 1:return e=t.sent(),[2,e.some(function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")})]}})})},t.prototype.sendMessageToWindowClients_=function(e){return Object(c["__awaiter"])(this,void 0,void 0,function(){var t,n,r=this;return Object(c["__generator"])(this,function(i){switch(i.label){case 0:return[4,x()];case 1:return t=i.sent(),n=W(o.PUSH_MSG_RECEIVED,e),[4,Promise.all(t.map(function(e){return r.attemptToMessageClient_(e,n)}))];case 2:return i.sent(),[2]}})})},t.prototype.getSWRegistration_=function(){return Object(c["__awaiter"])(this,void 0,void 0,function(){return Object(c["__generator"])(this,function(e){return[2,self.registration]})})},t.prototype.getPublicVapidKey_=function(){return Object(c["__awaiter"])(this,void 0,void 0,function(){var e,t;return Object(c["__generator"])(this,function(n){switch(n.label){case 0:return[4,this.getSWRegistration_()];case 1:if(e=n.sent(),!e)throw b.create("sw-registration-expected");return[4,this.getVapidDetailsModel().getVapidFromSWScope(e.scope)];case 2:return t=n.sent(),null==t?[2,g]:[2,t]}})})},t}(R);function x(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function W(e,t){var n;return n={},n[i.TYPE_OF_MSG]=e,n[i.DATA]=t,n
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var B="/firebase-messaging-sw.js",K="/firebase-cloud-messaging-push-scope",U=function(e){function t(t){var n=e.call(this,t)||this;return n.registrationToUse=null,n.publicVapidKeyToUse=null,n.manifestCheckPromise=null,n.messageObserver=null,n.tokenRefreshObserver=null,n.onMessageInternal=Object(f["createSubscribe"])(function(e){n.messageObserver=e}),n.onTokenRefreshInternal=Object(f["createSubscribe"])(function(e){n.tokenRefreshObserver=e}),n.setupSWMessageListener_(),n}return Object(c["__extends"])(t,e),t.prototype.getToken=function(){return Object(c["__awaiter"])(this,void 0,void 0,function(){return Object(c["__generator"])(this,function(t){switch(t.label){case 0:return this.manifestCheckPromise||(this.manifestCheckPromise=H()),[4,this.manifestCheckPromise];case 1:return t.sent(),[2,e.prototype.getToken.call(this)]}})})},t.prototype.requestPermission=function(){return Object(c["__awaiter"])(this,void 0,void 0,function(){var e;return Object(c["__generator"])(this,function(t){switch(t.label){case 0:return"granted"===this.getNotificationPermission_()?[2]:[4,Notification.requestPermission()];case 1:if(e=t.sent(),"granted"===e)return[2];throw"denied"===e?b.create("permission-blocked"):b.create("permission-default")}})})},t.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw b.create("sw-registration-expected");if(null!=this.registrationToUse)throw b.create("use-sw-before-get-token");this.registrationToUse=e},t.prototype.usePublicVapidKey=function(e){if("string"!==typeof e)throw b.create("invalid-public-vapid-key");if(null!=this.publicVapidKeyToUse)throw b.create("use-public-key-before-get-token");var t=k(e);if(65!==t.length)throw b.create("public-vapid-key-decryption-failed");this.publicVapidKeyToUse=t},t.prototype.onMessage=function(e,t,n){return"function"===typeof e?this.onMessageInternal(e,t,n):this.onMessageInternal(e)},t.prototype.onTokenRefresh=function(e,t,n){return"function"===typeof e?this.onTokenRefreshInternal(e,t,n):this.onTokenRefreshInternal(e)},t.prototype.waitForRegistrationToActivate_=function(e){var t=e.installing||e.waiting||e.active;return new Promise(function(n,r){if(t)if("activated"!==t.state)if("redundant"!==t.state){var i=function(){if("activated"===t.state)n(e);else{if("redundant"!==t.state)return;r(b.create("sw-reg-redundant"))}t.removeEventListener("statechange",i)};t.addEventListener("statechange",i)}else r(b.create("sw-reg-redundant"));else n(e);else r(b.create("no-sw-in-reg"))})},t.prototype.getSWRegistration_=function(){var e=this;return this.registrationToUse?this.waitForRegistrationToActivate_(this.registrationToUse):(this.registrationToUse=null,navigator.serviceWorker.register(B,{scope:K}).catch(function(e){throw b.create("failed-serviceworker-registration",{browserErrorMessage:e.message})}).then(function(t){return e.waitForRegistrationToActivate_(t).then(function(){return e.registrationToUse=t,t.update(),t})}))},t.prototype.getPublicVapidKey_=function(){return Object(c["__awaiter"])(this,void 0,void 0,function(){return Object(c["__generator"])(this,function(e){return this.publicVapidKeyToUse?[2,this.publicVapidKeyToUse]:[2,g]})})},t.prototype.setupSWMessageListener_=function(){var e=this;navigator.serviceWorker.addEventListener("message",function(t){if(t.data&&t.data[i.TYPE_OF_MSG]){var n=t.data;switch(n[i.TYPE_OF_MSG]){case o.PUSH_MSG_RECEIVED:case o.NOTIFICATION_CLICKED:var r=n[i.DATA];e.messageObserver&&e.messageObserver.next(r);break;default:break}}},!1)},t}(R);function H(){return Object(c["__awaiter"])(this,void 0,void 0,function(){var e,t,n;return Object(c["__generator"])(this,function(r){switch(r.label){case 0:if(e=document.querySelector('link[rel="manifest"]'),!e)return[2];r.label=1;case 1:return r.trys.push([1,4,,5]),[4,fetch(e.href)];case 2:return n=r.sent(),[4,n.json()];case 3:return t=r.sent(),[3,5];case 4:return r.sent(),[2];case 5:if(!t||!t.gcm_sender_id)return[2];if("103953800507"!==t.gcm_sender_id)throw b.create("incorrect-gcm-sender-id");return[2]}})})}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){var t="messaging",n=function(e){if(!G())throw b.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new V(e):new U(e)},r={isSupported:G};e.INTERNAL.registerService(t,n,r)}function G(){return self&&"ServiceWorkerGlobalScope"in self?$():q()}function q(){return navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function $(){return"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */z(d.a);var Y=n("2b0e"),J=n("b99e");class Z{constructor(){this.onMessage=null,this.token=null,this.observable=Y["default"].observable({permission:null,isEnabled:null});try{this.app=h["initializeApp"](JSON.parse('{"apiKey": "AIzaSyCZfCfLhMI2N1PPhCOE27XajZOgzI8mY2Y", "authDomain": "yogipeople-prod.firebaseapp.com", "databaseURL": "https://yogipeople-prod.firebaseio.com", "projectId": "yogipeople-prod", "storageBucket": "yogipeople-prod.appspot.com", "messagingSenderId": "742052740316", "appId": "1:742052740316:web:73c7a0a545d0552b"}')),this.messaging=h["messaging"](),this.initializeMessaging(),"Notification"in window&&(this.observable.permission=Notification.permission,this.checkState().then(e=>this.observable.isEnabled=e).catch(e=>{throw this.observable.isEnabled=!1,e}))}catch(e){setTimeout(()=>{throw e},100)}}get isSupported(){return null!==this.observable.permission}get isGranted(){return"granted"===this.observable.permission}get isDenied(){return"denied"===this.observable.permission}get isReady(){return null!==this.observable.isEnabled}get isEnabled(){return null!==this.observable.isEnabled&&this.observable.isEnabled}set isEnabled(e){e?this.enableNotifications():this.disableNotifications()}requestPermission(){return c["__awaiter"](this,void 0,void 0,function*(){if(!this.isSupported)throw new Error("Notifications are not supported");return"granted"===Notification.permission||(this.observable.permission=yield Notification.requestPermission(),this.isGranted)})}enableNotifications(){return c["__awaiter"](this,void 0,void 0,function*(){if(!this.isReady)throw new Error("Not ready to change notifications");if(!this.isGranted)throw new Error("Permission for notifications have not been granted");if(!this.isEnabled)return null===this.token&&(this.token=yield this.messaging.getToken()),this.observable.isEnabled=!0,J["a"].client.call.account.pushNotificationDevicesPost(this.token).response.then(()=>{},e=>{throw this.observable.isEnabled=!1,e})})}disableNotifications(){return c["__awaiter"](this,void 0,void 0,function*(){if(!this.isReady)throw new Error("Not ready to change notifications");return null===this.token&&(this.token=yield this.messaging.getToken()),this.messaging.deleteToken(this.token),this.observable.isEnabled=!1,J["a"].client.call.account.pushNotificationDevicesDeleteByToken(this.token).response.then(()=>{},e=>{throw this.observable.isEnabled=!0,e})})}disableNotificationsOnAllDevices(){return c["__awaiter"](this,void 0,void 0,function*(){yield J["a"].client.call.account.pushNotificationDevicesDelete()})}demonstrate(e=0){return new Promise(t=>{setTimeout(()=>J["a"].client.call.account.pushNotificationDevicesDemonstrate().response.then(()=>t()),1e3*e)})}initializeMessaging(){this.messaging.usePublicVapidKey("BCPAm4pF09zdpHICIcGf2EATfmS8SehsG0Nk5bAbKD2rJJAbv8nO2vWZPEGG1VhHUNpmLsApSTwhuhDIAi8ofTE"),this.messaging.onMessage(e=>{if(null===this.onMessage)throw new Error("Push notification received, but onMessage is not set!");this.onMessage(e)}),this.messaging.onTokenRefresh(()=>{this.messaging.getToken().then(e=>{this.isEnabled&&(null!==this.token&&J["a"].client.call.account.pushNotificationDevicesDeleteByToken(this.token),J["a"].client.call.account.pushNotificationDevicesPost(e)),this.token=e})})}checkState(){return c["__awaiter"](this,void 0,void 0,function*(){if(this.token=yield this.messaging.getToken(),null===this.token)return!1;try{return yield J["a"].client.call.account.pushNotificationDevicesGetByToken(this.token).response,!0}catch(e){return this.messaging.deleteToken(this.token),this.token=null,!1}})}}var X=new Z,Q=n("59ef");let ee=class extends u["c"]{constructor(){super(...arguments),this.message=null}created(){X.onMessage=(e=>{this.message=e.notification.body})}mounted(){this.enableNotifications()}enableNotifications(){X.isSupported&&X.isReady&&!X.isEnabled&&X.requestPermission().then(e=>{e&&X.enableNotifications()})}};ee=c["__decorate"]([Object(u["a"])({components:{NotificationMessage:Q["default"]}})],ee);var te=ee,ne=te,re=n("2877"),ie=Object(re["a"])(ne,s,a,!1,null,null,null);t["default"]=ie.exports},abfd:function(e,t,n){"use strict";n.r(t),n.d(t,"LogLevel",function(){return r}),n.d(t,"Logger",function(){return a}),n.d(t,"setLogLevel",function(){return c});
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,i=[];(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));var o=r.INFO,s=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(t<e.logLevel)){var o=(new Date).toISOString();switch(t){case r.DEBUG:console.log.apply(console,["["+o+"]  "+e.name+":"].concat(n));break;case r.VERBOSE:console.log.apply(console,["["+o+"]  "+e.name+":"].concat(n));break;case r.INFO:console.info.apply(console,["["+o+"]  "+e.name+":"].concat(n));break;case r.WARN:console.warn.apply(console,["["+o+"]  "+e.name+":"].concat(n));break;case r.ERROR:console.error.apply(console,["["+o+"]  "+e.name+":"].concat(n));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}}},a=function(){function e(e){this.name=e,this._logLevel=o,this._logHandler=s,i.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in r))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!0,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,r.DEBUG].concat(e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,r.VERBOSE].concat(e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,r.INFO].concat(e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,r.WARN].concat(e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,r.ERROR].concat(e))},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(e){i.forEach(function(t){t.logLevel=e})}},c23d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n("9ab4"),o=n("cd51"),s=n("abfd"),a=(r={},r["no-app"]="No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",r["bad-app-name"]="Illegal App name: '{$name}",r["duplicate-app"]="Firebase App named '{$name}' already exists",r["app-deleted"]="Firebase App named '{$name}' already deleted",r["duplicate-service"]="Firebase service named '{$name}' already registered",r["invalid-app-argument"]="firebase.{$name}() takes either no argument or a Firebase App instance.",r),c=new o.ErrorFactory("app","Firebase",a);function u(e,t){throw c.create(e,t)}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h="[DEFAULT]",l=[],d=function(){function e(e,t,n){this.firebase_=n,this.isDeleted_=!1,this.services_={},this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=o.deepCopy(e),this.INTERNAL={getUid:function(){return null},getToken:function(){return Promise.resolve(null)},addAuthTokenListener:function(e){l.push(e),setTimeout(function(){return e(null)},0)},removeAuthTokenListener:function(e){l=l.filter(function(t){return t!==e})}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise(function(t){e.checkDestroyed_(),t()}).then(function(){e.firebase_.INTERNAL.removeApp(e.name_);for(var t=[],n=0,r=Object.keys(e.services_);n<r.length;n++)for(var i=r[n],o=0,s=Object.keys(e.services_[i]);o<s.length;o++){var a=s[o];t.push(e.services_[i][a])}return Promise.all(t.map(function(e){return e.INTERNAL.delete()}))}).then(function(){e.isDeleted_=!0,e.services_={}})},e.prototype._getService=function(e,t){if(void 0===t&&(t=h),this.checkDestroyed_(),this.services_[e]||(this.services_[e]={}),!this.services_[e][t]){var n=t!==h?t:void 0,r=this.firebase_.INTERNAL.factories[e](this,this.extendApp.bind(this),n);this.services_[e][t]=r}return this.services_[e][t]},e.prototype.extendApp=function(e){var t=this;o.deepExtend(this,e),e.INTERNAL&&e.INTERNAL.addAuthTokenListener&&(l.forEach(function(e){t.INTERNAL.addAuthTokenListener(e)}),l=[])},e.prototype.checkDestroyed_=function(){this.isDeleted_&&u("app-deleted",{name:this.name_})},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function p(e){var t={},n={},r={},i={__esModule:!0,initializeApp:c,app:a,apps:null,SDK_VERSION:"6.0.2",INTERNAL:{registerService:d,removeApp:s,factories:n,useAsService:b}};function s(e){var n=t[e];p(n,"delete"),delete t[e]}function a(e){return e=e||h,f(t,e)||u("no-app",{name:e}),t[e]}function c(n,r){if(void 0===r&&(r={}),"object"!==typeof r||null===r){var o=r;r={name:o}}var s=r;void 0===s.name&&(s.name=h);var a=s.name;"string"===typeof a&&a||u("bad-app-name",{name:String(a)}),f(t,a)&&u("duplicate-app",{name:a});var c=new e(n,s,i);return t[a]=c,p(c,"create"),c}function l(){return Object.keys(t).map(function(e){return t[e]})}function d(t,s,c,h,d){function f(e){return void 0===e&&(e=a()),"function"!==typeof e[t]&&u("invalid-app-argument",{name:t}),e[t]()}return void 0===d&&(d=!1),n[t]&&u("duplicate-service",{name:t}),n[t]=s,h&&(r[t]=h,l().forEach(function(e){h("create",e)})),void 0!==c&&o.deepExtend(f,c),i[t]=f,e.prototype[t]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=this._getService.bind(this,t);return r.apply(this,d?e:[])},f}function p(e,t){for(var i=0,o=Object.keys(n);i<o.length;i++){var s=o[i],a=b(e,s);if(null===a)return;r[a]&&r[a](t,e)}}function b(e,t){if("serverAuth"===t)return null;var n=t;return n}return o.patchProperty(i,"default",i),Object.defineProperty(i,"apps",{get:l}),o.patchProperty(a,"App",e),i}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){var e=p(d);function t(t){o.deepExtend(e,t)}return e.INTERNAL=i.__assign({},e.INTERNAL,{createFirebaseNamespace:b,extendNamespace:t,createSubscribe:o.createSubscribe,ErrorFactory:o.ErrorFactory,deepExtend:o.deepExtend}),e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */d.prototype.name&&d.prototype.options||d.prototype.delete||console.log("dc");var g=new s.Logger("@firebase/app");if(o.isBrowser()&&"firebase"in self){g.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var v=self.firebase.SDK_VERSION;v&&v.indexOf("LITE")>=0&&g.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var y=b(),_=y.initializeApp;y.initializeApp=function(){return o.isNode()&&g.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and set "module"\n      to false and "main" to true:\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),_.apply(void 0,arguments)};var m=y;t.default=m,t.firebase=m},cd51:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n("9ab4"),i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},o=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},a=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},c=function(e){var t=[],n=0,r=0;while(n<e.length){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){o=e[n++];var s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],s=i+1<e.length,a=s?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,h=o>>2,l=(3&o)<<4|a>>4,d=(15&a)<<2|u>>6,f=63&u;c||(f=64,s||(d=64)),r.push(n[h],n[l],n[d],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):c(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;var c=i<e.length,u=c?n[e.charAt(i)]:64;++i;var h=i<e.length,l=h?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==u||null==l)throw Error();var d=o<<2|a>>4;if(r.push(d),64!=u){var f=a<<4&240|u>>2;if(r.push(f),64!=l){var p=u<<6&192|l;r.push(p)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},h=function(e){var t=a(e);return u.encodeByteArray(t,!0)},l=function(e){try{return u.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:var n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=f(e[r],t[r]));return e}function p(e,t,n){e[t]=n}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b=function(){function e(){var e=this;this.promise=new Promise(function(t,n){e.resolve=t,e.reject=n})}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"===typeof e&&(t.promise.catch(function(){}),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function y(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function _(){return"undefined"!==typeof window}function m(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k="FirebaseError",S=function(e){function t(n,r){var i=e.call(this,r)||this;return i.code=n,i.name=k,Object.setPrototypeOf(i,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(i,T.prototype.create),i}return r.__extends(t,e),t}(Error),T=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e,t){void 0===t&&(t={});for(var n=this.service+"/"+e,r=this.errors[e],i=r?O(r,t):"Error",o=this.serviceName+": "+i+" ("+n+").",s=new S(n,o),a=0,c=Object.keys(t);a<c.length;a++){var u=c[a];"_"!==u.slice(-1)&&(u in s&&console.warn('Overwriting FirebaseError base field "'+u+'" can cause unexpected behavior.'),s[u]=t[u])}return s},e}();function O(e,t){return e.replace(E,function(e,n){var r=t[n];return null!=r?r.toString():"<"+n+"?>"})}var E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){return JSON.parse(e)}function j(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A=function(e){var t={},n={},r={},i="";try{var o=e.split(".");t=N(l(o[0])||""),n=N(l(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:r,signature:i}},D=function(e){var t,n,r=A(e).claims,i=Math.floor((new Date).getTime()/1e3);return"object"===typeof r&&(r.hasOwnProperty("nbf")?t=r["nbf"]:r.hasOwnProperty("iat")&&(t=r["iat"]),n=r.hasOwnProperty("exp")?r["exp"]:t+86400),i&&t&&n&&i>=t&&i<=n},P=function(e){var t=A(e).claims;return"object"===typeof t&&t.hasOwnProperty("iat")?t["iat"]:null},C=function(e){var t=A(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},M=function(e){var t=A(e).claims;return"object"===typeof t&&!0===t["admin"]},I=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},R=function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]},F=function(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])},L=function(e,t){return F(t,function(t,n){e[t]=n}),e},V=function(e){return L({},e)},x=function(e){return"object"===typeof e&&null!==e},W=function(e){for(var t in e)return!1;return!0},B=function(e){var t=0;for(var n in e)t++;return t},K=function(e,t,n){var r={};for(var i in e)r[i]=t.call(n,e[i],i,e);return r},U=function(e,t,n){for(var r in e)if(t.call(n,e[r],r,e))return r},H=function(e,t,n){var r=U(e,t,n);return r&&e[r]},z=function(e){for(var t in e)return t},G=function(e){var t=[],n=0;for(var r in e)t[n++]=e[r];return t},q=function(e,t){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&!t(n,e[n]))return!1;return!0},$=function(e){var t=[];return F(e,function(e,n){Array.isArray(n)?n.forEach(function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))}),t.length?"&"+t.join("&"):""},Y=function(e){var t={},n=e.replace(/^\?/,"").split("&");return n.forEach(function(e){if(e){var n=e.split("=");t[n[0]]=n[1]}}),t},J=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"===typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,s,a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],h=this.chain_[3],l=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=h^c&(u^h),s=1518500249):(o=c^u^h,s=1859775393):r<60?(o=c&u|h&(c|u),s=2400959708):(o=c^u^h,s=3395469782);i=(a<<5|a>>>27)+o+l+s+n[r]&4294967295;l=h,h=u,u=4294967295&(c<<30|c>>>2),c=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;while(r<t){if(0==o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o==this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o==this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e},e}();function Z(e,t){var n=new X(e,t);return n.subscribe.bind(n)}var X=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(n)}).catch(function(e){n.error(e)})}return e.prototype.next=function(e){this.forEachObserver(function(t){t.next(e)})},e.prototype.error=function(e){this.forEachObserver(function(t){t.error(e)}),this.close(e)},e.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=ee(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=te),void 0===r.error&&(r.error=te),void 0===r.complete&&(r.complete=te);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}}),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then(function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}})},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},e}();function Q(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];Promise.resolve(!0).then(function(){e.apply(void 0,n)}).catch(function(e){t&&t(e)})}}function ee(e,t){if("object"!==typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"===typeof e[i])return!0}return!1}function te(){}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne=function(e,t,n,r){var i;if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i){var o=e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".";throw new Error(o)}};function re(e,t,n){var r="";switch(t){case 1:r=n?"first":"First";break;case 2:r=n?"second":"Second";break;case 3:r=n?"third":"Third";break;case 4:r=n?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var i=e+" failed: ";return i+=r+" argument ",i}function ie(e,t,n,r){if((!r||n)&&"string"!==typeof n)throw new Error(re(e,t,r)+"must be a valid firebase namespace.")}function oe(e,t,n,r){if((!r||n)&&"function"!==typeof n)throw new Error(re(e,t,r)+"must be a valid function.")}function se(e,t,n,r){if((!r||n)&&("object"!==typeof n||null===n))throw new Error(re(e,t,r)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var s=i-55296;r++,o(r<e.length,"Surrogate pair missing trail surrogate.");var a=e.charCodeAt(r)-56320;i=65536+(s<<10)+a}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ce=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t.CONSTANTS=i,t.Deferred=b,t.ErrorFactory=T,t.FirebaseError=S,t.Sha1=J,t.assert=o,t.assertionError=s,t.async=Q,t.base64=u,t.base64Decode=l,t.base64Encode=h,t.clone=V,t.contains=I,t.createSubscribe=Z,t.decode=A,t.deepCopy=d,t.deepExtend=f,t.errorPrefix=re,t.every=q,t.extend=L,t.findKey=U,t.findValue=H,t.forEach=F,t.getAnyKey=z,t.getCount=B,t.getUA=g,t.getValues=G,t.isAdmin=M,t.isBrowser=_,t.isEmpty=W,t.isMobileCordova=v,t.isNode=y,t.isNodeSdk=w,t.isNonNullObject=x,t.isReactNative=m,t.isValidFormat=C,t.isValidTimestamp=D,t.issuedAtTime=P,t.jsonEval=N,t.map=K,t.patchProperty=p,t.querystring=$,t.querystringDecode=Y,t.safeGet=R,t.stringLength=ce,t.stringToByteArray=ae,t.stringify=j,t.validateArgCount=ne,t.validateCallback=oe,t.validateContextObject=se,t.validateNamespace=ie}).call(this,n("c8ba"))},deeb:function(e,t,n){}}]);
//# sourceMappingURL=view-PushNotifications-vue.f4f9fa36.js.map