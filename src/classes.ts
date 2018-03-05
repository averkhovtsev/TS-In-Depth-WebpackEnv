import * as Interfaces from './intefaces';
import {logger, sealed, writable} from "./decorators";

@logger
@sealed('UniversityLibrarian')
class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer (custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty () {
        console.log('Assisting Faculty');
    }

    @writable(false)
    teachCommunity () {
        console.log('Teaching community');
    }
}
abstract class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(aTitle: string, aYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = aTitle;
    //     this.year = aYear;
    // }
    static department: string = 'B';
    private _publisher: string;
    constructor(public title: string, protected year: number){}

    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(p: string) {
        this._publisher = p;
    }
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}. Department: ${ReferenceItem.department}.`);
    }
    abstract printCitation(): void;
}

export {UniversityLibrarian, ReferenceItem};