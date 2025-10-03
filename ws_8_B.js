function runCode(){
    //Use querySelector to select the first <li> in the list and make its text bold.
    let lis = document.querySelectorAll("li");
    lis[0].style.fontWeight = 'bold';

    //Use querySelector to select the paragraph with id para1 and append the text "(Modified)" to it.
    document.querySelector("p#para1").innerHTML += " Modified";

    //Use querySelectorAll to select all list items and change their text color to green.
    for(let i=0;i<lis.length;i++){
        lis[i].style.background = 'lightgreen';
    }

    //Use querySelectorAll to loop through all paragraphs with class intro and log their text content to the console.
    let paras = document.getElementsByClassName("intro");
    for(let i=0;i<paras.length;i++){
        console.log(paras[i].textContent);
    }
}