# Typescript

> - 노마드아카데미의 무료 강의 '[Typescript](https://academy.nomadcoders.co/p/build-a-blockchain-with-typescript)로 블록체인 만들기' 강의 내용
>
> - (poiemaweb: typescript)[https://poiemaweb.com/typescript-class]

## 1. Typescript?

- JS 의 superset
  - 자바스크립트로 트랜스파일링
- TS 사용 이유?
  - 동적 타입 언어 (JS) -> 정적 타입 언어 (TS): **어떤 자료형을 입력/반환 하게 될 것인지 명시적으로 지정**
    - JS 특유의 장점이기도 한 유연성은 큰 프로젝트, 팀 단위 작업, 버그 최소화 등의 관점에서 단점이 됨
    - TS 는 JS 의 이런 단점을 보완

```js
function sum(a, b) {
  return a + b;
}

sum('x', 'y'); // 'xy'
```

```typescript
function sum(a: number, b: number): number {
  return a + b;
}

sum('x', 'y') // error
```

## 2. 환경설정

```bash
$ npm install -g typescript
$ tsc -v
$ tsc [ts 파일명] # 해당 파일 트랜스파일링
$ tsc --init # config 파일 tsconfig.json 생성
$ tsc # config 파일 생성 후에는 파일명 작성하지 않음 (작성하면 config 무시됨)
$ tsc --w

$ npm install tsc-watch --dev
```

- [트랜스파일링 옵션](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

```json
// tsconfig.json

{
  "compilerOptions": {
    "module": "commonjs", // 모듈 (?)
    "target": "ES2015", // 사용한 ECMAScript 버전
    "moduleResolution": "node", // 모듈 해석 방식 (?)
    "sourceMap": true, // .map 파일 생성 (트랜스파일링 매핑)
    "outDir": "dist", // 트랜스파일링 결과물 저장 경로
  },
  "include": ["src/**/*"], // 트랜스파일링 대상
  "exclude": ["node_modules"] // 트랜스파일링 비대상
}
```

- 명령어 옵션

```json
// package.json

"scripts": {
    "start": "tsc-watch --onSuccess \"node dist/index.js\" "
  },
```



## 3. 타입

- **변수의 자료형**, **함수 파라미터의 자료형**, **함수 반환값**의 자료형을 선언

```typescript
const isGood: boolean = true;
const n: number = 1;
const word: string = "apple";
const n: null = null;
const u: undefined = undefined;
const obj: object = {};
const nums: number[] = [1, 2, 3];
const words: string[] = ["hi", "bye"];
const whatever: any[] = [1, "hi", true];

let tuple: [string, number];
tuple = ['hi', 1]; // ok
tuple = [1, 'hi']; // error

function sayHi(): void {
  console.log("Hi");
}

function error(msg: string): never {
  throw new Error(msg);
}

// 아래 예제는 객체의 유형을 타입으로 활용
const today: Date = new Date() 

const elem: HTMLElement = document.querySelector('ul')

class Person {}
const person: Person = new Person()
```

### 클래스

```javascript
// JS: 클래스 내부에 프로퍼티 선언 불가
class Human {
  constructor(name){
    this.name = name;
  }
}
```

```typescript
// TS: 클래스 내부에 프로퍼티를 자료형과 함께 먼저 선언
// 접근 제한자 (public, protected, private) 지원
class Human {
  public name: string;
  protected gender: string;
  private age: number;
  
  constructor(name: string) {
    this.name = name;
  }
}
```

![image-20200513234725983](/Users/eunjung/Library/Application Support/typora-user-images/image-20200513234725983.png)

```typescript
// TS: readonly & static
class Foo {
  private readonly MAX_NUM: number = 5; // readonly 가 선언된 프로퍼티는 재할당 불가
  static instanceCounter: number = 0; // static 프로퍼티
  static staticMethod() {
    console.log("staticMethod");
  }
  constructor() {
   this.instanceCounter++;
  }
}
```

```typescript
// TS: 추상클래스 - 하나 이상의 추상 메소드(내용 없이 메소드 이름과 타입만 선언)를 포함, 인스턴스 생성이 불가하고 상속만을 위해 사용되며, 이를 상속한 클래스는 추상 메소드를 반드시 구현하여야 함
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("move move");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('bowwow~')
  }
}

```

### 인터페이스

- 모든 메소드가 추상 메소드이지만 abstract 키워드를 사용하지 않음, 인스턴스 생성 불가
- 변수가 인터페이스와 **정확히 일치하지 않아도** 인터페이스에서 정의해 둔 프로퍼티를 **포함**하고 있으면 해당 변수는 인터페이스에 부합하는 것으로 인정됨
- 인터페이스간 상속 가능 (복수 상속 가능), 클래스 상속 가능

```typescript
// 객체
interface Human {
  name: string;
  age: number;
  gender?: string;
  greeting(): void;
}

const person: Human = {
  name: "jenny";
  age: 19;
  gender: "female";
}

const sayHi = (person: Human): void => {
  console.log(`Hello ${person.name}!`);
}

// 함수
interface cubeNum {
  (num: number): number;
}

// 인터페이스를 구현하는 클래스
class student implements Human {
  constructor(
  	public id: number,
    public name: "jay",
    public age: 15,
  ){ } // 자동으로 초기화 가능
  greeting() {
    console.log("Good morning!")
  }
}
```

### 타입 앨리어스 (alias)

- extends, implements 불가능

```typescript
type MyFunc = [string, number]
```

### 제네릭

- 선언 시점이 아니라 생성 시점에 타입을 명시

```typescript
// 클래스
class Queue<T> {
	protected data: Array<T> = [];
	push(item: T) {
		this.data.push(item)
	}
	pop(): T {
		return this.data.shift();
	}
}

const numberQueue = new Queue<number>();

const stringQueue = new Queue<{name: string, age: number}>();
```

```typescript
// 함수 : 인수의 타입에 의해 매개변수의 타입 결정
function reverse<t>(items: T[]): T[] {
	return itmes.reverse();
}
```

