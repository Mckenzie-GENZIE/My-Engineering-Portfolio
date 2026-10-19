const CONTACT = {
  email: "25120250mcge@student.pnguot.ac.pg",
  whatsapp: "67571277504",
  whatsappLabel: "+675 7127 7504"
};

const PROFILE_LINKS = {
  tiktok: "https://www.tiktok.com/@mckenzie.genzie",
  linkedin: "https://www.linkedin.com/in/mckenzie-genzie-017250370",
  github: "",
  youtube: "",
  website: "",
  others: []
};

const FEATURED_TIKTOK = [
  {title: "", url: ""},
  {title: "", url: ""},
  {title: "", url: ""}
];

const FEATURED_LINKEDIN = [
  {title: "", url: ""},
  {title: "", url: ""},
  {title: "", url: ""}
];

const SITE = {
  profilePhoto: "mckenzie-profile",
  mediaImage: "kalang-news",
  cv: "assets/cv.pdf"
};

const IMGDIR = "assets/images/";
const EXTS = ["jpeg", "jpg", "png", "webp"];
const cands = (...bases) => bases.flatMap(b => EXTS.map(e => IMGDIR + b + "." + e));

const ACCENTS = {ice:"94,234,255", sky:"70,150,255", violet:"150,130,255", rose:"255,110,160", amber:"255,184,0"};
const ROLES = ["Electrical & Communications Engineering Student","Embedded Systems Builder","IoT & Automation Developer","Gesture Control Experimenter"];
const BOOT = ["INITIALIZING SYSTEMS","LOADING MODULES","CALIBRATING SENSORS","SYSTEM ONLINE"];

const GROUPS = [
  {n:"Embedded and IoT", i:["Embedded systems","Internet of Things","Arduino, ESP32, ESP8266","Energy monitoring"]},
  {n:"Automation and control", i:["Industrial automation and control","Human-machine interfaces","Robotics and smart systems","Electrical and power engineering"]},
  {n:"Communications", i:["Visible Light Communication","Circuit analysis"]},
  {n:"Software", i:["Python and C","Computer vision and gestures","Web-based engineering interfaces"]}
];
const INTERESTS = GROUPS.flatMap(g => g.i);

const TERM_LINES = [
  "$ whoami",
  "mckenzie_genzie // ECE student, UNITECH",
  "$ ls projects/",
  "jarvis-ultra  control-panel  smart-home  ssids",
  "gesture-hmi  fire-detect  vlc  privacy-hub",
  "$ cat focus.txt",
  "embedded + automation + human-machine interfaces",
  "$ status",
  "building. testing. improving._"
];

const PIC = (main, sb = main) => ({pic: main, sb});

