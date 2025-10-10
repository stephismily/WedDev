function runCode(){
    let paras = document.querySelectorAll('p');
    paras.forEach((p)=> {
        let currentSize = window.getComputedStyle(p).fontSize;
        let newSize = parseInt(currentSize) + 2 + 'px';
        p.style.fontSize = newSize;
    });
}