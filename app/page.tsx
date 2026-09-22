"use client"
import { useState } from 'react'

const WHATSAPP = '237681371599'
const WHATSAPP_DISPLAY = '+237 681 37 15 99 / +237 698 32 42 49'

const services = [
  { id: 'live-chat', title: 'Live Chat & Omnichannel Support', desc: 'Real-time support across chat, WhatsApp, Facebook, Instagram, email', icon: '💬', features: ['Zendesk / Intercom / Freshdesk', '80+ interactions / shift', 'First response < 2 min', 'EN/FR bilingual'], price: 'From $15/hr' },
  { id: 'email-ticket', title: 'Email & Ticket Management', desc: 'Inbox zero, SLA compliance, ticket triage & resolution', icon: '🎫', features: ['Salesforce / HubSpot / Zoho', 'SLA & escalation handling', 'Knowledge base creation', 'Follow-up till closure'], price: 'From $12/hr' },
  { id: 'technical', title: 'Technical Troubleshooting', desc: 'Deep technical debugging for SaaS, e-commerce, APIs, payments', icon: '🛠️', features: ['API, SQL, browser devtools', 'MTN / Orange Money / Stripe / PayPal', 'Root-cause analysis', 'Bug repro & Jira docs'], price: 'From $18/hr' },
  { id: 'cx-lead', title: 'CX Leadership & Team Training', desc: 'Build SOPs, FAQs, CSAT/NPS improvement plans', icon: '📈', features: ['20+ FAQ templates (35% deflection)', 'CSAT 90%+, NPS 32→58', 'KPI dashboards', 'Team coaching & QA'], price: 'Project-based' },
  { id: 'account', title: 'B2B Account Support', desc: 'Dedicated account management for B2B clients', icon: '🤝', features: ['High-value client retention', 'Complaint handling & recovery', 'Upsell support', 'Weekly reporting'], price: 'Retainer' },
  { id: 'fulltime', title: 'Full-time Remote Support Rep', desc: 'Available for long-term remote roles — US/EU time overlap', icon: '🌍', features: ['Full-time 40h/week', 'Remote, Yaoundé (GMT+1)', 'Tools: Slack, Teams, Zoom', 'Immediate start'], price: "Let's talk" },
]

