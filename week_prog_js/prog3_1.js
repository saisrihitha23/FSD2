"use strict";
class Student {
    name;
    age;
    branch;
    constructor(name, age, branch) {
        this.name = name;
        this.age = age;
        this.branch = branch;
    }
    display() {
        console.log("Student Details");
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Branch: " + this.branch);
    }
}
let s1 = new Student("Sai", 20, "CSE");
s1.display();
