export abstract class Challenege {
    public static solution(M: number[], N: number) : number[] {
        M.sort(function (a, b){
            return a - b;
        })

        let left : number = 0
        let sum : number = 0
        let right :number = M.length - 1
        
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
}