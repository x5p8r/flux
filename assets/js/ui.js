export const $=(s,r=document)=>r.querySelector(s);
export const h=(t,a={},...k)=>{const e=document.createElement(t);for(const[n,v]of Object.entries(a))n.startsWith('on')?e.addEventListener(n.slice(2),v):n==='class'?e.className=v:e.setAttribute(n,v);e.append(...k);return e};
export const btn=(t,f,c='')=>h('button',{type:'button',class:'btn '+c,onclick:f},t);
export const row=(...k)=>h('div',{class:'row'},...k);
export const field=(l,el)=>h('label',{class:'f'},l,el);
export function toast(m,bad){const t=h('div',{class:'toast'+(bad?' bad':''),role:'status'},m);document.body.append(t);setTimeout(()=>t.remove(),2200)}
export async function copy(s){if(!s)return toast('Nothing to copy',1);try{await navigator.clipboard.writeText(s);toast('Copied')}catch{toast('Clipboard unavailable — copy manually',1)}}
