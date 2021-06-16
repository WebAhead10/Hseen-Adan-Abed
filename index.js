/* array of questions */
const myQuestions = [{
    question: "Webahead has started with kav mashve at:",
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
let countPoints = 0;
let numOfTries = 0;
let currentQuestionIndex = 0;
const ANSWER_STATUS = {
    CORRECT: 1,
    INCORRECT:2,
    NO_ANSWER:3
}

function startGame() {
    
    // te2apes numOfTries
    const div = document.getElementById("questions");
    clearPreviousData();
    for (let i = 0; i < myQuestions.length; i++) {
        if (currentQuestionIndex == i) {
            const p = document.createElement("p");
            p.textContent = myQuestions[i].question;

            const ul = document.createElement("ul");
            for (const key in myQuestions[i].answers) {
                const li = document.createElement("li");
                const input = document.createElement("input");
                input.type = "radio";
                input.name = `${i}`;
                input.value = myQuestions[i].answers[key];
                li.appendChild(input);
                const span = document.createElement("span");
                span.textContent = myQuestions[i].answers[key];
                li.appendChild(span);
                ul.appendChild(li);
            }
            
            let submit = document.createElement("button");
            submit.textContent = "SUBMIT";
            submit.onclick = () =>{
                let alert = document.getElementById("alert");
                alert.textContent = "";
                let corrAnswer = myQuestions[i].answers[myQuestions[i].correctAnswer];
                let status = getAnswerStatus(i,corrAnswer);
                if(status === ANSWER_STATUS.NO_ANSWER){
                    // please choose an answer
                    alert.textContent = "Please Choose An Answer !!!";
                }   
                else if(status === ANSWER_STATUS.CORRECT){
                    currentQuestionIndex++;
                    startGame();
                }
                else{
                    // try again
                    alert.textContent = "Try Again !!!";
                }
            }
            div.appendChild(p);
            div.appendChild(ul);
            div.appendChild(submit);
        }
    }

}

function clearPreviousData(){
    const div = document.getElementById("questions");
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}

function getAnswerStatus(i,corrAnswer){
    let a = document.getElementsByName(i);
    for(let j=0; j<a.length; j++){
        if(a[j].checked){
            if(a[j].value === corrAnswer){
                return ANSWER_STATUS.CORRECT;
            }
            else{
                return ANSWER_STATUS.INCORRECT;
            }
        }
    }
    return ANSWER_STATUS.NO_ANSWER;
}


// 1) when currentQuestionIndex = myQuestions.length => show result
// 2) when incorrect - decrease one point
// 3) after the third try if failed - move to the next question and you got 0 points.
// 4) style the page.

/** IMPORTANT */
// - when the answer is correct add points based on num of tries: 4 - numOfTires => numOfTries = 0; 
// if numOfTries === 3 and no correct answer in the third try => countPoints stays the same, then render next question;
// and numOfTries = 0;