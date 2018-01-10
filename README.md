# Tup.js

## 初衷
学习前端写的小demo

## 创建组件方法

### create方法创建组件
```javascript
Tup.create({
	type: 'button',
	button: {
		title: '测试',
		text: '测试'
	}
});

```

### 构造模式创建组件
```javascript

// 带type属性
new Tup({
	type: 'button',
	button: {
		title: '测试',
		text: '测试'
	}
});

// 不带type属性
new Tup({
	button: {
		title: '测试'.
		text: '测试'
	}
});
	
```
