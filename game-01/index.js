(function main() {
    console.log(`this should return : ${solution([2,3,8,14,0], 10)}`)
    console.log(`this should return : ${solution([2,3,8,14,0], 17)}`)
    console.log(`this should return : ${solution([2,3,8,14,0], 9)}`)
    console.log(`this should return : ${solution([2,3,8,14,0], 1)}`)
    console.log(`this should return : ${solution([2,2,2,2,2], 4)}`)
    console.log(`this should return : ${solution([2,3,8,14,0], 18)}`)
    console.log(`this should return : ${solution([30,21,59,32,2,1,2,45,60,2,10,1,20,3], 22)}`)
})()

function solution(M, N) {
    M.sort(function (a, b){
        return a - b;
    })
    
    let left = 0
    let right = M.length - 1;
    var sum;

    while (left < right) {
        sum = M[left] + M[right]
        if (sum == N)
            return [M[left], M[right]];
        else if (sum < N)
            left++;
        else
            right--; 
    }

    return []
}