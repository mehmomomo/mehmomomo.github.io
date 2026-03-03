// Music Player
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const musicIcon = document.getElementById('musicIcon');
const musicBars = document.getElementById('musicBars');
const musicHint = document.getElementById('musicHint');
let isPlaying = false;

const START_TIME = 161; // 2:41
const END_TIME = 282;   // 4:42

music.addEventListener('loadedmetadata', () => {
    music.currentTime = START_TIME;
});

// Loop the specific section
music.addEventListener('timeupdate', () => {
    if (music.currentTime >= END_TIME) {
        music.currentTime = START_TIME;
    }
});

function playMusic() {
    music.volume = 0.4;
    if (music.currentTime < START_TIME || music.currentTime >= END_TIME) {
        music.currentTime = START_TIME;
    }
    music.play().then(() => {
        isPlaying = true;
        musicBtn.classList.add('playing');
        musicBars.classList.add('active');
        musicIcon.textContent = '⏸';
        musicHint.classList.add('hidden');
    }).catch(() => {});
}

function pauseMusic() {
    music.pause();
    isPlaying = false;
    musicBtn.classList.remove('playing');
    musicBars.classList.remove('active');
    musicIcon.textContent = '▶';
    musicHint.classList.remove('hidden');
    musicHint.textContent = 'click to play';
}

musicBtn.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
});

// Autoplay on first interaction anywhere on the page
function handleFirstInteraction() {
    if (!isPlaying) playMusic();
    document.removeEventListener('click', handleFirstInteraction);
    document.removeEventListener('keydown', handleFirstInteraction);
    document.removeEventListener('scroll', handleFirstInteraction);
}

document.addEventListener('click', handleFirstInteraction);
document.addEventListener('keydown', handleFirstInteraction);
document.addEventListener('scroll', handleFirstInteraction);

// Custom cursor
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
}
animateFollower();

// Hover effects on interactive elements
const hoverEls = document.querySelectorAll('a, button');
hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        follower.style.width = '56px';
        follower.style.height = '56px';
        follower.style.opacity = '0.5';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        follower.style.width = '36px';
        follower.style.height = '36px';
        follower.style.opacity = '1';
    });
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = (i * 0.08) + 's';
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Active nav highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.id;
        }
    });
    navLinks.forEach(link => {
        link.style.opacity = link.getAttribute('href') === '#' + current ? '1' : '0.6';
    });
});
