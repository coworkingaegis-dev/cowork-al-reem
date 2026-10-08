import { useEffect, useRef, useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import { testimonials, faqs, images, BUSINESS } from '../data/content'
import { PhoneLink } from './Navbar'

const initials = (n) => n.split(' ').map((p) => p[0]).slice(0, 2).join('')
const N = testimonials.length
const DURATION = 7000

// One large quote at a time, with a progress ring that advances to the next review
export function Reviews() {
  const [i, setI] = useState(0)
  const [pause, setPause] = useState(false)
  useEffect(() => {
    if (pause || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setI((x) => (x + 1) % N), DURATION)
    return () => clearTimeout(t)
  }, [i, pause])
  return (
    <section className="reviews sec" id="reviews" aria-labelledby="rev-title" onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}>
      <div className="wrap rv-wrap">
        <div className="rv-head">
          <p className="kicker">Reviews</p>
          <h2 id="rev-title">Looking for the best coworking space Al Reem Island offers? Hear it from members</h2>
          <p>Two of our member reviews, word for word — <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">read more on Google</a>.</p>
        </div>
        <div className="rv-stage" aria-live="polite">
          <span className="rv-mark" aria-hidden="true">“</span>
          {testimonials.map((r, k) => (
            <figure key={r.name} className={`rv-fig ${k === i ? 'on' : ''}`} aria-hidden={k !== i}>
              <blockquote><p>{r.quote}</p></blockquote>
              <figcaption><b>{r.name}</b><span>{r.role}</span></figcaption>
            </figure>
          ))}
        </div>
        <div className="rv-people" role="group" aria-label="Choose a review">
          {testimonials.map((p, k) => (
            <button key={p.name} type="button" className={k === i ? 'on' : ''} aria-pressed={k === i} onClick={() => { setI(k); setPause(true) }} aria-label={`${initials(p.name)}: review by ${p.name}`}>
              <svg className="rv-ring" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="22" style={{ animationDuration: `${DURATION}ms`, animationPlayState: pause ? 'paused' : 'running' }} key={k === i ? `on${i}` : 'off'} /></svg>
              <span aria-hidden="true">{initials(p.name)}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export function NearADGM() {
  const [mapOn, setMapOn] = useState(false)
  return (
    <section className="near sec" id="near-adgm" aria-labelledby="near-title">
      <div className="wrap near-grid">
        <div className="near-map">
          {mapOn ? (
            <iframe title="Map of Aegis coworking space, Addax Tower, Al Reem Island, ADGM" src={BUSINESS.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          ) : (
            <button type="button" className="map-facade" onClick={() => setMapOn(true)}>
              <img src={images.receptionImg} alt="" width="900" height="675" loading="lazy" decoding="async" />
              <svg className="route" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true"><path d="M-10 270 C 80 250, 90 160, 170 170 S 260 110, 200 120" /></svg>
              <span className="map-pin" aria-hidden="true"><Icon name="pin" size={22} strokeWidth={1.8} /></span>
              <span className="map-tag"><b>Addax Tower, Level 38</b><small>Al Reem Island · ADGM</small></span>
              <span className="map-load">Load interactive map</span>
            </button>
          )}
        </div>
        <Reveal variant="up">
          <p className="kicker">Location</p>
          <h2 id="near-title">Searching for a coworking space near ADGM? You’re already inside.</h2>
          <p className="near-sub">
            Plenty of people look for a coworking space near Abu Dhabi Global Market — but Addax Tower on Al Reem Island
            is inside the ADGM jurisdiction. That makes Aegis a coworking space ADGM members can name as their workplace,
            a coworking space in Abu Dhabi with a genuine space in ADGM, and a coworking space Abu Dhabi visitors reach on
            the island.
          </p>
          <dl className="nap">
            <div><dt>Address</dt><dd>{BUSINESS.name}, {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.country}</dd></div>
            <div><dt>Phone</dt><dd><PhoneLink>{BUSINESS.phoneDisplay}</PhoneLink></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></dd></div>
            <div><dt>Tours</dt><dd>Monday–Friday, 9 AM–6 PM</dd></div>
          </dl>
          <div className="near-ctas">
            <a className="btn btn-olive" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}


// Accordion with smooth height (answers stay in the HTML for crawlers)
export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="faq sec" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-side">
          <p className="kicker">FAQ</p>
          <h2 id="faq-title">Coworking space questions, answered</h2>
          <p>Can’t find yours? We usually reply on WhatsApp within the hour during business hours.</p>
          <a className="btn btn-olive" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={f.q} className={`fq ${open === i ? 'open' : ''}`}>
              <h3>
                <button type="button" id={`fq-b${i}`} aria-expanded={open === i} aria-controls={`fq-p${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className="fq-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span className="fq-q">{f.q}</span>
                  <span className="fq-ic" aria-hidden="true" />
                </button>
              </h3>
              <div className="fq-panel" id={`fq-p${i}`} role="region" aria-labelledby={`fq-b${i}`}>
                <div className="fq-inner">
                  <p>{f.a}</p>
                  {f.link && <p><a href={f.link.url}>{f.link.text}</a></p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  const band = 'Coworking space Al Reem Island · Level 38 · Addax Tower · ADGM · '
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="final-band" aria-hidden="true"><div className="fb-track"><span>{band}{band}</span><span>{band}{band}</span></div></div>
      <div className="wrap">
        <Reveal className="final-card" variant="up">
          <p className="kicker kicker-light">Book a tour</p>
          <h2 id="final-title">Come and see the light on Level 38</h2>
          <p>Tour the coworking space Monday to Friday, 9 AM–6 PM — or get a video walkthrough on WhatsApp today.</p>
          <div className="final-actions">
            <a className="btn btn-ochre" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to book a tour of the coworking space on Al Reem Island.')}`} target="_blank" rel="noopener noreferrer">Book my tour</a>
            <PhoneLink className="btn btn-outline-light"><Icon name="phone" size={16} />{BUSINESS.phoneDisplay}</PhoneLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function WhatsAppFab() {
  return (
    <a className="wa-fab" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Aegis Coworking on WhatsApp">
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.5 5.5 4.9 2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </a>
  )
}
