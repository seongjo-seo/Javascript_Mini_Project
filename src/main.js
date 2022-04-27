// Type Checking 동적으로 타입이 정의되는 언어이므로 실행때 타입을 확인한다. 컴파일을 거쳐가지 않기 때문에 미리 에러를 체킹하기 위한 방법이다.

// @ts-check <- 타입을 체크해주는 것이다. typescript를 설치하여 사용한다.
// Formatting : Linting, Type Checking
// Formatting : Prettier
// Linting : ESLint
// Type checking : TypeScript

function Person(name) {
  this.name = name
}

Person.prototype.greet = function greet() {
  return `Hi, ${this.name}!`
}

function Student(name) {
  this.__proto__.constructor(name)
}

Student.prototype.study = function study() {
  return `${this.name} is studying.`
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

console.log([] instanceof Array, [] instanceof Object)