const PROJECTS = [
  {id:"ultra",...PIC("jarvis-ultra"),feat:true,t:"KENZII JARVIS-ULTRA: The Holographic Control Panel",c:"Automation",s:"Simulation-mode prototype with live demo",
   tiktok:"https://www.tt.site/t/ZSghMvV4U/",linkedin:"https://lnkd.in/p/gEBn8HDE",page:"KENZII_JARVIS.html",news:"",
   d:"A holographic-style control panel that runs in a normal web browser. Control machines with hand gestures or voice using just a laptop and a webcam.",
   why:"Built for PNG: low-cost, hands-free control for remote sites such as mines, farms and water plants, plus a simulation where new operators can train safely before touching real machines.",
   hw:["Laptop and webcam","ESP32, Arduino, Raspberry Pi (planned link)"],
   sw:["Hand gesture tracking","Voice commands","Live 3D models: robot arm, drone, reactor, globe","Web control panel"],
   f:["Pinch, zoom and rotate with hand gestures","Voice commands such as \u201cJarvis, turn on the pump\u201d","Controls for lights, fans, motors, pumps and relays","Live sensor readouts: temperature, distance, voltage (simulated for now)"],
   l:"Runs in simulation mode today. Connecting real hardware (Arduino, ESP32, Raspberry Pi) is the next step. Not safety-rated and never a replacement for protective devices or emergency stops."},
  {id:"jarvis",...PIC("jarvis-interface","jarvis"),t:"Kenzii Jarvis: 3D Hand Gesture Interface",c:"Automation",s:"Experimental prototype with live demo",
   tiktok:"https://www.tt.site/t/ZSghMAoQY/",linkedin:"https://lnkd.in/p/gRP6_dwj",page:"jarvis.html",news:"",
   d:"A webcam hand-tracking HUD that recognises gestures and can drive a computer interface and Arduino outputs.",
   hw:["Webcam","Arduino"],sw:["Hand tracking","Face and voice modules","Web Serial / Python serial link"],
   f:["Live hand tracking overlay","Gesture-to-command mapping","Serial commands to Arduino"],
   l:"Experimental human-machine interface. The camera starts only when you launch the demo. Gesture control is not safety-rated and never replaces protective devices or emergency stops."},
  {id:"panel",...PIC("control-panel"),t:"AI-Integrated Electrical Control Panel",c:"Automation",s:"Documented prototype. Demonstrated at Unitech Open Day 2026.",
   tiktok:"https://www.tt.site/t/ZSghMtRYF/",linkedin:"https://www.linkedin.com/posts/mckenzie-genzie-017250370_ai-integrated-electrical-control-panel-im-activity-7490369172602908673-nLg1",page:"",news:"",
   d:"An ESP32-based electrical control and smart-home prototype with a web interface.",
   hw:["ESP32","Relays","Lighting, fan and outlet loads"],sw:["Web interface","Voice and text assistant (English, Tok Pisin)","Camera hand-gesture interaction"],
   f:["Individual and master lighting control","Three-speed fan control","General outlet control","Virtual main breaker interface","Energy-monitoring displays and graphs","Login and access control","Scheduling, activity logs, remote access","Diagnostics and report export"],
   l:"Features are as described in the public project post. No measurement accuracy, ratings or security certification is claimed. The virtual breaker is a software interface and not a protective device."},
  {id:"home",...PIC("smart-home"),t:"IoT Smart Home Automation",c:"IoT",s:"Working prototype",tiktok:"https://www.tt.site/t/ZSghBMPp6/",linkedin:"https://lnkd.in/p/guThTYQ2",page:"",news:"",
   d:"Remote control of lighting and a fan through relays and a web interface on an ESP32.",
   hw:["ESP32","Relay module","Light and fan"],sw:["Web interface","Internet-accessible link"],
   f:["Reported test: a collaborator in Chimbu accessed the system hosted in Lae through an internet link"],
   l:"A student prototype. No credentials, internal addresses or tunnel details are published here."},
  {id:"ssids",...PIC("smart-student-id"),t:"Smart Student ID Card System (SSIDS)",c:"Embedded",s:"Prototype shown at TechnoFest 2026",
   tiktok:"https://www.tt.site/t/ZSghMoYpv/",linkedin:"https://www.linkedin.com/posts/mckenzie-genzie-017250370_technofest2026-ssids-rfid-activity-7505052164084555776-ktAt",page:"",news:"",
   d:"An RFID prototype exploring one student card for several campus services.",
   hw:["RFID RC522","Arduino Uno","ESP32","Cards, relays, LEDs, buzzers, push buttons"],sw:["Dashboard and database concepts"],
   f:["Student attendance","Dormitory access authorization","Mess access authorization"],
   l:"Not deployed by the university and not integrated with official university records."},
  {id:"gesture",...PIC("gesture-hmi"),t:"Python-Arduino Gesture-Controlled HMI",c:"Automation",s:"Experiment",
   tiktok:"https://www.tt.site/t/ZSghraQWJ/",linkedin:"https://lnkd.in/p/gzPbN633",page:"",news:"",
   d:"A webcam gesture recognition experiment that operates electrical loads and a computer interface.",
   hw:["Webcam","Arduino","Electrical loads"],sw:["Python"],
   f:["Workflow: camera, then Python recognition, then serial command, then Arduino output"],
   l:"Experimental human-machine interaction. It is not a safety-rated industrial control system."},
  {id:"fire",...PIC("fire-detection"),t:"Fire Detection and Monitoring Prototype",c:"IoT",s:"Prototype",tiktok:"https://www.tt.site/t/ZSghrshg2/",linkedin:"https://lnkd.in/p/gWAn4s5B",page:"https://www.facebook.com/share/r/19aibA4h8s/",news:"https://share.google/GxTOk0PeUcYHDL3dG",
   d:"An ESP32 prototype that raises local and phone/PC alerts.",
   hw:["ESP32","Flame sensor","Temperature/humidity sensor","Ultrasonic sensor","LEDs","Buzzer"],sw:["Notification to phone and PC"],
   f:["Indicator and buzzer alerts","Phone and PC notification"],
   l:"A student prototype and not a certified replacement for a compliant fire alarm system."},
  {id:"water",...PIC("water-dispenser"),t:"Touchless Automatic Water Dispenser",c:"Embedded",s:"Prototype",tiktok:"https://www.tt.site/t/ZSghh643t/",linkedin:"https://lnkd.in/p/guZrxT6J",page:"",news:"",
   d:"An Arduino dispenser that starts when a cup is detected and stops when it is removed.",
   hw:["Arduino","Ultrasonic sensor","Relay module","DC water pump"],sw:["Arduino C/C++"],
   f:["Cup detection starts the pump","Removing the cup stops the pump"],
   l:"No dispensing rate, water-quality or reliability figures are claimed."},
  {id:"vlc",...PIC("visible-light-communication"),t:"Visible Light Communication",c:"Communications",s:"Early educational experiment",tiktok:"https://www.tt.site/t/ZSghkewmK/",linkedin:"https://lnkd.in/p/gsBFQAgJ",page:"",news:"",
   d:"A message is converted to binary, sent as LED light pulses and decoded by a phone.",
   hw:["Arduino","LED","Phone receiver"],sw:["Binary encoding and decoding"],
   f:["Text to binary","LED pulse transmission","Phone-side decoding"],
   l:"An educational prototype and not a high-speed optical communication product."},
  {id:"hub",...PIC("privacy-hub"),t:"Personal Privacy Hub",c:"Communications",s:"Concept prototype",tiktok:"",linkedin:"https://lnkd.in/p/gfazJd3D",page:"",news:"",
   d:"An ESP32 communication prototype exploring temporary sessions and administrator-issued access codes.",
   hw:["ESP32"],sw:["Text and file messaging","Session management","Optional local export","Cloudflare Tunnel for connectivity"],
   f:["Temporary sessions","Admin-issued access codes","Reduced persistent conversation storage"],
   l:"Cloudflare Tunnel provides connectivity and does not by itself give end-to-end encryption or anonymity. The system is not audited or claimed to be secure."},
  {id:"instrument",...PIC("virtual-instrument"),t:"Gesture-Controlled Virtual Instrument",c:"Automation",s:"Documented. Details to be confirmed.",tiktok:"https://www.tt.site/t/ZSghkBVfR/",linkedin:"https://lnkd.in/p/gSSAxWia",page:"",
   news:"https://fm100.com.pg/2026/09/30/from-lae-classroom-to-smart-tech-dreams/",
   d:"A project mentioned in the Kalang News feature.",hw:["To be confirmed"],sw:["To be confirmed"],f:["To be confirmed"],
   l:"Sensors, musical mapping and performance are not stated until confirmed by the owner."},
  {id:"wiring",...PIC("electrical-installation"),t:"Electrical House Wiring and Solar Installation",c:"Electrical",s:"Practical experience. Scope to be confirmed.",tiktok:"https://www.tt.site/t/ZSghkVbP2/",linkedin:"https://lnkd.in/p/gj8DhRHi",page:"",news:"",
   d:"Hands-on electrical installation experience described in the public profile and news feature.",hw:["To be confirmed"],sw:[],f:["Exact scope and equipment to be supplied by the owner"],
   l:"This was student or supervised practical experience. It is not a professional licence or independent authorization to perform electrical installations."},
  {id:"rf",...PIC("rf-learning"),t:"RF and Analog Electronics Learning",c:"Communications",s:"Educational content",tiktok:"https://www.tt.site/t/ZSghkSAvU/",linkedin:"https://lnkd.in/p/gvJ2cNfZ",page:"",news:"",
   d:"Study notes on a two-transistor RF oscillator and how audio relates to radio-frequency transmission.",hw:[],sw:[],f:["Circuit analysis and explanation"],
   l:"Educational work. No working transmitter, legal authorization or measured frequency stability is claimed."},
  {id:"bin",...PIC("smart-bin"),t:"Smart Waste Management System (Touchless Smart Bin)",c:"Automation",s:"Working prototype",tiktok:"https://www.tt.site/t/ZSghB1Rnj/",linkedin:"https://lnkd.in/p/g8Qyupav",page:"",news:"",
   d:"A touchless rubbish bin that opens and closes without physical contact. By day it uses computer vision and hand gestures. At night an ultrasonic sensor detects a person and opens the lid.",
   why:"Improves hygiene and reduces the spread of germs in public places such as hospitals, schools, airports and markets.",
   hw:["Ultrasonic sensor","Camera","12V DC linear actuator","240V light bulb","Arduino"],
   sw:["Python and OpenCV","Hand gesture recognition"],
   f:["Daytime: hand gestures control the lid","Night: ultrasonic sensor detects a person and opens the lid","240V bulb switches on for visibility and off when the person leaves"],
   l:"A student prototype. The 240V bulb is mains voltage and needs proper insulation and an enclosed, isolated relay. Not a certified product."}
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const list = a => a && a.length ? "<ul>" + a.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul>" : "<p class='muted'>None listed.</p>";
const chips = a => a && a.length ? '<ul class="chips">' + a.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul>" : "<p class='muted'>None listed.</p>";
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const pad = n => String(n).padStart(2, "0");
const root = document.documentElement;
let accent = ACCENTS.ice, accentKey = "ice", toastTimer = 0;

function cleanUrl(u) {
  u = String(u || "").trim();
  if (!u) return "";
  if (!/^https?:\/\//i.test(u)) u = "https://" + u;
  try { return new URL(u).href; } catch (e) { return ""; }
}
PROJECTS.forEach(p => { p.tiktok = cleanUrl(p.tiktok); p.linkedin = cleanUrl(p.linkedin); p.news = cleanUrl(p.news); });

const waLink = msg => "https://wa.me/" + CONTACT.whatsapp + (msg ? "?text=" + encodeURIComponent(msg) : "");
const pageUrl = h => location.origin + location.pathname + (h || "");
const emailOk = () => {
  const e = String(CONTACT.email || "").trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? e : "";
};

function imgFail(img) {
  const c = (img.dataset.c || "").split("|"), i = (+img.dataset.i || 0) + 1;
  if (i < c.length) { img.dataset.i = i; img.src = c[i]; }
  else { const p = img.parentElement; if (p) p.classList.add("missing"); img.remove(); }
}
const photo = (l, alt) => l && l.length
  ? `<span class="ph" data-label="Add ${esc(l[0])}"><img src="${esc(l[0])}" alt="${esc(alt)}" loading="lazy" decoding="async" data-c="${esc(l.join("|"))}" data-i="0" onerror="imgFail(this)"></span>`
  : `<span class="ph missing" data-label="Add image"></span>`;

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}
async function copyText(txt, ok) {
  try { await navigator.clipboard.writeText(txt); toast(ok); }
  catch (e) {
    const ta = document.createElement("textarea");
    ta.value = txt; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); toast(ok); } catch (er) { toast("Copy failed"); }
    ta.remove();
  }
}
async function shareLink(url, title, text) {
  if (navigator.share) {
    try { await navigator.share({title, text, url}); return; }
    catch (e) { if (e && e.name === "AbortError") return; }
  }
  copyText(url, "Link copied");
}
const lockScroll = () => { document.body.style.overflow = $$("dialog[open]").length || $("#menu").classList.contains("open") ? "hidden" : ""; };

