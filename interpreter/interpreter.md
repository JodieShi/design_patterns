# 解释器模式
## 特点
解释器模式给分析对象定义一个语言，并定义该语言的文法表示，再设计一个解析器来解释语言中的句子。

## 应用场景
- 问题重复出现，可由抽象语法树表示

## 结构
角色：
- 抽象表达式（Abstract Expression）
- 终结符表达式（Terminal Expression）
- 非终结符表达式（Non-terminal Expression）
- 环境（Context）
- 客户端（Client）
