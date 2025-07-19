const pages = {
  home: () => `
    <section style="text-align:center;padding:3rem 0;">
      <div style="display:flex;align-items:center;justify-content:center;gap:2rem;margin-bottom:2rem;flex-wrap:wrap;">
        <img src="https://github.com/wiebesiek.png" alt="Profile" style="width:140px;height:140px;border-radius:50%;box-shadow:0 8px 32px rgba(233,69,96,0.3);border:3px solid var(--highlight);">
        <div style="text-align:left;max-width:400px;">
          <h1 style="margin:0 0 0.5rem 0;font-size:2.5rem;background:linear-gradient(135deg,var(--highlight),var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Zachariah Wiebesiek</h1>
          <p style="font-size:1.3rem;color:var(--muted);margin:0;">Software Engineer</p>
        </div>
      </div>
      <p style="font-size:1.1rem;line-height:1.8;max-width:600px;margin:0 auto 2rem auto;">I'm a passionate software engineer focused on building impactful, modern web applications. I specialize in creating elegant solutions that make a difference.</p>
    </section>
    <section>
      <h2 style="text-align:center;margin-bottom:1.5rem;">About Me</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;">
        <div class="card" style="text-align:center;">
          <h3 style="color:var(--highlight);margin-bottom:1rem;">🚀 Innovation</h3>
          <p>I love creating high-impact solutions that push boundaries and solve real-world problems.</p>
        </div>
        <div class="card" style="text-align:center;">
          <h3 style="color:var(--highlight);margin-bottom:1rem;">🤝 Collaboration</h3>
          <p>I thrive in fast-paced teams and enjoy mentoring others to reach their full potential.</p>
        </div>
        <div class="card" style="text-align:center;">
          <h3 style="color:var(--highlight);margin-bottom:1rem;">💡 Technology</h3>
          <p>Focused on modern web technologies, cloud-native solutions, and  experience.</p>
        </div>
      </div>
    </section>
  `,
  highlights: () => `
    <section>
      <h1>Engineering Highlights</h1>
      <div class="card">
        <h3>🚀 AI Infrastructure Engineer, Project X</h3>
        <p></p>
      </div>
      <div class="card">
        <h3>🛠️ OSS Contributor</h3>
        <p>Active contributor to open-source projects, including [ProjectName] and [AnotherProject].</p>
      </div>
      <div class="card">
        <h3>💡 Innovation Award</h3>
        <p>Recipient of the 2024 Innovation Award for automating CI/CD pipelines and reducing deployment times by 80%.</p>
      </div>
    </section>
  `,
  contact: () => `
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
  resume: () => `
    <section>
      <h1>Resume</h1>
      <div class="card">
        <h3>Senior Software Engineer</h3>
        <p>Company ABC, 2022–Present</p>
        <ul>
          <li>Lead development of cloud-native web apps</li>
          <li>Mentored junior engineers</li>
          <li>Improved system reliability and scalability</li>
        </ul>
      </div>
      <div class="card">
        <h3>Software Engineer</h3>
        <p>Company XYZ, 2019–2022</p>
        <ul>
          <li>Built RESTful APIs and modern UIs</li>
          <li>Automated testing and CI/CD</li>
        </ul>
      </div>
      <a class="button" href="#" onclick="alert('Download coming soon!')">Download PDF</a>
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
  render(initial);
});
window.addEventListener('popstate', e => {
  const page = (e.state && e.state.page) || location.hash.replace('#','') || 'home';
  render(page);
});
