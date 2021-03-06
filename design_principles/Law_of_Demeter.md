# 迪米特法则
迪米特法则（Law of Demeter，LoD）又称最少知识原则（Least Knowledge Principle，LKP），指的是只与你的直接朋友交谈，而不和陌生人说话，即如果两个软件实体无需直接通信，那么就不应当发生直接的相互调用，可以通过第三方转发该调用。目的在于降低类之间的耦合度，提高模块相对独立性。其中，直接朋友指：当前对象本身，当前对象的成员对象，当前对象创建的对象，当前对象的方法参数等。

## 作用
1. 降低类之间的耦合度，提高模块相对独立性
2. 提高类的可复用性和系统扩展性

## 实现
实现原则：
1. 依赖者只依赖应该依赖的对象
2. 被依赖者只暴露应该暴露的方法

编程规则：
1. 类划分时应弱耦合
2. 尽量降低类成员访问权限
3. 优先考虑将一个类设置成不变类
4. 降低引用其它对象的次数
5. 不要暴露类的属性成员，提供相应的访问器（get/set）
6. 谨慎使用序列化功能