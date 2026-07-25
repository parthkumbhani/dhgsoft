const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../public/images/home');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. STRATEGY SVG
const strategySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B0F19"/>
      <stop offset="50%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(30, 41, 59, 0.7)"/>
      <stop offset="100%" stop-color="rgba(15, 23, 42, 0.8)"/>
    </linearGradient>
    <linearGradient id="primaryGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8C123B"/>
      <stop offset="50%" stop-color="#C2185B"/>
      <stop offset="100%" stop-color="#F59E0B"/>
    </linearGradient>
    <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="1200" height="800" fill="url(#bg1)"/>

  <!-- Blueprint Grid -->
  <g stroke="rgba(255,255,255,0.03)" stroke-width="1">
    ${Array.from({length: 24}).map((_, i) => `<line x1="${i*50}" y1="0" x2="${i*50}" y2="800"/>`).join('')}
    ${Array.from({length: 16}).map((_, i) => `<line x1="0" y1="${i*50}" x2="1200" y2="${i*50}"/>`).join('')}
  </g>

  <!-- Glowing background ambient light -->
  <circle cx="900" cy="300" r="250" fill="#8C123B" opacity="0.12" filter="blur(80px)"/>
  <circle cx="300" cy="600" r="200" fill="#3B82F6" opacity="0.08" filter="blur(80px)"/>

  <!-- Window Card -->
  <rect x="80" y="70" width="1040" height="660" rx="24" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
  
  <!-- Window Header Bar -->
  <path d="M 80 94 A 24 24 0 0 1 104 70 L 1096 70 A 24 24 0 0 1 1120 94 L 1120 130 L 80 130 Z" fill="rgba(255,255,255,0.03)"/>
  <circle cx="120" cy="100" r="6" fill="#EF4444"/>
  <circle cx="140" cy="100" r="6" fill="#F59E0B"/>
  <circle cx="160" cy="100" r="6" fill="#10B981"/>
  <text x="600" y="105" text-anchor="middle" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="14" font-weight="600" letter-spacing="1">DHGsoft // DIGITAL TRANSFORMATION STRATEGY BLUEPRINT</text>

  <!-- Main Dashboard Header -->
  <text x="130" y="190" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="24" font-weight="800">Enterprise Digital Strategy & Transformation Roadmap</text>
  <text x="130" y="215" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="14">Assess • Align • Blueprint Architecture</text>

  <!-- Roadmap Timeline Node Cards -->
  <!-- Phase 1 -->
  <rect x="130" y="260" width="210" height="150" rx="14" fill="rgba(255,255,255,0.03)" stroke="url(#primaryGrad)" stroke-width="1.5"/>
  <text x="150" y="295" fill="#F59E0B" font-family="sans-serif" font-size="12" font-weight="800">PHASE 01</text>
  <text x="150" y="325" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="700">Digital Assessment</text>
  <text x="150" y="355" fill="#94A3B8" font-family="sans-serif" font-size="12">• Legacy OT Audit</text>
  <text x="150" y="375" fill="#94A3B8" font-family="sans-serif" font-size="12">• Business KPI Alignment</text>

  <line x1="340" y1="335" x2="390" y2="335" stroke="url(#primaryGrad)" stroke-width="2" stroke-dasharray="4,4"/>

  <!-- Phase 2 -->
  <rect x="390" y="260" width="210" height="150" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <text x="410" y="295" fill="#3B82F6" font-family="sans-serif" font-size="12" font-weight="800">PHASE 02</text>
  <text x="410" y="325" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="700">Architecture Blueprint</text>
  <text x="410" y="355" fill="#94A3B8" font-family="sans-serif" font-size="12">• UNS & Cloud Design</text>
  <text x="410" y="375" fill="#94A3B8" font-family="sans-serif" font-size="12">• Cyber Governance</text>

  <line x1="600" y1="335" x2="650" y2="335" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>

  <!-- Phase 3 -->
  <rect x="650" y="260" width="210" height="150" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <text x="670" y="295" fill="#10B981" font-family="sans-serif" font-size="12" font-weight="800">PHASE 03</text>
  <text x="670" y="325" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="700">Execution Plan</text>
  <text x="670" y="355" fill="#94A3B8" font-family="sans-serif" font-size="12">• Agile Sprints</text>
  <text x="670" y="375" fill="#94A3B8" font-family="sans-serif" font-size="12">• Factory Pilots</text>

  <line x1="860" y1="335" x2="910" y2="335" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>

  <!-- Phase 4 -->
  <rect x="910" y="260" width="160" height="150" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <text x="930" y="295" fill="#8B5CF6" font-family="sans-serif" font-size="12" font-weight="800">PHASE 04</text>
  <text x="930" y="325" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="700">Scale & ROI</text>
  <text x="930" y="355" fill="#94A3B8" font-family="sans-serif" font-size="12">• Multi-Site Sync</text>

  <!-- Large Strategy Chart at Bottom -->
  <rect x="130" y="440" width="940" height="240" rx="16" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <text x="160" y="480" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="700">Digital Capability Growth & Projected Business Value</text>
  
  <path d="M 160 620 C 300 600, 450 540, 600 520 C 750 500, 900 460, 1030 450" fill="none" stroke="url(#primaryGrad)" stroke-width="4" filter="url(#glow)"/>
  <path d="M 160 620 C 300 600, 450 540, 600 520 C 750 500, 900 460, 1030 450 L 1030 640 L 160 640 Z" fill="url(#primaryGrad)" opacity="0.15"/>
