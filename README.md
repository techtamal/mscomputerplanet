# M/S COMPUTER PLANET (SALES AND SUPPORT)
> **Pioneering IT Infrastructure, Banking AMC, Manpower & Enterprise Support Across Barak Valley & Assam**

* **Official Domain:** [https://www.mscomputerplanet.com](https://www.mscomputerplanet.com)
* **Official Credentials:** MSME Reg: `UDYAM-AS-05-0019941` | GSTIN: `18ASTPR6755J1ZO` | PAN: `ASTPR6755J`
* **Headquarters:** West Kachudharam, Chincoorie, Silchar, Cachar, Assam — 788007
* **Geo Coordinates:** `24°48'36.7"N 92°47'03.7"E` (Lat: 24.810194, Lon: 92.784361)
* **Direct Support Line:** `+91 8638083712` | **WhatsApp:** `+91 8638083712`
* **Official Email:** `computerplanetpkd@gmail.com`

---

## 🏗 System Architecture & Repository Layout

```text
├── index.html                           # 11-Section Homepage with Schema.org LocalBusiness JSON-LD
├── 404.html                             # Custom Branded 404 Error Page
├── _redirects                           # Netlify Routing, ERP Rewrites, & Canonical Domain Redirects
├── _headers                             # Netlify Security, Caching, & ERP No-Index Headers
├── netlify.toml                         # Netlify Configuration (Build, Headers, Rewrites)
├── vercel.json                          # Vercel Deployment & Fallback Configuration
├── .htaccess                            # Apache / cPanel / Shared Hosting Directives
├── .gitignore                           # Production Git Filter (Excludes OS & IDE junk)
├── robots.txt                           # Search Engine Directives (Blocks /erp/ & /leads-admin.html)
├── sitemap.xml                          # Canonical XML Sitemap (www.mscomputerplanet.com)
├── site.webmanifest                     # Progressive Web App (PWA) Manifest
├── css/
│   ├── style.css                        # Modern CSS Variables, Flexbox/Grid, Mobile Responsive Layouts
│   └── erp.css                          # Dedicated Operations ERP & Back-Office Theme
├── js/
│   ├── app.js                           # Core Interactivity, Calculator, Sticky Header, Drawer
│   ├── erp.js                           # Operations ERP State Machine, LocalStorage Engine, Ticket Printing
│   └── chatbot.js                       # AI Knowledge-Based Chatbot Engine ('planetBot')
├── erp/
│   └── index.html                       # Operations ERP Portal (Protected with PIN Gate '1088')
├── gallery/
│   └── index.html                       # Filterable Hardware & Field Engineering Photo Gallery + Lightbox
├── blog/
│   └── index.html                       # Technical Knowledgebase & Preventive IT Care Guides
├── hardware-maintenance-amc-silchar/    # High-Intent Silchar Local AMC Landing Page
├── banking-corporate-it-support-silchar/# Specialized Banking & Corporate IT Support Landing Page
├── network-software-support-silchar/   # Enterprise Networking & Structured Cabling Landing Page
└── images/                              # Official Logos, High-Resolution Field Photos, Favicons
```

---

## 🚀 Step 1: Push Code to GitHub

Open terminal / command prompt in this project folder:

```bash
# 1. Initialize git repository
git init

# 2. Add all production files
git add .

# 3. Create initial commit
git commit -m "Initial commit: Production launch of M/S Computer Planet"

# 4. Set default branch to main
git branch -M main

# 5. Connect to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/mscomputerplanet.git

# 6. Push code to GitHub
git push -u origin main
```

---

## 🌐 Step 2: Connect GitHub to Netlify for Continuous Deployment

1. Log into your [Netlify Dashboard](https://app.netlify.com/).
2. Click **"Add new site"** &rarr; **"Import an existing project"**.
3. Select **GitHub** and authorize access to your repository `mscomputerplanet`.
4. Configure the Build & Deployment settings:
   * **Branch to deploy:** `main`
   * **Base directory:** *(leave blank)*
   * **Build command:** *(leave blank — pure static web system)*
   * **Publish directory:** `.` *(current directory)*
5. Click **"Deploy site"**. Netlify will build and deploy your site in less than 30 seconds with a preview URL (e.g., `mscomputerplanet.netlify.app`).

---

## 🎯 Step 3: Custom Domain Setup (`www.mscomputerplanet.com`)

1. In your Netlify Site dashboard, go to **Site configuration** &rarr; **Domain management**.
2. Click **"Add a domain"** and enter: `www.mscomputerplanet.com`.
3. Set `www.mscomputerplanet.com` as the **Primary Domain**, and ensure `mscomputerplanet.com` automatically redirects to `www.mscomputerplanet.com`.
4. Log into your **Domain Registrar** (GoDaddy, Namecheap, Hostinger, BigRock, etc.) and add these **DNS Records**:

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `<your-site-name>.netlify.app` | Automatic / 1 Hour |
| **A** | `@` | `75.2.60.5` *(Netlify Load Balancer IP)* | Automatic / 1 Hour |

*(Alternatively, you can delegate nameservers directly to Netlify DNS: `dns1.p01.nsone.net`, etc.)*

5. Scroll down to **HTTPS / SSL Certificate** in Netlify and click **"Verify DNS configuration"** &rarr; Netlify will automatically issue and renew a free Let's Encrypt Wildcard SSL certificate.

---

## 🖥 1. Public Website Capabilities

* **11 Core Homepage Sections:**
  1. **Hero**: High-impact enterprise headline, trust badges, immediate WhatsApp & Call CTAs.
  2. **Business Statistics**: Quantified metrics (49+ PNB Branches, 1,200+ Nodes, 99.8% Uptime).
  3. **About Us**: Enterprise history, founder story, and official MSME & GSTIN credentials.
  4. **Programs**: Comprehensive IT Maintenance, Manpower Supply, and CCTV/Structured Cabling.
  5. **Fees**: Transparent AMC pricing tiers (Silver, Gold Banking SLA, Custom Enterprise).
  6. **Gallery**: Interactive field engineering and banking work photos with lightbox.
  7. **Team**: Senior systems architects, field hardware engineers, and network administrators.
  8. **Achievements**: Real-world PNB Silchar Circle Work Order proof and bank testimonials.
  9. **Schedule**: Structured Preventive Maintenance cycles and 4-hour emergency SLAs.
  10. **Reviews**: Authentic client feedback from bank branch managers and commercial directors.
  11. **Complaint Desk**: Instant online breakdown ticket submission connected directly to back office.
* **Interactive AMC Cost Calculator**: Live node slider calculating volume-discounted monthly/quarterly maintenance estimates.
* **AI Knowledge Chatbot (`planetBot`)**: Embedded assistant providing instant answers on SLAs, pricing, banking compliance, and location directions.
* **Mobile Sticky Conversion Bar**: One-touch `CALL` | `WHATSAPP` | `FREE TRIAL` docked at the bottom of all mobile screens.

---

## 🔐 2. Backend Operations ERP (`/erp`)

The Back-Office ERP is accessible directly at:
**`https://www.mscomputerplanet.com/erp`**

### Security & Privacy Controls
* **Zero Public Indexation**: Completely blocked in `robots.txt` and enforced via HTTP header `X-Robots-Tag: noindex, nofollow, noarchive`.
* **PIN Gate Authentication**: Requires 4-digit master PIN (`1088`) to access.
* **Auto-Lock Timeout**: Automatically locks upon 15 minutes of inactivity, plus a manual "Lock ERP" button in the navigation header.

### Core Modules
1. **Live Breakdown Complaints Desk**: Log incoming bank tickets, update ticket states (`Open`, `In-Progress`, `Resolved`, `Closed`), filter by priority (`Critical SLA`, `High`, `Standard`).
2. **Client AMC Contracts**: Monitor active contracts, expiration dates, contract values, and automated renewal alerts.
3. **Hardware & Spares Inventory**: Track RAM modules, SSDs, SMPS units, thermal paste, and replacement motherboards with low-stock warnings.
4. **Preventive Maintenance Scheduler**: Schedule quarterly banking deep cleans, motherboard servicing, and thermal repasting.
5. **Printable Field Engineering Tickets**: Generate official, print-ready repair job tickets with client sign-off slips for engineers on field visits.
6. **Data Disaster Recovery**: One-click **JSON Database Export** and **Instant Restore** to prevent data loss.

---

## 🛡 Verification & Compliance Check
To run an automated health check on the production codebase:
```bash
python scratch/verify_computer_planet.py
```
*(All 8 production categories pass 100%).*
