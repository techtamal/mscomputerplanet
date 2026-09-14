/* ==========================================================================
   COMPUTER PLANET - OPERATIONAL ERP SYSTEM (erp.js)
   Reactive LocalStorage Engine: Clients/AMC, Inventory, HRMS, Ledger, Packages
   ========================================================================== */

const ERP_CONFIG = {
  MASTER_PIN: '1088',
  BACKUP_KEY: 'cp_erp_data_v1',
  AUTH_KEY: 'cp_erp_authenticated'
};

// Default seed database matching Computer Planet IT profile
const DEFAULT_DATABASE = {
  clients: [
    {
      id: 'CL-101',
      name: 'Punjab National Bank - Silchar Circle Office',
      contactPerson: 'Chief Manager (IT / CO)',
      phone: '+91 3842-224501',
      email: 'cosilchar@pnb.co.in',
      branches: 49,
      nodes: 245,
      tier: 'Gold Enterprise (Banking SLA)',
      startDate: '2023-08-19',
      expiryDate: '2027-08-18',
      status: 'Active',
      workOrderRef: 'PNB/COSIL/021/2023-24 (PO/033-2023)',
      annualValue: 485000,
      lastVisit: '2026-09-04'
    },
    {
      id: 'CL-102',
      name: 'Assam Gramin Bikash Bank (Silchar Regional Office)',
      contactPerson: 'Senior IT Officer',
      phone: '+91 3842-245120',
      email: 'ro_silchar@agbbank.co.in',
      branches: 18,
      nodes: 95,
      tier: 'Gold Enterprise (Banking SLA)',
      startDate: '2024-01-10',
      expiryDate: '2027-01-09',
      status: 'Active',
      workOrderRef: 'AGBB/RO/SIL/IT-AMC/24',
      annualValue: 228000,
      lastVisit: '2026-09-08'
    },
    {
      id: 'CL-103',
      name: 'Department of Posts - Cachar Division',
      contactPerson: 'Superintendent of Post Offices',
      phone: '+91 3842-230104',
      email: 'docachar.assam@indiapost.gov.in',
      branches: 32,
      nodes: 64,
      tier: 'Silver Corporate Standard',
      startDate: '2023-11-01',
      expiryDate: '2026-10-31',
      status: 'Due Soon',
      workOrderRef: 'DOP/CCR/HW-MAINT/2023',
      annualValue: 165000,
      lastVisit: '2026-08-28'
    },
    {
      id: 'CL-104',
      name: 'Barak Valley Diagnostic & Research Centre',
      contactPerson: 'Administrative Officer',
      phone: '+91 94350 71234',
      email: 'admin@bvdrcsilchar.com',
      branches: 2,
      nodes: 18,
      tier: 'Bronze Essential Care',
      startDate: '2025-04-01',
      expiryDate: '2027-03-31',
      status: 'Active',
      workOrderRef: 'BVDRC/IT/25-26',
      annualValue: 58000,
      lastVisit: '2026-09-02'
    }
  ],
  inventory: [
    { id: 'INV-01', name: 'Crucial BX500 500GB 2.5\" SATA SSD', category: 'Storage', stock: 18, minAlert: 5, unitCost: 2400, sellPrice: 3100, supplier: 'Barak Hardware Dist.' },
    { id: 'INV-02', name: 'Kingston 8GB DDR4 3200MHz Desktop RAM', category: 'Memory', stock: 24, minAlert: 6, unitCost: 1650, sellPrice: 2250, supplier: 'Supertron Tech' },
    { id: 'INV-03', name: 'Corsair CV550 550W 80+ Bronze SMPS', category: 'Power Supplies', stock: 9, minAlert: 3, unitCost: 3200, sellPrice: 3950, supplier: 'Redington India' },
    { id: 'INV-04', name: 'D-Link DGS-1024D 24-Port Gigabit Switch', category: 'Networking', stock: 4, minAlert: 2, unitCost: 4800, sellPrice: 5900, supplier: 'D-Link Regional' },
    { id: 'INV-05', name: 'D-Link Cat6 UTP Cable Roll (305 Metres)', category: 'Cabling', stock: 6, minAlert: 2, unitCost: 5500, sellPrice: 6800, supplier: 'D-Link Regional' },
    { id: 'INV-06', name: 'Arctic MX-4 High-Performance Thermal Paste 4g', category: 'Consumables', stock: 15, minAlert: 4, unitCost: 450, sellPrice: 650, supplier: 'PrimeABGB' },
    { id: 'INV-07', name: 'HP 12A / 88A Compatible Toner Cartridge', category: 'Peripherals', stock: 14, minAlert: 5, unitCost: 650, sellPrice: 950, supplier: 'Formujet India' },
    { id: 'INV-08', name: 'Logitech MK215 Wireless Keyboard & Mouse Combo', category: 'Peripherals', stock: 11, minAlert: 4, unitCost: 1250, sellPrice: 1650, supplier: 'Savex Tech' }
  ],
  hrms: [
    {
      id: 'EMP-01',
      name: 'Subhash Sharma',
      role: 'Senior Hardware & Banking IT Engineer',
      phone: '+91 94351 88412',
      salary: 28000,
      assignedClients: 'PNB Silchar Circle (Main Lead)',
      status: 'On-Field',
      joinDate: '2021-04-10'
    },
    {
      id: 'EMP-02',
      name: 'Bikram Roy',
      role: 'Field Support Technician (Desktop / OS)',
      phone: '+91 88762 14590',
      salary: 21000,
      assignedClients: 'AGBB Branches & Cachar Sub-div',
      status: 'On-Field',
      joinDate: '2022-08-15'
    },
    {
      id: 'EMP-03',
      name: 'Anirban Das',
      role: 'Hardware Chip-Level & Printer Specialist',
      phone: '+91 70025 63140',
      salary: 19500,
      assignedClients: 'Department of Posts & Lab Testing',
      status: 'Active',
      joinDate: '2023-02-01'
    },
    {
      id: 'EMP-04',
      name: 'Manoj Paul',
      role: 'Network Infrastructure Assistant',
      phone: '+91 91011 48209',
      salary: 16000,
      assignedClients: 'Emergency Breakdown & Cabling',
      status: 'Active',
      joinDate: '2024-06-10'
    }
  ],
  ledger: [
    { id: 'TX-501', date: '2026-09-02', type: 'Income', category: 'AMC Contract Payment', desc: 'PNB Silchar Circle Q2 AMC Installment', amount: 121250, ref: 'INV-2026-091' },
    { id: 'TX-502', date: '2026-09-03', type: 'Expense', category: 'Spare Parts Procurement', desc: '10x Kingston RAM & 10x SSDs batch', amount: 40500, ref: 'PO-784' },
    { id: 'TX-503', date: '2026-09-05', type: 'Income', category: 'Hardware Replacement', desc: 'Cat6 Cabling & Gigabit Switch Setup at AGBB Sonai Branch', amount: 18400, ref: 'INV-2026-092' },
    { id: 'TX-504', date: '2026-09-06', type: 'Expense', category: 'Field Conveyance', desc: 'Fuel & field conveyance for 4 Engineers across Cachar', amount: 4800, ref: 'VOUCHER-114' },
    { id: 'TX-505', date: '2026-09-09', type: 'Income', category: 'Emergency Breakdown Service', desc: 'Server SMPS & Motherboard repair at India Post Sub-Office', amount: 8500, ref: 'INV-2026-093' }
  ],
  packages: [
    {
      id: 'PKG-1',
      name: 'Bronze Essential Care',
      tier: 'Bronze',
      annualPricePerNode: 4500,
      billingCycle: 'Annual / Bi-annual',
      features: 'Scheduled Quarterly Preventive Maintenance, Remote Diagnostic Desk, Antivirus & OS Patch Updates, 24-Hour Breakdown Turnaround, Free Diagnostic Consultation',
      recommendedFor: 'Small offices, clinics, and standalone retailers (1 to 10 systems)'
    },
    {
      id: 'PKG-2',
      name: 'Silver Corporate Standard',
      tier: 'Silver',
      annualPricePerNode: 7800,
      billingCycle: 'Annual / Quarterly',
      features: 'Bi-Monthly Preventive Health Audits, 4-Hour Emergency Response SLA, Network & Printer Management, 15% Discount on Hardware Spares, Standby Spare Support during repairs',
      recommendedFor: 'Government departments, colleges, medium enterprises (10 to 40 systems)'
    },
    {
      id: 'PKG-3',
      name: 'Gold Enterprise (Banking SLA)',
      tier: 'Gold',
      annualPricePerNode: 12500,
      billingCycle: 'Quarterly Invoiced',
      features: 'Dedicated Resident On-Site Field Engineer, 2-Hour Mission-Critical Banking Response, Full multi-branch coverage across Barak Valley, Periodic thermal & UPS health check, Zero-downtime hot-swap spares',
      recommendedFor: 'Public Sector Banks, Regional Rural Banks, District Headquarters (40+ systems)'
    }
  ]
};

