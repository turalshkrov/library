import { Book } from "./book.js";

export class BookTemplate {
  constructor(private container: HTMLDivElement) {}

  render(book: Book) {
    const bookItem = document.createElement('div') as HTMLDivElement;
    bookItem.className = "book-item col-12 col-md-6 col-lg-4";
    bookItem.id = book.id;
    bookItem.innerHTML = `
    <div class="card shadow">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <h6 class="card-text">${book.author}</h6>
        <h6 class="card-text">${book.pages}</h6>
        <button class="btn ${book.isReaded ? "btn-success" : "btn-secondary"} col-12 mt-3">
          ${book.isReaded ? '<i class="bi bi-check2"></i>' : "Not"}
          Readed
        </button>
        <button class="btn btn-danger col-12 mt-3 delete-book">
          <i class="bi bi-trash"></i>
          Remove
        </button>
      </div>
    </div>`;

    this.container.appendChild(bookItem);
  }
}