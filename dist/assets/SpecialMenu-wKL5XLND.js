import{c as i,j as t,t as c}from"./index-B30DW8wV.js";import{g as o}from"./dateUtils-VaPWux1-.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=i("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);function m(a){const s=["Paneer","Egg","Chicken","Fish","Special","Biryani","Halwa"],r=[a.breakfast,a.lunch,a.dinner].join(" ");return s.filter(n=>r.toLowerCase().includes(n.toLowerCase()))}function x(){const a=o(),s=c[a],r=e=>s.breakfast.includes(e)?"Breakfast":s.lunch.includes(e)?"Lunch":s.dinner.includes(e)?"Dinner":"",n=m(s).map(e=>({item:e,mealType:r(e)}));return n.length===0?null:t.jsx("div",{className:"max-w-md mx-auto mb-8 text-center",children:t.jsxs("div",{className:"bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-lg p-4 border border-yellow-500/20",children:[t.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[t.jsx(d,{className:"w-5 h-5 text-yellow-400 fill-yellow-400"}),t.jsx("p",{className:"text-yellow-400 font-semibold",children:"Today's Specials"})]}),t.jsx("div",{className:"space-y-1",children:n.map((e,l)=>t.jsxs("p",{className:"text-lg font-medium text-white",children:[e.item," ",t.jsxs("span",{className:"text-sm text-yellow-400",children:["(",e.mealType,")"]})]},l))})]})})}export{x as SpecialMenu};