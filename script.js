/**********************
     Theme toggle (default: light; clicking sets dark)
     **********************/
     /**********************
 Hamburger toggle
 **********************/
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  mobileMenu.style.display = expanded ? 'none' : 'flex';
});

// Auto-close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

    const themeBtn = document.getElementById('theme-toggle');
    // Start with light (body has class 'light' in HTML)
    // When clicked toggle dark class and update button label and aria state.
    function updateThemeLabel(){
      const isDark = document.body.classList.contains('dark');
      themeBtn.textContent = isDark ? 'Light' : 'Dark';
      themeBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    }
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      // keep the 'light' class in HTML initial markup, but using .dark overrides vars
      updateThemeLabel();
    });
    updateThemeLabel();

    /**********************
     Skill list & animated progress bars
     **********************/
    const skills = [
      {name:'HTML', level:92},
      {name:'CSS', level:88},
      {name:'JavaScript', level:82},
      {name:'React', level:65},
      {name:'PHP', level:70},
      {name:'MySQL', level:74},
      {name:'Node.js', level:68},
      {name:'MongoDB', level:65},
      {name:'Python', level:65}
    ];

    const skillsGrid = document.getElementById('skills-grid');

    skills.forEach(s => {
      const el = document.createElement('div');
      el.className = 'skill';
      el.innerHTML = `
        <h4>${s.name} <small style="float:right;color:var(--muted)">${s.level}%</small></h4>
        <div class="progress"><i style="width:0%" aria-hidden="true"></i></div>
      `;
      skillsGrid.appendChild(el);
      // animate after small delay
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.querySelector('i').style.width = s.level + '%';
        }, 150);
      });
    });

    /**********************
     Reveal on scroll for sections (simple)
     **********************/
    const revealTargets = document.querySelectorAll('section');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'opacity .9s ease, transform .9s ease';
          revealObserver.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12});

    revealTargets.forEach(s => {
      s.style.opacity = 0;
      s.style.transform = 'translateY(20px)';
      revealObserver.observe(s);
    });

    /**********************
     Projects: open links in new tab (placeholders already set)
     **********************/

    /**********************
     Contact form (client-side validation + simulated submit)
     **********************/
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const clearBtn = document.getElementById('clear-btn');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = '';
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      if(!name || !email || !subject || !message){
        status.textContent = 'Please fill all fields.';
        status.style.color = 'crimson';
        return;
      }
      // basic email test
      const emailRe = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if(!emailRe.test(email)){
        status.textContent = 'Please enter a valid email.';
        status.style.color = 'crimson';
        return;
      }

      // Simulate send (replace with fetch to server or Formspree/Netlify later)
      status.style.color = 'var(--muted)';
      status.textContent = 'Sending...';

      setTimeout(() => {
        status.style.color = 'green';
        status.textContent = 'Message sent! I will reply soon ✨';
        form.reset();
      }, 900);
    });

    clearBtn.addEventListener('click', () => {
      form.reset();
      status.textContent = '';
    });
// Modal logic
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Attach event for each project "View" button
document.querySelectorAll(".proj .live").forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // stop link
    const proj = btn.closest(".proj");
    const img = proj.querySelector(".proj-img");
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.textContent = proj.querySelector("h3").textContent;
  });
});

// Close modal
closeBtn.onclick = () => { modal.style.display = "none"; };
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=monishamurugesan575@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;

  window.open(gmailUrl, "_blank");
});
    /**********************
     Notes:
     - Replace placeholder images (via.placeholder.com) with your screenshots.
     - Update project links to point to real 'Live' and 'Code' URLs.
     - If you want the site to remember theme across visits, I can add localStorage next.
     **********************/