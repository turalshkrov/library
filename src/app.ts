import { Book } from "./modules/book.js";
import { BookTemplate } from "./modules/bookTemplate.js";

const container = document.getElementById('book-table-body') as HTMLElement;
const bookForm = document.getElementById('book-form') as HTMLFormElement;
const title = document.getElementById('title') as HTMLInputElement;
const author = document.getElementById('author') as HTMLInputElement;
const pages = document.getElementById('pages') as HTMLInputElement;
const isRead = document.getElementById('isRead') as HTMLInputElement;

// @ts-ignore
let library: Book[] = JSON.parse(localStorage.getItem("library")) === null ? [] : JSON.parse(localStorage.getItem("library"));
let idCounter: number = library.length;

let bookTemplate = new BookTemplate(container);

library.map(book => bookTemplate.render(book));
let removeBtns: Element[] = [...document.querySelectorAll('.delete')];
removeBtns.map(btn => btn.addEventListener('click', e => removeFromLibrary(e)));

const addToLibrary: Function = (e: Event) => {  
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
  })
}

const removeFromLibrary: Function = (e: Event) => {
  if (!e.target) return;

  const eventTarget = e.target as HTMLButtonElement;
  const tr: HTMLElement = eventTarget.parentElement?.parentElement!;
  library = [...library.filter(book => book.id !== tr.id)];
  localStorage.setItem('library', JSON.stringify(library));

  tr.remove();
}


bookForm.addEventListener('submit', e => addToLibrary(e));