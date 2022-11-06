// git 遇到的问题 : warning: | TLS certificate verification has been disabled! |
//  警告：|TLS证书验证已禁用|
- 缺少了安全认证，所以解决方法是重启安全认证。
- git config --global http.sslVerify true    解决办法
