
function submitHandler () {
    var weight=document.getElementById("weight").value; 
    var  height=document.getElementById("height").value;
    var hm=height/100;
    var ans=(weight/(hm*hm)).toFixed(2);
    // console.log(ans);
    document.getElementById("result").innerHTML= "<p> BMI:" + ans + "</p>";
}