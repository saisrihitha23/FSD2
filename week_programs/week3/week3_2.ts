//class implementation with access modifiers
class Student {
    public name: string;
    private age: number;
    protected branch: string;

    constructor(name: string, age: number, branch: string) {
        this.name = name;
        this.age = age;
        this.branch = branch;
    }

    display(): void {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Branch: " + this.branch);
    }
}

let s1 = new Student("Sai Srihitha", 20, "AIDS");
s1.display();