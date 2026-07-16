import os

pages_data = {
    "vision-mission-values": {
        "title": "Vision, Mission & Values",
        "description": "Our vision, mission, and values define how we innovate, collaborate, and deliver engineering excellence.",
        "hero_title": "Driving the Future of Connected Industries",
        "hero_sub": "Every transformation begins with a clear purpose. At DHGsoft, our vision, mission, and values define how we innovate, collaborate, and deliver engineering excellence across every industrial engagement.",
        "hero_image": "/images/about/vision-hero.jpg",
        "sections": [
            {
                "type": "split_image_right",
                "title": "Our Vision",
                "subtitle": "Building the Next Generation of Intelligent Industries",
                "body": [
                    "Our vision is to become a globally trusted leader in Industrial Digital Transformation by enabling connected, intelligent, secure, and sustainable industrial enterprises.",
                    "We envision a future where industrial operations are seamlessly connected through engineering expertise, intelligent technologies, and data-driven decision-making. By integrating operational technology, enterprise systems, cloud platforms, and industrial intelligence, we help organizations unlock new levels of productivity, operational resilience, and long-term business value."
                ],
                "icon": "Eye",
                "image": "/images/about/vision-vision.jpg"
            },
            {
                "type": "split_image_left",
                "title": "Our Mission",
                "subtitle": "Engineering Solutions That Create Lasting Impact",
                "body": [
                    "Our mission is to empower industrial organizations with innovative engineering solutions that bridge the gap between operational technology and enterprise intelligence.",
                    "Through digital engineering, industrial automation, cloud technologies, AI, cybersecurity, and enterprise integration, we deliver scalable solutions that improve operational performance, enhance business agility, and accelerate sustainable transformation.",
                    "Every engagement is designed to solve real industrial challenges while preparing organizations for the future."
                ],
                "icon": "Target",
                "image": "/images/about/vision-mission.jpg"
            },
            {
                "type": "split_image_right",
                "title": "Our Purpose",
                "subtitle": "Connecting Intelligence to Transform Industry",
                "body": [
                    "Technology becomes valuable only when it creates measurable business outcomes.",
                    "Our purpose is to connect machines, systems, people, and industrial data into one intelligent ecosystem that enables organizations to operate more efficiently, make better decisions, and continuously improve performance.",
                    "We believe engineering is the foundation of meaningful digital transformation."
                ],
                "icon": "Zap",
                "image": "/images/about/vision-purpose.jpg"
            },
            {
                "type": "grid",
                "title": "Our Core Values",
                "items": [
                    {"title": "Innovation", "body": "Innovation drives continuous improvement across everything we build. We embrace emerging technologies, engineering excellence, and creative problem-solving to help customers overcome complex industrial challenges.", "icon": "Lightbulb"},
                    {"title": "Customer Success", "body": "Our customers' success defines our own. Every project is aligned with measurable business outcomes, operational improvements, and long-term value creation rather than simply delivering technology.", "icon": "Smile"},
                    {"title": "Integrity", "body": "Trust is built through transparency, accountability, and ethical business practices. We believe strong customer relationships are created through honesty and delivering on our commitments.", "icon": "ShieldCheck"},
                    {"title": "Excellence", "body": "Engineering precision is fundamental to every solution we deliver. We maintain the highest standards of quality, reliability, and technical excellence throughout the complete project lifecycle.", "icon": "Award"},
                    {"title": "Collaboration", "body": "Innovation happens through collaboration. We work closely with customers, technology partners, universities, research institutions, and engineering teams to build intelligent solutions.", "icon": "Users"},
                    {"title": "Sustainability", "body": "Engineering should improve both business performance and environmental responsibility. We help organizations optimize operations, reduce waste, improve energy efficiency, and support sustainable growth.", "icon": "Leaf"}
                ]
            }
        ],
        "commitment": "Everything we design, develop, and deliver is guided by our commitment to engineering excellence, customer success, continuous innovation, and responsible business practices.",
        "closing": "Engineering Tomorrow with Purpose",
        "closing_sub": "Our vision inspires where we are going. Our mission defines how we get there. Our values guide every step of the journey. Together, they form the foundation of DHGsoft's commitment to building connected, intelligent, and future-ready industries."
    },
    
    "leadership": {
        "title": "Leadership Team",
        "description": "Meet the DHGsoft executives and systems architects driving digital transformation.",
        "hero_title": "Leadership Driven by Engineering Excellence",
        "hero_sub": "Behind every successful transformation is a team committed to innovation, strategic thinking, and engineering excellence. At DHGsoft, our leadership combines deep industrial knowledge with digital expertise to guide customers through complex transformation journeys.",
        "hero_image": "/images/about/leadership-hero.jpg",
        "sections": [
            {
                "type": "split_image_right",
                "title": "Leadership Philosophy",
                "subtitle": "Technology alone does not transform businesses.",
                "body": [
                    "People, engineering expertise, collaboration, and continuous innovation create meaningful and sustainable change.",
                    "Our leadership philosophy reflects a commitment to long-term partnerships, technical excellence, and measurable customer success."
                ],
                "icon": "Heart",
                "image": "/images/about/leadership-philosophy.jpg"
            },
            {
                "type": "ceo",
                "name": "Hitesh Patel",
                "role": "Chief Executive Officer",
                "quote": "Digital transformation is not about implementing technology. It is about connecting operations, data, and intelligence to create measurable business value.",
                "bio": "Hitesh Patel leads DHGsoft with a vision of building an engineering-first organization focused on helping industrial enterprises embrace intelligent digital transformation. His leadership combines strategic thinking with practical engineering expertise, ensuring every customer engagement delivers measurable operational outcomes and long-term value.",
                "image": "/CEO_nobg_clean.png"
            },
            {
                "type": "grid",
                "title": "Executive Leadership",
                "items": [
                    {"title": "Chief Technology Officer", "body": "Leading technology strategy, digital innovation, industrial platforms, and enterprise architecture to deliver scalable engineering solutions.", "icon": "Cpu"},
                    {"title": "Vice President – Engineering", "body": "Driving engineering excellence, project delivery, solution implementation, and operational quality across industrial transformation initiatives.", "icon": "Settings2"},
                    {"title": "Head of Delivery", "body": "Ensuring successful execution of customer engagements through efficient project management, technical leadership, and continuous operational improvement.", "icon": "Briefcase"}
                ]
            },
            {
                "type": "full_width_image",
                "title": "Leadership Principles",
                "image": "/images/about/leadership-principles.jpg",
                "items": [
                    {"title": "Innovation", "body": "Embracing change and leading-edge technology solutions.", "icon": "Lightbulb"},
                    {"title": "Engineering Excellence", "body": "Delivering high precision and premium quality.", "icon": "CheckCircle"},
                    {"title": "Customer Success", "body": "Aligning technology directly with business goals.", "icon": "Target"},
                    {"title": "Collaboration", "body": "Co-innovating with clients and OEM partners.", "icon": "Users"},
                    {"title": "Accountability", "body": "Taking absolute ownership from concept to commissioning.", "icon": "FileText"},
                    {"title": "Continuous Learning", "body": "Staying ahead of emerging OT/IT standards.", "icon": "BookOpen"}
                ]
            }
        ],
        "commitment": "Our leaders work alongside customers, engineering teams, and technology partners to solve complex industrial challenges while creating sustainable business value.",
        "closing": "Building the Future Together",
        "closing_sub": "Leadership is not defined by titles. It is defined by the ability to inspire innovation, build trust, and create lasting impact."
    },
    
    "why-dhgsoft": {
        "title": "Why DHGsoft",
        "description": "Discover why global industrial enterprises partner with DHGsoft for digitalization.",
        "hero_title": "Why Organizations Choose DHGsoft",
        "hero_sub": "Industrial transformation requires more than technology implementation. It requires an engineering partner capable of understanding operations, integrating complex systems, and delivering measurable business outcomes.",
        "hero_image": "/images/about/why-hero.jpg",
        "sections": [
            {
                "type": "full_width_image",
                "title": "Core Strengths",
                "image": "/images/about/why-strengths.jpg",
                "items": [
                    {"title": "End-to-End Expertise", "body": "From strategy and consulting to engineering, implementation, optimization, and managed services, DHGsoft delivers complete lifecycle support under one trusted partner.", "icon": "RefreshCw"},
                    {"title": "Industrial Domain Knowledge", "body": "Our teams understand industrial environments because engineering is at the core of everything we do. We combine operational knowledge with modern technologies to solve real challenges.", "icon": "Factory"},
                    {"title": "Connected Intelligence", "body": "Operational data becomes valuable only when it supports better decision-making. We help organizations transform fragmented information into connected intelligence that improves performance.", "icon": "Network"},
                    {"title": "Technology Agnostic", "body": "Every customer has unique requirements. We recommend and implement technologies based on operational needs rather than vendor preferences, providing flexible and future-ready solutions.", "icon": "Sliders"},
                    {"title": "Customer-Centric Delivery", "body": "Every engagement begins with understanding customer objectives. We work collaboratively throughout the transformation journey, ensuring solutions deliver measurable long-term value.", "icon": "Target"},
                    {"title": "Engineering-First Approach", "body": "Unlike traditional IT consulting firms, DHGsoft approaches digital transformation through engineering, ensuring solutions integrate seamlessly and support safety and scalability.", "icon": "Wrench"}
                ]
            },
            {
                "type": "split_image_right",
                "title": "Why It Matters",
                "subtitle": "Connecting operations, data, enterprise systems, and intelligent technologies",
                "body": [
                    "Organizations choose DHGsoft because they need more than technology.",
                    "They need a trusted engineering partner capable of connecting operations, data, enterprise systems, and intelligent technologies into one integrated ecosystem."
                ],
                "icon": "CheckCircle",
                "image": "/images/about/why-matters.jpg"
            }
        ],
        "commitment": "We bring deep industry expertise, technology excellence, and a customer-centric delivery model to every engagement.",
        "closing": "Connected Intelligence, Trusted Partnerships",
        "closing_sub": "Engineering expertise. Connected intelligence. Trusted partnerships. These principles define why organizations continue to choose DHGsoft as their Industrial Digital Transformation partner."
    },
    
    "partners": {
        "title": "Partner Ecosystem",
        "description": "Collaborating with customers, technology leaders, and academic partners.",
        "hero_title": "Strong Partnerships. Greater Innovation.",
        "hero_sub": "Industrial transformation is built on collaboration. At DHGsoft, we work alongside customers, technology providers, academic institutions, research organizations, and strategic partners to deliver innovative, scalable, and future-ready engineering solutions.",
        "hero_image": "/images/about/partners-hero.jpg",
        "sections": [
            {
                "type": "split_image_right",
                "title": "Overview",
                "subtitle": "No organization transforms industries alone.",
                "body": [
                    "Digital transformation requires the combined expertise of engineering professionals, technology leaders, research communities, and industrial organizations working together toward a common goal.",
                    "DHGsoft believes long-term partnerships create stronger solutions, faster innovation, and sustainable business growth.",
                    "Our Partner Ecosystem enables us to deliver integrated technologies, accelerate implementation, and continuously expand our engineering capabilities while creating greater value for our customers."
                ],
                "icon": "Globe",
                "image": "/images/about/partners-overview.jpg"
            },
            {
                "type": "split_image_left",
                "title": "Our Collaboration Model",
                "subtitle": "We build partnerships based on trust, shared expertise, and long-term collaboration.",
                "body": [
                    "Our ecosystem combines engineering excellence with global technology platforms to deliver connected industrial solutions across diverse industries.",
                    "Every partnership is focused on solving real operational challenges while preparing organizations for the future of intelligent industry."
                ],
                "icon": "Handshake",
                "image": "/images/about/partners-model.jpg"
            },
            {
                "type": "grid",
                "title": "Our Partner Network",
                "items": [
                    {"title": "Customer Partnerships", "body": "Every customer relationship is built on collaboration rather than transactions. We work closely with customers throughout strategy, implementation, and support to ensure operational value.", "icon": "Smile"},
                    {"title": "Technology Collaboration", "body": "DHGsoft collaborates with leading technology providers to integrate automation platforms, enterprise systems, cloud infrastructure, cybersecurity, and advanced analytics.", "icon": "Cpu"},
                    {"title": "Academic & Research Collaboration", "body": "We actively encourage collaboration with universities, engineering institutions, and research organizations to support innovation, workforce development, and emerging technologies.", "icon": "BookOpen"},
                    {"title": "System Integration Network", "body": "DHGsoft partners with specialized integrators to deliver scalable solutions that connect operational technology, enterprise systems, and cloud platforms.", "icon": "Network"}
                ]
            }
        ],
        "commitment": "Our partnerships are built to create long-term value for customers by combining engineering expertise, technology innovation, and collaborative problem-solving.",
        "closing": "Innovation Grows Stronger Through Collaboration",
        "closing_sub": "Together with our customers and partners, we continue building connected, intelligent, and sustainable industrial enterprises."
    },
    
    "technology-partners": {
        "title": "Technology Partners",
        "description": "Our technology-neutral approach leveraging global hardware and software platforms.",
        "hero_title": "Building the Future with Trusted Technology Leaders",
        "hero_sub": "Modern industrial transformation requires technologies that are secure, scalable, and proven. DHGsoft works with leading global technology platforms to deliver reliable engineering solutions tailored to each customer's operational requirements.",
        "hero_image": "/images/about/technology-hero.jpg",
        "sections": [
            {
                "type": "split_image_right",
                "title": "Overview",
                "subtitle": "Technology is only valuable when it delivers measurable business outcomes.",
                "body": [
                    "DHGsoft follows a technology-agnostic approach, selecting platforms based on customer objectives rather than vendor preference.",
                    "By collaborating with globally recognized technology providers, we help organizations implement reliable, scalable, and future-ready digital ecosystems that integrate seamlessly with existing industrial environments."
                ],
                "icon": "Settings",
                "image": "/images/about/technology-overview.jpg"
            },
            {
                "type": "grid",
                "title": "Platform Capabilities",
                "items": [
                    {"title": "Industrial Automation Platforms", "body": "Supporting modern automation systems through leading industrial control technologies that improve operational efficiency, process reliability, and production performance.", "icon": "Factory"},
                    {"title": "Cloud Platforms", "body": "Designing secure cloud environments that enable connected operations, scalable infrastructure, remote collaboration, and enterprise-wide digital transformation.", "icon": "Cloud"},
                    {"title": "Enterprise Technologies", "body": "Integrating business applications that connect manufacturing, engineering, maintenance, quality, and enterprise operations into one intelligent digital environment.", "icon": "Cpu"},
                    {"title": "Industrial Data Platforms", "body": "Transforming industrial information into connected intelligence through modern data architectures, operational analytics, historians, and enterprise reporting platforms.", "icon": "Database"},
                    {"title": "Cybersecurity Technologies", "body": "Protecting industrial operations through trusted security technologies that strengthen operational resilience, reduce cyber risk, and support regulatory compliance.", "icon": "ShieldAlert"},
                    {"title": "Artificial Intelligence Platforms", "body": "Leveraging modern AI and advanced analytics platforms to transform operational data into predictive insights, intelligent automation, and better business decisions.", "icon": "Brain"}
                ]
            },
            {
                "type": "split_image_left",
                "title": "Our Technology Philosophy",
                "subtitle": "Neutral evaluation before recommending the right solution.",
                "body": [
                    "Every customer has different operational goals.",
                    "Instead of promoting one technology platform, DHGsoft evaluates business requirements, engineering complexity, scalability, security, and long-term value before recommending the right solution.",
                    "This technology-neutral approach enables organizations to build sustainable digital ecosystems without unnecessary vendor dependency."
                ],
                "icon": "Sliders",
                "image": "/images/about/technology-philosophy.jpg"
            }
        ],
        "commitment": "By combining leading hardware and software technologies, we ensure industrial reliability and enterprise readiness.",
        "closing": "Technology Should Empower Engineering, Not Limit It",
        "closing_sub": "DHGsoft works with trusted global technologies to deliver connected industrial solutions that create measurable business value."
    },
    
    "sustainability-esg": {
        "title": "Sustainability & ESG",
        "description": "Responsible engineering and digital solutions for cleaner operations.",
        "hero_title": "Engineering a More Sustainable Industrial Future",
        "hero_sub": "Sustainability is no longer an initiative. It is an essential part of responsible engineering and long-term industrial success. DHGsoft helps organizations improve operational performance while supporting environmental responsibility and sustainable growth.",
        "hero_image": "/images/about/sustainability-hero.jpg",
        "sections": [
            {
                "type": "split_image_right",
                "title": "Overview",
                "subtitle": "Expectations are rising to reduce environmental impact.",
                "body": [
                    "Industrial organizations face increasing expectations to improve efficiency, reduce environmental impact, and operate responsibly.",
                    "Through engineering innovation, intelligent automation, connected operations, and data-driven decision-making, DHGsoft helps customers achieve operational excellence while supporting broader sustainability objectives.",
                    "Our approach combines engineering expertise with digital technologies that improve productivity, optimize energy consumption, reduce waste, and strengthen long-term resilience."
                ],
                "icon": "Globe",
                "image": "/images/about/sustainability-overview.jpg"
            },
            {
                "type": "grid",
                "title": "Our ESG Pillars",
                "items": [
                    {"title": "Environmental Responsibility", "body": "Digital technologies enable industries to operate more efficiently while minimizing environmental impact. DHGsoft supports initiatives that improve energy efficiency, optimize industrial resources, reduce emissions, and encourage responsible operational practices.", "icon": "Leaf"},
                    {"title": "Social Responsibility", "body": "People remain at the center of every engineering solution. We promote collaboration, continuous learning, workforce development, diversity, safety, and inclusive innovation that empowers employees, customers, and communities.", "icon": "Users"},
                    {"title": "Governance", "body": "Strong governance creates trusted organizations. DHGsoft follows ethical business practices, transparent decision-making, responsible engineering standards, and customer-focused accountability across every engagement.", "icon": "ShieldCheck"},
                    {"title": "Sustainable Engineering", "body": "Engineering decisions influence long-term operational performance. Our solutions are designed to help organizations reduce operational waste, improve resource utilization, extend equipment life, and create sustainable industrial ecosystems through intelligent technologies.", "icon": "Wrench"}
                ]
            },
            {
                "type": "full_bleed_banner",
                "title": "Sustainable Future",
                "image": "/images/about/sustainability-esg.jpg",
                "body": "We believe engineering is not just about automation, but about building processes that are resource-efficient, low-carbon, and highly resilient for the next century of industry."
            }
        ],
        "commitment": "Sustainability is integrated into every stage of our engineering lifecycle. From solution design and technology selection to implementation and continuous optimization, we strive to create long-term value for customers while supporting responsible industrial growth.",
        "closing": "Engineering Today for a More Sustainable Tomorrow",
        "closing_sub": "The future of industry depends on balancing innovation with responsibility. DHGsoft remains committed to developing engineering solutions that support sustainable operations, intelligent infrastructure, and connected industrial ecosystems for generations to come."
    },
    
    "ethics-compliance": {
        "title": "Ethics & Compliance",
        "description": "Zero-trust compliance, transparent operations, and responsible engineering.",
        "hero_title": "Building Trust Through Integrity and Responsible Engineering",
        "hero_sub": "Engineering excellence begins with trust. At DHGsoft, ethics, transparency, compliance, and accountability guide every decision we make, every partnership we build, and every solution we deliver.",
        "hero_image": "/images/about/ethics-hero.jpg",
        "sections": [
            {
                "type": "split_image_right",
                "title": "Overview",
                "subtitle": "Organizations require engineering partners who operate with integrity.",
                "body": [
                    "As industries continue to embrace digital transformation, organizations require engineering partners who not only deliver innovative technology but also operate with integrity, responsibility, and transparency.",
                    "DHGsoft is committed to maintaining the highest standards of ethical business conduct, regulatory compliance, information security, and professional accountability. We believe long-term partnerships are built through honesty, responsible engineering, and a culture of continuous improvement.",
                    "Every employee, partner, and stakeholder is expected to uphold these principles while contributing to the success of our customers and the industries we serve."
                ],
                "icon": "Scale",
                "image": "/images/about/ethics-overview.jpg"
            },
            {
                "type": "grid",
                "title": "Our Ethical Principles",
                "items": [
                    {"title": "Integrity", "body": "We conduct every engagement with honesty, transparency, and accountability. Our commitment to ethical business practices strengthens the trust placed in us by customers, partners, and employees.", "icon": "UserCheck"},
                    {"title": "Compliance", "body": "We align our operations with industry regulations, engineering standards, contractual obligations, and corporate governance practices to ensure responsible project delivery.", "icon": "ShieldCheck"},
                    {"title": "Information Security", "body": "Protecting customer information is fundamental to every solution we develop. Our engineering practices emphasize secure architectures, responsible data handling, access management, and continuous risk assessment to safeguard operational and enterprise information.", "icon": "ShieldAlert"},
                    {"title": "Responsible Engineering", "body": "Every engineering decision considers safety, reliability, scalability, and long-term operational impact. We design solutions that support sustainable industrial growth while maintaining engineering quality and operational integrity.", "icon": "Wrench"},
                    {"title": "Transparency", "body": "Open communication builds stronger partnerships. We maintain clear project governance, transparent reporting, measurable deliverables, and collaborative decision-making throughout every customer engagement.", "icon": "Eye"}
                ]
            },
            {
                "type": "full_bleed_banner",
                "title": "Responsible Engineering Posture",
                "image": "/images/about/ethics-principles.jpg",
                "body": "Our zero-trust information security guidelines and transparent project delivery frameworks ensure client security and operational safety at all times."
            }
        ],
        "commitment": "Ethics and compliance are not independent activities. They are integrated into every engineering process, every customer interaction, and every technology solution we deliver.",
        "closing": "Trust Is Earned Through Every Decision We Make",
        "closing_sub": "DHGsoft remains committed to engineering responsibly, protecting customer interests, and delivering solutions built on integrity, quality, and accountability."
    },
    
    "recognition": {
        "title": "Recognition",
        "description": "Our milestones and customer success awards.",
        "hero_title": "Excellence Measured by Customer Success",
        "hero_sub": "Recognition is not defined only by awards. It is reflected in successful partnerships, trusted relationships, engineering excellence, and measurable business outcomes.",
        "hero_image": "/images/about/recognition-hero.jpg",
        "sections": [
            {
                "type": "split_image_right",
                "title": "Overview",
                "subtitle": "Our greatest achievement is the success of our customers.",
                "body": [
                    "At DHGsoft, our greatest achievement is the success of our customers.",
                    "Every completed project, every operational improvement, and every long-term partnership reflects our commitment to engineering excellence and continuous innovation.",
                    "As our organization grows, we continue building a reputation based on quality, reliability, technical expertise, and customer trust."
                ],
                "icon": "Award",
                "image": "/images/about/recognition-accomplishments.jpg"
            },
            {
                "type": "grid",
                "title": "Key Accomplishments",
                "items": [
                    {"title": "Customer Success", "body": "Every successful implementation represents a shared achievement between our engineering teams and our customers. Our focus remains on delivering practical solutions that improve productivity, operational efficiency, and business performance.", "icon": "Smile"},
                    {"title": "Engineering Excellence", "body": "Quality engineering is recognized through consistent execution. From digital engineering and industrial automation to enterprise integration and managed services, we strive to deliver solutions that exceed customer expectations while maintaining the highest technical standards.", "icon": "Wrench"},
                    {"title": "Innovation", "body": "Innovation drives continuous progress. We invest in emerging technologies, engineering talent, industrial research, and digital capabilities that enable customers to remain competitive in an evolving industrial landscape.", "icon": "Lightbulb"}
                ]
            },
            {
                "type": "full_width_image",
                "title": "Future Recognition Milestones",
                "image": "/images/about/recognition-milestones.jpg",
                "items": [
                    {"title": "Customer Success Stories", "body": "Showcasing operational gains and quantitative case study results.", "icon": "FileText"},
                    {"title": "Industry Awards", "body": "Validating our software architecture and integration capabilities.", "icon": "Award"},
                    {"title": "Engineering Certifications", "body": "Expanding our certified technicians and functional safety credentials.", "icon": "ShieldCheck"},
                    {"title": "Strategic Milestones", "body": "Highlighting key technology center expansions.", "icon": "MapPin"}
                ]
            }
        ],
        "commitment": "Recognition is not our destination. Continuous improvement, customer satisfaction, and engineering excellence remain the true measures of our success.",
        "closing": "Every Achievement Begins with a Customer Challenge",
        "closing_sub": "Together with our customers, partners, and engineering teams, we continue building solutions that create measurable impact across industries."
    },
    
    "locations": {
        "title": "Global Presence",
        "description": "Our flexible global delivery model and office locations.",
        "hero_title": "Delivering Engineering Excellence Across Global Industries",
        "hero_sub": "Industrial transformation knows no boundaries. DHGsoft supports organizations through a flexible global delivery model that combines local expertise with international engineering capabilities.",
        "hero_image": "/images/about/locations-hero.jpg",
        "sections": [
            {
                "type": "split_image_right",
                "title": "Overview",
                "subtitle": "Delivering engineering expertise wherever operations exist.",
                "body": [
                    "Modern industrial organizations require partners capable of delivering engineering expertise wherever operations exist.",
                    "DHGsoft combines onsite collaboration, offshore engineering, remote services, and continuous operational support to help customers accelerate digital transformation while maintaining consistency, quality, and responsiveness.",
                    "Our flexible delivery approach enables organizations to scale projects efficiently while accessing specialized engineering expertise across multiple technologies and industries."
                ],
                "icon": "Globe",
                "image": "/images/about/locations-delivery.jpg"
            },
            {
                "type": "grid",
                "title": "Global Delivery Model",
                "items": [
                    {"title": "Onsite Engineering", "body": "Working directly with customer teams to support implementation, commissioning, consulting, and project execution.", "icon": "Users"},
                    {"title": "Offshore Engineering", "body": "Providing dedicated engineering resources that improve scalability, reduce project timelines, and support continuous development.", "icon": "Cpu"},
                    {"title": "Remote Operations", "body": "Delivering secure remote engineering services, monitoring, diagnostics, optimization, and technical assistance through connected digital platforms.", "icon": "Network"},
                    {"title": "24x7 Support", "body": "Ensuring continuous operational reliability through proactive monitoring, issue resolution, and managed engineering services.", "icon": "Clock"}
                ]
            },
            {
                "type": "full_bleed_banner",
                "title": "International Offices",
                "image": "/images/about/locations-offices.jpg",
                "body": "With major delivery centers in India (Ahmedabad & Pune) and international partner collaborations, we support global operations with agility and high technical capability."
            },
            {
                "type": "industries",
                "title": "Industries We Support",
                "items": [
                    "Industrial Manufacturing", "Automotive", "Semiconductor", "Life Sciences",
                    "Chemical Manufacturing", "Food & Beverage", "Oil & Gas", "Power & Utilities",
                    "Mining & Metals", "Water & Wastewater", "Consumer Packaged Goods",
                    "Data Centres", "EPC", "Agriculture"
                ]
            }
        ],
        "commitment": "Digital transformation succeeds through collaboration. DHGsoft works closely with customers, technology providers, and academic partners.",
        "closing": "Engineering Beyond Borders",
        "closing_sub": "Wherever our customers operate, DHGsoft is committed to delivering trusted engineering expertise, connected intelligence, and future-ready digital transformation solutions."
    },

    "overview": {
        "title": "Overview",
        "description": "Engineering Excellence for a Connected Industrial Future — the DHGsoft story, capabilities, engineering approach, and the industries we serve.",
        "hero_title": "Engineering Excellence for a Connected Industrial Future",
        "hero_sub": "Digital transformation is changing the way industries design, manufacture, operate, and innovate. As industrial environments become more connected and data-driven, organizations require engineering partners capable of integrating operational technology, enterprise systems, and intelligent digital solutions.",
        "hero_image": "/images/about/overview-hero.jpg",
        "sections": [
            {
                "type": "split_image_left",
                "title": "Our Story",
                "subtitle": "Connecting operations, data, enterprise systems, and intelligent technologies",
                "body": [
                    "Every industrial organization generates vast amounts of operational data every second. Yet for many businesses, valuable information remains isolated across machines, control systems, enterprise applications, and operational teams.",
                    "DHGsoft was founded with a simple vision: to transform disconnected industrial environments into intelligent, connected enterprises.",
                    "Our journey began with a commitment to engineering excellence and a belief that successful digital transformation requires more than implementing new technologies. It requires understanding industrial operations, solving complex engineering challenges, and delivering solutions that create measurable business value.",
                    "Over the years, we have expanded our expertise across industrial automation, OT/IT integration, cloud technologies, artificial intelligence, industrial data platforms, cybersecurity, and enterprise applications. This integrated approach allows us to deliver solutions that not only modernize operations but also prepare organizations for the future of connected industry."
                ],
                "icon": "BookOpen",
                "image": "/images/about/overview-story.jpg"
            },
            {
                "type": "grid",
                "title": "DHGsoft at a Glance",
                "items": [
                    {"title": "Industrial Digital Transformation Partner", "body": "Helping organizations build intelligent operations where machines, systems, and people work together through connected ecosystems.", "icon": "Compass"},
                    {"title": "Engineering-First Delivery Approach", "body": "Ensuring precision, technical quality, and structural integrity are incorporated into every automation and data platform solution.", "icon": "Wrench"},
                    {"title": "End-to-End Project Lifecycle Support", "body": "Supporting clients from initial operational discovery and strategy design through to commissioning and long-term optimization.", "icon": "RefreshCw"},
                    {"title": "Global Delivery Model", "body": "Leveraging onsite and remote engineering models to provide agile, scalable, and responsive support to global industrial sites.", "icon": "Globe"},
                    {"title": "Cross-Industry Engineering Expertise", "body": "Delivering digital systems configured specifically to the regulatory, safety, and operational needs of diverse industrial sectors.", "icon": "Factory"},
                    {"title": "Long-Term Managed Services", "body": "Providing continuous monitoring, telemetry analysis, proactive maintenance, and operational security to safeguard industrial assets.", "icon": "Headphones"}
                ]
            },
            {
                "type": "split_image_right",
                "title": "Industries We Serve",
                "subtitle": "Engineering expertise tailored to your specific industry environment",
                "body": [
                    "Every industry presents unique operational challenges. Our engineering solutions are designed to address these challenges while creating connected, intelligent, and resilient operations.",
                    "Our engineering expertise supports organizations across a wide range of industrial sectors, providing digital solutions that optimize resources, improve efficiency, and support sustainable growth."
                ],
                "icon": "Factory",
                "image": "/images/about/overview-industries.jpg"
            }
        ],
        "commitment": "By connecting operational technology, enterprise systems, and intelligent digital solutions, DHGsoft helps organizations transform complexity into opportunity and innovation into measurable business value.",
        "closing": "Building the Future of Connected Industries",
        "closing_sub": "Engineering is at the heart of everything we do. Together with our customers, partners, and engineering teams, we are shaping the future of intelligent industry."
    }
}

