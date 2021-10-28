/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // let sum = 0
  // for (let i=0; i<nums.length; i++){
  //   if (i===0 | i % 2 ===0) sum += nums[i]
  //   console.log(sum)
  // }
  // return sum
  
  
    const rob = (nums, i) => {
      if (i<0) return 0
        // console.log(Math.max(rob(nums,i-2)+nums[i], rob(nums, i-1)))
        return Math.max(rob(nums,i-2)+nums[i], rob(nums, i-1))
    }
    
    return rob(nums, nums.length-1)
};

/*
public int rob(int[] nums) {
    return rob(nums, nums.length - 1);
}
private int rob(int[] nums, int i) {
    if (i < 0) {
        return 0;
    }
    return Math.max(rob(nums, i - 2) + nums[i], rob(nums, i - 1));
}
*/