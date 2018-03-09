#framework7环境配置
## 内容
>安装 bower
>安装 framwork7
>安装app运行环境
>创建测试页

## 安装bower
Bower 安装需要环境 node, npm and git.
>npm install -g bower
这个命令安装的时候会等一段时间，需要耐心等待一下，安装过程中会报警告，这个目前不知道如何解决

## 安装framwork7
>bower install framework7           #安装framework7
>npm install                        #配置需要的运行库

## 安装运行环境
###使用framework7自带的环境
>npm run dev                        #启动服务，先进入app文件夹再运行
在浏览器中输入 <http://localhost:8080/view/>

###使用live-server
>npm install -g live-server        #安装live-server
>live-server                       #启动服务，先进入app文件再在运行
在浏览器中输入localhost:8080，就可以访问了

## 创建测试页
<http://framework7.taobao.org/get-started/#.Wn-falMdjBE>