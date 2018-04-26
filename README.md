# Tup.js

## 初衷
学习前端写的小demo

## 部署方法
1、`npm install`
2、`npm start`

## 创建组件方法

### 构造模式创建组件
```javascript

// 带type属性
new Tup({
	type: 'button',
	button: {
		title: '表格组件标题',
		text: '表格组件内容'
	}
});

// 不带type属性
new Tup({
	button: {
		title: '按钮标题'.
		text: '按钮内容'
	}
});
```