</svg>`;

fs.writeFileSync(path.join(targetDir, 'stage-strategy.svg'), strategySvg);

// 2. DESIGN SVG
const designSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#070A13"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="800" fill="url(#bg2)"/>

  <!-- Blueprint Grid -->
  <g stroke="rgba(6, 182, 212, 0.05)" stroke-width="1">
    ${Array.from({length: 30}).map((_, i) => `<line x1="${i*40}" y1="0" x2="${i*40}" y2="800"/>`).join('')}
    ${Array.from({length: 20}).map((_, i) => `<line x1="0" y1="${i*40}" x2="1200" y2="${i*40}"/>`).join('')}
  </g>

  <!-- Central Architecture Diagram Nodes -->
  <!-- Cloud Node -->
  <rect x="450" y="140" width="300" height="110" rx="16" fill="rgba(30, 41, 59, 0.8)" stroke="#06B6D4" stroke-width="2"/>
  <text x="600" y="185" text-anchor="middle" fill="#06B6D4" font-family="sans-serif" font-size="14" font-weight="800">ENTERPRISE CLOUD HUB</text>
  <text x="600" y="215" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="700">Microservices Architecture</text>

  <!-- Connectors -->
  <path d="M 600 250 L 600 340 M 350 340 L 850 340" stroke="url(#cyanGrad)" stroke-width="2.5" stroke-dasharray="6,6"/>

  <!-- Left Node (MES/ERP) -->
  <rect x="180" y="370" width="280" height="150" rx="16" fill="rgba(30, 41, 59, 0.8)" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
  <text x="210" y="415" fill="#3B82F6" font-family="sans-serif" font-size="13" font-weight="800">SYSTEM LAYER 01</text>
  <text x="210" y="445" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="700">ERP & MES Engine</text>
  <text x="210" y="480" fill="#94A3B8" font-family="sans-serif" font-size="13">• RESTful API Gateways</text>
  <text x="210" y="500" fill="#94A3B8" font-family="sans-serif" font-size="13">• Event-Driven Bus</text>

  <!-- Center Node (UNS Broker) -->
  <rect x="500" y="370" width="200" height="150" rx="16" fill="rgba(140, 18, 59, 0.3)" stroke="#8C123B" stroke-width="2"/>
  <text x="600" y="415" text-anchor="middle" fill="#F59E0B" font-family="sans-serif" font-size="13" font-weight="800">DATA BROKER</text>
  <text x="600" y="445" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="700">Unified Namespace</text>
  <text x="600" y="480" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="13">MQTT / OPC UA</text>

  <!-- Right Node (OT Control) -->
  <rect x="740" y="370" width="280" height="150" rx="16" fill="rgba(30, 41, 59, 0.8)" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
  <text x="770" y="415" fill="#10B981" font-family="sans-serif" font-size="13" font-weight="800">SYSTEM LAYER 02</text>
  <text x="770" y="445" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="700">PLC & SCADA Layer</text>
  <text x="770" y="480" fill="#94A3B8" font-family="sans-serif" font-size="13">• Real-time I/O Mapping</text>
  <text x="770" y="500" fill="#94A3B8" font-family="sans-serif" font-size="13">• Edge Node Sync</text>

  <!-- Connectors Bottom -->
  <line x1="320" y1="520" x2="320" y2="600" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
  <line x1="600" y1="520" x2="600" y2="600" stroke="#8C123B" stroke-width="2"/>
  <line x1="880" y1="520" x2="880" y2="600" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>

  <!-- Footer Banner -->
  <rect x="180" y="600" width="840" height="80" rx="16" fill="rgba(15, 23, 42, 0.9)" stroke="url(#cyanGrad)" stroke-width="1.5"/>
  <text x="600" y="645" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="700">Resilient High-Availability Solution Architecture Blueprint</text>
</svg>`;

