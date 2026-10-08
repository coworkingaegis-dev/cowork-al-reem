// ---------------------------------------------------------------------------
// Single source of truth for the "Coworking Space Al Reem Island" micro-site.
// Prices and plan features come from www.aegiscoworking.ae/pricing.
// Edit this file — not the components — when prices, FAQs or blogs change.
// ---------------------------------------------------------------------------

import privateImg from '../assets/coworking-space-al-reem-island-private-office.webp'
import privateSmall from '../assets/coworking-space-al-reem-island-private-office-640.webp'
import receptionImg from '../assets/coworking-space-al-reem-island-reception.webp'
import boardroomImg from '../assets/coworking-space-al-reem-island-boardroom.webp'
import deskImg from '../assets/coworking-space-al-reem-island-dedicated-desk.webp'
import coworkImg from '../assets/coworking-space-al-reem-island-coworking.webp'
import meetingImg from '../assets/coworking-space-al-reem-island-meeting-room.webp'
import smallImg from '../assets/coworking-space-al-reem-island-small-office.webp'
import servicedImg from '../assets/coworking-space-al-reem-island-serviced-office.webp'
import execImg from '../assets/coworking-space-al-reem-island-executive-office.webp'

export const SITE_URL = 'https://coworkingspacealreemisland.online'
export const MAIN_SITE = 'https://www.aegiscoworking.ae'
export const PAGE_TITLE = 'Coworking Space Al Reem Island for Residents & Local Teams'
export const PAGE_DESCRIPTION =
  'Coworking space Al Reem Island for people who live and work on the island: hot desks, dedicated desks, day passes and private offices at Addax Tower, inside ADGM.'
export const DATE_PUBLISHED = '2026-10-07'
export const DATE_MODIFIED = '2026-10-07'

export const BUSINESS = {
  name: 'Aegis Coworking - ADGM',
  phoneDisplay: '+971 50 392 6316',
  phoneTel: 'tel:+971503926316',
  whatsapp: 'https://wa.me/971503926316',
  email: 'contact@aegiscoworking.ae',
  street: 'Addax Tower, 3812, Al Reem Island, RT3',
  city: 'Abu Dhabi',
  country: 'United Arab Emirates',
  lat: 24.4989303,
  lng: 54.4031693,
  mapsUrl: 'https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z',
  mapsEmbed: 'https://www.google.com/maps?q=Aegis+Coworking+Space+ADGM,+Addax+Tower,+Al+Reem+Island,+Abu+Dhabi&ll=24.4989303,54.4031693&z=16&output=embed',
  sameAs: [
    'https://www.linkedin.com/company/aegis-coworking/',
    'https://www.instagram.com/aegis.coworking/',
    'https://www.facebook.com/aegis.coworking',
  ],
}

// Card links open WhatsApp instead of other websites
export const WA_INFO = `${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like more details about your workspace.')}`

export const images = { privateImg, privateSmall, receptionImg, boardroomImg, deskImg, coworkImg, meetingImg, smallImg, servicedImg, execImg }

export const keywords = [
  'Coworking space Al Reem Island', 'Coworking space in Al Reem Island', 'Coworking space Al Reem Island Abu Dhabi', 'Coworking office Al Reem Island',
  'Coworking offices Al Reem Island', 'Shared workspace Al Reem Island', 'Shared office Al Reem Island', 'Flexible workspace Al Reem Island',
  'Workspace Al Reem Island', 'Coworking desk Al Reem Island', 'Dedicated desk Al Reem Island', 'Hot desk Al Reem Island', 'Desk space Al Reem Island',
  'Affordable coworking space Al Reem Island', 'Coworking space Abu Dhabi', 'Coworking space in Abu Dhabi', 'Coworking office Abu Dhabi',
  'Shared office Abu Dhabi', 'Flexible workspace Abu Dhabi', 'Coworking space ADGM', 'Coworking space near ADGM',
  'Coworking space near Abu Dhabi Global Market', 'Coworking space Addax Tower', 'Coworking space in Addax Tower', 'Coworking Al Reem Island ADGM',
  'Best coworking space Al Reem Island', 'Affordable coworking space Abu Dhabi', 'Private coworking space Al Reem Island', 'Space in ADGM',
  'Rent desk space in ADGM', 'Flexi desk in ADGM', 'Cheap desk space in ADGM', 'Aegis Coworking',
]

