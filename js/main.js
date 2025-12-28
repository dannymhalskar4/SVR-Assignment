const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const nameField = form.querySelector('#parentName');
  const phoneField = form.querySelector('#phone');
  const gradeField = form.querySelector('#grade');

  const fields = [nameField, phoneField, gradeField];

  // reset errors
  fields.forEach(field => {
    field.setAttribute('aria-invalid', 'false');
    field.nextElementSibling.textContent = '';
  });

  /* 1️⃣ EMPTY FIELD CHECK */
  for (const field of fields) {
    if (!field.value.trim()) {
      showError(
        field,
        'Please fill all fields correctly.'
      );
      return;
    }
  }

  /* 2️⃣ NAME VALIDATION */
  const nameRegex = /^[A-Za-z ]{3,}$/;
  if (!nameRegex.test(nameField.value.trim())) {
    showError(
      nameField,
      'Parent name should contain only letters and spaces.'
    );
    return;
  }

  /* 3️⃣ PHONE VALIDATION */
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phoneField.value.trim())) {
    showError(
      phoneField,
      'Please enter a valid 10-digit mobile number.'
    );
    return;
  }

  /* 4️⃣ SUCCESS */
  alert('Form submitted successfully');
  form.reset();
});

/* 🔧 Helper */
function showError(field, message) {
  field.setAttribute('aria-invalid', 'true');
  field.nextElementSibling.textContent = message;
  field.focus();
}
