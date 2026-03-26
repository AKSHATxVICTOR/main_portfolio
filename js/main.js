/* ==============================================
   HERO SCROLL-DRIVEN CANVAS ANIMATION
   Apple/PS5-style: scroll controls the scene
=============================================== */
(function() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // ── Resize ──────────────────────────────────
  function resize() {
    canvas.width  = canvas.offsetWidth  * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    buildScene();
  }

  let W = 0, H = 0;
  window.addEventListener('resize', resize);

  // ── Scroll progress (0 → 1 over the hero height) ──
  let scrollProgress = 0;
  window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    const heroH = hero.offsetHeight;
    scrollProgress = Math.min(1, Math.max(0, window.scrollY / heroH));
  }, { passive: true });

  // ── Config ──────────────────────────────────
  const GOLD    = '#c8a96e';
  const GOLD2   = '#e8d5a3';
  const DIM     = 'rgba(200,169,110,';
  const WHITE   = 'rgba(240,237,232,';
  const TEAL    = 'rgba(110,200,180,';

  const CODE_TOKENS = [
    'import pandas', 'df.groupby()', '.fit(X_train)', 'model.predict()',
    'SELECT *', 'WHERE id =', 'JOIN users', 'ORDER BY',
    'val intent =', 'suspend fun', 'coroutineScope', 'Flow<Data>',
    'async/await', 'fetch(url)', 'JSON.parse()', 'Promise.all()',
    'O(n log n)', 'Θ(1)', 'σ = 0.02', 'μ = 0.98',
    '∇loss', 'epochs=50', 'batch=32', 'lr=0.001',
    '{ nodes: 12 }', 'edge(A→B)', 'cluster(k=3)', 'pca.fit()',
  ];

  // ── Scene elements ───────────────────────────
  let streams = [];       // vertical code rain columns
  let nodes   = [];       // network graph nodes
  let edges   = [];       // network graph edges
  let sparks  = [];       // floating token labels
  let grid    = [];       // background grid lines

  function buildScene() {
    // Code rain streams
    streams = [];
    const cols = Math.floor(W / 22);
    for (let i = 0; i < cols; i++) {
      streams.push({
        x: (i / cols) * W + 11,
        chars: Array.from({ length: 28 }, () => Math.random() < 0.5 ? '1' : '0'),
        speed: 0.4 + Math.random() * 0.8,
        offset: Math.random() * 28,
        alpha: 0.06 + Math.random() * 0.1,
        bright: Math.floor(Math.random() * 28), // one bright char per column
      });
    }

    // Network nodes
    nodes = [];
    const nodeCount = 18;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: 0.05 * W + Math.random() * 0.9 * W,
        y: 0.05 * H + Math.random() * 0.9 * H,
        r: 2 + Math.random() * 3,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Edges between nearby nodes
    edges = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        if (Math.sqrt(dx*dx + dy*dy) < W * 0.22) {
          edges.push([i, j]);
        }
      }
    }

    // Floating code sparks
    sparks = Array.from({ length: 14 }, (_, i) => ({
      token: CODE_TOKENS[i % CODE_TOKENS.length],
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.18,
      vy: -0.12 - Math.random() * 0.2,
      alpha: 0.12 + Math.random() * 0.25,
      size: 9 + Math.random() * 5,
    }));

    // Grid
    grid = [];
    const gx = Math.floor(W / 60);
    const gy = Math.floor(H / 60);
    for (let i = 0; i <= gx; i++) grid.push({ type:'v', pos: (i/gx)*W });
    for (let j = 0; j <= gy; j++) grid.push({ type:'h', pos: (j/gy)*H });
  }

  // ── Animation tick ───────────────────────────
  let t = 0;

  function draw() {
    requestAnimationFrame(draw);
    t += 0.012;
    const p = scrollProgress; // 0..1 drives everything

    ctx.clearRect(0, 0, W, H);

    // == LAYER 0: Grid ==
    // Fades in as you scroll
    const gridAlpha = 0.03 + p * 0.06;
    ctx.strokeStyle = `rgba(200,169,110,${gridAlpha})`;
    ctx.lineWidth = 0.5;
    grid.forEach(g => {
      ctx.beginPath();
      if (g.type === 'v') { ctx.moveTo(g.pos, 0); ctx.lineTo(g.pos, H); }
      else                { ctx.moveTo(0, g.pos); ctx.lineTo(W, g.pos); }
      ctx.stroke();
    });

    // == LAYER 1: Code rain (binary columns) ==
    // Present at rest, intensifies with scroll
    const rainIntensity = 0.4 + p * 0.6;
    ctx.font = '11px "JetBrains Mono", monospace';
    streams.forEach(s => {
      s.offset = (s.offset + s.speed * 0.015) % 28;
      for (let row = 0; row < 28; row++) {
        const charIdx = (row + Math.floor(s.offset)) % 28;
        const isBright = row === s.bright;
        const fadeRow  = 1 - (row / 28);
        const alpha = isBright
          ? (0.55 + p * 0.3) * rainIntensity
          : s.alpha * fadeRow * rainIntensity;
        const color = isBright ? GOLD2 : GOLD;
        ctx.fillStyle = `${color.replace('#','').length === 6
          ? `rgba(${parseInt(color.slice(1,3),16)},${parseInt(color.slice(3,5),16)},${parseInt(color.slice(5,7),16)},${alpha})`
          : color}`;

        // manual GOLD hex → rgba
        if (isBright) {
          ctx.fillStyle = `rgba(232,213,163,${alpha})`;
        } else {
          ctx.fillStyle = `rgba(200,169,110,${alpha})`;
        }
        ctx.fillText(s.chars[charIdx], s.x, row * 22 + 12);
      }
    });

    // == LAYER 2: Network graph ==
    // Draws in as scroll increases
    const netAlpha = p * p; // quadratic — appears later in scroll
    if (netAlpha > 0.01) {
      // Update node positions (slow drift)
      nodes.forEach(n => {
        n.pulse += 0.015;
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      // Edges
      ctx.lineWidth = 0.8;
      edges.forEach(([i, j]) => {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const fade = Math.max(0, 1 - dist / (W * 0.22));
        ctx.strokeStyle = `rgba(200,169,110,${netAlpha * fade * 0.35})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        // Bezier curve for each edge
        const mx = (a.x + b.x) / 2 + Math.sin(t + i) * 12;
        const my = (a.y + b.y) / 2 + Math.cos(t + j) * 12;
        ctx.quadraticCurveTo(mx, my, b.x, b.y);
        ctx.stroke();
      });

      // Nodes
      nodes.forEach((n, i) => {
        const pulse = 0.7 + 0.3 * Math.sin(n.pulse);
        const r = n.r * pulse;
        // Glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 5);
        grd.addColorStop(0, `rgba(200,169,110,${netAlpha * 0.5})`);
        grd.addColorStop(1, 'rgba(200,169,110,0)');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 5, 0, Math.PI * 2);
        ctx.fill();
        // Core
        ctx.fillStyle = `rgba(232,213,163,${netAlpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Data packet traveling along random edges
      const edgeIdx = Math.floor(t * 0.8) % edges.length;
      const [ei, ej] = edges[edgeIdx] || [0, 1];
      if (nodes[ei] && nodes[ej]) {
        const tp = (t * 0.8) % 1;
        const px = nodes[ei].x + (nodes[ej].x - nodes[ei].x) * tp;
        const py = nodes[ei].y + (nodes[ej].y - nodes[ei].y) * tp;
        ctx.fillStyle = `rgba(255,220,130,${netAlpha * 0.95})`;
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();
        // Trail
        for (let tr = 1; tr <= 5; tr++) {
          const ttp = Math.max(0, tp - tr * 0.04);
          const trx = nodes[ei].x + (nodes[ej].x - nodes[ei].x) * ttp;
          const try_ = nodes[ei].y + (nodes[ej].y - nodes[ei].y) * ttp;
          ctx.fillStyle = `rgba(200,169,110,${netAlpha * (0.5 - tr * 0.09)})`;
          ctx.beginPath();
          ctx.arc(trx, try_, 2 - tr*0.25, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // == LAYER 3: Floating code tokens ==
    // Start fading in at p > 0.3
    const tokenAlpha = Math.max(0, (p - 0.25) / 0.75);
    if (tokenAlpha > 0.01) {
      sparks.forEach(s => {
        s.x += s.vx; s.y += s.vy;
        if (s.y < -20) { s.y = H + 10; s.x = Math.random() * W; }
        if (s.x < -80 || s.x > W + 80) s.vx *= -1;
        ctx.font = `${s.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `rgba(200,169,110,${s.alpha * tokenAlpha})`;
        ctx.fillText(s.token, s.x, s.y);
      });
    }

    // == LAYER 4: Horizontal scan line (scroll-driven) ==
    // A bright line sweeps down as you scroll
    if (p > 0.05) {
      const scanY = p * H;
      const scanGrd = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
      scanGrd.addColorStop(0,   'rgba(200,169,110,0)');
      scanGrd.addColorStop(0.4, `rgba(200,169,110,${p * 0.12})`);
      scanGrd.addColorStop(0.5, `rgba(232,213,163,${p * 0.25})`);
      scanGrd.addColorStop(0.6, `rgba(200,169,110,${p * 0.12})`);
      scanGrd.addColorStop(1,   'rgba(200,169,110,0)');
      ctx.fillStyle = scanGrd;
      ctx.fillRect(0, scanY - 40, W, 80);
    }

    // == LAYER 5: Vignette ==
    const vig = ctx.createRadialGradient(W/2, H/2, H*0.2, W/2, H/2, H*0.85);
    vig.addColorStop(0, 'rgba(14,14,15,0)');
    vig.addColorStop(1, 'rgba(14,14,15,0.72)');
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, W, H);
  }

  // Init
  resize();
  draw();
})();

/* ==============================================
   SCROLL PROGRESS BAR
=============================================== */
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}, { passive: true });

/* ==============================================
   GENERIC OBSERVER HELPER
=============================================== */
function observe(selector) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = Number(entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add('visible'), delay);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(selector).forEach(el => obs.observe(el));
}

/* ==============================================
   SECTION LABELS — LINE WIPE
=============================================== */
document.querySelectorAll('.section-label').forEach(label => {
  const text = label.textContent;
  label.innerHTML = `<span class="section-label-inner">${text}</span>`;
});
observe('.section-label-inner');

/* ==============================================
   SECTION HEADINGS — WORD SPLIT
=============================================== */
document.querySelectorAll('.section h2').forEach(h2 => {
  const parts = h2.innerHTML.split(/(<br\s*\/?>)/gi);
  h2.innerHTML = parts.map(part => {
    if (/^<br/i.test(part)) return part;
    return part.split(' ').filter(Boolean).map((word, i) =>
      `<span class="split-word"><span class="split-word-inner" data-delay="${i * 80}">${word}</span></span>`
    ).join(' ');
  }).join('');

  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.split-word-inner').forEach(el => {
          setTimeout(() => el.classList.add('visible'), Number(el.dataset.delay || 0));
        });
        entry.disconnect();
      }
    });
  }, { threshold: 0.2 }).observe(h2);
});

/* ==============================================
   ABOUT — SLIDE DIRECTIONS
=============================================== */
const aboutText = document.querySelector('.about-text');
if (aboutText) aboutText.classList.add('reveal-left');
observe('.reveal-left');
observe('.skeu-terminal');

document.querySelectorAll('.principle-list li').forEach((li, i) => {
  li.dataset.delay = 100 + i * 120;
});
observe('.principle-list li');

/* ==============================================
   PROJECT CARDS — STAGGERED
=============================================== */
document.querySelectorAll('.project-card').forEach((card, i) => {
  card.dataset.delay = i * 140;
});
observe('.project-card');

/* ==============================================
   SKILLS BENTO — STAGGERED
=============================================== */
document.querySelectorAll('.skill-block').forEach((block, i) => {
  block.dataset.delay = i * 100;
});
observe('.skill-block');

document.querySelectorAll('.skill-pills a').forEach((pill, i) => {
  pill.classList.add('skill-pill-item');
  pill.dataset.delay = i * 55;
});
observe('.skill-pill-item');

/* ==============================================
   SEE ALL + FOOTER
=============================================== */
const seeAll = document.querySelector('.see-all');
if (seeAll) { seeAll.classList.add('reveal-scale'); observe('.reveal-scale'); }
const footer = document.querySelector('.footer');
if (footer) { footer.classList.add('reveal'); observe('.footer'); }

/* ==============================================
   FAB — HIDE WHEN FOOTER IS VISIBLE
=============================================== */
const fabGroup = document.querySelector('.fab-group');
if (fabGroup && footer) {
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      fabGroup.classList.toggle('fab-group--hidden', entry.isIntersecting);
    });
  }, { threshold: 0.05 }).observe(footer);
}

/* ==============================================
   FLOATING CARDS PARALLAX
=============================================== */
const cards = document.querySelectorAll('.floating-card');
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      cards.forEach((card, i) => {
        const speed = 0.04 + i * 0.02;
        card.style.transform = `translateY(${scrollY * speed}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

/* ==============================================
   NAV — ACTIVE STATE + COMPACT ON SCROLL
=============================================== */
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const nav = document.querySelector('.nav');

const navSectionObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? '#c8a96e' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -40% 0px' });
sections.forEach(s => navSectionObs.observe(s));

window.addEventListener('scroll', () => {
  nav.style.transition = 'padding 0.3s ease';
  nav.style.padding = window.scrollY > 60 ? '0.75rem 3rem' : '';
}, { passive: true });
