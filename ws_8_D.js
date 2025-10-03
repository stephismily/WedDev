function runCode(){
    document.querySelector("ul li:last-child").innerHTML = 'Orange';

    let items = document.querySelectorAll(".item");
    items.forEach(function(item,i){
        item.textContent = `${i+1}. ${item.textContent}`;
    });

    document.getElementsByTagName("p")[2].style.display = 'none';

    document.querySelector("p.intro").style.textDecoration = 'underline';

    for(let i=0;i<items.length;i++){
        items[i].style.background = 'lightyellow';
    }
}