
function stage1(){
    let opr=document.getElementById("operator");
    let num=document.getElementById("number");
     let randomnumber1;
     let randomnumber2;
    let operator=opr.value,
    number=parseInt(num.value);
}
    

function stage2(){
  let progresss_1=document.getElementsByClassName("progress");
  let optEle,optype,num1Ele,num1Elevalue,num2Elevalue,num2Ele,expected,actual;
  for(i=0;i<progress_1.length;i++){
    let progresss_1=progresss_1[i];
    optEle=progresss_1.document.getElementById("operator");
    optype=optEle.innerHTML;
    num1Ele=progresss_1.document.getElementById("number1");
    num1Elevalue=parseInt(num1Ele.innerHTML);
    num2Ele=progresss_1.document.getElementById("number2");
    num2Elevalue=parseInt(num2Ele.innerHtml);

    if(optype=="+"){
      expected=num1Elevalue+num2ELevalue;
    }
    else if(optype=="-"){
      expectesd=num1Elevalue-num2ELevalue;
    }
    else if(optype=="-"){
      expected=num1Elevalue*num2ELevalue;
    }
    else{
      expected=num1Elevalue/number2Elevalue
    }
    console.log(expected);
    
    
    
    
    acutal=problems_1.document.getElementById("answer")[0];
    actualanswer=parseInt(acutal.value);
    if(expected==actualanswer){
      mark++;
    }
  }
  alert("this is your"+answer);
}
function generateRandomnumber(num){
   return parseInt(Math.random()*num);
}

function enableCalculate(){
      calculateEle.removeAttribute("Disabled");
}
function textmo(text){
  
switch(text){

    case "add": 
        return "+";
        break;

   case "sub": 
   return "-";
        break;
     case "mul":
     return "*" ;
     break; 
     
     default:                             ``
        return "/";
        break;
      }  
}
function resetprogress(){
  let progresEle=document.getElementsByClassName("progress")[0];
   progresEle.innerHtml="";
  }
   function updateprogress(number1,number2,operator){
   let progressEle=document.createElement("div");
   progressEle.setAttribute("class","progress");
    let number1Ele=document.createElement("h3");
   number1Ele.setAttribute("class","number1");
    let number2Ele=document.createElement("h3");
   number2Ele.setAttribute("class","number2")
    let operationEle=document.createElement("h3");
   operationEle.setAttribute("class","operator");

 operationEle.innerText=textmo(operation);
 inptEle=document.createElement("input");
 inptEle.setAttribute("class","answer");
 inptEle.setAttribute("tyoe","text");


 progressEle.append(number1Ele);
 progressEle.append(operationEle);
 progressEle.append(number2Ele);
 progressEle.append(inptEle);
  
//  progresssEle.append(progressEle);
 progressEle.append(progresssEle);

 }



let len=document.getElementById("start").addEventListener("click",stage1);
let progressEle=document.getElementsByClassName("progress")[0];
let calculateEle=document.getElementById("calculate");
let operation=document.getElementById('operation')

 
calculateEle.addEventListener("click",stage2),
     resetprogress();
for(i=0;i<16;i++){
      randomnumber1=generateRandomnumber(number);
      randomnumber2=generateRandomnumber(number);
  
  
    updateprogress(randomnumber1,randomnumber2,operator)
   }
  enableCalculate();



































