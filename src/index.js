// 사용하지 않는 변수 선언 (no-unused-vars)
const unusedVariable = 'unused';

// 세미콜론 누락 (semi)
const greeting = 'Hello World'

// 일관성 없는 들여쓰기 (indent)
function badFunction() {
   const x = 1
  return x;
}

// 선언되지 않은 변수 사용 (no-undef)
console.log(undefinedVariable);

// 일관성 없는 따옴표 사용 (quotes)
const string1 = "double quotes"
const string2 = 'single quotes'

// 불필요한 공백 (no-trailing-spaces)
const space =    'too many spaces'    

// var 사용 (no-var)
var oldVariable = 'old'; 

// 전역 변수 마구 사용
var     globalVar1    =      "이상한 공백"   ;
  var     globalVar2='띄어쓰기 무시'
var     globalVar3="따옴표 혼용";

// 이상한 함수 선언
function         weirdFunction(   ){
    var a=1
  var     b    =   2
      var         c=3
return         a+b+c
};;;;;;;;;

// 무의미한 중첩 if문
if(true){
if(true){
if(true){
if(true){
console.log('너무 깊은 중첩');
}}}}

// 선언 안된 변수들 마구 사용
someUndefinedVar1 = "전역 오염"
someUndefinedVar2 = '전역 오염2'

// 이상한 비교 연산자
if (someValue == null) {
  if(otherValue == undefined) {
    if(thirdValue!=null){}}

// 사용하지 않는 변수들
const unused1 = 1;
const unused2 = 2;
const unused3 = 3;

// 일관성 없는 들여쓰기와 세미콜론
function   badIndentation(){
const x=1
    const y=2
        const z=3
    return x+y+z} 