// Matrix rain
const canvas = document.getElementById('matrix-canvas')
const ctx = canvas.getContext('2d')
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas()
window.addEventListener('resize', resizeCanvas)
const chars = '01アイウエオカキクケコサシスセソタチツテト<>{}[]|/\\+-=*MOMO'
let cols = Math.floor(canvas.width / 18)
let drops = Array(cols).fill(1)
function drawMatrix() {
  cols = Math.floor(canvas.width / 18)
  if (drops.length !== cols) drops = Array(cols).fill(1)
  ctx.fillStyle = 'rgba(5,5,15,0.05)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#00ff41'
  ctx.font = '13px Share Tech Mono, monospace'
  drops.forEach((y, i) => {
    const c = chars[Math.floor(Math.random() * chars.length)]
    ctx.fillText(c, i * 18, y * 18)
    if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0
    drops[i]++
  })
}
setInterval(drawMatrix, 55)

// Status bar clock
function updateTime() {
  const el = document.getElementById('statusTime')
  if (!el) return
  const now = new Date()
  const h = String(now.getHours()).padStart(2,'0')
  const m = String(now.getMinutes()).padStart(2,'0')
  const s = String(now.getSeconds()).padStart(2,'0')
  el.textContent = `// ${h}:${m}:${s}`
}
setInterval(updateTime, 1000)
updateTime()

// Music Player
const music = document.getElementById('bgMusic')
const musicBtn = document.getElementById('musicBtn')
const musicIcon = document.getElementById('musicIcon')
const musicBars = document.getElementById('musicBars')
const musicHint = document.getElementById('musicHint')
let isPlaying = false

const START_TIME = 161
const END_TIME = 282

if (music) {
  music.addEventListener('loadedmetadata', () => { music.currentTime = START_TIME })
  music.addEventListener('timeupdate', () => {
    if (music.currentTime >= END_TIME) music.currentTime = START_TIME
  })
}

function playMusic() {
  if (!music) return
  music.volume = 0.4
  if (music.currentTime < START_TIME || music.currentTime >= END_TIME) {
    music.currentTime = START_TIME
  }
  music.play().then(() => {
    isPlaying = true
    musicBtn.classList.add('playing')
    musicBars.classList.add('active')
    musicIcon.textContent = '⏸'
    musicHint.classList.add('hidden')
  }).catch(() => {})
}

function pauseMusic() {
  if (!music) return
  music.pause()
  isPlaying = false
  musicBtn.classList.remove('playing')
  musicBars.classList.remove('active')
  musicIcon.textContent = '▶'
  musicHint.classList.remove('hidden')
  musicHint.textContent = 'click to play'
}

if (musicBtn) {
  musicBtn.addEventListener('click', () => { isPlaying ? pauseMusic() : playMusic() })
}

function handleFirstInteraction() {
  if (!isPlaying) playMusic()
  document.removeEventListener('click', handleFirstInteraction)
  document.removeEventListener('keydown', handleFirstInteraction)
  document.removeEventListener('scroll', handleFirstInteraction)
}
document.addEventListener('click', handleFirstInteraction)
document.addEventListener('keydown', handleFirstInteraction)
document.addEventListener('scroll', handleFirstInteraction)

// Custom cursor
const cursor = document.getElementById('cursor')
const follower = document.getElementById('cursorFollower')
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY
  cursor.style.left = mouseX + 'px'
  cursor.style.top = mouseY + 'px'
})

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12
  followerY += (mouseY - followerY) * 0.12
  follower.style.left = followerX + 'px'
  follower.style.top = followerY + 'px'
  requestAnimationFrame(animateFollower)
}
animateFollower()

document.querySelectorAll('a, button, .stat-row, .project-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '18px'
    cursor.style.height = '18px'
    follower.style.width = '56px'
    follower.style.height = '56px'
    follower.style.borderColor = '#ff00aa'
    follower.style.opacity = '0.6'
  })
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '10px'
    cursor.style.height = '10px'
    follower.style.width = '36px'
    follower.style.height = '36px'
    follower.style.borderColor = '#00f5ff'
    follower.style.opacity = '0.5'
  })
})

// Scroll reveal
const reveals = document.querySelectorAll('.reveal')
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (i * 0.07) + 's'
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.1 })
reveals.forEach(el => observer.observe(el))

// Active nav
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav-links a')
window.addEventListener('scroll', () => {
  let current = ''
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) current = section.id
  })
  navLinks.forEach(link => {
    const active = link.getAttribute('href') === '#' + current
    link.style.color = active ? '#00f5ff' : ''
    link.style.textShadow = active ? '0 0 10px #00f5ff' : ''
  })
})
