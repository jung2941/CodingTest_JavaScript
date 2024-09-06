function solution(array) {
    
    let len = (array.length);
    const numbers = array.sort((a, b) => a - b);
    var num;
    
    //const num = Math.floor(len / 2)
    if (len%2===0)
        {num=Math.floor(len/2)-1}
    else
        {num=Math.floor(len/2)}
    
    const answer = numbers[num];
    return answer;
}