layout_template = """import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '__TITLE__ | DHGsoft',
  description: '__DESCRIPTION__',
};

export default function __CLASSNAME__Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
"""

page_template = """"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { __ICONS__ } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function About__CLASSNAME__Page() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image with Dark Gradient overlay) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-12 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="__HERO_IMAGE__" 
              alt="__TITLE__ banner" 
              fill 
              priority 
              className="object-cover" 
              sizes="100vw" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/65 to-ink/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-site mx-auto px-gutter md:px-gutter-md">
            <nav className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs mb-7">
              <Link href="/about" className="hover:text-brand-hot transition-colors">About</Link>
              <span className="opacity-50">/</span>
              <span className="text-white font-medium">__TITLE__</span>
            </nav>
            <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest">__TITLE__</div>
            <h1 className="text-white mt-5 max-w-[900px] font-extrabold tracking-tight leading-[1.05] text-headline-xl">
              __HERO_TITLE__
            </h1>
            <p className="text-slate-300 text-body-md mt-6 max-w-[760px] leading-relaxed font-medium">
              __HERO_SUB__
            </p>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        __SECTIONS__

        {/* ============ COMMITMENT BAND ============ */}
        <section className="relative overflow-hidden bg-mist min-h-[50vh] flex items-center py-14 md:py-20 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand/5 rounded-full blur-[100px] pointer-events-none z-0" />
          <div className="relative z-10 max-w-[1000px] mx-auto px-gutter md:px-gutter-md w-full">
            <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">Our Commitment</div>
            <h3 className="text-txt-strong mt-6 font-extrabold leading-snug tracking-tight text-3xl md:text-4xl" style={{ fontSize: 'clamp(1.75rem, 1.4rem + 1vw, 2.25rem)' }}>__COMMITMENT__</h3>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ CLOSING STATEMENT (Full bleed) ============ */}
        <section className="relative min-h-[85vh] md:min-h-[90vh] bg-gradient-to-br from-ink to-[#1a1226] text-white overflow-hidden flex items-center text-left py-16 md:py-24">
          <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="max-w-[900px] space-y-6">
              <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest">Closing Statement</div>
              <h2 className="text-white mt-4 font-black tracking-tight leading-tight text-headline-xl">
                __CLOSING__
              </h2>
              <p className="text-slate-300 text-body-md leading-relaxed max-w-[720px] font-medium">
                __CLOSING_SUB__
              </p>
              <div className="flex flex-wrap gap-4 pt-6">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all cursor-pointer text-base"
                >
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors text-base">
                  Back to About
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={() => {}}
      />
    </div>
  );
}
"""

