import './style.css'
import { weddingContent } from './content.js'

const { groomName, brideName, brand, tagline, dateLabel, time, venue, venueStreet, venueState, googleMapsUrl, rsvp, support, gallery } = weddingContent

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="intro-screen" aria-live="polite">
    <div class="intro-backdrop"></div>
    <div class="intro-inner">
      <div class="logo-intro">
        <img class="logo-intro-image" src="/images/logo.png" alt="Life of Faith logo" />
      </div>
      <p class="intro-label">Together with their families,</p>
      <h1 aria-label="${groomName} and ${brideName}">
        <span class="couple-name">${groomName}</span>
        <span class="couple-ampersand" aria-hidden="true">&amp;</span>
        <span class="couple-name">${brideName}</span>
      </h1>
      <div class="intro-divider" aria-hidden="true"></div>
      <p class="intro-tagline">${tagline}</p>
      <p class="intro-date">${dateLabel}</p>
      <div class="intro-actions">
        <button type="button" class="button primary-button" data-action="enter">ENTER INVITATION</button>
        <button type="button" class="button secondary-button" data-action="skip">SKIP MUSIC &amp; ENTER</button>
      </div>
    </div>
  </div>

  <div class="page-shell">
    <header class="site-header">
      <a href="#home" class="brand-wordmark" aria-label="Life of Faith home">
        <img src="/images/logo.png" alt="Life of Faith logo" class="brand-logo" />
        <span class="brand-text">Life of Faith</span>
      </a>

      <button class="nav-toggle" type="button" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="site-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#story">Our Story</a>
        <a href="#day">The Day</a>
        <a href="#rsvp">RSVP</a>
      </nav>

      <button class="music-toggle" type="button" aria-label="Toggle music" data-music-toggle>
        <span class="music-icon" aria-hidden="true">♫</span>
        <span class="music-text">Music</span>
      </button>
    </header>

    <main>
      <section id="home" class="hero-section section-shell">
        <div class="hero-copy">
          <p class="eyebrow">LIFE OF FAITH</p>
          <h2 class="hero-names" aria-label="${groomName} and ${brideName}">
            <span class="couple-name">${groomName}</span>
            <span class="couple-ampersand" aria-hidden="true">&amp;</span>
            <span class="couple-name">${brideName}</span>
          </h2>
          <p class="hero-meta">${dateLabel}</p>
          <p class="hero-meta">${time}</p>
          <div class="hero-actions">
            <a href="#rsvp" class="button primary-button">RSVP</a>
            <a href="#day" class="button secondary-button">DETAILS</a>
          </div>
          <div class="scroll-indicator" aria-hidden="true">
            <span></span>
          </div>
        </div>

        <figure class="photo-frame hero-photo-frame" data-gallery-index="0">
          <img src="${gallery[0].src}" alt="${gallery[0].alt}" loading="eager" />
        </figure>
      </section>

      <section id="story" class="story-section section-shell">
        <div class="section-intro centered">
          <p class="eyebrow">OUR STORY</p>
          <h2>Israel &amp; Toluwalope invite you to celebrate their story of faith, love, and covenant.</h2>
        </div>

        <div class="story-grid">
          <article class="story-card">
            <figure class="photo-frame portrait-frame" data-gallery-index="1">
              <img src="${gallery[1].src}" alt="${gallery[1].alt}" loading="lazy" />
            </figure>
            <h3 class="story-name">Toluwalope</h3>
            <p class="story-formal-name">Toluwalope Esther Akinrotimi</p>
            <p class="quote">Grace has brought Toluwalope to this beautiful chapter, and faith leads her into the next.</p>
          </article>

          <article class="story-card">
            <figure class="photo-frame portrait-frame" data-gallery-index="2">
              <img src="${gallery[2].src}" alt="${gallery[2].alt}" loading="lazy" />
            </figure>
            <h3 class="story-name">Israel</h3>
            <p class="story-formal-name">Israel Oluwadamilare Oke</p>
            <p class="quote">A life shaped by faith, a heart prepared for love, and a future embraced with grace.</p>
          </article>
        </div>
      </section>

      <section class="section-shell covenant-section">
        <div class="covenant-layout">
          <figure class="photo-frame covenant-photo" data-gallery-index="3">
            <img src="${gallery[3].src}" alt="${gallery[3].alt}" loading="lazy" />
          </figure>
          <div class="covenant-copy">
            <p class="eyebrow">COVENANT</p>
            <h2>Israel and Toluwalope choose to walk this journey together, hand in hand and heart to heart.</h2>
          </div>
        </div>
      </section>

      <section class="section-shell hands-section">
        <figure class="photo-frame hands-photo" data-gallery-index="4">
          <img src="${gallery[4].src}" alt="${gallery[4].alt}" loading="lazy" />
        </figure>
        <div class="section-intro centered narrow">
          <p class="eyebrow">A BEAUTIFUL UNION</p>
          <h2>Two lives, joined in love and held together by faith.</h2>
        </div>
      </section>

      <section class="section-shell portrait-section">
        <figure class="photo-frame standing-photo" data-gallery-index="5">
          <img src="${gallery[5].src}" alt="${gallery[5].alt}" loading="lazy" />
        </figure>
        <div class="section-intro centered narrow">
          <p class="eyebrow">IN JOY</p>
          <h2>With joyful hearts, Israel and Toluwalope step forward into a future filled with love, purpose, and grace.</h2>
        </div>
      </section>

      <section id="day" class="section-shell celebration-section" aria-labelledby="celebration-title">
        <div class="celebration-content">
          <header class="celebration-heading">
            <h2 id="celebration-title" class="eyebrow">THE DAY WE CELEBRATE</h2>
            <div class="celebration-date" aria-label="December 26, 2026">
              <span class="celebration-day">26</span>
              <span class="celebration-month">DECEMBER 2026</span>
            </div>
            <p class="celebration-time">${time}</p>
          </header>

          <div class="countdown-wrap">
            <p class="countdown-kicker">LIVE COUNTDOWN</p>
            <div id="countdown" class="countdown" role="timer" aria-label="Countdown to the wedding" aria-live="off">
              <div class="countdown-item"><span class="countdown-value" data-countdown-value="days">--</span><span class="countdown-label">Days</span></div>
              <div class="countdown-item"><span class="countdown-value" data-countdown-value="hours">--</span><span class="countdown-label">Hours</span></div>
              <div class="countdown-item"><span class="countdown-value" data-countdown-value="minutes">--</span><span class="countdown-label">Minutes</span></div>
              <div class="countdown-item"><span class="countdown-value" data-countdown-value="seconds">--</span><span class="countdown-label">Seconds</span></div>
            </div>
          </div>

          <div class="celebration-venue">
            <h3>${venue}</h3>
            <p>${venueStreet}</p>
            <p>${venueState}</p>
            <a class="directions-link" href="${googleMapsUrl}" target="_blank" rel="noreferrer">GET DIRECTIONS</a>
          </div>
        </div>
      </section>

      <section id="rsvp" class="section-shell rsvp-section">
        <div class="section-intro centered narrow">
          <p class="eyebrow">RSVP</p>
          <h2>We would love to have you with us</h2>
        </div>

        <div class="rsvp-list">
          ${rsvp
            .map(
              (person) => `
                <div class="rsvp-item">
                  <p class="rsvp-name">${person.name}</p>
                  <a href="tel:+234${person.phone.replace(/\D/g, '')}" class="rsvp-phone">${person.phone}</a>
                </div>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="section-shell support-section">
        <div class="section-intro centered narrow">
          <p class="eyebrow">SUPPORT US</p>
          <h2>With love, we are grateful for your generosity.</h2>
        </div>

        <div class="support-card">
          <div class="support-details">
            <p class="support-label">GIFT &amp; SUPPORT ACCOUNT</p>
            <p class="support-number">${support.accountNumber}</p>
            <span class="support-divider" aria-hidden="true"></span>
            <p class="support-bank">${support.bank}</p>
            <p class="support-name">${support.accountName}</p>
          </div>
          <button type="button" class="copy-button" data-copy-account>Copy account number</button>
          <p class="copy-feedback" aria-live="polite"> </p>
        </div>
      </section>

      <section class="section-shell closing-section">
        <figure class="photo-frame closing-photo" data-gallery-index="6">
          <img src="${gallery[6].src}" alt="${gallery[6].alt}" loading="lazy" />
        </figure>

        <div class="closing-copy">
          <p class="eyebrow">SEASON OF LOVE</p>
          <h2>In the little moments, in the laughter, and in the journey ahead, Israel and Toluwalope choose each other.</h2>
          <p class="closing-signature">Israel &amp; Toluwalope</p>
          <p class="closing-formal-names"><span>${groomName}</span><span aria-hidden="true">&amp;</span><span>${brideName}</span></p>
          <p class="closing-tagline">${tagline}</p>
          <p class="closing-thanks">Thank you for celebrating with us.</p>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>${brand}</p>
      <p>${tagline}</p>
    </footer>
  </div>

  <div class="lightbox" aria-hidden="true">
    <button class="lightbox-close" type="button" aria-label="Close image viewer">×</button>
    <button class="lightbox-nav prev" type="button" aria-label="Previous image">‹</button>
    <div class="lightbox-stage"></div>
    <button class="lightbox-nav next" type="button" aria-label="Next image">›</button>
  </div>
`

const introScreen = document.querySelector('.intro-screen')
const pageShell = document.querySelector('.page-shell')
const navToggle = document.querySelector('.nav-toggle')
const siteNav = document.querySelector('.site-nav')
const audio = new Audio('/audio/wedding-music.mp3')
audio.preload = 'auto'
audio.loop = true
audio.volume = 0.5

let galleryIndex = 0

document.body.classList.add('intro-active')
document.documentElement.style.overflow = 'hidden'
document.body.style.overflow = 'hidden'

function openInvitation() {
  document.body.classList.remove('intro-active')
  document.body.classList.add('entered')
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
  introScreen.classList.add('hidden')
  pageShell.classList.add('is-visible')

  window.setTimeout(() => {
    introScreen.style.display = 'none'
  }, 550)
}

function toggleNav() {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true'
  navToggle.setAttribute('aria-expanded', String(!expanded))
  siteNav.classList.toggle('open')
}

function setMusicLabel(playing) {
  const toggle = document.querySelector('[data-music-toggle]')
  const label = toggle?.querySelector('.music-text')
  if (!toggle || !label) return

  const status = typeof playing === 'string' ? playing : playing ? 'playing' : 'paused'
  toggle.classList.toggle('is-playing', status === 'playing')
  toggle.classList.toggle('is-loading', status === 'loading')
  label.textContent = status === 'playing' ? 'Pause' : status === 'loading' ? 'Loading music' : 'Music'
  toggle.setAttribute(
    'aria-label',
    status === 'playing' ? 'Pause music' : status === 'loading' ? 'Music is loading' : 'Play music'
  )
}

let musicRequested = false
let musicRetryTimer = null
let musicRetryDelay = 1000
let musicResumeAt = null

function clearMusicRetry() {
  if (musicRetryTimer === null) return
  window.clearTimeout(musicRetryTimer)
  musicRetryTimer = null
}

function scheduleMusicRetry() {
  if (!musicRequested || !navigator.onLine || musicRetryTimer !== null) return

  const delay = musicRetryDelay
  musicRetryDelay = Math.min(musicRetryDelay * 2, 30000)
  musicRetryTimer = window.setTimeout(() => {
    musicRetryTimer = null
    if (!musicRequested) return

    if (audio.error) {
      if (musicResumeAt === null && Number.isFinite(audio.currentTime)) {
        musicResumeAt = audio.currentTime
      }
      audio.load()
      return
    }

    void startMusic()
  }, delay)
}

async function startMusic() {
  musicRequested = true
  setMusicLabel('loading')

  try {
    await audio.play()
    musicRetryDelay = 1000
    clearMusicRetry()
    setMusicLabel('playing')
  } catch (error) {
    console.warn('Wedding music could not start; it will retry while music is requested.', error)
    scheduleMusicRetry()
  }
}

function stopMusic() {
  musicRequested = false
  musicResumeAt = null
  musicRetryDelay = 1000
  clearMusicRetry()
  audio.pause()
  setMusicLabel(false)
}

audio.addEventListener('waiting', () => {
  if (musicRequested) setMusicLabel('loading')
})
audio.addEventListener('playing', () => {
  musicRetryDelay = 1000
  clearMusicRetry()
  setMusicLabel('playing')
})
audio.addEventListener('error', () => {
  if (!musicRequested) return
  setMusicLabel('loading')
  scheduleMusicRetry()
})
audio.addEventListener('stalled', () => {
  if (musicRequested) setMusicLabel('loading')
})
audio.addEventListener('loadedmetadata', () => {
  if (musicResumeAt === null || !musicRequested) return

  if (musicResumeAt > 0 && Number.isFinite(audio.duration)) {
    audio.currentTime = Math.min(musicResumeAt, audio.duration)
  }
  musicResumeAt = null
  void startMusic()
})
window.addEventListener('online', () => {
  if (musicRequested && audio.paused) scheduleMusicRetry()
})

function handleIntroAction(action) {
  openInvitation()
  if (action === 'enter') {
    void startMusic()
  }
  if (action === 'skip') {
    stopMusic()
  }
}

document.querySelectorAll('[data-action]').forEach((button) => {
  button.addEventListener('click', () => handleIntroAction(button.dataset.action))
})

navToggle.addEventListener('click', toggleNav)
siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.setAttribute('aria-expanded', 'false')
    siteNav.classList.remove('open')
  })
})

