function solution(numbers, num1, num2) {
    var answer = [];
    var i = 0;
    for (i=num1; i<num2+1; i++){
        answer.push(numbers[i]);
    }
    return answer;
}