fs.writeFileSync(path.join(targetDir, 'stage-design.svg'), designSvg);

// 3. BUILD SVG
const buildSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090D16"/>
      <stop offset="100%" stop-color="#1E1E2E"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="800" fill="url(#bg3)"/>

  <!-- IDE Window -->
  <rect x="100" y="80" width="1000" height="640" rx="20" fill="#181825" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>

  <!-- Window Bar -->
  <path d="M 100 100 A 20 20 0 0 1 120 80 L 1080 80 A 20 20 0 0 1 1100 100 L 1100 135 L 100 135 Z" fill="#11111B"/>
  <circle cx="135" cy="107" r="6" fill="#F38BA8"/>
  <circle cx="155" cy="107" r="6" fill="#F9E2AF"/>
  <circle cx="175" cy="107" r="6" fill="#A6E3A1"/>
  <text x="210" y="112" fill="#6C7086" font-family="monospace" font-size="13">src/services/AutomationEngine.ts — DHGsoft Core IDE</text>

  <!-- Sidebar -->
  <rect x="100" y="135" width="220" height="585" fill="#11111B"/>
  <text x="125" y="175" fill="#9399B2" font-family="sans-serif" font-size="12" font-weight="700">EXPLORER</text>
  <text x="135" y="210" fill="#89B4FA" font-family="monospace" font-size="13">📁 src/components</text>
  <text x="150" y="240" fill="#A6E3A1" font-family="monospace" font-size="13">📄 ScadaBroker.ts</text>
  <text x="150" y="270" fill="#F9E2AF" font-family="monospace" font-size="13">📄 PlcGateway.cpp</text>
  <text x="150" y="300" fill="#FAB387" font-family="monospace" font-size="13">📄 TelemetryPipe.go</text>
  <text x="135" y="340" fill="#89B4FA" font-family="monospace" font-size="13">📁 config/uns</text>

  <!-- Editor Code Area -->
  <g font-family="monospace" font-size="15" xml:space="preserve">
    <text x="360" y="190" fill="#CBA6F7">import</text><text x="425" y="190" fill="#CDD6F4"> { </text><text x="445" y="190" fill="#F9E2AF">IndustrialPipeline</text><text x="610" y="190" fill="#CDD6F4"> } </text><text x="635" y="190" fill="#CBA6F7">from</text><text x="680" y="190" fill="#A6E3A1"> '@dhgsoft/core-engine'</text><text x="915" y="190" fill="#CDD6F4">;</text>

    <text x="360" y="230" fill="#CBA6F7">export class</text><text x="480" y="230" fill="#89B4FA"> AutomationEngine</text><text x="630" y="230" fill="#CBA6F7"> implements</text><text x="735" y="230" fill="#F9E2AF"> IScadaBridge</text><text x="850" y="230" fill="#CDD6F4"> {</text>

    <text x="390" y="270" fill="#CBA6F7">private async</text><text x="515" y="270" fill="#89B4FA"> initializeProtocolHandler</text><text x="745" y="270" fill="#CDD6F4">(): </text><text x="775" y="270" fill="#F9E2AF">Promise&lt;void&gt;</text><text x="900" y="270" fill="#CDD6F4"> {</text>
    <text x="420" y="310" fill="#6C7086">// Establishing OPC UA / MQTT Sparkplug B Data Ingestion</text>
    <text x="420" y="340" fill="#CBA6F7">const</text><text x="475" y="340" fill="#CDD6F4"> broker = </text><text x="560" y="340" fill="#CBA6F7">await</text><text x="615" y="340" fill="#F9E2AF"> UNSManager</text><text x="720" y="340" fill="#CDD6F4">.</text><text x="730" y="340" fill="#89B4FA">connect</text><text x="800" y="340" fill="#CDD6F4">({</text>
    <text x="450" y="375" fill="#CDD6F4">endpoint: </text><text x="545" y="375" fill="#A6E3A1">"opc.tcp://192.168.1.100:4840"</text><text x="830" y="375" fill="#CDD6F4">,</text>
    <text x="450" y="405" fill="#CDD6F4">keepAlive: </text><text x="555" y="405" fill="#FAB387">true</text><text x="595" y="405" fill="#CDD6F4">,</text>
    <text x="450" y="435" fill="#CDD6F4">maxPacketDrop: </text><text x="595" y="435" fill="#FAB387">0</text>
    <text x="420" y="465" fill="#CDD6F4">});</text>

    <text x="420" y="505" fill="#89B4FA">broker</text><text x="475" y="505" fill="#CDD6F4">.</text><text x="485" y="505" fill="#89B4FA">subscribeTelemetry</text><text x="665" y="505" fill="#CDD6F4">((</text><text x="685" y="505" fill="#FAB387">data</text><text x="725" y="505" fill="#CDD6F4">) </text><text x="745" y="505" fill="#CBA6F7">=&gt;</text><text x="775" y="505" fill="#CDD6F4"> {</text>
    <text x="450" y="540" fill="#CBA6F7">this</text><text x="490" y="540" fill="#CDD6F4">.</text><text x="500" y="540" fill="#89B4FA">processOeeMetrics</text><text x="660" y="540" fill="#CDD6F4">(</text><text x="670" y="540" fill="#FAB387">data</text><text x="710" y="540" fill="#CDD6F4">);</text>
    <text x="420" y="570" fill="#CDD6F4">});</text>
    <text x="390" y="605" fill="#CDD6F4">}</text>
    <text x="360" y="640" fill="#CDD6F4">}</text>
  </g>

  <!-- Bottom Terminal Bar -->
  <rect x="320" y="660" width="780" height="60" fill="#11111B" rx="10"/>
  <text x="345" y="695" fill="#A6E3A1" font-family="monospace" font-size="13">✓ [BUILD SUCCESS] Compiled 48 modules in 1.4s. 0 Errors, 0 Warnings.</text>
