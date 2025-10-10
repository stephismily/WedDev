function runCode() {
    //Use getElementById to change the text of the <h2> heading to "DOM Lab in Progress".
    document.getElementById("heading").innerHTML='DOM Lab in Progress.';

    //Use getElementsByClassName to change the text color of all paragraphs with class intro to blue.
    let intros = document.getElementsByClassName("intro");
    for(let i=0;i<intros.length;i++){
        intros[i].style.color = "blue";
    }

    //Use getElementsByTagName to count all <p> elements and display the total in #output.
    let tagPs = document.getElementsByTagName("p");
    document.querySelector("#output").value=tagPs.length;

    //Use getElementsByName to change the background color of the <p> with name="note".
    let notes = document.getElementsByName("note");
    for(let i=0;i<notes.length;i++){
        notes[i].style.background = "lightpink";
    }
}