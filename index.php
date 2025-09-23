<?php
// Contador de descargas
$counter_file = 'downloads_counter.txt';

// Leer el contador actual
if (file_exists($counter_file)) {
    $current_count = (int)file_get_contents($counter_file);
} else {
    $current_count = 0;
}

// Incrementar contador si se hizo clic en descargar
if (isset($_GET['download'])) {
    $current_count++;
    file_put_contents($counter_file, $current_count);
    // Redirigir a la página de descargas
    header('Location: https://descargas.ututo.ar');
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ututo 11 - Optimizado, innovador, histórico y ante todo libre</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="nav-container">
                <div class="logo">
                    <div class="logo-icon">🐧</div>
                    <span class="logo-text">Ututo</span>
                </div>
                <ul class="nav-menu">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#ventajas">Ventajas</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#comunidad">Comunidad</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
                <div class="nav-actions">
                    <button class="theme-toggle" id="themeToggle">🌙</button>
                    <a href="?download=1" class="download-nav-btn" target="_blank">Descarga Ututo</a>
                </div>
            </div>
        </nav>
    </header>

    <main class="main">
        <section class="hero" id="inicio">
            <div class="hero-container">
                <div class="hero-content">
                    <div class="hero-badge">ututo-11</div>
                    <h1 class="hero-title">
                        Ututo: <span class="gradient-text">Optimizado, innovador, histórico</span> y totalmente libre
                    </h1>
                    <p class="hero-description">
                        Descubrí Ututo, la evolución de GNU/Linux, donde cada elemento es completamente libre. 
                        Originaria de Argentina, y dedicada a usuarios que anhelan transparencia y control total, 
                        Ututo es un puente hacia una computación más ética. Con Ututo, disfrutá de una tecnología 
                        que respeta tu libertad, y fomenta una comunidad comprometida con el avance del software libre.
                    </p>
                    <div class="hero-actions">
                        <a href="?download=1" class="download-btn primary" target="_blank">
                            <span class="download-icon">⬇</span>
                            Descarga Ututo
                        </a>
                        <a href="#codebase" class="download-btn secondary">
                            <span class="code-icon">📁</span>
                            Codebase
                        </a>
                    </div>
                    <div class="hero-stats">
                        <div class="download-stat-card">
                            <div class="stat-icon">⬇️</div>
                            <div class="stat-content">
                                <span class="stat-number"><?php echo number_format($current_count); ?></span>
                                <span class="stat-label">Descargas</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="terminal-window">
                        <div class="terminal-header">
                            <div class="terminal-buttons">
                                <span class="btn close"></span>
                                <span class="btn minimize"></span>
                                <span class="btn maximize"></span>
                            </div>
                            <div class="terminal-title">ututo@ututo:~$</div>
                        </div>
                        <div class="terminal-body">
                            <div class="terminal-line">
                                <span class="prompt">ututo@ututo:~$</span>
                                <span class="command">uname -a</span>
                            </div>
                            <div class="terminal-output">
                                Linux ututo 6.5.0-41-generic #41~11-Ututo SMP PREEMPT_DYNAMIC Mon Jun 3 11:32:55 UTC 2 x86_64 x86_64 x86_64 GNU/Linux
                            </div>
                            <div class="terminal-line">
                                <span class="prompt">ututo@ututo:~$</span>
                                <span class="command typing">sudo dnf update</span>
                                <span class="cursor">█</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="why-ututo" id="ventajas">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">¿Por qué UTUTO?</h2>
                    <p class="section-subtitle">
                        Ututo es sinónimo de libertad tecnológica y privacidad indiscutible. Un sistema operativo libre para modificar y compartir, que respeta tus datos y se adapta a cualquier hardware.
                    </p>
                </div>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">🛡️</div>
                        <h3>Libertad</h3>
                        <p>Tomá el control de tu experiencia digital con UTUTO. Libertad para elegir, libertad para compartir, libertad para colaborar.</p>
                        <a href="#" class="feature-link">Leer más →</a>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">🔒</div>
                        <h3>Seguridad</h3>
                        <p>Protegé tu privacidad y tus datos con UTUTO. Nuestro compromiso con la seguridad digital es inquebrantable.</p>
                        <a href="#" class="feature-link">Leer más →</a>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">⚡</div>
                        <h3>Rendimiento</h3>
                        <p>Experimentá la velocidad y el rendimiento de UTUTO. Nuestro sistema operativo está diseñado para funcionar en cualquier entorno.</p>
                        <a href="#" class="feature-link">Leer más →</a>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">🔐</div>
                        <h3>Privacidad</h3>
                        <p>La privacidad es un derecho humano fundamental. Con UTUTO, podés estar seguro de que tus datos están protegidos y seguros.</p>
                        <a href="#" class="feature-link">Leer más →</a>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">👥</div>
                        <h3>Comunidad</h3>
                        <p>Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.</p>
                        <a href="#" class="feature-link">Leer más →</a>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">📈</div>
                        <h3>Crecimiento</h3>
                        <p>Crecé con UTUTO. Nuestro sistema operativo está diseñado para adaptarse a tus necesidades y crecer con vos.</p>
                        <a href="#" class="feature-link">Leer más →</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="history" id="nosotros">
            <div class="container">
                <div class="history-content">
                    <div class="history-text">
                        <h2 class="section-title">¿Cómo comenzó UTUTO?</h2>
                        <p>
                            UTUTO surgió en el año 2000 como la primera distribución GNU/Linux reconocida por el Proyecto GNU, 
                            gracias a su dedicación exclusiva al software libre. Creado por Diego Saravia en Argentina, 
                            se popularizó por su accesibilidad y la novedad del CD vivo.
                        </p>
                        <p>
                            A lo largo de los años, UTUTO ha evolucionado con variantes como UTUTO-R y UTUTO XS, 
                            manteniendo siempre su espíritu original. Tras una pausa, la comunidad se ha organizado 
                            para revivir y actualizar UTUTO para los usuarios actuales.
                        </p>
                        <div class="history-highlight">
                            <div class="highlight-icon">🏆</div>
                            <div class="highlight-text">
                                <strong>Primera distribución GNU/Linux</strong><br>
                                Reconocida por el Proyecto GNU
                            </div>
                        </div>
                    </div>
                    <div class="history-visual">
                        <div class="keyboard-visual">
                            <div class="keyboard">
                                <div class="keyboard-row">
                                    <div class="key">esc</div>
                                    <div class="key">F1</div>
                                    <div class="key">F2</div>
                                    <div class="key">F3</div>
                                    <div class="key">F4</div>
                                    <div class="key">F5</div>
                                    <div class="key">F6</div>
                                    <div class="key">F7</div>
                                    <div class="key">F8</div>
                                    <div class="key">F9</div>
                                    <div class="key">F10</div>
                                    <div class="key">F11</div>
                                    <div class="key">F12</div>
                                </div>
                                <div class="keyboard-row">
                                    <div class="key">~</div>
                                    <div class="key">!</div>
                                    <div class="key">@</div>
                                    <div class="key">#</div>
                                    <div class="key">$</div>
                                    <div class="key">%</div>
                                    <div class="key">^</div>
                                    <div class="key">&</div>
                                    <div class="key">*</div>
                                    <div class="key">(</div>
                                    <div class="key">)</div>
                                    <div class="key">_</div>
                                    <div class="key">+</div>
                                </div>
                                <div class="keyboard-row">
                                    <div class="key wide">Tab</div>
                                    <div class="key">Q</div>
                                    <div class="key">W</div>
                                    <div class="key">E</div>
                                    <div class="key">R</div>
                                    <div class="key">T</div>
                                    <div class="key">Y</div>
                                    <div class="key">U</div>
                                    <div class="key">I</div>
                                    <div class="key">O</div>
                                    <div class="key">P</div>
                                    <div class="key">[</div>
                                    <div class="key">]</div>
                                    <div class="key">\</div>
                                </div>
                                <div class="keyboard-row">
                                    <div class="key wide">Caps</div>
                                    <div class="key">A</div>
                                    <div class="key">S</div>
                                    <div class="key">D</div>
                                    <div class="key">F</div>
                                    <div class="key">G</div>
                                    <div class="key">H</div>
                                    <div class="key">J</div>
                                    <div class="key">K</div>
                                    <div class="key">L</div>
                                    <div class="key">:</div>
                                    <div class="key">"</div>
                                    <div class="key wide">Enter</div>
                                </div>
                                <div class="keyboard-row">
                                    <div class="key wide">Shift</div>
                                    <div class="key">Z</div>
                                    <div class="key">X</div>
                                    <div class="key">C</div>
                                    <div class="key">V</div>
                                    <div class="key">B</div>
                                    <div class="key">N</div>
                                    <div class="key">M</div>
                                    <div class="key"><</div>
                                    <div class="key">></div>
                                    <div class="key">?</div>
                                    <div class="key wide">Shift</div>
                                </div>
                            </div>
                            <div class="ututo-badge">@UtutoLinux</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="wallpapers" id="comunidad">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Fondos de pantalla UTUTO!</h2>
                    <p class="section-subtitle">
                        Personalizá tu escritorio con los fondos de pantalla de UTUTO. Descargá los diseños exclusivos de la comunidad para darle un toque único a tu sistema operativo.
                    </p>
                </div>
                <div class="wallpapers-grid">
                    <div class="wallpaper-item">
                        <div class="wallpaper-preview ututo-colors-centered"></div>
                        <h4>Colores centrado - Ututo 11</h4>
                    </div>
                    <div class="wallpaper-item">
                        <div class="wallpaper-preview ututo-colors-simple"></div>
                        <h4>Colores simple - Ututo 11</h4>
                    </div>
                    <div class="wallpaper-item">
                        <div class="wallpaper-preview ututo-colors-texture"></div>
                        <h4>Colores textura - Ututo 11</h4>
                    </div>
                    <div class="wallpaper-item">
                        <div class="wallpaper-preview ututo-violetas"></div>
                        <h4>Violetas - Ututo 11</h4>
                    </div>
                    <div class="wallpaper-item">
                        <div class="wallpaper-preview emirchus-green"></div>
                        <h4>Spacing green - Emirchus</h4>
                    </div>
                    <div class="wallpaper-item">
                        <div class="wallpaper-preview emirchus-violet"></div>
                        <h4>Spacing violet - Emirchus</h4>
                    </div>
                </div>
                <div class="wallpapers-cta">
                    <a href="#" class="download-btn secondary">
                        <span class="download-icon">⬇</span>
                        Descargar wallpapers
                    </a>
                </div>
            </div>
        </section>

        <section class="download-section">
            <div class="container">
                <div class="download-cta">
                    <h2>¿Listo para probar Ututo 11?</h2>
                    <p>Únete a miles de usuarios que ya disfrutan de la libertad del software libre</p>
                    <a href="?download=1" class="download-btn large" target="_blank">
                        <span class="download-icon">⬇</span>
                        DESCARGAR UTUTO 11 AHORA
                    </a>
                    <div class="download-stats">
                        <div class="stat">
                            <span class="stat-number"><?php echo number_format($current_count); ?></span>
                            <span class="stat-label">Descargas</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">11</span>
                            <span class="stat-label">Versión</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">100%</span>
                            <span class="stat-label">Libre</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <div class="logo-icon">🐧</div>
                        <span class="logo-text">Ututo Linux</span>
                    </div>
                    <p>Ututo es una distribución de Linux Argentina, hecha por la comunidad.</p>
                </div>
                <div class="footer-section">
                    <h3>Sobre Nosotros</h3>
                    <ul>
                        <li><a href="#">Wikipedia</a></li>
                        <li><a href="#">Legacy</a></li>
                        <li><a href="#">Ututo 11</a></li>
                        <li><a href="#">Roadmap Ututo 11</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Ututo 11</h3>
                    <ul>
                        <li><a href="#">Tienda</a></li>
                        <li><a href="#">Discord</a></li>
                        <li><a href="#">Linktree</a></li>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">Spotify</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Ayuda</h3>
                    <ul>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                        <li><a href="#">Guía de uso</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <p>&copy; 2025 Ututo Linux</p>
                    <p>Los contenidos de este sitio están licenciados bajo The GNU Free Documentation License</p>
                </div>
                <div class="footer-social">
                    <a href="#" class="social-link">Github</a>
                    <a href="#" class="social-link">X</a>
                    <a href="#" class="social-link">LinkedIn</a>
                    <a href="#" class="social-link">Discord</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>