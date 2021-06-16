function ifTrue(x,y) {
   return y ? ul.append(x)
}

const data = [
     {question: "Webahead has started with kav mashve at:",
     answers: [["Haifa in 2019", true], "no", "no", "no"]},
     {question: "Mahmoud and Mario have been mentoring the course for :",
     answers: [["Two Years", true], "no", "no", "no"]},
     {question: "Hussien is from?",
     answers: [["Haifa, Palestine", true], "no", "no", "no"]},
     {question: "Abed has finished a degree in",
     answers: [["Software Engineering", true], "no", "no", "no"]},
     {question: "Adan is ____ years old",
     answers: [["24", true], "no", "no", "no"]},
     {question: "Her/his laptop is touch and she/he is living in Jaffa :",
     answers: [["Hasan", true], "no", "no", "no"]},
     {question: "She/he has a degree in Mathmatics and has two little children",
     answers: [["Nidaa", true], "no", "no", "no"]},
     {question: "Elias is from",
     answers: [["Jedaidat' Al-makir", true], "no", "no", "no"]},
     {question: "Fadi is ___ years old",
     answers: [["28",true], "Chicken", "Rooster", "Web-Ahead"]},
     {question: "Noor is from",
     answers: [["Sakhnin", true], "no", "no", "no"]}
]

let num = Math.floor(Math.random() * 10)
let questionPick = document.getElementById('question').innerText = data[num].question;
let answerPick =  data[num].answers;
let theAns = data[num].answers[i]

let ul = document.querySelector('ul')
for (let i = 0; i < data[num].answers.length; i++) {
    let li = document.createElement('li')
    li.innerText = theAns
    ul.append(li)
}

document.getElementById('true').addEventListener('click', () => {

})