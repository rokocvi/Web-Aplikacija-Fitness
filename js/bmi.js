
function calculateBMI() {
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

   
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('bmi-result').innerText = "Molimo unesite validne vrijednosti za težinu i visinu.";
        return;
    }

   
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let category = '';
    if (bmi < 18.5) {
        category = 'Pothranjenost';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normalna tjelesna težina';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Prekomjerna težina';
    } else {
        category = 'Pretilost';
    }

   
    document.getElementById('bmi-result').innerText = `Vaš BMI je ${bmi} (${category}).`;

}


document.getElementById('calculate-bmi').addEventListener('click', calculateBMI);
