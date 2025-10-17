const appStorage = (function () {
    const memberKey = 'member';
    const bookKey = 'book';

    function getMember() {
        try {return JSON.parse(localStorage.getItem(memberKey)); } catch (e) { return null;}
    }

    function saveMember(userObj) {
        localStorage.setItem(memberKey, JSON.stringify(userObj));
    }

    function saveBook(arr) {
        localStorage.setItem(bookKey, JSON.stringify(arr));
    }

    function getBook() {
        try {return JSON.parse(localStorage.getItem(bookKey)) || [] ;} catch(e) {return [];}
    }

    function addBook(bk){
        const arr = getBook();
        arr.push(bk);
        saveBook(arr);
    }

    return{
        getMember, saveMember, getBook, saveBook, addBook
    };
})();

const appUI = (function () {
    function injectNavbar(){
        const navbarHtml =  `
            <nav class="navbar">
                <div style = "display: flex; align-items: center; gap: 12px;">
                <div class="brand">BookLending.com</div>
                    <div class="navLinks">
                        <a href="index.htm">Home</a>
                        <a href="member.htm">Members</a>
                        <a href="book.htm">Books</a>
                        <a href="summary.htm">Summary</a>
                    </div>
                </div>

                <div class="navRight">
                    <div id="userBadge" style="display: none"></div>
                </div>
            </nav>
        `;

        const container = document.getElementById('navbar');
        if (container) container.innerHTML = navbarHtml;

        const user = appStorage.getMember();
        if (user) updateInNavbar(user.name);

    }
    

    function updateInNavbar(name){
        const badge = document.getElementById("userBadge");
        if (!badge) return;
        if (name){
            badge.style.display = 'block';
            badge.textContent = name;
        }else{
            badge.style.display = 'none';
        }
    }

    function showToast(msg){
        const t = document.createElement('div');
        t.textContent = msg;
        t.style.position = 'fixed';
        t.style.right = '18px';
        t.style.bottom = '18px';
        t.style.background = 'rgba(10,90,220,0.95)';
        t.style.color = 'white';
        t.style.borderRadius = '10px';
        t.style.padding = '10px 14px';
        t.style.boxShadow = '0 6px 18px rgba(10,30,80,0.18)';
        t.style.zIndex = 9999;
        document.body.appendChild(t);
        setTimeout(()=> t.style.opacity = '0.0', 2200);
        setTimeout(()=> t.remove(), 2600);
    }

    return {
        updateInNavbar, showToast, injectNavbar
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    appUI.injectNavbar();
});