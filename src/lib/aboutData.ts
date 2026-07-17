// src/lib/aboutData.ts

export const missionItems = [
  "Deliver reliable and scalable industrial solutions",
  "Bridge OT and IT ecosystems seamlessly",
  "Empower industries with data-driven decision making",
  "Enhance operational efficiency and plant reliability",
  "Accelerate Industry 4.0 adoption through innovation",
];

export interface ValueItem {
  name: string;
  italic: string;
  description: string;
}

export const values: ValueItem[] = [
  { 
    name: 'Innovation',            
    italic: 'always',              
    description: 'Curiosity, exploration, and continuous learning drive every solution we deliver.' 
  },
  { 
    name: 'Reliability',            
    italic: 'by design',           
    description: 'Engineering rigor and long-term thinking behind every implementation.' 
  },
  { 
    name: 'Customer Success',       
    italic: 'first',               
    description: 'Your outcomes define ours. Partnership, not transaction.' 
  },
  { 
    name: 'Engineering Excellence', 
    italic: 'uncompromised',       
    description: 'Depth, discipline, and craft in every line of code and every schematic.' 
  },
  { 
    name: 'Safety & Compliance',    
    italic: 'without exception',   
    description: 'Zero-compromise safety and regulatory rigor across every industrial environment.' 
  },
  { 
    name: 'Long-Term Partnership',  
    italic: 'built on trust',      
    description: 'Relationships that continue delivering value long after go-live.' 
  },
];

export interface StrategicObjective {
  title: string;
  body: string;
}

export const strategicObjectives: StrategicObjective[] = [
  { 
    title: 'Global Trust Through Engineering', 
    body: 'Become the industrial technology partner customers rely on across regions, industries, and complexity levels.' 
  },
  { 
    title: 'Ecosystem Over Point Solutions',   
    body: 'Continue building integrated ecosystems that connect OT, IT, cloud, AI, and cybersecurity — not isolated tools.' 
  },
  { 
    title: 'Industry 4.0 Acceleration',         
    body: 'Empower manufacturers to adopt Industry 4.0 through practical, scalable, and measurable transformation programs.' 
  },
  { 
    title: 'Sustainable Manufacturing',         
    body: 'Enable intelligent, connected, and sustainable operations that reduce energy, waste, and environmental impact.' 
  },
  { 
    title: 'Long-Term Customer Partnerships',   
    body: 'Deliver continuous value through partnerships that extend well beyond commissioning and go-live.' 
  },
];

export const partners = [
  'Schneider Electric', 'AVEVA', 'Databricks', 'AWS', 'Microsoft Azure',
  'Phoenix Contact', 'MatrikonOPC', 'Kepware', 'Rockwell Automation', 'Siemens',
  'Advantech', 'MOXA', 'Hirschmann', 'ABB', 'Wonderware',
  'Mitsubishi', 'Endress+Hauser', 'VEGA', 'Eaton', 'D-Link',
  'Teltonika', 'Molex', 'Polycab', 'Dell', 'HPE',
  'Cisco', 'Fortinet', 'CommScope', 'Masibus', 'Rittal',
  'Palo Alto Networks', 'Redington',
];

export interface LocationItem {
  city: string;
  address: string;
  phone: string;
  email: string;
}

export const locations: LocationItem[] = [
  { 
    city: 'Ahmedabad, India', 
    address: '420, HillTown Plaza, Nikol, Ahmedabad - 382350', 
    phone: '+91 942 941 942 7', 
    email: 'hitesh.patel@dhgsoft.com' 
  },
];
