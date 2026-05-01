// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  mobileMenu.style.display = expanded ? 'none' : 'flex';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Theme toggle
const themeBtn = document.getElementById('theme-toggle');

function updateThemeLabel(){
  const isDark = document.body.classList.contains('dark');
  themeBtn.textContent = isDark ? 'Light' : 'Dark';
  themeBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  updateThemeLabel();
});

updateThemeLabel();

// Skills
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
    <div class="progress"><i style="width:0%"></i></div>
  `;
  skillsGrid.appendChild(el);

  setTimeout(() => {
    el.querySelector('i').style.width = s.level + '%';
  }, 150);
});

// =====================
// ✅ MODAL (WORKING)
// =====================
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();

    const proj = this.closest(".proj");
    const img = proj.querySelector(".proj-img");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerText = proj.querySelector("h3").innerText;
  });
});

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close when clicking outside
modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// =====================
// Gmail form submit
// =====================
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=monishamurugesan575@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;

  window.open(gmailUrl, "_blank");
});
