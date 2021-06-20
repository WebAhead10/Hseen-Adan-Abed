/** global variables */
let countPoints = 4;
var totalPoints = 0;
let failed = 0;
let currentQuestionIndex = 0;
const ANSWER_STATUS = {
    CORRECT: 1,
    INCORRECT: 2,
    NO_ANSWER: 3
}
// Array of questions
let myQuestions = [{
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
        a: "Jdaidet El-Maker",
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
},
{
    question: "",
    
}
];
function startGame() {
    const div = document.getElementById("questions");
    const mainDiv = document.getElementById("main");
    mainDiv.classList.add("container");
    let points = document.getElementById("points");
    clearPreviousData();
    document.getElementById('startBtn').style.display= "none";

    // loop through the array of questions and answers(object)
    for (let i = 0; i < myQuestions.length; i++) {
        if (currentQuestionIndex == i) {
            if (currentQuestionIndex === myQuestions.length - 1) {
              myQuestions[10].question = `Your score is ${totalPoints}\n${feedback(totalPoints)}`
            }
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
            // create submit button
            let submit = document.createElement("button");
            submit.textContent = "SUBMIT";
            //  action onClick 
            submit.onclick = () => {
                let alert = document.getElementById("alert");
                alert.textContent = "";
                let corrAnswer = myQuestions[i].answers[myQuestions[i].correctAnswer];
                let status = getAnswerStatus(i, corrAnswer);
<<<<<<< HEAD
                // if (corrAnswer)

=======
>>>>>>> 449cd79477922c40004213f6ea73f500ee9ed890
                // please choose an answer
                if (status === ANSWER_STATUS.NO_ANSWER) {
                    alert.textContent = "Please choose an answer";
                    setTimeout(() => {
                        alert.textContent = "";
                    }, 1000);
                }
                // if correct
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
                        alert.textContent = " The correct answer is : " + myQuestions[i].answers[myQuestions[i].correctAnswer];
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
                        alert.textContent = "Try again...";
                        setTimeout(() => {
                            alert.textContent = "";
                        }, 1000);
                    }
                }
            }
            /** append all to the dev container */
            div.appendChild(p);
            div.appendChild(ul);
            if (currentQuestionIndex < 10){
                div.appendChild(submit);
            }
        }
       
    } //end of for loop
        
}// end of startGame


/** clear previous data in the page */
function clearPreviousData() {
    const div = document.getElementById("questions");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}


/** check the answer */
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
   // feedback
   function feedback(totalPoints) {
    if (totalPoints>=0 && totalPoints<=10){
        return "You are still strangers!";
    } else if (totalPoints>=11 && totalPoints<=20){
        return "You know a thing or two!";
    } else if (totalPoints>=21 && totalPoints<=35){
        return  "You are basically friends (but not close friends)!";
    } else if (totalPoints>=36 && totalPoints<=40){
        return  "You are a family!";
    }
}
