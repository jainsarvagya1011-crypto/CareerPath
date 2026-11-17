
const careers = {
  "Software Developer": {
    icon: "💻",
    category: "Technology",
    intro: "Software developers design, build, test and maintain applications and software systems used by people and businesses.",
    work: ["Develop websites, mobile applications and software.", "Write clean and efficient code.", "Find and fix software bugs.", "Work with designers and other developers.", "Test and improve application performance."],
    skills: ["C", "C++", "Java", "Python", "JavaScript", "Problem Solving", "Data Structures"],
    tools: ["VS Code", "Git & GitHub", "React", "Node.js", "Databases"],
    education: "A B.Tech in Computer Science, BCA, MCA or a related qualification can help. Strong programming knowledge and practical projects are important.",
    roadmap: ["Learn programming fundamentals and logic building.", "Understand Data Structures and Algorithms.", "Learn web or application development.", "Build real-world projects and upload them to GitHub.", "Apply for internships and entry-level developer roles."],
    roles: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Application Developer", "Software Engineer"],
    future: "Software development is used across education, healthcare, finance, entertainment and technology. Cloud computing, AI and cybersecurity are creating new areas of work."
  },

  "UI/UX Designer": {
    icon: "🎨",
    category: "Design",
    intro: "UI/UX designers create digital experiences that are visually attractive, easy to understand and simple to use.",
    work: ["Design layouts for websites and mobile apps.", "Understand user needs and behaviour.", "Create wireframes and interactive prototypes.", "Improve navigation and user experience.", "Collaborate with developers and product teams."],
    skills: ["Creativity", "Visual Design", "User Research", "Wireframing", "Prototyping", "Communication"],
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "FigJam", "Canva"],
    education: "A degree in design, computer science or a related field can be useful. A strong design portfolio and practical experience are especially valuable.",
    roadmap: ["Learn basic design principles, colours and typography.", "Understand UI and UX fundamentals.", "Practise wireframing and prototyping in Figma.", "Create website and mobile app design projects.", "Build a portfolio and apply for internships."],
    roles: ["UI Designer", "UX Designer", "Product Designer", "Interaction Designer", "Visual Designer"],
    future: "As businesses continue to develop digital products, user experience remains important. Opportunities exist in startups, IT companies, agencies and product-based organisations."
  },

  "Business Analyst": {
    icon: "📊",
    category: "Business",
    intro: "Business analysts study business problems, understand requirements and help organisations make better decisions using information and data.",
    work: ["Understand business requirements.", "Analyse business processes and performance.", "Prepare reports and presentations.", "Communicate with clients and technical teams.", "Suggest improvements to business operations."],
    skills: ["Analytical Thinking", "Communication", "Excel", "Problem Solving", "Data Interpretation", "Documentation"],
    tools: ["Microsoft Excel", "Power BI", "Tableau", "SQL", "Jira"],
    education: "Business, management, economics, engineering or computer science backgrounds can be useful. Data analysis and communication skills are important.",
    roadmap: ["Learn business fundamentals and analytical thinking.", "Develop advanced Excel skills.", "Learn SQL and basic statistics.", "Practise Power BI or Tableau.", "Create business case studies and apply for internships."],
    roles: ["Business Analyst", "Data Analyst", "Product Analyst", "Operations Analyst", "Business Consultant"],
    future: "Organisations increasingly rely on data and process improvement. Business analysts can work in technology, banking, consulting, retail and many other industries."
  },

  "Data Scientist": {
    icon: "📈",
    category: "Data & AI",
    intro: "Data scientists use statistics, programming and machine learning to analyse large datasets and discover useful patterns.",
    work: ["Collect and organise datasets.", "Clean and analyse data.", "Build statistical and machine learning models.", "Create visualisations and reports.", "Explain findings to help organisations make decisions."],
    skills: ["Python", "Statistics", "Mathematics", "SQL", "Machine Learning", "Data Visualisation"],
    tools: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Scikit-learn", "Power BI"],
    education: "A degree in computer science, mathematics, statistics, data science or a related field is useful. Strong mathematical and programming foundations are important.",
    roadmap: ["Build a foundation in mathematics and statistics.", "Learn Python programming.", "Practise data analysis using Pandas and NumPy.", "Understand machine learning fundamentals.", "Build data projects and create a portfolio."],
    roles: ["Data Scientist", "Data Analyst", "Machine Learning Engineer", "AI Analyst", "Data Engineer"],
    future: "Data science is relevant to healthcare, finance, e-commerce, research and technology. AI adoption is increasing the need for people who can work with data responsibly."
  },

  "Financial Analyst": {
    icon: "💰",
    category: "Finance",
    intro: "Financial analysts examine financial information, study business performance and help organisations understand financial decisions.",
    work: ["Analyse financial statements and reports.", "Prepare budgets and financial forecasts.", "Compare business costs and performance.", "Create financial models and presentations.", "Research market and industry trends."],
    skills: ["Financial Analysis", "Mathematics", "Excel", "Accounting Basics", "Critical Thinking", "Communication"],
    tools: ["Microsoft Excel", "Power BI", "Financial Modelling Tools", "Tableau"],
    education: "Finance, commerce, economics, accounting or business qualifications are useful. Knowledge of accounting and spreadsheet analysis is important.",
    roadmap: ["Learn accounting and financial fundamentals.", "Develop advanced Excel skills.", "Understand financial statements.", "Practise financial modelling and data analysis.", "Build sample financial reports and seek internships."],
    roles: ["Financial Analyst", "Investment Analyst", "Budget Analyst", "Credit Analyst", "Corporate Finance Analyst"],
    future: "Financial analysis is required in banks, investment firms, consulting companies and corporate organisations. Data analytics skills can also create additional opportunities."
  },

  "Content Strategist": {
    icon: "✍️",
    category: "Communication",
    intro: "Content strategists plan and manage content that helps brands communicate with their audiences through digital platforms.",
    work: ["Plan content for websites and social media.", "Research audiences and content trends.", "Create content calendars and campaigns.", "Coordinate with writers and designers.", "Review content performance and engagement."],
    skills: ["Writing", "Creativity", "Communication", "Research", "SEO", "Content Planning"],
    tools: ["Canva", "Google Analytics", "WordPress", "Notion", "Google Trends"],
    education: "Communication, journalism, marketing, English or related backgrounds can be useful. A portfolio of writing and content projects is valuable.",
    roadmap: ["Develop writing and communication skills.", "Learn digital marketing and SEO basics.", "Practise creating different types of content.", "Understand content analytics and audience research.", "Build a portfolio and apply for internships."],
    roles: ["Content Strategist", "Content Writer", "SEO Specialist", "Social Media Manager", "Digital Marketing Executive"],
    future: "Digital marketing, online businesses and brand communication continue to create opportunities for content professionals across industries."
  }
};

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(pageId);
  if (page) page.classList.add("active");

  const detail = document.getElementById("careerDetailPage");
  if (detail) detail.style.display = "none";

  document.body.style.overflow = "";
  window.scrollTo(0, 0);
}

