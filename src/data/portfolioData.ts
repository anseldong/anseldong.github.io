import {
  Project,
  RoboticsSeason,
  AppItem,
  MusicProfile,
  SwimStats,
  ServiceItem,
  MathItem,
  HowIBuildStep
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Ansel Dong",
  fullName: "Ansel Yanze Dong",
  email: "adong27@students.st-andrews.org",
  location: "Cupertino, CA 95014",
  school: "St. Andrew’s Episcopal School",
  grade: "8th Grade",
  classOf: "Class of 2027",
  tagline: "Student · Developer · Roboticist · Musician",
  heroSubtitle: "I build things, solve problems, and occasionally launch bean bags.",
  missionStatement:
    "To obtain admission to a challenging and competitive high school where I can strengthen my interests and skills in mathematics, robotics, and computer science, while continuing to grow as a well-rounded student overall.",
  contributionStatement:
    "Upon being granted admission, I will contribute to the school community by bringing my experience and skill set of robotics, programming, mathematics, athletics, and music. I hope to collaborate with other students on engineering and technology projects, participate actively in robotics and other STEM opportunities, and contribute as both a swimmer and musician in a school band. I also hope to share my knowledge and enthusiasm with others by helping teammates and classmates solve problems, develop ideas, and learn new skills.",
  coreValues: [
    "Figuring out how things work down to the first principles",
    "Building real software and hardware prototypes from scratch",
    "Mentoring teammates and empowering others to build"
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "mix-and-match-calculator",
    title: "Mix and Match Calculator",
    category: "software",
    tagline: "VEX IQ scoring & alliance match calculator for iPadOS and iOS",
    description:
      "A published App Store scoring application built for the 2025-2026 VEX IQ competition season, featuring rapid score entry, dynamic alliance simulations, and PencilKit scratchpads.",
    techStack: ["Swift", "SwiftUI", "PencilKit", "CloudKit"],
    status: "Published",
    downloads: "3.75K+ Downloads",
    metrics: "3,750+ App Store downloads",
    featured: true,
    caseStudy: {
      idea: "During high-pressure VEX IQ tournaments, alliance teams have seconds between matches to calculate scores, simulate win conditions, and agree on strategies.",
      why: "Existing community calculators were slow, cluttered with ads, or lacked support for Apple Pencil sketching and offline arena conditions.",
      prototype: "I built an initial SwiftUI grid in Xcode that mapped each scoring game element to an interactive counter with instant total recalculation.",
      challenge: "Handling real-time score rule variations while maintaining a fluid 120Hz interface on iPad with PencilKit drawing support without frame drops.",
      iteration: "Redesigned the layout for both split-screen iPad and one-handed iPhone use; integrated local caching with CloudKit sync and custom gesture controls.",
      result: "Achieved over 3,750 organic downloads from robotics teams worldwide with a 4.9-star rating in the App Store.",
      whatLearned: "Building software that thousands of competitive roboticists rely on taught me the value of edge-case validation and user feedback loops."
    }
  },
  {
    id: "rapid-relay-calculator",
    title: "Rapid Relay Calculator",
    category: "software",
    tagline: "Rule-accurate scoring and timer utility for VEX IQ Rapid Relay",
    description:
      "A dedicated iOS utility built for the 2024-2025 VEX IQ season that helps teams, judges, and spectators score matches and analyze target passing cycles.",
    techStack: ["Swift", "SwiftUI", "UIKit"],
    status: "Published",
    downloads: "659 Downloads",
    metrics: "659 verified App Store downloads",
    featured: true,
    caseStudy: {
      idea: "VEX IQ Rapid Relay introduced complex ball passing and goal multiplier rules that frequently caused scoring disputes in regional tournaments.",
      why: "I wanted a clear, mistake-proof tool for our team and alliance partners to immediately calculate valid ball passes and bonus switch states.",
      prototype: "Created an interactive field diagram where tapping goal zones instantly updated total points with visual verification.",
      challenge: "Accounting for nuanced referee timing rules—such as late-cleared balls and goal boundary conditions—without making the UI confusing.",
      iteration: "Refined the button hierarchy so scoring operators could record points with tactile haptic feedback without looking down constantly.",
      result: "Published on the App Store with 659 downloads across regional robotics teams and tournament volunteers.",
      whatLearned: "Firsthand experience navigating Apple's App Review guidelines, bundle identifiers, App Store Connect assets, and release management."
    }
  },
  {
    id: "goodneighbor",
    title: "GoodNeighbor",
    category: "software",
    tagline: "Two-sided community volunteering and mutual aid platform",
    description:
      "A platform connecting local residents who need assistance (groceries, yard maintenance, tech help) with verified community volunteers.",
    techStack: ["SwiftUI", "Firebase", "Firestore", "Cloud Storage"],
    status: "Active",
    metrics: "Full functional prototype",
    featured: true,
    caseStudy: {
      idea: "While volunteering at local food distribution programs, I noticed many elderly or homebound neighbors struggle to request small, everyday favors.",
      why: "Existing platforms are either neighborhood social networks filled with spam or formal charity systems with weeks of bureaucratic friction.",
      prototype: "Constructed a two-sided mobile client in SwiftUI with real-time Firebase Firestore subscriptions for task requests and volunteer claims.",
      challenge: "Structuring the Firestore database security rules to preserve volunteer privacy while ensuring safety and clear task status updates.",
      iteration: "Added category filters, location approximations, status timelines (Requested → Assigned → Completed), and direct messaging channels.",
      result: "Working prototype tested with school service peers and community volunteers.",
      whatLearned: "Real-world database architecture, asynchronous network state handling in Swift, and how software can tangibly empower community service."
    }
  },
  {
    id: "pip-os",
    title: "PIP-OS",
    category: "hardware",
    tagline: "Raspberry Pi Fallout-inspired portable operating interface",
    description:
      "A custom embedded interface and utility dashboard designed for Raspberry Pi touchscreens, inspired by the retro-futuristic Pip-Boy OS.",
    techStack: ["Raspberry Pi", "Linux", "Python", "Tkinter/Pygame"],
    status: "Prototype",
    featured: false,
    caseStudy: {
      idea: "Wanted to turn an old Raspberry Pi into a functional, tactile desk utility inspired by Fallout's monochrome green CRT aesthetic.",
      why: "A great hands-on way to explore Linux process management, system telemetry, and physical hardware input buttons.",
      prototype: "Coded a Python dashboard reading CPU temperature, memory usage, weather API data, and local network diagnostics.",
      challenge: "Running smooth 60fps retro CRT scanline animations without consuming excessive CPU cycles on a resource-constrained Pi.",
      iteration: "Optimized frame buffer rendering, created custom pixel fonts, and wired physical rotary encoders for menu switching.",
      result: "A working standalone terminal device running continuously on my workspace.",
      whatLearned: "Deepened my understanding of Unix system internals, serial communication, and embedded UI performance optimization."
    }
  },
  {
    id: "minecraft-hud",
    title: "Minecraft Custom HUD & Theme",
    category: "software",
    tagline: "Custom Java HUD mod for Minecraft with Fallout 4 styling",
    description:
      "A client-side game modification built in Java using the Fabric loader that reimagines Minecraft's heads-up display with clean typography and modular telemetry.",
    techStack: ["Java", "Fabric", "Minecraft API", "Gradle"],
    status: "Complete",
    featured: false,
    caseStudy: {
      idea: "Standard game HUDs often obstruct the field of view with cluttered icons instead of providing clean, actionable gameplay data.",
      why: "Wanted to learn Java object-oriented design and Gradle dependency management through practical game modding.",
      prototype: "Wrote custom render mixins that intercept vanilla HUD draw calls and replace health/armor bars with sleek numeric meters.",
      challenge: "Safely injecting rendering hooks into Minecraft's rendering pipeline without causing conflicts with other client-side mods.",
      iteration: "Rewrote coordinate and inventory trackers to use an event-driven architecture, reducing overhead to sub-millisecond draw calls.",
      result: "A clean, functional custom HUD mod with configurable color schemes and hotkeys.",
      whatLearned: "Java byte-code manipulation with Mixins, event buses, and writing resilient client code."
    }
  },
  {
    id: "piano-automation",
    title: "Piano Automation Prototype",
    category: "hardware",
    tagline: "8-key solenoid mechanical piano player controlled via Raspberry Pi",
    description:
      "An electromechanical system that physicalizes MIDI signals into acoustic piano key strikes using push-pull solenoids, MOSFET drivers, and Python.",
    techStack: ["Raspberry Pi", "Python", "Hardware", "MOSFETs", "Solenoids"],
    status: "Prototype",
    featured: false,
    caseStudy: {
      idea: "Combine my two passions—playing the piano and engineering physical hardware—into a robotic instrument.",
      why: "I wanted to understand how software can accurately control physical actuators in sub-millisecond musical time.",
      prototype: "3D-printed a mounting bracket for 8 linear push-pull solenoids aligned directly over one octave of acoustic piano keys.",
      challenge: "Managing inductive kickback voltage from solenoid coils that threatened to reset the Raspberry Pi GPIO controller.",
      iteration: "Designed a dedicated driver board with flyback diodes and external 12V power isolation, calibrated solenoid strike velocity in Python.",
      result: "Successfully played multi-note arpeggios and rhythmic patterns automatically at precise tempo.",
      whatLearned: "Electronics fundamentals (flyback diodes, transistor switching, duty cycles) and real-time hardware orchestration."
    }
  }
];

