const form = document.getElementById('form-deposito');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorCampoA = parseFloat(campoA.value);
    const valorCampoB = parseFloat(campoB.value);

    if (valorCampoB > valorCampoA) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none'; 
    } else {
        errorMessage.style.display = 'block';  
        successMessage.style.display = 'none'; 
    }
});
