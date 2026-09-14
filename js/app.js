/* ==========================================================================
   COMPUTER PLANET - CLIENT INTERACTION SCRIPT (app.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation on Scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Nav Drawer Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  if (navToggle && mobileDrawer) {
    navToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      navToggle.textContent = mobileDrawer.classList.contains('open') ? '✕' : '☰';
    });
    // Close drawer when clicking any link inside
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        navToggle.textContent = '☰';
      });
    });
  }

  // 3. Interactive AMC Quotation Calculator
  const pcSlider = document.getElementById('pcSlider');
  const pcVal = document.getElementById('pcVal');
  const laptopSlider = document.getElementById('laptopSlider');
  const laptopVal = document.getElementById('laptopVal');
  const printerSlider = document.getElementById('printerSlider');
  const printerVal = document.getElementById('printerVal');
  const calcResult = document.getElementById('calcResult');
  const calcTier = document.getElementById('calcTier');

  function updateAmcEstimate() {
    if (!pcSlider || !calcResult) return;
    const pcs = parseInt(pcSlider.value) || 0;
    const laptops = parseInt(laptopSlider?.value || 0);
    const printers = parseInt(printerSlider?.value || 0);

    if (pcVal) pcVal.textContent = pcs;
    if (laptopVal) laptopVal.textContent = laptops;
    if (printerVal) printerVal.textContent = printers;

    const totalNodes = pcs + laptops + printers;
    let ratePerNode = 450; // default basic monthly estimate

    if (totalNodes >= 40) {
      ratePerNode = 380; // volume banking tier
      if (calcTier) calcTier.textContent = 'Gold Enterprise / Banking SLA';
    } else if (totalNodes >= 15) {
      ratePerNode = 420;
      if (calcTier) calcTier.textContent = 'Silver Corporate Standard';
    } else {
      ratePerNode = 480;
      if (calcTier) calcTier.textContent = 'Bronze Essential Care';
    }

    const estimatedMonthly = Math.max(1500, totalNodes * ratePerNode);
    calcResult.textContent = '₹' + estimatedMonthly.toLocaleString('en-IN') + '/mo';
  }

  if (pcSlider) {
    pcSlider.addEventListener('input', updateAmcEstimate);
    laptopSlider?.addEventListener('input', updateAmcEstimate);
    printerSlider?.addEventListener('input', updateAmcEstimate);
    updateAmcEstimate();
  }

  // 4. Lead Capture & Service Ticket Intake
  const leadForms = document.querySelectorAll('.lead-capture-form');
  leadForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const lead = {
        id: 'TKT-' + Date.now().toString().slice(-6),
        name: formData.get('name') || 'Inquiry',
        phone: formData.get('phone') || '',
        email: formData.get('email') || '',
        org: formData.get('organization') || 'Individual / SMB',
        serviceType: formData.get('service') || 'General Hardware Service',
        nodes: formData.get('nodes') || '1-5 Units',
        message: formData.get('message') || '',
        status: 'New Inquiry',
        date: new Date().toLocaleDateString('en-IN') + ' ' + new Date().toLocaleTimeString('en-IN', {hour: '2-digit', minute:'2-digit'})
      };

      // Save into LocalStorage for CRM Admin
      try {
        const existing = JSON.parse(localStorage.getItem('cp_leads') || '[]');
        existing.unshift(lead);
        localStorage.setItem('cp_leads', JSON.stringify(existing));
      } catch (err) {
        console.error('Storage error:', err);
      }

      // Show user confirmation
      alert(`✅ Request Submitted Successfully!

Ticket Reference: ${lead.id}
Thank you, ${lead.name}. Our technical desk will contact you at ${lead.phone} shortly.`);
      form.reset();
    });
  });

  // 5. Interactive Photo Gallery & Lightbox
  const galleryItems = document.querySelectorAll('.gallery-item');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const lightbox = document.getElementById('galleryLightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbTitle = document.getElementById('lightboxTitle');
  const lbDesc = document.getElementById('lightboxDesc');
  const lbClose = document.getElementById('lightboxClose');
  const lbPrev = document.getElementById('lightboxPrev');
  const lbNext = document.getElementById('lightboxNext');

  let currentIdx = 0;
  let visibleItems = Array.from(galleryItems);

  // Category Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (cat === 'all' || itemCat === cat) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
      visibleItems = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
    });
  });

  // Lightbox functions
  function showLightbox(idx) {
    if (!lightbox || visibleItems.length === 0) return;
    currentIdx = (idx + visibleItems.length) % visibleItems.length;
    const target = visibleItems[currentIdx];
    const imgElem = target.querySelector('img');
    const title = target.getAttribute('data-title') || imgElem.alt;
    const desc = target.getAttribute('data-desc') || '';

    lbImg.src = target.getAttribute('data-full') || imgElem.src;
    lbTitle.textContent = title;
    lbDesc.textContent = desc;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function hideLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const idx = visibleItems.indexOf(item);
      if (idx !== -1) showLightbox(idx);
    });
  });

  lbClose?.addEventListener('click', hideLightbox);
  lbPrev?.addEventListener('click', () => showLightbox(currentIdx - 1));
  lbNext?.addEventListener('click', () => showLightbox(currentIdx + 1));

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) hideLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape') hideLightbox();
    else if (e.key === 'ArrowLeft') showLightbox(currentIdx - 1);
    else if (e.key === 'ArrowRight') showLightbox(currentIdx + 1);
  });

});