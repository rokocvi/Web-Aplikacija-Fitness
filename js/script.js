
const questions = [
    {
        question: "Koliko minuta fizičke aktivnosti se preporučuje dnevno?",
        answers: [
            { text: "10 minuta", correct: false },
            { text: "30 minuta", correct: true },
            { text: "60 minuta", correct: false },
            { text: "90 minuta", correct: false }
        ]
    },
    {
        question: "Koja je osnovna funkcija proteina u tijelu?",
        answers: [
            { text: "Izvor energije", correct: false },
            { text: "Regeneracija mišića", correct: true },
            { text: "Povećanje tjelesne mase", correct: false },
            { text: "Smanjenje umora", correct: false }
        ]
    },
    {
        question: "Šta je najbolji način da izbegnete povrede tokom vežbanja?",
        answers: [
            { text: "Vježbanje bez odmora", correct: false },
            { text: "Pravilno zagrijavanje", correct: true },
            { text: "Konzumacija kofeina", correct: false },
            { text: "Dizanje maksimalne težine", correct: false }
        ]
    },
    {
        question: "Koji je najefikasniji način za sagorjevanje masti?",
        answers: [
            { text: "Kardio vježbe", correct: true },
            { text: "Povećanje kalorijskog unosa", correct: false },
            { text: "Trening snage bez kardio", correct: false },
            { text: "Pijenje energetskih pića", correct: false }
        ]
    },
    {
        question: "Koliko vode se preporučuje popiti dnevno?",
        answers: [
            { text: "1 litra", correct: false },
            { text: "2-3 litre", correct: true },
            { text: "5 litara", correct: false },
            { text: "Samo kad ste žedni", correct: false }
        ]
    },

    {
        question: "Koliko sati sna se preporučuje za optimalan oporavak?",
        answers: [
            { text: "4 sata", correct: false },
            { text: "6 sati", correct: false },
            { text: "7-9 sati", correct: true },
            { text: "10 sati", correct: false }
        ]
    },

    {
        question: "Koja vježba najefikasnije pogađa mišiće cijelog tijela?",
        answers: [
            { text: "Čučnjevi", correct: false },
            { text: "Sklekovi", correct: false},
            { text: "Mrtvo dizanje", correct: true },
            { text: "Trčanje", correct: false }
        ]
    },
    
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score");
const restartButton = document.getElementById("restart");


function showQuestion() {
    resetAnswers();
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer");
        button.addEventListener("click", () => selectAnswer(answer));
        answersContainer.appendChild(button);
    });
}


function resetAnswers() {
    answersContainer.innerHTML = "";
}


function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}


function showResult() {
    document.getElementById("question-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");

    scoreText.textContent = `Osvojili ste ${score} od ${questions.length} bodova!`;
}


restartButton.addEventListener("click", () => {
    score = 0;
    currentQuestionIndex = 0;
    resultContainer.classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    showQuestion();
});


showQuestion();
