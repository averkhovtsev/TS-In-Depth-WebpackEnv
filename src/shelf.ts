interface ShelfItem {
    title: string
}

export class Shelf<T extends ShelfItem> {
    _items: T[] = [];

    add(item: T):void {
        this._items.push(item);
    }

    getFirst(): T {
        return this._items[0];
    }

    find(title: string): T {
        return this._items.find(i=> i.title === title);
    }

    printTitles(): void {
        this._items.forEach(i=> console.log(i.title));
    }

}