const musicToggle = document.querySelector('[data-music-toggle]')
musicToggle.addEventListener('click', () => {
  if (musicRequested) {
    stopMusic()
    return
  }

  void startMusic()
})

const copyButton = document.querySelector('[data-copy-account]')
const feedback = document.querySelector('.copy-feedback')
const supportSection = document.querySelector('.support-section')

function revealSupportSection() {
  supportSection.classList.add('is-revealed')
}

if ('IntersectionObserver' in window) {
  const supportObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      revealSupportSection()
      supportObserver.disconnect()
    },
    { rootMargin: '-8% 0px', threshold: 0 }
  )
  supportObserver.observe(supportSection)
} else {
  const checkSupportVisibility = () => {
    const bounds = supportSection.getBoundingClientRect()
    const isVisible = bounds.bottom > innerHeight * 0.08 && bounds.top < innerHeight * 0.92
    if (!isVisible) return

    revealSupportSection()
    window.removeEventListener('scroll', checkSupportVisibility)
    window.removeEventListener('resize', checkSupportVisibility)
  }

  window.addEventListener('scroll', checkSupportVisibility, { passive: true })
  window.addEventListener('resize', checkSupportVisibility)
  checkSupportVisibility()
}

copyButton.addEventListener('click', async () => {
  const value = support.accountNumber
  try {
    await navigator.clipboard.writeText(value)
    feedback.textContent = 'Account number copied'
  } catch {
    const temp = document.createElement('textarea')
    temp.value = value
    document.body.appendChild(temp)
    temp.select()
    document.execCommand('copy')
    document.body.removeChild(temp)
    feedback.textContent = 'Account number copied'
  }
})

