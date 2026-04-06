function CalculateResult()
{
const n=document.getElementById("subjects").value;

let total=0;
let i;

for(i=0;i<n;i++)
{
    let x=pareFloat(prompt("enter the subject number"+(i+1)));

    total+=x;
    let avg=total/n;
    let grade;
    if(avg>=90)
    {
        grade='A+';
    }
    else if(avg>=75)
    {
        grade='B';
    }
    else if(avg>=60)
    {
        grade='C';
    }
    else if(avg>=50)
    {
        grade='D';
    }
    else
    {
        grade='F';
    }
let r;
if (avg>40)
    r="pass";
elser="fail";

let result=document.getElementById("result").
innerHTML="TOTAL Marks"+total+"<br/>"+"Average"
}
}