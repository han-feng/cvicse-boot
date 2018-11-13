# 企业应用快速开发框架

[![Build Status](https://travis-ci.org/han-feng/cvicse-boot.svg?branch=master)](https://travis-ci.org/han-feng/cvicse-boot) [![Coverage Status](https://coveralls.io/repos/han-feng/cvicse-boot/badge.png?branch=master)](https://coveralls.io/r/han-feng/cvicse-boot?branch=master) [![codecov](https://codecov.io/gh/han-feng/cvicse-boot/branch/master/graph/badge.svg)](https://codecov.io/gh/han-feng/cvicse-boot) [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=com.cvicse.boot%3Acvicse-boot&metric=alert_status)](https://sonarcloud.io/dashboard?id=com.cvicse.boot%3Acvicse-boot)

项目代码采用 Maven 组织管理，可以单独使用 Maven 进行打包构建，也可以导入 Eclipse 开发。

## 使用 Maven 构建

在项目根目录下，执行下面命令即可对所有子项目进行构建（包括前端项目也会自动安装 nodejs、npm 等相关工具，然后编译、打包形成 web jar 包）。
```
mvn install
```

## Eclipse 开发环境

使用 Eclipse Import 功能，选择 Maven 下的 Existing Maven Projects 方式导入当前项目即可。
