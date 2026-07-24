class Student {
    readonly id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log("Student ID:", this.id);
        console.log("Name:", this.name);
    }
}
let s = new Student(4568, "Sai Srihitha");
s.display();