// Simple SPA router and page rendering
const pages = {
  home: () => `
    <section>
      <h1>Hi, I'm Zachariah Wiebesiek</h1>
      <p>I'm a passionate software developer focused on building impactful, modern web applications. Welcome to my profile!</p>
      <div style="margin-top:2rem;">
        <img src="https://avatars.githubusercontent.com/u/9919?v=4" alt="Profile" style="width:120px;border-radius:50%;box-shadow:0 2px 12px #0003;">
      </div>
    </section>
    <section>
      <h2>About Me</h2>
      <p>Driven by curiosity and a love for elegant code, I specialize in full-stack JavaScript, cloud-native solutions, and developer experience. I thrive in collaborative, fast-paced teams and enjoy mentoring others.</p>
    </section>
  `,
  highlights: () => `
    <section>
      <h1>Engineering Highlights</h1>
      <div class="card">
        <h3>🚀 Lead Developer, Project X</h3>
        <p>Architected and shipped a scalable SaaS platform serving 100k+ users, leveraging React, Node.js, and Kubernetes.</p>
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
      <form id="contactForm" autocomplete="off" style="max-width:400px;">
        <label>Name<br><input name="name" required style="width:100%;padding:0.5rem;margin-bottom:1rem;"></label>
        <label>Email<br><input name="email" type="email" required style="width:100%;padding:0.5rem;margin-bottom:1rem;"></label>
        <label>Message<br><textarea name="message" required rows="4" style="width:100%;padding:0.5rem;margin-bottom:1rem;"></textarea></label>
        <button class="button" type="submit">Send</button>
      </form>
      <div id="contactResult" style="margin-top:1rem;"></div>
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
  if (page === 'contact') {
    const form = document.getElementById('contactForm');
    form.onsubmit = e => {
      e.preventDefault();
      document.getElementById('contactResult').textContent = 'Thank you! I will get back to you soon.';
      form.reset();
    };
  }
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