</svg>`;

fs.writeFileSync(path.join(targetDir, 'stage-build.svg'), buildSvg);

// 4. DEPLOY SVG
const deploySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <linearGradient id="bg4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B0F19"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
    <linearGradient id="orangeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#EF4444"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="800" fill="url(#bg4)"/>

  <!-- Title Panel -->
  <rect x="100" y="70" width="1000" height="660" rx="20" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
  <text x="140" y="140" fill="#FFFFFF" font-family="sans-serif" font-size="24" font-weight="800">DevOps Cloud & Kubernetes Cluster Release Deployment</text>
  <text x="140" y="165" fill="#94A3B8" font-family="sans-serif" font-size="14">Launch • Validate • Adapt Pipeline</text>

  <!-- Pipeline Stages -->
  <rect x="140" y="210" width="210" height="130" rx="14" fill="rgba(30, 41, 59, 0.8)" stroke="#10B981" stroke-width="2"/>
  <text x="165" y="245" fill="#10B981" font-family="sans-serif" font-size="12" font-weight="800">PASSED</text>
  <text x="165" y="275" fill="#FFFFFF" font-family="sans-serif" font-size="17" font-weight="700">Code Verification</text>
  <text x="165" y="305" fill="#94A3B8" font-family="sans-serif" font-size="12">100% FAT Unit Tests</text>

  <line x1="350" y1="275" x2="400" y2="275" stroke="#10B981" stroke-width="3"/>

  <rect x="400" y="210" width="210" height="130" rx="14" fill="rgba(30, 41, 59, 0.8)" stroke="#10B981" stroke-width="2"/>
  <text x="425" y="245" fill="#10B981" font-family="sans-serif" font-size="12" font-weight="800">PASSED</text>
  <text x="425" y="275" fill="#FFFFFF" font-family="sans-serif" font-size="17" font-weight="700">Container Build</text>
  <text x="425" y="305" fill="#94A3B8" font-family="sans-serif" font-size="12">Docker / Helm Sync</text>

  <line x1="610" y1="275" x2="660" y2="275" stroke="url(#orangeGrad)" stroke-width="3"/>

  <rect x="660" y="210" width="210" height="130" rx="14" fill="rgba(140, 18, 59, 0.4)" stroke="#F59E0B" stroke-width="2"/>
  <text x="685" y="245" fill="#F59E0B" font-family="sans-serif" font-size="12" font-weight="800">IN PROGRESS (98%)</text>
  <text x="685" y="275" fill="#FFFFFF" font-family="sans-serif" font-size="17" font-weight="700">Plant Launch</text>
  <text x="685" y="305" fill="#94A3B8" font-family="sans-serif" font-size="12">Zero-Downtime Pods</text>

  <line x1="870" y1="275" x2="920" y2="275" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>

  <rect x="920" y="210" width="140" height="130" rx="14" fill="rgba(30, 41, 59, 0.5)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <text x="940" y="245" fill="#94A3B8" font-family="sans-serif" font-size="12" font-weight="800">NEXT</text>
  <text x="940" y="275" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="700">Live Telemetry</text>

  <!-- Live Deployment Cluster Pods Grid -->
  <rect x="140" y="380" width="920" height="310" rx="16" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <text x="175" y="425" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="700">Kubernetes High-Availability Nodes Status</text>

  ${[0,1,2,3].map(row => [0,1,2,3,4].map(col => `
    <g transform="translate(${175 + col * 175}, ${450 + row * 55})">
      <rect width="155" height="42" rx="8" fill="rgba(30, 41, 59, 0.8)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1"/>
      <circle cx="20" cy="21" r="5" fill="#10B981"/>
      <text x="35" y="25" fill="#E2E8F0" font-family="monospace" font-size="12">pod-node-${row*5+col+1}</text>
    </g>
  `).join('')).join('')}
</svg>`;

