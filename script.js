const correctAnswer = ["D", "B", "C", "B", "D", "A", "B","D", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions=document.querySelectorAll(".question");

form.addEventListener("submit", event => {
    event.preventDefault();

    let score=0;
    const userAnswers = [...document.querySelectorAll('input[type=radio]:checked')].map(el => el.value);

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
        score += 1;
        questions[index].classList.add("correct"); 
        } else {
        questions[index].classList.add("wrong");
    }
    });
    
    scrollTo(0,0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `You scored ${score}/${userAnswers.length}!`;
});