const LINK_LABELS = {tiktok:"TikTok", linkedin:"LinkedIn", github:"GitHub", youtube:"YouTube", website:"Website"};
function profileList() {
  const out = [];
  Object.keys(LINK_LABELS).forEach(k => { const u = cleanUrl(PROFILE_LINKS[k]); if (u) out.push({label:LINK_LABELS[k], url:u, k}); });
  (PROFILE_LINKS.others || []).forEach(o => { const u = cleanUrl(o && o.url); if (u && o.label) out.push({label:String(o.label), url:u, k:"other"}); });
  return out;
}

function initLoader() {
  const l = $("#loader"), p = $("#ldPct"), m = $("#ldMsg");
  let n = 0;
  const hide = () => l.classList.add("done");
  const t = setInterval(() => {
    n = Math.min(100, n + Math.ceil(Math.random() * 12));
    p.textContent = n + "%";
    m.textContent = BOOT[Math.min(BOOT.length - 1, Math.floor(n / 26))];
    if (n >= 100) { clearInterval(t); setTimeout(hide, 200); }
  }, 55);
  setTimeout(hide, 3000);
}

function setTheme(t) {
  root.dataset.theme = t;
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.content = t === "light" ? "#f3f7fc" : "#03060d";
  try { localStorage.setItem("theme", t); } catch (e) {}
}
function setAccent(k) {
  if (!ACCENTS[k]) k = "ice";
  accentKey = k; accent = ACCENTS[k];
  root.style.setProperty("--ac-rgb", accent);
  $$(".sw").forEach(b => b.setAttribute("aria-pressed", b.dataset.a === k));
  try { localStorage.setItem("accent", k); } catch (e) {}
}
function initTheme() {
  const box = $("#swatches");
  box.innerHTML = Object.entries(ACCENTS).map(([k, v]) => `<button class="sw" data-a="${k}" style="--c:rgb(${v})" aria-label="${k} accent" aria-pressed="false"></button>`).join("");
  box.addEventListener("click", e => { const b = e.target.closest("[data-a]"); if (b) setAccent(b.dataset.a); });
  let t = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark", k = "ice";
  try { t = localStorage.getItem("theme") || t; k = localStorage.getItem("accent") || "ice"; } catch (e) {}
  setTheme(t === "light" ? "light" : "dark");
  setAccent(k);
  $("#themeBtn").addEventListener("click", () => setTheme(root.dataset.theme === "light" ? "dark" : "light"));
}