export default function Page() {
  const [selected, setSelected] = useState<string[]>([])
  const [form, setForm] = useState({name:'', email:'', message:''})

  const toggle = (id:string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id])
  }

  const selectedTitles = selected.map(id => services.find(s=>s.id===id)?.title).filter(Boolean).join(', ')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hi Larry, I'm ${form.name} (${form.email}). Services: ${selectedTitles || 'General support inquiry'}. Message: ${form.message}`
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 antialiased">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center font-bold text-[14px]">LC</div>
            <div className="leading-tight"><div className="font-bold text-[14px]">Lateh Larry-Collins</div><div className="text-[11px] text-slate-500 tracking-wide uppercase">Customer Support • Yaoundé</div></div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium text-slate-600">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">EN / FR Bilingual</span>
            <a href={`https://wa.me/${WHATSAPP}?text=Hi%20Larry%2C%20I%20saw%20your%20support%20portfolio`} target="_blank" className="inline-flex h-9 px-4 items-center justify-center rounded-full bg-[#25D366] text-white text-[13px] font-semibold hover:opacity-90">WhatsApp</a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1180px] px-6 lg:px-8 pt-12 lg:pt-20 pb-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Available for remote roles • GMT+1 overlap with EU/US
          </div>
          <h1 className="mt-6 text-[36px] lg:text-[52px] font-[800] leading-[0.95] tracking-tight">
            Customer Service<br /><span className="text-slate-400">& Technical Support</span><br />that <span className="relative inline-block"><span className="relative z-10">retains customers</span><span className="absolute bottom-1 left-0 right-0 h-3 bg-teal-200/70 -z-0" /></span>
          </h1>
          <p className="mt-5 text-[16px] leading-7 text-slate-600 max-w-[58ch]">
            I’m <b>Lateh Larry-Collins Aka</b> — 6+ years across customer service, technical support, client support, and software engineering. I handled <b>80+ omnichannel interactions per shift</b> (live chat, email, WhatsApp, Facebook, Instagram), cutting average resolution from <b>25 min → 8 min</b> while keeping <b>90%+ CSAT</b> and lifting NPS <b>32 → 58</b>. Bilingual: English & French.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[['80+/shift','Interactions'],['25→8 min','Resolution'],['90%+ CSAT','Satisfaction'],['NPS 32→58','Growth']].map(([k,v])=>(
              <div key={k} className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm"><div className="text-[18px] font-bold">{k}</div><div className="text-[11px] uppercase tracking-widest text-slate-500 mt-1">{v}</div></div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="h-11 px-6 inline-flex items-center justify-center rounded-full bg-slate-900 text-white text-[14px] font-semibold">Hire me for support</a>
            <a href="/Larry-Collins_Aka_CV.pdf" download className="h-11 px-6 inline-flex items-center justify-center rounded-full bg-white border border-slate-200 text-[14px] font-semibold">Download CV</a>
            <a href="https://linkedin.com/in/latch-larry-collins-aka-58505a42" target="_blank" className="h-11 px-5 inline-flex items-center justify-center rounded-full bg-white border border-slate-200 text-[13px] font-medium">LinkedIn</a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] text-slate-600">
            <span>📍 Yaoundé, Cameroon</span><a href="tel:+237681371599" className="hover:text-slate-900">📞 {WHATSAPP_DISPLAY}</a><a href="mailto:clatchlarry@gmail.com" className="hover:text-slate-900">✉️ clatchlarry@gmail.com</a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[24px] bg-white border border-slate-200 p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
            <div className="flex items-center justify-between"><h3 className="font-bold">Quick contact</h3><span className="text-[11px] px-2 py-1 rounded-full bg-slate-100">Reply &lt; 1h</span></div>
            <div className="mt-4 grid gap-2">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" className="flex items-center justify-between rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 p-3.5 hover:bg-[#25D366]/15"><div className="flex items-center gap-3"><div className="h-9 w-9 rounded-full bg-[#25D366] text-white grid place-items-center text-[12px] font-bold">WA</div><div><div className="font-semibold text-[13px]">WhatsApp me</div><div className="text-[12px] text-slate-600">{WHATSAPP_DISPLAY}</div></div></div><span>→</span></a>
              <a href="mailto:clatchlarry@gmail.com" className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 p-3.5 hover:bg-white"><div className="flex items-center gap-3"><div className="h-9 w-9 rounded-full bg-slate-900 text-white grid place-items-center">✉️</div><div><div className="font-semibold text-[13px]">Email</div><div className="text-[12px] text-slate-600">clatchlarry@gmail.com</div></div></div><span>→</span></a>
              <div className="rounded-xl bg-slate-900 text-white p-4"><div className="text-[11px] uppercase tracking-widest opacity-70">Support pitch</div><p className="mt-2 text-[13px] leading-6">“I don’t just close tickets. I reduce them. 20+ FAQ templates cut repetitive inquiries by 35% and AI-assisted workflows improved handling time by 40%.”</p></div>
            </div>
          </div>
          <div className="rounded-[20px] bg-teal-600 text-white p-5"><div className="text-[12px] uppercase tracking-widest opacity-80">Bilingual Support</div><div className="mt-2 font-semibold">English • Français • Full professional proficiency</div><div className="mt-2 text-[13px] opacity-90 leading-6">Serve customers in both languages, write knowledge base articles in EN/FR, handle translation for West/Central Africa markets.</div></div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-[1180px] px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div><h2 className="text-[28px] font-bold tracking-tight">Selectable service options</h2><p className="mt-2 text-[14px] text-slate-600 max-w-[60ch]">Pick one or more services. The contact form below auto-fills your selection so I can quote you instantly on WhatsApp/email.</p></div>
          <div className="text-[12px] text-slate-500">Select → Contact → I reply on WhatsApp in &lt;1h</div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(s => {
            const isSelected = selected.includes(s.id)
            return (
              <div key={s.id} onClick={()=>toggle(s.id)} className={`group relative rounded-[20px] bg-white border p-5 shadow-sm hover:shadow-md cursor-pointer transition-all ${isSelected ? 'border-teal-500 ring-2 ring-teal-500/20' : 'border-slate-200'}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-200 grid place-items-center text-[20px]">{s.icon}</div>
                  <div className="flex items-center gap-2"><span className="text-[11px] font-bold px-2 py-1 rounded-full bg-slate-900 text-white">{s.price}</span><span className={`h-5 w-5 rounded-full border grid place-items-center text-[10px] ${isSelected ? 'bg-teal-600 border-teal-600 text-white' : 'border-slate-300 text-transparent'}`}>✓</span></div>
                </div>
                <h3 className="mt-4 font-bold text-[15px]">{s.title}</h3><p className="mt-1 text-[13px] leading-6 text-slate-600">{s.desc}</p>
                <ul className="mt-3 space-y-1">{s.features.map(f=>(<li key={f} className="text-[12px] text-slate-600 flex gap-2"><span className="text-teal-600">•</span>{f}</li>))}</ul>
                <div className={`mt-4 text-[11px] font-semibold tracking-wide uppercase ${isSelected ? 'text-teal-600' : 'text-slate-400'}`}>{isSelected ? 'Selected ✓' : 'Click to select'}</div>
              </div>
            )
          })}
        </div>
      </section>

      <section id="skills" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8 py-12">
          <h2 className="text-[22px] font-bold">Support technology ecosystem</h2>
          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            {[
              ['Helpdesk','Zendesk, Intercom, Freshdesk, Help Scout, Zoho Desk'],
              ['CRM','Salesforce, HubSpot CRM, Zoho CRM'],
              ['Communication','Slack, Discord, Microsoft Teams, Google Workspace, Zoom'],
              ['Knowledge Base','Notion, Google Docs, Confluence-style docs, Excel, Word'],
              ['Issue Tracking','Jira, GitHub, Postman, Browser DevTools, SQL'],
              ['Support KPIs','CSAT, NPS, FRT, ART, FCR, Ticket Volume, SLA Compliance, Escalation Rate'],
            ].map(([title, tools])=>(
              <div key={title} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5"><div className="text-[11px] font-bold tracking-widest uppercase text-slate-500">{title}</div><div className="mt-2 text-[13px] leading-6 font-medium">{tools}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-[1180px] px-6 lg:px-8 py-12">
        <h2 className="text-[28px] font-bold tracking-tight">Professional experience — support impact first</h2>
        <div className="mt-8 relative border-l border-slate-200 ml-3 pl-8 space-y-8">
          <div className="relative rounded-2xl bg-white border border-teal-200 p-5 -ml-2 shadow-sm"><div className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-teal-600 ring-4 ring-white" /><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-bold">Customer Experience Lead & Support Specialist <span className="font-medium text-slate-500">— K-Empire Night Club • Yaoundé</span></h3><span className="text-[11px] px-2 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700">2019 – 2021 • Featured</span></div><ul className="mt-2 list-disc pl-5 space-y-1 text-[13px] leading-6 text-slate-700"><li>80+ interactions/shift: live chat, email, WhatsApp, Facebook, Instagram</li><li>VIP account handling, reduced resolution 25→8 min, 90%+ CSAT</li><li>NPS 32→58, 20+ FAQ templates -35% repetitive inquiries</li><li>AI tools +40% handling efficiency</li></ul></div>
          <div className="relative"><div className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-slate-900 ring-4 ring-white" /><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-bold">Lead Software Engineer <span className="font-medium text-slate-500">— Fortune Techies • Yaoundé</span></h3><span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 border border-slate-200">Jun 2024 – Present</span></div><ul className="mt-2 list-disc pl-5 space-y-1 text-[13px] leading-6 text-slate-700"><li>Support web app delivery — translate customer needs into fixes</li><li>Test plans removed 40% redundancy, reusable components -50% build time</li></ul></div>
          <div className="relative"><div className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-slate-900 ring-4 ring-white" /><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-bold">Customer Support & Account Manager <span className="font-medium text-slate-500">— CAMITEX</span></h3><span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 border border-slate-200">2018 – 2023</span></div><ul className="mt-2 list-disc pl-5 space-y-1 text-[13px] leading-6 text-slate-700"><li>B2B customer support, account retention</li></ul></div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8 py-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <div>
            <h2 className="text-[30px] font-bold tracking-tight leading-[1.1]">Let’s fix support,<br />keep customers.</h2>
            <p className="mt-4 text-[14px] leading-7 text-slate-300">I’m based in Yaoundé (GMT+1) and work remote with EU/US overlap. Fast reply on WhatsApp.</p>
            <div className="mt-6 space-y-3 text-[14px]">
              <div className="flex items-center gap-3"><span className="h-8 w-8 rounded-full bg-white/10 grid place-items-center">📍</span>Yaoundé, Cameroon — Remote worldwide</div>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" className="flex items-center gap-3 hover:text-white text-slate-200"><span className="h-8 w-8 rounded-full bg-[#25D366] grid place-items-center text-white text-[12px] font-bold">WA</span>{WHATSAPP_DISPLAY} — WhatsApp</a>
            </div>
            <div className="mt-8 flex gap-3"><a href={`https://wa.me/${WHATSAPP}?text=Hi%20Larry%2C%20I%20need%20support%20help%20for...`} target="_blank" className="h-11 px-6 rounded-full bg-[#25D366] text-white font-semibold inline-flex items-center">Message on WhatsApp</a></div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-[20px] bg-white text-slate-900 p-6 shadow-xl">
            <h3 className="font-bold text-[18px]">Send inquiry — auto-fills WhatsApp</h3>
            <p className="mt-1 text-[12px] text-slate-500">Select services above, fill this, I’ll get it on WhatsApp instantly.</p>
            <div className="mt-5 grid gap-4">
              <div><label className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Your name</label><input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Jane Doe / Company" className="mt-1 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 h-11 text-[14px] outline-none focus:border-slate-900" /></div>
              <div><label className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Work email</label><input type="email" required value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="you@company.com" className="mt-1 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 h-11 text-[14px] outline-none focus:border-slate-900" /></div>
              <div><label className="text-[11px] font-bold uppercase tracking-widest text-slate-500">What do you need?</label><textarea required value={form.message} onChange={e=>setForm({...form, message:e.target.value})} rows={4} placeholder="Tell me about channels, volume, KPIs, tools..." className="mt-1 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[14px] outline-none focus:border-slate-900 resize-none" /></div>
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-[11px] text-slate-600">Selected services: <span className="font-semibold text-slate-900">{selectedTitles || 'None yet — tick boxes above'}</span></div>
              <button type="submit" className="h-12 rounded-full bg-slate-900 text-white font-semibold hover:bg-black">Send via WhatsApp →</button>
            </div>
          </form>
        </div>
        <div className="border-t border-white/10"><div className="mx-auto max-w-[1180px] px-6 lg:px-8 h-[56px] flex items-center justify-between text-[12px] text-slate-400"><span>© {new Date().getFullYear()} Lateh Larry-Collins — Support Specialist</span><span className="hidden sm:inline">Built for Vercel • Next.js 14 • EN/FR • {WHATSAPP_DISPLAY}</span></div></div>
      </section>
    </main>
  )
}
