document.getElementById("myButton").onclick = function(){
    const ansA1 = document.getElementById("ansA1");
    const ansA2 = document.getElementById("ansA2");
    const ansC3 = document.getElementById("ansC3");
    const ansA4 = document.getElementById("ansA4");
    const ansA5 = document.getElementById("ansA5");

    let num = 0;

    if(ansA1.checked){
        document.getElementById("h1").innerHTML = "You are correct!";
        num+=1
    }
    else{
        document.getElementById("wh1").innerHTML = "You are incorrect!";
    }

    if(ansA2.checked){
        document.getElementById("h2").innerHTML = "You are correct!";
        num+=1
    }
    else{
        document.getElementById("wh2").innerHTML = "You are incorrect!";
    }

    if(ansC3.checked){
        document.getElementById("h3").innerHTML = "You are correct!";
        num+=1
    }
    else{
        document.getElementById("wh3").innerHTML = "You are incorrect!";
    }

    if(ansA4.checked){
        document.getElementById("h4").innerHTML = "You are correct!";
        num+=1
    }
    else{
        document.getElementById("wh4").innerHTML = "You are incorrect!";
    }

    if(ansA5.checked){
        document.getElementById("h5").innerHTML = "You are correct!";
        num+=1
    }
    else{
        document.getElementById("wh5").innerHTML = "You are incorrect!";
    }

    document.getElementById("correctAns").innerHTML = "You have " + num +" correct answers!";

}


function clearSelection(name){
    const radioBtns = document.querySelectorAll("input[type='radio'][name='" + name +"']");

    radioBtns.forEach((radioBtns) => {  
        if (radioBtns.checked === true) radioBtns.checked = false;
    });

    document.getElementById("h1").innerHTML = "";
    document.getElementById("h2").innerHTML = "";
    document.getElementById("h3").innerHTML = "";
    document.getElementById("h4").innerHTML = "";
    document.getElementById("h5").innerHTML = "";
    
    document.getElementById("wh1").innerHTML = "";
    document.getElementById("wh2").innerHTML = "";
    document.getElementById("wh3").innerHTML = "";
    document.getElementById("wh4").innerHTML = "";
    document.getElementById("wh5").innerHTML = "";

    document.getElementById("correctAns").innerHTML = "";

};