export const ROBOTICS_SEASONS: RoboticsSeason[] = [
  {
    year: "2025 – 2026",
    academicYear: "2025-2026",
    grade: "7th / 8th Grade",
    teamName: "SAESPride",
    teamNumber: "82894A",
    affiliation: "Saint Andrew’s Episcopal School",
    role: "Leadership & Mentorship",
    theme: "Mentoring the Next Generation of Builders",
    summary:
      "Introduced and mentored first-time robotics members into the VEX ecosystem. Focused on cultivating technical design fundamentals, engineering notebook rigor, and collaborative problem solving.",
    norCalResults: {
      teamwork: "13th Place Teamwork (NorCal Regional Championships)",
      skills: "40th Place Skills"
    },
    awards: ["Build Award (NorCal Regional Championships)"],
    robotHighlights: [
      "Mentored new team members in CAD modeling and gear-ratio tradeoffs",
      "Designed a robust high-efficiency intake and low-friction drivetrain",
      "Authored clean autonomous routines using sensory feedback loops"
    ],
    takeaway:
      "Robotics taught me that engineering isn't only about building the best machine. It's also about helping the people around you become better engineers."
  },
  {
    year: "2024 – 2025",
    academicYear: "2024-2025",
    grade: "6th Grade",
    teamName: "Cheese Sandwich",
    teamNumber: "52617X",
    affiliation: "Independent Team",
    role: "Main Driver, Builder & Secondary Programmer",
    theme: "Breakthrough Season: Precision & Execution",
    summary:
      "Engineered high-scoring competition robots from scratch. Prototyped multiple intake configurations, led match driving under intense tournament pressure, and optimized autonomous code.",
    norCalResults: {
      teamwork: "2nd Place Teamwork (NorCal Regional Championships)",
      skills: "4th Place Skills (NorCal Regional Championships)"
    },
    awards: [
      "Teamwork Champion Award × 2",
      "Teamwork 2nd Place Award × 2",
      "Robot Skills Champion",
      "Judges Award",
      "Amaze Award"
    ],
    robotHighlights: [
      "Engineered an omnidirectional high-torque chassis for rapid field maneuverability",
      "Prototyped and tested 4 different intake geometries before finalizing the winning build",
      "Programmed autonomous skills paths scoring consistently in top percentiles"
    ],
    takeaway:
      "Success came from testing small iterations every single weekend. When a mechanism jammed during testing, finding out *why* mattered more than rushing a quick patch."
  },
  {
    year: "2023 – 2024",
    academicYear: "2023-2024",
    grade: "5th Grade",
    teamName: "Eureka³",
    teamNumber: "686V",
    affiliation: "InoBotics",
    role: "Team Captain, Builder & Driver",
    theme: "Building Leadership & Strategy",
    summary:
      "Served as Team Captain leading mechanical design, alliance communications, and tournament strategy across regional competitions.",
    norCalResults: {
      teamwork: "15th Place Teamwork (NorCal Regional Championships)",
      skills: "8th Place Skills (NorCal Regional Championships)"
    },
    awards: ["Regional Finals Qualifier", "Skills Top 10 Finisher"],
    robotHighlights: [
      "Coordinated full team match strategy and scouting during qualifications",
      "Built motorized catapult and intake roller assembly",
      "Refined driver practice routines to optimize 60-second score output"
    ],
    takeaway:
      "Learned how to coordinate with unknown alliance partners under time constraints and adapt game plans on the fly."
  },
  {
    year: "2022 – 2023",
    academicYear: "2022-2023",
    grade: "4th Grade",
    teamName: "Indiana Jones",
    teamNumber: "94087A",
    affiliation: "Independent Team",
    role: "Programmer & Builder",
    theme: "World Championships Stage",
    summary:
      "Discovered deep passion for robotics and programming. Qualified for and competed at the prestigious VEX IQ World Championships in Dallas, Texas.",
    norCalResults: {
      teamwork: "3rd Place Teamwork (NorCal Regional Championships)"
    },
    worldsResults: {
      divisionTeamwork: "7th Place Division Finals Teamwork (VEX IQ World Championships)"
    },
    awards: [
      "Teamwork Championship Award",
      "Design Award",
      "Teamwork 3rd Place Award"
    ],
    robotHighlights: [
      "Coded autonomous sensor navigation and gyro stabilization",
      "Documented full engineering notebook recognized with Design Award",
      "Competed against top international teams at Worlds in Dallas"
    ],
    takeaway:
      "Seeing thousands of students from all over the world building completely different solutions to the same challenge inspired me to never stop learning."
  }
];

