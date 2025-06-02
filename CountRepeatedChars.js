function countNumberOfChars(nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  console.log('nums inside the function - ', nums)
  let uniqueIndex = 1;
  let output = '';
  for (let i = 1; i < nums.length; i++) {
    console.log('Index', i, nums[i], uniqueIndex)
    if (nums[i] == nums[i - 1]) {
      
      uniqueIndex++;

      if (i === nums.length - 1) {
        output = output.concat(uniqueIndex).concat(nums[i-1])
        console.log('Index at condition', i, nums[i], uniqueIndex)
        uniqueIndex = 0;  
      }
      
    } else {
      output = output.concat(uniqueIndex).concat(nums[i-1])
      console.log('Index at condition', i, nums[i], uniqueIndex)
      uniqueIndex = 1;
    } 
  }
  return output;
}

const nums = "aaabbaaa"
const output = countNumberOfChars(nums);
console.log('output --- ', output)
