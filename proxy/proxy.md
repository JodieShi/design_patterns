# 代理模式
## 特点
代理模式通过设置代理对象作为中介来对目标对象的访问进行控制，访问对象不直接引用目标对象。

## 应用场景
1. 安全代理：访问控制
2. 远程代理
3. 虚拟代理：访问性能提升，虚拟资源
4. 指引：代理面向访问对象附加额外处理

## 结构
1. 抽象主题（Subject）
2. 真实主题（Real Subject）
3. 代理（Proxy）

## 扩展