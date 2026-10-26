import {h,btn,row,field} from '../ui.js';
const SRC='https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js';
const lib=()=>window.qrcode?Promise.resolve():new Promise((ok,no)=>{const s=h('script',{src:SRC});s.onload=ok;s.onerror=()=>no(new Error('QR library could not be loaded. Check your connection.'));document.head.append(s)});
export default el=>{const t=h('textarea',{rows:3,'aria-label':'Text or URL',placeholder:'https://example.com'}),sz=h('select',{},...[200,300,400,600].map(n=>h('option',{value:n},n+' px'))),ec=h('select',{},...[['L','Low'],['M','Medium'],['Q','Quartile'],['H','High']].map(([v,l])=>h('option',{value:v},l))),c=h('canvas',{class:'pv',width:1,height:1,hidden:''}),e=h('p',{class:'msg',role:'alert'});
const make=async()=>{e.textContent='';c.hidden=true;const s=t.value.trim();if(!s){e.textContent='Enter text or a URL.';return}
 try{await lib();const q=window.qrcode(0,ec.value);q.addData(s);q.make();const n=q.getModuleCount(),k=Math.max(1,Math.floor(+sz.value/(n+8))),x=c.getContext('2d');c.width=c.height=k*(n+8);x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.fillStyle='#000';
 for(let r=0;r<n;r++)for(let l=0;l<n;l++)if(q.isDark(r,l))x.fillRect((l+4)*k,(r+4)*k,k,k);c.hidden=false}catch(x){e.textContent=/overflow|length/i.test(x.message)?'Text is too long for a QR code at this error-correction level.':x.message}};
const dl=()=>{if(c.hidden)return make();c.toBlob(b=>{const a=h('a',{href:URL.createObjectURL(b),download:'flux-qr.png'});a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1e3)})};
el.append(t,field('Size',sz),field('Error correction',ec),row(btn('Generate',make,'pri'),btn('Download PNG',dl)),e,c)};
