const password = document.getElementById('password');
const body = document.getElementById('body');

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2
  body.style.filter = `blur(${blurValue}px)`
})

