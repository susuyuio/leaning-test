# js垃圾回收

- 引用清除
- 标记清除
- 分代收回
1. 多回收“临时对象”区
2. 少回收“持久对象”区
3. 减少每次需遍历的对象，从而减少每次GC的耗时