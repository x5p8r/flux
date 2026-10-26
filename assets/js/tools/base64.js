import {h,btn,row,copy} from '../ui.js';
const enc=s=>{let r='';new TextEncoder().encode(s).forEach(c=>r+=String.fromCharCode(c));return btoa(r)};
const dec=s=>new TextDecoder('utf-8',{fatal:true}).decode(Uint8Array.from(atob(s.replace(/\s/g,'').replace(/-/g,'+').replace(/_/g,'/')),c=>c.charCodeAt(0)));
export default el=>{const i=h('textarea',{rows:8,'aria-label':'Input'}),o=h('textarea',{rows:8,readonly:'','aria-label':'Output'}),e=h('p',{class:'msg',role:'alert'});
const run=f=>{e.textContent='';if(!i.value){e.textContent='Enter some text first.';return}try{o.value=f(i.value)}catch{o.value='';e.textContent=f===dec?'Invalid Base64 input (or the decoded bytes are not UTF-8 text).':'Could not encode input.'}};
el.append(i,row(btn('Encode',()=>run(enc),'pri'),btn('Decode',()=>run(dec)),btn('Copy output',()=>copy(o.value)),btn('Clear',()=>{i.value=o.value=e.textContent=''})),e,o)};
