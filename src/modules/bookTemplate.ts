import { Book } from "./book.js";

export class BookTemplate {
  constructor(private container: HTMLElement) {}

  render(book: Book) {
    const tr = document.createElement('tr');
    const titleTh = document.createElement('th');
    const auhorTd = document.createElement('td');
    const pagesTd = document.createElement('td');
    const isReadTd = document.createElement('td');
    const removeTd = document.createElement('td');
    
    tr.id = book.id;
    titleTh.innerText = book.title;
    auhorTd.innerText = book.author;
    pagesTd.innerText = String(book.pages);
    isReadTd.innerText = book.isRead ? 'Yes' : 'No';
    removeTd.innerHTML = `<button class="btn btn-danger btn-sm delete">
                            Remove
                          </button>`;

    tr.appendChild(titleTh);
    tr.appendChild(auhorTd);
    tr.appendChild(pagesTd);
    tr.appendChild(isReadTd);
    tr.appendChild(removeTd);

    this.container.appendChild(tr);
  }
}