// Generic class

class Box<T> {

    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    public showItem(): T {
        return this.item;
    }

    public updateItem(newItem: T): void {
        this.item = newItem;
        console.log("Item updated successfully");
    }
}

// Number
const numberBox = new Box<number>(50);
console.log(numberBox.showItem());

numberBox.updateItem(100);
console.log(numberBox.showItem());


// String
const nameBox = new Box<string>("Sai");
console.log(nameBox.showItem());

nameBox.updateItem("Srihitha");
console.log(nameBox.showItem());


// Array
const marksBox = new Box<number[]>([85, 90, 95]);
console.log(marksBox.showItem());

marksBox.updateItem([90, 92, 98]);
console.log(marksBox.showItem());