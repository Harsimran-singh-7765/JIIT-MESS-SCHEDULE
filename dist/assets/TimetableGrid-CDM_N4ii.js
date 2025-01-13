import{c as r,j as e,t as l}from"./index-B30DW8wV.js";import{g as i}from"./dateUtils-VaPWux1-.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=r("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=r("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=r("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function d({day:a,meals:t,isToday:s}){return e.jsxs("div",{className:`
        group
        relative bg-gradient-to-br from-slate-800 to-slate-900 
        rounded-xl p-6 shadow-xl 
        transform transition-all duration-300 ease-out
        border ${s?"border-blue-500 scale-105":"border-slate-700"}
        hover:scale-105 hover:-translate-y-2 
        hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
        hover:border-blue-400
        cursor-pointer
      `,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs("h3",{className:`
            text-2xl font-bold mb-4
            ${s?"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500":"text-white"}
          `,children:[a,s&&e.jsx("span",{className:"ml-2 text-sm text-blue-400",children:"(Today)"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(c,{className:"w-5 h-5 text-yellow-400"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-slate-400",children:"Breakfast"}),e.jsx("p",{className:"text-white",children:t.breakfast})]})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(x,{className:"w-5 h-5 text-orange-400"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-slate-400",children:"Lunch"}),e.jsx("p",{className:"text-white",children:t.lunch})]})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(n,{className:"w-5 h-5 text-blue-400"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-slate-400",children:"Dinner"}),e.jsx("p",{className:"text-white",children:t.dinner})]})]})]})]})]})}function m(){const a=i();return e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:Object.entries(l).map(([t,s])=>e.jsx(d,{day:t,meals:s,isToday:t===a},t))})}export{m as TimetableGrid};
