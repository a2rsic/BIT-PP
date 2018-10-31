function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

Manager.prototype.getDepartment = function () {
    console.log(this.department);
}

Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
}

var pera = new Person("Pera", "Peric");
// console.log(pera);

var employee = new Employee("Zika", "Zikic", "programmer", 500);
// console.log(programmer);

var developer = new Developer("Mika", "Mikic", "programmer", 700, "JS");
console.log(developer);
developer.getSpecialization();

var manager = new Manager("Laza", "Lazic", "manager", 300, "sale manager");
// console.log(manager);



