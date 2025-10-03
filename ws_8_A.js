function runCode() {
    document.getElementById("heading").innerHTML='DOM Lab in Progress.';

    let intros = document.getElementsByClassName("intro");
    for(let i=0;i<intros.length;i++){
        intros[i].style.color = "blue";
    }

    let tagPs = document.getElementsByTagName("p");
    document.querySelector("#output").value=tagPs.length;
    
    let notes = document.getElementsByName("note");
    for(let i=0;i<notes.length;i++){
        notes[i].style.background = "lightpink";
    }
}