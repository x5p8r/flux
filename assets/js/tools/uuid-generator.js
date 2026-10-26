import {h,btn,row,field,copy} from '../ui.js';
const u=()=>crypto.randomUUID?crypto.randomUUID():'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=crypto.getRandomValues(new Uint8Array(1))[0]&15;return(c=='x'?r:r&3|8).toString(16)});
export default el=>{const n=h('input',{type:'number',min:1,max:100,value:5}),l=h('ul',{class:'list'});let a=[];
const gen=()=>{const k=Math.max(1,Math.min(100,Math.floor(+n.value)||1));n.value=k;a=Array.from({length:k},u);l.replaceChildren(...a.map(x=>h('li',{},h('code',{},x),btn('Copy',()=>copy(x),'sm'))))};
el.append(field('Count (1–100)',n),row(btn('Generate',gen,'pri'),btn('Regenerate',gen),btn('Copy all',()=>copy(a.join('\n')))),l);gen()};
