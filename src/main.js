require('./assert/tup.css');
var Tup = require('./Tup');
var $ = require('jquery');
// var echarts = require('echarts');


// // 基于准备好的dom，初始化echarts实例
// var myChart = echarts.init(document.getElementById('echarts'));
// // 绘制图表
// myChart.setOption({
//     title: {
//         text: 'ECharts 入门示例'
//     },
//     tooltip: {},
//     xAxis: {
//         data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
//     },
//     yAxis: {},
//     series: [{
//         name: '销量',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20]
//     }]
// });

// 弹出框
var pop = new Tup({
    pop: {
        title: '测试',
        text: '测试'
    }
});

// 按钮
var button = new Tup({
    button: {
        text: '测试'
    }
});


// 按钮包含点击事件
var button1 = new Tup({
    button: {
        text: '测试1',
        click: function () {// 点击事件
            console.log(this);
        }
    }
});

// 右下角消息框
var messager = new Tup({
    messager: {
        title: '测试',
        text: '测试'
    }
});
