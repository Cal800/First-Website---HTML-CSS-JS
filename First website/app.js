const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
})


const btn = document.getElementById('drawer-btn');
const container = document.querySelector('.nightstand-container');
const arrowGroup = document.getElementById('arrow-group');

btn.addEventListener('click', () => {
  container.classList.toggle('active');
  arrowGroup.classList.toggle('rotated');
});


const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevents the form from actually reloading the page
  
  // 1. Change the button state
  submitBtn.innerText = "sending...";
  submitBtn.style.background = "rgba(237, 11, 11, 0.52)"; // Turns Green
  submitBtn.style.borderColor = "#ff0000";
  
  // 2. Simulate a "Server" delay
  setTimeout(() => {
    submitBtn.innerText = "details sent";
    submitBtn.style.boxShadow = "0 0 30px rgba(228, 28, 21, 0.8)";
  }, 1500); 
});