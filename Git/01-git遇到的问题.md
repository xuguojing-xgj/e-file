-    强制更新 git fetch --all && git reset --hard origin/master && git pull
-    git config core.ignorecase false 然后正常提交代码，修改会被识别为 untracked 类型的变更，如果直接推送到远程的话，那么远程仓库会同时存在大小写两个版本的文件（本地一切正常）
-    此时需要手动删除远程仓库名字错误的文件。或者采用迂回战术，先把文件改个其他名，在改成正确的。

// 删除文件命令
git rm -r --cached text /a.txt // 删除test文件夹下的a.txt文件，加入到删除缓存中

// 删除文件夹命令
git rm -r --cached text // 删除test文件夹，加入到删除缓存中

git commit -m "注释"  // 把修改提交到本地版本库

git push // 推送操作到远程仓库
