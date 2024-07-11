(function(){"use strict";var e={5211:function(e,a,n){var l=n(5130),t=n(6768);const s=(0,t.Lk)("div",null,".",-1);function o(e,a,n,l,o,u){const r=(0,t.g2)("NavBar"),i=(0,t.g2)("SideBar"),c=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(r,{onToggleSidebar:o.store.toggleSidebar},null,8,["onToggleSidebar"]),(0,t.bF)(i,{isSidebarOpen:o.store.isSidebarOpen,onCloseSidebar:o.store.closeSidebar},null,8,["isSidebarOpen","onCloseSidebar"]),s,(0,t.bF)(c)],64)}var u=n(4232),r=n(144);const i=(0,r.Kh)({isAuthenticated:!0,userRole:"admin",isSidebarOpen:!1});function c(e){i.isAuthenticated=!0,i.userRole=e}function d(){i.isAuthenticated=!1,i.userRole="",i.isSidebarOpen=!1}function p(){i.isSidebarOpen=!i.isSidebarOpen}function v(){i.isSidebarOpen=!1}const m=e=>((0,t.Qi)("data-v-b9206c36"),e=e(),(0,t.jt)(),e),b=m((()=>(0,t.Lk)("li",null,"Home",-1))),k=m((()=>(0,t.Lk)("li",null,"Homework",-1))),h=m((()=>(0,t.Lk)("li",null,"Dashboard",-1))),f=m((()=>(0,t.Lk)("li",null,"About",-1))),g=m((()=>(0,t.Lk)("li",null,"SignUp",-1))),y=m((()=>(0,t.Lk)("li",null,"LogIn",-1)));var L={__name:"SideBar",setup(e){const a=()=>{v()};return(e,n)=>{const l=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",{class:(0,u.C4)(["container noselect",{"sidebar-open":(0,r.R1)(i).isSidebarOpen}])},[(0,t.Lk)("ul",{onClick:a},[(0,t.bF)(l,{to:"/"},{default:(0,t.k6)((()=>[b])),_:1}),k,h,(0,t.bF)(l,{to:"/about"},{default:(0,t.k6)((()=>[f])),_:1}),(0,t.bF)(l,{to:"/signup"},{default:(0,t.k6)((()=>[g])),_:1}),(0,t.bF)(l,{to:"/login"},{default:(0,t.k6)((()=>[y])),_:1})])],2)}}},C=n(1241);const _=(0,C.A)(L,[["__scopeId","data-v-b9206c36"]]);var E=_;const A=e=>((0,t.Qi)("data-v-c030ecb8"),e=e(),(0,t.jt)(),e),w={class:"container noselect"},S={class:"lefters"},R=A((()=>(0,t.Lk)("li",{class:"nblog"},"LogIn",-1))),X=A((()=>(0,t.Lk)("li",{class:"nblog"},"SignUp",-1))),x={key:1,class:"nblog"};var I={__name:"NavBar",setup(e){const a=()=>{p()};return(e,n)=>{const l=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",w,[(0,t.Lk)("ul",null,[(0,t.Lk)("div",S,[(0,t.Lk)("button",{class:"button-5",onClick:a},"≡"),(0,t.bF)(l,{to:"/"},{default:(0,t.k6)((()=>[(0,t.Lk)("li",{class:"nbMain",onClick:n[0]||(n[0]=(...e)=>(0,r.R1)(v)&&(0,r.R1)(v)(...e))},"Happiness Connect")])),_:1})]),(0,t.Lk)("div",{class:"logers",onClick:n[1]||(n[1]=(...e)=>(0,r.R1)(v)&&(0,r.R1)(v)(...e))},[(0,r.R1)(i).isAuthenticated?((0,t.uX)(),(0,t.CE)("li",x,(0,u.v_)((0,r.R1)(i).userRole),1)):((0,t.uX)(),(0,t.CE)(t.FK,{key:0},[(0,t.bF)(l,{to:"/login"},{default:(0,t.k6)((()=>[R])),_:1}),(0,t.bF)(l,{to:"/signup"},{default:(0,t.k6)((()=>[X])),_:1})],64))])])])}}};const O=(0,C.A)(I,[["__scopeId","data-v-c030ecb8"]]);var F=O,K={name:"App",components:{SideBar:E,NavBar:F},data(){return{store:i}}};const H=(0,C.A)(K,[["render",o]]);var U=H,j=n(1387),J=n.p+"img/AOLlogo.25bbbc13.jpg";const Q=(0,t.Lk)("div",{style:{"margin-top":"100px"}},null,-1),T={class:"home"},B=(0,t.Lk)("img",{alt:"Art Of Living Logo",style:{width:"300px"},src:J},null,-1);function P(e,a,n,l,s,o){const u=(0,t.g2)("HelloWorld");return(0,t.uX)(),(0,t.CE)(t.FK,null,[Q,(0,t.Lk)("div",T,[B,(0,t.bF)(u,{msg:"Welcome to Happiness Connect"})])],64)}const V={class:"hello"};function W(e,a,n,l,s,o){return(0,t.uX)(),(0,t.CE)("div",V,[(0,t.Lk)("h1",null,(0,u.v_)(n.msg),1)])}var N={name:"HelloWorld",props:{msg:String}};const D=(0,C.A)(N,[["render",W],["__scopeId","data-v-28b57ee4"]]);var G=D,z={name:"HomeView",components:{HelloWorld:G}};const M=(0,C.A)(z,[["render",P]]);var q=M;const Y={class:"about",style:{"margin-top":"100px"}},Z=(0,t.Lk)("h1",null,"This is an about page",-1),$=[Z];function ee(e,a){return(0,t.uX)(),(0,t.CE)("div",Y,$)}const ae={},ne=(0,C.A)(ae,[["render",ee]]);var le=ne,te=(n(4114),n(6400)),se=n(5860),oe=n(7617);const ue={apiKey:"AIzaSyCBgfPI8zkMfB2ek-RWWwHPUI0eOmEPJ94",authDomain:"happiness-backend-9a369.firebaseapp.com",projectId:"happiness-backend-9a369",storageBucket:"happiness-backend-9a369.appspot.com",messagingSenderId:"763781917858",appId:"1:763781917858:web:f35f27e8ded815ce1ebbfb"},re=(0,te.Wp)(ue),ie=(0,se.xI)(re),ce=(0,oe.aU)(re),de=e=>((0,t.Qi)("data-v-00685f6c"),e=e(),(0,t.jt)(),e),pe={class:"container"},ve=de((()=>(0,t.Lk)("h3",{class:"signup"},"Sign Up",-1))),me={class:"form-group"},be={key:0},ke={class:"checkbox-wrapper-64"},he={class:"switch"},fe=de((()=>(0,t.Lk)("span",{class:"slider"},null,-1))),ge=de((()=>(0,t.Lk)("label",{class:"checkL",style:{"font-size":"medium"}},"Are you an AOL Teacher ?",-1))),ye=["disabled"],Le={key:0},Ce={key:1},_e={key:1,class:"error-message"};var Ee={__name:"Signup",setup(e){const a=(0,r.KR)(!1),n=(0,r.KR)(""),s=(0,r.KR)(""),o=(0,r.KR)(""),i=(0,r.KR)(""),c=(0,r.KR)(""),d=(0,r.KR)(!1),p=(0,j.rd)(),v=async()=>{c.value="",d.value=!0;try{const e=await(0,se.eJ)(ie,s.value,o.value);console.log("User signed up:",e.user);const l=e.user;a.value?await(0,oe.gS)((0,oe.rJ)(ce,"teachers"),{uid:l.uid,name:n.value,email:s.value,teacherAccess:!1}):await(0,oe.gS)((0,oe.rJ)(ce,"users"),{uid:l.uid,name:n.value,email:s.value,courseId:[i.value],volunteerAccess:!1}),p.push("/login")}catch(e){c.value=e.message}finally{d.value=!1}};return(e,r)=>((0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("div",pe,[ve,(0,t.Lk)("div",me,[(0,t.bo)((0,t.Lk)("input",{type:"text",class:"form-control",id:"name","aria-describedby":"emailHelp",placeholder:"Full Name","onUpdate:modelValue":r[0]||(r[0]=e=>n.value=e)},null,512),[[l.Jo,n.value]]),(0,t.bo)((0,t.Lk)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email","onUpdate:modelValue":r[1]||(r[1]=e=>s.value=e)},null,512),[[l.Jo,s.value]]),(0,t.bo)((0,t.Lk)("input",{type:"password",class:"form-control",id:"password","aria-describedby":"emailHelp",placeholder:"Password","onUpdate:modelValue":r[2]||(r[2]=e=>o.value=e)},null,512),[[l.Jo,o.value]]),a.value?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("div",be,[(0,t.bo)((0,t.Lk)("input",{type:"text",class:"form-control",id:"courseId",placeholder:"CourseID","onUpdate:modelValue":r[3]||(r[3]=e=>i.value=e)},null,512),[[l.Jo,i.value]])])),(0,t.Lk)("div",ke,[(0,t.Lk)("label",he,[(0,t.bo)((0,t.Lk)("input",{type:"checkbox","onUpdate:modelValue":r[4]||(r[4]=e=>a.value=e)},null,512),[[l.lH,a.value]]),fe]),ge]),(0,t.Lk)("button",{type:"button",class:"btn-primary",onClick:v,disabled:d.value},[d.value?((0,t.uX)(),(0,t.CE)("span",Le,"Signing Up...")):((0,t.uX)(),(0,t.CE)("span",Ce,"Sign Up"))],8,ye),c.value?((0,t.uX)(),(0,t.CE)("div",_e,(0,u.v_)(c.value),1)):(0,t.Q3)("",!0)])])]))}};const Ae=(0,C.A)(Ee,[["__scopeId","data-v-00685f6c"]]);var we=Ae;const Se=e=>((0,t.Qi)("data-v-d391c9fa"),e=e(),(0,t.jt)(),e),Re={class:"container"},Xe=Se((()=>(0,t.Lk)("h3",{class:"signup"},"Login",-1))),xe={class:"form-group"},Ie=["disabled"],Oe={key:0},Fe={key:1},Ke={key:0,class:"error-message"};var He={__name:"Login",setup(e){const a=(0,r.KR)(""),n=(0,r.KR)(""),s=(0,r.KR)(""),o=(0,r.KR)(!1),i=(0,j.rd)(),p=async()=>{s.value="",o.value=!0;try{const e=await(0,se.x9)(ie,a.value,n.value),l=e.user,t=(0,oe.H9)(ce,"admins",l.uid),o=await(0,oe.x7)(t);if(o.exists())return c("admin"),void i.push("/admin");const u=(0,oe.H9)(ce,"teachers",l.uid),r=await(0,oe.x7)(u);if(r.exists()&&r.data().teacherAccess)return c("teacher"),void i.push("/teacher");const p=(0,oe.H9)(ce,"users",l.uid),v=await(0,oe.x7)(p);if(v.exists())return c("user"),void i.push("/user");r.exists()&&!r.data().teacherAccess?s.value="Teacher Not Yet Verified":s.value="No valid user role found.",d()}catch(e){s.value=e.message,d()}finally{o.value=!1}};return(e,r)=>((0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("div",Re,[Xe,(0,t.Lk)("div",xe,[(0,t.bo)((0,t.Lk)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email","onUpdate:modelValue":r[0]||(r[0]=e=>a.value=e)},null,512),[[l.Jo,a.value]]),(0,t.bo)((0,t.Lk)("input",{type:"password",class:"form-control",id:"password","aria-describedby":"emailHelp",placeholder:"Password","onUpdate:modelValue":r[1]||(r[1]=e=>n.value=e)},null,512),[[l.Jo,n.value]]),(0,t.Lk)("button",{type:"button",class:"btn-primary",onClick:p,disabled:o.value},[o.value?((0,t.uX)(),(0,t.CE)("span",Oe,"Logging in...")):((0,t.uX)(),(0,t.CE)("span",Fe,"Login"))],8,Ie),s.value?((0,t.uX)(),(0,t.CE)("div",Ke,(0,u.v_)(s.value),1)):(0,t.Q3)("",!0)])])]))}};const Ue=(0,C.A)(He,[["__scopeId","data-v-d391c9fa"]]);var je=Ue;const Je=e=>((0,t.Qi)("data-v-09191306"),e=e(),(0,t.jt)(),e),Qe=Je((()=>(0,t.Lk)("div",{style:{"margin-top":"100px"}},null,-1))),Te={key:0,class:"admin-dashboard"},Be={class:"sidebar"},Pe=["disabled"],Ve=["disabled"],We={class:"content"},Ne={key:0,class:"loading"},De={key:1,class:"error-message"},Ge={key:2,class:"list"},ze=Je((()=>(0,t.Lk)("h2",null,"Teachers",-1))),Me={key:3,class:"list"},qe=Je((()=>(0,t.Lk)("h2",null,"Users",-1))),Ye={key:1},Ze=Je((()=>(0,t.Lk)("p",null,"Access denied. Please log in as an admin.",-1))),$e=[Ze];var ea={__name:"AdminDashboard",setup(e){const a=(0,j.rd)(),n=(0,r.KR)([]),l=(0,r.KR)([]),s=(0,r.KR)(""),o=(0,r.KR)(!1),c=async()=>{o.value=!0,s.value="";try{const e=await(0,oe.GG)((0,oe.rJ)(ce,"teachers"));n.value=e.docs.map((e=>e.data()))}catch(e){s.value="Failed to fetch teachers"}finally{o.value=!1}},d=async()=>{o.value=!0,s.value="";try{const e=await(0,oe.GG)((0,oe.rJ)(ce,"users"));l.value=e.docs.map((e=>e.data()))}catch(e){s.value="Failed to fetch users"}finally{o.value=!1}};return"admin"!==i.userRole&&a.push("/login"),(e,a)=>((0,t.uX)(),(0,t.CE)(t.FK,null,[Qe,"admin"===(0,r.R1)(i).userRole?((0,t.uX)(),(0,t.CE)("div",Te,[(0,t.Lk)("div",Be,[(0,t.Lk)("button",{onClick:c,disabled:o.value,class:"button"},"Show Teachers",8,Pe),(0,t.Lk)("button",{onClick:d,disabled:o.value,class:"button"},"Show Users",8,Ve)]),(0,t.Lk)("div",We,[o.value?((0,t.uX)(),(0,t.CE)("div",Ne,"Loading...")):(0,t.Q3)("",!0),s.value?((0,t.uX)(),(0,t.CE)("div",De,(0,u.v_)(s.value),1)):(0,t.Q3)("",!0),n.value.length?((0,t.uX)(),(0,t.CE)("div",Ge,[ze,(0,t.Lk)("ul",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(n.value,(e=>((0,t.uX)(),(0,t.CE)("li",{key:e.uid},(0,u.v_)(e.name)+" - "+(0,u.v_)(e.email),1)))),128))])])):(0,t.Q3)("",!0),l.value.length?((0,t.uX)(),(0,t.CE)("div",Me,[qe,(0,t.Lk)("ul",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(l.value,(e=>((0,t.uX)(),(0,t.CE)("li",{key:e.uid},(0,u.v_)(e.name)+" - "+(0,u.v_)(e.email)+" - "+(0,u.v_)(e.courseId),1)))),128))])])):(0,t.Q3)("",!0)])])):((0,t.uX)(),(0,t.CE)("div",Ye,$e))],64))}};const aa=(0,C.A)(ea,[["__scopeId","data-v-09191306"]]);var na=aa;const la={class:"container",style:{"margin-top":"100px"}},ta=(0,t.Lk)("h1",null,"Teacher Dashboard",-1),sa=[ta];function oa(e,a){return(0,t.uX)(),(0,t.CE)("div",la,sa)}const ua={},ra=(0,C.A)(ua,[["render",oa]]);var ia=ra;const ca={class:"container",style:{"margin-top":"100px"}},da=(0,t.Lk)("h1",null,"User Dashboard",-1),pa=[da];function va(e,a){return(0,t.uX)(),(0,t.CE)("div",ca,pa)}const ma={},ba=(0,C.A)(ma,[["render",va]]);var ka=ba;const ha={class:"about",style:{"margin-top":"100px"}},fa=(0,t.Lk)("h2",null,[(0,t.eW)("404 : Stress Not Found"),(0,t.Lk)("br"),(0,t.eW)("It is Just Serene Peace Here 😇")],-1),ga=[fa];function ya(e,a){return(0,t.uX)(),(0,t.CE)("div",ha,ga)}const La={},Ca=(0,C.A)(La,[["render",ya]]);var _a=Ca;const Ea=[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:le},{path:"/signup",name:"signup",component:we},{path:"/login",name:"login",component:je},{path:"/admin",name:"admin",component:na,meta:{requiresAuth:!1}},{path:"/teacher",name:"teacher",component:ia},{path:"/user",name:"user",component:ka},{path:"/:catchAll(.*)*",name:"notFound",component:_a}],Aa=(0,j.aE)({history:(0,j.LA)("/"),routes:Ea});Aa.beforeEach(((e,a,n)=>{const l=e.matched.some((e=>e.meta.requiresAuth)),t=i.isAuthenticated,s=i.userRole;!l||t&&"admin"===s?n():n("/login")}));var wa=Aa;(0,l.Ef)(U).use(wa).mount("#app")}},a={};function n(l){var t=a[l];if(void 0!==t)return t.exports;var s=a[l]={exports:{}};return e[l].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(a,l,t,s){if(!l){var o=1/0;for(c=0;c<e.length;c++){l=e[c][0],t=e[c][1],s=e[c][2];for(var u=!0,r=0;r<l.length;r++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](l[r])}))?l.splice(r--,1):(u=!1,s<o&&(o=s));if(u){e.splice(c--,1);var i=t();void 0!==i&&(a=i)}}return a}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[l,t,s]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var l in a)n.o(a,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(a){return 0===e[a]};var a=function(a,l){var t,s,o=l[0],u=l[1],r=l[2],i=0;if(o.some((function(a){return 0!==e[a]}))){for(t in u)n.o(u,t)&&(n.m[t]=u[t]);if(r)var c=r(n)}for(a&&a(l);i<o.length;i++)s=o[i],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},l=self["webpackChunkhappy3"]=self["webpackChunkhappy3"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=n.O(void 0,[504],(function(){return n(5211)}));l=n.O(l)})();
//# sourceMappingURL=app.101bd3f3.js.map