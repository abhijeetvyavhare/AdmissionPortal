function validateForm() {
  // Retrieve the form elements
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var school = document.getElementById('school').value.trim();
  var percentage = document.getElementById('percentage').value.trim();
  var genderMale = document.getElementById('male').checked;
  var genderFemale = document.getElementById('female').checked;

  // Perform validation
  if (name === '') {
      alert('Please enter your name.');
      return false;
  }
  var nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name)) {
      alert('Name should only contain alphabetic characters.');
      return false;
  }
  if (email === '') {
      alert('Please enter your email.');
      return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
  }

  if (phone === '') {
      alert('Please enter your phone number.');
      return false;
  }

  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
  }

  if (school === '') {
      alert('Please enter your school name.');
      return false;
  }

  if (percentage === '') {
      alert('Please enter your percentage.');
      return false;
  }

  var percentageValue = parseFloat(percentage);
  if (isNaN(percentageValue) || percentageValue < 0 || percentageValue > 100) {
      alert('Please enter a valid percentage.');
      return false;
  }

  if (!genderMale && !genderFemale) {
      alert('Please select your gender.');
      return false;
  }

  // If all validations pass, the form is valid
  alert('Form submitted successfully.');
  return true;
}