function initContact() {
  const links = profileList();
  $$("[data-profile-links]").forEach(box => {
    box.innerHTML = "";
    links.forEach(l => {
      const a = document.createElement("a");
      a.className = "btn sm" + (l.k === "tiktok" ? " tt" : l.k === "linkedin" ? " li" : "");
      a.href = l.url; a.textContent = l.label;
      a.target = "_blank"; a.rel = "noopener noreferrer";
      box.appendChild(a);
    });
    box.hidden = !links.length;
  });
  $("#findMe").hidden = !links.length;

  const defaultMsg = "Hi Mckenzie, I found your engineering portfolio and I would like to talk.";
  $$("[data-wa]").forEach(a => { a.href = waLink(defaultMsg); });
  $("#waText").textContent = CONTACT.whatsappLabel;
  $("#copyWa").addEventListener("click", () => copyText("+" + CONTACT.whatsapp, "Number copied"));

  const e = emailOk(), txt = $("#emailText"), btn = $("#emailBtn"), cp = $("#copyEmail");
  if (e) {
    txt.textContent = e; txt.classList.remove("unset");
    btn.href = "mailto:" + e + "?subject=" + encodeURIComponent("Portfolio enquiry");
    btn.hidden = false; cp.hidden = false;
    cp.addEventListener("click", () => copyText(e, "Email copied"));
  } else {
    btn.hidden = true; cp.hidden = true;
  }

  const form = $("#msgForm"), nm = $("#fName"), ms = $("#fMsg");
  const compose = () => (nm.value.trim() ? "Hi Mckenzie, this is " + nm.value.trim() + ". " : "Hi Mckenzie. ") + ms.value.trim();
  form.addEventListener("submit", ev => {
    ev.preventDefault();
    if (!ms.value.trim()) { ms.focus(); return; }
    window.open(waLink(compose()), "_blank", "noopener,noreferrer");
  });
  $("#sendMail").addEventListener("click", () => {
    if (!e) { toast("Email not set"); return; }
    if (!ms.value.trim()) { ms.focus(); return; }
    location.href = "mailto:" + e + "?subject=" + encodeURIComponent("Portfolio enquiry") + "&body=" + encodeURIComponent(compose());
  });
  $("#shareSite").addEventListener("click", () => shareLink(pageUrl(""), "Mckenzie GENZIE | Engineering Portfolio", "Engineering projects by Mckenzie Genzie"));
}

function initMedia() {
  if (SITE.cv) {
    fetch(SITE.cv, {method:"HEAD"}).then(r => {
      if (r.ok && /pdf/i.test(r.headers.get("content-type") || "")) {
        const b = $("#cvBtn"); b.href = SITE.cv; b.hidden = false;
        $("#cvBox").innerHTML = `<a class="btn primary" href="${esc(SITE.cv)}" download>Download CV</a>`;
      }
    }).catch(() => {});
  }
  const pi = $("#portraitImg"), pc = cands(SITE.profilePhoto);
  pi.dataset.c = pc.join("|"); pi.dataset.i = 0;
  pi.onerror = () => imgFail(pi);
  pi.src = pc[0];

  const mi = $("#mediaImg"), mc = cands(SITE.mediaImage);
  mi.dataset.label = "Add " + mc[0];
  mi.innerHTML = `<img src="${esc(mc[0])}" alt="Kalang News feature" loading="lazy" decoding="async" data-c="${esc(mc.join("|"))}" data-i="0" onerror="imgFail(this)">`;
}

