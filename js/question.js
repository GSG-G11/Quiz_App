//Start code for Wlecome USer name and Counter in header
let head = document.querySelector('.head');;
let counter = document.querySelector('.counter');
let question = document.querySelector('.question');
let answers = document.querySelector('.options');
let btnNext = document.querySelector('.btn-next')
let btn1 = document.getElementsByClassName('btn')
console.log(btn1)
head.textContent += ' ' + localStorage.getItem('userName');


let questionsCounter = 0;
let questionNumber = 1;
let userScore = 0;
console.log(questionCounter(1))
btnNext.onclick = ()=>{
    if(questionsCounter < questions.length - 1){ 
        questionsCounter++;
        questionNumber++; 
        showQuetions(questionsCounter); 
        questionCounter(questionNumber); 
        optionSelected(btn1)
    
    }else{
        window.location="../result.html"
            theResult.innerText = userScore;
    }
}
function showQuetions(index) {
    const question_text = document.querySelector(".question");
    let question_tag = '<p id="qustiontag" >'+ questions[index].question + '</p>';
    let option_tag = '<button class="btn">' + questions[index].options[0] + '</button>'
        + '<button class="btn">' + questions[index].options[1] + '</button>'
        + '<button class="btn">' + questions[index].options[2] + '</button>'
        + '<button class="btn">' + questions[index].options[3] + '</button>';
    question_text.innerHTML = question_tag;
    answers.innerHTML = option_tag;
    const option = answers.querySelectorAll(".option");
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
function optionSelected(btn1){

    btn1.forEach(element => {
        element.addEventListener("click", () => {
            console.log('aaaa')
        })
        let userAns = element.textContent; 
    let correcAns = questions[questionsCounter].answer; 
    const allOptions = answers.children.length; 
    
    if(userAns === correcAns){ 
        userScore += 1; 
        element.classList.add("correct"); 
    }else{
        element.classList.add("wrong");  
    }
        for(i=0; i < allOptions; i++){
            if(answers.children[i].textContent === correcAns){ 
                answers.children[i].setAttribute("class", "correct"); 
        }
    }
    // for(i=0; i < allOptions; i++){
    //     answers.children[i].classList.add("disabled"); 
    // }
    });
    
}


function questionCounter(index){
    let totalQuestionCounter = '<h2><span class="counter">'+ index +'</span>/10</h2>';
    counter.innerHTML = totalQuestionCounter;
}

let questions = [
    {
        question: "HTML is what type of language ?",
        answer: "Markup Language",
        options: [
            "Scripting Language",
            "Markup Language",
            "Programming Language",
            "Network Protocol"
        ]
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        question: "What Is The Capital Of Palestine ?",
        answer: "Jerusalem",
        options: [
            "London",
            "Jerusalem",
            "Cairo",
            "Doha"
        ]
    },
    {
        question: "HTML uses?",
        answer: "Fixed tags defined by the language",
        options: [
            "User defined tags",
            "Pre-specified tags",
            "Fixed tags defined by the language",
            "Tags only for linking"
        ]
    },
    {
        question: "Apart from tag, what other tag makes text bold ?",
        answer: "eXtensible Markup Language",
        options: [
            "fat",
            "strong",
            "black",
            "emp"
        ]
    },
    {
        question: "What is  the corect about ===?",
        answer: "Compare type and value",

        options: [
            "Not Fast",
            "Compare type and value",
            "Compare type just",
            "Compare value just"
        ]
    },
    {

        question: "What is the result of multiplying 30 * 30?",
        answer: "900",
        options: [
            "8020",
            "3265",
            "900",
            "all of above"
        ]
    },
    {
        question: "What should be the first tag in any HTML document?",
        answer: "document",
        options: [
            "head",
            "title",
            "html",
            "document"
        ]
    },
    {
        question: "True && (false || true && (true|| false))",
        answer: "True",
        options: [
            "False",
            "True",
            "Error",
            "Not of above"
        ]
    },
    {
        question: "whene i need to return Array which a i should ues?",
        answer: "map",
        options: [
            "find",
            "fillter",
            "map",
            "All of above"
        ]
    },
];

