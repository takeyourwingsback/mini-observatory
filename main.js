const sendRequestBtn = document.querySelector('#sendRequestBtn');
const inputBody = document.querySelector('#inputBody');

const bodyName = document.querySelector('#bodyName');
const bodyTemp = document.querySelector('#bodyTemp');
const bodyMass = document.querySelector('#bodyMass');
const bodyDensity = document.querySelector('#bodyDensity');
const bodyGravity = document.querySelector('#bodyGravity');
const bodyInclination = document.querySelector('#bodyInclination');

async function getPlanetData(cosmicBody) {
    const data = await fetch('https://api.le-systeme-solaire.net/rest/bodies/' + cosmicBody, {
        method: 'get', headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .catch(() => {
        alert("Space body not found!");
        return false;
    })
    console.log(data);

    if (data) {
        bodyName.textContent = data.englishName;
        bodyTemp.textContent = `${Math.floor(data.avgTemp - 273.15)} °C (${data.avgTemp} K)`;
        bodyDensity.textContent = data.density + ' g/cc';
        bodyGravity.textContent = data.gravity + ' m/s';
        bodyMass.textContent = data.mass.massValue + ' kg';
        bodyInclination.textContent = data.inclination + ' °';
    }
}

sendRequestBtn.addEventListener('click', () => {
    const inputData = inputBody.value;
    if (inputData) getPlanetData(inputData);
})