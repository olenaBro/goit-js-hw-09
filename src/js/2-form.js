const formData = {
  email: '',
  message: '',
};

const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

try {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    const parsedData = JSON.parse(savedData);

    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
} catch (error) {
  console.error('Помилка', error);
}
form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name === 'email' || name === 'message') {
    formData[name] = value.trimStart();

    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

console.log('Form submitted:', formData);

  localStorage.removeItem(storageKey);
  formData.email = '';
  formData.message = '';
  form.reset();
});
