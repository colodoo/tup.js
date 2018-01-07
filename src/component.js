var $ = require('jquery');// 引入jQuery

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
    $(options.element).click(component.click);

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
    })

    return this;

}

module.exports = Component;