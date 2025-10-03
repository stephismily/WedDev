function runCode(){
    let element = document.querySelector('#heading');
    console.log(element.tagName);

    document.querySelector("[name = 'note']").style.color = 'red';

    let paras = document.querySelectorAll("p");
    paras.forEach((para)=> {
        console.log(para.innerHTML);
    });

    document.getElementById("para1").id = 'firstPara';

    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = 'Grapes';
    ul.append(li);
}