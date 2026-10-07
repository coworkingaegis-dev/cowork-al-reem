import { Fragment, useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { BUSINESS, heroStats, images } from '../data/content'

const fmt = (n) => n.toLocaleString('en-US')

// Counts from 0 to n once the hero has mounted
function Counter({ n, prefix = '', delay = 0 }) {
  const [v, setV] = useState(n)
  const ref = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf, t0
    setV(0)
    const start = setTimeout(() => {
      const tick = (t) => {
        if (!t0) t0 = t
        const k = Math.min(1, (t - t0) / 1600)
        setV(Math.round(n * (1 - Math.pow(1 - k, 4))))
        if (k < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => { clearTimeout(start); cancelAnimationFrame(raf) }
  }, [n, delay])
  return <b ref={ref}>{prefix}{fmt(v)}</b>
}

const titleWords = ['Coworking', 'on', 'Al', 'Reem', 'Island,']
const accentWords = ['elevated', 'to', 'Level', '38']

export default function Hero() {
  const frameRef = useRef(null)
  const light = (e) => {
    const el = frameRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--lx', `${((e.clientX - r.left) / r.width) * 100}%`)
    el.style.setProperty('--ly', `${((e.clientY - r.top) / r.height) * 100}%`)
  }
  let w = 0
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-wrap">
        <div className="hero-frame" ref={frameRef} onPointerMove={light}>
          <img className="hero-bg" src={images.privateImg} srcSet={`${images.privateSmall} 640w, ${images.privateImg} 1200w`} sizes="(max-width: 700px) 100vw, 1300px"
            alt="Coworking space Al Reem Island — sunlit office at Aegis Coworking, Level 38, Addax Tower" width="1200" height="900" fetchPriority="high" decoding="async" />
          <span className="hero-shade" aria-hidden="true" />
          <span className="hero-beams" aria-hidden="true"><i /><i /><i /></span>
          <span className="hero-glow" aria-hidden="true" />

          <div className="hero-content">
            <p className="hero-chip rise" style={{ '--d': 0 }}><Icon name="pin" size={14} strokeWidth={2} />Addax Tower · Al Reem Island · ADGM</p>
            <h1 id="hero-title" className="hero-title">
              {titleWords.map((t) => <Fragment key={`a${w}`}><span className="word" style={{ '--d': ++w }}>{t}</span>{' '}</Fragment>)}
              <span className="hero-accent">
                {accentWords.map((t) => <Fragment key={`b${w}`}><span className="word" style={{ '--d': ++w }}>{t}</span>{' '}</Fragment>)}
              </span>
            </h1>
            <p className="hero-lead rise" style={{ '--d': 8 }}>
              A sunlit coworking space in Addax Tower, inside ADGM — hot desks from AED 1,000, dedicated desks at AED 1,150,
              private offices and a day pass for AED 100.
            </p>
            <div className="hero-ctas rise" style={{ '--d': 9 }}>
              <a className="btn btn-ochre" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to book a tour of the coworking space on Al Reem Island.')}`} target="_blank" rel="noopener noreferrer">Book a tour <Icon name="arrow" size={16} /></a>
              <a className="btn btn-glass" href="#pricing">See pricing</a>
            </div>
          </div>

          <ul className="hero-stats rise" style={{ '--d': 10 }}>
            {heroStats.map((s, i) => (
              <li key={s.label}>
                {s.text ? <b>{s.text}</b> : <Counter n={s.n} prefix={s.prefix} delay={900 + i * 150} />}
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
