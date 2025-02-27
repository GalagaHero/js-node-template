const student = {
	name: "Alex",
	course: "Web Development",
	grade: 85,
	displayInfo() {
		return `${this.name} is taking ${this.course} and expects to earn ${this.grade}`;
	},
};

console.log(student.displayInfo());

// --------------------------------------------------------

const student1 = {
	name: "Sarah",
	course: "JavaScript",
	grade: 95,
};
const student2 = {
	name: "John",
	course: "Python",
	grade: 88,
};
const student3 = {
	name: "Alice",
	course: "C++",
	grade: 92,
};
function displayStudentInfo(student) {
	return `${student.name} is taking ${student.course} and expects to earn ${student.grade}%.`;
}

console.log(displayStudentInfo(student1));
console.log(displayStudentInfo(student2));
console.log(displayStudentInfo(student3));

// --------------------------------------------------------

function displayStudentInfo2(name, course, grade) {
	return `${name} is taking ${course} and expects to earn ${grade}%.`;
}

console.log(displayStudentInfo2("Sarah", "JavaScript", 95));
console.log(displayStudentInfo2("John", "Python", 88));
console.log(displayStudentInfo2("Alice", "C++", 92));

// --------------------------------------------------------

function addTwoNumbers(x, y) {
	return x + y;
}

const sum = addTwoNumbers(200, 300);
console.log(sum);
