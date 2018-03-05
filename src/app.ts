import {Book, Logger, Author, Librarian, Magazine} from './intefaces';
import {Category} from "./enums";
import {UniversityLibrarian, ReferenceItem} from './classes';
import {Encyclopedia as RefItem} from "./encyclopedia";
import {
    createCustomerID, getBooksByCategory, getBooksByCategoryPromise, getBookTitlesByCategory, getTitles, logCategorySearch, logSearchResults,
    purge
} from './lib/utility-functions';
import {Shelf} from "./shelf";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 1

// logFirstAvailable(getAllBooks());

// Task 2
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// Task 3

// getBookByID(2);

// Task 4

const myID = createCustomerID('Ann', 10);
// console.log(`My id: ${myID}`);

let IdGenerator: (name: string, id: number) => string = (name, id) => name + id;

IdGenerator = createCustomerID;
// console.log(IdGenerator('Ivan', 4));

// Task 5

// createCustomer('Andrii', 20, 'Kyiv');
// createCustomer('Andrii', 20);
// createCustomer('Andrii');
// logBookTitles(getBookTitlesByCategory());
// logFirstAvailable();


// const titles: Array<string> = checkoutBooks('Ann', 1, 2, 3);
// titles.forEach(title => console.log(`${title}`));

//Task 06. Function Overloading


const checkedOutBooks = getTitles(false);
// checkedOutBooks.forEach(title => console.log(title));

//Task 07. Defining an Interface


const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};

// printBook(myBook);
// myBook.markDamaged('missing back cover');

//Task 08. Defining an Interface for Function Types

const logDamage: Logger = (value) => console.log(value);
// logDamage('Damage!!');

// Task 09. Extending Interface

const favoriteAuthor: Author = {name: 'Dima', email: 'email', numBooksPublished: 1};
// const favoriteLibrarian: Librarian = {name: 'Dima', email: 'email', department:'A', assistCustomer: custName => console.log(`Assisting: ${custName}`)};

// Task 10. Interfaces for Class Types

const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Jack';
// favoriteLibrarian.assistCustomer('Joe');

// Task 11. Creating and Using Classes

// const ref: ReferenceItem = new ReferenceItem('My title', 2013);
// ref.printItem();
// ref.publisher = 'vasya';
// console.log(ref.publisher);


// Task 12. Extending Classes

const refBook: RefItem = new RefItem('Big', 1998, 4);
// refBook.printItem();


// Task 13. Creating Abstract Classes
// refBook.printCitation();

// Task 17. Generic Functions
const inventory =
    [
        {id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software},
        {id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software},
        {id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software},
        {id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software}
    ];

// console.log(purge(inventory));
// console.log(purge([1, 2, 3, 4, 5]));

// Task 18. Generic Interfaces and Classes

const bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(i => bookShelf.add(i));
// console.log(bookShelf.getFirst());

const magazines =
    [
        { title: 'Programming Language Monthly', publisher: 'Code Mags' },
        { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
        { title: 'Five Points', publisher: 'GSU' }
    ];

const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(i => magazineShelf.add(i));
// console.log(magazineShelf.getFirst());


// Task 19. Generic Constraints

magazineShelf.printTitles();
// console.log(bookShelf.find('Code Complete'));

// Task 20.1. Class Decorators
// Task 20.2. Class Decorators that replace constructor functions
// Task 21. Method Decorator

// Task 22. Callback Functions
// console.log("Start..");
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log("End..");

// Task 23. Promises

// console.log("Start..");
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(numOfBooks => console.log(numOfBooks))
//     .catch(err=> console.log(`Error: ${err}`));
//
// console.log("End..");

// Task 24. Async/await

console.log('Beginning search...');
logSearchResults(Category.JavaScript)
    .catch(reason => console.log(reason));
console.log('Search submitted...');



// ``












