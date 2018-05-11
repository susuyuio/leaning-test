# deepCopy

### 浅克隆（基本类型）

- 数组
```
slice
concat
Array.from()
[...arr]
```

- 对象
```
[...obj]
Object.assign()
```

### 克隆 -- 深度克隆（引用类型）

- JSON.parse(JSON.stringify())
> 数组中undefined转化为null，对象中undefined、function、symbol不能克隆

- 递归