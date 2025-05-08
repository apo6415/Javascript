function removeDuplicates(nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  console.log(nums)
  let uniqueIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueIndex] = nums[i];
      uniqueIndex++;
      console.log('Index', i, nums[i], uniqueIndex)
    }
  }
  return uniqueIndex;
}

const nums = [2,2,3, 3,5,5,7,7,7,11,11,11,13];
const newLength = removeDuplicates(nums);
console.log(nums)

console.log(nums.slice(0, newLength)); // Output: [1, 2, 3, 4, 5]
console.log(newLength); // Output: 5
