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