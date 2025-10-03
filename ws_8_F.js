function runCode(){
    //Use querySelectorAll(".intro") to count how many intro paragraphs exist and display the count in the #output div.
    let intros = document.querySelectorAll(".intro");
    document.getElementById("output").value = intros.length;

    //Add an input box where a user can type a tag name (e.g., p or li). On pressing a button, display how many such elements are in the document. (Hint: getElementsByTagName).
    let choice = document.getElementById("input").value.trim();
    let choices = document.getElementsByTagName(choice);
    document.querySelector("#output").value = choices.length;

    //Use querySelector("h2") to toggle the heading’s color between red and black every time it’s clicked.
    let head = document.querySelector("h2");
    head.onclick = function() {
        if (head.style.color === "red") {
            head.style.color = "black";
        } else {
            head.style.color = "red";
        }
    }
}