//class implementation with constructors
    name: string;
    age: number;
    branch: string;

    constructor(name: string, age: number, branch: string) {
        this.name = name;
        this.age = age;
        this.branch = branch;
    }

    display(): void {
        console.log("Student Details");
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Branch: " + this.branch);
    }
}

let s1 = new Student("Sai Srihitha", 20, "AIDS");
s1.display();