function initName() {
  const h = $("#name");
  let k = 0;
  h.innerHTML = h.dataset.name.split("|").map(w => `<span class="w" aria-hidden="true">${[...w].map(ch => `<span class="c" style="animation-delay:${(0.9 + (k++) * 0.045).toFixed(3)}s">${esc(ch)}</span>`).join("")}</span>`).join("");
}

function initNav() {
  const btn = $("#menuBtn"), menu = $("#menu"), nav = $("#nav"), top = $("#toTop");
  const set = o => { menu.classList.toggle("open", o); btn.setAttribute("aria-expanded", o); lockScroll(); };
  btn.addEventListener("click", () => set(!menu.classList.contains("open")));
  menu.addEventListener("click", e => { if (e.target.closest("a")) set(false); });
  addEventListener("keydown", e => { if (e.key === "Escape") set(false); });
  addEventListener("resize", () => { if (innerWidth > 900) set(false); });
  let tick = false;
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 30);
    top.hidden = scrollY < 600;
    const max = document.documentElement.scrollHeight - innerHeight;
    $("#bar").style.width = (max > 0 ? scrollY / max * 100 : 0) + "%";
    tick = false;
  };
  addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, {passive:true});
  onScroll();
  top.addEventListener("click", () => scrollTo({top:0, behavior: reduce ? "auto" : "smooth"}));
  const ids = ["top","about","skills","projects","watch","media","education","contact"];
  $("#dots").innerHTML = ids.map(i => `<a href="#${i}" aria-label="${i}" data-d="${i}"></a>`).join("");
  const links = $$("#menu > a"), dots = $$("#dots a");
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => a.setAttribute("aria-current", a.getAttribute("href") === "#" + e.target.id));
        dots.forEach(a => a.setAttribute("aria-current", a.dataset.d === e.target.id));
      }
    });
  }, {rootMargin:"-45% 0px -50% 0px"});
  ids.forEach(i => { const t = document.getElementById(i); if (t) io.observe(t); });
  if (!fine) { const h = $("#kHint"); if (h) h.hidden = true; }
}

function initTyped() {
  const el = $("#typed");
  if (reduce) { el.textContent = ROLES[0]; return; }
  let r = 0, c = 0, del = false;
  const tick = () => {
    const w = ROLES[r];
    el.textContent = w.slice(0, c);
    if (!del && c < w.length) { c++; setTimeout(tick, 55); }
    else if (!del) { del = true; setTimeout(tick, 1600); }
    else if (c > 0) { c--; setTimeout(tick, 28); }
    else { del = false; r = (r + 1) % ROLES.length; setTimeout(tick, 300); }
  };
  tick();
}
function initTerminal() {
  const pre = $("#term");
  if (reduce) { pre.textContent = TERM_LINES.join("\n"); return; }
  let started = false;
  const run = async () => {
    for (const line of TERM_LINES) {
      for (const ch of line) { pre.textContent += ch; await new Promise(r => setTimeout(r, 18)); }
      pre.textContent += "\n";
      await new Promise(r => setTimeout(r, 220));
    }
  };
  new IntersectionObserver((es, o) => {
    if (es[0].isIntersecting && !started) { started = true; run(); o.disconnect(); }
  }, {threshold:.3}).observe(pre);
}

function initReveal() {
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, {threshold:.08, rootMargin:"0px 0px -30px 0px"});
  $$(".reveal").forEach((el, i) => { el.style.transitionDelay = Math.min(i % 6, 5) * 60 + "ms"; io.observe(el); });
}
function countUp(el) {
  const to = +el.dataset.count || 0;
  if (reduce || !to) { el.textContent = to; return; }
  const t0 = performance.now(), dur = 1300;
  const step = t => {
    const p = Math.min((t - t0) / dur, 1);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function mediaItems() {
  const tt = [...PROJECTS.filter(p => p.tiktok).map(p => ({t:p.t, u:p.tiktok})), ...FEATURED_TIKTOK.map(x => ({t:x.title, u:cleanUrl(x.url)})).filter(x => x.u)];
  const li = [...PROJECTS.filter(p => p.linkedin).map(p => ({t:p.t, u:p.linkedin})), ...FEATURED_LINKEDIN.map(x => ({t:x.title, u:cleanUrl(x.url)})).filter(x => x.u)];
  return {tt, li};
}
function initStats() {
  const m = mediaItems();
  $("#sProjects").dataset.count = PROJECTS.length;
  $("#sCats").dataset.count = new Set(PROJECTS.map(p => p.c)).size;
  $("#sSkills").dataset.count = INTERESTS.length;
  $("#sVideos").dataset.count = m.tt.length + m.li.length;
  const io = new IntersectionObserver((es, o) => {
    es.forEach(e => { if (e.isIntersecting) { countUp(e.target); o.unobserve(e.target); } });
  }, {threshold:.5});
  $$("[data-count]").forEach(el => io.observe(el));
}

function initTilt() {
  if (!fine || reduce) return;
  const grid = $("#grid");
  grid.addEventListener("pointermove", e => {
    const c = e.target.closest(".card");
    if (!c) return;
    const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    c.style.setProperty("--mx", (x * 100) + "%");
    c.style.setProperty("--my", (y * 100) + "%");
    c.style.transform = `perspective(900px) rotateX(${((.5 - y) * 6).toFixed(2)}deg) rotateY(${((x - .5) * 8).toFixed(2)}deg) translateY(-5px)`;
  });
  grid.addEventListener("pointerout", e => {
    const c = e.target.closest(".card");
    if (c && !c.contains(e.relatedTarget)) c.style.transform = "";
  });
  const wrap = $("#portraitWrap"), img = $("#portrait");
  wrap.addEventListener("pointermove", e => {
    const r = wrap.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    img.style.transform = `rotateY(${(x * 10).toFixed(2)}deg) rotateX(${(-y * 10).toFixed(2)}deg)`;
  });
  wrap.addEventListener("pointerleave", () => { img.style.transform = ""; });
}

function initFx() {
  if (reduce) return;
  const c = $("#fx"), x = c.getContext("2d");
  const dpr = Math.min(devicePixelRatio || 1, 2);
  let w = 0, h = 0, pts = [], raf = 0;
  const build = () => {
    w = innerWidth; h = innerHeight;
    c.width = w * dpr; c.height = h * dpr;
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(64, Math.max(16, w * h / 24000)));
    pts = Array.from({length:n}, () => ({x:Math.random() * w, y:Math.random() * h, vx:(Math.random() - .5) * .35, vy:(Math.random() - .5) * .35}));
  };
  const frame = () => {
    x.clearRect(0, 0, w, h);
    const light = root.dataset.theme === "light";
    const a = light ? .35 : .6;
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      x.fillStyle = `rgba(${accent},${a})`;
      x.beginPath(); x.arc(p.x, p.y, 1.5, 0, 6.2832); x.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy;
        if (d < 14400) {
          x.strokeStyle = `rgba(${accent},${(1 - d / 14400) * .22})`;
          x.lineWidth = 1;
          x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(q.x, q.y); x.stroke();
        }
      }
    }
    raf = requestAnimationFrame(frame);
  };
  build();
  let lastW = innerWidth, rt = 0;
  addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(() => { if (innerWidth !== lastW) { lastW = innerWidth; build(); } }, 200);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(frame);
  });
  raf = requestAnimationFrame(frame);
}

