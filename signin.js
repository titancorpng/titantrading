document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector(".wrapper");
  const signupLink = document.querySelector(".signup-link");
  const loginLink = document.querySelector(".login-link");

  const loginForm = document.querySelector(".form-wrapper.login");
  const loginInfo = document.querySelector(".info-wrapper.login");
  const registerForm = document.querySelector(".form-wrapper.register");
  const registerInfo = document.querySelector(".info-wrapper.register");

  // Toggle to Sign Up form
  signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.add("active");
    handleResponsive(); // Re-evaluate on mobile
  });

  // Toggle to Login form
  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.remove("active");
    handleResponsive(); // Re-evaluate on mobile
  });

  // Responsive adjustments
  function handleResponsive() {
    const isMobile = window.innerWidth <= 768;
    const isRegisterActive = wrapper.classList.contains("active");

    if (isMobile) {
      loginForm.style.display = isRegisterActive ? "none" : "flex";
      loginInfo.style.display = isRegisterActive ? "none" : "flex";
      registerForm.style.display = isRegisterActive ? "flex" : "none";
      registerInfo.style.display = isRegisterActive ? "flex" : "none";
    } else {
      // Reset to default for desktop
      [loginForm, loginInfo, registerForm, registerInfo].forEach(el => {
        el.style.display = "flex";
      });
    }
  }

  // Run on load and when window is resized
  handleResponsive();
  window.addEventListener('resize', handleResponsive);
});
