var $ = require('jquery');// 引入jQuery

// 组件对象
var Component = {};

Component.pop = function (options) {

    // 获取组件配置
    var componentConfig = options[options.type];

    // 配置
    var title = '';
    var text = '';

    // 设置则读取
    if (typeof componentConfig != 'undefined') {
        title = componentConfig.title;
        text = componentConfig.text;
    }

    // 基本的class样式
    $(options.element).addClass('tup-pop');

    // 添加组件需要的元素
    var componentTitle = $('<div class="tup-pop-title"></div>').text(title);
    $(options.element).append(componentTitle);

    var componentBody = $('<div class="tup-pop-body"></div>').text(text);
    $(options.element).append(componentBody);

    return this;

}

Component.button = function (options) {

    // 获取button配置
    var component = options[options.type];

    // 配置
    var text = '';

    // 设置则读取
    if (typeof component != 'undefined') {
        text = component.text;
    }

    // 基本的class样式
    $(options.element).addClass('tup-btn');

    // 添加测试文字
    $(options.element).text(text);

    // 点击事件
    $(options.element).click(function () {
        component.click(options);
    });

    return this;

}

Component.messager = function (options) {

    // 获取pop配置
    var component = options[options.type];

    // 配置
    var title = '';
    var text = '';

    // 设置则读取
    if (typeof component != 'undefined') {
        title = component.title;
        text = component.text;
    }

    // 基本的class样式
    $(options.element).addClass('tup-messager');

    // 添加组件需要的元素
    var pop_title = $('<div class="tup-messager-title"></div>').text(title);
    $(options.element).append(pop_title);

    var pop_body = $('<div class="tup-messager-body"></div>').text(text);
    $(options.element).append(pop_body);

    // 点击事件
    $(options.element).click(function () {
        // 逐渐消失
        $(this).fadeOut(800);
    });

    return this;

}


Component.table = function (options) {

    // 先判断是否为Vue方式创建元素,默认为不启用Vue方式
    var component = options[options.type];// 类型
    var isVue = component.isVue || false;// 是否为Vue方式
    var data = component.data || {};// 渲染的数据
    var el = component.el || '';// el表达式
    var parent = options.parent;// 父元素el

    if (isVue) {// 如果为Vue方式
        // 注册Vue 组 件tup-table
        Vue.component('tup-table', {
            template: '<table class="tup-table"> <tr> <th v-for="column in columns">{{ column.title }}</th> </tr> <tr v-for="data in datas"> <td v-for="(col, index) in data">{{col}}</td> </tr> </table>',
            data: function () {
                return data
            }
        });

        var table = new Vue({
            el: parent,
            data: data,
        });
    }
}

/**
 * 头部的消息栏
 * 
 */
Component.msgBar = function (options) {

    // 获取pop配置
    var component = options[options.type];

    // 配置
    var text = '';

    // 设置则读取
    if (typeof component != 'undefined') {
        text = component.text;
    }

    // 基本的class样式
    $(options.element).addClass('tup-msg-bar');

    // 配置内容
    $(options.element).text(text);

    // 点击事件
    $(options.element).click(function () {
        // 逐渐消失
        $(this).fadeOut(800);
    });

}

module.exports = Component;