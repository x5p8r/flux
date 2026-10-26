import {h,btn,row,copy} from '../ui.js';
export default el=>{const i=h('textarea',{rows:12,'aria-label':'JSON input',spellcheck:'false',placeholder:'Paste JSON here'}),o=h('textarea',{rows:12,readonly:'','aria-label':'Output'}),e=h('p',{class:'msg',role:'alert'});
const run=m=>{e.textContent='';if(!i.value.trim()){e.textContent='Enter some JSON first.';return}try{o.value=JSON.stringify(JSON.parse(i.value),null,m?0:2)}catch(x){o.value='';e.textContent='Invalid JSON: '+x.message}};
el.append(i,row(btn('Format',()=>run(0),'pri'),btn('Minify',()=>run(1)),btn('Copy output',()=>copy(o.value)),btn('Clear',()=>{i.value=o.value=e.textContent=''})),e,o)};
