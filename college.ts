class Student {
    static collegeName: string = "Shri Vishnu Engineering College";
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    static displayCollege() {
        console.log("College:", Student.collegeName);
    }
}
let s = new Student("Sai Srihitha");
console.log("Name:", s.name);
Student.displayCollege();