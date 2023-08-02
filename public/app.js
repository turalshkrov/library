"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputModal = document.getElementById('input-modal');
const showInputBtn = document.getElementById('show-input-modal');
const addBookBtn = document.getElementById('add-book');
const container = document.getElementById('book-container');
const bookForm = document.getElementById('book-form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const isReaded = document.getElementById('isReaded');
let library = [];
inputModal.addEventListener('shown.bs.modal', () => showInputBtn.click);
addBookBtn.addEventListener('click', (e) => {
    if (title.value !== "" && author.value !== "" && pages.value !== "") {
        addBookBtn.setAttribute("data-bs-dismiss", "modal");
    }
    console.log(e.target);
});
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
});
