function runCode(){
    //Use querySelectorAll(".intro") to count how many intro paragraphs exist and display the count in the #output div.
    let intros = document.querySelectorAll(".intro");
    document.getElementById("output").value = intros.length;

     //Add an input box where a user can type a tag name (e.g., p or li). On pressing a button, display how many such elements are in the document. (Hint: getElementsByTagName).
    let choice = document.getElementById("input").value;
    let choices = document.querySelectorAll('choice');
    document.querySelector("#output").value = choices.length;
}