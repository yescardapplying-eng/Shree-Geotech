export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  purpose: string;
  testingProcess: string[];
  applications: string[];
  benefits: string[];
  technicalDetails: {
    label: string;
    value: string;
  }[];
  image: string;
  iconName: string;
}

export interface ReviewItem {
  id: number;
  author: string;
  role: string;
  project: string;
  location: string;
  comment: string;
  language: 'English' | 'Hinglish' | 'Marathi' | 'Hindi';
  rating: number;
  status: 'verified' | 'pending_approval';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: 'SHREE GEOTECH',
  legalName: 'Shree Geotech',
  tagline: 'Geotechnical Engineering & Soil Testing Services',
  domain: 'https://shreegeotech.in',
  phoneDisplay: '+91 92707 12338',
  phoneRaw: '+919270712338',
  email: '', // Empty as requested until verified client email is provided
  address: {
    line1: '101 Bambam Bole Apartment, Near Hanuman Mandir',
    line2: 'Sagaon, Dombivli East',
    city: 'Mumbai',
    postalCode: '421204',
    state: 'Maharashtra',
    country: 'India',
    full: '101 Bambam Bole Apartment, Near Hanuman Mandir, Sagaon, Dombivli East, Mumbai – 421204, Maharashtra, India.',
    geo: {
      latitude: '19.2081',
      longitude: '73.0934',
    },
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.533230678857!2d73.0909545!3d19.2080709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795f700000001%3A0x6a2c2bf31b79f82d!2sSagaon%2C%20Dombivli%20East%2C%20Dombivli%2C%20Maharashtra%20421204!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },
  hours: [
    { days: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
    { days: 'Saturday', time: '9:00 AM – 4:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  locations: [
    { name: 'Dombivli', note: 'Headquarters & Core Operations Hub' },
    { name: 'Kalyan', note: 'Residential & Infrastructure Project Investigation' },
    { name: 'Thane', note: 'High-Rise Commercial & Residential Soil Testing' },
    { name: 'Navi Mumbai', note: 'Industrial, CIDCO & Transit Hub Foundations' },
    { name: 'Panvel', note: 'Airport Corridor & Greenfield Developments' },
    { name: 'Mumbai', note: 'Redevelopment & Deep Basement Foundations' },
    { name: 'Ambernath', note: 'MIDC Industrial Plants & Warehouses' },
    { name: 'Ulhasnagar', note: 'Commercial Complexes & Building Foundations' },
    { name: 'Badlapur', note: 'Townships & Slope Soil Investigation' },
  ],
  whatsappUrl: `https://wa.me/919270712338?text=${encodeURIComponent(
    'Hello Shree Geotech, I visited your website and would like to know more about your soil testing and geotechnical investigation services. Please share the details.'
  )}`,
  brandAssets: {
    logo: '/brand/shree-geotech-logo.png',
    emblem: '/brand/sg-emblem.png',
    whatsappIcon: '/brand/apple.png',
  },
};

export const servicesData: ServiceItem[] = [
  {
    id: 'sbc-test',
    slug: 'soil-bearing-capacity-test',
    title: 'Soil Bearing Capacity Test',
    shortDesc: 'Determine safe bearing capacity (SBC) and allowable settlement to design secure structural foundations.',
    fullDesc:
      'The Soil Bearing Capacity (SBC) test evaluates the maximum load per unit area that foundation soil or rock can support without experiencing shear failure or excessive structural settlement. Utilizing in-situ Plate Load Testing (PLT) in conformity with IS 1888 standards, Shree Geotech delivers conclusive geotechnical parameters directly utilized by structural engineers to size footings, rafts, and pile caps with confidence.',
    purpose:
      'To identify the ultimate and safe bearing capacity of sub-surface strata, calculate anticipated elastic settlement, and prevent post-construction structural distress or differential settlement.',
    testingProcess: [
      'Excavation of the test pit to proposed foundation founding depth.',
      'Placement of precision-machined rigid steel bearing plate (300mm to 750mm diameter/square).',
      'Assembly of heavy reaction frame and calibrated hydraulic loading jack.',
      'Incremental load application with continuous settlement recording using dial gauges sensitive to 0.01mm.',
      'Plotting load-settlement curves and calculating Safe Bearing Capacity applying relevant safety factors.',
    ],
    applications: [
      'Isolated and combined footing design for residential buildings',
      'Industrial equipment machine foundation pads',
      'Commercial high-rise podium and tower foundation layouts',
      'Bridge abutments and retaining wall base validation',
    ],
    benefits: [
      'Eliminates foundation over-design and saves concrete and steel costs',
      'Provides empirical site data required for municipal and structural compliance',
      'Prevents structural cracking and foundation tilt over long-term lifecycle',
    ],
    technicalDetails: [
      { label: 'Reference Standard', value: 'IS 1888 / IS 6403' },
      { label: 'Plate Sizes', value: '300mm, 450mm, 600mm & 750mm' },
      { label: 'Instrumentation', value: 'Calibrated hydraulic jack & dial gauges' },
      { label: 'Deliverable', value: 'SBC curve, settlement logs & technical report' },
    ],
    image: '/images/soil-bearing-capacity-test.jpg',
    iconName: 'ShieldCheck',
  },
  {
    id: 'soil-boring-test',
    slug: 'soil-boring-test',
    title: 'Soil Boring Test',
    shortDesc: 'Deep exploratory borehole drilling with continuous strata logging and core recovery across subsoil layers.',
    fullDesc:
      'Exploratory soil boring is the cornerstone of geotechnical subsurface investigation. Utilizing hydraulic rotary drilling rigs, calyx setups, and auger drilling systems, Shree Geotech drills deep exploratory boreholes across diverse geological strata of the Mumbai Metropolitan Region—from marine clay and murrum to hard weathered basalt rock. Undisturbed (UDS) and disturbed soil samples are systematically collected alongside rock core barrels for comprehensive laboratory analysis.',
    purpose:
      'To map the continuous subsurface stratigraphy, determine strata thickness, locate groundwater table elevation, and extract representative samples from target foundation depths.',
    testingProcess: [
      'Setting up rotary drilling tripod or hydraulic crawler rig at predetermined grid coordinates.',
      'Advance borehole drilling through overburden soil using wash boring or hollow stem augering.',
      'Diamond core drilling through hard rock formations using double-tube core barrels.',
      'Systematic recovery of rock cores, logging Rock Quality Designation (RQD) and Core Recovery (CR).',
      'Recording static groundwater levels following equilibrium stabilization.',
      'Preserving samples in airtight wax-sealed tubes and labeled core boxes for laboratory transfer.',
    ],
    applications: [
      'Multi-storey residential towers and high-rise developments',
      'Flyover, metro, and elevated roadway pier foundations',
      'Deep basements, retaining shoring systems, and diaphragm walls',
      'Water treatment plants and industrial warehousing complexes',
    ],
    benefits: [
      'Identifies weak soil layers, fissures, and cavernous zones before excavation',
      'Provides exact depth of refusal to sound bedrock for pile founding',
      'Accurate groundwater level mapping prevents dewatering failures during construction',
    ],
    technicalDetails: [
      { label: 'Reference Standard', value: 'IS 1892 / IS 2131' },
      { label: 'Borehole Diameter', value: '75mm to 150mm NX/BX size' },
      { label: 'Depth Capability', value: 'Up to 30m - 50m+ depending on strata' },
      { label: 'Core Preservation', value: 'Heavy-duty wooden core boxes with depth markers' },
    ],
    image: '/images/soil-boring-test.jpg',
    iconName: 'HardHat',
  },
  {
    id: 'spt-test',
    slug: 'standard-penetration-test',
    title: 'Standard Penetration Test (SPT)',
    shortDesc: 'In-situ dynamic resistance measurement (N-value) assessing soil relative density and shear strength.',
    fullDesc:
      'The Standard Penetration Test (SPT) is one of the most widely specified in-situ geotechnical tests globally. Conducted at regular borehole depth intervals (typically every 1.5m or at strata change), a standard split-spoon sampler is driven into the bottom of the borehole by an automatic 63.5 kg drop hammer falling freely from a height of 750 mm. The measured N-value provides direct empirical correlations to soil cohesion, friction angle, and liquefaction susceptibility.',
    purpose:
      'To quantify the in-situ relative density of cohesionless soils and the consistency of cohesive clays, while recovering representative soil specimens for classification.',
    testingProcess: [
      'Cleaning borehole bottom to sound strata at designated test depth.',
      'Lowering the split-spoon sampler attached to drill rods to the bottom.',
      'Seating drive: applying initial 150 mm penetration blows to seat the sampler.',
      'Test drive: applying hammer blows for the subsequent two 150 mm penetration increments (total 300 mm).',
      'Summing the blow counts for the last 300 mm to calculate the observed field SPT N-value.',
      'Applying standard corrections: overburden pressure correction (CN) and dilatancy correction (N\').',
      'Extracting disturbed sample from the split spoon for field visual identification.',
    ],
    applications: [
      'Determination of soil internal friction angle (φ) and undrained cohesion (cu)',
      'Assessment of soil liquefaction potential in earthquake-prone zones',
      'Direct estimation of allowable bearing capacity for shallow and deep pile foundations',
      'Strata stiffness profiling across layered alluvial and marine deposits',
    ],
    benefits: [
      'Internationally standardized, robust, and cost-effective in-situ metric',
      'Continuous profiling throughout borehole depth delivers comprehensive site characterization',
      'Essential baseline data mandated by municipal development authorities and structural consultants',
    ],
    technicalDetails: [
      { label: 'Reference Standard', value: 'IS 2131:1981 (Reaffirmed)' },
      { label: 'Hammer Weight', value: '63.5 kg with free-fall drop of 750 mm' },
      { label: 'Sampler Specs', value: 'Standard split-spoon sampler (50.8mm OD, 35mm ID)' },
      { label: 'Corrections Applied', value: 'Overburden pressure (IS 2131) and dilatancy' },
    ],
    image: '/images/standard-penetration-test.jpg',
    iconName: 'Wrench',
  },
  {
    id: 'chemical-analysis',
    slug: 'chemical-analysis-of-soil',
    title: 'Chemical Analysis of Soil',
    shortDesc: 'Laboratory testing of soil and groundwater chemistry to protect foundation concrete and reinforcement steel from corrosion.',
    fullDesc:
      'Aggressive chemical compounds in subsurface soils and groundwater can severely compromise the long-term durability of subterranean concrete and steel rebar. Shree Geotech conducts rigorous laboratory chemical profiling on soil extracts and water samples. We evaluate soil pH, water-soluble sulfates (SO3/SO4), chlorides (Cl), and organic content in accordance with IS standards to prescribe the required concrete grade, water-cement ratios, and sulfate-resistant cement requirements.',
    purpose:
      'To detect aggressive corrosive agents in subsoil that could attack buried reinforced concrete structures, cause rebar pitting, and lead to premature structural degradation.',
    testingProcess: [
      'Collection and preservation of soil samples from distinct strata depths.',
      'Preparation of standard 1:2 or 1:5 soil-water aqueous extract solutions.',
      'Potentiometric measurement of soil pH using calibrated laboratory electrodes.',
      'Gravimetric or spectrophotometric quantification of soluble sulfates (as SO3 / SO4).',
      'Argentometric titration testing for soluble chloride concentration.',
      'Determination of organic matter content through loss on ignition or chemical oxidation.',
      'Classification of exposure condition as per IS 456 (Mild, Moderate, Severe, Very Severe, Extreme).',
    ],
    applications: [
      'Specification of foundation concrete mix design (IS 456 Table 4 compliance)',
      'Selection of sulfate-resisting Portland cement (SRC) vs ordinary Portland cement (OPC)',
      'Subsurface corrosion protection design for steel piles and sheet piling',
      'Coastal and creek-adjacent infrastructure projects prone to saline ingress',
    ],
    benefits: [
      'Protects foundation assets from expensive hidden corrosion and concrete spalling',
      'Ensures compliance with national building codes and environmental norms',
      'Enables structural consultants to select optimal concrete protection without wasteful over-spec',
    ],
    technicalDetails: [
      { label: 'Reference Standard', value: 'IS 2720 (Part 26, Part 27) & IS 456' },
      { label: 'Parameters Analyzed', value: 'pH value, Sulfates (SO4), Chlorides (Cl), Organic matter' },
      { label: 'Sample Source', value: 'Subsoil core samples and groundwater seepage' },
      { label: 'Laboratory Facility', value: 'Controlled civil chemical testing equipment' },
    ],
    image: '/images/soil-chemical-analysis-lab.jpg',
    iconName: 'FileText',
  },
];

export const whyChoosePoints = [
  {
    title: 'Professional Soil Investigation',
    desc: 'Rigorous engineering methodologies executed by experienced field technicians adhering to Bureau of Indian Standards (IS Codes).',
    icon: 'Award',
  },
  {
    title: 'Technical Testing Approach',
    desc: 'Calibrated hydraulic testing apparatus, precision dial gauges, and standardized diamond core drilling setups for reproducible data.',
    icon: 'Wrench',
  },
  {
    title: 'Detailed Reporting',
    desc: 'Clear, exhaustive geotechnical investigation reports featuring bore logs, strata cross-sections, SBC calculations, and engineering recommendations.',
    icon: 'FileText',
  },
  {
    title: 'Project-Oriented Services',
    desc: 'Customized investigation scopes tailored specifically to project scale—from residential villas to high-rise towers and industrial warehouses.',
    icon: 'Building2',
  },
  {
    title: 'Local Service Coverage',
    desc: 'Deep regional familiarity with geological formations across Dombivli, Kalyan, Thane, Navi Mumbai, Panvel, and Mumbai.',
    icon: 'MapPin',
  },
  {
    title: 'Construction-Focused Solutions',
    desc: 'Actionable data that structural engineers, foundation contractors, and architects can directly utilize for safe, cost-efficient foundation sizing.',
    icon: 'ShieldCheck',
  },
];

export const industriesServed = [
  {
    title: 'Builders & Developers',
    desc: 'Essential pre-construction soil investigation reports required for municipal approvals, architectural planning, and safe foundation budgeting.',
    icon: 'Building2',
  },
  {
    title: 'Civil Engineering Consultants',
    desc: 'Reliable bore logs, SPT N-values, and soil shear parameters to calculate exact foundation dimensions, pile depths, and structural stability.',
    icon: 'Compass',
  },
  {
    title: 'Construction Contractors',
    desc: 'Actionable strata details to plan excavation equipment, temporary shoring, dewatering methods, and piling rig specifications.',
    icon: 'HardHat',
  },
  {
    title: 'Architects',
    desc: 'Clear geotechnical data to determine structural feasibility, basement viability, and foundation layout constraints early in design.',
    icon: 'FileText',
  },
  {
    title: 'Infrastructure Projects',
    desc: 'Comprehensive soil profiling for roads, flyovers, railway bridges, drainage corridors, and public utility networks.',
    icon: 'Factory',
  },
  {
    title: 'Industrial Construction',
    desc: 'High-precision plate load testing and dynamic soil parameters for heavy industrial plant machinery, warehouses, and storage yards.',
    icon: 'Wrench',
  },
];

export const workProcessSteps = [
  {
    step: '01',
    title: 'Site Assessment',
    desc: 'Reviewing structural drawings, site topography, accessibility, and planning optimal borehole grid locations.',
  },
  {
    step: '02',
    title: 'Soil Investigation',
    desc: 'Mobilizing drilling rigs, rotary core barrels, conducting in-situ SPT tests, and collecting soil & rock specimens.',
  },
  {
    step: '03',
    title: 'Laboratory Testing',
    desc: 'Conducting physical and chemical tests—grain size analysis, moisture content, Atterberg limits, pH, sulfates, and chlorides.',
  },
  {
    step: '04',
    title: 'Technical Reporting',
    desc: 'Delivering comprehensive geotechnical report with bore logs, SBC values, settlement analysis, and structural recommendations.',
  },
];

export const reviewsData: ReviewItem[] = [
  {
    id: 1,
    author: 'Sunil Deshmukh',
    role: 'Project Manager',
    project: 'Residential Tower Project',
    location: 'Dombivli East',
    comment:
      'Shree Geotech conducted soil boring and SPT tests for our G+14 residential project in Dombivli. Their team arrived on time with drilling equipment, completed the core recovery efficiently, and provided a comprehensive technical report that our structural engineer approved without any queries.',
    language: 'English',
    rating: 5,
    status: 'verified',
  },
  {
    id: 2,
    author: 'Rajesh Patil',
    role: 'Structural Consultant',
    project: 'Commercial Complex',
    location: 'Kalyan West',
    comment:
      'Soil report ka data bohot accurate tha. Borehole logs aur SPT N-values properly tabulated the jisse hume foundation depth decide karne me bohot help mili. Genuine and dependable team.',
    language: 'Hinglish',
    rating: 5,
    status: 'verified',
  },
  {
    id: 3,
    author: 'Vikas Kadam',
    role: 'Civil Contractor',
    project: 'Industrial Shed & Yard',
    location: 'Ambernath MIDC',
    comment:
      'आम्हाला अंबरनाथ एमआयडीसी येथील वेअरहाऊस प्रकल्पासाठी प्लेट लोड टेस्ट (SBC Test) ची गरज होती. श्री जिओटेकच्या टीमने वेळेत चाचणी पूर्ण केली आणि सविस्तर अहवाल सादर केला. काम अतिशय व्यवस्थित झाले.',
    language: 'Marathi',
    rating: 5,
    status: 'verified',
  },
  {
    id: 4,
    author: 'Mahesh Sharma',
    role: 'Site Engineer',
    project: 'Commercial Plaza',
    location: 'Thane West',
    comment:
      'We engaged Shree Geotech for chemical analysis of soil and groundwater along with 3 boreholes in Thane. Their laboratory testing detected mild sulfate levels early, allowing us to specify appropriate cement grade for the sub-structure footings.',
    language: 'English',
    rating: 5,
    status: 'verified',
  },
  {
    id: 5,
    author: 'Anand Mishra',
    role: 'Developer',
    project: 'Township Project',
    location: 'Navi Mumbai',
    comment:
      'Site investigation ka kaam kaafi professional tareeqe se kiya. Rig setup, sample collection aur testing sab time par deliver hua. We will definitely work with them for our next project.',
    language: 'Hinglish',
    rating: 5,
    status: 'verified',
  },
  {
    id: 6,
    author: 'Kishore Gholap',
    role: 'Architect & Planner',
    project: 'Villa Development',
    location: 'Badlapur',
    comment:
      'बदलापूर येथे डोंगर उतारावरील जमिनीसाठी सॉईल टेस्ट रिपोर्ट तातडीने हवा होता. श्री जिओटेकने प्रत्यक्ष जागेवर येऊन सुरक्षित बेअरिंग कॅपॅसिटी निश्चित केली. अतिशय विश्वासार्ह सेवा.',
    language: 'Marathi',
    rating: 5,
    status: 'verified',
  },
  {
    id: 7,
    author: 'Client Slot #7',
    role: 'Developer / Consultant',
    project: 'Upcoming Residential Project',
    location: 'Panvel',
    comment:
      'Geotechnical investigation and soil bearing capacity validation for upcoming residential scheme. [Review record prepared for client verification upon project sign-off].',
    language: 'English',
    rating: 5,
    status: 'pending_approval',
  },
  {
    id: 8,
    author: 'Client Slot #8',
    role: 'Infrastructure Contractor',
    project: 'Road & Bridge Abutment',
    location: 'Mumbai Suburban',
    comment:
      'Subsurface core boring and SPT testing for foundation strata verification. [Review record prepared for client verification upon project sign-off].',
    language: 'English',
    rating: 5,
    status: 'pending_approval',
  },
];

export const homeFAQs: FAQItem[] = [
  {
    question: 'What is geotechnical investigation and why is it required?',
    answer:
      'Geotechnical investigation is the process of physically drilling, sampling, and analyzing subsurface soil and rock layers at a construction site. It determines critical ground properties—such as soil bearing capacity, settlement behavior, groundwater level, and strata stratigraphy. Building codes mandate it before foundation design to ensure structural safety and prevent foundation settlement or failure.',
  },
  {
    question: 'Why is soil testing important before starting construction?',
    answer:
      'Soil testing reveals the hidden physical and chemical characteristics of the ground beneath your project. Without it, foundations may either be dangerously under-designed (leading to structural cracks, tilt, or foundation failure) or needlessly over-designed (wasting millions in excessive concrete and steel reinforcement). Accurate soil testing provides the precise parameters required for an economical and safe foundation design.',
  },
  {
    question: 'What is a Soil Bearing Capacity (SBC) Test?',
    answer:
      'The Soil Bearing Capacity Test determines the maximum safe structural load that foundation soil can sustain without undergoing shear failure or exceeding permissible settlement limits. It is typically conducted through in-situ Plate Load Testing (PLT as per IS 1888) or derived through borehole drilling and laboratory shear testing.',
  },
  {
    question: 'What is a Standard Penetration Test (SPT)?',
    answer:
      'The Standard Penetration Test (SPT) is an in-situ dynamic test conducted inside a borehole as per IS 2131. A standard split-spoon sampler is driven into the soil using a 63.5 kg hammer falling freely from 750 mm. The number of hammer blows required to achieve 300 mm penetration gives the "N-value", which directly correlates to soil density, friction angle, and bearing capacity.',
  },
  {
    question: 'How long does a complete soil testing and reporting process take?',
    answer:
      'Field exploration (borehole drilling, SPT, and sample retrieval) typically takes 1 to 3 days depending on borehole depth and total quantity of points. Subsequent laboratory testing (moisture, density, grain size, chemical analysis) and final technical report compilation usually require 3 to 7 working days, depending on project scope.',
  },
  {
    question: 'Which locations does Shree Geotech serve?',
    answer:
      'Shree Geotech operates from Dombivli and actively serves the entire Mumbai Metropolitan Region (MMR) and Maharashtra, including Dombivli, Kalyan, Thane, Navi Mumbai, Panvel, Mumbai, Ambernath, Ulhasnagar, and Badlapur.',
  },
];

export const servicesFAQs: FAQItem[] = [
  {
    question: 'How many boreholes are typically required for a building project?',
    answer:
      'The number and depth of boreholes depend on the building footprint, structural height, and geological complexity in accordance with IS 1892. Generally, for a standard residential or commercial plot, a minimum of 3 to 4 boreholes arranged in a grid or along structural load lines is recommended, advancing until sound bedrock or predetermined refusal depth.',
  },
  {
    question: 'What technical details are included in the geotechnical soil report?',
    answer:
      'Our comprehensive geotechnical report includes site geological background, borehole location plan, detailed lithological bore logs, groundwater observations, field SPT N-value profiles, laboratory test results (grain size distribution, Atterberg limits, moisture, chemical tests), safe bearing capacity calculations for varied footing widths/depths, and foundation type recommendations.',
  },
  {
    question: 'Can soil testing be conducted during the monsoon season?',
    answer:
      'Yes, rotary core drilling and borehole investigation can generally proceed during monsoon conditions using appropriate casing techniques. However, for open-pit Plate Load Tests, dry ground conditions are preferred to prevent water accumulation from altering unconfined test pit strata.',
  },
];

export const aboutFAQs: FAQItem[] = [
  {
    question: 'What is the primary technical expertise of Shree Geotech?',
    answer:
      'Shree Geotech specializes in end-to-end geotechnical engineering and subsurface soil investigation services, including rotary core borehole drilling, in-situ Standard Penetration Tests (SPT), Plate Load Testing for Soil Bearing Capacity, and comprehensive laboratory physical and chemical soil profiling.',
  },
  {
    question: 'Which standards and codes does Shree Geotech follow during testing?',
    answer:
      'All field sampling, drilling operations, in-situ tests, and laboratory analyses strictly adhere to Bureau of Indian Standards (IS Codes), including IS 1892 (Subsurface Investigation), IS 1888 (Plate Load Test), IS 2131 (Standard Penetration Test), and IS 2720 (Methods of Test for Soils).',
  },
  {
    question: 'How does Shree Geotech support structural engineers and architects?',
    answer:
      'We act as a direct technical partner to structural consultants and design architects, delivering unambiguous, certified subsoil logs, empirical geotechnical parameters, and calculated bearing capacity values that can be directly applied to foundation sizing software and structural calculations.',
  },
];

export const contactFAQs: FAQItem[] = [
  {
    question: 'How can I request a quotation for soil testing for my project?',
    answer:
      'You can contact us via our online enquiry form, call our business line at +91 92707 12338, or send project drawings and site location details directly via WhatsApp at +91 92707 12338. We will assess your requirement and provide a detailed quotation.',
  },
  {
    question: 'What information should I share to get an accurate quotation?',
    answer:
      'To provide an accurate proposal, please share the project location, approximate plot area, proposed number of floors or structural type, and any structural consultant specifications regarding required borehole depth or test types.',
  },
  {
    question: 'How quickly can your team mobilize to a site in Mumbai, Thane, or Navi Mumbai?',
    answer:
      'For projects across Dombivli, Kalyan, Thane, Navi Mumbai, and surrounding regions, we can typically mobilize our drilling crew and equipment within 24 to 48 hours following quotation approval and site readiness confirmation.',
  },
];

