// require('./assert/reset.css');
// require('./assert/tup.css');
var $ = require('jquery');// 引入jQuery
var Component = require('./Component');

// 检查是否引入jQuery
if (typeof $ == 'undefined') {
    console.warn('jQuery is undefined!');
}

// if (typeof Vue == 'undefined') {
//     console.warn('Vue is undefined!');
// }

// 解决响应式高度变化不自动修复
// ...

/**
 * 入口
 * 
 * @param {Object} 配置
 */
var Tup = function (o) {

    // 所有的配置增量
    this.options = {};

    // 为了方便使用dom元素
    this.$element = {};

    // 子节点
    this.$child = [];
    // 父节点
    this.$parent = {};

    // 控制器整理后的结果
    this.configer = {};
    this.spliter = {};
    this.selelcer = {};
    // this.styler = new styler();
    this.styler = {};

    // 是否创建新的元素
    this.isNew = false;

    // 是否启用Vue方式渲染数据,默认为dom方式渲染
    this.isVue = false;

    /**
     * 基本组件
     */
    this.init = function (options) {

        // 组件类型控制器
        this.loadSpliter(this.options);

        // 元素选择器控制器
        this.loadSelelcter(this.options);

        // 样式控制器
        this.setStyler(this.options);
        this.loadStyler(this.options);

    }

    /**
     * 创建相应的元素
     */
    this.createElement = function () {

        // 父节点
        this.$parent = this.options.parent || 'body';

        // 子节点
        this.$child = this.options.child || [];

        // 判断组件的类型,创建不同的元素
        // ...

        var element = $('<div></div>').text('');
        $(this.$parent).append(element);

        return element;

    }

    /**
     * 选择器控制
     * 1,class方式,对多个元素进行渲染
     * 2,id方法,对单个元素进行渲染
     * 3,vue模板方式,对指定的模板进行渲染
     * 3.1,用Vue的方式更好的渲染数据
     */
    this.loadSelelcter = function () {

        var el = this.options.el || '';
        this.isNew = (el == '');

        // 不为新的元素
        if (!this.isNew) {
            // jQuery选择器
            this.$element = this.options.element = $(el);

            // vue templete
            // new Vue({el:el,data: );
        }

        return this.$element || this.options.element;

    }

    /**
     * 样式控制器
     */
    this.setStyler = function () {

        // 设置到内置对象中
        this.styler = this.options.style || {};

    }


    /**
     * 样式加载器
     */
    this.loadStyler = function () {

        // css样式
        $(this.$element).css(this.styler);

        // class样式
        if (this.styler.class != 'undefined') {
            $(this.$element).addClass(this.styler.class);
        }

    }

    /**
     * 分割控制器
     * 分割不同种类的配置内容
     */
    this.loadSpliter = function () {

        this.options.type = this.options.type || '';// 需要被分割的类型

    }

    /**
     * 所有的配置保存到对象的options变量中
     */
    this.loadConfiger = function (options) {

        return this.options = options;

    }

    /**
     * 创建组件统一接口
     */
    this.create = function (options) {

        // 变量保存到对象中
        this.loadConfiger(options);

        // 组件配置初始化
        this.init(this.options);

        // 处理回调
        var ok = this.options.ok || function (data) { };

        // 是否创建新的元素
        if (this.isNew) {

            // 判断组件的类型
            this.typeAutoAdapter();

            // 创建元素
            this.$element = this.createElement();

            // 方便使用者基于对象操作元素
            this.options.element = this.$element;

            // 重新加载样式
            this.setStyler(this.options);
            this.loadStyler(this.options);

        }

        // 运行回调
        ok(this.options);

        return this;

    }

    /**
     * 组件自动适配类型
     */
    this.typeAutoAdapter = function (options) {

        if (this.options.type == '') {

            // 遍历已注册的组件名
            var tupSelf = this;
            $.each(Component, function (componentKey, componentTypeValue) {

                // 遍历配置内容
                $.each(tupSelf.options, function (optionKey, optionValue) {

                    // 包含则自动适配
                    if (componentKey == optionKey) {

                        // 设置类型,自动执行相应的组件方法
                        tupSelf.options.type = optionKey;
                        Component[optionKey](tupSelf.options);

                    }

                })
            });

        }
        else {// 防止过多的方法存在于对象中,component.js处理各个组件

            Component[this.options.type](options);

        }

    }

    this.now = function () {
        return new Date().getTime();
    }

    // 防止引用的方法未定义出现异常,构造写在最后
    this.create(o);

    return this;

};


module.exports = Tup;