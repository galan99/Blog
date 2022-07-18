# Git

- git是怎么知道文件有没有变化的？ :heavy_check_mark:
<!-- 计算hash值 -->
- git add . 和 git commit 把变动提交到哪里了？ :heavy_check_mark:
<!-- 变动的代码在工作区
git add . 推送到暂存区
git commit 推送到本地仓库  -->
- git fetch和git pull的区别？ :heavy_check_mark:
<!-- git pull = get fetch + git merge -->
- git reset三种模式的区别？ :heavy_check_mark:
<!-- https://www.jianshu.com/p/c2ec5f06cf1a -->
<!-- soft ：只重置远程仓库
mixed（默认） ：重置暂存区 + 远程仓库
hard ：重置工作区 + 暂存区 + 远程仓库 -->
- 每次git commit之前要加一些校验应该如何配置？ :heavy_check_mark:
<!-- 要在git执行的过程中做一些操作，可以在.git/hooks里面写脚本
项目中直接配置eslint即可
用husky：lint-staged可以只检查本次的提交,而不是检查整个项目 -->
- git rebase和git merge的区别？
<!-- git merge 合并分支后之后会生成一次提交记录
git rebase 不会 -->