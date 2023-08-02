import { Book } from "./modules/book.js";
import { BookTemplate } from "./modules/bookTemplate.js";

const container = document.getElementById('book-table-body')!;
const bookForm = document.getElementById('book-form') as HTMLFormElement;
const title = document.getElementById('title') as HTMLInputElement;
const author = document.getElementById('author') as HTMLInputElement;
const pages = document.getElementById('pages') as HTMLInputElement;
const isReaded = document.getElementById('isReaded') as HTMLInputElement;

let library: Book[] = [];
let idCounter = 0;

let bookTemplate = new BookTemplate(container);

bookForm.addEventListener('submit', (e) => {
  const book = new Book(title.value, author.value, pages.valueAsNumber, Boolean(isReaded.value), `${title.value[0]}${author.value[0]}${idCounter}`);
  idCounter += 1;
  bookTemplate.render(book);

  title.value = "";
  author.value = "";
  pages.value = "";

  e.preventDefault();
})
