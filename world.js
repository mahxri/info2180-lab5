const input = document.getElementById('country');
const result = document.getElementById('result');

document.getElementById('lookup').addEventListener('click', () => {
  const country = encodeURIComponent(input.value.trim());

  fetch(`world.php?country=${country}`)
    .then(response => response.text())
    .then(html => {
      result.innerHTML = html;
    })
    .catch(error => {
      result.textContent = 'Error: ' + error;
    });
});