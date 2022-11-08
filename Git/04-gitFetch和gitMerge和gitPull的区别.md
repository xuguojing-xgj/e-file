###### git fetch 和 git merge 和 git pull 的区别

- git pull 相当于git fetch 和 git merge , 即更新远程仓库的代码到本地, 然后将内容合并到当前分支
- git merge 将内容合并到当前分支
- git pull 相当于从远程获取最新版本并merge到本地
- git fetch 相当于从远程获取最新版本到本地,并不会自动merge
- 但它的工作方式略有不同, 当你执行git fetch 时, 它会从所需的分支中提取所有新的提交,并将其储存在本地存储库中的新分支中
- 如果要在目标分支中反映这些更改,必须在git fetch 之后执行 git merge 
- 只有在对目标分支和获取的分支进行合并之后才会更新目标分支
- 为了方便 直接使用 git pull
```
git pull = git fetch + git merge
```
