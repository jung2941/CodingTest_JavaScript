function solution(numbers) {
    var num = (numbers.length);
    var sum = 0;
    for (i=0; i<num; i++){
        sum= sum + numbers[i]
    }
    var answer = 0;
    answer = sum/num;
    return answer;
}