function filterCareers() {
  const search = document.getElementById("careerSearch").value.toLowerCase();
  const cards = document.querySelectorAll(".career-card");
  let visible = 0;

  cards.forEach(card => {
    const matches = card.innerText.toLowerCase().includes(search);
    card.style.display = matches ? "block" : "none";
    if (matches) visible++;
  });

  document.getElementById("noCareers").style.display =
    visible === 0 ? "block" : "none";
}

function showCareerDetails(name) {
  const career = careers[name];
  if (!career) return;

  let page = document.getElementById("careerDetailPage");

  if (!page) {
    page = document.createElement("div");
    page.id = "careerDetailPage";
    document.body.appendChild(page);
  }

  const makeTags = items =>
    items.map(item => `<span>${item}</span>`).join("");

  const makeList = items =>
    items.map(item => `<li>${item}</li>`).join("");

  page.innerHTML = `
    <div class="detail-container">

      <button class="detail-back" onclick="closeCareerDetails()">
        ← Back to Explore Careers
      </button>

      <div class="detail-hero">
        <div class="detail-icon">${career.icon}</div>
        <span class="detail-category">${career.category}</span>
        <h1>${name}</h1>
        <p>${career.intro}</p>
      </div>

      <div class="detail-grid">

        <div class="detail-card">
          <h2>💼 What You'll Do</h2>
          <ul>${makeList(career.work)}</ul>
        </div>

        <div class="detail-card detail-skills">
          <h2>🧠 Required Skills</h2>
          <div class="detail-tags">${makeTags(career.skills)}</div>
        </div>

        <div class="detail-card detail-tools">
          <h2>🛠 Tools & Technologies</h2>
          <div class="detail-tags">${makeTags(career.tools)}</div>
        </div>

        <div class="detail-card detail-education">
          <h2>🎓 Education & Qualifications</h2>
          <p>${career.education}</p>
        </div>

      </div>

      <div class="detail-card">
        <h2>🚀 Your Career Roadmap</h2>
        <p style="margin-bottom:20px;">Follow these steps to begin your journey.</p>

        <div class="roadmap-list">
          ${career.roadmap.map((step, index) => `
            <div class="roadmap-step">
              <div class="roadmap-number">${index + 1}</div>
              <p>${step}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="detail-card detail-skills">
        <h2>🌟 Career Opportunities</h2>
        <div class="detail-tags">${makeTags(career.roles)}</div>
      </div>

      <div class="detail-future">
        <h2>🔮 Future Scope</h2>
        <p>${career.future}</p>
      </div>

      <button class="primary-btn" onclick="closeCareerDetails()">
        ← Explore More Careers
      </button>

    </div>
  `;

  page.style.display = "block";
  document.body.style.overflow = "hidden";
  page.scrollTop = 0;
}

function closeCareerDetails() {
  const page = document.getElementById("careerDetailPage");
  if (page) page.style.display = "none";

  document.body.style.overflow = "";
  window.scrollTo(0, document.getElementById("explore").offsetTop);
}

// CAREER ASSESSMENT

document.getElementById("careerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const interest = document.getElementById("interest").value;
  const skill = document.getElementById("skill").value;
  const work = document.getElementById("work").value;
  const goal = document.getElementById("goal").value;

  const scores = {
    "Software Developer": 0,
    "UI/UX Designer": 0,
    "Business Analyst": 0,
    "Data Scientist": 0,
    "Financial Analyst": 0,
    "Content Strategist": 0
  };

  const mapping = {
    technology: ["Software Developer", "Data Scientist"],
    design: ["UI/UX Designer"],
    business: ["Business Analyst"],
    data: ["Data Scientist", "Business Analyst"],
    finance: ["Financial Analyst"],
    communication: ["Content Strategist", "Business Analyst"]
  };

  if (mapping[interest]) {
    mapping[interest].forEach(name => scores[name] += 3);
  }

  const skillMapping = {
    logic: ["Software Developer"],
    creative: ["UI/UX Designer", "Content Strategist"],
    analytical: ["Data Scientist", "Business Analyst"],
    communication: ["Content Strategist", "Business Analyst"],
    numbers: ["Financial Analyst", "Data Scientist"]
  };

  if (skillMapping[skill]) {
    skillMapping[skill].forEach(name => scores[name] += 2);
  }

  const workMapping = {
    independent: ["Software Developer", "Data Scientist"],
    team: ["Business Analyst", "Content Strategist"],
    creative: ["UI/UX Designer", "Content Strategist"],
    analytical: ["Financial Analyst", "Data Scientist"]
  };

  if (workMapping[work]) {
    workMapping[work].forEach(name => scores[name] += 1);
  }

  const goalMapping = {
    technology: ["Software Developer", "Data Scientist"],
    creative: ["UI/UX Designer", "Content Strategist"],
    business: ["Business Analyst"],
    research: ["Data Scientist"],
    finance: ["Financial Analyst"]
  };

  if (goalMapping[goal]) {
    goalMapping[goal].forEach(name => scores[name] += 2);
  }

  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  document.getElementById("resultsContent").innerHTML = `
    <div class="results-grid">
      ${sorted.map(([name, score], index) => `
        <div class="result-card">
          <div style="font-size:32px;">${careers[name].icon}</div>
          <small>RECOMMENDATION ${index + 1}</small>
          <h3>${name}</h3>
          <p>${careers[name].intro}</p>
          <button class="secondary-btn" style="margin-top:15px;"
            onclick="showCareerDetails('${name}')">
            View Career Details →
          </button>
        </div>
      `).join("")}
    </div>

    <div class="results-extra">
      <h2>📚 Suggested Learning Roadmap</h2>
      <ul>
        ${careers[sorted[0][0]].roadmap.map(step => `<li>${step}</li>`).join("")}
      </ul>
      <p><strong>Remember:</strong> These are exploratory suggestions based on your answers, not a professional aptitude assessment.</p>
    </div>
  `;

  showPage("results");
});

showPage("home");
