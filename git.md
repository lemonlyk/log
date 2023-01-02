#设置SSH key
##生成ssh key

首先检查是否已生成密钥cd ~/.ssh，如果返回的ls有3个文件,则密钥已经生成

如果没有密钥，则通过
~~~
$ ssh-keygen -t rsa -C "hanyuntaocn@163.com"
~~~

生成，生成过程中一路按3次回车键就好了。（默认路径，默认没有密码登录）

生成成功后，用记事本打开id_rsa.pub，得到ssh key公钥。

##为github账号配置ssh key

切换到github，展开个人头像的小三角，点击settings，然后打开SSH keys菜单， 点击Add SSH key新增密钥，填上标题（最好跟本地仓库保持一致）。

接着将id_rsa.pub文件中key粘贴到此，最后Add key生成密钥。



#github已有资源


##先从服务器克隆一个库
~~~
git clone ssh://example.com/~/www/project.git
~~~

##令添加文件
~~~
git add filename
~~~
##添加当前目录下的所有文件到暂存区
~~~
git add .
~~~
##提交版本

将添加或修改的文件真正的保存到Git仓库中，需将他们提交到仓库
~~~
git commit -m "Adding files"
$ git commit -a // a 参数设置修改文件后不需要执行 git add 命令，直接来提交
~~~
##修改之后可以进行推送到服务器
~~~
git push ssh://example.com/~/www/project.git
~~~
#上传本地文件到github
##安装git工具

使用Git Bash.exe

##建立本地仓库

1.首先进入本地仓库文件夹text
~~~
cd d:text
~~~
2.执行指令：`git init`

初始化成功后你会发现项目里多了一个隐藏文件夹.git

3.执行指令：`git add .`

将所有文件添加到仓库

4.执行指令：`git commit -m "提交文件"`

双引号内是提交注释。
```
git commit -a "提交文件"// a 参数设置修改文件后不需要执行 git add 命令，直接来提交
```

# 关联github仓库

1.到github text仓库复制仓库地址

2.执行指令：git remote add origin https://github.com/hanyuntao/text.git

# 上传本地代码

执行指令：`git push -u origin master`

#参考
[两种方法上传本地文件到github](https://www.jianshu.com/p/c70ca3a02087)

[Git教程](https://www.runoob.com/git/git-tutorial.html)