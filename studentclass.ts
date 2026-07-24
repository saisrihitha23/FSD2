class Student {
    name: string;
    roll: number;
    constructor(name: string, roll: number) {
        this.name = name;
        this.roll = roll;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.roll);
    }
}
let s = new Student("Sai", 4568);
s.display();