const CONTACT = {
  email: "25120250mcge@student.pnguot.ac.pg",
  whatsapp: "67571277504",
  whatsappLabel: "+675 7127 7504"
};

const PROFILE_LINKS = {
  tiktok: "https://www.tiktok.com/@mckenzie.genzie",
  linkedin: "https://www.linkedin.com/in/mckenzie-genzie-017250370",
  facebook: "",
  youtube: "",
  github: "",
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

const FEATURED_FACEBOOK = [
  {title: "", url: ""},
  {title: "", url: ""},
  {title: "", url: ""}
];

const SITE = {
  profilePhoto: "mckenzie-profile",
  cv: "assets/cv.pdf"
};

/* ================= NEWS AND MEDIA =================
   Paste the links between the quotes. Leave "" for any link you don't have yet.
   img = file name (no ending) inside assets/images/  -> e.g. assets/images/jernex-visuals.jpg
   url = link to the original article/page, facebook = Facebook post, linkedin = LinkedIn post */
const NEWS = [
  {id:"kalang", img:"kalang-news", source:"Kalang News (FM100)", meta:"September 30, 2026 · By Florin Yapo",
   title:"From Lae Classroom to Smart Tech Dreams",
   d:"A news feature on Mckenzie's engineering projects and ambitions as a Unitech student.",
   url:"https://fm100.com.pg/2026/09/30/from-lae-classroom-to-smart-tech-dreams/", facebook:"https://www.facebook.com/share/p/17n2i7hyRT/", linkedin:""},
  {id:"jernex", img:"jernex-visuals", source:"JERNEX VISUALS", meta:"Local media feature",
   title:"Featured on JERNEX VISUALS",
   d:"A local media feature on Mckenzie Genzie and his engineering projects.",
   url:"", facebook:"https://www.facebook.com/share/p/1HzF9Lx6Ti/", linkedin:"https://lnkd.in/p/gzAH23Ft"},
  {id:"recruit", img:"png-recruitment-box", source:"PNG Recruitment Box", meta:"Local media feature",
   title:"Featured on PNG Recruitment Box",
   d:"A local media feature on Mckenzie Genzie and his engineering projects.",
   url:"", facebook:"", linkedin:"https://lnkd.in/p/ge9d5J3q"},
  {id:"painim", img:"painim-wok-png", source:"Painim Wok PNG", meta:"Local media feature",
   title:"Featured on Painim Wok PNG",
   d:"A local media feature on Mckenzie Genzie and his engineering projects.",
   url:"", facebook:"https://www.facebook.com/share/v/19xXj7DZqt/", linkedin:""},
  {id:"hot97", img:"hot97fm", source:"Hot97FM", meta:"Local media feature",
   title:"Featured on Hot97FM",
   d:"A local media feature on Mckenzie Genzie and his engineering projects.",
   url:"", facebook:"https://www.facebook.com/share/p/1KbxwRapNF/", linkedin:""}
];

const IMGDIR = "assets/images/";
const EXTS = ["jpeg", "jpg", "png", "webp"];
const cands = (...bases) => bases.flatMap(b => EXTS.map(e => IMGDIR + b + "." + e));

const ACCENTS = {ice:"94,234,255", sky:"70,150,255", violet:"150,130,255", rose:"255,110,160", amber:"255,184,0"};
const ROLES = ["Electrical & Communications Engineering Student","Embedded Systems Builder","IoT & Automation Developer","Gesture Control Experimenter"];
const BOOT = ["INITIALIZING SYSTEMS","LOADING MODULES","CALIBRATING SENSORS","SYSTEM ONLINE"];

const PLATFORMS = {
  whatsapp: {n:"WhatsApp", i:"i-wa", c:"37,211,102"},
  email: {n:"Email", i:"i-mail", c:"94,234,255"},
  tiktok: {n:"TikTok", i:"i-tt", c:"255,44,85"},
  linkedin: {n:"LinkedIn", i:"i-li", c:"70,150,255"},
  facebook: {n:"Facebook", i:"i-fb", c:"24,119,242"},
  youtube: {n:"YouTube", i:"i-yt", c:"255,59,59"},
  github: {n:"GitHub", i:"i-code", c:"170,170,255"},
  website: {n:"Website", i:"i-link", c:"94,234,255"}
};
const KEYS = ["tiktok", "linkedin", "facebook"];
const CLS = {tiktok:"tt", linkedin:"li", facebook:"fb"};
const DEFAULT_MSG = "Hi Mckenzie, I found your engineering portfolio and I would like to talk.";

const ABOUT_TEXT = "I am an Electrical and Communications Engineering student who builds, experiments, documents, tests and improves prototypes. My work moves between circuits, microcontrollers, web interfaces and gesture-based control, and every project states what it does and where its limits are.";

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

/* The first 3 projects (top:true) are the Top 3 and are shown separately above the rest. */
const PROJECTS = [
  {id:"panel",...PIC("control-panel"),top:true,t:"AI-Integrated Electrical Control Panel",c:"Automation",s:"Documented prototype. Demonstrated at Unitech Open Day 2026.",
   tiktok:"https://www.tt.site/t/ZSghMtRYF/",linkedin:"https://www.linkedin.com/posts/mckenzie-genzie-017250370_ai-integrated-electrical-control-panel-im-activity-7490369172602908673-nLg1",
   d:"An ESP32-based electrical control and smart-home prototype with a web interface.",
   hw:["ESP32","Relays","Lighting, fan and outlet loads"],sw:["Web interface","Voice and text assistant (English, Tok Pisin)","Camera hand-gesture interaction"],
   f:["Individual and master lighting control","Three-speed fan control","General outlet control","Virtual main breaker interface","Energy-monitoring displays and graphs","Login and access control","Scheduling, activity logs, remote access","Diagnostics and report export"],
   l:"Features are as described in the public project post. No measurement accuracy, ratings or security certification is claimed. The virtual breaker is a software interface and not a protective device."},
  {id:"jarvis",...PIC("jarvis-interface","jarvis"),top:true,t:"Kenzii Jarvis: 3D Hand Gesture Interface",c:"Automation",s:"Experimental prototype",
   tiktok:"https://www.tt.site/t/ZSghMAoQY/",linkedin:"https://lnkd.in/p/gRP6_dwj",
   d:"A webcam hand-tracking HUD that recognises gestures and can drive a computer interface and Arduino outputs.",
   hw:["Webcam","Arduino"],sw:["Hand tracking","Face and voice modules","Web Serial / Python serial link"],
   f:["Live hand tracking overlay","Gesture-to-command mapping","Serial commands to Arduino"],
   l:"Experimental human-machine interface. Gesture control is not safety-rated and never replaces protective devices or emergency stops."},
  {id:"bin",...PIC("smart-bin"),top:true,t:"Smart Waste Management System (Touchless Smart Bin)",c:"Automation",s:"Working prototype",
   tiktok:"https://www.tt.site/t/ZSghB1Rnj/",linkedin:"https://lnkd.in/p/g8Qyupav",
   d:"A touchless rubbish bin that opens and closes without physical contact. By day it uses computer vision and hand gestures. At night an ultrasonic sensor detects a person and opens the lid.",
   why:"Improves hygiene and reduces the spread of germs in public places such as hospitals, schools, airports and markets.",
   hw:["Ultrasonic sensor","Camera","12V DC linear actuator","240V light bulb","Arduino"],
   sw:["Python and OpenCV","Hand gesture recognition"],
   f:["Daytime: hand gestures control the lid","Night: ultrasonic sensor detects a person and opens the lid","240V bulb switches on for visibility and off when the person leaves"],
   l:"A student prototype. The 240V bulb is mains voltage and needs proper insulation and an enclosed, isolated relay. Not a certified product."},

  {id:"ultra",...PIC("jarvis-ultra"),t:"KENZII JARVIS-ULTRA: The Holographic Control Panel",c:"Automation",s:"Simulation-mode prototype",
   tiktok:"https://www.tt.site/t/ZSghMvV4U/",linkedin:"https://lnkd.in/p/gEBn8HDE",
   d:"A holographic-style control panel that runs in a normal web browser. Control machines with hand gestures or voice using just a laptop and a webcam.",
   why:"Built for PNG: low-cost, hands-free control for remote sites such as mines, farms and water plants, plus a simulation where new operators can train safely before touching real machines.",
   hw:["Laptop and webcam","ESP32, Arduino, Raspberry Pi (planned link)"],
   sw:["Hand gesture tracking","Voice commands","Live 3D models: robot arm, drone, reactor, globe","Web control panel"],
   f:["Pinch, zoom and rotate with hand gestures","Voice commands such as \u201cJarvis, turn on the pump\u201d","Controls for lights, fans, motors, pumps and relays","Live sensor readouts: temperature, distance, voltage (simulated for now)"],
   l:"Runs in simulation mode today. Connecting real hardware (Arduino, ESP32, Raspberry Pi) is the next step. Not safety-rated and never a replacement for protective devices or emergency stops."},
  {id:"home",...PIC("smart-home"),t:"IoT Smart Home Automation",c:"IoT",s:"Working prototype",
   tiktok:"https://www.tt.site/t/ZSghBMPp6/",linkedin:"https://lnkd.in/p/guThTYQ2",
   d:"Remote control of lighting and a fan through relays and a web interface on an ESP32.",
   hw:["ESP32","Relay module","Light and fan"],sw:["Web interface","Internet-accessible link"],
   f:["Reported test: a collaborator in Chimbu accessed the system hosted in Lae through an internet link"],
   l:"A student prototype. No credentials, internal addresses or tunnel details are published here."},
  {id:"ssids",...PIC("smart-student-id"),t:"Smart Student ID Card System (SSIDS)",c:"Embedded",s:"Prototype shown at TechnoFest 2026",
   tiktok:"https://www.tt.site/t/ZSghMoYpv/",linkedin:"https://www.linkedin.com/posts/mckenzie-genzie-017250370_technofest2026-ssids-rfid-activity-7505052164084555776-ktAt",
   d:"An RFID prototype exploring one student card for several campus services.",
   hw:["RFID RC522","Arduino Uno","ESP32","Cards, relays, LEDs, buzzers, push buttons"],sw:["Dashboard and database concepts"],
   f:["Student attendance","Dormitory access authorization","Mess access authorization"],
   l:"Not deployed by the university and not integrated with official university records."},
  {id:"gesture",...PIC("gesture-hmi"),t:"Python-Arduino Gesture-Controlled HMI",c:"Automation",s:"Experiment",
   tiktok:"https://www.tt.site/t/ZSghraQWJ/",linkedin:"https://lnkd.in/p/gzPbN633",
   d:"A webcam gesture recognition experiment that operates electrical loads and a computer interface.",
   hw:["Webcam","Arduino","Electrical loads"],sw:["Python"],
   f:["Workflow: camera, then Python recognition, then serial command, then Arduino output"],
   l:"Experimental human-machine interaction. It is not a safety-rated industrial control system."},
  {id:"fire",...PIC("fire-detection"),t:"Fire Detection and Monitoring Prototype",c:"IoT",s:"Prototype",
   tiktok:"https://www.tt.site/t/ZSghrshg2/",linkedin:"https://lnkd.in/p/gWAn4s5B",
   d:"An ESP32 prototype that raises local and phone/PC alerts.",
   hw:["ESP32","Flame sensor","Temperature/humidity sensor","Ultrasonic sensor","LEDs","Buzzer"],sw:["Notification to phone and PC"],
   f:["Indicator and buzzer alerts","Phone and PC notification"],
   l:"A student prototype and not a certified replacement for a compliant fire alarm system."},
  {id:"water",...PIC("water-dispenser"),t:"Touchless Automatic Water Dispenser",c:"Embedded",s:"Prototype",
   tiktok:"https://www.tt.site/t/ZSghh643t/",facebook:"https://www.facebook.com/share/r/19aibA4h8s/",news:"https://share.google/GxTOk0PeUcYHDL3dG",linkedin:"https://lnkd.in/p/guZrxT6J",
   d:"An Arduino dispenser that starts when a cup is detected and stops when it is removed.",
   hw:["Arduino","Ultrasonic sensor","Relay module","DC water pump"],sw:["Arduino C/C++"],
   f:["Cup detection starts the pump","Removing the cup stops the pump"],
   l:"No dispensing rate, water-quality or reliability figures are claimed."},
  {id:"vlc",...PIC("visible-light-communication"),t:"Visible Light Communication",c:"Communications",s:"Early educational experiment",
   tiktok:"https://www.tt.site/t/ZSghkewmK/",linkedin:"https://lnkd.in/p/gsBFQAgJ",
   d:"A message is converted to binary, sent as LED light pulses and decoded by a phone.",
   hw:["Arduino","LED","Phone receiver"],sw:["Binary encoding and decoding"],
   f:["Text to binary","LED pulse transmission","Phone-side decoding"],
   l:"An educational prototype and not a high-speed optical communication product."},
  {id:"hub",...PIC("privacy-hub"),t:"Personal Privacy Hub",c:"Communications",s:"Concept prototype",
   linkedin:"https://lnkd.in/p/gfazJd3D",
   d:"An ESP32 communication prototype exploring temporary sessions and administrator-issued access codes.",
   hw:["ESP32"],sw:["Text and file messaging","Session management","Optional local export","Cloudflare Tunnel for connectivity"],
   f:["Temporary sessions","Admin-issued access codes","Reduced persistent conversation storage"],
   l:"Cloudflare Tunnel provides connectivity and does not by itself give end-to-end encryption or anonymity. The system is not audited or claimed to be secure."},
  {id:"instrument",...PIC("virtual-instrument"),t:"Gesture-Controlled Virtual Instrument",c:"Automation",s:"Documented. Details to be confirmed.",
   tiktok:"https://www.tt.site/t/ZSghkBVfR/",linkedin:"https://lnkd.in/p/gSSAxWia",
   news:"https://fm100.com.pg/2026/09/30/from-lae-classroom-to-smart-tech-dreams/",
   d:"A project mentioned in the Kalang News feature.",hw:["To be confirmed"],sw:["To be confirmed"],f:["To be confirmed"],
   l:"Sensors, musical mapping and performance are not stated until confirmed by the owner."},
  {id:"wiring",...PIC("electrical-installation"),t:"Electrical House Wiring and Solar Installation",c:"Electrical",s:"Practical experience. Scope to be confirmed.",
   tiktok:"https://www.tt.site/t/ZSghkVbP2/",linkedin:"https://lnkd.in/p/gj8DhRHi",
   d:"Hands-on electrical installation experience described in the public profile and news feature.",hw:["To be confirmed"],sw:[],f:["Exact scope and equipment to be supplied by the owner"],
   l:"This was student or supervised practical experience. It is not a professional licence or independent authorization to perform electrical installations."},
  {id:"rf",...PIC("rf-learning"),t:"RF and Analog Electronics Learning",c:"Communications",s:"Educational content",
   tiktok:"https://www.tt.site/t/ZSghkSAvU/",linkedin:"https://lnkd.in/p/gvJ2cNfZ",
   d:"Study notes on a two-transistor RF oscillator and how audio relates to radio-frequency transmission.",hw:[],sw:[],f:["Circuit analysis and explanation"],
   l:"Educational work. No working transmitter, legal authorization or measured frequency stability is claimed."},

  {id:"terminal",...PIC("hacker-terminal"),t:"Hacker-Style Terminal Control (ESP32)",c:"IoT",s:"Working prototype",
   tiktok:"https://www.tt.site/t/ZSgBv8HyS/",linkedin:"https://lnkd.in/p/gzYUyJVX",
   d:"A fake hacker-style terminal built in HTML and connected to an ESP32. Instead of plain ON/OFF buttons, custom terminal commands control a real light remotely. Type the command, the ESP32 receives the signal, and the light turns ON or OFF.",
   why:"Makes a normal ON/OFF control more engaging while practising HMI concepts, wireless communication and relay control.",
   hw:["ESP32","Relay module","Light"],
   sw:["HTML and JavaScript terminal interface","Custom terminal commands","Wireless communication"],
   f:["Custom terminal commands replace ON/OFF buttons","ESP32 receives the command wirelessly","Relay switches a real light ON and OFF"],
   l:"A student prototype with a themed interface. It is not real hacking and no security features are claimed. Any mains-voltage load needs a properly insulated, enclosed relay. Not a certified product."},
  {id:"arm",...PIC("robotic-arm"),t:"Single-Joystick Robotic Arm Controller",c:"Automation",s:"In development. Simulation and hardware integration planned.",
   tiktok:"https://www.tt.site/t/ZSgBcpyjv/",linkedin:"https://lnkd.in/p/gYPNu5ki",
   d:"A robotic arm control system that combines an Arduino Uno R3, joystick control and a 3D web interface built with HTML, CSS and JavaScript. The goal is to control different arm joints with one joystick while watching the movement in a real-time 3D simulation.",
   why:"Explores how embedded systems, web development and robotics can work together to create smarter control systems.",
   hw:["Arduino Uno R3","Joystick"],
   sw:["HTML, CSS and JavaScript","Interactive 3D robotic arm simulation","Real-time control dashboard"],
   fh:"Planned features",
   f:["Single-joystick multi-joint control","Interactive 3D robotic arm simulation","Arduino hardware integration","Real-time control dashboard","Future physical robotic arm implementation"],
   l:"Work in progress. The features listed are goals and not completed results, and a physical robotic arm has not been built yet."},
  {id:"pacman",...PIC("pacman-hardware"),t:"KENZII'S PAC-MAN: Hardware-Controlled Game",c:"Embedded",s:"Working prototype",
   tiktok:"https://www.tt.site/t/ZSgBcv5W3/",linkedin:"https://lnkd.in/p/gsXZMn_m",
   d:"A web-based Pac-Man game that bridges software and physical hardware electronics using HTML, CSS, JavaScript and an Arduino Uno R3. The Arduino talks to the web browser over USB Serial.",
   why:"Connects physical electronics with responsive, interactive gameplay.",
   hw:["Arduino Uno R3","Hardware joystick","Potentiometer","Buzzer","Red LED","Green LED"],
   sw:["HTML, CSS and JavaScript","USB Serial link to the browser"],
   f:["Navigate Pac-Man with a real hardware joystick","Adjust game speed with a physical potentiometer or the web dashboard","Buzzer delivers classic arcade-style sound effects","Green LED = Game is ON","Red LED = Game Over"],
   l:"A student prototype and learning project. It is a fan-made, non-commercial game and is not affiliated with or endorsed by the owners of Pac-Man."}
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const list = a => a && a.length ? "<ul>" + a.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul>" : "<p class='muted'>None listed.</p>";
const chips = a => a && a.length ? '<ul class="chips">' + a.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul>" : "<p class='muted'>None listed.</p>";
const icon = (id, cls = "ic") => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const pad = n => String(n).padStart(2, "0");
const root = document.documentElement;
let accent = ACCENTS.ice, accentKey = "ice", toastTimer = 0, fxApi = null;

function cleanUrl(u) {
  u = String(u || "").trim();
  if (!u) return "";
  if (!/^https?:\/\//i.test(u)) u = "https://" + u;
  try { return new URL(u).href; } catch (e) { return ""; }
}
PROJECTS.forEach(p => { ["tiktok", "linkedin", "facebook", "news"].forEach(k => { p[k] = cleanUrl(p[k]); }); });
NEWS.forEach(n => { ["url", "facebook", "linkedin"].forEach(k => { n[k] = cleanUrl(n[k]); }); });

const waLink = msg => "https://wa.me/" + CONTACT.whatsapp + (msg ? "?text=" + encodeURIComponent(msg) : "");
const pageUrl = h => /^https?:$/.test(location.protocol)
  ? location.origin + location.pathname + (h || "")
  : location.href.split("#")[0] + (h || "");
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
  ? `<span class="ph" data-label="Add ${esc(l[0])}"><img src="${esc(l[0])}" alt="${esc(alt)}" loading="lazy" decoding="async" data-c="${esc(l.join("|"))}" data-i="0" onerror="imgFail(this)" onload="this.parentElement.style.animation='none'"></span>`
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

function profileList() {
  const out = [];
  ["tiktok", "linkedin", "facebook", "youtube", "github", "website"].forEach(k => {
    const u = cleanUrl(PROFILE_LINKS[k]);
    if (u) out.push({k, n:PLATFORMS[k].n, url:u, sub:"Open profile"});
  });
  (PROFILE_LINKS.others || []).forEach(o => {
    const u = cleanUrl(o && o.url);
    if (u && o.label) out.push({k:"other", n:String(o.label), url:u, sub:"Open profile"});
  });
  return out;
}
function connectList() {
  const out = [{k:"whatsapp", url:waLink(DEFAULT_MSG), sub:CONTACT.whatsappLabel}];
  const e = emailOk();
  if (e) out.push({k:"email", url:"mailto:" + e + "?subject=" + encodeURIComponent("Portfolio enquiry"), sub:e});
  profileList().forEach(p => out.push(p));
  return out.map(o => { const pl = PLATFORMS[o.k] || PLATFORMS.website; return {...o, n:o.n || pl.n, i:pl.i, c:pl.c}; });
}
function watchItems() {
  const base = PROJECTS.filter(p => KEYS.some(k => p[k])).map(p => ({id:p.id, t:p.t, pic:p.pic, tiktok:p.tiktok, linkedin:p.linkedin, facebook:p.facebook}));
  const extra = [];
  [[FEATURED_TIKTOK, "tiktok", "TikTok video"], [FEATURED_LINKEDIN, "linkedin", "LinkedIn post"], [FEATURED_FACEBOOK, "facebook", "Facebook video"]].forEach(([arr, k, def]) => {
    arr.forEach(x => { const u = cleanUrl(x.url); if (u) extra.push({t:x.title || def, [k]:u}); });
  });
  return [...base, ...extra];
}
const linkCount = () => watchItems().reduce((n, i) => n + KEYS.filter(k => i[k]).length, 0);

/* ---------- PDF engine (no libraries, works offline) ---------- */
const PDF_ACC = [0.04, 0.5, 0.65], PDF_DARK = [0.07, 0.1, 0.15], PDF_GREY = [0.4, 0.45, 0.5], PDF_BLUE = [0.1, 0.35, 0.8];

/* Reads the portrait already on the page and returns JPEG bytes (null if it can't, e.g. file:// or no image). */
function getPortraitJpeg() {
  try {
    const im = $("#portraitImg");
    if (!im || !im.complete || !im.naturalWidth) return null;
    const S = 360, c = document.createElement("canvas");
    c.width = c.height = S;
    const g = c.getContext("2d");
    const s = Math.min(im.naturalWidth, im.naturalHeight);
    g.fillStyle = "#fff"; g.fillRect(0, 0, S, S);
    g.drawImage(im, (im.naturalWidth - s) / 2, (im.naturalHeight - s) / 2, s, s, 0, 0, S, S);
    const bin = atob(c.toDataURL("image/jpeg", 0.88).split(",")[1]);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return {bytes, w:S, h:S};
  } catch (e) { return null; }
}

function buildPdf(items, footer, photoData) {
  const W = 595, H = 842, M = 50, TW = W - 2 * M;
  const clean = s => String(s == null ? "" : s)
    .replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2013\u2014]/g, "-").replace(/\u2192/g, "->").replace(/[\u00b7\u2022]/g, "-")
    .replace(/[^\x20-\x7e]/g, "");
  const pesc = s => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  const pages = [{ops:[], links:[]}];
  let y = H - M;
  const pg = () => pages[pages.length - 1];
  const ensure = h => { if (y - h < M + 14) { pages.push({ops:[], links:[]}); y = H - M; } };
  const wrap = (t, max) => {
    const out = []; let line = "";
    t.split(/\s+/).forEach(w => {
      while (w.length > max) { if (line) { out.push(line); line = ""; } out.push(w.slice(0, max)); w = w.slice(max); }
      if (!w) return;
      const tryL = line ? line + " " + w : w;
      if (tryL.length > max) { out.push(line); line = w; } else line = tryL;
    });
    if (line) out.push(line);
    return out.length ? out : [""];
  };
  items.forEach(it => {
    if (!it) return;
    if (it.sp) { y -= it.sp; return; }
    if (it.rule) { ensure(16); y -= 8; pg().ops.push(`0.8 0.82 0.85 rg ${M} ${y.toFixed(1)} ${TW} 0.8 re f`); y -= 8; return; }
    const size = it.s || 10.5, lh = size * 1.45, cw = size * (it.b ? 0.58 : 0.54), x = M + (it.x || 0);
    const max = Math.max(10, Math.floor((TW - (it.x || 0) - (it.r || 0)) / cw));
    const col = (it.link ? PDF_BLUE : (it.c || PDF_DARK)).join(" ");
    y -= it.gap || 0;
    wrap(clean(it.t), max).forEach(l => {
      ensure(lh); y -= lh;
      pg().ops.push(`BT /${it.b ? "F2" : "F1"} ${size} Tf ${col} rg ${x} ${y.toFixed(1)} Td (${pesc(l)}) Tj ET`);
      if (it.link) pg().links.push({x, y:y - 2, w:Math.min(TW, l.length * cw), h:size + 3, url:clean(it.link)});
    });
  });

  /* round photo, top right of page 1 */
  const circ = (cx, cy, r) => {
    const k = r * 0.5523, f = n => n.toFixed(1);
    return `${f(cx + r)} ${f(cy)} m ${f(cx + r)} ${f(cy + k)} ${f(cx + k)} ${f(cy + r)} ${f(cx)} ${f(cy + r)} c ` +
           `${f(cx - k)} ${f(cy + r)} ${f(cx - r)} ${f(cy + k)} ${f(cx - r)} ${f(cy)} c ` +
           `${f(cx - r)} ${f(cy - k)} ${f(cx - k)} ${f(cy - r)} ${f(cx)} ${f(cy - r)} c ` +
           `${f(cx + k)} ${f(cy - r)} ${f(cx + r)} ${f(cy - k)} ${f(cx + r)} ${f(cy)} c`;
  };
  if (photoData) {
    const r = 42, cx = W - M - r, cy = H - M - r;
    pages[0].ops.unshift(
      `q ${circ(cx, cy, r)} W n ${2 * r} 0 0 ${2 * r} ${cx - r} ${cy - r} cm /Im1 Do Q`,
      `q 0.04 0.5 0.65 RG 2 w ${circ(cx, cy, r)} S Q`
    );
  }

  const objs = [null, null,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>"];
  if (photoData) objs.push({img:photoData});
  const xo = photoData ? " /XObject << /Im1 5 0 R >>" : "";
  const pageNums = [];
  pages.forEach((p, i) => {
    p.ops.push(`BT /F1 8 Tf 0.5 0.55 0.6 rg ${M} 28 Td (${pesc(clean(footer))} - Page ${i + 1} of ${pages.length}) Tj ET`);
    const stream = p.ops.join("\n");
    objs.push(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
    const cNum = objs.length, annots = [];
    p.links.forEach(l => {
      objs.push(`<< /Type /Annot /Subtype /Link /Rect [${l.x.toFixed(1)} ${l.y.toFixed(1)} ${(l.x + l.w).toFixed(1)} ${(l.y + l.h).toFixed(1)}] /Border [0 0 0] /A << /S /URI /URI (${pesc(l.url)}) >> >>`);
      annots.push(objs.length + " 0 R");
    });
    objs.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >>${xo} >> /Contents ${cNum} 0 R /Annots [${annots.join(" ")}] >>`);
    pageNums.push(objs.length);
  });
  objs[0] = "<< /Type /Catalog /Pages 2 0 R >>";
  objs[1] = `<< /Type /Pages /Kids [${pageNums.map(n => n + " 0 R").join(" ")}] /Count ${pageNums.length} >>`;

  /* binary-safe assembly */
  const enc = s => { const u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i) & 255; return u; };
  const chunks = []; let off = 0;
  const push = u => { chunks.push(u); off += u.length; };
  const offs = [];
  push(enc("%PDF-1.4\n"));
  objs.forEach((o, i) => {
    offs.push(off);
    if (o && o.img) {
      push(enc(`${i + 1} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${o.img.w} /Height ${o.img.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${o.img.bytes.length} >>\nstream\n`));
      push(o.img.bytes);
      push(enc("\nendstream\nendobj\n"));
    } else push(enc(`${i + 1} 0 obj\n${o}\nendobj\n`));
  });
  const xref = off;
  push(enc(`xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` + offs.map(o => String(o).padStart(10, "0") + " 00000 n \n").join("")));
  push(enc(`trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`));
  return new Blob(chunks, {type:"application/pdf"});
}

function downloadBlob(blob, name) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

/* ---------- Save contact as PDF ---------- */
function saveContact() {
  const e = emailOk(), site = pageUrl("");
  const items = [
    {t:"Mckenzie Genzie", s:26, b:1, c:PDF_ACC, r:100},
    {t:"Electrical and Communications Engineering Student", s:13, gap:4, r:100},
    {t:"Papua New Guinea University of Technology, Lae", s:11, c:PDF_GREY, r:100},
    {sp:12},
    {rule:1},
    {t:"CONTACT", s:10, b:1, c:PDF_ACC, gap:6},
    {t:"WhatsApp / phone: " + CONTACT.whatsappLabel, s:12, gap:6},
    {t:"Chat on WhatsApp: " + waLink(""), s:10.5, link:waLink(""), gap:2}
  ];
  if (e) items.push({t:"Email: " + e, s:12, link:"mailto:" + e, gap:8});
  items.push({t:"Location: Lae, Morobe, Papua New Guinea", s:12, gap:8});
  if (profileList().length) items.push({t:"ONLINE", s:10, b:1, c:PDF_ACC, gap:16});
  profileList().forEach(p => items.push({t:p.n + ": " + p.url, s:10.5, link:p.url, gap:6}));
  if (/^https?:/i.test(site)) items.push({t:"Portfolio website: " + site, s:10.5, link:site, gap:10});
  items.push({rule:1}, {t:"Student engineering portfolio. Projects are educational prototypes, not certified products.", s:9, c:PDF_GREY, gap:4});
  downloadBlob(buildPdf(items, "Mckenzie Genzie - Contact", getPortraitJpeg()), "Mckenzie-Genzie-Contact.pdf");
  toast("Contact PDF downloaded");
}

/* ---------- Download full portfolio as PDF ---------- */
function savePortfolio() {
  toast("Preparing portfolio PDF...");
  const e = emailOk(), site = pageUrl("");
  const items = [
    {t:"Mckenzie Genzie", s:28, b:1, c:PDF_ACC, r:100},
    {t:"Electrical and Communications Engineering Portfolio", s:13, gap:4, r:100},
    {t:"Papua New Guinea University of Technology, Lae", s:11, c:PDF_GREY, r:100},
    {sp:12},
    {rule:1},
    {t:"WhatsApp: " + CONTACT.whatsappLabel + (e ? "   |   Email: " + e : ""), s:10.5, gap:2}
  ];
  profileList().forEach(p => items.push({t:p.n + ": " + p.url, s:10, link:p.url, gap:3}));
  if (/^https?:/i.test(site)) items.push({t:"Website: " + site, s:10, link:site, gap:3});
  items.push({t:"ABOUT", s:10, b:1, c:PDF_ACC, gap:16}, {t:ABOUT_TEXT, gap:4});
  items.push({t:"TECHNICAL INTERESTS", s:10, b:1, c:PDF_ACC, gap:16});
  GROUPS.forEach(g => items.push({t:g.n + ": " + g.i.join(", "), gap:4}));

  const projItems = (p, n) => {
    const out = [
      {t:pad(n) + ". " + p.t, s:13, b:1, gap:16},
      {t:p.c + " - " + p.s, s:9.5, c:PDF_GREY},
      {t:p.d, gap:4}
    ];
    if (p.why) out.push({t:"Why it matters: " + p.why, gap:3});
    if (p.hw && p.hw.length) out.push({t:"Hardware: " + p.hw.join(", "), gap:3});
    if (p.sw && p.sw.length) out.push({t:"Software and technologies: " + p.sw.join(", "), gap:3});
    if (p.f && p.f.length) {
      out.push({t:(p.fh || "Demonstrated features") + ":", b:1, gap:3});
      p.f.forEach(f => out.push({t:"- " + f, x:10, gap:1}));
    }
    out.push({t:"Limitations: " + p.l, c:PDF_GREY, gap:4});
    KEYS.forEach(k => { if (p[k]) out.push({t:PLATFORMS[k].n + ": " + p[k], s:9.5, link:p[k], gap:2}); });
    if (p.news) out.push({t:"News feature: " + p.news, s:9.5, link:p.news, gap:2});
    return out;
  };
  items.push({rule:1}, {t:"TOP 3 PROJECTS", s:12, b:1, c:PDF_ACC, gap:4});
  PROJECTS.forEach((p, i) => { if (p.top) items.push(...projItems(p, i + 1)); });
  items.push({rule:1}, {t:"MORE PROJECTS", s:12, b:1, c:PDF_ACC, gap:4});
  PROJECTS.forEach((p, i) => { if (!p.top) items.push(...projItems(p, i + 1)); });

  items.push({rule:1}, {t:"MEDIA AND RECOGNITION", s:12, b:1, c:PDF_ACC, gap:4});
  NEWS.forEach(n => {
    items.push({t:n.source + " - " + n.title, s:11, b:1, gap:10});
    if (n.meta) items.push({t:n.meta, s:9.5, c:PDF_GREY});
    if (n.url) items.push({t:"Article: " + n.url, s:9.5, link:n.url, gap:2});
    if (n.facebook) items.push({t:"Facebook: " + n.facebook, s:9.5, link:n.facebook, gap:2});
    if (n.linkedin) items.push({t:"LinkedIn: " + n.linkedin, s:9.5, link:n.linkedin, gap:2});
  });

  items.push({rule:1}, {t:"Student engineering portfolio. Projects are educational prototypes, not certified products.", s:9, c:PDF_GREY, gap:4});
  downloadBlob(buildPdf(items, "Mckenzie Genzie - Engineering Portfolio", getPortraitJpeg()), "Mckenzie-Genzie-Portfolio.pdf");
  toast("Portfolio PDF downloaded");
}

/* ---------- live Lae clock ---------- */
function initClock() {
  const el = $("#clock");
  if (!el) return;
  let f;
  try { f = new Intl.DateTimeFormat("en-GB", {hour:"2-digit", minute:"2-digit", hour12:false, timeZone:"Pacific/Port_Moresby"}); } catch (e) { f = null; }
  const tick = () => { el.textContent = f ? f.format(new Date()) : new Date().toTimeString().slice(0, 5); };
  tick();
  setInterval(tick, 15000);
}

/* ---------- click ripple ---------- */
function initRipple() {
  if (reduce) return;
  document.addEventListener("pointerdown", e => {
    const b = e.target.closest(".btn");
    if (!b) return;
    const r = b.getBoundingClientRect(), s = Math.max(r.width, r.height) * 1.6;
    const sp = document.createElement("span");
    sp.className = "rip";
    sp.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
    b.appendChild(sp);
    setTimeout(() => sp.remove(), 650);
  });
}

/* ---------- heading decode effect ---------- */
function initScramble() {
  if (reduce) return;
  const chars = "01<>/#$%&*+=";
  const run = el => {
    const txt = el.dataset.t;
    let f = 0;
    const id = setInterval(() => {
      el.textContent = [...txt].map((c, i) => c === " " ? " " : (i < f / 1.5 ? c : chars[Math.floor(Math.random() * chars.length)])).join("");
      if (++f > txt.length * 1.5) { clearInterval(id); el.textContent = txt; }
    }, 28);
  };
  const io = new IntersectionObserver((es, o) => {
    es.forEach(e => { if (e.isIntersecting) { run(e.target); o.unobserve(e.target); } });
  }, {threshold:.6});
  $$("main h2").forEach(h => { h.dataset.t = h.textContent; h.setAttribute("aria-label", h.textContent); io.observe(h); });
}

function initLoader() {
  const l = $("#loader"), p = $("#ldPct"), m = $("#ldMsg");
  let n = 0;
  const hide = () => l.classList.add("done");
  const t = setInterval(() => {
    n = Math.min(100, n + Math.ceil(Math.random() * 12));
    p.textContent = n + "%";
    m.textContent = BOOT[Math.min(BOOT.length - 1, Math.floor(n / 26))];
    if (n >= 100) { clearInterval(t); setTimeout(hide, 250); }
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
  const conn = connectList();
  const ext = c => c.k === "email" ? "" : ' target="_blank" rel="noopener noreferrer"';
  $$("[data-profile-links]").forEach(box => {
    box.innerHTML = conn.map(c => `<a class="soc" href="${esc(c.url)}" style="--c:${c.c}" aria-label="${esc(c.n)}" title="${esc(c.n)}"${ext(c)}>${icon(c.i)}</a>`).join("");
  });
  $("#hub").innerHTML = conn.map(c => `<a class="hub-card" href="${esc(c.url)}" style="--c:${c.c}"${ext(c)}>${icon(c.i, "hc-ic")}<span class="hc-t"><b>${esc(c.n)}</b><small>${esc(c.sub)}</small></span>${icon("i-arrow", "hc-ar")}</a>`).join("");
  $$("[data-wa]").forEach(a => { a.href = waLink(DEFAULT_MSG); });

  $("#copyWa").addEventListener("click", () => copyText("+" + CONTACT.whatsapp, "Number copied"));
  $("#copyLink").addEventListener("click", () => copyText(pageUrl(""), "Site link copied"));
  $("#vcfBtn").addEventListener("click", saveContact);
  $("#vcfBtn2").addEventListener("click", saveContact);
  $("#pdfBtn").addEventListener("click", savePortfolio);
  $("#pdfBtn2").addEventListener("click", savePortfolio);
  const e = emailOk(), cp = $("#copyEmail");
  if (e) { cp.hidden = false; cp.addEventListener("click", () => copyText(e, "Email copied")); }

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
  $("#yr").textContent = new Date().getFullYear();
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
}

/* ---------- news and media cards ---------- */
function initNews() {
  const box = $("#newsGrid");
  if (!box) return;
  box.innerHTML = NEWS.map(n => {
    const btns = [];
    if (n.url) btns.push(`<a class="btn sm primary" href="${esc(n.url)}" target="_blank" rel="noopener noreferrer">${icon("i-arrow")}Read article</a>`);
    if (n.linkedin) btns.push(`<a class="btn sm li" href="${esc(n.linkedin)}" target="_blank" rel="noopener noreferrer">${icon("i-li")}LinkedIn</a>`);
    if (n.facebook) btns.push(`<a class="btn sm fb" href="${esc(n.facebook)}" target="_blank" rel="noopener noreferrer">${icon("i-fb")}Facebook</a>`);
    return `<article class="ncard reveal">
      ${photo(cands(n.img), n.source)}
      <span class="tag n-src">${esc(n.source)}</span>
      <h3>${esc(n.title)}</h3>
      ${n.meta ? `<p class="mono">${esc(n.meta)}</p>` : ""}
      <p class="muted">${esc(n.d)}</p>
      <div class="n-links">${btns.length ? btns.join("") : '<span class="muted soon">Links coming soon</span>'}</div>
    </article>`;
  }).join("");
}

function initName() {
  const h = $("#name");
  let k = 0;
  h.innerHTML = h.dataset.name.split("|").map(w => `<span class="w" aria-hidden="true">${[...w].map(ch => `<span class="c" style="animation-delay:${(0.9 + (k++) * 0.045).toFixed(3)}s">${esc(ch)}</span>`).join("")}</span>`).join("");
}

function initNav() {
  const btn = $("#menuBtn"), menu = $("#menu"), nav = $("#nav"), top = $("#toTop"), prg = $("#prg");
  const C = 2 * Math.PI * 19;
  prg.style.strokeDasharray = C; prg.style.strokeDashoffset = C;
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
    const r = max > 0 ? Math.min(1, scrollY / max) : 0;
    $("#bar").style.width = (r * 100) + "%";
    prg.style.strokeDashoffset = C * (1 - r);
    tick = false;
  };
  addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, {passive:true});
  onScroll();
  top.addEventListener("click", () => scrollTo({top:0, behavior: reduce ? "auto" : "smooth"}));
  const ids = ["top","about","skills","projects","media","education","contact"];
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
function initStats() {
  $("#sProjects").dataset.count = PROJECTS.length;
  $("#sCats").dataset.count = new Set(PROJECTS.map(p => p.c)).size;
  $("#sSkills").dataset.count = INTERESTS.length;
  $("#sVideos").dataset.count = linkCount();
  const io = new IntersectionObserver((es, o) => {
    es.forEach(e => { if (e.isIntersecting) { countUp(e.target); o.unobserve(e.target); } });
  }, {threshold:.5});
  $$("[data-count]").forEach(el => io.observe(el));
}

function initTilt() {
  if (!fine || reduce) return;
  [$("#topGrid"), $("#grid")].forEach(grid => {
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
  });
  const wrap = $("#portraitWrap"), img = $("#portrait");
  wrap.addEventListener("pointermove", e => {
    const r = wrap.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    img.style.transform = `rotateY(${(x * 10).toFixed(2)}deg) rotateX(${(-y * 10).toFixed(2)}deg)`;
  });
  wrap.addEventListener("pointerleave", () => { img.style.transform = ""; });
}

function initMagnet() {
  if (!fine || reduce) return;
  $$(".btn.primary,.btn.wa,.fab,.soc").forEach(el => {
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * .18, y = (e.clientY - r.top - r.height / 2) * .25;
      el.style.translate = x.toFixed(1) + "px " + y.toFixed(1) + "px";
    });
    el.addEventListener("pointerleave", () => { el.style.translate = ""; });
  });
}

function initSpot() {
  if (!fine || reduce) return;
  const s = $("#spot");
  let raf = 0, x = 0, y = 0;
  addEventListener("pointermove", e => {
    x = e.clientX; y = e.clientY;
    if (!raf) raf = requestAnimationFrame(() => {
      s.style.setProperty("--sx", x + "px");
      s.style.setProperty("--sy", y + "px");
      s.classList.add("on");
      raf = 0;
    });
  }, {passive:true});
  document.addEventListener("pointerleave", () => s.classList.remove("on"));
}

function initFx() {
  const btn = $("#fxBtn");
  if (reduce) { btn.hidden = true; return; }
  const c = $("#fx"), x = c.getContext("2d");
  const dpr = Math.min(devicePixelRatio || 1, 2);
  let w = 0, h = 0, pts = [], raf = 0, on = true;
  try { if (localStorage.getItem("fx") === "off") on = false; } catch (e) {}
  const build = () => {
    w = innerWidth; h = innerHeight;
    c.width = w * dpr; c.height = h * dpr;
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(64, Math.max(16, w * h / 24000)));
    pts = Array.from({length:n}, () => ({x:Math.random() * w, y:Math.random() * h, vx:(Math.random() - .5) * .35, vy:(Math.random() - .5) * .35}));
  };
  const frame = () => {
    x.clearRect(0, 0, w, h);
    const a = root.dataset.theme === "light" ? .35 : .6;
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
  const start = () => { if (!raf) { c.style.display = ""; raf = requestAnimationFrame(frame); } };
  const stop = () => { cancelAnimationFrame(raf); raf = 0; x.clearRect(0, 0, w, h); c.style.display = "none"; };
  const apply = () => { btn.setAttribute("aria-pressed", on); on ? start() : stop(); };
  fxApi = {toggle() { on = !on; try { localStorage.setItem("fx", on ? "on" : "off"); } catch (e) {} apply(); toast(on ? "Particles on" : "Particles off"); }};
  btn.addEventListener("click", () => fxApi.toggle());
  build();
  let lastW = innerWidth, rt = 0;
  addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(() => { if (innerWidth !== lastW) { lastW = innerWidth; build(); } }, 200);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else if (on) start();
  });
  apply();
}

function initSkills() {
  $("#skillGrid").innerHTML = GROUPS.map(g => `<div class="sk"><h3>${esc(g.n)}</h3><ul class="chips">${g.i.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("");
  const words = INTERESTS.map(i => `<span>${esc(i)}</span>`).join("");
  $("#track").innerHTML = words + words;
}

function cardHtml(p, i) {
  return `
      <button class="card${p.top ? " top" : ""}" style="animation-delay:${Math.min(i, 8) * 50}ms" data-id="${p.id}" aria-label="Open ${esc(p.t)}">
        <span class="idx">${pad(PROJECTS.indexOf(p) + 1)}</span>
        ${photo(cands(p.pic), p.t)}
        <span class="badges" style="margin:0;padding:0"><span class="tag">${esc(p.c)}</span>${p.top ? '<span class="tag feat">Top project</span>' : ""}</span>
        <h3>${esc(p.t)}</h3>
        <span class="muted">${esc(p.d)}</span>
        <span class="badges">
          ${p.tiktok ? '<span class="tag tt">TikTok</span>' : ""}
          ${p.linkedin ? '<span class="tag li">LinkedIn</span>' : ""}
          ${p.facebook ? '<span class="tag fb">Facebook</span>' : ""}
          <span class="tag">Case study →</span>
        </span>
      </button>`;
}

function initProjects() {
  const others = PROJECTS.filter(p => !p.top);
  const cats = ["All", "Has video", ...new Set(others.map(p => p.c))];
  const fb = $("#filters"), grid = $("#grid"), topGrid = $("#topGrid"), search = $("#search"), empty = $("#empty"), count = $("#pCount");
  let current = "All", q = "";
  const match = p => current === "All" ? true : current === "Has video" ? KEYS.some(k => p[k]) : p.c === current;
  const drawFilters = () => { fb.innerHTML = cats.map(c => `<button class="btn sm" aria-pressed="${c === current}" data-c="${esc(c)}">${esc(c)}</button>`).join(""); };
  topGrid.innerHTML = PROJECTS.filter(p => p.top).map(cardHtml).join("");
  const drawGrid = () => {
    const items = others.filter(p => match(p) && (!q || [p.t, p.d, p.c, p.hw.join(" "), p.sw.join(" ")].join(" ").toLowerCase().includes(q)));
    empty.hidden = items.length > 0;
    count.textContent = items.length + " / " + others.length;
    grid.innerHTML = items.map(cardHtml).join("");
  };
  fb.addEventListener("click", e => { const b = e.target.closest("[data-c]"); if (b) { current = b.dataset.c; drawFilters(); drawGrid(); } });
  search.addEventListener("input", () => { q = search.value.trim().toLowerCase(); drawGrid(); });
  [topGrid, grid].forEach(g => g.addEventListener("click", e => { const b = e.target.closest(".card"); if (b) openProject(b.dataset.id, b); }));
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
  const o = KEYS.filter(k => p[k]).map(k => `<a class="btn sm ${CLS[k]}" href="${esc(p[k])}" target="_blank" rel="noopener noreferrer">${icon(PLATFORMS[k].i)}${k === "linkedin" ? "View on LinkedIn" : "Watch on " + PLATFORMS[k].n}</a>`);
  if (p.news) o.push(`<a class="btn sm" href="${esc(p.news)}" target="_blank" rel="noopener noreferrer">${icon("i-arrow")}Read news feature</a>`);
  o.push(`<a class="btn sm wa" href="${esc(waLink('Hi Mckenzie, I saw your project "' + p.t + '" on your portfolio and I have a question.'))}" target="_blank" rel="noopener noreferrer">${icon("i-wa")}Ask on WhatsApp</a>`);
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
    <h3>Overview</h3><p>${esc(p.d)}</p>
    ${p.why ? `<h3>Why it matters</h3><p>${esc(p.why)}</p>` : ""}
    <h3>Hardware</h3>${chips(p.hw)}
    <h3>Software and technologies</h3>${chips(p.sw)}
    <h3>${esc(p.fh || "Demonstrated features")}</h3>${list(p.f)}
    <h3>Limitations and honest notes</h3><div class="note-box"><p>${esc(p.l)}</p></div>
    <h3>Motivation, testing, lessons learned, future improvements</h3><p class="muted">To be added from real test records.</p>`;
  setView(0);
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
    if (lb.open || ["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
    if (e.key === "ArrowRight") nav(1);
    else if (e.key === "ArrowLeft") nav(-1);
    else if (["1","2","3","4"].includes(e.key)) setView(+e.key - 1);
  });
  let sx = 0, sy = 0;
  d.addEventListener("touchstart", e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, {passive:true});
  d.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (lb.open) return;
    if (Math.abs(dx) > 90 && Math.abs(dx) > Math.abs(dy) * 2) nav(dx < 0 ? 1 : -1);
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
    ...[["top","Home"],["about","About"],["skills","Skills"],["projects","Projects"],["media","Media"],["education","Education"],["contact","Contact"]]
      .map(([id, n]) => ({n:"Go to " + n, k:"Section", run:() => go(id)})),
    {n:"Chat on WhatsApp", k:"Contact", run:() => window.open(waLink("Hi Mckenzie, I found your engineering portfolio."), "_blank", "noopener,noreferrer")},
    ...(mail ? [{n:"Email me", k:"Contact", run:() => { location.href = "mailto:" + mail; }}, {n:"Copy email address", k:"Contact", run:() => copyText(mail, "Email copied")}] : []),
    {n:"Copy WhatsApp number", k:"Contact", run:() => copyText("+" + CONTACT.whatsapp, "Number copied")},
    {n:"Save contact card (PDF)", k:"Contact", run:saveContact},
    {n:"Download portfolio (PDF)", k:"Contact", run:savePortfolio},
    {n:"Toggle light / dark theme", k:"Action", run:() => setTheme(root.dataset.theme === "light" ? "dark" : "light")},
    {n:"Next accent colour", k:"Action", run:() => { const ks = Object.keys(ACCENTS); setAccent(ks[(ks.indexOf(accentKey) + 1) % ks.length]); }},
    {n:"Toggle particle effects", k:"Action", run:() => { if (fxApi) fxApi.toggle(); else toast("Effects disabled by your system"); }},
    {n:"Share this site", k:"Action", run:() => shareLink(pageUrl(""), "Mckenzie GENZIE | Engineering Portfolio", "Engineering projects by Mckenzie Genzie")},
    ...profileList().map(l => ({n:"Open " + l.n, k:"Link", run:() => window.open(l.url, "_blank", "noopener,noreferrer")})),
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
  $("#kBtn").addEventListener("click", () => { if ($("#menuBtn").getAttribute("aria-expanded") === "true") $("#menuBtn").click(); open(); });
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
initSkills(); initProjects(); initNews(); initStats(); initDialogs(); initPalette(); initTilt();
initMagnet(); initSpot(); initReveal(); initFx(); initDeepLink(); initClock(); initRipple(); initScramble();
