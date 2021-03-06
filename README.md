# Ruthless algorithm machine

- 今日算法

- 难度

  简单/中等/困难/地狱

- 题目仓库 `[dir]` 链接

# Create daily question

```bash
# 1. git checkout master
git checkout master
# 2. mkdir [dir] && cd [dir]
mkdir [dir] && cd [dir]
# 3. 补充题目描述
touch README.md
# 4. git push origin HEAD:[name]
git push origin HEAD:[name]
# 5. 从 [name] 分支发起 pr 到 master 并 merge
```

# Commit

- 本地基于 master 创建任意分支并切换到该分支
- 在题目仓库目录创建对应的 `[dir][file]` 下完成答案
- 在 `[dir]/test.spec.ts` 下完成测试用例编写
- 通过 `yarn test [dir]/test.spec.ts` 单元测试（运行所有单测运行 `yarn test`）
- 推送到任意远程分支 `git push origin HEAD:[branchName]`
- 发起 `Pull request` 到 `master` 分支

# Review

Each other.

# History
- 20210110 [DuplicateSubTree](https://github.com/Unit7419/LeetCode/tree/master/DuplicateSubTree)
- 20210108 [groupAnagrams](https://github.com/Unit7419/LeetCode/tree/master/groupAnagrams)
- 20210107 [ContainsNearbyDuplicate](https://github.com/Unit7419/LeetCode/tree/master/ContainsNearbyDuplicate)
- 20210106 [MinSumOfIndex](https://github.com/Unit7419/LeetCode/tree/master/MinSumOfIndex)
- 20210105 [isHappyNumber](https://github.com/Unit7419/LeetCode/tree/master/isHappyNumber)
- 20210103 [FirstUniqChar](https://github.com/Unit7419/LeetCode/tree/master/FirstUniqChar)
- 20210102 [IntersectionOfTwoArrays](https://github.com/Unit7419/LeetCode/tree/master/IntersectionOfTwoArrays)
- 20201231 [FourSum](https://github.com/Unit7419/LeetCode/tree/master/FourSum)
- 20201230 [SingleNumber](https://github.com/Unit7419/LeetCode/tree/master/SingleNumber)
- 20201229 [containsDuplicate](https://github.com/Unit7419/LeetCode/tree/master/containsDuplicate)
- 20201228 [DesignHashSet](https://github.com/Unit7419/LeetCode/tree/master/DesignHashSet)
- 20201223 [PrintDomTreeChildren](https://github.com/Unit7419/LeetCode/tree/master/PrintDomTreeChildren)
- 20201222 [ThreeSumClosest](https://github.com/Unit7419/LeetCode/tree/master/ThreeSumClosest)
- 20201221 [CircusTowerLcci](https://github.com/Unit7419/LeetCode/tree/master/CircusTowerLcci)
- 20201219 [TelNum](https://github.com/Unit7419/LeetCode/tree/master/telNum)
- 20201218 [MaxSum](https://github.com/Unit7419/LeetCode/tree/master/maxSum)
- 20201217 [TransformIndent](https://github.com/Unit7419/LeetCode/tree/master/TransformIndent)
- 20201216 [minPathSum](https://github.com/Unit7419/LeetCode/tree/master/minPathSum)
- 20201215 [Convert](https://github.com/Unit7419/LeetCode/tree/master/Convert)
- 20201214 [RestoreIpAddresses](https://github.com/Unit7419/LeetCode/tree/master/RestoreIpAddresses)
- 20201213 [PathExist](https://github.com/Unit7419/LeetCode/tree/master/pathExist)
- 20201212 [Pow](https://github.com/Unit7419/LeetCode/tree/master/pow)
- 20201210 [VerifySearchTree](https://github.com/Unit7419/LeetCode/tree/master/verifySearchTree)
- 20201209 [NumWays](https://github.com/Unit7419/LeetCode/tree/master/numWays)
- 20201208 [LongestContinuousCommonString](https://github.com/Unit7419/LeetCode/tree/master/LongestContinuousCommonString)
- 20201207 [LongestCommonString](https://github.com/Unit7419/LeetCode/tree/master/LongestCommonString)
- 20201206 [ImplementQueueByStack](https://github.com/Unit7419/LeetCode/tree/master/ImplementQueueByStack)
- 20201205 [LongestCommonString](https://github.com/Unit7419/LeetCode/tree/master/LongestCommonString)
- 20201204 [ReconstructionOfBinaryTree](https://github.com/Unit7419/LeetCode/tree/master/ReconstructionOfBinaryTree)
