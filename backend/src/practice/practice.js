function asr(arr, s, memo={}) {
    // console.log(memo);
    if(s in memo) {
        console.log('found');
        return memo[s];
    }
    if(s<0) {
        memo[s] = [];
        return memo[s];
    }
    if(s===0) {
        memo[s] = [[]];
        return memo[s];
    }
    let ans=[];
    for(const sum of arr) {
        let rem = s-sum;
        if(rem>=0){            
            let returnedValue = memo[rem] || asr(arr, rem, memo);
            memo[rem] = returnedValue;
            if(returnedValue) {
                ans = [...ans, ...returnedValue.map(val=>[sum, ...val])];
            }
        }
    }
    memo[s] = ans;
    return memo[s];
}

let arr = [3,4,5,8,20,45,200,43,56];

let s = 90;
let memo={};
console.log(asr(arr, s, memo));
console.log(memo);