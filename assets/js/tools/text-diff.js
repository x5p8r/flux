import {h,btn,row,copy} from '../ui.js';
export default el=>{const A=h('textarea',{rows:10,'aria-label':'Original text',placeholder:'Original'}),B=h('textarea',{rows:10,'aria-label':'Changed text',placeholder:'Changed'}),out=h('div',{'aria-live':'polite'}),e=h('p',{class:'msg',role:'alert'});let txt='';
const run=()=>{e.textContent='';const a=A.value.split('\n'),b=B.value.split('\n'),n=a.length,m=b.length;if(n*m>4e6){e.textContent='Inputs too large to compare.';return}
 const t=Array.from({length:n+1},()=>new Uint32Array(m+1));for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--)t[i][j]=a[i]===b[j]?t[i+1][j+1]+1:Math.max(t[i+1][j],t[i][j+1]);
 const r=[];let i=0,j=0;while(i<n&&j<m){if(a[i]===b[j]){r.push([' ',a[i]]);i++;j++}else if(t[i+1][j]>=t[i][j+1])r.push(['-',a[i++]]);else r.push(['+',b[j++]])}
 while(i<n)r.push(['-',a[i++]]);while(j<m)r.push(['+',b[j++]]);
 txt=r.map(x=>x.join(' ')).join('\n');out.replaceChildren(...r.map(([k,s])=>h('div',{class:'d '+(k=='+'?'add':k=='-'?'del':'same')},k+' '+s)))};
el.append(h('div',{class:'two'},A,B),row(btn('Compare',run,'pri'),btn('Copy diff',()=>copy(txt)),btn('Clear',()=>{A.value=B.value=txt=e.textContent='';out.replaceChildren()})),e,
 h('div',{class:'lg'},h('span',{class:'d add'},'+ inserted'),h('span',{class:'d del'},'- removed'),h('span',{class:'d same'},'unchanged')),out)};
