function check() { 
    var d = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value; 
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var q6 = document.quiz.question6.value;

    

    if (q1 =="Javascript") {d+= 10}
    if (q2 =="Russia") {d+= 10}
    if (q3 =="Beijing") {d+= 10}
    if (q4 =="Javascript") {d+= 10}
    if (q5 =="Javascript") {d+= 10}
    if (q6 =="Javascript") {d+= 10}
 
    
    if(d <= 50) 
    {
     document.write(`Your result is ${d}. It is poor,try again!`)
    }
    else if(d > 60 && d < 80){
       document.write (`Your result is ${d}. It is fair!`)
    } 
    else {
        document.write(`Your result is ${d}. It is Awesome!`)
    }
    
}
