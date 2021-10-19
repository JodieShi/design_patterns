# 享元模式
## 特点
享元模式运用共享技术来有效支持大量细粒度对象的复用。它通过共享已经存在的对象来大幅度减少需要创建的对象数量，避免大量相似类的开销，从而提高系统资源的利用率。

## 应用场景

## 结构
角色：
- 抽象享元（Flyweight）：具体享元的基类，
- 具体享元（Concrete Flyweight）
- 非享元（Unshared Flyweight）
- 享元工厂（Flyweight Factory）
