class Book {
    constructor(title) {
        this._title = title;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }
}
const litllePrince = new Book("The litlle Prince");
console.log(litllePrince.title);
litllePrince.title = "Le Petit Prince";
console.log(litllePrince.title);

module.exports = Book;