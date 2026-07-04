// src/lib/aboutImages.ts
export type Img = { src: string; alt: string; credit?: string };

// RULE: every `src` below must be a DIFFERENT real photo (Unsplash/Pexels). No repeats.
export const aboutImages = {
  hero:            { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80", alt: "Connected smart factory with digital data network" },
  overview:        { src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80", alt: "Engineers reviewing operational data on the plant floor" },
  whatWeDo:        { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", alt: "Operators monitoring screens in an industrial control room" },
  vision:          { src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80", alt: "Wind turbines across green hills at sunset" },
  mission:         { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", alt: "Modern enterprise office with live data visualization" },
  leaderPortrait:  { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80", alt: "Portrait of a company executive" },
  leaderTeam:      { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", alt: "Corporate leadership team in a meeting" },
  connectingIntel: { src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80", alt: "Industrial digital twin visualization on a large screen" },
  diffPartner:     { src: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80", alt: "Consulting team at a whiteboard planning session" },
  diffIndustry:    { src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80", alt: "Industrial engineer inspecting machinery" },
  diffTech:        { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", alt: "Advanced automation technology close-up" },
  diffGlobal:      { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", alt: "Global team collaborating across offices" },
  partners:        { src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80", alt: "Diverse team collaborating in a glass-walled office" },
  responsibility:  { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80", alt: "Solar panels representing sustainability" },
  globalPresence:  { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80", alt: "World map with glowing global network connections" },
  cta:             { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80", alt: "Futuristic industrial technology on the horizon" },

  // Industries We Serve — 14 UNIQUE photos, one per sector:
  industries: {
    manufacturing:   { src: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80", alt: "Smart factory automation and robotic assembly line" },
    automotive:      { src: "https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=600&q=80", alt: "Automotive body welding robots in a car factory" },
    lifeSciences:    { src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80", alt: "Scientist working in a life sciences laboratory" },
    semiconductor:   { src: "https://images.unsplash.com/photo-1581091224801-f412851eb4c8?auto=format&fit=crop&w=600&q=80", alt: "Semiconductor wafer fabrication in a cleanroom" },
    chemical:        { src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=600&q=80", alt: "Chemical processing plant with reactors and pipes" },
    foodBeverages:   { src: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=600&q=80", alt: "Beverage bottling production line in a factory" },
    oilGas:          { src: "https://images.unsplash.com/photo-1542241647-9cbb2225278b?auto=format&fit=crop&w=600&q=80", alt: "Oil and gas refinery with pipelines at dusk" },
    powerUtilities:  { src: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=600&q=80", alt: "Electrical grid substation and transmission towers" },
    miningMetals:    { src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b41a77?auto=format&fit=crop&w=600&q=80", alt: "Open-pit mine with a large haul truck" },
    waterWastewater: { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80", alt: "Aerial view of a water treatment plant" },
    cpg:             { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80", alt: "Packaged goods on a warehouse conveyor system" },
    dataCentres:     { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80", alt: "Data center server racks with blue indicator lights" },
    epc:             { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80", alt: "Large construction site with cranes" },
    agriculture:     { src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=600&q=80", alt: "Precision agriculture drone over a crop field" },
  },
} as const;
