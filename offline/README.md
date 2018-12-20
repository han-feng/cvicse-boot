# 离线开发

## 离线开发环境准备

准备安装包
* JDK
* Maven
* Node.js

制作 Maven 离线资源包
* 连接互联网状态下，在 offline 目录下执行 go-offline.cmd，会自动下载 Maven 依赖项到 offline/repository 目录下。

制作 NPM 离线资源包
* 连接互联网状态下，成功构建一次 Node.js 项目，保留 node_modules 目录即可

## 离线开发环境搭建

安装 JDK、Maven、Node.js
Maven 离线使用

方案一：

    在 offline 目录下执行 setup-offline-to-m2.cmd，会拷贝 offline/repository 到 .m2 目录中 offline 目录下，覆盖 Maven 用户设置 settings.xml 文件，使用拷贝过去的资源库作为本地库，并设置 Maven 为离线状态。

    该方案执行成功后，mvn 命令可以正常使用

方案二：

    不覆盖用户设置，使用项目根目录下的 mvno.cmd 命令代替 mvn 命令，但该命令只能在项目根目录下使用。

## 注意事项

制作环境与使用环境应尽量保持一致的内容：
* JDK、Maven、Node.js 版本
* 操作系统类型及位数
