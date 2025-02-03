const exerciseCalories = {
    running: 10,
    cycling: 8,
    swimming: 9,
    yoga: 3,
    strength: {
        pushups: 0.5,
        bench_press: 0.8,
        squats: 0.7,
    },
};


function showStrengthOptions() {
    const exercise = document.getElementById('exercise').value;
    const strengthOptions = document.getElementById('strength-options');
    const inputLabel = document.getElementById('input-label');

    if (exercise === 'strength') {
        strengthOptions.style.display = 'block';
        inputLabel.innerText = "Unesite broj ponavljanja:"; 
    } else {
        strengthOptions.style.display = 'none';
        inputLabel.innerText = "Unesite broj minuta:"; 
    }
}


function calculateCalories() {
    const exercise = document.getElementById('exercise').value;
    const input = parseFloat(document.getElementById('input').value);

    if (isNaN(input) || input <= 0) {
        document.getElementById('result').innerText = "Molimo unesite validan broj.";
        return;
    }

    let totalCalories;

  
    if (exercise === 'strength') {
        const strengthExercise = document.getElementById('strengthExercise').value;
        const caloriesPerRep = exerciseCalories.strength[strengthExercise];
        totalCalories = caloriesPerRep * input; 
    } else {
        const caloriesPerMinute = exerciseCalories[exercise];
        totalCalories = caloriesPerMinute * input;
    }

   
    document.getElementById('result').innerText = `Potrošeno je ${totalCalories.toFixed(2)} kalorija.`;


}

document.getElementById('exercise').addEventListener('change', showStrengthOptions);