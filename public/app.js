import { Book } from "./modules/book.js";
import { BookTemplate } from "./modules/bookTemplate.js";
const container = document.getElementById('book-table-body');
const bookForm = document.getElementById('book-form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const isRead = document.getElementById('isRead');
// @ts-ignore
let library = JSON.parse(localStorage.getItem("library")) === null ? [] : JSON.parse(localStorage.getItem("library"));
let idCounter = 0;
let bookTemplate = new BookTemplate(container);
library.map(book => bookTemplate.render(book));
let removeBtns = [...document.querySelectorAll('.delete')];
removeBtns.map(btn => btn.addEventListener('click', e => removeFromLibrary(e)));
const addToLibrary = (e) => {
    e.preventDefault();
    const book = new Book(title.value, author.value, pages.valueAsNumber, isRead.value === "Yes" ? true : false, `${title.value[0]}${author.value[0]}${idCounter}`);
    idCounter += 1;
    library.push(book);
    localStorage.setItem('library', JSON.stringify(library));
    bookTemplate.render(book);
    title.value = "";
    author.value = "";
    pages.value = "";
    removeBtns = [...document.querySelectorAll('.delete')];
    removeBtns.map(btn => {
        btn.addEventListener('click', (e) => removeFromLibrary(e));
    });
};
const removeFromLibrary = (e) => {
    var _a;
    if (!e.target)
        return;
    const eventTarget = e.target;
    const tr = (_a = eventTarget.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    library = [...library.filter(book => book.id !== tr.id)];
    localStorage.setItem('library', JSON.stringify(library));
    tr.remove();
};
bookForm.addEventListener('submit', e => addToLibrary(e));
