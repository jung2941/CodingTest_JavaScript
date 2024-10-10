function solution(n, k) {
    var count = parseInt(n/10);
    // if (count>0 && k>0){
    //     num=k-count;
    // }
    var answer = 12000*n + 2000*k - count*2000;
    return answer;
}