fs.writeFileSync(path.join(targetDir, 'stage-deploy.svg'), deploySvg);

// 5. OPERATE SVG
const operateSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <linearGradient id="bg5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#050811"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="greenGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="800" fill="url(#bg5)"/>

  <!-- NOC Window -->
  <rect x="80" y="70" width="1040" height="660" rx="20" fill="rgba(15, 23, 42, 0.8)" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>

  <text x="120" y="130" fill="#FFFFFF" font-family="sans-serif" font-size="22" font-weight="800">24x7 Network Operations Center (NOC) & Cyber Defense Console</text>
  <text x="120" y="155" fill="#94A3B8" font-family="sans-serif" font-size="14">Monitor • Optimize • Defend Infrastructure</text>

  <!-- Metric Card 1 -->
  <rect x="120" y="190" width="220" height="110" rx="14" fill="rgba(30, 41, 59, 0.7)" stroke="#10B981" stroke-width="1.5"/>
  <text x="145" y="225" fill="#94A3B8" font-family="sans-serif" font-size="13">SYSTEM SLA UPTIME</text>
  <text x="145" y="265" fill="#10B981" font-family="sans-serif" font-size="32" font-weight="900">99.99%</text>

  <!-- Metric Card 2 -->
  <rect x="365" y="190" width="220" height="110" rx="14" fill="rgba(30, 41, 59, 0.7)" stroke="#3B82F6" stroke-width="1.5"/>
  <text x="390" y="225" fill="#94A3B8" font-family="sans-serif" font-size="13">LATENCY AVERAGE</text>
  <text x="390" y="265" fill="#3B82F6" font-family="sans-serif" font-size="32" font-weight="900">1.2 ms</text>

  <!-- Metric Card 3 -->
  <rect x="610" y="190" width="230" height="110" rx="14" fill="rgba(30, 41, 59, 0.7)" stroke="#8C123B" stroke-width="1.5"/>
  <text x="635" y="225" fill="#94A3B8" font-family="sans-serif" font-size="13">SECURITY STATUS</text>
  <text x="635" y="265" fill="#F59E0B" font-family="sans-serif" font-size="24" font-weight="900">IEC 62443 SECURE</text>

  <!-- Metric Card 4 -->
  <rect x="865" y="190" width="220" height="110" rx="14" fill="rgba(30, 41, 59, 0.7)" stroke="#8B5CF6" stroke-width="1.5"/>
  <text x="890" y="225" fill="#94A3B8" font-family="sans-serif" font-size="13">PACKET DROPS</text>
  <text x="890" y="265" fill="#8B5CF6" font-family="sans-serif" font-size="32" font-weight="900">0.00%</text>

  <!-- Telemetry Wave Graph Area -->
  <rect x="120" y="330" width="965" height="360" rx="16" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <text x="150" y="375" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="700">Real-Time Time-Series Telemetry & Asset Performance Waveform</text>

  <path d="M 150 560 Q 250 420, 350 530 T 550 460 T 750 520 T 950 440 T 1050 490" fill="none" stroke="url(#greenGrad)" stroke-width="3.5"/>
  <path d="M 150 620 Q 250 500, 350 590 T 550 510 T 750 570 T 950 490 T 1050 540" fill="none" stroke="#8C123B" stroke-width="2.5" stroke-dasharray="5,5"/>
</svg>`;

fs.writeFileSync(path.join(targetDir, 'stage-operate.svg'), operateSvg);

// 6. ENABLE SVG
const enableSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <linearGradient id="bg6" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B0E17"/>
      <stop offset="100%" stop-color="#1E1E2E"/>
    </linearGradient>
    <linearGradient id="purpleGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="800" fill="url(#bg6)"/>

  <!-- Portal Container -->
  <rect x="90" y="70" width="1020" height="660" rx="22" fill="rgba(30, 41, 59, 0.75)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>

  <text x="130" y="140" fill="#FFFFFF" font-family="sans-serif" font-size="24" font-weight="800">DHGsoft Developer Knowledge Portal & Team Capability Hub</text>
  <text x="130" y="165" fill="#94A3B8" font-family="sans-serif" font-size="14">Empower • Educate • Elevate Engineering Teams</text>

  <!-- 3 Main Enablement Modules -->
  <!-- Module 1 -->
  <rect x="130" y="210" width="290" height="470" rx="18" fill="rgba(15, 23, 42, 0.85)" stroke="url(#purpleGrad)" stroke-width="2"/>
  <text x="160" y="260" fill="#EC4899" font-family="sans-serif" font-size="13" font-weight="800">ACADEMY MODULE 01</text>
  <text x="160" y="295" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="700">Skill Engineering</text>
  <text x="160" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">• Hands-on OT-IT Labs</text>
  <text x="160" y="365" fill="#94A3B8" font-family="sans-serif" font-size="13">• PLC/SCADA Certification</text>
  <text x="160" y="395" fill="#94A3B8" font-family="sans-serif" font-size="13">• Cloud Developer Tracks</text>
  <rect x="160" y="600" width="140" height="40" rx="20" fill="url(#purpleGrad)"/>
  <text x="230" y="625" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="700">View Catalog</text>

  <!-- Module 2 -->
  <rect x="455" y="210" width="290" height="470" rx="18" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
  <text x="485" y="260" fill="#3B82F6" font-family="sans-serif" font-size="13" font-weight="800">KNOWLEDGE ASSETS 02</text>
  <text x="485" y="295" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="700">Runtime Protocols</text>
  <text x="485" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">• System Architecture Docs</text>
  <text x="485" y="365" fill="#94A3B8" font-family="sans-serif" font-size="13">• Reusable Code Libraries</text>
  <text x="485" y="395" fill="#94A3B8" font-family="sans-serif" font-size="13">• Standard Operating SOPs</text>
  <rect x="485" y="600" width="140" height="40" rx="20" fill="rgba(255,255,255,0.1)"/>
  <text x="555" y="625" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="700">Access Assets</text>

  <!-- Module 3 -->
  <rect x="780" y="210" width="290" height="470" rx="18" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
  <text x="810" y="260" fill="#10B981" font-family="sans-serif" font-size="13" font-weight="800">INNOVATION 03</text>
  <text x="810" y="295" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="700">Continuous Upgrade</text>
  <text x="810" y="335" fill="#94A3B8" font-family="sans-serif" font-size="13">• System Expansion Loops</text>
  <text x="810" y="365" fill="#94A3B8" font-family="sans-serif" font-size="13">• AI Feature Roadmaps</text>
  <text x="810" y="395" fill="#94A3B8" font-family="sans-serif" font-size="13">• Feedback Diagnostics</text>
  <rect x="810" y="600" width="140" height="40" rx="20" fill="rgba(255,255,255,0.1)"/>
  <text x="880" y="625" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="700">Explore Roadmap</text>
</svg>`;

fs.writeFileSync(path.join(targetDir, 'stage-enable.svg'), enableSvg);

// 7. BUSINESS OUTCOME SVG
const outcomeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <linearGradient id="bg7" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#080B14"/>
      <stop offset="100%" stop-color="#1E1B2E"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="50%" stop-color="#EF4444"/>
      <stop offset="100%" stop-color="#8C123B"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="800" fill="url(#bg7)"/>

  <!-- Main Container -->
  <rect x="80" y="70" width="1040" height="660" rx="22" fill="rgba(15, 23, 42, 0.85)" stroke="url(#goldGrad)" stroke-width="2"/>

  <text x="130" y="140" fill="#FFFFFF" font-family="sans-serif" font-size="24" font-weight="800">Executive Business Intelligence & ROI Outcomes Dashboard</text>
  <text x="130" y="165" fill="#94A3B8" font-family="sans-serif" font-size="14">Value • Scale • Operational Excellence</text>

  <!-- 4 Outcome Cards Grid -->
  <rect x="130" y="210" width="220" height="150" rx="16" fill="rgba(30, 41, 59, 0.7)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <text x="155" y="250" fill="#F59E0B" font-family="sans-serif" font-size="13" font-weight="800">DOWNTIME REDUCTION</text>
  <text x="155" y="295" fill="#FFFFFF" font-family="sans-serif" font-size="36" font-weight="900">-35%</text>
  <text x="155" y="325" fill="#10B981" font-family="sans-serif" font-size="12">✓ Verified Across Plants</text>

  <rect x="375" y="210" width="220" height="150" rx="16" fill="rgba(30, 41, 59, 0.7)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <text x="400" y="250" fill="#10B981" font-family="sans-serif" font-size="13" font-weight="800">OEE EFFICIENCY</text>
  <text x="400" y="295" fill="#FFFFFF" font-family="sans-serif" font-size="36" font-weight="900">+18%</text>
  <text x="400" y="325" fill="#10B981" font-family="sans-serif" font-size="12">✓ Production Gains</text>

  <rect x="620" y="210" width="220" height="150" rx="16" fill="rgba(30, 41, 59, 0.7)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <text x="645" y="250" fill="#3B82F6" font-family="sans-serif" font-size="13" font-weight="800">SCRAP RATE</text>
  <text x="645" y="295" fill="#FFFFFF" font-family="sans-serif" font-size="36" font-weight="900">-50%</text>
  <text x="645" y="325" fill="#10B981" font-family="sans-serif" font-size="12">✓ AI Defect Detection</text>

  <rect x="865" y="210" width="210" height="150" rx="16" fill="rgba(30, 41, 59, 0.7)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <text x="890" y="250" fill="#EC4899" font-family="sans-serif" font-size="13" font-weight="800">ENERGY SAVINGS</text>
  <text x="890" y="295" fill="#FFFFFF" font-family="sans-serif" font-size="36" font-weight="900">12%</text>
  <text x="890" y="325" fill="#10B981" font-family="sans-serif" font-size="12">✓ Carbon Footprint Cut</text>

  <!-- Large Growth ROI Chart -->
  <rect x="130" y="390" width="945" height="300" rx="18" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <text x="165" y="435" fill="#FFFFFF" font-family="sans-serif" font-size="17" font-weight="700">Cumulative Enterprise Value & Cost Savings ROI Curve ($ Million)</text>

  <path d="M 165 640 Q 350 620, 500 530 T 800 460 T 1030 430" fill="none" stroke="url(#goldGrad)" stroke-width="4.5"/>
</svg>`;

fs.writeFileSync(path.join(targetDir, 'stage-outcome.svg'), outcomeSvg);

console.log('Successfully generated all 7 clean IT stage SVG images!');
