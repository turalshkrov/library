import { Book } from "./modules/book.js";
import { BookTemplate } from "./modules/bookTemplate.js";

const inputModal = document.getElementById('input-modal')!;
const showInputBtn = document.getElementById('show-input-modal')!;
const addBookBtn = document.getElementById('add-book')!;
const container = document.getElementById('book-container')!;

const bookForm = document.getElementById('book-form') as HTMLFormElement;
const title = document.getElementById('title') as HTMLInputElement;
const author = document.getElementById('author') as HTMLInputElement;
const pages = document.getElementById('pages') as HTMLInputElement;
const isReaded = document.getElementById('isReaded') as HTMLInputElement;

let library: Book[] = [];

inputModal.addEventListener('shown.bs.modal', () => showInputBtn.click);


addBookBtn.addEventListener('click', (e) => {
  if (title.value !== "" && author.value !== "" && pages.value !== "") {
    addBookBtn.setAttribute("data-bs-dismiss", "modal");
  } 
  console.log(e.target);
  
})

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
})
