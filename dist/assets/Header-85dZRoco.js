import{c as r,r as c,j as e}from"./index-B30DW8wV.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=r("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=r("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);function x(){const[t,s]=c.useState(!1),l=n=>{const o=document.getElementById(n);o&&o.scrollIntoView({behavior:"smooth"}),s(!1)};return e.jsxs("div",{className:"flex flex-col items-center justify-center mb-12",children:[e.jsxs("div",{className:"flex items-center justify-center mb-4",children:[e.jsx(i,{className:"w-12 h-12 text-blue-400 mr-4"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500",children:"MESS SCHEDULE"})]}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:()=>s(!t),className:"flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors",children:["Quick Navigation",e.jsx(a,{className:`w-4 h-4 transition-transform ${t?"rotate-180":""}`})]}),t&&e.jsxs("div",{className:"absolute mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-slate-700 z-50",children:[e.jsx("button",{onClick:()=>l("jiit-62"),className:"w-full text-left px-4 py-2 hover:bg-slate-700 rounded-t-lg",children:"JIIT-62 Schedule"}),e.jsx("button",{onClick:()=>l("jiit-128"),className:"w-full text-left px-4 py-2 hover:bg-slate-700 rounded-b-lg",children:"JIIT-128 Schedule"})]})]})]})}export{x as Header};