export const APPS_DATA: AppItem[] = [
  {
    id: "mix-and-match",
    name: "Mix and Match Calculator",
    tagline: "VEX IQ scoring & alliance planner for iOS & iPadOS",
    platform: "iOS · iPadOS",
    downloads: "3.75K+ Downloads",
    downloadsNum: 3750,
    status: "Published",
    releaseYear: "2025 – 2026",
    problemSolved:
      "Calculates complex VEX IQ match scores instantly, provides alliance partner synergy breakdowns, and gives teams an integrated Apple Pencil whiteboard for match planning.",
    howBuilt:
      "Written natively in Swift and SwiftUI. Implemented PencilKit canvas layers for real-time play-diagramming, CloudKit for cloud persistence, and strict layout optimization for split-view iPad multitasking.",
    techStack: ["Swift", "SwiftUI", "PencilKit", "CloudKit", "App Store Connect"],
    keyFeatures: [
      "Instant rule-accurate scoring engine",
      "PencilKit strategic drawing canvas",
      "iPad split-screen multitasking support",
      "Dark mode & responsive dynamic typography",
      "Full offline functionality for competition arenas"
    ],
    whatLearned:
      "Managing live production apps, responding to international user reviews, and prioritizing feature requests without bloating the core interface."
  },
  {
    id: "rapid-relay",
    name: "Rapid Relay Calculator",
    tagline: "Official rules scoring tool for VEX IQ Rapid Relay season",
    platform: "iOS",
    downloads: "659 Downloads",
    downloadsNum: 659,
    status: "Published",
    releaseYear: "2024 – 2025",
    problemSolved:
      "Eliminates scoring uncertainty in VEX IQ Rapid Relay tournaments by modeling passing sequences, switch bonus conditions, and match time countdowns.",
    howBuilt:
      "Developed in Swift with SwiftUI view hierarchies and UIKit haptic engine feedback. Engineered custom state machines for complex multi-zone scoring rules.",
    techStack: ["Swift", "SwiftUI", "UIKit Haptics", "App Store Connect"],
    keyFeatures: [
      "Touch-friendly scoring controls designed for sideline use",
      "Dynamic bonus point calculator with error checking",
      "Haptic confirmation on point increments",
      "Historical match log and summary stats"
    ],
    whatLearned:
      "Navigating Apple App Review, provisioning profiles, asset catalogs, and designing touch interfaces that can be operated quickly without looking down."
  },
  {
    id: "goodneighbor-app",
    name: "GoodNeighbor",
    tagline: "Connecting community members with local volunteers",
    platform: "iOS",
    status: "Prototype",
    releaseYear: "2025 – Present",
    problemSolved:
      "Removes barriers for elderly and homebound neighbors who need everyday assistance with groceries, light chores, or technology support by linking them directly to verified community volunteers.",
    howBuilt:
      "Built with SwiftUI and Firebase. Leverages Cloud Firestore real-time listeners for live updates, Firebase Auth for secure user roles, and cloud storage for request details.",
    techStack: ["SwiftUI", "Firebase", "Cloud Firestore", "Authentication"],
    keyFeatures: [
      "Two-sided view for requesters and volunteers",
      "Real-time task feed with location radius filtering",
      "Secure Firestore rules ensuring privacy",
      "Multi-language accessibility foundations"
    ],
    whatLearned:
      "Full-stack mobile development, structuring non-relational database schemas, and designing empathetic user experiences for non-technical users."
  }
];

