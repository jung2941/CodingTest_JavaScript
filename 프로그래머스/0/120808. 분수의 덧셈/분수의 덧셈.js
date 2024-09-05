function solution(numer1, denom1, numer2, denom2) {
    
    var num = denom1*denom2;
    var denum = (denom1 * numer2) + (denom2 * numer1);
    
    var gcd = (p,q) => {
        if (q===0) return p;
        return gcd(q, p%q);
    }
    
    var g = gcd (denum, num);
    
    return [denum/g, num/g]
}