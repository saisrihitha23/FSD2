// Returns the last element
function lastItem<T>(items: T[]): T {
    return items[items.length - 1];
}

// Wraps an item with its ID
function wrapItem<T>(item: T): { data: T, id: number } {
    return {
        data: item,
        id: Math.floor(Math.random() * 1000)
    };
}

// Strings
let names = ["Sai", "Harshi", "Asii"];

console.log(lastItem(names));

// Numbers
let marks = [80, 90, 95];

console.log(lastItem(marks));

// Objects
interface Student {
    name: string;
    age: number;
}

const student: Student = {
    name: "Sai Srihitha",
    age: 20
};

const wrappedStudent = wrapItem(student);

console.log(wrappedStudent.data.name);
console.log(wrappedStudent.id);