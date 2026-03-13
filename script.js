//Event Speaker Web Page
const eventSpeakers = [
    {
        id: 1,
        speakerName: "Dr. Sarah Chen",
        titleCompany: "Cheif AI Researcher - TechVision Labs",
        bioGraphy:"Dr. Chen is a leading expert in machine learning with  over 15 years of experience. She has published more than 50 papers on neural networks and AI ethics.",
        eventTopic: "Topic: The Future of Ethical AI Development",
        speakerExpertise: "Expertise: Machine Learning and AI Ethnics",
        speakerWebsite: "sarahchentech",
        speakerTwitter: "@sarahchen_ai",
        speakerLinkedIn: "linkedin.com/in/Sarahchen",
    },
    {
        id: 2,
        speakerName: "Marcus Rodriquez",
        titleCompany: "Founder and CEO - GreenTech Innovations",
        bioGraphy:"Marcus is a serial entrepreneur passionate about sustainable technology. He has founded three successful startups focused on clean energy solutions.",
        eventTopic: "Topic: Building Sustainable Startups in a Digital Age",
        speakerExpertise: "Expertise: Entrepreneur and Sustainability",
        speakerWebsite: "greentechinnovations.com",
        speakerTwitter: "@marcusrod",
        speakerLinkedIn: "linkedin.com/in/marcusrodriguez",
    },
    {
        id: 3,
        speakerName: "Dr. Amara Okafor",
        titleCompany: "Director of Cybersecurity - SecureNet solutions",
        bioGraphy:"Dr. Okufor specializes in cybersecurity and threat intelligence. She advises governments and Fortune 500 companies on digital security strategies.",
        eventTopic: "Topic: Protecting Your Digital Assests: Modern Cybersecurity Strategies.",
        speakerExpertise: "Expertise: Cyberseurity and Threat Intelligence",
        speakerWebsite: "amaraokafor.com",
        speakerTwitter: "@amara_security",
        speakerLinkedIn: "linkedin.com/in/amaraokafor",
    },
    {
        id: 4,
        speakerName: "James Patterson",
        titleCompany: "Head Product Design - DesignFirst Studio",
        bioGraphy:"James has led design teams at major tech companies for over a decade. His work has won multiple awards and shaped user experiences for millions.",
        eventTopic: "Topic: Human Centered Design in the Age of AI",
        speakerExpertise: "Expertise: UX Design and Product Strategy",
        speakerWebsite: "jpattersondesign.com",
        speakerTwitter: "@jpatterson_ux",
        speakerLinkedIn: "linkedin.com/in/jamespatterson",
    },
    {
        id: 5,
        speakerName: "Dr. Priya Sharma",
        titleCompany: "VP of Data Science - Analytics Corp",
        bioGraphy:"Dr. Sharma leads data science initiatives that drive business transformations. She's known for her making complex data accessible and actionable.",
        eventTopic: "Topic: Data-Driven Decision Making: From Insights to Impact",
        speakerExpertise: "Expertise: Data Science and Business Analytics",
        speakerWebsite: "priyasharmaanalytics.com",
        speakerTwitter: "@priya_data",
        speakerLinkedIn: "linkedin.com/in/priyasharma",
    },
    {
        id: 7,
        speakerName: "Alex Thompson",
        titleCompany: "Bllockchain Architect - CryptoChain Technologies",
        bioGraphy:"Alex is a pioneer in blockchain technology and decentralized systwms. He's contributed to several major blockchain protocols and advises on Web3 strategies.",
        eventTopic: "Topic: Blockchain Beyond Cryptocurrency: Real World Applications",
        speakerExpertise: "Expertise: Blockchain and Web3",
        speakerWebsite: "alexthompson.io",
        speakerTwitter: "@alexthompson_bc",
        speakerLinkedIn: "linkedin.com/in/alexthompson",
    },
    {
        id: 8,
        speakerName: "Lisa Wang",
        titleCompany: "Chief Marketing officer - BrandSpark Agency",
        bioGraphy:"Lisa has revolutionized digital marketing strategies for global brands. Her campaigns have generated billions in renevue and won numerous industry awards.",
        eventTopic: "Topic: Marketing in 2026: Authenticity Meets Automation",
        speakerExpertise: "Expertise: Digital Marketing and Brand Strategy",
        speakerWebsite: "lisawang.co",
        speakerTwitter: "@lisawang_mktg",
        speakerLinkedIn: "linkedin.com/in/lisawang",
    },
    {
        id: 9,
        speakerName: "Dr. Michael Foster",
        titleCompany: "Quauntum Computing Researcher- Quantum Dynamics Institute",
        bioGraphy:"Dr. Foster is at the forefront of quantum computing search. His work on quantum algorithms has potential applications in cryptography and optimization.",
        eventTopic: "Topic: Quantum Computing: The Next Computing Revolution",
        speakerExpertise: "Expertise: Quantum Computing and Physics",
        speakerWebsite: "michaelfosterquantum.edu",
        speakerTwitter: "@mfoster_quantum",
        speakerLinkedIn: "linkedin.com/in/michaelfoster",
    },
];

function displayGrid(){
    console.log(eventSpeakers);
    let html = '';
    const grid = document.getElementById('speakersGrid');
    for(let i=0; i<eventSpeakers.length; i++){
        const speaker = eventSpeakers[i];
        html+=`
        <div class= "speaker-card">
        <div> <img src="images/speaker-icon.png" class="icon"></div>
            <div class="speaker-name">${speaker.speakerName}</div>
            <div class="speaker-title">${speaker.titleCompany}</div>
            <div class="speaker-bio">${speaker.bioGraphy} </div>
            <div class="speaker-topic">${speaker.eventTopic} </div>
            <div class="speaker-expertise">${speaker.speakerExpertise}</div>
            <div class="speaker-website">${speaker.speakerWebsite} </div>
            <div class="speaker-twitter">${speaker.speakerTwitter} </div>
            <div class="speaker-linked">${speaker.speakerLinkedIn} </div>
        </div>`;
    }
    grid.innerHTML = html;
}displayGrid();