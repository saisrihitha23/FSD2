class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}
class Manager extends Employee {
    showDepartment() {
        console.log("Department:", this.department);
    }
}
let e = new Employee("Sai", 50000, "AI");
console.log(e.name);
e.display();
let m = new Manager("Rahul", 60000, "HR");
m.showDepartment();