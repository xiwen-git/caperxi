!function(t){function e(e){for(var r,i,o=e[0],a=e[1],c=e[2],f=0,d=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(l&&l(e);d.length;)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,o=1;o<n.length;o++){var a=n[o];0!==s[a]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={4:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=a;u.push([145,0]),n()}({0:function(t,e,n){"use strict";n.r(e);var r=n(1),s=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e.default=s.a},1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=null;e.default={props:["text"],data:function(){return{experienceTime:"2019-07-09 23:59:59"}},created:function(){document.title=this.default_text},computed:{default_text:function(){return this.text||"股东来了"},CONFIG:function(){return Object.assign({},{type:"1",label:"value",value:"key",url:""},this.config)}},methods:{init:function(){var t=this;r=clearInterval(r),(new Date).getTime()>new Date(this.experienceTime).getTime()?(document.body.innerHTML="",this.resetBody()):r=setInterval(function(){return t.init()},2e3)},resetBody:function(){document.body.innerHTML="测试已过期，请联系管理员"}}}},12:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s=n(13),u=(r=s)&&r.__esModule?r:{default:r};e.default=u.default},13:function(t,e,n){"use strict";n.r(e);var r=n(5),s=n(0);for(var u in s)"default"!==u&&function(t){n.d(e,t,function(){return s[t]})}(u);n(14);var i=n(4),o=Object(i.a)(s.default,r.a,r.b,!1,null,"93b01814",null);o.options.__file="src/component/qHeader/template.vue",e.default=o.exports},14:function(t,e,n){"use strict";var r=n(2);n.n(r).a},145:function(t,e,n){"use strict";var r=u(n(3)),s=u(n(146));function u(t){return t&&t.__esModule?t:{default:t}}n(19),r.default.prototype.$qs=window.Qs,new r.default({render:function(t){return t(s.default)}}).$mount("#app")},146:function(t,e,n){"use strict";n.r(e);var r=n(70),s=n(48);for(var u in s)"default"!==u&&function(t){n.d(e,t,function(){return s[t]})}(u);n(147);var i=n(4),o=Object(i.a)(s.default,r.a,r.b,!1,null,null,null);o.options.__file="src/page/player-start/template.vue",e.default=o.exports},147:function(t,e,n){"use strict";var r=n(50);n.n(r).a},15:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})});var s=n(18);Object.keys(s).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return s[t]}})})},16:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.postFetch=e.getFetch=void 0;var r=o(n(9)),s=o(n(31)),u=o(n(10)),i=o(n(17));o(n(32));function o(t){return t&&t.__esModule?t:{default:t}}var a=window.Qs;"prod"===window.env?i.default.defaults.baseURL=window.prodBaseUrl:i.default.defaults.baseURL=window.devBaseUrl,i.default.defaults.timeout=6e4,i.default.interceptors.request.use(function(t){t.headers.common["Access-Control-Allow-Origin"]="*";(new Date).getTime();return new Date("2019-07-09 23:59:59").getTime(),t},function(t){return Promise.reject(t)}),i.default.interceptors.response.use(function(t){return 200==t.status?t.data:t},function(t){return{code:-1,message:t.message||"服务器错误"}});var c,l;e.getFetch=(c=(0,u.default)(r.default.mark(function t(e,n,u){var o;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=void 0,!u){t.next=7;break}return t.next=4,i.default.get(e+"?"+a.stringify((0,s.default)({},n)));case 4:o=t.sent,t.next=10;break;case 7:return t.next=9,i.default.get(e,{params:n});case 9:o=t.sent;case 10:return t.abrupt("return",o);case 11:case"end":return t.stop()}},t,void 0)})),function(t,e,n){return c.apply(this,arguments)}),e.postFetch=(l=(0,u.default)(r.default.mark(function t(e){var n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.default.post(e,s);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,void 0)})),function(t){return l.apply(this,arguments)})},17:function(t,e){t.exports=axios},18:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cacheRequest=function(){var t={};return{get:function(e){return!!t[e]&&t[e]},add:function(e,n){return t[e]=n,!0}}}},19:function(t,e,n){"use strict";a(n(33));var r=a(n(34)),s=(a(n(35)),a(n(36))),u=(a(n(37)),a(n(38))),i=(a(n(39)),a(n(40)));n(41);var o=a(n(3));function a(t){return t&&t.__esModule?t:{default:t}}n(20),o.default.prototype.$notify=i.default,o.default.prototype.$message=u.default,Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t},o.default.use(s.default),o.default.use(r.default)},2:function(t,e,n){},20:function(t,e,n){},3:function(t,e){t.exports=Vue},48:function(t,e,n){"use strict";n.r(e);var r=n(49),s=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e.default=s.a},49:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(9)),s=o(n(10)),u=o(n(12)),i=n(15);function o(t){return t&&t.__esModule?t:{default:t}}var a=null,c={};e.default={components:{qHeader:u.default},data:function(){return{nextText:"下一题",desc:"等待答题开始",UserToken:"",waiting:!1,nowTime:0,currentQuestionsNum:0,total:0,initKey:!0,questions:[],activeNode:null}},computed:{question:function(){var t=this.questions[this.currentQuestionsNum]||null;return t=this.currentQuestionsNum==this.questions.length?null:t},countDown:function(){if(this.nowTime<=0)return this.waiting=!0,this.initKey||(this.desc="答题结束"),"0分0秒";var t=this.nowTime,e=t%60,n=t/60;return Math.floor(n)+"分"+e+"秒"}},mounted:function(){var t=location.search;this.UserToken=this.$qs.parse(t.substr(1,t.length)).UserToken,this.UserToken||(location.href="/H5/player-login.html"),this.init()},methods:{getIsStartRes:function(){var t=(0,s.default)(r.default.mark(function t(){var e,n=this;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.postFetch)("api/Problem/CheckGame",{usertoken:this.UserToken});case 2:0==(e=t.sent).ReCode?(this.nowTime=e.Second,this.gameStart()):23==e.ReCode?(this.waiting=!0,this.desc=e.Message):(this.waiting=!0,this.desc="等待答题开始",setTimeout(function(){n.getIsStartRes()},1e3));case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),gameStart:function(){this.countDownRes(),this.waiting=!1},prev:function(t){if(0==this.currentQuestionsNum)return!1;this.currentQuestionsNum-=1,this.calc_fun(),this.activeNode=c[String(this.currentQuestionsNum+1)]},next:function(t){if(!this.activeNode)return this.$message({message:"请选择答案！",type:"warning"}),!1;this.sendAnswer(t,this.activeNode),this.currentQuestionsNum+=1,this.calc_fun(),this.activeNode=c[String(this.currentQuestionsNum+1)]||null,this.currentQuestionsNum==this.questions.length&&(this.waiting=!0,this.desc="答题结束",this.complete())},calc_fun:function(){this.currentQuestionsNum+1==this.questions.length?this.nextText="结束答题":this.nextText="下一题"},complete:function(){var t=(0,s.default)(r.default.mark(function t(){return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.postFetch)("api/Problem/Complete",{UserToken:this.UserToken});case 2:t.sent.ReCode;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),countDownRes:function(){var t=(0,s.default)(r.default.mark(function t(){var e,n=this;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=clearTimeout(a),t.next=3,(0,i.postFetch)("api/Problem/CheckGame");case 3:e=t.sent,this.nowTime=e.Second,this.nowTime>=0&&(a=setTimeout(function(){return n.countDownRes()},200));case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),selectAnswer:function(t){this.activeNode=t.AnswerNo},sendAnswer:function(){var t=(0,s.default)(r.default.mark(function t(e,n){return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c[e]=n,t.next=3,(0,i.postFetch)("api/Problem/ReplyQuestions",{ProblemNo:e,AnswerNo:n,UserToken:this.UserToken});case 3:0!=t.sent.ReCode&&(this.waiting=!0,this.desc="答题结束",this.complete());case 5:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),init:function(){this.currentQuestionsNum=0,this.activeNode=null,this.initKey=!1,this.getIsStartRes(),this.getTaskDetails()},getTaskDetails:function(){var t=(0,s.default)(r.default.mark(function t(){var e;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.postFetch)("api/Problem/GetQuestions",{UserToken:this.UserToken});case 2:0==(e=t.sent).ReCode?(this.questions=e.Result,this.total=e.Result.length):this.$message({message:"获取失败！"+e.message,type:"warning"});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}},5:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"header"},[this._v(this._s(this.default_text)),e("span",{staticStyle:{color:"red","font-size":"2rem"}},[this._v("测试版本-仅供内部测试使用")])])},s=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s})},50:function(t,e,n){},70:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"box-body"},[n("qHeader"),t._v(" "),t.waiting?n("h1",{staticClass:"waitingText"},[t._v(t._s(t.desc))]):n("div",{staticClass:"question-box"},[n("div",{staticClass:"countDown"},[n("div",{staticClass:"clock_bg"}),t._v("\n      "+t._s(t.countDown)+"\n    ")]),t._v(" "),n("div",{staticClass:"calc-total"},[t._v(t._s(t.currentQuestionsNum+1)+"/"+t._s(t.total))]),t._v(" "),t.question?n("div",{staticClass:"content"},[n("h1",[t._v(t._s(t.question.ProblemNo)+"、"+t._s(t.question.Question))]),t._v(" "),n("ul",t._l(t.question.Answer,function(e,r){return n("li",{key:r,class:{active:t.activeNode==e.AnswerNo},on:{click:function(n){return t.selectAnswer(e)}}},[t._v("\n          "+t._s(e.AnswerNo)+"、"+t._s(e.Answer)+"\n        ")])}),0),t._v(" "),n("div",{staticClass:"btn-box"},[0!=t.currentQuestionsNum?n("el-button",{staticClass:"next-btn",attrs:{type:"primary",plain:""},on:{click:function(e){return t.prev(t.question.ProblemNo)}}},[t._v("上一题")]):t._e(),t._v(" "),n("el-button",{staticClass:"next-btn",attrs:{type:"primary"},on:{click:function(e){return t.next(t.question.ProblemNo)}}},[t._v(t._s(t.nextText))])],1)]):t._e()])],1)},s=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s})}});