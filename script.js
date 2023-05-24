document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons
    const workButton = document.getElementById('work');
    const aboutButton = document.getElementById('about');
    const contactButton = document.getElementById('contact');
  
    // Get references to the pages
    const workPage = document.getElementById('work-page');
    const aboutPage = document.getElementById('about-page');
    const contactPage = document.getElementById('contact-page');
  
    // Function to show a page and hide others
    function showPage(page) {
      // Hide all pages
      const pages = document.querySelectorAll('.page');
      pages.forEach((page) => {
        page.classList.remove('active');
    });
  
    // Show the selected page
    page.classList.add('active');
  }
  
    // Button click event listeners
    workButton.addEventListener('click', function() {
      showPage(workPage);
    });
  
    aboutButton.addEventListener('click', function() {
      showPage(aboutPage);
    });
  
    contactButton.addEventListener('click', function() {
      showPage(contactPage);
    });
  
    // Initially show the "Work" page
    showPage(workPage);
  });
  