项目结构
angular + angular-ui-router + require
目的:
解决angular在加载时加载所有js的问题

使用规则:
1. router 配置在 routers.json中 要求严格按照以下格式
"/module2/": {                           //路由
     path: "module2/module2.js",         //模块的代码路径
     controller: "module2Controller",     //控制器名称
     templateUrl: "module2/tpl.html"      // 模板路径
}
既
"router路径名称":{
    path: "js所在路径"
    controller:"需要注册的controller名称"
    templateUrl:"返回页面名称"
}

2. 要求controller需返回以下字段:
return {controller:function(){},tpl,tpl}

3. 如需添加全局js文件需在main.js 中配置path,然后再需要的defined中调用即可。或者注册成为angular组件

注: 在延迟注册时（既页面加载时） 会默认加入ng-controller    可不写但可写一定为routers.json中的controller名
