import { useEffect, useRef, useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import { sections, spaces, plans, amenities, gallery, images, MAIN_SITE, BUSINESS } from '../data/content'

const wa = (t) => `${BUSINESS.whatsapp}?text=${encodeURIComponent(t)}`
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Writes scroll progress of an element (0 → 1 while it crosses the viewport) to a CSS var
function useScrollProgress(name, { start = 0.9, end = 0.35 } = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || reduced()) return
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = (vh * start - r.top) / (vh * start - vh * end + r.height * 0.6)
      el.style.setProperty(name, Math.min(1, Math.max(0, p)).toFixed(3))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [name, start, end])
  return ref
}

const statement = 'Aegis is a coworking space in Al Reem Island on Level 38 of Addax Tower — a coworking office Al Reem Island founders, freelancers and small teams share, inside the Abu Dhabi Global Market.'

export function Intro() {
  const ref = useScrollProgress('--p', { start: 0.85, end: 0.3 })
  const words = statement.split(' ')
  return (
    <section className="intro sec" aria-labelledby="intro-title">
      <div className="wrap">
        <p className="kicker">Coworking space Al Reem Island</p>
        <h2 id="intro-title" className="sr-only">What is the coworking space on Al Reem Island?</h2>
        <p className="statement" ref={ref} style={{ '--n': words.length }}>
          {words.map((wd, i) => <span key={i} style={{ '--i': i }}>{wd} </span>)}
        </p>
        <div className="intro-grid">
          <Reveal variant="up">
            <p className="answer">
              The coworking space Al Reem Island Abu Dhabi professionals use at Aegis is a shared office Al Reem Island
              members join by the day or month: a hot desk Al Reem Island freelancers book for AED 1,000, a dedicated
              desk Al Reem Island startups keep for AED 1,150 and private offices from AED 4,500 — with WiFi, coffee and
              meeting room credits included.
            </p>
          </Reveal>
          <Reveal variant="up" delay={120}>
            <p>
              It is flexible workspace Al Reem Island companies grow in, and coworking offices Al Reem Island teams can
              upgrade into without changing buildings — the coworking space Addax Tower is known for, run by{' '}
              <a href={`${MAIN_SITE}/`}>Aegis Coworking</a>. Need desk space Al Reem Island style for one day? A day pass
              is AED 100.
            </p>
            <nav className="toc" aria-label="On this page">
              {sections.map((s) => <a key={s.id} href={`#${s.id}`}>{s.label}</a>)}
            </nav>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// Big list of spaces; hovering a row shows a floating photo that follows the cursor
export function Spaces() {
  const [act, setAct] = useState(-1)
  const boxRef = useRef(null)
  const move = (e) => {
    const el = boxRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--fx', `${e.clientX - r.left}px`)
    el.style.setProperty('--fy', `${e.clientY - r.top}px`)
  }
  return (
    <section className="spaces sec" id="spaces" aria-labelledby="spaces-title">
      <div className="wrap">
        <div className="head head-row">
          <div>
            <p className="kicker">Spaces</p>
            <h2 id="spaces-title">Six ways to work in our coworking space in Addax Tower</h2>
          </div>
          <p>From a coworking desk Al Reem Island visitors use for a day to a private office for your team — hover a space to see it.</p>
        </div>
        <div className={`sp-box ${act >= 0 ? 'has-act' : ''}`} ref={boxRef} onPointerMove={move} onPointerLeave={() => setAct(-1)}>
          <div className="sp-float" aria-hidden="true">
            {spaces.map((s, i) => <img key={s.id} className={i === act ? 'on' : ''} src={images[s.img]} alt="" width={s.w || 900} height={s.h || 675} loading="lazy" decoding="async" />)}
          </div>
          <ol className="sp-list">
            {spaces.map((s, i) => (
              <Reveal as="li" key={s.id} variant="line" delay={i * 70} className={i === act ? 'on' : ''} onPointerEnter={() => setAct(i)}>
                <a href={s.link} onFocus={() => setAct(i)} onBlur={() => setAct(-1)}>
                  <span className="sp-n">{String(i + 1).padStart(2, '0')}</span>
                  <img className="sp-thumb" src={images[s.img]} alt="" width={s.w || 900} height={s.h || 675} loading="lazy" decoding="async" />
                  <span className="sp-name">{s.name}</span>
                  <span className="sp-text">{s.text}</span>
                  <span className="sp-price">{s.price}</span>
                  <span className="sp-go" aria-hidden="true"><Icon name="arrow" size={18} /></span>
                </a>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

// Rolling odometer digits for prices
function Odometer({ value, delay = 0 }) {
  const chars = value.toLocaleString('en-US').split('')
  let c = 0
  return (
    <span className="odo" aria-hidden="true">
      {chars.map((ch, i) => (/\d/.test(ch)
        ? <span key={i} className="odo-win"><span className="odo-col" style={{ '--d': Number(ch), '--c': c++ + delay }}>{'0123456789'.split('').map((d) => <span key={d}>{d}</span>)}</span></span>
        : <span key={i} className="odo-sep">{ch}</span>))}
    </span>
  )
}

export function Pricing() {
  return (
    <section className="pricing sec" id="pricing" aria-labelledby="pricing-title">
      <div className="wrap">
        <div className="head head-center">
          <p className="kicker">Pricing</p>
          <h2 id="pricing-title">Affordable coworking space Al Reem Island members can plan around</h2>
          <p>Published monthly rates — affordable coworking space Abu Dhabi freelancers and startups can actually budget for. No deposit, no setup fees.</p>
        </div>
        <ul className="price-grid">
          {plans.map((p, i) => (
            <Reveal as="li" key={p.id} variant="up" delay={i * 90} className={`price-card ${p.featured ? 'featured' : ''}`}>
              {p.featured && <span className="price-flag">Includes ADGM licence address</span>}
              <h3>{p.name}</h3>
              <p className="price-amt">
                <span className="price-cur">{p.from ? 'From AED' : 'AED'}</span>
                <Odometer value={p.amount} delay={i * 2} />
                <span className="sr-only">{p.from ? 'From ' : ''}AED {p.amount.toLocaleString('en-US')}</span>
                <span className="price-unit">{p.unit}</span>
              </p>
              {p.note && <p className="price-note">{p.note}</p>}
              <ul className="price-perks">{p.perks.map((x) => <li key={x}><Icon name="check" size={15} strokeWidth={2.4} />{x}</li>)}</ul>
              <div className="price-ctas">
                <a className={`btn ${p.featured ? 'btn-ochre' : 'btn-olive'}`} href={wa(`Hi Aegis, I'm interested in a ${p.name.toLowerCase()} at your coworking space on Al Reem Island.`)} target="_blank" rel="noopener noreferrer">Get started</a>
                <a className="link-u" href={p.link}>Details<span className="sr-only"> about the {p.name.toLowerCase()}</span></a>
              </div>
            </Reveal>
          ))}
        </ul>
        <p className="fine center">
          Want to rent desk space in ADGM for one day? A day pass is the cheapest way in. Current offers on{' '}
          <a href={`${MAIN_SITE}/pricing`}>aegiscoworking.ae/pricing</a>.
        </p>
      </div>
    </section>
  )
}

export function Amenities() {
  return (
    <section className="amenities sec" id="amenities" aria-labelledby="am-title">
      <div className="wrap am-grid">
        <div className="am-copy">
          <p className="kicker kicker-light">Amenities</p>
          <h2 id="am-title">Everything a shared office Abu Dhabi teams need, already here</h2>
          <p>
            The coworking office Abu Dhabi members walk into is ready to use: fast internet, coffee, meeting rooms and a
            community — flexible workspace Abu Dhabi companies don’t have to furnish.
          </p>
          <a className="btn btn-ochre" href={wa('Hi Aegis, can I see the coworking space amenities?')} target="_blank" rel="noopener noreferrer">See it in person</a>
        </div>
        <ul className="am-list">
          {amenities.map((a, i) => (
            <Reveal as="li" key={a.name} variant="up" delay={(i % 4) * 80} className="am-item">
              <span className="am-ic" aria-hidden="true"><Icon name={a.icon} size={28} strokeWidth={1.4} /></span>
              <h3>{a.name}</h3>
              <p>{a.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

// Parallax masonry: columns drift at different speeds while scrolling
export function Gallery() {
  const ref = useScrollProgress('--gp', { start: 1, end: 0 })
  const cols = [gallery.slice(0, 3), gallery.slice(3, 5), gallery.slice(5, 8)]
  return (
    <section className="gallery sec" id="gallery" aria-labelledby="gal-title" ref={ref}>
      <div className="wrap">
        <div className="head head-row">
          <div>
            <p className="kicker">Gallery</p>
            <h2 id="gal-title">Inside the coworking space Al Reem Island members call home</h2>
          </div>
          <p>Level 38 of Addax Tower: the shared workspace Al Reem Island members use, plus meeting rooms and private offices — a coworking Al Reem Island ADGM address.</p>
        </div>
        <div className="gal-cols">
          {cols.map((col, ci) => (
            <div key={ci} className={`gal-col gal-col-${ci}`}>
              {col.map((g) => (
                <figure key={g.cap} className="gal-item">
                  <img src={images[g.img]} alt={g.alt} width={g.w} height={g.h} loading="lazy" decoding="async" />
                  <figcaption>{g.cap}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
