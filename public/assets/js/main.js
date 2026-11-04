/* Banggai Paradise Tour & Travel — interactions
   Edit CONFIG below to connect the contact buttons and forms. */
(() => {
  'use strict';

  const CONFIG = {
    whatsapp: '',   // international format without "+", e.g. '6281234567890'
    email: ''       // e.g. 'hello@yourdomain.com'
  };

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- header: solid on scroll ---------- */
  const header = $('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- mobile menu ---------- */
  const burger = $('#burger');
  const menu = $('#menu');
  const setMenu = open => {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('no-scroll', open);
  };
  burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  window.matchMedia('(min-width:981px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

  /* ---------- scroll reveal ---------- */
  const reveals = $$('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  /* ---------- active nav link ---------- */
  const links = $$('.menu a[href^="#"]:not(.menu-cta)');
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const sections = ['home', 'packages', 'destinations', 'about', 'blog'].map(id => document.getElementById(id)).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const so = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        links.forEach(a => a.classList.remove('is-active'));
        const a = map.get(en.target.id);
        if (a) a.classList.add('is-active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => so.observe(s));
  }

  /* ---------- toast ---------- */
  const toast = $('#toast');
  let timer;
  const say = msg => {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove('show'), 4200);
  };

  /* ---------- contact links ---------- */
  const trip = { destination: '', date: '', guests: '' };
  const message = () => {
    const parts = ['Hello Banggai Paradise, I would like to plan a trip.'];
    if (trip.destination) parts.push(`Destination: ${trip.destination}`);
    if (trip.date) parts.push(`Date: ${trip.date}`);
    if (trip.guests) parts.push(`Guests: ${trip.guests}`);
    return parts.join('\n');
  };
  const contact = type => {
    if (type === 'whatsapp' && CONFIG.whatsapp) {
      window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message())}`, '_blank', 'noopener');
    } else if (type === 'email' && CONFIG.email) {
      window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('Trip enquiry')}&body=${encodeURIComponent(message())}`;
    } else {
      say('Thank you! Our team will be in touch soon.');
    }
  };
  $$('[data-contact]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); contact(el.dataset.contact); }));

  /* ---------- booking form ---------- */
  const book = $('#book-form');
  book.addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(book);
    trip.destination = f.get('destination') || '';
    trip.date = f.get('date') || '';
    trip.guests = f.get('guests') || '';
    say('Great choice! Let\'s finalize your trip.');
    setTimeout(() => $('#contact').scrollIntoView({ behavior: 'smooth', block: 'center' }), 500);
  });

  /* ---------- newsletter ---------- */
  const news = $('#news-form');
  news.addEventListener('submit', e => {
    e.preventDefault();
    const email = $('#email');
    if (!email.value || !email.checkValidity()) { email.focus(); say('Please enter a valid email address.'); return; }
    news.reset();
    say('Welcome aboard! Watch your inbox for island travel tips.');
  });

  /* ---------- footer year ---------- */
  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