export const MUSIC_DATA: MusicProfile = {
  clarinet: {
    instrument: "B Flat Clarinet",
    ensemble: "Saint Andrew’s Symphonic Band",
    school: "St. Andrew’s Episcopal School",
    gradeYears: "6th – 7th Grade (2025 – 2026)",
    teacher: "Mr. Schaben",
    achievement: "The SAES Symphonic Band earned its first-ever gold plaque",
    description:
      "Started playing clarinet in 6th grade and quickly fell in love with ensemble performance. Performing in the Saint Andrew's Symphonic Band under Mr. Schaben taught me how every voice in a section connects to create dynamic phrasing and tone.",
    repertoire: [
      "Symphonic band repertoire across classical & modern works",
      "School concerts, regional ensemble adjudications, and festival pieces",
      "Section leadership and collaborative rehearsals"
    ]
  },
  piano: {
    instrument: "Piano",
    abrsm: {
      grade6: {
        year: "2025 (6th Grade)",
        syllabus: "ABRSM Grade 6 (2023-2024 Syllabus)",
        result: "Scored Distinction"
      },
      grade7: {
        year: "2026 (7th Grade)",
        syllabus: "ABRSM Grade 7 (2025-2026 Syllabus)",
        result: "Scored Merit"
      },
      status: "ABRSM examinations completed with honors; continuing advanced studies"
    },
    description:
      "A dedicated craft and hobby pursued outside of school—mostly because I genuinely love sitting down at the keyboard to unravel complex musical structures and express emotion through sound.",
    favoritePieces: [
      "Fallout Main Theme (personal arrangement)",
      "Classical sonatas and romantic nocturnes",
      "Film and game orchestral arrangements"
    ]
  },
  quote:
    "Music gives me a different kind of focus — it's a technical challenge, but in a completely different way from programming or robotics."
};

