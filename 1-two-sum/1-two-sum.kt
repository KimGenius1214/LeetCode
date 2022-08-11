class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        var a = 0
        var b = 0
        for (i in nums.indices) {
            for (j in i + 1 until nums.size) {
                if (nums[i] + nums[j] == target) {
                    a = i
                    b = j
                    break
                }
            }
        }

        return intArrayOf(a, b)
    }
}