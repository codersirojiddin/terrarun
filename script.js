// ══════════════════════════════════════
// TERRARUN WEBSITE SCRIPT
// ══════════════════════════════════════

// Toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('open');
    }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobileMenu');
    const nav = document.querySelector('nav');
    if (menu && menu.classList.contains('open')) {
        if (!nav.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('open');
        }
    }
});

// FAQ accordion
function toggleFaq(btn) {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}

// Version tabs
const versionData = {
    stable: [
        { platform: 'Android', name: 'TerraRun APK', version: '1.2.0', label: 'Latest Stable', size: '12 MB', req: 'Android 8.0+', link: 'TerraRun.apk', featured: true, btnText: '⬇ Download APK' },
        { platform: 'Sideload Guide', name: 'Install Help', version: '', label: 'Step-by-step setup guide', size: '3 min read', req: '', link: '#faq', featured: false, btnText: 'Read Guide →' }
    ],
    beta: [
        { platform: 'Android Beta', name: 'TerraRun Beta', version: '1.3.0-beta', label: 'Beta — May Contain Bugs', size: '13 MB', req: 'Android 9.0+', link: '#', featured: true, btnText: '⬇ Download Beta' },
    ],
    legacy: [
        { platform: 'Android', name: 'TerraRun APK', version: '1.0.0', label: 'Legacy Release', size: '9 MB', req: 'Android 7.0+', link: '#', featured: false, btnText: '⬇ Download v1.0' },
    ]
};

function setVersion(v, btn) {
    document.querySelectorAll('.version-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    const cards = document.getElementById('downloadCards');
    if (cards) {
        cards.innerHTML = versionData[v].map((d, i) => `
        <div class="download-card ${d.featured ? 'featured' : ''} reveal visible" style="transition-delay:${i * 0.1}s">
            <div class="dc-platform">${d.platform}</div>
            <div class="dc-name">${d.name}</div>
            <div class="dc-version">${d.version ? `Version <strong>${d.version}</strong> · ` : ''}${d.label}</div>
            <div class="dc-meta">
                ${d.size ? `<span class="dc-meta-item">📦 ${d.size}</span>` : ''}
                ${d.req ? `<span class="dc-meta-item">📱 ${d.req}</span>` : ''}
            </div>
            <a href="${d.link}" ${d.link === 'TerraRun.apk' ? 'download' : ''} class="btn-dl ${d.featured ? 'btn-dl-accent' : 'btn-dl-outline'}">${d.btnText}</a>
        </div>
        `).join('');
    }
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth nav highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
        const href = a.getAttribute('href');
        if (href.startsWith('#')) {
            const isActive = href === '#' + current;
            a.style.color = isActive ? 'var(--accent)' : '';
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Skip if it's a page navigation link
        if (!href.startsWith('#') || href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navHeight = 64;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            const menu = document.getElementById('mobileMenu');
            if (menu && menu.classList.contains('open')) {
                menu.classList.remove('open');
            }
        }
    });
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

if (navbar) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 10) {
            navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.12)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.07)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// Animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape
    if (e.key === 'Escape') {
        const menu = document.getElementById('mobileMenu');
        if (menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    }
});

// Performance monitoring
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time: ' + pageLoadTime + 'ms');
    });
}

import { db } from './firebase.js';
import { doc, getDoc, collection, getDocs, query, orderBy, limit } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

