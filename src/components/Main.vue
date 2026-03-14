<script setup lang="ts">
    // nothing
</script>

<template>
    <div class="decoration">🎸</div>
    <div class="decoration">💖</div>
    <div class="decoration">🎵</div>
    <div class="decoration">✨</div>

    <header class="header">
        <div class="logo">ДОРА</div>
        <button class="theme-toggle" id="themeToggle" title="Сменить тему">
            <svg class="theme-icon theme-icon-light" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
            </svg>
            <svg class="theme-icon theme-icon-dark" viewBox="0 0 24 24" style="display: none;">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
        </button>
    </header>

    <main class="main-content">
        <h1 class="title" id="mainTitle">Королева <span>кьют-рока</span></h1>
        
        <div class="card-container">
            <div class="card-glow-container" id="cardGlow">
                <div class="glow-orb"></div>
                <div class="glow-orb"></div>
                <div class="glow-orb"></div>
                <div class="glow-orb"></div>
                <div class="glow-orb"></div>
            </div>
            <div class="card" id="doraCard"></div>
        </div>

        <div class="progress-dots" id="progressDots"></div>

        <div class="links-section">
            <a href="https://music.yandex.ru/artist/6826935" target="_blank" class="music-link yandex">
                <svg class="music-icon" viewBox="0 0 24 24">
                    <path d="M9 18V5l12-2v13"/>
                    <circle cx="6" cy="18" r="3"/>
                    <circle cx="18" cy="16" r="3"/>
                </svg>
                Яндекс
            </a>
            <a href="https://open.spotify.com/artist/2eiThpX5zH6LFmqP2HY1hL" target="_blank" class="music-link spotify">
                <svg class="music-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M7 15c3-1 7-1 10 0"/>
                    <path d="M7 12c3-1 7-1 10 0"/>
                    <path d="M7 9c3-1 7-1 10 0"/>
                </svg>
                Spotify
            </a>
        </div>
    </main>
</template>
