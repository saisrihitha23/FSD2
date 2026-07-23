"use strict";
class Student {
    rollNo;
    name;
    static college = "SVECW";
    constructor(rollNo, name) {
        this.rollNo = rollNo;
        this.name = name;
    }
    display() {
        console.log("Student Details");
        console.log("Roll No: " + this.rollNo);
        console.log("Name: " + this.name);
        console.log("College: " + Student.college);
    }
}
let s1 = new Student(4568, "Sai");
s1.display();
