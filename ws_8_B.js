function runCode(){
    let lis = document.querySelectorAll("li");
    lis[0].style.fontWeight = 'bold';

    document.querySelector("p#para1").innerHTML += " Modified";

    for(let i=0;i<lis.length;i++){
        lis[i].style.background = 'lightgreen';
    }

    let paras = document.getElementsByClassName("intro");
    for(let i=0;i<paras.length;i++){
        console.log(paras[i].textContent);
    }
}