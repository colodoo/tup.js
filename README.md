# Tup.js

## 初衷
简化前端代码，以对象的形式初始化每个组件，组件可自定义。

## 部署方法
* 输入命令 `npm install`
* 输入命令 `npm start`

## 创建组件方法

### 构造模式创建组件
```javascript

// 带type属性
var option = {
	type: 'button',
	button: {
		title: '表格组件标题',
		text: '表格组件内容'
	}
}
var btn = new Tup(option);

// 不带type属性
var options = {
	button: {
		title: '按钮标题'.
		text: '按钮内容'
	}
}
var btn = new Tup(options);
```
