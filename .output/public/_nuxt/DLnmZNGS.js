import{_ as A}from"./BFoRcfjc.js";import{p as N,_ as O,r as i,m as Y,A as P,q as H,o as n,c as a,a as e,b as r,w as d,F as v,u as f,x as w,t as c,d as y,y as C,v as F,s as M,B as E,C as R,z as X,D as G,E as T,G as Q}from"./CRdEc3un.js";import{c as h,_ as g}from"./CZsAzF_s.js";/**
 * @license lucide-vue-next v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=h("FacebookIcon",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-vue-next v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=h("InstagramIcon",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=h("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=h("TwitterIcon",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-vue-next v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=h("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),z=N("/images/logo.png"),te={class:"min-h-screen"},se={class:"container mx-auto flex items-center justify-between"},oe={class:"hidden md:flex gap-8"},ne=["href","onClick"],ae={class:"hidden md:flex items-center gap-4"},le={key:0,class:"md:hidden bg-[#E8F5F3] px-4 py-2 fixed w-full z-40",initial:{opacity:0,y:-20},enter:{opacity:1,y:0}},ie={class:"space-y-4"},re=["href","onClick"],de={class:"pt-4 space-y-2"},ce={id:"contact",class:"bg-[#E8F5F3] pt-16 pb-8"},ue={class:"container mx-auto px-4 sm:px-6"},me={class:"grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"},ve={class:"flex space-x-4"},fe=["href"],ye={class:"space-y-2"},ge={href:"#",class:"text-gray-600 hover:text-gray-900 transition-colors"},he={class:"space-y-2"},pe={href:"#",class:"text-gray-600 hover:text-gray-900 transition-colors"},xe={key:0,class:"mt-4 text-green-600"},_e={class:"border-t border-gray-200 mt-12 pt-8 text-center text-gray-600"},be={__name:"default",setup(ke){const u=i(!1),I=i(!1),p=i(!1),b=i(!1),x=i("home"),m=i({email:"",message:""}),k=[{name:"Home",id:"home"},{name:"Courses",id:"courses"},{name:"Categories",id:"categories"},{name:"Contact",id:"contact"}],D=[{name:"Facebook",icon:W,link:"#"},{name:"Twitter",icon:Z,link:"#"},{name:"Instagram",icon:J,link:"#"}],L=["About Us","Contact","Privacy Policy","Terms of Service"],U=["Development","Business","Design","Marketing"],V=()=>{u.value=!u.value},S=o=>{const t=document.getElementById(o);t&&(Q(t).scrollIntoView({behavior:"smooth",block:"start"}),x.value=o)},j=o=>{S(o),u.value=!1},B=()=>{I.value=window.scrollY>20;const t=k.map(l=>document.getElementById(l.id)).find(l=>{if(l){const _=l.getBoundingClientRect();return _.top<=100&&_.bottom>100}return!1});t&&(x.value=t.id)},$=async()=>{p.value=!0;try{await new Promise(o=>setTimeout(o,1e3)),m.value={email:"",message:""},b.value=!0,setTimeout(()=>{b.value=!1},5e3)}catch(o){console.error("Error submitting form:",o)}finally{p.value=!1}};return Y(()=>{window.addEventListener("scroll",B)}),P(()=>{window.removeEventListener("scroll",B)}),(o,t)=>{const l=A,_=H("motion");return n(),a("div",te,[e("nav",{class:w(["bg-[#E8F5F3] px-4 sm:px-6 py-4 sticky top-0 z-50 transition-all duration-300",{"shadow-md":I.value}])},[e("div",se,[r(l,{to:"/",class:"flex items-center"},{default:d(()=>t[2]||(t[2]=[e("img",{src:z,alt:"Onlearn",class:"h-8"},null,-1)])),_:1}),e("div",oe,[(n(),a(v,null,f(k,s=>e("a",{key:s.name,href:`#${s.id}`,class:w(["text-gray-600 hover:text-gray-900 transition-colors",{"text-[#20B486] font-semibold":x.value===s.id}]),onClick:q=>S(s.id)},c(s.name),11,ne)),64))]),e("div",ae,[r(g,{variant:"text",class:"hover:shadow-lg transition-shadow duration-300"},{default:d(()=>t[3]||(t[3]=[y("Sign In")])),_:1}),r(g,{variant:"primary",rounded:"full",class:"hover:shadow-lg transition-shadow duration-300"},{default:d(()=>t[4]||(t[4]=[y("Sign Up")])),_:1})]),e("button",{onClick:V,class:"md:hidden"},[u.value?(n(),C(F(ee),{key:1,class:"w-6 h-6"})):(n(),C(F(K),{key:0,class:"w-6 h-6"}))])])],2),u.value?M((n(),a("div",le,[e("div",ie,[(n(),a(v,null,f(k,s=>e("a",{key:s.name,href:`#${s.id}`,onClick:q=>j(s.id),class:w(["block py-2 text-gray-600 hover:text-gray-900 transition-colors",{"text-[#20B486] font-semibold":x.value===s.id}])},c(s.name),11,re)),64)),e("div",de,[r(g,{variant:"text",class:"w-full justify-center hover:shadow-lg transition-shadow duration-300"},{default:d(()=>t[5]||(t[5]=[y("Sign In")])),_:1}),r(g,{variant:"primary",class:"w-full justify-center hover:shadow-lg transition-shadow duration-300",rounded:"full"},{default:d(()=>t[6]||(t[6]=[y("Sign Up")])),_:1})])])])),[[_]]):E("",!0),e("main",null,[R(o.$slots,"default",{},void 0,!0)]),e("footer",ce,[e("div",ue,[e("div",me,[e("div",null,[t[7]||(t[7]=e("img",{src:z,alt:"Onlearn",class:"h-8 mb-4"},null,-1)),t[8]||(t[8]=e("p",{class:"text-gray-600 mb-4"}," Empowering minds through quality online education. ",-1)),e("div",ve,[(n(),a(v,null,f(D,s=>e("a",{key:s.name,href:s.link,class:"text-gray-600 hover:text-gray-900 transition-colors hover:shadow-lg hover:scale-110 transform duration-300"},[(n(),C(X(s.icon),{class:"w-5 h-5"}))],8,fe)),64))])]),e("div",null,[t[9]||(t[9]=e("h3",{class:"font-bold mb-4"},"Quick Links",-1)),e("ul",ye,[(n(),a(v,null,f(L,s=>e("li",{key:s},[e("a",ge,c(s),1)])),64))])]),e("div",null,[t[10]||(t[10]=e("h3",{class:"font-bold mb-4"},"Categories",-1)),e("ul",he,[(n(),a(v,null,f(U,s=>e("li",{key:s},[e("a",pe,c(s),1)])),64))])]),e("div",null,[t[11]||(t[11]=e("h3",{class:"font-bold mb-4"},"Contact Us",-1)),e("form",{onSubmit:G($,["prevent"]),class:"space-y-4"},[M(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>m.value.email=s),type:"email",placeholder:"Email address",class:"w-full px-4 py-2 rounded-lg border-2 border-[#20B486] focus:outline-none",required:""},null,512),[[T,m.value.email]]),M(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=s=>m.value.message=s),placeholder:"Your message",rows:"3",class:"w-full px-4 py-2 rounded-lg border-2 border-[#20B486] focus:outline-none",required:""},null,512),[[T,m.value.message]]),r(g,{type:"submit",variant:"primary",class:"w-full hover:shadow-lg transition-shadow duration-300",disabled:p.value},{default:d(()=>[y(c(p.value?"Sending...":"Send Message"),1)]),_:1},8,["disabled"])],32),b.value?(n(),a("div",xe," Your message has been received. We'll get back to you soon. ")):E("",!0)])]),e("div",_e,[e("p",null,"© "+c(new Date().getFullYear())+" Onlearn. All rights reserved.",1)])])])])}}},Ie=O(be,[["__scopeId","data-v-e16257cd"]]);export{Ie as default};