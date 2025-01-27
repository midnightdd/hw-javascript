// Клас Book
class Book {
    #title;
    #author;
    #isAvailable;

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
        this.#isAvailable = true; // Книга доступна за замовчуванням
    }

    getTitle() {
        return this.#title;
    }

    getAuthor() {
        return this.#author;
    }

    isAvailable() {
        return this.#isAvailable;
    }

    checkoutBook() {
        if (this.#isAvailable) {
            this.#isAvailable = false;
            return `Ви взяли книгу "${this.#title}" автора ${this.#author}.`;
        } else {
            return `Вибачте, "${this.#title}" недоступна.`;
        }
    }
}

// Клас Library
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    checkoutBook(title) {
        const book = this.books.find((b) => b.getTitle() === title);
        if (book) {
            console.log(book.checkoutBook());
        } else {
            console.log(`Книга "${title}" не знайдена у бібліотеці.`);
        }
    }

    viewAvailableBooks() {
        const availableBooks = this.books.filter((b) => b.isAvailable());
        if (availableBooks.length > 0) {
            console.log("Доступні книги:");
            availableBooks.forEach((book) =>
                console.log(`- "${book.getTitle()}" автора ${book.getAuthor()}`)
            );
        } else {
            console.log("Усі книги видані.");
        }
    }
}

// Приклад використання
const myLibrary = new Library();

const book1 = new Book("Контопська Відьма", "Григорій Квітка-Основ'яненко");
const book2 = new Book("1984", "Джордж Орвелл");
const book3 = new Book("Великий Гетсбі", "Ф. Скотт Фіцджеральд");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.viewAvailableBooks();
myLibrary.checkoutBook("1984");
myLibrary.viewAvailableBooks();
myLibrary.checkoutBook("1984");