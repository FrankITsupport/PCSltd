/* ====== DATA ====== */
const services=[
  {icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>',title:"AI & Digital Adoption",items:["AI for Communications & Business","Prompt Engineering","Workflow Automation","AI Governance & Ethics"]},
  {icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',title:"Digital Transformation & Leadership",items:["Change Management","Agile Leadership","GovTech","Digital Strategy"]},
  {icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',title:"Strategic Communications",items:["Crisis Communications","Media Training","Campaign Strategy","Protocol & Diplomacy"]},
  {icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2"/></svg>',title:"Hybrid Events & Event Technology",items:["Livestreaming","Interpretation Systems","Event Design","Risk & Contingency"]},
  {icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',title:"Cybersecurity & Data Protection",items:["Executive Cyber Awareness","Digital Risk","Incident Response"]},
  {icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>',title:"ESG & Sustainability",items:["ESG Reporting","Climate Communications","Green Events"]},
  {icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>',title:"Monitoring, Evaluation & Data",items:["Results-Based Management","Dashboards","AI for M&E"]},
  {icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',title:"Project, Procurement & Contracts",items:["PPP Basics","Audit Readiness","Digital Procurement"]},
  {icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',title:"Service Delivery & CX",items:["Citizen-Centric Design","CRM","Omnichannel Services"]},
  {icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',title:"Innovation & Intrapreneurship",items:["Design Thinking","Innovation Labs","GovTech Challenges"]},
  {icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',title:"Trade, Investment & Nation Branding",items:["AfCFTA Readiness","Export Promotion","Investment Marketing"]}
];
const programmes=["AI for Communications & Marketing Professionals","Hybrid Events & Event Technology Masterclass","Digital Leadership in the Age of AI","Crisis Communications Simulation Lab","Cyber Risk Awareness for Executives","Public Sector Digital Transformation"];
const deliveryModes=["Executive-level masterclasses and leadership clinics","Tailored in-house institutional trainings","Simulation-based learning environments","Regional capacity-building programmes","Certification pathways","Blended learning (in-person and virtual)","Post-training advisory and coaching"];
const whyChoose=[
  {t:"Contextual Expertise",d:"Grounded in African institutional realities",n:"01"},
  {t:"Practical Application",d:"Skills you can apply immediately",n:"02"},
  {t:"Executive Readiness",d:"Programmes designed for decision-makers",n:"03"},
  {t:"Measurable Impact",d:"Outcomes-focused capacity building",n:"04"},
  {t:"Compliance & Governance",d:"Aligned with regulatory standards",n:"05"}
];
const team=[
  {name:"Benjamin Osore",role:"Team Leader & Faculty Lead – Strategic Communications & Reputation",bio:"A strategic communications and institutional transformation leader with extensive experience working across government, development agencies, and corporate organizations in East Africa."},
  {name:"Moses Maina",role:"Director – Training & Partnerships",bio:"A Global Programmes Leader with 14+ years in Social Development. Oversees programme design, faculty development, accreditation partnerships, and institutional client relationships."},
  {name:"Kevin Etyang",role:"Faculty Lead – Digital Transformation & AI",bio:"A Career Development Coach with over 10 years of transformative leadership in capacity building and training, responsible for PCS's flagship AI adoption and digital leadership programmes."},
  {name:"Grace Maina",role:"Faculty Lead – Event Technology & Experiential Learning",bio:"Has delivered major conferences, summits, and televised productions across Africa. Specializes in immersive learning formats and experiential labs."},
  {name:"Elizabeth Asichi",role:"Partnerships Consultant",bio:"An Investment and PPP Specialist with over a decade of experience structuring blended finance solutions and mobilizing capital for sustainable development."},
  {name:"Richard Nechesa Maina",role:"Leadership, Compliance & Governance Expert",bio:"An Advocate of the High Court of Kenya with over 15 years of experience in legal practice, governance, and institutional capacity building."}
];

/* ====== RENDER ====== */
document.getElementById('yr').textContent=new Date().getFullYear();

document.getElementById('serviceGrid').innerHTML=services.map((s,i)=>`
  <div class="service-card reveal" style="transition-delay:${i*60}ms">
    <div class="service-icon">${s.icon}</div>
    <h3>${s.title}</h3>
    <ul>${s.items.map(x=>`<li><span class="dot"></span>${x}</li>`).join('')}</ul>
  </div>`).join('');

document.getElementById('progGrid').innerHTML=programmes.map((p,i)=>`
  <div class="prog-card reveal" style="transition-delay:${i*80}ms">
    <span class="prog-num">0${i+1}</span>
    <p>${p}</p>
    <svg class="prog-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
  </div>`).join('');

document.getElementById('deliveryList').innerHTML=deliveryModes.map((m,i)=>`
  <li class="reveal" style="transition-delay:${i*60}ms">
    <span class="delivery-num">0${i+1}</span>
    <span>${m}</span>
  </li>`).join('');

document.getElementById('whyGrid').innerHTML=whyChoose.map((w,i)=>`
  <div class="why-card reveal" style="transition-delay:${i*80}ms">
    <span class="why-num">${w.n}</span>
    <h4>${w.t}</h4>
    <p>${w.d}</p>
  </div>`).join('');

document.getElementById('teamGrid').innerHTML=team.map((t,i)=>{
  const ini=t.name.split(' ').map(n=>n[0]).join('').slice(0,2);
  return`<div class="team-card reveal" style="transition-delay:${i*80}ms">
    <div class="team-avatar"><span>${ini}</span></div>
    <div class="team-info">
      <h3>${t.name}</h3>
      <p class="team-role">${t.role}</p>
      <p class="team-bio">${t.bio}</p>
    </div>
  </div>`;
}).join('');

/* ====== PRELOADER ====== */
window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.getElementById('preloader').classList.add('loaded');
    document.body.classList.add('loaded');
  },800);
});

/* ====== HAMBURGER / DRAWER ====== */
const hamburger=document.getElementById('hamburger');
const drawer=document.getElementById('drawer');
const drawerClose=document.getElementById('drawerClose');
const drawerOverlay=document.getElementById('drawerOverlay');
function openDrawer(){drawer.classList.add('open');document.body.style.overflow='hidden'}
function closeDrawer(){drawer.classList.remove('open');document.body.style.overflow=''}
hamburger.addEventListener('click',openDrawer);
drawerClose.addEventListener('click',closeDrawer);
drawerOverlay.addEventListener('click',closeDrawer);
drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeDrawer));

/* ====== NAV SCROLL ====== */
let lastScroll=0;
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  nav.classList.toggle('scrolled',y>80);
  nav.classList.toggle('hidden',y>lastScroll&&y>400);
  lastScroll=y;
});

/* ====== SCROLL REVEAL ====== */
const revealObs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
},{threshold:0.1,rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.reveal,.reveal-left').forEach(el=>revealObs.observe(el));

/* ====== COUNTER ANIMATION ====== */
const counterObs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el=e.target;
      const target=parseInt(el.dataset.count);
      let current=0;
      const step=Math.ceil(target/40);
      const timer=setInterval(()=>{
        current+=step;
        if(current>=target){current=target;clearInterval(timer)}
        el.textContent=current;
      },30);
      counterObs.unobserve(el);
    }
  });
},{threshold:0.5});
document.querySelectorAll('[data-count]').forEach(el=>counterObs.observe(el));

/* ====== SMOOTH SCROLL ====== */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const target=document.querySelector(a.getAttribute('href'));
    if(target)target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

/* ====== CONTACT FORM ====== */
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const btn=e.target.querySelector('button');
  btn.innerHTML='<span>Message Sent ✓</span>';
  btn.style.background='#2d6a4f';
  setTimeout(()=>{
    btn.innerHTML='<span>Send Message</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    btn.style.background='';
    e.target.reset();
  },3000);
});

/* ====== PARALLAX (subtle) ====== */
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  const heroImg=document.querySelector('.hero-media img');
  if(heroImg)heroImg.style.transform=`scale(1.1) translateY(${y*0.15}px)`;
});
