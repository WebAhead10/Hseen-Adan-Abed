/* array of questions */
const myQuestions = [{
    question: " Question 1 : Webahead has started with kav mashve at:",
    answers: {
        a: "Haifa in 2016",
        b: "Nazareth in 2017",
        c: "Haifa in 2019",
        d: "Nazareth in 2016 "
    },
    correctAnswer: "c"
},
{
    question: "Mahmoud and Mario have been mentoring the course for :",
    answers: {
        a: "one year",
        b: "two years",
        c: "three years",
        d: "four years"
    },
    correctAnswer: "b"
},
{
    question: "Hussien is from?",
    answers: {
        a: "Shefa-amer",
        b: "Nazareth",
        c: "Haifa",
        d: "Sakhnin"
    },
    correctAnswer: "c"
},
{
    question: "Abed has finished a degree in?",
    answers: {
        a: "Biology",
        b: "Mathmatics",
        c: "Law",
        d: "Software engineering"
    },
    correctAnswer: "d"
},
{
    question: "Adan is ____ years old.",
    answers: {
        a: "24",
        b: "23",
        c: "22",
        d: "21"
    },
    correctAnswer: "a"
},
{
    question: "Her/his laptop is touch and she/he is living in Jaffa :",
    answers: {
        a: "Nidaa",
        b: "Elias",
        c: "Hasan",
        d: "Fadi"
    },
    correctAnswer: "c"
},
{
    question: "She/he has a degree in Mathmatics and has two little children?",
    answers: {
        a: "Dana",
        b: "Shireen",
        c: "Nidaa",
        d: "Adan"
    },
    correctAnswer: "c"
},
{
    question: "Elias is from?",
    answers: {
        a: "Jdaide Maker",
        b: "Haifaa",
        c: "Jaffa",
        d: "Jerusalem"
    },
    correctAnswer: "a"
},
{
    question: "Fadi is ____ years old.",
    answers: {
        a: "25",
        b: "26",
        c: "27",
        d: "28"
    },
    correctAnswer: "d"
},
{
    question: "Nour is from?",
    answers: {
        a: "Bqeaa",
        b: "Sakhnin",
        c: "Um elfahem",
        d: "Jatt"
    },
    correctAnswer: "b"
}
];

/** global variables */
let countPoints = 4;
let totalPoints = 0;
let failed = 0;
let currentQuestionIndex = 0;
const ANSWER_STATUS = {
    CORRECT: 1,
    INCORRECT: 2,
    NO_ANSWER: 3
}

function startGame() {


    const div = document.getElementById("questions");
    const mainDiv = document.getElementById("main");
    mainDiv.classList.add("container");
    let points = document.getElementById("points");
    clearPreviousData();

    /** loop through the array */
    for (let i = 0; i < myQuestions.length; i++) {
        if (currentQuestionIndex == i) {
            const p = document.createElement("p");
            p.textContent = myQuestions[i].question;

            /** create the ul and the li elements with all children */
            const ul = document.createElement("ul");
            ul.classList.add("answer");
            for (const key in myQuestions[i].answers) {
                const li = document.createElement("li");
                const input = document.createElement("input");
                input.type = "radio";
                input.name = `${i}`;
                input.value = myQuestions[i].answers[key];
                li.appendChild(input);
                const span = document.createElement("span");
                span.classList.add("styleSpan");
                span.textContent = myQuestions[i].answers[key];
                li.appendChild(span);
                ul.appendChild(li);
            }

            let submit = document.createElement("button");
            submit.textContent = "SUBMIT";
            submit.onclick = () => {
                let alert = document.getElementById("alert");
                alert.textContent = "";
                let corrAnswer = myQuestions[i].answers[myQuestions[i].correctAnswer];
                let status = getAnswerStatus(i, corrAnswer);

                if (status === ANSWER_STATUS.NO_ANSWER) {
                    // please choose an answer
                    alert.textContent = "Please Choose An Answer !!!";
                    setTimeout(() => {
                        alert.textContent = "";
                    }, 1000);
                }
                else if (status === ANSWER_STATUS.CORRECT) {

                    totalPoints += countPoints;
                    points.textContent = totalPoints;
                    alert.textContent = "CORRECT :)";
                    setTimeout(() => {
                        currentQuestionIndex++;
                        startGame();
                        failed = 0;
                        countPoints = 4;
                        alert.textContent = "";
                    }, 1000);
                }
                else {
                    // try again
                    failed++;
                    if (failed === 3) {
                        alert.textContent = " The Correct Answer is : " + myQuestions[i].answers[myQuestions[i].correctAnswer];
                        totalPoints += countPoints;
                        points.textContent = totalPoints;
                        
                        setTimeout(() => {
                            currentQuestionIndex++;
                            alert.textContent = " ";
                            startGame();
                            failed = 0;
                            countPoints = 4;
                        }, 3000);
                    } else {
                        alert.textContent = "Try Again !!!";
                        setTimeout(() => {
                            alert.textContent = "";
                        }, 1000);
                    }
                }

                // if (failed === 1) {
                //     countPoints += 3;
                // } else if (failed === 2) {
                //     countPoints += 2;
                // }
                // else { // correct in one try || empty choice 
                //     if (status === ANSWER_STATUS.CORRECT) {
                //         countPoints += 4;
                //     }
                //     else {
                //         countPoints += 0;
                //     }
                // }
            }
            /** append all to the dev container */
            div.appendChild(p);
            div.appendChild(ul);
            div.appendChild(submit);
        }
    }

}

function clearPreviousData() {
    const div = document.getElementById("questions");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function getAnswerStatus(i, corrAnswer) {
    let a = document.getElementsByName(i);
    for (let j = 0; j < a.length; j++) {
        if (a[j].checked) {
            if (a[j].value === corrAnswer) {
                countPoints -= 0;
                return ANSWER_STATUS.CORRECT;
            }
            else {
                countPoints--;
                if(countPoints < 2){
                    countPoints = 0;
                }
                return ANSWER_STATUS.INCORRECT;
            }
        }
    }
    return ANSWER_STATUS.NO_ANSWER;
}


// 1) when currentQuestionIndex = myQuestions.length => show result
// 2) when incorrect - decrease one point
// 3) after the third try if failed - move to the next question and you got 0 points.

/** IMPORTANT */
// - when the answer is correct add points based on num of tries: 4 - numOfTires => numOfTries = 0; 
// if numOfTries === 3 and no correct answer in the third try => countPoints stays the same, then render next question;
// and numOfTries = 0;