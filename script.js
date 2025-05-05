// 1. Event Handling 
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Button Click Event
    const clickBtn = document.getElementById('clickBtn');
    clickBtn.addEventListener('click', () => {
      alert('Button was clicked!');
    });
  
    // 2. Hover Effects
    const hoverTarget = document.getElementById('hoverTarget');
    hoverTarget.addEventListener('mouseover', () => {
      hoverTarget.style.backgroundColor = '#d1e7ff'; // Light blue
    });
    hoverTarget.addEventListener('mouseout', () => {
      hoverTarget.style.backgroundColor = ''; // Reset to default
    });
  
    // 3. Keypress Detection
    document.addEventListener('keydown', (event) => {
      console.log(`Key pressed: ${event.key}`);
    });
  
    // 4. Secret Action for Double Click
    const secretBtn = document.getElementById('secretBtn');
    secretBtn.addEventListener('dblclick', () => {
      alert('✨ Secret double-click unlocked!');
    });
  });
  
  
  // 2. Interactive Elements 
  
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Change Button Text and Color
    const colorchangeBtn = document.getElementById('colorchangeBtn');
    colorchangeBtn.addEventListener('click', () => {
      colorchangeBtn.textContent = 'You clicked me!';
      colorchangeBtn.style.backgroundColor = 'green';
    });
  
    // 2. Image Gallery Navigation
    const galleryImages = document.querySelectorAll('#image-gallery img');
    const nextImageBtn = document.getElementById('nextImageBtn');
    let currentIndex = 0;
  
    nextImageBtn.addEventListener('click', () => {
      galleryImages[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % galleryImages.length;
      galleryImages[currentIndex].style.display = 'block';
    });
  
    // Initialize the first image to be visible
    galleryImages.forEach((img, index) => {
      img.style.display = index === 0 ? 'block' : 'none';
    });
  
    // 3. Tab Navigation
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetContent = document.getElementById(button.dataset.target);
  
        tabContents.forEach(content => {
          content.style.display = 'none';
        });
        targetContent.style.display = 'block';
  
        tabButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        button.classList.add('active');
      });
    });
  
    // Optionally, set the first tab as active by default
    if (tabButtons.length > 0) {
      tabButtons[0].click();
    }
  });
  
  
  // 3. Form Validation 
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('validationForm');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission for validation
  
      const email = form.email.value;
      const password = form.password.value;
      let isValid = true;
  
      // Validate Email
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
      }
  
      // Validate Password
      if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        isValid = false;
      }
  
      // If all validations pass, submit the form
      if (isValid) {
        alert('Form submitted successfully!');
        form.submit(); // Proceed with form submission
      }

    });
  });
  