def create_files():
    for slug, data in pages_data.items():
        dir_path = f"src/app/about/{slug}"
        os.makedirs(dir_path, exist_ok=True)
        
        classname = slug.replace('-', '').capitalize()
        
        # 1. Create layout.tsx
        lay = layout_template
        lay = lay.replace("__TITLE__", data["title"])
        lay = lay.replace("__DESCRIPTION__", data["description"])
        lay = lay.replace("__CLASSNAME__", classname)
        with open(f"{dir_path}/layout.tsx", "w", encoding="utf-8") as f:
            f.write(lay)
            
        # 2. Create page.tsx
        icons = ["ArrowRight"]
        for section in data["sections"]:
            if section["type"] in ["split_image_right", "split_image_left"]:
                icons.append(section["icon"])
            elif section["type"] in ["grid", "full_width_image"]:
                for item in section["items"]:
                    icons.append(item["icon"])
        
        unique_icons = sorted(list(set(icons)))
        
        sections_jsx = ""
        for sec in data["sections"]:
            if sec["type"] == "split_image_right":
                body_p = "\n".join([f'<p className="text-body-sm text-txt-muted mt-5 leading-relaxed">{p}</p>' for p in sec["body"][1:]])
                sections_jsx += f"""
        {'{/* ============ SPLIT IMAGE RIGHT ============ */}'}
        <section className="relative overflow-hidden bg-white min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="absolute top-1/4 left-[5%] w-[350px] h-[350px] bg-brand/5 rounded-full blur-[110px] pointer-events-none z-0" />
          <div className="absolute bottom-1/4 right-[5%] w-[350px] h-[350px] bg-brand-hot/5 rounded-full blur-[110px] pointer-events-none z-0" />
          
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7 text-left order-2 lg:order-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <{sec["icon"]} className="w-6 h-6" />
                  </div>
                  <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">{sec["title"]}</div>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{{{ fontSize: 'clamp(2.25rem, 1.75rem + 1.2vw, 3rem)' }}}}>{sec["subtitle"]}</h3>
                <p className="text-txt-strong text-body-md mt-6 leading-relaxed font-normal">{sec["body"][0]}</p>
                {body_p}
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="{sec["image"]}" alt="{sec["title"]} photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />
"""
            elif sec["type"] == "split_image_left":
                body_p = "\n".join([f'<p className="text-body-sm text-txt-muted mt-5 leading-relaxed">{p}</p>' for p in sec["body"][1:]])
                sections_jsx += f"""
        {'{/* ============ SPLIT IMAGE LEFT ============ */}'}
        <section className="relative overflow-hidden bg-white min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="absolute top-1/4 right-[5%] w-[350px] h-[350px] bg-brand/5 rounded-full blur-[110px] pointer-events-none z-0" />
          <div className="absolute bottom-1/4 left-[5%] w-[350px] h-[350px] bg-brand-hot/5 rounded-full blur-[110px] pointer-events-none z-0" />
          
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] hover:scale-[1.02] transition-transform duration-500">
                  <Image src="{sec["image"]}" alt="{sec["title"]} photography" fill className="object-cover" sizes="(min-width:1024px) 35vw, 100vw" />
                </div>
              </div>
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <{sec["icon"]} className="w-6 h-6" />
                  </div>
                  <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">{sec["title"]}</div>
                </div>
                
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{{{ fontSize: 'clamp(2.25rem, 1.75rem + 1.2vw, 3rem)' }}}}>{sec["subtitle"]}</h3>
                <p className="text-txt-strong text-body-md mt-6 leading-relaxed font-normal">{sec["body"][0]}</p>
                {body_p}
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />
"""
            elif sec["type"] == "grid":
                grid_items_jsx = ""
                for item in sec["items"]:
                    grid_items_jsx += f"""
              <div className="card bg-white border border-line rounded-[24px] p-8 hover:border-brand hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-start min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-6">
                  <{item["icon"]} className="w-6 h-6" />
                </div>
                <h4 className="text-txt-strong font-bold text-lg md:text-xl leading-snug">{item["title"]}</h4>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed">{item["body"]}</p>
              </div>
"""
                sections_jsx += f"""
        {'{/* ============ GRID SECTION ============ */}'}
        <section className="relative overflow-hidden bg-mist min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-brand/5 rounded-full blur-[130px] pointer-events-none z-0" />
          
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">{sec["title"]}</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-5 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grid_items_jsx}
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />
"""
            elif sec["type"] == "ceo":
                sections_jsx += f"""
        {'{/* ============ CEO SECTION ============ */}'}
        <section className="relative overflow-hidden bg-white min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="absolute top-1/4 left-[10%] w-[300px] h-[300px] bg-brand/5 rounded-full blur-[100px] pointer-events-none z-0" />
          
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-4">
                <div className="relative rounded-[32px] overflow-hidden ring-1 ring-brand/10 shadow-2xl aspect-[4/5] bg-gradient-to-br from-ink to-[#1a1226]">
                  <Image src="{sec["image"]}" alt="{sec["name"]} photo" fill className="object-cover object-top hover:scale-[1.02] transition-transform duration-500" sizes="(min-width:1024px) 30vw, 100vw" />
                </div>
              </div>
              <div className="lg:col-span-8 text-left space-y-6">
                <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">{sec["role"]}</div>
                <h2 className="text-txt-strong mt-4 font-extrabold tracking-tight leading-[1.1]" style={{{{ fontSize: 'clamp(2.25rem, 1.75rem + 1.2vw, 3rem)' }}}}>{sec["name"]}</h2>
                <div className="pl-6 border-l-[4px] border-brand mt-6">
                  <p className="text-txt-strong italic font-serif leading-relaxed" style={{{{ fontSize: "clamp(1.5rem, 1.25rem + 0.6vw, 1.875rem)" }}}}>"{sec["quote"]}"</p>
                </div>
                <p className="text-body-sm text-txt-muted mt-6 leading-relaxed">{sec["bio"]}</p>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />
"""
            elif sec["type"] == "full_bleed_banner":
                sections_jsx += f"""
        {'{/* ============ FULL BLEED IMAGE BANNER ============ */}'}
        <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image src="{sec["image"]}" alt="{sec["title"]} graphic" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-transparent" />
          </div>
          <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md text-left w-full">
            <div className="max-w-[720px] space-y-6">
              <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest">{sec["title"]}</div>
              <p className="text-white mt-6 leading-relaxed font-extrabold" style={{{{ fontSize: 'clamp(1.75rem, 1.4rem + 1vw, 2.25rem)' }}}}>{sec["body"]}</p>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />
"""
            elif sec["type"] == "full_width_image":
                grid_items_jsx = ""
                for item in sec["items"]:
                    grid_items_jsx += f"""
              <div className="card bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-5">
                  <{item["icon"]} className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-bold text-base leading-snug">{item["title"]}</h4>
                <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">{item["body"]}</p>
              </div>
"""
                sections_jsx += f"""
        {'{/* ============ FULL WIDTH IMAGE PANEL + GRID ============ */}'}
        <section className="relative overflow-hidden bg-mist min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">{sec["title"]}</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-5 mx-auto" />
            </div>
            
            <div className="relative rounded-[32px] overflow-hidden aspect-[21/9] mb-10 shadow-xl">
              <Image src="{sec["image"]}" alt="{sec["title"]} dynamic setup" fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-ink/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grid_items_jsx}
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />
"""
            elif sec["type"] == "industries":
                chips_jsx = "".join([f'<span className="text-body-sm text-txt-strong bg-mist border border-line rounded-full px-5 py-2.5 font-semibold hover:border-brand hover:text-brand transition-colors cursor-default select-none shrink-0">{ind}</span>' for ind in sec["items"]])
                sections_jsx += f"""
        {'{/* ============ CHIPS SECTION ============ */}'}
        <section className="relative overflow-hidden bg-white min-h-[85vh] md:min-h-[90vh] flex items-center py-16 md:py-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-brand/5 rounded-full blur-[100px] pointer-events-none z-0" />
          
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <div className="text-brand text-[11px] font-extrabold uppercase tracking-widest">{sec["title"]}</div>
              <div className="w-16 h-[3px] bg-brand rounded-full mt-5 mx-auto" />
            </div>
            <div className="flex flex-wrap justify-center gap-3.5 max-w-[1000px] mx-auto">
              {chips_jsx}
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />
"""

        pg = page_template
        pg = pg.replace("__TITLE__", data["title"])
        pg = pg.replace("__HERO_TITLE__", data["hero_title"])
        pg = pg.replace("__HERO_SUB__", data["hero_sub"])
        pg = pg.replace("__HERO_IMAGE__", data["hero_image"])
        pg = pg.replace("__COMMITMENT__", data["commitment"])
        pg = pg.replace("__CLOSING__", data["closing"])
        pg = pg.replace("__CLOSING_SUB__", data["closing_sub"])
        pg = pg.replace("__CLASSNAME__", classname)
        pg = pg.replace("__ICONS__", ", ".join(unique_icons))
        pg = pg.replace("__SECTIONS__", sections_jsx)
        
        with open(f"{dir_path}/page.tsx", "w", encoding="utf-8") as f:
            f.write(pg)
        print(f"Created: {slug}")

if __name__ == "__main__":
    create_files()
