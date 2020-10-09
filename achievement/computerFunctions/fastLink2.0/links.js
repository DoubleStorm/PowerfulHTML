var theLinks = {
    target: 'self',
    links: [
        /*
            ,{name:"",leftClick:"",rightClick="",tip:"（左键中文文档，右键英文文档）"}
            ,{name:"",leftClick:"",tip:""}
            ,{name:"",leftClick:""}
			,rightClick=""
        */
        [
            {name:"Angular 官方教程",leftClick:"https://angular.cn/docs",rightClick:"https://next.angular.io/docs",tip:"Angular 官方教程（左键中文文档，右键英文文档）"}
            ,{name:"NG-ZORRO 官网",leftClick:"https://ng.ant.design/docs/introduce/zh"}
            ,{name:"Echarts 官网",leftClick:"https://echarts.apache.org/examples/zh/index.html"}
            ,{name:"ag-Grid 官网",leftClick:"https://www.ag-grid.com/example.php#/"}
            ,{name:"RxJS 官方教程",leftClick:"https://cn.rx.js.org/manual/overview.html",rightClick:"https://rxjs.dev/guide/overview",tip:"多学学JS异步编程的其他方式（左键中文文档，右键英文文档）"}
            ,{name:"Sass 中文文档",leftClick:"https://www.sass.hk/docs/"}
            ,{name:"node 中文网",leftClick:"https://www.npmjs.cn/"}
            ,{name:"CSS 参考手册",leftClick:"http://css.doyoe.com/",tip:"web 前端开发参考手册系列"}
            ,{name:"W3C 官网",leftClick:"https://www.chinaw3c.org/",rightClick:"https://www.w3.org/",tip:"查看 W3C 标准"}
            ,{name:"HTML 字符实体参考",leftClick:"https://www.w3school.com.cn/tags/html_ref_entities.html"}
            ,{name:"HTML URL 编码字符",leftClick:"https://www.w3school.com.cn/tags/html_ref_urlencode.html"}
            ,{name:"Highcharts 官方教程",leftClick:"https://www.highcharts.com.cn/docs/start-introduction"}
            ,{name:"FontAwesome 参考",leftClick:"https://www.runoob.com/font-awesome/fontawesome-reference.html",tip:"FontAwesome 图标使用参考"}
            ,{name:"Animate.css 参考",leftClick:"http://www.jq22.com/yanshi819",tip:"Animate.css 动画库使用参考"}
            ,{name:"jqcloud 教程",leftClick:"https://blog.csdn.net/qq_21895079/article/details/76853384"}
            ,{name:"jSignature 教程",leftClick:"https://blog.csdn.net/liansehai/article/details/80255294"}
        ],[
            {name:"Angular Update Guide",leftClick:"https://update.angular.io/",tip:"Angular 项目升级指导"}
            ,{name:"BootStrap 布局工具",leftClick:"https://www.runoob.com/try/bootstrap/layoutit/",tip:"快速获得 BootStrap 布局结构代码"}
            ,{name:"BootStrap 图标工具",leftClick:"https://www.runoob.com/try/demo_source/bootstrap-glyph-customization.htm",tip:"快速获得 BootStrap 图标"}
            ,{name:"HTML 字符实体转换",leftClick:"https://c.runoob.com/front-end/691",tip:"快速将 HTML 代码中的特殊符号转换成字符实体"}
            ,{name:"CSS 拾色器",leftClick:"https://www.runoob.com/tags/html-colorpicker.html"}
            ,{name:"Cool Backgrounds",leftClick:"https://coolbackgrounds.io/",tip:"炫酷背景图片生成器"}
            ,{name:"CodePen",leftClick:"https://codepen.io/",tip:"一个在线前端代码编辑器"}
            ,{name:"JS Bin",leftClick:"https://jsbin.com/",tip:"另一个在线前端代码编辑器"}
            ,{name:"Can I use",leftClick:"https://caniuse.com/",tip:"查看 W3C 标准在各浏览器上的支持程度"}
            ,{name:"validator",leftClick:"https://validator.w3.org/",tip:"HTML 页面内容验证器"}
            ,{name:"MDN Web docs",leftClick:"https://developer.mozilla.org/zh-CN/",tip:"源于开发者，服务开发者"}
        ],[
            {name:"BootStrap 模板资源网",leftClick:"http://www.bootstrapmb.com/"}
            ,{name:"iconfont",leftClick:"https://www.iconfont.cn",tip:"阿里管理的矢量图标库"}
            ,{name:"鸠摩搜书",leftClick:"https://www.jiumodiary.com/",tip:"来这找书！好用！"}
            ,{name:"Pexels",leftClick:"https://www.pexels.com/zh-cn/",tip:"高质量图片下载网站"}
            ,{name:"CG 资源网",leftClick:"https://www.cgown.com/",tip:"PR、AE 等资源文件下载网站"}
            ,{name:"源码之家",leftClick:"https://www.mycodes.net/",tip:"各式各样的源码"}
            ,{name:"Awesomes",leftClick:"https://www.awesomes.cn/",tip:"前端开发资源库"}
		],[
            {name:"在线 PS",leftClick:"https://ps.gaoding.com/#/"}
            ,{name:"比特虫",leftClick:"http://www.bitbug.net/",tip:"在线制作 ico 图标"}
            ,{name:"菜鸟工具在线画图",leftClick:"https://c.runoob.com/more/shapefly-diagram/"}
            ,{name:"ProcessOn",leftClick:"https://www.processon.com/",tip:"ProcessOn 在线画图工具"}
            ,{name:"菜鸟工具汉字拼音",leftClick:"https://c.runoob.com/front-end/5523",tip:"将汉字翻译成拼音字符"}
            ,{name:"TinyPNG",leftClick:"https://tinypng.com/",tip:"在线压缩图片，可支持 png、jpg 格式"}
            ,{name:"picdiet",leftClick:"https://www.picdiet.com/zh-cn",tip:"在线压缩图片，可支持 jpg、jpeg 格式"}
            ,{name:"Smart Resize",leftClick:"https://www.smartresize.com/zh-cn",tip:"在线可批量剪裁图片工具"}
            ,{name:"Convertio",leftClick:"https://convertio.co/zh/",tip:"强大的在线文件转换工具"}
            ,{name:"PDF24 Tools",leftClick:"https://tools.pdf24.org/zh/",tip:"多功能 PDF 文件在线编辑器"}
            ,{name:"小鸡词典",leftClick:"https://jikipedia.com/",tip:"速查当下网络流行语"}
            ,{name:"写作猫",leftClick:"https://xiezuocat.com/#/",tip:"简单写作手法提升"}
            ,{name:"statcounter",leftClick:"https://gs.statcounter.com/",tip:"市场份额统计"}
        ],[
            {name:"HTML5 网页游戏",leftClick:"http://html5.huceo.com/",tip:"HTML5 技术实现网页"}
            ,{name:"WiFi Mouse",leftClick:"http://wifimouse.necta.us/#download",tip:"手机充当电脑鼠标"}
            ,{name:"Kick Ass",leftClick:"https://kickassapp.com/",tip:"脑洞网页消除游戏"}
            ,{name:"airpano",leftClick:"https://www.airpano.com/",tip:"在线旅游"}
            ,{name:"AlteredQualia",leftClick:"https://alteredqualia.com/",tip:"头部模型"}
        ]
    ]
}