import {Category} from "../enums";
import {Book} from "../intefaces";

export function purge<T> (inventory: Array<T>): Array<T> {
    return inventory.splice(2);
}

export function getAllBooks(): Array<Book> {
    let books: Array<Book> = [
        {id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        {id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript},
        {id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
        {id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript}
    ];
    return books;
}

export function logFirstAvailable(books: Array<any> = getAllBooks()): void {
    const numberOfBooks: number = books.length;
    let firstTitle: string = '';
    for (let book of books) {
        if (book.available) {
            firstTitle = book.title;
            break;
        }
    }
    console.log(`Number of books ${numberOfBooks}`);
    console.log(`First available book is ${firstTitle}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const titles: Array<string> = [];
    getAllBooks().forEach(book => {
        if (book.category === category) {
            titles.push(book.title);
        }
    });
    return titles;
}

export function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
}

export function getBookByID(id: number): Book | undefined {
    return getAllBooks().find(book => book.id === id);
}

export function createCustomerID(name: string, id: number): string {
    return name + id;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Name: ${name}`);
    if (age) {
        console.log(`Age: ${age}`);
    }
    if (city) {
        console.log(`City: ${city}`);
    }
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): Array<string> {
    const titles: Array<string> = [];
    bookIDs.forEach(id => {
        let book: any = getBookByID(id);
        if (book && book.available) {
            titles.push(book.title);
        }
    });
    console.log(`Checking out: ${customer}`);
    return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(value: any): string[] {
    let books = [];
    if (typeof value === 'string') {
        books = getAllBooks().filter(book => book.author == value);
    } else if (typeof value === 'boolean') {
        books = getAllBooks().filter(book => book.available == value);
    }
    return books.map(book => book.title);
}

export function printBook(book: Book) {
    console.log(`${book.title} by ${book.author}`);
}

export interface LibMgrCallback {
    (err: Error, titles: string[]) : void;
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
       try {
           const  titles: string[] = getBookTitlesByCategory(category);
           if (titles.length > 0) {
               callback(null, titles);
           } else {
               throw new Error('No books found');
           }
       } catch (error) {
           callback(error, null);
       }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]) {
    if (err) {
        console.log(`Error message ${err.message}`);
    } else {
        console.log(titles)
    }
}

export function getBooksByCategoryPromise(category: Category) : Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
                const  titles: string[] = getBookTitlesByCategory(category);
                if (titles.length > 0) {
                    resolve(titles);
                } else {
                    reject('No books found');
                }
        }, 2000);
    });
}

export async function logSearchResults(category: Category) {
    let foundBooks = await getBooksByCategoryPromise(category);
    console.log(foundBooks);
}