function initSkills() {
  $("#skillGrid").innerHTML = GROUPS.map(g => `<div class="sk"><h3>${esc(g.n)}</h3><ul class="chips">${g.i.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("");
  const words = INTERESTS.map(i => `<span>${esc(i)}</span>`).join("");
  $("#track").innerHTML = words + words;
}

function initWatch() {
  const m = mediaItems();
  const profile = (id, key) => { const u = cleanUrl(PROFILE_LINKS[key]); const a = $(id); if (u) { a.href = u; a.hidden = false; } };
  profile("#ttProfile", "tiktok");
  profile("#liProfile", "linkedin");
  const fill = (id, items, label, soon) => {
    $(id).innerHTML = items.length
      ? items.map(i => `<a class="vlink" href="${esc(i.u)}" target="_blank" rel="noopener noreferrer"><span>${esc(i.t || "Open " + label)}</span><small>Open ↗</small></a>`).join("")
      : `<p class="muted">${soon}</p>`;
  };
  fill("#ttList", m.tt, "video", "Project videos are coming soon. Follow on TikTok to see them first.");
  fill("#liList", m.li, "post", "Project posts are coming soon. Connect on LinkedIn to see them first.");
}

function initProjects() {
  const cats = ["All", "Live demo", "Has video", ...new Set(PROJECTS.map(p => p.c))];
  const fb = $("#filters"), grid = $("#grid"), search = $("#search"), empty = $("#empty"), count = $("#pCount");
  let current = "All", q = "";
  const match = p => current === "All" ? true : current === "Live demo" ? !!p.page : current === "Has video" ? !!(p.tiktok || p.linkedin) : p.c === current;
  const drawFilters = () => { fb.innerHTML = cats.map(c => `<button class="btn sm" aria-pressed="${c === current}" data-c="${esc(c)}">${esc(c)}</button>`).join(""); };
  const drawGrid = () => {
    const items = PROJECTS.filter(p => match(p) && (!q || [p.t, p.d, p.c, p.hw.join(" "), p.sw.join(" ")].join(" ").toLowerCase().includes(q)));
    empty.hidden = items.length > 0;
    count.textContent = items.length + " / " + PROJECTS.length;
    grid.innerHTML = items.map((p, i) => `
      <button class="card${p.feat ? " feat" : ""}" style="animation-delay:${Math.min(i, 8) * 50}ms" data-id="${p.id}" aria-label="Open ${esc(p.t)}">
        <span class="idx">${pad(PROJECTS.indexOf(p) + 1)}</span>
        ${photo(cands(p.pic), p.t)}
        <span class="badges" style="margin:0;padding:0"><span class="tag">${esc(p.c)}</span>${p.feat ? '<span class="tag feat">Featured</span>' : ""}</span>
        <h3>${esc(p.t)}</h3>
        <span class="muted">${esc(p.d)}</span>
        <span class="badges">
          ${p.page ? '<span class="tag live">Live demo</span>' : ""}
          ${p.tiktok ? '<span class="tag tt">TikTok</span>' : ""}
          ${p.linkedin ? '<span class="tag li">LinkedIn</span>' : ""}
          <span class="tag">4 views</span>
        </span>
      </button>`).join("");
  };
  fb.addEventListener("click", e => { const b = e.target.closest("[data-c]"); if (b) { current = b.dataset.c; drawFilters(); drawGrid(); } });
  search.addEventListener("input", () => { q = search.value.trim().toLowerCase(); drawGrid(); });
  grid.addEventListener("click", e => { const b = e.target.closest(".card"); if (b) openProject(b.dataset.id, b); });
  addEventListener("keydown", e => {
    const typing = ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName);
    if (e.key === "/" && !typing && !$("#dlg").open && !$("#pal").open) {
      e.preventDefault();
      search.focus();
      search.scrollIntoView({block:"center", behavior: reduce ? "auto" : "smooth"});
    }
  });
  drawFilters(); drawGrid();
}

let lastFocus = null, cur = 0, curView = 0, lbI = 0;
const VL = ["Main view", "Shot 1", "Shot 2", "Shot 3"];
const viewC = (p, k) => k === 0 ? cands(p.pic) : cands(`${p.sb}-${k}`, p.pic);

function setView(i) {
  const p = PROJECTS[cur];
  curView = i;
  $("#galMain").innerHTML = photo(viewC(p, i), p.t + " - " + VL[i]);
  $$(".th").forEach((b, k) => b.setAttribute("aria-pressed", k === i));
  $("#galCap").textContent = VL[i] + " · tap to enlarge";
}

function linkButtons(p) {
  const o = [];
  if (p.tiktok) o.push(`<a class="btn sm tt" href="${esc(p.tiktok)}" target="_blank" rel="noopener noreferrer">Watch on TikTok</a>`);
  if (p.linkedin) o.push(`<a class="btn sm li" href="${esc(p.linkedin)}" target="_blank" rel="noopener noreferrer">View on LinkedIn</a>`);
  if (p.news) o.push(`<a class="btn sm" href="${esc(p.news)}" target="_blank" rel="noopener noreferrer">Read news feature</a>`);
  o.push(`<a class="btn sm wa" href="${esc(waLink('Hi Mckenzie, I saw your project "' + p.t + '" on your portfolio and I have a question.'))}" target="_blank" rel="noopener noreferrer"><svg class="ic"><use href="#i-wa"/></svg>Ask on WhatsApp</a>`);
  return o.join("");
}

function renderProject(i) {
  cur = (i + PROJECTS.length) % PROJECTS.length;
  const p = PROJECTS[cur];
  $("#dCount").textContent = pad(cur + 1) + " / " + pad(PROJECTS.length);
  $("#dlgBody").innerHTML = `
    <h2 id="dlgTitle">${esc(p.t)}</h2>
    <p class="tag">${esc(p.c)} · ${esc(p.s)}</p>
    <div class="gal">
      <div class="gal-main" id="galMain"></div>
      <p class="mono gal-cap" id="galCap"></p>
      <div class="thumbs">${VL.map((l, k) => `<button class="th" data-v="${k}" aria-pressed="${k === 0}" aria-label="${l}">${photo(viewC(p, k), l)}<small>${l}</small></button>`).join("")}</div>
    </div>
    <div class="dlg-actions">${linkButtons(p)}</div>
    <div class="dlg-actions">
      ${p.page ? `<button class="btn primary sm" id="runDemo">Launch live demo</button><a class="btn sm" href="${esc(p.page)}" target="_blank" rel="noopener noreferrer">Open full screen</a>` : ""}
    </div>
    <div id="demoHost"></div>
    <h3>Overview</h3><p>${esc(p.d)}</p>
    ${p.why ? `<h3>Why it matters</h3><p>${esc(p.why)}</p>` : ""}
    <h3>Hardware</h3>${chips(p.hw)}
    <h3>Software and technologies</h3>${chips(p.sw)}
    <h3>Demonstrated features</h3>${list(p.f)}
    <h3>Limitations and honest notes</h3><div class="note-box"><p>${esc(p.l)}</p></div>
    <h3>Motivation, testing, lessons learned, future improvements</h3><p class="muted">To be added from real test records.</p>`;
  setView(0);
  const run = $("#runDemo");
  if (run) run.addEventListener("click", () => {
    const fr = document.createElement("iframe");
    fr.className = "demo-frame"; fr.src = p.page; fr.title = p.t;
    fr.allow = "camera; microphone; fullscreen";
    $("#demoHost").appendChild(fr);
    run.textContent = "Demo running"; run.disabled = true;
  });
  $("#dlg").scrollTop = 0;
  try { history.replaceState(null, "", "#p-" + p.id); } catch (e) {}
}

function openProject(id, trigger) {
  const i = PROJECTS.findIndex(x => x.id === id);
  if (i < 0) return;
  lastFocus = trigger || null;
  renderProject(i);
  if (!$("#dlg").open) { $("#dlg").showModal(); lockScroll(); }
}

function lbShow(i) {
  const p = PROJECTS[cur];
  lbI = (i + VL.length) % VL.length;
  $("#lbBox").innerHTML = photo(viewC(p, lbI), p.t + " - " + VL[lbI]);
  $("#lbCap").textContent = p.t + " · " + VL[lbI] + " (" + (lbI + 1) + "/" + VL.length + ")";
}

function initDialogs() {
  const d = $("#dlg"), lb = $("#lb");
  const nav = n => renderProject(cur + n);
  $("#dlgClose").addEventListener("click", () => d.close());
  $("#dPrev").addEventListener("click", () => nav(-1));
  $("#dNext").addEventListener("click", () => nav(1));
  $("#dShare").addEventListener("click", () => shareLink(pageUrl("#p-" + PROJECTS[cur].id), PROJECTS[cur].t, "Engineering project by Mckenzie Genzie"));
  d.addEventListener("click", e => {
    if (e.target === d) { d.close(); return; }
    const t = e.target.closest("[data-v]");
    if (t) { setView(+t.dataset.v); return; }
    const m = e.target.closest("#galMain");
    if (m && $("img", m)) { lbShow(curView); lb.showModal(); lockScroll(); }
  });
  d.addEventListener("keydown", e => {
    if (lb.open || e.target.tagName === "IFRAME" || ["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
    if (e.key === "ArrowRight") nav(1);
    else if (e.key === "ArrowLeft") nav(-1);
    else if (["1","2","3","4"].includes(e.key)) setView(+e.key - 1);
  });
  let sx = 0, sy = 0;
  d.addEventListener("touchstart", e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, {passive:true});
  d.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (lb.open) return;
    if (Math.abs(dx) > 90 && Math.abs(dx) > Math.abs(dy) * 2 && !e.target.closest(".demo-frame")) nav(dx < 0 ? 1 : -1);
  }, {passive:true});
  d.addEventListener("close", () => {
    $("#dlgBody").innerHTML = "";
    try { history.replaceState(null, "", "#projects"); } catch (e) {}
    lockScroll();
    if (lastFocus) lastFocus.focus();
  });

  $("#lbClose").addEventListener("click", () => lb.close());
  $("#lbPrev").addEventListener("click", () => lbShow(lbI - 1));
  $("#lbNext").addEventListener("click", () => lbShow(lbI + 1));
  lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") lbShow(lbI + 1);
    else if (e.key === "ArrowLeft") lbShow(lbI - 1);
  });
  let lx = 0;
  lb.addEventListener("touchstart", e => { lx = e.touches[0].clientX; }, {passive:true});
  lb.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - lx;
    if (Math.abs(dx) > 60) lbShow(lbI + (dx < 0 ? 1 : -1));
  }, {passive:true});
  lb.addEventListener("close", () => { setView(lbI); lockScroll(); });
}

function initPalette() {
  const pal = $("#pal"), inp = $("#palIn"), ul = $("#palList");
  const go = id => { const t = document.getElementById(id); if (t) t.scrollIntoView({behavior: reduce ? "auto" : "smooth"}); };
  const mail = emailOk();
  const cmds = [
    ...[["top","Home"],["about","About"],["skills","Skills"],["projects","Projects"],["watch","Watch"],["media","Media"],["education","Education"],["contact","Contact"]]
      .map(([id, n]) => ({n:"Go to " + n, k:"Section", run:() => go(id)})),
    {n:"Chat on WhatsApp", k:"Contact", run:() => window.open(waLink("Hi Mckenzie, I found your engineering portfolio."), "_blank", "noopener,noreferrer")},
    ...(mail ? [{n:"Email me", k:"Contact", run:() => { location.href = "mailto:" + mail; }}] : []),
    {n:"Toggle light / dark theme", k:"Action", run:() => setTheme(root.dataset.theme === "light" ? "dark" : "light")},
    {n:"Next accent colour", k:"Action", run:() => { const ks = Object.keys(ACCENTS); setAccent(ks[(ks.indexOf(accentKey) + 1) % ks.length]); }},
    {n:"Share this site", k:"Action", run:() => shareLink(pageUrl(""), "Mckenzie GENZIE | Engineering Portfolio", "Engineering projects by Mckenzie Genzie")},
    ...profileList().map(l => ({n:"Open " + l.label, k:"Link", run:() => window.open(l.url, "_blank", "noopener,noreferrer")})),
    ...PROJECTS.map(p => ({n:p.t, k:"Project", run:() => openProject(p.id, null)}))
  ];
  let shown = [], sel = 0;
  const draw = () => {
    const q = inp.value.trim().toLowerCase();
    shown = cmds.filter(c => !q || c.n.toLowerCase().includes(q) || c.k.toLowerCase().includes(q));
    sel = Math.min(sel, Math.max(0, shown.length - 1));
    ul.innerHTML = shown.length
      ? shown.map((c, i) => `<li role="option" data-i="${i}" aria-selected="${i === sel}"><span>${esc(c.n)}</span><small>${esc(c.k)}</small></li>`).join("")
      : `<li aria-selected="false"><span class="muted">No results</span></li>`;
    const s = $("[aria-selected=true]", ul); if (s) s.scrollIntoView({block:"nearest"});
  };
  const open = () => { inp.value = ""; sel = 0; draw(); pal.showModal(); lockScroll(); inp.focus(); };
  const choose = i => { const c = shown[i]; if (!c) return; pal.close(); setTimeout(c.run, 60); };
  $("#kBtn").addEventListener("click", () => { $("#menuBtn").getAttribute("aria-expanded") === "true" && $("#menuBtn").click(); open(); });
  inp.addEventListener("input", () => { sel = 0; draw(); });
  inp.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(shown.length - 1, sel + 1); draw(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(0, sel - 1); draw(); }
    else if (e.key === "Enter") { e.preventDefault(); choose(sel); }
  });
  ul.addEventListener("click", e => { const li = e.target.closest("[data-i]"); if (li) choose(+li.dataset.i); });
  pal.addEventListener("click", e => { if (e.target === pal) pal.close(); });
  pal.addEventListener("close", lockScroll);
  addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); pal.open ? pal.close() : open(); }
  });
}

function initDeepLink() {
  const open = () => {
    const m = location.hash.match(/^#p-(.+)$/);
    if (m) openProject(m[1], null);
  };
  setTimeout(open, 900);
  addEventListener("hashchange", () => { if (!$("#dlg").open) open(); });
}

initLoader(); initTheme(); initName(); initMedia(); initContact(); initNav(); initTyped(); initTerminal();
initSkills(); initProjects(); initWatch(); initStats(); initDialogs(); initPalette(); initTilt();
initReveal(); initFx(); initDeepLink();
