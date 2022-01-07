function check(){
    let x= parseInt(document.getElementById("age").value);
    if(x<0){
        document.getElementById("result").innerText="You don't even exist";
    }
    else if(x<=120){
        document.getElementById("result").innerText="Have a nice life";
    }
    else {
        document.getElementById("result").innerText="You really live that long huh?"
    }
}