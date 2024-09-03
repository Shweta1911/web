class Student {
    constructor(rollNumber, name, className, fees) {
        this.rollNumber = rollNumber;
        this.name = name;
        this.className = className;
        this.fees = fees;
    }
    displayInfo() {
        console.log(`Roll Number: ${this.rollNumber}, Name: ${this.name}, Class: ${this.className}, Fees: ${this.fees}`);
    }
}
class School {
    constructor() {
        this.classes = new Set();
        this.classes = new Set();
        this.students = [];
    }
    showAllClasses() {
        console.log("All Classes:");
        this.classes.forEach(className => console.log(className));
    }
    admitStudent(rollNumber, name, className, fees) {
        const newStudent = new Student(rollNumber, name, className, fees);
        this.students.push(newStudent);
        this.classes.add(className);
        console.log("Student admitted successfully!");
    }
    searchStudent(choice) {
        switch (choice) {
            case 1:
                this.searchById();
                break;
            case 2:
                this.searchByName();
                break;
        }
    }
    searchById() {
        const rollNumber = prompt("Please enter roll number of student which you want");
        const stud = this.students.filter(x => x.rollNumber === rollNumber);
        stud.forEach(x => x.displayInfo());
    }
    searchByName() {
        const name1 = prompt("Please enter name of student which you want");
        console.log(this.students.filter(x => x.name === name1));
    }
    showStudentsOfClass(className) {
        const studentsOfClass = this.students.filter(student => student.className === className);
        if (studentsOfClass.length === 0) {
            console.log(`No students in Class ${className}.`);
        }
        else {
            console.log(`Students in Class ${className}:`);
            studentsOfClass.forEach(student => student.displayInfo());
        }
    }
    deleteStudent(rollNumber) {
        let index = -1;
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].rollNumber === rollNumber) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.students.splice(index, 1);
            console.log("Student deleted successfully!");
            console.log("Deleted Student Information:");
        }
        else {
            console.log("Student not found with the provided Roll Number.");
        }
    }
    printFeesCollection() {
        const totalFees = this.students.reduce((sum, student) => sum + student.fees, 0);
        console.log(`Total Fees Collection: ${totalFees}`);
    }
}
const school = new School();
school.admitStudent('2010043', "Shweta", "IT", 500000);
school.admitStudent('2003033', "Tabassum", "CSE", 200000);
school.printFeesCollection();
school.showStudentsOfClass("CSE");
school.showAllClasses();
school.searchStudent(1);
school.deleteStudent('2003033');
school.showStudentsOfClass("IT");
