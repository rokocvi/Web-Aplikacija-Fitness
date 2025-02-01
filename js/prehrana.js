
function generateDietPlan(bmi) {
    if (bmi < 18.5) {
        return [
            "Jedite više kalorija kroz obroke bogate ugljenim hidratima.",
            "Dodajte zdrave masti kao što su avokado i orašasti plodovi.",
            "Povećajte unos proteina kroz jaja, piletinu i mahune.",
            "Jedite češće, 5-6 manjih obroka dnevno."
        ];
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return [
            "Održavajte balansiranu ishranu s fokusom na povrće i voće.",
            "Jedite integralne žitarice kao što je smeđa riža.",
            "Unosite nemasne proteine poput ribe i piletine.",
            "Hidrirajte se i izbjegavajte previše prerađene hrane."
        ];
    } else if (bmi >= 25 && bmi < 29.9) {
        return [
            "Smanjite unos šećera i prerađenih ugljenih hidrata.",
            "Jedite više vlakana kroz povrće, voće i integralne žitarice.",
            "Birajte nemasne proteine i izbjegavajte prženu hranu.",
            "Pijte puno vode i smanjite unos alkohola."
        ];
    } else {
        return [
            "Smanjite unos kalorija i birajte manje porcije.",
            "Fokusirajte se na povrće s niskim kalorijama, poput brokule i špinata.",
            "Izbjegavajte prerađenu hranu i brzu hranu.",
            "Konzultirajte se s nutricionistom za osobni plan ishrane."
        ];
    }
}


function addDietPlan() {

    const planInput = document.getElementById('planNameInput').value;
    const bmi = parseFloat(planInput);


    if (isNaN(bmi) || bmi <= 0) {
        alert("Molimo unesite validnu BMI vrednost.");
        return;
    }

   
    const dietPlan = generateDietPlan(bmi);

    const planList = document.getElementById('planList');
    planList.innerHTML = ""; 

    dietPlan.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        planList.appendChild(listItem);
    });
}

document.getElementById('addPlanBtn').addEventListener('click', addDietPlan);