export const SWIMMING_DATA: SwimStats = {
  club: "Santa Clara Swim Club",
  experience: "3rd to 8th Grade (2022 – present, 4+ years)",
  practiceHours: "~2 hours / day dedicated training",
  qualifyingTimes14yo: [
    { event: "100 Meter Butterfly", time: "1:06.22" },
    { event: "200 Meter Butterfly", time: "2:28.83" }
  ],
  farWesterns2025: {
    meet: "Summer Far Westerns Championships (50m) 2025 (Age: 12)",
    age: 12,
    achievements: [
      "Rose gold medalist in two individual events: 100m Butterfly and 200m Freestyle",
      "Silver medalist in 400m Medley Relay (swimming Butterfly leg)"
    ]
  },
  topEvents: [
    { event: "400 Free LCM", time: "4:45.68" },
    { event: "100 Free LCM", time: "1:00.59" },
    { event: "200 Free LCM", time: "2:14.45" }
  ],
  reflection:
    "Competitive swimming has taught me something that robotics doesn't: sometimes progress is measured in fractions of a second. Waking up early for grueling two-hour practices taught me that breakthroughs don't happen in single heroic moments—they come from showing up every day, refining your stroke millimeter by millimeter, and building quiet mental grit."
};

export const MATHEMATICS_DATA: MathItem[] = [
  {
    competition: "Berkeley Mini Math Tournament (BmMT)",
    gradeYear: "7th Grade 2026",
    honors: [
      "Overall – Distinguished Honorable Mention (Top 20%)",
      "Puzzle Round – Distinguished Honorable Mention (Top 20%)",
      "Relay Round – Distinguished Honorable Mention (Top 20%)",
      "Team Round – Honorable Mention (Top 50%)",
      "Individual Round – Honorable Mention (Top 50%)"
    ]
  },
  {
    competition: "AMC 8 (American Mathematics Competitions)",
    gradeYear: "4th, 6th & 7th Grade",
    honors: [
      "7th Grade (2026): 17 Points – Achievement Roll",
      "6th Grade (2025): 16 Points – Achievement Roll",
      "4th Grade (2023): 16 Points – Achievement Roll"
    ]
  },
  {
    competition: "Math Kangaroo Competition – Level 3",
    gradeYear: "3rd Grade 2022",
    honors: [
      "Full Score (96 points)",
      "National Rank: #1 in the United States",
      "State of California Rank: #1"
    ]
  },
  {
    competition: "MathCounts",
    gradeYear: "7th Grade 2026",
    honors: ["School & Regional Competitor"]
  },
  {
    competition: "Noetic Learning Math Contest",
    gradeYear: "4th Grade 2023",
    honors: ["National Honor Roll"]
  }
];

