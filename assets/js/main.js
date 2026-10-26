import {TOOLS,CATS} from './registry.js';
import {h,$} from './ui.js';
import {startBackground} from './background.js';
import {LANG,setLang} from './i18n.js';
const root=document.body.dataset.root||'',page=document.body.dataset.page,P=new URLSearchParams(location.search);
export function card(t,i=0){const a=h('a',{class:'card',href:root+'tools/'+t.id+'.html'},h('span',{class:'ci','aria-hidden':'true'},t.icon),h('h3',{},t.name),h('p',{},t.desc),h('span',{class:'tag'},t.cat),h('span',{class:'go'},'Open tool →'));a.style.setProperty('--i',Math.min(i,12));return a}
const langBtn=()=>h('button',{class:'nl',type:'button',style:'width:100%;background:none;border:0;font:inherit;cursor:pointer;text-align:start',onclick:()=>setLang(LANG==='ar'?'en':'ar'),lang:LANG==='ar'?'en':'ar'},h('span',{class:'ic','aria-hidden':'true'},'🌐'),h('span',{class:'lb'},LANG==='ar'?'English':'العربية'));
function drawer(o){$('#nav').classList.toggle('open',o);$('#ov').classList.toggle('on',o);document.body.classList.toggle('lock',o);$('#burger').setAttribute('aria-expanded',o);(o?$('#xc'):$('#burger')).focus()}
function renderNav(){const n=$('#nav');
 const A=(href,t,ic)=>{const a=h('a',{class:'nl',href:root+href},h('span',{class:'ic','aria-hidden':'true'},ic),h('span',{class:'lb'},t));if(location.pathname.endsWith('/'+href)||(href==='index.html'&&location.pathname.endsWith('/')))a.setAttribute('aria-current','page');return a};
 const kids=[h('div',{class:'nh'},h('a',{class:'brand',href:root+'index.html'},h('b',{},'◆'),h('span',{},'Flux')),h('button',{id:'cl',class:'ib','aria-label':'Collapse sidebar','aria-expanded':!document.body.classList.contains('collapsed')},'‹'),h('button',{id:'xc',class:'ib','aria-label':'Close menu'},'✕')),
 h('form',{action:root+'tools.html',role:'search'},h('input',{name:'q',type:'search','aria-label':'Search tools',placeholder:'Search tools…'})),langBtn(),A('index.html','Home','⌂'),A('tools.html','All tools','▦')];
 for(const c of CATS){const ts=TOOLS.filter(t=>t.cat===c);if(!ts.length)continue;kids.push(h('h3',{},c));ts.forEach(t=>kids.push(A('tools/'+t.id+'.html',t.name,t.icon.slice(0,2))))}
 kids.push(h('h3',{},'Flux'),A('developer.html','Developer','👤'),A('about.html','About','ⓘ'),A('privacy.html','Privacy Policy','🔒'));n.replaceChildren(...kids);
 const cl=$('#cl');cl.onclick=()=>{const c=document.body.classList.toggle('collapsed');cl.setAttribute('aria-expanded',!c);try{localStorage.setItem('flux.col',c?1:0)}catch{}};
 $('#xc').onclick=()=>drawer(false);n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(n.classList.contains('open'))drawer(false)}))}
try{if(localStorage.getItem('flux.col')==='1')document.body.classList.add('collapsed')}catch{}
$('#burger').onclick=()=>drawer(true);$('#ov').onclick=()=>drawer(false);addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#nav').classList.contains('open'))drawer(false)});
startBackground();renderNav();
const g=$('#grid');
if(page==='home')TOOLS.slice(0,6).forEach((t,i)=>g.append(card(t,i)));
if(page==='tools'){const q=$('#q'),c=$('#cat');q.value=P.get('q')||'';
 CATS.filter(k=>TOOLS.some(t=>t.cat===k)).forEach(k=>c.append(h('option',{value:k},k)));c.value=CATS.includes(P.get('cat'))?P.get('cat'):'';
 const draw=()=>{const s=q.value.trim().toLowerCase(),ts=TOOLS.filter(t=>(!c.value||t.cat===c.value)&&(t.name+' '+t.desc).toLowerCase().includes(s));g.replaceChildren(...ts.map((t,i)=>card(t,i)));$('#empty').hidden=!!ts.length;$('#count').textContent=ts.length+' tools'};
 q.oninput=draw;c.onchange=draw;draw()}
const tid=$('#tool')?.dataset.tool,t=TOOLS.find(x=>x.id===tid);
if(t){try{const m=await import('./tools/'+(t.mod||t.id)+'.js');(m.default||m.T[t.id])($('#tool'))}catch(e){$('#tool').append(h('p',{class:'msg'},'This tool failed to load: '+e.message))}
 $('#rel').append(...TOOLS.filter(x=>x.id!==tid&&x.cat===t.cat).slice(0,3).map((x,i)=>card(x,i)))}