// ERP State Controller
class ComputerPlanetERP {
  constructor() {
    this.data = this.loadData();
    this.pinBuffer = '';
    this.init();
  }

  loadData() {
    try {
      const stored = localStorage.getItem(ERP_CONFIG.BACKUP_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Data load error:', e);
    }
    // Seed default
    this.saveData(DEFAULT_DATABASE);
    return JSON.parse(JSON.stringify(DEFAULT_DATABASE));
  }

  saveData(data) {
    this.data = data;
    localStorage.setItem(ERP_CONFIG.BACKUP_KEY, JSON.stringify(data));
  }

  init() {
    this.bindAuthGate();
    this.checkSession();
    this.bindModuleTabs();
    this.renderAll();
  }

  // Auth Gate
  checkSession() {
    const isAuthed = sessionStorage.getItem(ERP_CONFIG.AUTH_KEY) === 'true';
    const gate = document.getElementById('erpLoginGate');
    const app = document.getElementById('erpApp');
    if (isAuthed) {
      gate.style.display = 'none';
      app.style.display = 'block';
    } else {
      gate.style.display = 'flex';
      app.style.display = 'none';
    }
  }

  bindAuthGate() {
    const numBtns = document.querySelectorAll('.numpad-btn');
    const dots = document.querySelectorAll('.pin-dot');
    const errorMsg = document.getElementById('gateErrorMsg');

    numBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-val');
        if (val === 'clear') {
          this.pinBuffer = '';
        } else if (val === 'back') {
          this.pinBuffer = this.pinBuffer.slice(0, -1);
        } else if (this.pinBuffer.length < 4) {
          this.pinBuffer += val;
        }

        // Update dots
        dots.forEach((dot, idx) => {
          if (idx < this.pinBuffer.length) {
            dot.classList.add('filled');
          } else {
            dot.classList.remove('filled');
          }
        });

        // Verify PIN when 4 digits reached
        if (this.pinBuffer.length === 4) {
          if (this.pinBuffer === ERP_CONFIG.MASTER_PIN) {
            errorMsg.textContent = '';
            sessionStorage.setItem(ERP_CONFIG.AUTH_KEY, 'true');
            this.pinBuffer = '';
            dots.forEach(d => d.classList.remove('filled'));
            this.checkSession();
          } else {
            errorMsg.textContent = '❌ Incorrect PIN. Please try again.';
            this.pinBuffer = '';
            dots.forEach(d => d.classList.remove('filled'));
          }
        }
      });
    });

    // Lock session button
    document.getElementById('btnLockSession')?.addEventListener('click', () => {
      sessionStorage.removeItem(ERP_CONFIG.AUTH_KEY);
      this.checkSession();
    });
  }

  bindModuleTabs() {
    const tabs = document.querySelectorAll('.module-tab-btn');
    const panels = document.querySelectorAll('.module-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetId = tab.getAttribute('data-target');
        document.getElementById(targetId)?.classList.add('active');
      });
    });
  }

  renderAll() {
    this.renderKPIs();
    this.renderClients();
    this.renderInventory();
    this.renderHRMS();
    this.renderLedger();
    this.renderPackages();
  }

  // 1. KPI Cards
  renderKPIs() {
    const activeClients = this.data.clients.filter(c => c.status === 'Active').length;
    const totalNodes = this.data.clients.reduce((sum, c) => sum + (c.nodes || 0), 0);
    const totalInventoryValue = this.data.inventory.reduce((sum, i) => sum + (i.stock * i.sellPrice), 0);
    const totalRevenue = this.data.ledger.filter(l => l.type === 'Income').reduce((sum, l) => sum + l.amount, 0);
    const totalExpense = this.data.ledger.filter(l => l.type === 'Expense').reduce((sum, l) => sum + l.amount, 0);
    const netProfit = totalRevenue - totalExpense;

    document.getElementById('kpiActiveClients').textContent = activeClients + ' (' + totalNodes + ' Nodes)';
    document.getElementById('kpiInventoryVal').textContent = '₹' + totalInventoryValue.toLocaleString('en-IN');
    document.getElementById('kpiNetProfit').textContent = '₹' + netProfit.toLocaleString('en-IN');
    const openComplaints = (this.data.complaints || []).filter(c => c.status !== 'Resolved' && c.status !== 'Closed').length;
    const kpiCompElem = document.getElementById('kpiOpenComplaints');
    if (kpiCompElem) kpiCompElem.textContent = openComplaints + ' Pending';
    document.getElementById('kpiTechnicians').textContent = this.data.hrms.length + ' Engineers';
  }

  // 2. Clients & AMC Table
  renderClients(filter = '') {
    const tbody = document.getElementById('clientsTableBody');
    if (!tbody) return;
    const items = this.data.clients.filter(c => 
      c.name.toLowerCase().includes(filter.toLowerCase()) || 
      c.workOrderRef.toLowerCase().includes(filter.toLowerCase())
    );

    tbody.innerHTML = items.map(c => `
      <tr>
        <td><strong>${c.name}</strong><br><span style="font-size:0.75rem; color:#94a3b8;">${c.workOrderRef}</span></td>
        <td>${c.branches} Branches (${c.nodes} PCs)</td>
        <td><span class="badge ${c.status === 'Active' ? 'badge-active' : 'badge-warning'}">${c.status}</span></td>
        <td>${c.expiryDate}</td>
        <td>₹${c.annualValue.toLocaleString('en-IN')}</td>
        <td>
          <button class="btn-action-sm" onclick="window.erp.logVisit('${c.id}')">📝 Log Visit</button>
          <button class="btn-action-sm" onclick="window.erp.editClient('${c.id}')">✏️ Edit</button>
          <button class="btn-action-sm danger" onclick="window.erp.deleteClient('${c.id}')">🗑️</button>
        </td>
      </tr>
    `).join('');
  }

  // 3. Inventory Table
  renderInventory(filter = '') {
    const tbody = document.getElementById('inventoryTableBody');
    if (!tbody) return;
    const items = this.data.inventory.filter(i => 
      i.name.toLowerCase().includes(filter.toLowerCase()) || 
      i.category.toLowerCase().includes(filter.toLowerCase())
    );

    tbody.innerHTML = items.map(i => {
      const isLow = i.stock <= i.minAlert;
      return `
        <tr>
          <td><strong>${i.name}</strong><br><span style="font-size:0.75rem; color:#94a3b8;">${i.category}</span></td>
          <td>
            <span class="badge ${isLow ? 'badge-danger' : 'badge-active'}">
              ${i.stock} Units ${isLow ? '⚠️ LOW STOCK' : ''}
            </span>
          </td>
          <td>₹${i.unitCost.toLocaleString('en-IN')}</td>
          <td>₹${i.sellPrice.toLocaleString('en-IN')}</td>
          <td>
            <button class="btn-action-sm" onclick="window.erp.stockAdjust('${i.id}', 1)">➕ In</button>
            <button class="btn-action-sm" onclick="window.erp.stockAdjust('${i.id}', -1)">➖ Out</button>
            <button class="btn-action-sm danger" onclick="window.erp.deleteInventory('${i.id}')">🗑️</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  // 4. HRMS Table
  renderHRMS() {
    const tbody = document.getElementById('hrmsTableBody');
    if (!tbody) return;
    tbody.innerHTML = this.data.hrms.map(e => `
      <tr>
        <td><strong>${e.name}</strong><br><span style="font-size:0.75rem; color:#94a3b8;">${e.role}</span></td>
        <td>${e.phone}</td>
        <td>${e.assignedClients}</td>
        <td><span class="badge ${e.status === 'On-Field' ? 'badge-warning' : 'badge-active'}">${e.status}</span></td>
        <td>₹${e.salary.toLocaleString('en-IN')}/mo</td>
        <td>
          <button class="btn-action-sm" onclick="window.erp.toggleEmpStatus('${e.id}')">🔄 Status</button>
          <button class="btn-action-sm" onclick="window.erp.editEmployee('${e.id}')">✏️ Edit</button>
          <button class="btn-action-sm danger" onclick="window.erp.deleteEmployee('${e.id}')">🗑️</button>
        </td>
      </tr>
    `).join('');
  }

  // 5. Ledger Table
  renderLedger() {
    const tbody = document.getElementById('ledgerTableBody');
    if (!tbody) return;
    tbody.innerHTML = this.data.ledger.map(l => `
      <tr>
        <td>${l.date}</td>
        <td><span class="badge ${l.type === 'Income' ? 'badge-active' : 'badge-danger'}">${l.type}</span></td>
        <td><strong>${l.desc}</strong><br><span style="font-size:0.75rem; color:#94a3b8;">${l.category} (Ref: ${l.ref})</span></td>
        <td style="font-weight:700; color:${l.type === 'Income' ? '#34d399' : '#f87171'}">
          ${l.type === 'Income' ? '+' : '-'}₹${l.amount.toLocaleString('en-IN')}
        </td>
        <td>
          <button class="btn-action-sm" onclick="window.erp.printReceipt('${l.id}')">🖨️ Receipt</button>
          <button class="btn-action-sm danger" onclick="window.erp.deleteLedger('${l.id}')">🗑️</button>
        </td>
      </tr>
    `).join('');
  }

  // 6. Packages Table
  renderPackages() {
    const tbody = document.getElementById('packagesTableBody');
    if (!tbody) return;
    tbody.innerHTML = this.data.packages.map(p => `
      <tr>
        <td><strong>${p.name}</strong></td>
        <td><span class="badge badge-info">${p.tier}</span></td>
        <td>₹${p.annualPricePerNode.toLocaleString('en-IN')} / node / yr</td>
        <td style="max-width:320px; font-size:0.8rem; color:#cbd5e1;">${p.features}</td>
        <td>
          <button class="btn-action-sm" onclick="window.erp.editPackage('${p.id}')">✏️ Edit</button>
          <button class="btn-action-sm danger" onclick="window.erp.deletePackage('${p.id}')">🗑️</button>
        </td>
      </tr>
    `).join('');
  }

  // Inventory Stock In/Out
  stockAdjust(id, delta) {
    const item = this.data.inventory.find(i => i.id === id);
    if (!item) return;
    if (item.stock + delta < 0) {
      alert('Stock cannot be negative!');
      return;
    }
    item.stock += delta;
    this.saveData(this.data);
    this.renderInventory();
    this.renderKPIs();
  }

  toggleEmpStatus(id) {
    const emp = this.data.hrms.find(e => e.id === id);
    if (!emp) return;
    emp.status = emp.status === 'Active' ? 'On-Field' : (emp.status === 'On-Field' ? 'Leave' : 'Active');
    this.saveData(this.data);
    this.renderHRMS();
  }

  logVisit(clientId) {
    const client = this.data.clients.find(c => c.id === clientId);
    if (!client) return;
    const note = prompt(`Enter Service / Preventive Maintenance visit notes for:
${client.name}`, 'Routine quarterly hardware diagnostic and dust cleaning');
    if (note) {
      client.lastVisit = new Date().toISOString().slice(0,10);
      this.saveData(this.data);
      this.renderClients();
      alert(`Visit logged successfully for ${client.name}!`);
    }
  }

  deleteClient(id) {
    if (confirm('Are you sure you want to delete this client AMC contract?')) {
      this.data.clients = this.data.clients.filter(c => c.id !== id);
      this.saveData(this.data);
      this.renderAll();
    }
  }

  deleteInventory(id) {
    if (confirm('Delete this inventory item?')) {
      this.data.inventory = this.data.inventory.filter(i => i.id !== id);
      this.saveData(this.data);
      this.renderAll();
    }
  }

  deleteEmployee(id) {
    if (confirm('Remove this technician from HRMS?')) {
      this.data.hrms = this.data.hrms.filter(e => e.id !== id);
      this.saveData(this.data);
      this.renderAll();
    }
  }

  deleteLedger(id) {
    if (confirm('Delete this transaction?')) {
      this.data.ledger = this.data.ledger.filter(l => l.id !== id);
      this.saveData(this.data);
      this.renderAll();
    }
  }

  deletePackage(id) {
    if (confirm('Delete this AMC package?')) {
      this.data.packages = this.data.packages.filter(p => p.id !== id);
      this.saveData(this.data);
      this.renderPackages();
    }
  }


  // 7. Complaints & Service Tickets Table
  renderComplaints(filter = '') {
    const tbody = document.getElementById('complaintsTableBody');
    if (!tbody) return;
    if (!this.data.complaints) this.data.complaints = [];
    
    const priorityFilter = document.getElementById('complaintPriorityFilter')?.value || 'All';
    const statusFilter = document.getElementById('complaintStatusFilter')?.value || 'All';

    let items = this.data.complaints.filter(c => {
      const matchSearch = c.clientName.toLowerCase().includes(filter.toLowerCase()) ||
                          c.id.toLowerCase().includes(filter.toLowerCase()) ||
                          c.issue.toLowerCase().includes(filter.toLowerCase());
      const matchPriority = priorityFilter === 'All' || c.priority.includes(priorityFilter);
      const matchStatus = statusFilter === 'All' || c.status === statusFilter;
      return matchSearch && matchPriority && matchStatus;
    });

    if (items.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:30px; color:#94a3b8;">No matching complaint logs found.</td></tr>';
      return;
    }

    tbody.innerHTML = items.map(c => {
      let priorityBadge = 'badge-info';
      if (c.priority.includes('Emergency')) priorityBadge = 'badge-danger';
      else if (c.priority.includes('High')) priorityBadge = 'badge-warning';

      let statusBadge = 'badge-warning';
      if (c.status === 'Resolved' || c.status === 'Closed') statusBadge = 'badge-active';
      else if (c.status === 'Open') statusBadge = 'badge-danger';
      else if (c.status === 'Dispatched') statusBadge = 'badge-info';

      return `
        <tr>
          <td><strong>${c.id}</strong><br><span style="font-size:0.75rem; color:#94a3b8;">${c.date}</span></td>
          <td>
            <strong>${c.clientName}</strong><br>
            <span style="font-size:0.75rem; color:#cbd5e1;">Contact: ${c.contactPerson} (${c.phone})</span>
          </td>
          <td style="max-width:240px;">
            <strong style="color:#f8fafc; font-size:0.85rem;">${c.deviceType}</strong><br>
            <span style="font-size:0.8rem; color:#94a3b8;">${c.issue}</span>
          </td>
          <td><span class="badge ${priorityBadge}">${c.priority}</span></td>
          <td>
            <strong>${c.assignedEngineer || 'Unassigned'}</strong><br>
            <button class="btn-action-sm" onclick="window.erp.assignEngineer('${c.id}')" style="margin-top:4px; font-size:0.72rem;">👤 Assign</button>
          </td>
          <td>
            <span class="badge ${statusBadge}">${c.status}</span><br>
            <span style="font-size:0.72rem; color:#94a3b8;">${c.closedAt ? 'Resolved: ' + c.closedAt : 'Active SLA'}</span>
          </td>
          <td>
            <button class="btn-action-sm" onclick="window.erp.updateComplaintStatus('${c.id}')">🔄 Status</button>
            <button class="btn-action-sm" onclick="window.erp.printWorkSlip('${c.id}')">📋 Work Slip</button>
            <a href="https://wa.me/${c.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(c.contactPerson)}%2C%20regarding%20your%20IT%20service%20complaint%20(${c.id})%20at%20Computer%20Planet%3A%20Status%20is%20${encodeURIComponent(c.status)}." target="_blank" class="btn-action-sm" style="color:#34d399; text-decoration:none;">💬 WA</a>
            <button class="btn-action-sm danger" onclick="window.erp.deleteComplaint('${c.id}')">🗑️</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  assignEngineer(id) {
    const comp = this.data.complaints.find(c => c.id === id);
    if (!comp) return;
    const engineers = this.data.hrms.map(e => e.name).join(', ');
    const chosen = prompt(`Assign Field Engineer for ${comp.id}:\nAvailable:\n${engineers}`, comp.assignedEngineer || 'Subhash Sharma');
    if (chosen) {
      comp.assignedEngineer = chosen;
      if (comp.status === 'Open') comp.status = 'Dispatched';
      this.saveData(this.data);
      this.renderComplaints();
      alert(`Assigned ${chosen} to ${comp.id}!`);
    }
  }

  updateComplaintStatus(id) {
    const comp = this.data.complaints.find(c => c.id === id);
    if (!comp) return;
    const statuses = ['Open', 'Dispatched', 'In Progress', 'Resolved', 'Closed'];
    const nextIdx = (statuses.indexOf(comp.status) + 1) % statuses.length;
    comp.status = statuses[nextIdx];
    
    if (comp.status === 'Resolved' || comp.status === 'Closed') {
      comp.closedAt = new Date().toLocaleTimeString('en-IN', {hour:'2-digit', minute:'2-digit'});
      const notes = prompt('Enter resolution notes / action taken:', comp.resolutionNotes || 'Component inspected and problem resolved on-site.');
      if (notes) comp.resolutionNotes = notes;
    }
    this.saveData(this.data);
    this.renderComplaints();
    this.renderKPIs();
  }

  deleteComplaint(id) {
    if (confirm('Delete this complaint log?')) {
      this.data.complaints = this.data.complaints.filter(c => c.id !== id);
      this.saveData(this.data);
      this.renderComplaints();
      this.renderKPIs();
    }
  }

  printWorkSlip(id) {
    const c = this.data.complaints.find(item => item.id === id);
    if (!c) return;
    const w = window.open('', '_blank', 'width=750,height=650');
    w.document.write(`
      <html>
        <head>
          <title>Computer Planet - Field Service Work Slip ${c.id}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 30px; color: #0f172a; line-height: 1.5; }
            .header { border-bottom: 2px solid #0284c7; padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; }
            .title { font-size: 22px; font-weight: bold; color: #0f172a; }
            .sub { color: #64748b; font-size: 12px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; }
            .box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 14px; border-radius: 6px; }
            .badge { display: inline-block; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 11px; }
            .emergency { background: #fee2e2; color: #dc2626; }
            .signatures { margin-top: 50px; display: flex; justify-content: space-between; }
            .sig-line { border-top: 1px solid #94a3b8; width: 220px; text-align: center; padding-top: 6px; font-size: 12px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <div class="title">M/S COMPUTER PLANET</div>
              <div class="sub">IT Maintenance &amp; Banking Support Control Center · Silchar</div>
              <div class="sub">GSTIN: 18ASTPR6755J1ZO | MSME: UDYAM-AS-05-0019941 | Phone: +91-8638083712</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:16px; font-weight:bold; color:#0284c7;">FIELD WORK SLIP</div>
              <div style="font-size:12px; font-weight:bold;">TICKET REF: ${c.id}</div>
              <div style="font-size:11px; color:#64748b;">Date: ${c.date}</div>
            </div>
          </div>

          <div class="grid">
            <div class="box">
              <strong>CLIENT &amp; SITE DETAILS:</strong><br>
              <strong>Organization:</strong> ${c.clientName}<br>
              <strong>Contact Person:</strong> ${c.contactPerson}<br>
              <strong>Contact Phone:</strong> ${c.phone}
            </div>
            <div class="box">
              <strong>SERVICE CLASSIFICATION:</strong><br>
              <strong>Device / Equipment:</strong> ${c.deviceType}<br>
              <strong>Priority Level:</strong> <span class="badge emergency">${c.priority}</span><br>
              <strong>Assigned Engineer:</strong> ${c.assignedEngineer}
            </div>
          </div>

          <div class="box" style="margin-bottom:20px;">
            <strong>REPORTED COMPLAINT / FAULT:</strong><br>
            <p style="margin-top:6px; color:#334155;">${c.issue}</p>
          </div>

          <div class="box" style="margin-bottom:20px;">
            <strong>ENGINEER ACTION / RESOLUTION SUMMARY:</strong><br>
            <p style="margin-top:6px; color:#334155;">${c.resolutionNotes || 'In progress...'}</p>
            <div style="margin-top:12px; font-size:12px; color:#64748b;">
              Current Status: <strong>${c.status}</strong> | Resolved At: <strong>${c.closedAt || 'Pending On-Site Sign-off'}</strong>
            </div>
          </div>

          <div class="signatures">
            <div class="sig-line">Field Engineer Signature</div>
            <div class="sig-line">Client / Branch Seal &amp; Signature</div>
          </div>

          <script>window.print();</script>
        </body>
      </html>
    `);
    w.document.close();
  }

  printReceipt(id) {
    const item = this.data.ledger.find(l => l.id === id);
    if (!item) return;
    const printWindow = window.open('', '_blank', 'width=700,height=600');
    printWindow.document.write(`
      <html>
        <head>
          <title>Computer Planet - Receipt ${item.ref}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; color: #1e293b; }
            .head { border-bottom: 2px solid #0284c7; padding-bottom: 15px; margin-bottom: 25px; }
            .logo { font-size: 24px; font-weight: bold; color: #0f172a; }
            .sub { color: #64748b; font-size: 13px; }
            .box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; margin-bottom: 25px; }
            .amount { font-size: 28px; font-weight: bold; color: #0284c7; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="head">
            <div class="logo">M/S COMPUTER PLANET</div>
            <div class="sub">West Kachudharam, Chincoorie, Silchar, Cachar, Assam 788007 | Phone: +91-8638083712</div>
            <div class="sub">GSTIN: 18ASTPR6755J1ZO | MSME: UDYAM-AS-05-0019941</div>
          </div>
          <div class="box">
            <h3>OFFICIAL TRANSACTION RECEIPT / VOUCHER</h3>
            <p><strong>Reference:</strong> ${item.ref} | <strong>Date:</strong> ${item.date}</p>
            <p><strong>Description:</strong> ${item.desc}</p>
            <p><strong>Type / Category:</strong> ${item.type} - ${item.category}</p>
            <div class="amount">₹${item.amount.toLocaleString('en-IN')}</div>
          </div>
          <p style="font-size:12px; color:#64748b;">This is a computer-generated voucher issued by M/S Computer Planet Back-Office ERP.</p>
          <script>window.print();</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  }
}

// Instantiate and expose globally
document.addEventListener('DOMContentLoaded', () => {
  window.erp = new ComputerPlanetERP();

  // Search input filters
  document.getElementById('clientSearchInput')?.addEventListener('input', (e) => {
    window.erp.renderClients(e.target.value);
  });
  document.getElementById('inventorySearchInput')?.addEventListener('input', (e) => {
    window.erp.renderInventory(e.target.value);
  });
});
