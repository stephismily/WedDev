function runCode(){
    //Use querySelector("#heading") and print its tag name in the console.
    let element = document.querySelector('#heading');
    console.log(element.tagName);

    //Use document.querySelector("[name='note']") to select the paragraph with name "note" and set its text color to red.
    document.querySelector("[name = 'note']").style.color = 'red';

    //Use querySelectorAll("p") and log the innerHTML of each paragraph.
    let paras = document.querySelectorAll("p");
    paras.forEach((para)=> {
        console.log(para.innerHTML);
    });

    //Use getElementById("para1") and change its id to "firstPara".
    document.getElementById("para1").id = 'firstPara';

    //Use querySelector("ul") to add a new list item <li>Grapes</li> at the end of the list.
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = 'Grapes';
    ul.append(li);
}