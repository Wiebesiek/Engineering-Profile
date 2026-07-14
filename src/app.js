const pages = {
  home: () => /* html */ `
    <section style="text-align:center;padding:3rem 0;">
      <div style="display:flex;align-items:center;justify-content:center;gap:2rem;margin-bottom:2rem;flex-wrap:wrap;">
        <picture>
          <source type="image/avif" srcset="/assets/images/profile-140.avif 1x, /assets/images/profile-280.avif 2x">
          <source type="image/webp" srcset="/assets/images/profile-140.webp 1x, /assets/images/profile-280.webp 2x">
          <img src="/assets/images/profile-140.png" srcset="/assets/images/profile-280.png 2x" width="140" height="140" alt="Profile" decoding="async" style="width:140px;height:140px;border-radius:50%;box-shadow:0 8px 32px rgba(233,69,96,0.3);border:3px solid var(--highlight);">
        </picture>
        <div style="text-align:left;max-width:400px;">
          <h1 style="margin:0 0 0.5rem 0;font-size:2.5rem;background:linear-gradient(135deg,var(--highlight),var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Zachariah Wiebesiek</h1>
          <p style="font-size:1.3rem;color:var(--muted);margin:0;">Software Engineer</p>
        </div>
      </div>
      <p style="font-size:1.1rem;line-height:1.8;max-width:600px;margin:0 auto 2rem auto;">I'm a passionate software engineer focused on bringing performant web applications to life.</p>
    </section>
    <section>
      <h2 style="text-align:center;margin-bottom:1.5rem;">About Me</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;">
        <div class="card" style="text-align:center;">
          <h3 style="color:var(--highlight);margin-bottom:1rem;">🚀 Innovation</h3>
          <p>I'm passionate about exploring new technologies and refining current solutions to create impactful user experiences. I enjoy refactoring current solutions for performance and maintainability as well as greenfielding AI driven products.</p>
        </div>
        <div class="card" style="text-align:center;">
          <h3 style="color:var(--highlight);margin-bottom:1rem;">🤝 Collaboration</h3>
          <p>I excel in cross-functional teams, mentoring developers, and fostering environments where great ideas flourish through shared expertise.</p>
        </div>
        <div class="card" style="text-align:center;">
          <h3 style="color:var(--highlight);margin-bottom:1rem;">💡 Technology</h3>
          <p>Specialized in modern backend technologies, cloud infrastructure, and building innovative AI solutions.</p>
        </div>
      </div>
    </section>
  `,
  highlights: () => /* html */`
    <section>
      <h1>Engineering Highlights</h1>
      <div class="card">
        <h3>🚀 AI Software Engineer, Project X</h3>
        <p>Developed and deployed AI pipelines for image processing and analysis at scale.</p>
      </div>
      <div class="card">
        <h3>🛠️ Full Stack Engineer, Vehicle Loan Offers</h3>
        <p>Maintained and optimized vehicle offer processing system. Efficiently integrated product requests and made many performance improvements on a system that handles over 100,000 vehicles per day.</p>
      </div>
      <div class="card">
        <h3>💡 Spearheaded Testing Efforts</h3>
        <p>Implemented new standards for automated endpoint testing. Helped define and lead performance testing initiatives that took our endpoint coverage from zero to 80%.</p>
      </div>
    </section>
  `,
  contact: () => /* html */`
    <section>
      <h1>Contact</h1>
      <div class="card">
        <h3>📧 Email</h3>
        <p style="font-size:1.2rem;color:var(--highlight);">
          <a href="mailto:zach@wiebesiek.com" style="color:var(--highlight);text-decoration:none;">
            zach@wiebesiek.com
          </a>
        </p>
      </div>
      <div class="card">
        <h3>💼 LinkedIn</h3>
        <p style="font-size:1.2rem;color:var(--highlight);">
          <a href="https://www.linkedin.com/in/zach-wiebesiek/" target="_blank" style="color:var(--highlight);text-decoration:none;">
            https://www.linkedin.com/in/zach-wiebesiek/
          </a>
        </p>
      </div>
    </section>
  `,
  resume: () => /* html */`
    <section>
      <h1>Resume</h1>
      <div class="card">
        <h3>Senior Software Consultant</h3>
        <p style="color: var(--muted); font-weight: 500; margin-bottom: 1rem;"><span style="color: var(--highlight);">Sogeti</span> • September 2025 - Present, Remote</p>
        <ul>
          <li>Maintained large master database management systems for our banking client utilizing event-driven microservices to process the records of almost 40 million customers.</li>
          <li>Provided critical support and updates to a legacy Java master database management system.</li>
          <li>Led third party integration and improved throughput on their vehicle financial information systems.</li>
        </ul>
      </div>
      <div class="card">
        <h3>Software Engineer - AI and Machine Learning</h3>
        <p style="color: var(--muted); font-weight: 500; margin-bottom: 1rem;"><span style="color: var(--highlight);">DealerOn</span> • May 2025 - September 2025</p>
        <ul>
          <li>Developed first AI at scale solutions on Azure with Python and .NET</li>
          <li>Engineered performant localized AI deployments for image analysis, improvement and extrapolation</li>
          <li>Utilized cutting-edge, fine-tuned models and modern deployment and management via Azure Machine Learning Workspaces</li>
        </ul>
      </div>
      <div class="card">
        <h3>Software Engineer - Retailing, Payments and Personalization</h3>
        <p style="color: var(--muted); font-weight: 500; margin-bottom: 1rem;"><span style="color: var(--highlight);">DealerOn</span> • March 2024 - May 2025</p>
        <ul>
          <li>Developed and maintained critical micro-services using .NET, RabbitMQ, Elasticsearch and Entity Framework</li>
          <li>Led integration and debugging of third-party client-side JavaScript platform add-ons</li>
          <li>Oversaw control flow improvements and built Grafana dashboards for enhanced system monitoring</li>
          <li>Used ASP.NET and C# to generate HTTP, CSS and JavaScript site code for over a million cars daily</li>
          <li>Led performance improvements that saved millions of dependency calls daily and increased throughput by 30% through concurrency</li>
          <li>Coached new developers in .NET, teaching object-oriented design principles, dependency injection and NUnit testing</li>
        </ul>
      </div>
      <div class="card">
        <h3>Junior Software Engineer</h3>
        <p style="color: var(--muted); font-weight: 500; margin-bottom: 1rem;"><span style="color: var(--highlight);">DealerOn</span> • May 2022 - May 2024</p>
        <ul>
          <li>Created and maintained RESTful APIs for client configuration using Azure blob storage, SQL and NoSQL via Cosmos DB</li>
          <li>Built business-facing UIs with Node.js, Vue.js, Vuetify and Tailwind for platform configuration</li>
          <li>Spearheaded company adoption of API testing via Postman and created hundreds of tests for initial rollout</li>
        </ul>
      </div>
      <div class="card">
        <h3>Back-End Developer</h3>
        <p style="color: var(--muted); font-weight: 500; margin-bottom: 1rem;"><span style="color: var(--highlight);">EmpRes Healthcare</span> • May 2021 - May 2022</p>
        <ul>
          <li>Developed SMS, Slack and ticketing system integrations using RESTful APIs via Python and C#</li>
          <li>Rebuilt company portal using React and MongoDB</li>
          <li>Created .NET LDAP tools for service desk department using PowerShell and C#</li>
        </ul>
      </div>
      <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
        <a class="button" href="./Zach Wiebesiek - Resume.pdf" target="_blank">View Resume</a>
        <a class="button" href="./Zach Wiebesiek - Resume.pdf" download="Zach Wiebesiek - Resume.pdf">Download PDF</a>
      </div>
    </section>
  `
};

function setActiveNav(page) {
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
}

function render(page) {
  const main = document.getElementById('main');
  main.innerHTML = pages[page] ? pages[page]() : pages.home();
  setActiveNav(page);
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const page = a.dataset.page;
      history.pushState({page}, '', `#${page}`);
      render(page);
    });
  });
  const initial = location.hash.replace('#','') || 'home';
  if (initial !== 'home') {
    render(initial);
  } else {
    setActiveNav('home');
  }
});
window.addEventListener('popstate', e => {
  const page = (e.state && e.state.page) || location.hash.replace('#','') || 'home';
  render(page);
});
