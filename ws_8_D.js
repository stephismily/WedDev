function runCode(){
    //Use querySelector("ul li:last-child") to select the last list item and change its text to "Orange".
    document.querySelector("ul li:last-child").innerHTML = 'Orange';

    //Use querySelectorAll(".item") to add numbers before each fruit name (1. Apple, 2. Banana, etc.).
    let items = document.querySelectorAll(".item");
    items.forEach(function(item,i){
        item.textContent = `${i+1}. ${item.textContent}`;
    });

    //Use getElementsByTagName("p") to hide the second paragraph (hint: style.display = "none").
    document.getElementsByTagName("p")[2].style.display = 'none';

    //Use querySelector("p.intro") to underline only the first paragraph with class intro.
    document.querySelector("p.intro").style.textDecoration = 'underline';

    //Use querySelector("p.intro") to underline only the first paragraph with class intro.
    for(let i=0;i<items.length;i++){
        items[i].style.background = 'lightyellow';
    }
}