export const SERVICE_EXPERIENCE_DATA: ServiceItem[] = [
  {
    organization: "SAES Student Panel",
    timeframe: "7th Grade – present (2025 – present)",
    bullets: [
      "Represented Saint Andrew's student body at school admission panels",
      "Answered questions from prospective parents regarding academics, culture, STEM opportunities, and student life"
    ]
  },
  {
    organization: "Second Harvest of Silicon Valley",
    timeframe: "7th Grade 2026",
    bullets: [
      "Assisted with food sorting, packaging, and distribution to local families experiencing food insecurity across Silicon Valley"
    ]
  },
  {
    organization: "St. Jude’s Episcopal Church – Rotating Safe Car Park Program",
    timeframe: "6th Grade 2024",
    bullets: [
      "Assisted with meal preparation, table setup, serving, and kitchen cleanup",
      "Welcomed and provided warm hospitality to unhoused guests in the emergency shelter parking program"
    ]
  }
];

export const HOW_I_BUILD_STEPS: HowIBuildStep[] = [
  {
    stepNumber: 1,
    title: "Idea",
    prompt: "What problem can I solve? What excites me?",
    description:
      "I notice inefficiencies or hurdles in my everyday activities—like calculating tricky alliance scores in VEX IQ or helping community members get groceries.",
    exampleFromWork:
      "Noticing team members struggling with manual scoring calculations during 2024 VEX IQ Rapid Relay tournaments."
  },
  {
    stepNumber: 2,
    title: "Why?",
    prompt: "Why does it matter? Who will it help?",
    description:
      "Before writing any code or cutting metal, I define the purpose. If it saves people time, prevents confusion, or teaches me a hard concept, it's worth pursuing.",
    exampleFromWork:
      "Realizing that high-school and middle-school robotics alliances need quick, zero-confusion strategy math in under 30 seconds."
  },
  {
    stepNumber: 3,
    title: "Prototype",
    prompt: "Build a simple version. Test it.",
    description:
      "Get a rudimentary version working as quickly as possible. A rough iOS view or a basic C-channel robot chassis is enough to test assumptions.",
    exampleFromWork:
      "Building a single-view SwiftUI calculator prototype in Xcode in one afternoon to test scoring button layouts."
  },
  {
    stepNumber: 4,
    title: "Break It",
    prompt: "Find the bugs. See what doesn't work.",
    description:
      "Put the prototype into real stressful conditions. Let friends try it, enter negative numbers, or drive the robot into game elements.",
    exampleFromWork:
      "Discovering that ball intakes jammed when picking up two game elements simultaneously at certain conveyor angles."
  },
  {
    stepNumber: 5,
    title: "Fix It",
    prompt: "Iterate. Improve. Try again.",
    description:
      "Analyze the root cause. Redesign the intake geometry, rewrite the async database query, or polish the interaction physics.",
    exampleFromWork:
      "Iterating through 4 different intake roller materials on team 52617X until finding the optimal high-traction rubber composition."
  },
  {
    stepNumber: 6,
    title: "Ship",
    prompt: "Make it real. Get it into the hands of others.",
    description:
      "Nothing counts until it's delivered. Upload to App Store Connect, run the match on the tournament field, or deploy the service.",
    exampleFromWork:
      "Successfully passing Apple App Review and distributing Mix and Match Calculator to 3,750+ robotics students globally."
  },
  {
    stepNumber: 7,
    title: "What Did I Learn?",
    prompt: "Take what I learned and apply it to the next project.",
    description:
      "Every project reveals lessons about code architecture, physics, or teamwork that make the next project faster and better.",
    exampleFromWork:
      "Realizing that great engineering is about making the people around you better, which shaped my leadership season on SAESPride."
  }
];