export const sections = [
  { id: 'spaces', label: 'Spaces' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
]

// Hero counters (facts only)
export const heroStats = [
  { n: 38, label: 'Level in Addax Tower' },
  { n: 1000, prefix: 'AED ', label: 'Hot desk per month' },
  { n: 100, prefix: 'AED ', label: 'Day pass' },
  { text: '24/7', label: 'Dedicated desk access' },
]

// Hover-reveal list of spaces
export const spaces = [
  { id: 'hot', name: 'Hot desk', price: 'AED 1,000 / month', img: 'coworkImg', text: 'Any open seat on the shared floor — the flexi desk in ADGM freelancers love.', link: WA_INFO },
  { id: 'dedicated', name: 'Dedicated desk', price: 'AED 1,150 / month', img: 'deskImg', text: 'Your own desk, 24/7 access, a locker and an ADGM licence address.', link: WA_INFO },
  { id: 'private', name: 'Private office', price: 'From AED 4,500 / month', img: 'privateImg', text: 'A lockable, furnished private coworking space Al Reem Island teams make their own.', link: WA_INFO },
  { id: 'meeting', name: 'Meeting room', price: 'Hourly booking', img: 'meetingImg', text: 'Client meetings and calls — members get monthly meeting room credits.', link: WA_INFO },
  { id: 'day', name: 'Day pass', price: 'AED 100 / day', img: 'boardroomImg', w: 1024, h: 683, text: 'Cheap desk space in ADGM for a day — no lease, no commitment.', link: WA_INFO },
  { id: 'virtual', name: 'Virtual office', price: 'From AED 292 / month', img: 'receptionImg', text: 'A registered ADGM business address with mail handling.', link: WA_INFO },
]

// Pricing (features as published on aegiscoworking.ae/pricing)
export const plans = [
  { id: 'day', name: 'Day pass', amount: 100, unit: '/ day', perks: ['Full access to the shared coworking floor', 'High-speed WiFi', 'Premium coffee & tea', 'Print & scan access', 'No lease, no commitment'], link: WA_INFO },
  { id: 'hot', name: 'Hot desk', amount: 1000, unit: '/ month', perks: ['Full access to the shared coworking floor', 'Fast, reliable fibre-optic internet', 'Meeting room credits', 'Invitations to community events', 'Complimentary coffee and tea'], link: WA_INFO },
  { id: 'dedicated', name: 'Dedicated desk', amount: 1150, unit: '/ month', featured: true, perks: ['Office address suitable for an ADGM licence', '24/7 access', 'Dedicated lockers for storage', 'Extra meeting room credits every month', 'Everything in the hot desk plan'], note: '+ one-time AED 1,200 due diligence', link: WA_INFO },
  { id: 'private', name: 'Private office', amount: 4500, from: true, unit: '/ month', perks: ['Office address suitable for an ADGM licence', 'Fully furnished, ready-to-use office', 'Configurable layout to suit your team', 'All dedicated desk benefits'], link: WA_INFO },
]

export const amenities = [
  { icon: 'wifi', name: 'Fibre-optic WiFi', text: 'Fast, reliable internet on every plan.' },
  { icon: 'coffee', name: 'Coffee & tea', text: 'Complimentary, all day.' },
  { icon: 'people', name: 'Community events', text: 'Invitations for hot desk members and up.' },
  { icon: 'video', name: 'Meeting room credits', text: 'Included with desks and offices.' },
  { icon: 'print', name: 'Print & scan', text: 'Right on the coworking floor.' },
  { icon: 'key', name: '24/7 access', text: 'For dedicated desks and private offices.' },
  { icon: 'shield', name: 'No deposit', text: 'No admin or setup fees, free registration.' },
  { icon: 'pin', name: 'Inside ADGM', text: 'Addax Tower, Al Reem Island.' },
]

export const gallery = [
  { img: 'coworkImg', w: 900, h: 675, alt: 'Shared workspace Al Reem Island — coworking floor at Aegis, Addax Tower', cap: 'Coworking floor' },
  { img: 'execImg', w: 512, h: 512, alt: 'Private coworking space Al Reem Island — executive office at Aegis', cap: 'Executive office' },
  { img: 'meetingImg', w: 900, h: 675, alt: 'Meeting room at the coworking space in Addax Tower', cap: 'Meeting room' },
  { img: 'smallImg', w: 474, h: 664, alt: 'Small private office at Aegis Coworking, Al Reem Island', cap: 'Small office' },
  { img: 'deskImg', w: 900, h: 675, alt: 'Dedicated desk Al Reem Island at Aegis Coworking', cap: 'Dedicated desks' },
  { img: 'servicedImg', w: 700, h: 700, alt: 'Serviced office at Aegis coworking space, Abu Dhabi', cap: 'Serviced office' },
  { img: 'receptionImg', w: 900, h: 675, alt: 'Reception of the coworking space Al Reem Island Abu Dhabi', cap: 'Reception' },
  { img: 'boardroomImg', w: 1024, h: 683, alt: 'Boardroom at Aegis coworking office Al Reem Island', cap: 'Boardroom' },
]

// Two genuine member reviews, word for word — a different pair on each site
export const testimonials = [
  { quote: 'Nice suitable area for coworking for Adam incorporation.', name: 'Ali Kutty Faizy', role: 'Entrepreneur' },
  { quote: 'Very happy with the service from Aegis Coworking. We needed a professional business address in Abu Dhabi without committing to a large traditional office, and Aegis provided a practical solution. The team is responsive and professional.', name: 'Uzair Tahir', role: 'Tech Startup Founder' },
]

export const guides = [
  { slug: 'affordable-coworking-al-reem-island-adgm', title: 'Affordable Coworking on Al Reem Island, ADGM', tag: 'Location' },
  { slug: 'adgm-coworking-space-cost-2026', title: 'ADGM Coworking Space Cost in 2026', tag: 'Cost' },
  { slug: 'is-al-reem-island-part-of-adgm', title: 'Is Al Reem Island Part of ADGM?', tag: 'Location' },
  { slug: 'addax-tower-adgm-business-workspace', title: 'Addax Tower ADGM: Business Workspace on Al Reem Island', tag: 'Location' },
  { slug: 'adgm-flexi-desk-enough-solo-business', title: 'Is a Flexi Desk Enough for a Solo ADGM Business?', tag: 'Desks' },
  { slug: 'day-pass-coworking-abu-dhabi-your-flexible-workday-solved', title: 'Day Pass Coworking in Abu Dhabi', tag: 'Cost' },
  { slug: 'private-office-vs-coworking-adgm-the-complete-cost-privacy-guide', title: 'Private Office vs Coworking in ADGM', tag: 'Compare' },
  { slug: 'flexible-workspace-adgm-startups', title: 'Flexible Workspace in ADGM for Startups', tag: 'Setup' },
].map((g) => ({ ...g, url: `${MAIN_SITE}/blog/${g.slug}` }))

export const faqs = [
  {
    q: 'How much does a coworking space on Al Reem Island cost?',
    a: 'At Aegis Coworking in Addax Tower, a hot desk is AED 1,000 per month, a dedicated desk AED 1,150 per month (plus a one-time AED 1,200 due-diligence fee), a day pass AED 100 and private offices start from AED 4,500 per month. ADGM government fees are separate.',
    link: { text: 'ADGM coworking cost in 2026', url: 'https://www.aegiscoworking.ae/blog/adgm-coworking-space-cost-2026' },
  },
  {
    q: 'Is the coworking space on Al Reem Island inside ADGM?',
    a: 'Yes. Addax Tower on Al Reem Island is within the Abu Dhabi Global Market (ADGM) jurisdiction, so Aegis is a coworking space inside ADGM, not just near it.',
  },
  {
    q: 'What is the difference between a hot desk and a dedicated desk?',
    a: 'A hot desk (flexi desk) lets you use any open seat on the shared coworking floor. A dedicated desk is your own permanent desk with 24/7 access, a locker, extra meeting room credits and an office address suitable for an ADGM licence.',
  },
  {
    q: 'Can I use the coworking space for my ADGM licence?',
    a: 'Yes, with a dedicated desk or a private office — both include an office address suitable for an ADGM licence. A virtual office also provides a registered ADGM business address. The hot desk is for working only.',
  },
  {
    q: 'What is the cheapest desk space in ADGM?',
    a: 'A day pass at AED 100 is the cheapest way in. For monthly use, the hot desk is AED 1,000 and the dedicated desk at AED 1,150 is the lowest-cost desk that includes an ADGM licence address.',
    link: { text: 'Affordable coworking on Al Reem Island', url: 'https://www.aegiscoworking.ae/blog/affordable-coworking-al-reem-island-adgm' },
  },
  {
    q: 'Do members get 24/7 access?',
    a: 'Dedicated desk and private office members have 24/7 access. Tours run Monday to Friday, 9 AM–6 PM.',
  },
  {
    q: 'Is there a deposit or setup fee?',
    a: 'No deposit, no admin fees and no setup fees, with free registration. The dedicated desk has a one-time AED 1,200 due-diligence fee.',
  },
  {
    q: 'Can I book a private coworking space for my team?',
    a: 'Yes. Private offices start from AED 4,500 per month for small teams, with medium and large offices priced by layout — all on the same floor as the shared coworking space.',
  },
  {
    q: 'How do I book a tour of the coworking space?',
    a: 'Message us on WhatsApp or call +971 50 392 6316. Tours run Monday to Friday, 9 AM–6 PM, and we can send a video walkthrough if you are abroad.',
  },
  {
    q: 'Is the coworking space convenient for Al Reem Island residents?',
    a: 'Yes. Addax Tower is on Al Reem Island, so residents can work on the island instead of commuting. A day pass at AED 100 is an easy way to try it.',
  },
  {
    q: 'Can I bring a client to the coworking space?',
    a: 'Yes. Meeting rooms can be booked by the hour for client meetings, and members get monthly meeting room credits.',
  },
]
