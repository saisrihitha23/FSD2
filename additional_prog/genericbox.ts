class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log(this.value);
    }
}

let numBox = new Box<number>(100);
numBox.display();

let strBox = new Box<string>("Hello TypeScript");
strBox.display();

let boolBox = new Box<boolean>(true);
boolBox.display();