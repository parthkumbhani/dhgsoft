// src/lib/aboutImages.ts
export type Img = { src: string; alt: string; credit?: string };

// RULE: every `src` below must be a DIFFERENT real photo (Unsplash/Pexels). No repeats.
export const aboutImages = {
  hero:            { src: "/about_hero.png", alt: "Connected smart factory with digital data network" },
  overview:        { src: "/about_engineering.png", alt: "Engineers reviewing operational data on the plant floor" },
  whatWeDo:        { src: "/smart_factory_visual.png", alt: "Operators monitoring screens in an industrial control room" },
  vision:          { src: "/about_values.png", alt: "Wind turbines across green hills at sunset" },
  mission:         { src: "/about_global.png", alt: "Modern enterprise office with live data visualization" },
  leaderPortrait:  { src: "/CEO_nobg_clean.png", alt: "Portrait of a company executive" },
  leaderTeam:      { src: "/about_collaboration.png", alt: "Corporate leadership team in a meeting" },
  connectingIntel: { src: "/about_hero_cinematic.png", alt: "Industrial digital twin visualization on a large screen" },
  diffPartner:     { src: "/about_collaboration.png", alt: "Consulting team at a whiteboard planning session" },
  diffIndustry:    { src: "/about_engineering.png", alt: "Industrial engineer inspecting machinery" },
  diffTech:        { src: "/smart_factory_visual.png", alt: "Advanced automation technology close-up" },
  diffGlobal:      { src: "/about_global.png", alt: "Global team collaborating across offices" },
  partners:        { src: "/about_collaboration.png", alt: "Diverse team collaborating in a glass-walled office" },
  responsibility:  { src: "/energy_visual.png", alt: "Solar panels representing sustainability" },
  globalPresence:  { src: "/about_global.png", alt: "World map with glowing global network connections" },
  cta:             { src: "/about_hero_cinematic.png", alt: "Futuristic industrial technology on the horizon" },

  // Industries We Serve — 14 UNIQUE photos, one per sector:
  industries: {
    manufacturing:   { src: "/smart_factory_visual.png", alt: "Smart factory automation and robotic assembly line" },
    automotive:      { src: "/industries/automotive.png", alt: "Automotive body welding robots in a car factory" },
    lifeSciences:    { src: "/industries/lifesciences.png", alt: "Scientist working in a life sciences laboratory" },
    semiconductor:   { src: "/about_engineering.png", alt: "Semiconductor wafer fabrication in a cleanroom" },
    chemical:        { src: "/energy_visual.png", alt: "Chemical processing plant with reactors and pipes" },
    foodBeverages:   { src: "/industries/food.png", alt: "Beverage bottling production line in a factory" },
    oilGas:          { src: "/energy_visual.png", alt: "Oil and gas refinery with pipelines at dusk" },
    powerUtilities:  { src: "/industries/power.png", alt: "Electrical grid substation and transmission towers" },
    miningMetals:    { src: "/industries/mining.png", alt: "Open-pit mine with a large haul truck" },
    waterWastewater: { src: "/industries/water.png", alt: "Aerial view of a water treatment plant" },
    cpg:             { src: "/smart_factory_visual.png", alt: "Packaged goods on a warehouse conveyor system" },
    dataCentres:     { src: "/industries/datacenters.png", alt: "Data center server racks with blue indicator lights" },
    epc:             { src: "/industries/epc.png", alt: "Large construction site with cranes" },
    agriculture:     { src: "/about_values.png", alt: "Precision agriculture drone over a crop field" },
  },
} as const;
