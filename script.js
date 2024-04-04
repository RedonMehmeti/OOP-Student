// function Student(name, surname, age){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }
// Student.prototype.displayDetails = function(){
//     console.log("Emri:" + this.name);
//     console.log("Mbiemri:" + this.surname);
//     console.log("Vjet:" + this.age);
// }

// function Ditari(){
//     this.Students = [];
// }

// Ditari.prototype.addStudent = function(Students){
//     this.Students.push(Students);
// }
// Ditari.prototype.displayStudents = function (){
//  console.log("Nxenesit qe jane prezent ne klas:");
//  for(var i = 0; i < this.Students.length; i++){
//     this.Students[i].displayDetails();
//  }
// }

// var Students1 = new Student("Redoni", "Mehmeti", "17")
// var Students2 = new Student("Yll", "Gajtani", "15")

// var Ditari = new Ditari();

// Ditari.addStudent(Students1)
// Ditari.addStudent(Students2)

// Ditari.displayStudents();


function Student(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}

Student.prototype.displayDetails = function(){
    console.log("Emri:" + this.name);
    console.log("Mbiemri:" + this.surname);
    console.log("Vjet:" + this.age);
}

function Ditari(){
    this.Students = [];
}

Ditari.prototype.addStudent = function(student){
    this.Students.push(student);
}

Ditari.prototype.removeStudent = function(studentName){
    this.Students = this.Students.filter(function(student){
        return student.name !== studentName;
    });
}

Ditari.prototype.displayStudents = function(){
    console.log("Nxenesit qe jane prezent ne klas:");
    for(var i = 0; i < this.Students.length; i++){
        this.Students[i].displayDetails();
    }
}

var Students1 = new Student("Redoni", "Mehmeti", "17");
var Students2 = new Student("Yll", "Gajtani", "15");

var DitariObject = new Ditari();

DitariObject.addStudent(Students1);
DitariObject.addStudent(Students2);

DitariObject.displayStudents();

// Remove a student
DitariObject.removeStudent("Redoni");

console.log("After removing Redoni:");
DitariObject.displayStudents();
