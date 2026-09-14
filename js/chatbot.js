/**
 * Computer Planet IT - AI Technical Assistant ("PlanetBot")
 * Instant Knowledge Engine, Offline-Capable Natural Language Matching
 */

(function () {
  'use strict';

  const KNOWLEDGE_BASE = {
    company: 'M/S COMPUTER PLANET (Sales & Support)',
    address: 'West Kachudharam, Chincoorie, Silchar, Cachar, Assam — 788007',
    phone: '+91 8638083712',
    email: 'computerplanetpkd@gmail.com',
    gps: '24°48\'36.7\"N 92°47\'03.7\"E',
    msme: 'UDYAM-AS-05-0019941',
    gstin: '18ASTPR6755J1ZO',
    pnbContract: 'Punjab National Bank (Silchar Circle) – 49 branches maintained (Ref: PNB/COSIL/021/2023-24)',
    amcRates: {
      bronze: '₹4,500 / node / year (Scheduled quarterly preventive visits, dust & thermal repasting)',
      silver: '₹7,800 / node / year (4-Hour emergency response SLA, backup replacement PC)',
      gold: '₹12,500 / node / year (Mission-critical Banking 2-Hour SLA, on-site resident engineer option)'
    }
  };

  const INTENTS = [
    {
      id: 'greeting',
      patterns: [/(hi|hello|hey|namaste|greetings|morning|afternoon|evening|help)/i],
      response: () => ({
        text: `Hello! 👋 I am **PlanetBot**, your AI Technical Assistant for **M/S Computer Planet Silchar**.\n\nHow can I assist your business or banking branch today? You can ask about our **AMC packages**, **PNB track record**, **hardware repairs**, or **log a breakdown complaint**!`,
        chips: ['⚡ Request AMC Quote', '🏛️ PNB 49 Branches', '🚨 Log Breakdown Ticket', '💰 AMC Pricing', '📍 Office Location']
      })
    },
    {
      id: 'pnb_clientele',
      patterns: [/(pnb|punjab national bank|bank|banks|banking|client|clients|branches|track record|experience|agbb|post office|government)/i],
      response: () => ({
        text: `🏛️ **Proven Banking & PSU IT Track Record**:\n\n• **Punjab National Bank**: Successfully maintained hardware, OS & peripherals across **49 branches** under Silchar Circle (Ref: \`PNB/COSIL/021/2023-24\`). Formal satisfactory performance certificate issued!\n• **Assam Gramin Bikash Bank**: Regional office and branch network maintenance.\n• **Department of Posts (Indian Post)**: Cachar Division counter PCs & biometric terminals.\n• **Government MSME Registered**: \`UDYAM-AS-05-0019941\` | GSTIN: \`18ASTPR6755J1ZO\`.`,
        actions: [
          { text: '📸 View PNB Meeting Photos', action: 'link', url: 'gallery/index.html' },
          { text: '⚡ Request Banking AMC', action: 'scroll', target: '#quote-box' }
        ],
        chips: ['💰 AMC Pricing', '🚨 Log Complaint', '📞 Call Technical Desk']
      })
    },
    {
      id: 'pricing',
      patterns: [/(price|pricing|cost|rate|rates|charge|charges|fee|fees|amc cost|package|packages|estimate|quote)/i],
      response: () => ({
        text: `💰 **Annual Maintenance Contract (AMC) Tiers**:\n\n• **Bronze Essential Care**: ₹4,500/node/yr (Quarterly preventive health audits, remote support)\n• **Silver Corporate Standard**: ₹7,800/node/yr (**4-Hour Response SLA**, standby backup PC, 15% spare parts discount)\n• **Gold Enterprise (Banking SLA)**: ₹12,500/node/yr (**2-Hour Mission-Critical SLA**, dedicated resident engineer option)\n\n*Volume discounts apply for bank circles & multiple branches!*`,
        actions: [
          { text: '🧮 Open Cost Calculator', action: 'scroll', target: '#calculator' },
          { text: '⚡ Get Official Quotation', action: 'scroll', target: '#quote-box' }
        ],
        chips: ['🧮 Calculator', '🏛️ PNB Track Record', '💬 WhatsApp Quote']
      })
    },
    {
      id: 'complaint',
      patterns: [/(complaint|breakdown|broken|problem|issue|repair|fail|failure|urgent|emergency|printer jam|not working|bluescreen|smps)/i],
      response: () => ({
        text: `🚨 **Need Urgent Technical Dispatch?**\n\nYou can log a breakdown ticket immediately. Our Silchar control room dispatches field engineers with an emergency 2-hour turnaround for critical banking accounts!`,
        actions: [
          { text: '🚨 Open Complaint Desk Form', action: 'scroll', target: '#complaint-desk' },
          { text: '📞 Emergency Hotline Call', action: 'call', tel: '+918638083712' },
          { text: '💬 Instant WhatsApp Dispatch', action: 'whatsapp', text: 'EMERGENCY IT BREAKDOWN: Please dispatch engineer.' }
        ],
        chips: ['🚨 Log Complaint', '📞 Call Now', '💰 AMC Pricing']
      })
    },
    {
      id: 'hardware',
      patterns: [/(hardware|ssd|ram|motherboard|switch|cable|cat6|spares|spare parts|thermal paste|smps|printer|toner)/i],
      response: () => ({
        text: `🔧 **Hardware & Component Servicing Capabilities**:\n\n• **Chip-Level Motherboard Repairs** & SMPS diagnostics\n• **Thermal Overhauls**: Ultrasonic dust extraction & Arctic MX-4 paste\n• **In-Stock Spares**: Crucial SSDs, Kingston DDR4/5 RAM, D-Link Gigabit switches, Cat6 cable rolls & toners\n• **Zero-Downtime Standby Spares**: Available during lab diagnostic servicing.`,
        actions: [
          { text: '🔧 Explore Hardware Page', action: 'link', url: 'hardware-maintenance-amc-silchar/index.html' },
          { text: '⚡ Request Parts Replacement', action: 'scroll', target: '#quote-box' }
        ],
        chips: ['🚨 Log Complaint', '💰 AMC Pricing', '📞 Call Us']
      })
    },
    {
      id: 'location',
      patterns: [/(where|location|address|locate|office|place|gps|directions|chincoorie|cachar|silchar)/i],
      response: () => ({
        text: `📍 **M/S Computer Planet Headquarters**:\n\nWest Kachudharam, Chincoorie, Silchar, Cachar, Assam — 788007\n\n• **Official GPS Coordinates**: \`24°48'36.7"N 92°47'03.7"E\`\n• **Operating Hours**: Mon – Sat, 9:00 AM to 7:30 PM (24/7 on-call for Banking AMC clients)`,
        actions: [
          { text: '🗺️ Pinpoint on Google Maps', action: 'link', url: 'https://www.google.com/maps?q=24.810194,92.784361' },
          { text: '📞 Call for Directions', action: 'call', tel: '+918638083712' }
        ],
        chips: ['📞 Call +91 8638083712', '💬 WhatsApp', '⚡ Request Quote']
      })
    },
    {
      id: 'contact',
      patterns: [/(contact|phone|call|number|email|whatsapp|mobile|reach)/i],
      response: () => ({
        text: `📞 **Get in Touch with Computer Planet**:\n\n• **Direct Phone**: +91 8638083712\n• **WhatsApp Support**: +91 8638083712\n• **Official Email**: computerplanetpkd@gmail.com\n• **Control Desk**: West Kachudharam, Chincoorie, Silchar`,
        actions: [
          { text: '📞 Call Now (+91 8638083712)', action: 'call', tel: '+918638083712' },
          { text: '💬 Chat on WhatsApp', action: 'whatsapp', text: 'Hello Computer Planet, I have a service question.' }
        ],
        chips: ['⚡ Request Quote', '🚨 Log Complaint', '📍 Location']
      })
    }
  ];

  function getFallbackResponse(query) {
    return {
      text: `Thank you for your question about "${query}". I want to make sure you get the most accurate assistance from our technical team:\n\nYou can connect with our Chief Engineer right away:`,
      actions: [
        { text: '💬 Chat on WhatsApp', action: 'whatsapp', text: `Hi Computer Planet, inquiry about: ${query}` },
        { text: '📞 Call +91 8638083712', action: 'call', tel: '+918638083712' },
        { text: '⚡ Request AMC Quote', action: 'scroll', target: '#quote-box' }
      ],
      chips: ['💰 AMC Pricing', '🏛️ PNB 49 Branches', '🚨 Log Complaint', '📍 Office Location']
    };
  }

  // --- UI CONTROLLER CLASS ---
  class ComputerPlanetChatbot {
    constructor() {
      this.isOpen = false;
      this.messages = [];
      this.init();
    }

    init() {
      this.buildUI();
      this.bindEvents();
      // Greet user after brief delay
      setTimeout(() => {
        this.addBotMessage(
          `👋 Welcome to **Computer Planet IT**! Need urgent computer repair, banking AMC details, or pricing? Ask me anytime!`
        );
      }, 1200);
    }

    buildUI() {
      const wrapper = document.createElement('div');
      wrapper.className = 'cp-chatbot-wrapper';
      wrapper.innerHTML = `
        <button type="button" class="cp-chat-trigger" id="cpChatTrigger" aria-label="Open AI Assistant">
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5.01L2 22l5.12-1.31C8.58 21.49 10.24 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
          <span class="cp-chat-badge">AI 24/7</span>
        </button>

        <div class="cp-chat-window" id="cpChatWindow">
          <div class="cp-chat-header">
            <div class="cp-chat-header-info">
              <div class="cp-bot-avatar">🤖</div>
              <div class="cp-bot-meta">
                <h4>PlanetBot <span class="cp-online-dot"></span></h4>
                <p>Computer Planet IT Assistant · Online</p>
              </div>
            </div>
            <button type="button" class="cp-chat-close" id="cpChatClose" aria-label="Close Chat">✕</button>
          </div>

          <div class="cp-chat-body" id="cpChatBody"></div>

          <div class="cp-chips-container" id="cpChipsContainer"></div>

          <div class="cp-chat-footer">
            <input type="text" class="cp-chat-input" id="cpChatInput" placeholder="Ask a question..." autocomplete="off">
            <button type="button" class="cp-chat-send" id="cpChatSend" aria-label="Send Message">➤</button>
          </div>
        </div>
      `;
      document.body.appendChild(wrapper);
    }

    bindEvents() {
      const trigger = document.getElementById('cpChatTrigger');
      const closeBtn = document.getElementById('cpChatClose');
      const sendBtn = document.getElementById('cpChatSend');
      const input = document.getElementById('cpChatInput');

      trigger.addEventListener('click', () => this.toggleWindow());
      closeBtn.addEventListener('click', () => this.closeWindow());

      sendBtn.addEventListener('click', () => this.handleUserSend());
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.handleUserSend();
      });
    }

    toggleWindow() {
      this.isOpen ? this.closeWindow() : this.openWindow();
    }

    openWindow() {
      const win = document.getElementById('cpChatWindow');
      win.classList.add('open');
      this.isOpen = true;
      document.getElementById('cpChatInput').focus();
    }

    closeWindow() {
      const win = document.getElementById('cpChatWindow');
      win.classList.remove('open');
      this.isOpen = false;
    }

    handleUserSend() {
      const input = document.getElementById('cpChatInput');
      const text = input.value.trim();
      if (!text) return;

      this.addUserMessage(text);
      input.value = '';

      // Process intent
      setTimeout(() => {
        this.processQuery(text);
      }, 400);
    }

    addUserMessage(text) {
      const body = document.getElementById('cpChatBody');
      const msg = document.createElement('div');
      msg.className = 'cp-msg user';
      msg.innerHTML = `
        <div class="cp-bubble">${this.escapeHtml(text)}</div>
        <span class="cp-msg-time">${this.getTime()}</span>
      `;
      body.appendChild(msg);
      body.scrollTop = body.scrollHeight;
    }

    addBotMessage(text, actions = [], chips = []) {
      const body = document.getElementById('cpChatBody');
      const msg = document.createElement('div');
      msg.className = 'cp-msg bot';

      let formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,0.1); padding:1px 4px; border-radius:3px;">$1</code>')
        .replace(/\n/g, '<br>');

      let actionsHtml = '';
      if (actions.length > 0) {
        actionsHtml = '<div class="cp-msg-actions">' + actions.map(act => {
          if (act.action === 'call') {
            return `<a href="tel:${act.tel}" class="cp-action-btn">📞 Call Engineer</a>`;
          } else if (act.action === 'whatsapp') {
            return `<a href="https://wa.me/918638083712?text=${encodeURIComponent(act.text)}" target="_blank" class="cp-action-btn" style="color:#34d399;">💬 WhatsApp</a>`;
          } else if (act.action === 'scroll') {
            return `<button type="button" class="cp-action-btn" onclick="document.querySelector('${act.target}')?.scrollIntoView({behavior:'smooth'}); window.planetBot.closeWindow();">${act.text}</button>`;
          } else if (act.action === 'link') {
            return `<a href="${act.url}" class="cp-action-btn">${act.text}</a>`;
          }
          return '';
        }).join('') + '</div>';
      }

      msg.innerHTML = `
        <div class="cp-bubble">${formattedText}${actionsHtml}</div>
        <span class="cp-msg-time">${this.getTime()}</span>
      `;
      body.appendChild(msg);
      body.scrollTop = body.scrollHeight;

      // Update Quick Chips
      if (chips.length > 0) {
        this.renderChips(chips);
      }
    }

    renderChips(chips) {
      const container = document.getElementById('cpChipsContainer');
      container.innerHTML = chips.map(chip => `
        <button type="button" class="cp-chip" onclick="window.planetBot.sendChip('${chip}')">${chip}</button>
      `).join('');
    }

    sendChip(text) {
      document.getElementById('cpChatInput').value = text;
      this.handleUserSend();
    }

    processQuery(query) {
      for (const intent of INTENTS) {
        for (const pattern of intent.patterns) {
          if (pattern.test(query)) {
            const res = intent.response();
            this.addBotMessage(res.text, res.actions || [], res.chips || []);
            return;
          }
        }
      }
      // Fallback
      const fb = getFallbackResponse(query);
      this.addBotMessage(fb.text, fb.actions, fb.chips);
    }

    getTime() {
      const d = new Date();
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    escapeHtml(str) {
      return str.replace(/[&<>"']/g, function (m) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
      });
    }
  }

  // Expose globally
  document.addEventListener('DOMContentLoaded', () => {
    window.planetBot = new ComputerPlanetChatbot();
  });
})();
