document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.querySelector(".wrapper");
  const signupLink = document.querySelector(".signup-link");
  const loginLink = document.querySelector(".login-link");
  
  // Toggle between login/register forms
  signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.add("active");
  });
  
  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.remove("active");
  });
  
  // Responsive adjustments
  function handleResponsive() {
    if (window.innerWidth <= 768) {
      // Mobile behavior
      if (wrapper.classList.contains("active")) {
        document.querySelector(".form-wrapper.login").style.display = "none";
        document.querySelector(".info-wrapper.login").style.display = "none";
        document.querySelector(".form-wrapper.register").style.display = "flex";
        document.querySelector(".info-wrapper.register").style.display = "flex";
      } else {
        document.querySelector(".form-wrapper.login").style.display = "flex";
        document.querySelector(".info-wrapper.login").style.display = "flex";
        document.querySelector(".form-wrapper.register").style.display = "none";
        document.querySelector(".info-wrapper.register").style.display = "none";
      }
    } else {
      // Desktop behavior - reset all styles
      document.querySelectorAll(".form-wrapper, .info-wrapper").forEach(el => {
        el.style.display = "flex";
      });
    }
  }
  
  // Run on load and resize
  handleResponsive();
  window.addEventListener('resize', handleResponsive);
});
