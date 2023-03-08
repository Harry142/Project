const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const links = document.querySelectorAll('.navbar');
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.navbar-menu');
const sectBtn = document.querySelectorAll('.navbar');
const allSections = document.querySelector('.main-content');
const downloadBtn = document.getElementById("download-cv");
const backToTopButton = document.querySelector('#back-to-top');
const pizza = document.querySelector('.pizza');

navToggle.addEventListener('click', () =>{
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click',()=>{
    document.body.classList.remove('nav-open');
  });
});

pizza.addEventListener('click', () => {
  dropDownMenu.classList.toggle('open');
});

pizza.forEach(link => {
  link.addEventListener('click',()=>{
    document.body.classList.remove('nav-open');
  });
});

window.addEventListener("scroll", () => {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;
  
    if (sectionPosition < screenPosition) {
      aboutSection.classList.add("active");
    }
});


window.addEventListener('scroll', () => {
  if (window.pageYOffset > 20) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

downloadBtn.addEventListener('click', function() {
  const downloadLink = document.createElement("download-cv");
  downloadLink.href = 'https://github.com/Harry142/Project/raw/main/Nguyen_Minh_Hieu_Resume.pdf';
  downloadLink.download = 'Nguyen_Minh_Hieu.pdf'; 
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});

// Add a click event listener to each link
links.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default action of the link
    event.preventDefault();

    // Get the target element that the link points to
    const target = document.querySelector(link.hash);

    // Scroll to the target element smoothly
    target.scrollIntoView({
      behavior: 'smooth'
    });

    // Close the dropdown menu
    dropDownMenu.classList.remove('open');
  });
});

// Add a click event listener to the document object
document.addEventListener('click', event => {
  // Check if the target element is inside the navbar or not
  if (!event.target.closest('.navbar')) {
    // If the target element is outside the navbar, then close the navbar
    document.body.classList.remove('nav-open');
  }
});


// Add a click event listener to each link
links.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default action of the link
    event.preventDefault();

    // Get the target element that the link points to
    const target = document.querySelector(link.hash);

    // Scroll to the target element smoothly
    target.scrollIntoView({
      behavior: 'smooth'
    });

    // Close the dropdown menu
    dropDownMenu.classList.remove('open');
  });
});
