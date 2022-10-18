document.getElementById("start").addEventListener("click", stage1Oprtn);
let problemsEle = document.getElementsByClassName("problems")[0];
let calculateEle = document.getElementById("calculate");


function stage1Oprtn() {
  let operationEle = document.getElementById("operation"),
    rangeEle = document.getElementById("range"),
    randomNumber1,
    randomNumber2,
    operation = operationEle.value,
    range = parseInt(rangeEle.value);

function stage2(){
    let problems_1=document.getElementsByClassName("problem"),
    opEle,opType,nu1Ele,nu2Ele,nu2Elevalue,nu1Elevalue,expected,actual,actualAnswer,mark=0;
    for(i=0;i<problems_1.length;i++){
       var problem_1=problems_1[i];
       //findoperation
        opEle=problem_1.getElementsByClassName("oprtn")[0];
        opType=opEle.innerHTML;
        //console.log(opType)

       
       //get number1 and number2 value
        nu1Ele=problem_1.getElementsByClassName("number1")[0];
        nu1Elevalue=parseInt(nu1Ele.innerHTML); //console.log(nu1Elevalue);

        nu2Ele=problem_1.getElementsByClassName("number2")[0];
        nu2Elevalue=parseInt(nu2Ele.innerHTML);
        //console.log(nu2Elevalue);

       //find expected answer
       if(opType=="+"){
        expected=nu1Elevalue + nu2Elevalue;
       }
       else if(opType=="-"){
        expected=nu1Elevalue - nu2Elevalue;
       }
       else if(opType=="*"){
        expected=nu1Elevalue * nu2Elevalue;
       }
       else{
        expected=nu1Elevalue / nu2Elevalue;
       } 
       console.log(expected);
       //get actual answer
       actual=problem_1.getElementsByClassName("answer")[0].value;
       actualAnswer=parseInt(actual.value);
       console.log(actualAnswer);
       //compare the answer
       if(expected == actualAnswer){
            mark++;
       }
       //if true add mark
    }
    alert("your mark is"+mark)
}
calculateEle.addEventListener("click",stage2);
  resetproblemsEle();
  for (i = 1; i < 16; i++) {
    randomNumber1 = generateRandomNumber(range);
    randomNumber2 = generateRandomNumber(range);

    updateProblem(randomNumber1, randomNumber2, operation);
  }
  enableCalculate();
}
function generateRandomNumber(max) {
  return parseInt(Math.random() * max);
}
function enableCalculate() {
  calculateEle.removeAttribute("Disabled");
}
function texttosymbol(text) {
  switch (text) {
    case "add":
      return "+";
      break;
    case "sub":
      return "-";
      break;
    case "multiplication":
      return "*";
      break;
    default:
      return "/";
      break;
  }
}
function resetproblemsEle() {
  problemsEle.innerHTML = "";
}
function updateProblem(number1, number2, operation) {
  // create Problem div
  let problemEle = document.createElement("div");
  problemEle.setAttribute("class", "problem");

  // Create h3 for number1
  let number1Ele = document.createElement("h3");
    number1Ele.setAttribute("class","number1");
  // update value foe number1
  number1Ele.innerText = number1;
  //console.log(number1Ele);

  // Create h3 for number2
  let number2Ele = document.createElement("h3");
  number2Ele.setAttribute("class","number2");

  // update value for number2
  number2Ele.innerText = number2;
  //console.log(number2Ele);

  // Create h3 for operation
  let oprtnEle = document.createElement("h3");
  oprtnEle.setAttribute("class","oprtn");

  // update symbol for Operation
  oprtnEle.innerText = texttosymbol(operation);
  //console.log(oprtnEle);

  // create input box
  let inptEle = document.createElement("input");

  //Update input class name
  inptEle.setAttribute("class", "answer");

  // create input type text
  inptEle.setAttribute("type", "text");

  // append(add)hr,h3's,input inside problem

  problemEle.append(number1Ele);
  problemEle.append(oprtnEle);
  problemEle.append(number2Ele);
  problemEle.append(inptEle);

  // Append Inside Problems
  problemsEle.append(problemEle);
}