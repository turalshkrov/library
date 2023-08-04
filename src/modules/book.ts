export class Book {
  title: string;
  author: string;
  pages: number;
  isRead: boolean;
  id: string;

  constructor(title: string, author: string, pages: number, isReaded: boolean, id: string) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isReaded;
    this.id = id;
  }
}