// Handle Dynamic Admin Content (Firestore Simulation)
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const docRef = doc(db, 'settings', 'global');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            const data = docSnap.data();
            
            // 1. ANNOUNCEMENT BANNER
            if (data.announcement && data.announcement.trim() !== '') {
                const nav = document.querySelector('nav');
                const banner = document.createElement('div');
                banner.style.cssText = 'background: linear-gradient(90deg, var(--accent), var(--accent2)); color: #000; text-align: center; padding: 10px 20px; font-weight: 600; font-size: 14px; position: relative; z-index: 1001; font-family: "Space Mono", monospace; letter-spacing: 0.5px;';
                banner.innerHTML = data.announcement;
                document.body.prepend(banner);
            }

            // 2. STATS (Downloads)
            const downloadStatElement = document.querySelector('.stats-bar .stat-item:first-child .stat-num');
            if (downloadStatElement) {
                const count = data.downloadsCount;
                if (!isNaN(count) && count > 1000) {
                    downloadStatElement.innerText = Math.floor(count / 1000) + 'K+';
                } else if (!isNaN(count)) {
                    downloadStatElement.innerText = count;
                }
            }

            // 3. EVENTS (index.html)
            const eventsGrid = document.querySelector('.events-grid');
            if (eventsGrid && data.featuredEventName && data.featuredEventDate) {
                // Parse date like "August 15, 2026"
                const dateParts = data.featuredEventDate.split(' ');
                let month = dateParts.length > 0 ? dateParts[0] : 'TBD';
                let day = dateParts.length > 1 ? dateParts[1].replace(',', '') : '00';
                let year = dateParts.length > 2 ? dateParts[2] : '';
                
                // Keep the existing DOM structure but override the first event
                const firstEvent = eventsGrid.children[0];
                if (firstEvent) {
                    firstEvent.querySelector('.event-date').innerText = day;
                    firstEvent.querySelector('.event-month').innerText = `${month} ${year}`;
                    firstEvent.querySelector('.event-title').innerText = data.featuredEventName;
                }
            }
        }
        
        // 4. TEAM MEMBERS (about/index.html)
        const teamGrid = document.querySelector('.team-grid');
        if (teamGrid) {
            const teamQuery = query(collection(db, 'teamMembers'), orderBy('createdAt', 'desc'));
            const teamSnapshot = await getDocs(teamQuery);
            if (!teamSnapshot.empty) {
                teamSnapshot.forEach(docSnap => {
                    const t = docSnap.data();
                    const newMember = document.createElement('div');
                    newMember.className = 'team-card reveal visible';
                    newMember.innerHTML = `
                        <div class="team-avatar">😎</div>
                        <h3 style="font-family: monospace">${t.name}</h3>
                        <p class="team-role">${t.role}</p>
                        <p class="team-bio">${t.bio}</p>
                    `;
                    teamGrid.prepend(newMember);
                });
            }
        }

        // 5. BLOG POSTS (blog/index.html)
        const allPosts = document.querySelector('.all-posts');
        if (allPosts) {
            const h2 = allPosts.querySelector('h2');
            const blogQuery = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
            const blogSnapshot = await getDocs(blogQuery);
            if (!blogSnapshot.empty) {
                blogSnapshot.forEach(docSnap => {
                    const post = docSnap.data();
                    const newPost = document.createElement('article');
                    newPost.className = 'blog-list-item reveal visible';
                    newPost.innerHTML = `
                        <div class="blog-list-date">${post.dateLabel}</div>
                        <div class="blog-list-content">
                            <h3>${post.title}</h3>
                            <p>${post.content}</p>
                            <div class="blog-list-meta">
                                <span class="blog-post-tag">Update</span>
                                <span>1 min read</span>
                            </div>
                        </div>
                        <a href="#" class="blog-list-link">→</a>
                    `;
                    // Insert after h2
                    if (h2 && h2.nextSibling) {
                        allPosts.insertBefore(newPost, h2.nextSibling);
                    } else {
                        allPosts.appendChild(newPost);
                    }
                });
            }
        }

    } catch(error) {
        console.error('Error fetching dynamic content:', error);
    }
});

// Since script.js is now a type="module", variables and functions are not globally scoped
// We need to attach things like toggleMenu, toggleFaq, setVersion to the window object
window.toggleMenu = function() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('open');
    }
}

window.toggleFaq = function(btn) {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}

window.setVersion = function(v, btn) {
    document.querySelectorAll('.version-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    const cards = document.getElementById('downloadCards');
    if (cards) {
        cards.innerHTML = versionData[v].map((d, i) => `
        <div class="download-card ${d.featured ? 'featured' : ''} reveal visible" style="transition-delay:${i * 0.1}s">
            <div class="dc-platform">${d.platform}</div>
            <div class="dc-name">${d.name}</div>
            <div class="dc-version">${d.version ? `Version <strong>${d.version}</strong> · ` : ''}${d.label}</div>
            <div class="dc-meta">
                ${d.size ? `<span class="dc-meta-item">📦 ${d.size}</span>` : ''}
                ${d.req ? `<span class="dc-meta-item">📱 ${d.req}</span>` : ''}
            </div>
            <a href="${d.link}" ${d.link === 'TerraRun.apk' ? 'download' : ''} class="btn-dl ${d.featured ? 'btn-dl-accent' : 'btn-dl-outline'}">${d.btnText}</a>
        </div>
        `).join('');
    }
}
