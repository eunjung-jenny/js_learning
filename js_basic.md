# 자바스크립트 언어 기본 - javascript

> 복습 겸 기초 다지기 겸 egoing 님의 강의 빠르게 듣기

## 1. 기본 문법

### 1-1. 기초 중의 기초

- `//` 한 줄 주석
- `/* ... */` 여러 줄 주석
- `;` 줄 나눔 표시



### 1-2. 데이터 다루기

- `typeof 데이터`

- 수: 정수, 실수
- 수의 연산: `+`,` -`, `*`, `/`, `//`, `%`, `Math.pow()`, `Math.round()`, `Math.ceil()`, `Math.floor()`, `Math.sqrt()`, `Math.random()` 등
- 문자: `"..."`
  - escape character `\`
- 문자의 연산: `+`, `String.length` 등

```javascript 
1 + 1 // 2
"1" + "1" // "11"
```

- boolean: `true` (또는 `1`), `false` (또는 `0`) 

  - `false` 와 동일한 데이터형: `""`, `undefined`, `null`, `NaN`
  - **python 과 달리 빈 배열, 빈 객체 등은 true 로 인식**
  - 논리연산자: `&&`, `||`

- 변수: `const`, `let`

- 대입연산자: `=`

- 비교연산자: `==`,  `!=`, `===`, `!==`, `>`, `>=`, `<`, `<=` 등

  - `==` 동등 연산자 (equal operator)
  - `===` 일치 연산자 (strict equal operator)
  - [`==` 과 `===` 의 차이점](http://dorey.github.io/JavaScript-Equality-Table/)

  ```javascript
  1 == 1 // true
  1 == "1" // true
  1 === 1 // true
  1 === "1" // false
  null == undefined // true
  null === undefined // false
  true == 1 // true
  true == 2 // false
  true === 1 //false
  true == "1" // true
  true === "1" //false
  0 === -0 // true
  NaN == NaN // false
  NaN === NaN // false
  ```

- 조건문:  `if () {...} else lif () {...} else {}`

- 반복문

  - `while () {...}`
  - `for () {...}`

```javascript
// while 문
let i = 0;
while(i < 10){
  console.log("Hello World!" + i);
  i += 1;
}

// for 문
for(let i = 0; i < 10; i++){
  console.log("Hello World!" + i);
}
```

- 반복문의 제어: `break`, `continue`

- 함수: 

  - `function 함수명(매개변수) {...}` & `함수명()`
  - `변수명 = function (매개변수) {...}` & `변수명()`
  - 익명함수: `(function 함수명(매개변수) {...})()`

- 배열: `let li = ["a", "b"]` or `const li2 = ["c", "d"]`

- 배열의 사용

  - 인덱싱 `li[0]`
  - 길이 `li.length`
  - 원소 추가
    - 마지막에 단일 원소 추가 `li.push("c")`
    - 마지막에 복수의 원소 추가 `li.concat(["d", "e"])`
    - 시작점에 단일/복수 원소 추가 `li.unshift("y", "z")`
    - 중간에 단일/복수 원소 추가 `li.splice(index, howmany, elements...)`
      - index부터 howmany 만큼의 원소를 제거하고 elements 들을 추가
  - 원소 제거
    - 첫번째 원소 제거 `li.shift()`
    - 마지막 원소 제거 `li.pop()`
  - 원소 정렬
    - `li.sort()`
    - `li.reverse()`
    - `li.sort(sortfunc)` : 개발자가 정의해 준 기준에 따라 정렬
  - 배열과 반복문

  ```javascript
  let names = ["jenny", "mikw"];
  for (const name in names) {
    console.log(name);
  }
  ```

  

- 객체 ~~(파이썬의 딕셔너리와 동일)~~ 

  - 객체의 `원소들은 **key-value** 쌍으로 존재`
  - 객체 생성
    - `let grades = {"a01": 1, "b01": 2}`
    - `let grades = {}` & `grades["a01"] = 1`
    - `let grades = new Object()` & `grades["a01"] = 1`
  - 객체 값 접근
    - `grades["a01"]`
    - `grades["a" + "01"]`
    - `grades.a01`
    - ~~`grades."a"+"01"`~~ (불가능)
  - 객체와 반복문

  ```javascript
  let grades = {"jenny": 10, "mike": 15};
  for (const key in grades) {
    console.log("key: " + key + " value: " +grades[key]);
  }
  ```

  - 객체의 활용

  ```javascript
  let obj = {
    "grades": {"jenny": 10, "mike": 15};
    // 값으로서의 함수
    "greeting": function(){
      console.log("Hello World!");
    },
    "show": function(){
      // this 는 해당 함수를 포함하고 있는 객체를 가리킴
      for (const name in this.grades){
        console.log(name, this.grades[name]);
      }
    }
  }
  
  obj["grades"]
  obj["grades"]["jenny"]
  obj["greeting"]()
  obj.show()
  ```

### 1-3. 추가사항

- 모듈

  - 자바스크립트에 모듈(module) 개념이 분명하게 존재하지는 않지만, 자바스크립트가 구동되는 환경을 의미하는 **호스트 환경**에 따라 서로 다른 모듈화 방법이 제공되고 있음
  - 웹 브라우저: html 문서 <head> 태그 내에 <script src="[자바스크립트 파일명]"></script> 을 통해 모듈화 구현
  - Node.js: `const a = require("파일명")` 또는 `import "파일명"`

- 라이브러리

  - 예: [jQuery](http://jquery.com), [jQuery 메뉴얼](http://api.jquery.com/)

    - jquery.js 다운로드

    ```html
    <head>
    	<script src="jquery.js"></script>
    </head>
    <body>
      <ul id="list">
        <li>empty</li>
        <li>empty</li>
        <li>empty</li>
      </ul>
      <input type="button" value="execute" id="execute_btn" />
      <script>
        // jquery는 $로 시작
        $("#execute_btn").click(function(){
          $("#list li").text("coding everybody");
        })
      </script>
    </body>
    ```