const weddingTimezone = 'Africa/Lagos'

function getZonedTimestamp(year, month, day, hour, minute, timeZone) {
  const localTimestamp = Date.UTC(year, month - 1, day, hour, minute)
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    calendar: 'gregory',
    numberingSystem: 'latn',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
  })

  let timestamp = localTimestamp
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const parts = Object.fromEntries(
      formatter.formatToParts(new Date(timestamp)).map(({ type, value }) => [type, value])
    )
    const representedTimestamp = Date.UTC(
      Number(parts.year),
      Number(parts.month) - 1,
      Number(parts.day),
      Number(parts.hour),
      Number(parts.minute),
      Number(parts.second)
    )
    timestamp += localTimestamp - representedTimestamp
  }

  return timestamp
}

const weddingTarget = getZonedTimestamp(2026, 12, 26, 8, 0, weddingTimezone)
let countdownInterval = null

function updateCountdown() {
  const countdownEl = document.getElementById('countdown')
  const difference = weddingTarget - Date.now()

  if (difference <= 0) {
    countdownEl.setAttribute('role', 'status')
    countdownEl.setAttribute('aria-label', 'Today is the day')
    countdownEl.setAttribute('aria-live', 'polite')
    countdownEl.classList.add('is-complete')
    countdownEl.innerHTML = '<div class="countdown-message"><h3>TODAY IS THE DAY</h3><p>The celebration has begun. &#10084;&#65039;</p></div>'
    if (countdownInterval !== null) window.clearInterval(countdownInterval)
    return false
  }

  const totalSeconds = Math.floor(difference / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  countdownEl.querySelector('[data-countdown-value="days"]').textContent = String(days).padStart(2, '0')
  countdownEl.querySelector('[data-countdown-value="hours"]').textContent = String(hours).padStart(2, '0')
  countdownEl.querySelector('[data-countdown-value="minutes"]').textContent = String(minutes).padStart(2, '0')
  countdownEl.querySelector('[data-countdown-value="seconds"]').textContent = String(seconds).padStart(2, '0')
  return true
}

if (updateCountdown()) {
  countdownInterval = window.setInterval(updateCountdown, 1000)
}

const lightbox = document.querySelector('.lightbox')
const lightboxStage = document.querySelector('.lightbox-stage')
const closeButton = document.querySelector('.lightbox-close')
const prevButton = document.querySelector('.lightbox-nav.prev')
const nextButton = document.querySelector('.lightbox-nav.next')

function updateLightbox(index) {
  const item = gallery[index]
  if (!item) return

  const image = new Image()
  image.src = item.src
  image.alt = item.alt
  image.loading = 'eager'
  image.addEventListener('error', () => {
    lightboxStage.innerHTML = `<div class="lightbox-placeholder">Photo coming soon</div>`
  })
  image.addEventListener('load', () => {
    lightboxStage.innerHTML = ''
    lightboxStage.appendChild(image)
  })
}

function openLightbox(index) {
  galleryIndex = index
  updateLightbox(index)
  lightbox.classList.add('open')
  lightbox.setAttribute('aria-hidden', 'false')
  document.body.classList.add('modal-open')
}

function closeLightbox() {
  lightbox.classList.remove('open')
  lightbox.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('modal-open')
}

closeButton.addEventListener('click', closeLightbox)
prevButton.addEventListener('click', () => {
  const previousIndex = galleryIndex === 0 ? gallery.length - 1 : galleryIndex - 1
  openLightbox(previousIndex)
})
nextButton.addEventListener('click', () => {
  const nextIndex = galleryIndex === gallery.length - 1 ? 0 : galleryIndex + 1
  openLightbox(nextIndex)
})
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox()
  }
})

document.addEventListener('keydown', (event) => {
  if (!lightbox.classList.contains('open')) return

  if (event.key === 'Escape') {
    closeLightbox()
  }

  if (event.key === 'ArrowLeft') {
    prevButton.click()
  }

  if (event.key === 'ArrowRight') {
    nextButton.click()
  }
})

document.querySelectorAll('[data-gallery-index]').forEach((frame) => {
  frame.addEventListener('click', () => {
    openLightbox(Number(frame.dataset.galleryIndex))
  })
})

document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('error', () => {
    const frame = img.closest('.photo-frame')
    if (!frame) return
    frame.classList.add('is-missing')
    frame.setAttribute('data-missing', 'true')
    img.remove()
  })
})

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('reduced-motion')
}
