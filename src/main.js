import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { doraData, photoColorSets } from './data/Dora.ts'
import VanillaTilt from 'vanilla-tilt'

createApp(App).mount('#app')

// State
let currentIndex = 0;
let titleShown = false;
const totalCards = 1 + doraData.images.length + doraData.facts.length;

// DOM Elements
const card = document.getElementById('doraCard')
const mainTitle = document.getElementById('mainTitle')
const themeToggle = document.getElementById('themeToggle')
const themeIconLight = themeToggle.querySelector('.theme-icon-light')
const themeIconDark = themeToggle.querySelector('.theme-icon-dark')
const progressDots = document.getElementById('progressDots')
const orbs = document.querySelectorAll('.glow-orb')

// Helper Functions
function isIntroCard() {
  return currentIndex === 0
}

function isPhotoCard() {
  const adjustedIndex = currentIndex - 1
  return adjustedIndex % 2 === 0
}

function getPhotoIndex() {
  return Math.floor((currentIndex - 1) / 2)
}

function getFactIndex() {
  return Math.floor((currentIndex - 1) / 2)
}

function setGlowColors(colorSet) {
  orbs.forEach((orb, index) => {
    const color = colorSet[index % colorSet.length]
    orb.style.background = `radial-gradient(circle, ${color} 0%, ${color}66 30%, ${color}33 50%, transparent 75%)`
  })
}

function showTitle() {
  if (!titleShown) {
    titleShown = true
    mainTitle.classList.add('visible')
  }
}

// Theme Functions
function initTheme() {
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const savedTheme = localStorage.getItem('theme')
  setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'))
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  if (theme === 'dark') {
    themeIconLight.style.display = 'none'
    themeIconDark.style.display = 'block'
  } else {
    themeIconLight.style.display = 'block'
    themeIconDark.style.display = 'none'
  }
  localStorage.setItem('theme', theme)
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme')
  setTheme(current === 'dark' ? 'light' : 'dark')
})

// Progress Dots
function createProgressDots() {
  progressDots.innerHTML = ''
  for (let i = 0; i < totalCards; i++) {
    const dot = document.createElement('div')
    dot.className = `dot ${i === currentIndex ? 'active' : ''}`
    progressDots.appendChild(dot)
  }
}

function updateProgressDots() {
  progressDots.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex)
  })
}

// Card Render
function renderCard() {
  card.classList.remove('intro', 'photo', 'fact')

  if (isIntroCard()) {
    card.classList.add('intro')
    setGlowColors(['#ff69b4', '#9b59b6', '#00ced1'])
    card.innerHTML = `
      <p class="card-title">Королева<br>кьют-рока</p>
      <span class="card-hint">нажми, чтобы начать →</span>
    `
  } else if (isPhotoCard()) {
    card.classList.add('photo')
    const photoIdx = getPhotoIndex()
    const colorSet = photoColorSets[photoIdx % photoColorSets.length]
    setGlowColors(colorSet)

    card.innerHTML = `
      <span class="card-type">фото</span>
      <img class="card-image" src="${doraData.images[photoIdx]}" alt="Дора">
      <span class="card-hint">нажми →</span>
    `
  } else {
    card.classList.add('fact')
    const factIdx = getFactIndex()
    const fact = doraData.facts[factIdx]
    setGlowColors(fact.colors)

    card.innerHTML = `
      <span class="card-type">факт</span>
      <span class="card-icon">${fact.icon}</span>
      <p class="card-fact-title">${fact.title}</p>
      <p class="card-fact">${fact.text}</p>
      <span class="card-hint">нажми →</span>
    `
  }

  updateProgressDots()

  // Reinitialize vanilla-tilt
  if (card.vanillaTilt) {
    card.vanillaTilt.destroy()
  }

  // Load vanilla-tilt from CDN
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init([card], {
        max: 15,
        speed: 400,
        perspective: 1000,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: 1.03,
        transition: true,
        reverse: true,
        glare: false,
    })
  }
}

// Card Click
card.addEventListener('click', () => {
  if (isIntroCard()) {
    showTitle()
  }

  card.classList.add('clicking')

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % totalCards
    renderCard()

    card.classList.remove('clicking')
    card.classList.add('new')
    setTimeout(() => card.classList.remove('new'), 500)
  }, 600)
})

// System Theme Change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light')
  }
})

// Init Function
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCard();
    createProgressDots();
})
