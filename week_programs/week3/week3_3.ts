//read only and static properties 
class Student {
    readonly rollNo: number;
    name: string;
    static college: string = "SVECW";

    constructor(rollNo: number, name: string) {
        this.rollNo = rollNo;
        this.name = name;
    }

    display(): void {
        console.log("Student Details");
        console.log("Roll No: " + this.rollNo);
        console.log("Name: " + this.name);
        console.log("College: " + Student.college);
    }
}

let s1 = new Student(4568, "Sai Srihitha");
s1.display();