
// groupanagrams

// var x = ["eat", "tea", "tan", "ate", "nat", "bat"];


// function groupAnagrams(strs){
//     let cache = {};
//     for( let str of strs){
//        let sortedkey = str.split("").sort().join("");
//         (!cache[sortedkey] ? cache[sortedkey] = [str] : cache[sortedkey].push(str))
       
//     }
//     return Object.values(cache)
// }


// console.log(groupAnagrams(x));




// N- QUEENS


// var solveNQueens = function(n){
//     if(n.length === 1 ){
//             return[["Q"]];
//     }

//     let col = new Set();
//     let posDig = new Set();
//     let negDig = new Set();

//     let res = [];
//     let board = Array.from(Array(n), ()=> new Array(n).fill("."));
//     const isValid = (r,c)=> !(col.has(c)|| posDig.has(r+c)|| negDig.has(r-c))

//     const addQueen = (r,c) => {
//         col.add(c);
//         posDig.add(r+c);
//         negDig.add(r-c);
//         board[r][c] = "Q";


//     }


// const removeQueen = (r,c) => {
//     col.delete(c);
//     posDig.delete(r+c);
//     negDig.delete(r-c);
//     board[r][c] = "."

// }

// function recurse(row){

//     if(row === n){
//         res.push([...board].map((row)=>row.join("")))
//     }
//     for(let col = 0; col < n; col++){
//         if(isValid(row,col)){
//             addQueen(row,col)
//             recurse(row+1)
//             removeQueen(row,col);

//         }
//     }
// }
// recurse(0);
// return res
// }






// var totalNQueens = function(n){


    
//     let col = new Set();
//     let posDig = new Set();
//     let negDig = new Set();

//     let count = 0;
//     const isValid = (r,c)=> !(col.has(c)|| posDig.has(r+c)|| negDig.has(r-c))


//     const addQueen = (r,c) => {
//         col.add(c);
//         posDig.add(r+c);
//         negDig.add(r-c);
       

//     }


//     const removeQueen = (r,c) => {
//         col.delete(c);
//         posDig.delete(r+c);
//         negDig.delete(r-c);
  
    
//     }



//     function recurse(row){
//         if(row=== n){
//             count++
//         }
//         for(let col = 0; col <n; col++){
//             if(isValid(row,col)){
//                 addQueen(row,col);
//                 count = recurse(row+1, count);
//                 removeQueen(row,col);
//             }
//         }
//         return count;
//     }
//     return recurse(0);

// }





// const result = [intervals[0]]
// var sorted = intervals.sort((a,b)=>{
//     return a[0]-b[0]
// })

// for(let interval of intervals){
   
// }
// console.log(intervals);
// console.log(intervals[0]);
// let e1 = result[result.length-1][1]
// console.log(e1);


// let intervals = [[18,3], [4,6], [2,1], [15,18]]

// var merge = function(intervals){
//     intervals.sort((a,b)=>{
//        return a[0] - b[0];
//     })

//     const result = [intervals[0]];
    
//     let e1 = result[result.length-1][1]
  


// for( let interval of intervals){
//     let e1 = result[result.length-1][1]
//     let s2 = interval[0];
//     let e2 = interval[1];

//     if(e1>=s2){
//         result[result.length-1] = math.max(e1,e2)
//     }else { 
//         result.push(interval)
//     }
// }
// return result
// }
// merge(intervals)


// let error = 3;

// console.log("something went wrong", error);
// console.log("something went wrong "+ error);

// var nums = [2,3,11,7] 
// var target = 9


// var twoSum = function(nums, target) {
//     var map = {};
    
//     for(var i = 0; i <nums.length; i++) {
        
//         var value = nums[i];
//         var complementpair = target - value;
//                 console.log(map[complementpair]);

//         if(map[complementpair] !== undefined) {
//             console.log(map[complementpair]);

//             return [map[complementpair],i];
            
//         }
//         else {
//             map[value] = i;
//         }
//     }
    
// };



// console.log(twoSum(nums,target));



// var subsetsWithDup = function(nums) {
//     var res = [];
//     nums.sort((a, b) => a - b);
//     helper(nums, 0, res, []);
//     return res;
//   };
  
//   var helper = function (nums, start, res, now) {
//     res.push(Array.from(now));
  
//     for (var i = start; i < nums.length; i++) {
//       if (i === start || nums[i] !== nums[i - 1]) {
//         now.push(nums[i]);
//         helper(nums, i + 1, res, now);
//         now.pop();
//       }
//     }
//   };





//   var numTrees = function(n) {
//     let dp = new Array(n+1).fill(0);
//     dp[0] = 1;
//     dp[1] = 1;

//     for (let i = 2; i <= n; i++) {
//         for (let j = 0; j < i; j++) {
           
//             dp[i] += dp[j] * dp[i-j-1];
//         }
//     }
//     return dp[n];
// }



// Longest substring without repeating


var s = "ab0c0ed";


// var lengthOfSubs = function(s){
//   for( let begin =0; begin<s.length; begin++){
//     for(let end = begin; end<s.length; end++){
//       var substr = s.substring(begin,end+1)
//       console.log(substr);
//     }
//   }
// }

// lengthOfSubs(s)


// var s  = "abc0de0"

// var subStrn = function(s){
//   for(let begin = 0; begin < s.length; begin++){
//     for(let end = begin; end < s.length; end++){
//       const str = s.substring(begin, end+1)
//       console.log(str);
//     }
//   }
// }

// subStrn(s)