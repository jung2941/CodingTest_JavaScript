function solution(age) {
    var answer = '';
    var ageStr = age.toString();
    for (var i = 0; i < ageStr.length; i++) {
        var char = String.fromCharCode(97 + parseInt(ageStr[i]));
        answer += char;
    }
    return answer;
}