// 设置公共对象样式
const styles = {
    navline: "display:inline-block;float:left;height:40px;line-height:40px;padding:0 10px;white-space: nowrap; text-overflow: ellipsis;",// 导航栏目样式
    webfont: {
        wrapper:"width:100%;",
        title: "width:100%;height:35px;text-indent: 10px;line-height:35px;color:#005f3c;background:#9dccb6;",
        type: "margin:5px;padding:0 5px;font-size:14px;color:#9dccb6;border-radius:2px;",
        webfont: "display:inline-block;margin: 0 5px;height:20px;font-size:10px;color:#005f3c;word-break: break-word;"
    }
}

//每页内容条数 设为number
const G_PAGECOUNT = 30;
// 设置公共的数据源 , 所用名称前加上大写G_
// 导航条数据
const G_navData = [
    { linkPath: "" , navType: "index", text:"首页" },
    { linkPath: "" , navType: "html", text:"html" },
    { linkPath: "" , navType: "CSS", text:"CSS3" },
    { linkPath: "" , navType: "JavaScript", text:"javaScript" },
    { linkPath: "" , navType: "echarts", text:"echarts" },
    { linkPath: "" , navType: "react", text:"react" },
    { linkPath: "" , navType: "IFT", text:"百度IFE任务" },
    { linkPath: "" , navType: "audition", text:"面试" },
    { linkPath: "" , navType: "webaddress", text:"前端资源网址合集" },
    { linkPath: "" , navType: "other", text:"其他" }
];

// 前端资源网站汇总
const G_webSource = [
    { title: "前端资源",
      content: [
            { type: "社区/组织",
                webfont: [
                    { name:"W3C", url: "http://www.w3.org/", discrible: "万维网联盟创建于1994年，是WEB技术领域最具权威和影响力的国际中立性技术标准机构"},
                    { name:"TPAC", url: "http://www.chinaw3c.org/member-meetings.html#tpac", discrible: "TPAC是W3C的年度重要技术会议之一，历届参会规模大约300-450人，参会者将在五天的时间里，共同协调未来开放Web平台的技术方向，讨论W3C的组织策略"},
                    { name:"w3ctech", url: "http://w3ctech.com/", discrible: "w3ctech.com成立于2009年10月，自成立以来受到了W3C等组织、公司、个人的大力支持与帮助。在普及W3C标准的基础上，交流会将集合国内前端开发者的力量，在未来2~3年的时间内形成既与国际接轨又符合中国国情的web标准体系"},
                    { name:"WebReBuild", url: "http://www.webrebuild.org/", discrible: ""},
                    { name:"阿里技术嘉年华", url: "http://adc.alibabatech.org/", discrible: ""},
                    { name:"京/沪JS", url: "http://jsconf.cn/", discrible: ""},
                    { name:"前端圈", url: "http://fequan.com/", discrible: ""},
                    { name:"HTML5梦工厂", url: "http://www.html5dw.com/", discrible: ""},
                    { name:"无障碍联盟", url: "http://accessibilityunion.org/", discrible: ""},
                    { name:"segmentfault", url: "https://segmentfault.com/", discrible: ""}
                ]
            },
            { type: "国内综合",
                webfont: [
                    { name:"前端观察", url: "http://www.qianduan.net/", discrible: ""},
                    { name:"阮一峰", url: "http://www.chinaw3c.org/member-meetings.html#tpac", discrible: ""},
                    { name:"W3CPLUS", url: "http://www.w3cplus.com/", discrible: ""},
                    { name:"W3CFUNS", url: "http://www.w3cfuns.com/", discrible: ""},
                    { name:"大前端", url: "http://www.daqianduan.com/", discrible: ""},
                    { name:"W3CHELP", url: "http://www.w3help.org/zh-cn/", discrible: ""},
                    { name:"W3CSCHOOL", url: "http://www.w3school.com.cn/", discrible: ""},
                    { name:"HTML5中国", url: "http://www.html5cn.org/", discrible: ""},
                    { name:"前端乱炖", url: "http://www.html-js.com/", discrible: ""},
                    { name:"F2E社区", url: "http://f2e.im/", discrible: ""},
                    { name:"MDN", url: "https://developer.mozilla.org/zh-CN/", discrible: "Mozilla 开发者网络"}
                ]
            },
            { type: "国内个人",
                webfont: [
                    { name:"CSS森林", url: "http://www.cssforest.org/blog/", discrible: ""},
                    { name:"twinsen", url: "http://www.twinsenliang.net/", discrible: ""},
                    { name:"艾文王", url: "http://blog.ivane.me/", discrible: ""},
                    { name:"张鑫旭", url: "http://www.zhangxinxu.com/wordpress/", discrible: ""}
                ]
            },
            { type: "国外综合",
                webfont: [
                    { name:"CSS-Tricks", url: "http://www.w3.org/", discrible: ""},
                    { name:"WebPlatform", url: "http://www.chinaw3c.org/member-meetings.html#tpac", discrible: ""},
                    { name:"SmashingMagazine", url: "http://w3ctech.com/", discrible: ""},
                    { name:"cssZenGarden", url: "http://www.webrebuild.org/", discrible: ""}
                ]
            },
            { type: "国外个人",
                webfont: [
                    { name:"SteveSouders", url: "http://www.w3.org/", discrible: "万维网联盟创建于1994年，是WEB技术领域最具权威和影响力的国际中立性技术标准机构"},
                    { name:"JohnResig", url: "http://www.chinaw3c.org/member-meetings.html#tpac", discrible: "TPAC是W3C的年度重要技术会议之一，历届参会规模大约300-450人，参会者将在五天的时间里，共同协调未来开放Web平台的技术方向，讨论W3C的组织策略"},
                    { name:"DouglasCrockford", url: "http://w3ctech.com/", discrible: ""},
                    { name:"EricMeyer", url: "http://www.webrebuild.org/", discrible: ""},
                    { name:"NicholasZakas", url: "http://www.mhtml5.com/", discrible: ""},
                    { name:"Addy Osmani", url: "http://adc.alibabatech.org/", discrible: ""}
                ]
            }
        ]
    },
    { title: "UED团队博客",
      content: [
            { type: "腾讯系",
                webfont: [
                    { name:"腾讯TGideas", url: "http://tgideas.qq.com", discrible: ""},
                    { name:"腾讯ISUX", url: "http://isux.tencent.com/", discrible: ""},
                    { name:"腾讯CDC", url: "http://cdc.tencent.com/", discrible: ""},
                    { name:"腾讯ECD", url: "http://ecd.tencent.com/", discrible: ""},
                    { name:"alloyteam", url: "http://www.alloyteam.com/", discrible: ""},
                    { name:"QQ游戏GDC", url: "http://gdc.qq.com/", discrible: ""},
                    { name:"腾讯无线MXD", url: "http://mxd.tencent.com/", discrible: ""},
                    { name:"财付通TID", url: "http://tid.tenpay.com/", discrible: ""}
                ]
            },
            { type: "阿里系",
                webfont: [
                    { name:"阿里中文UED", url: "http://www.aliued.cn/", discrible: ""},
                    { name:"阿里国际UED", url: "http://www.aliued.com/", discrible: ""},
                    { name:"支付宝UED", url: "http://alipay-ued.com/", discrible: ""},
                    { name:"淘宝UED", url: "http://ued.taobao.org/blog/", discrible: ""},
                    { name:"天猫UED", url: "http://ued.tmall.com/", discrible: ""},
                    { name:"一淘UED", url: "http://ux.etao.com/", discrible: ""}
                ]
            },
            { type: "百度系",
                webfont: [
                    { name:"百度searchUX", url:"http://ued.baidu.com/" , discrible: ""},
					{ name:"百度FEX", url:"http://fex.baidu.com/" , discrible: ""},
					{ name:"百度MUX", url:"http://mux.baidu.com/", discrible: ""},
					{ name:"百度UEO", url:"http://ueo.baidu.com/", discrible: ""}
                ]
            },
            { type: "搜狐系",
                webfont: [
                    { name:"搜狗UED", url:"http://ued.sogou.com/", discrible: ""},
                    { name:"搜狐MUED", url:"http://mued.sohu.com/", discrible: ""},
                    { name:"搜狐畅游UED", url:"http://vc.changyou.com/", discrible: ""},
                    { name:"搜狐焦点UED", url:"http://ued.focus.cn/wordpress/", discrible: ""},
                ]
            },
            { type: "新浪系",
                webfont: [
                    { name:"腾讯TGideas", url: "http://tgideas.qq.com", discrible: ""},
                    { name:"新浪网UED", url:"http://ued.sina.com/", discrible: ""},
                    { name:"新浪微博UDC", url:"http://udc.weibo.com/", discrible: ""},
                    { name:"新浪乐居UED", url:"http://ued.leju.com/", discrible: ""}
                ]
            },
            { type: "网易系",
                webfont: [
                    { name:"网易UEDC", url: "http://uedc.163.com/", discrible: ""},
                    { name:"网易游戏GUX", url: "http://gux.163.com/", discrible: ""}
                ]
            },
            { type: "其他",
                webfont: [
                     { name:"携程UED", url:"http://ued.ctrip.com/", discrible: "携程旅行前端开发团队携程UED，这是一个血液中流淌着创意和活力的团队，在越来越关注严谨和灵活的过程中成长起来，我们对前端的需求如此强烈，如果你也身在其中你会看到"},
					 { name:"19楼UED", url:"http://blog.19ued.com/", discrible: ""},
					 { name:"5173UED", url:"http://ued.5173.com/", discrible: ""},
					 { name:"迅雷CUED", url:"http://cued.xunlei.com/", discrible: ""},
					 { name:"360UXC", url:"http://uxc.360.cn/", discrible: ""},
					 { name:"昆仑游戏UED", url:"http://www.gameued.com/", discrible: ""},
					 { name:"一号店UED", url:"http://ued.yhd.com/blog", discrible: ""},
					 { name:"京东设计中心", url:"http://jdc.jd.com/", discrible: ""}
                ]
            }
        ]
    },
    { title: "浏览器百宝箱",
        content: [
            { type: "综合",
                webfont: [
                    { name:"谷歌浏览器", url: "https://www.google.com/intl/zh-CN/chrome/browser/", discrible: ""},
                    { name:"火狐浏览器", url: "http://www.firefox.com.cn/", discrible: ""},
                    { name:"Safari浏览器", url: "http://www.apple.com/cn/safari/", discrible: ""},
                    { name:"IE浏览器", url: "http://windows.microsoft.com/zh-cn/internet-explorer/download-ie", discrible: ""}
                ]
            },
            { type: "插件{g:谷歌 , f: 火狐}",
                webfont: [
                    { name:"[g]ChromeDevTools", url: "https://developers.google.com/chrome-developer-tools/?hl=zh-CN", discrible: ""},
                    { name:"[f]FireBUG", url: "https://addons.mozilla.org/zh-CN/firefox/addon/firebug/", discrible: "Firebug插件集成了浏览网页的同时随手可得的丰富开发工具，你可以对任何网页的 CSS、HTML 和 JavaScript 进行实时编辑、调试和监控"},
                    { name:"[f]cssUsage", url: "https://addons.mozilla.org/zh-CN/firefox/addon/css-usage/", discrible: "css-usage插件用于察看哪些CSS被用到"},
                    { name:"[f]YSlow", url: "https://addons.mozilla.org/zh-CN/firefox/addon/yslow/", discrible: "YSlow是Yahoo发布的一款基于FireFox的插件，用于全面分析网站性能"},
                    { name:"[f]WebDeveloper", url: "https://addons.mozilla.org/zh-CN/firefox/addon/web-developer/", discrible: "Web Developer插件用于页面强大的元素分析，它加入了几个菜单与一条工具栏以及多种网页开发者工具"},
                    { name:"[f]HtmlValidator", url: "https://addons.mozilla.org/zh-CN/firefox/addon/html-validator/", discrible: "html-validator插件用于验证网站是否遵守w3c标准，装上该插件后，可以在页面源码模式中检测你的html代码"},
                    { name:"[f]colorzilla", url: "https://addons.mozilla.org/zh-CN/firefox/addon/colorzilla/", discrible: "colorzilla插件用于页面去色、渐变生成等"},
                    { name:"[f]httpfox", url: "https://addons.mozilla.org/ZH-cn/firefox/addon/httpfox/", discrible: "httpfox插件用于HTTP分析器的扩展"}
                ]
            }
        ]
    },
    { title: "前端工具箱",
        content: [
            { type: "页面性能测试",
                webfont: [
                    { name:"阿里测", url: "http://www.alibench.com/", discrible:"阿里巴巴出品的一款专业的网站质量即时探测工具"},
					{ name:"PageSpeed", url: "http://developers.google.com/speed/pagespeed/insights/", discrible: "可以使用 Page Speed 来在线评估网页性能，并获得有关如何改进性能的建议"},
					{ name:"WebPageTest", url: "http://www.webpagetest.org/", discrible: "能够帮助你测试网站在 IE6-IE9，Chrome，Firefox 等各种浏览器环境下的加载速度"},
					{ name:"gtmetrix", url: "http://gtmetrix.com/", discrible: ""},
					{ name:"Fiddler", url: "http://www.telerik.com/download/fiddler", discrible: "Fiddler是最强大最好用的Web调试工具之一，它能记录所有客户端和服务器的http和https请求，允许你监视，设置断点，甚至修改输入输出数据"},
					{ name:"httpwatch", url: "http://www.httpwatch.com/", discrible: "集成在IE和Firefox上的监听HTTP和HTTPS的工具" }
                ]
            },
            { type: "格式化/压缩",
                webfont: [
                    { name:"csscomb", url: "http://csscomb.com/", discrible: "css属性排序工具，可把写好的css按照margin、padding、width、border、background、color顺序排列"},
                    { name:"YUIcompressor", url: "http://yui.github.io/yuicompressor/", discrible: "YUI Compressor 是一个用来压缩 JS 和 CSS 文件的工具，采用Java开发"},
                    { name:"在线CSS/JS压缩", url: "http://tool.css-js.com/", discrible: "CSS, JavaScript 压缩, 美化, 加密, 解密"},
                    { name:"ClosureCompiler", url: "http://closure-compiler.appspot.com/home", discrible: "GOOGLE所用的压缩工具"},
                    { name:"tinypng", url: "https://tinypng.com/", discrible: "TinyPNG使用一种智能有损压缩技术（通过降低图片中的颜色数量，来减少存储图片所需要的数据）来降低PNG 图片的大小"},
                    { name:"smushit", url: "http://www.smushit.com/ysmush.it/", discrible: "雅虎提供的在线图片压缩工具"}
                ]
            },
            { type: "虚拟机",
                webfont: [
                    { name:"IEtester", url: "IETester是一个免费的浏览器，它同时包括了IE 5.5、IE 6、IE 7、IE 8的所有内核，多版本IE测试好工具,DIV测试,CSS兼容和各个版本浏览器兼容检测工具", discrible: ""},
                    { name:"WINXPmode", url: "http://windows.microsoft.com/zh-cn/windows7/install-and-use-windows-xp-mode-in-windows-7", discrible: "win7系统下可自带安装的XP虚拟机"},
                    { name:"vmware", url: "http://www.vmware.com/cn", discrible: ""},
                    { name:"virtualbox", url: "https://www.virtualbox.org/wiki/Downloads", discrible: ""}
                ]
            },
            { type: "数据转换",
                webfont: [
                    { name:"图片转base64", url: "http://webcodertools.com/imagetobase64converter", discrible: "在线图片转base64码"},
                    { name:"在线解析json", url: "http://json.parser.online.fr/", discrible: "在线解析json文件的工具"}
                ]
            },
            { type: "兼容性/支持性",
                webfont: [
                    { name:"caniuse", url: "http://caniuse.com/", discrible: ""},
                    { name:"BrowserSupport", url: "http://www.browsersupport.net/", discrible: ""},
                    { name:"HTML5/CSS3兼容查询", url: "http://fmbip.com/litmus/", discrible: ""}
                ]
            },
            { type: "CSS/JS手册",
                webfont: [
                    { name:"CSS参考手册", url: "http://css.doyoe.com/", discrible: ""},
                    { name:"CSS3参考手册", url: "http://www.zhangxinxu.com/css3/", discrible: "张鑫旭"},
                    { name:"CSS3参考手册", url: "http://www.divcss5.com/css3/", discrible: ""},
                    { name:"原生JS手册", url: "http://www.php100.com/manual/javascript.html", discrible: ""},
                    { name:"jQueryAPI", url: "http://api.jquery.com/", discrible: ""},
                    { name:"jQuery1.7手册", url: "http://www.php100.com/manual/jQuery/", discrible: ""}
                ]
            },
            { type: "其他",
                webfont: [
                    { name:"马克鳗", url: "http://www.getmarkman.com/", discrible: "设计稿标注、测量神器"},
                    { name:"jslint", url: "http://www.jslint.com/", discrible: "JS语法检查"}
                ]
            }
        ]
    },
    { title: "CSS/HTML",
        content: [
            { type: "CSS框架",
                webfont: [
                    { name:"Normalize.css", url: "http://necolas.github.io/normalize.css/", discrible: "Normalize是一个相对平和的css reset方案，注重通用的方案，保留有用的user agent 样式"},
                    { name:"lessFramework", url: "http://lessframework.com/", discrible: "LESS框架是一个轻量级的CSS框架,它使您能够构建灵活的多列的网站布局"},
                    { name:"Formee", url: "http://www.formee.org/", discrible: "Formee是一个CSS框架,帮助您轻松地创建跨浏览器的web表单"},
                    { name:"960GRID", url: "http://960.gs/", discrible: "960GS是一个CSS网格系统框架，更为灵活的网格设计"},
                    { name:"ResponsiveGridSystem", url: "http://responsive.gs/", discrible: "流体网格CSS框架,用于快速、直观的开发响应性网站，可以使用12列、16列和24列响应式网格设计"}
                ]
            },
            { type: "UI框架",
                webfont: [
                    { name:"Bootstrap", url: "http://getbootstrap.com/", discrible: "Bootstrap是快速开发Web应用程序的前端工具包，它是一个CSS和HTML的集合，它使用了最新的浏览器技术，给你的Web开发提供了时尚的版式"},
                    { name:"Flat UI", url: "http://designmodo.github.io/Flat-UI/", discrible: "Flat UI是一套精美的扁平风格UI 工具包，基于 Twitter Bootstrap 实现"},
                    { name:"pure", url: "http://purecss.io/", discrible: "Pure是来自雅虎的CSS框架，框架基于响应式设计，提供多种样式的组件，包括表格、表单、按钮、表、导航等"},
                    { name:"MetroUI", url: "http://metroui.org.ua/", discrible: "MetroUI CSS 是一套实现了Windows8 Metro风格界面的CSS框架"},
                    { name:"Maxmertkit", url: "http://www.maxmert.com/", discrible: "Maxmertkit是一个全新的前端框架，拥有类似boostrap的UI但是提供了不同的组件内容"},
                    { name:"Semantic UI", url: "http://semantic-ui.com/", discrible: "语义化设计的前端框架，为攻城师而制作的可复用的开源前端框架"}
                ]
            },
            { type: "CSS资源库",
                webfont: [
                    { name:"cssReset", url: "http://www.cssreset.com/", discrible: "搜集了各种css reset解决方案"},
                    { name:"IE默认CSS", url: "http://www.iecss.com/", discrible: ""},
                    { name:"浏览器hack大全", url: "http://browserhacks.com/", discrible: ""},
                    { name:"cssValues", url: "http://cssvalues.com/", discrible: ""},
                    { name:"animate动画库", url: "http://daneden.github.io/animate.css/", discrible: ""},
                    { name:"CSS3lib动画库", url: "http://css3lib.alloyteam.com/", discrible: "由腾讯AlloyTeam搜集和整理的CSS3动画库"},
                    { name:"ECD动画库", url: "http://ecd.tencent.com/css3/index.html", discrible: "由腾讯电商前端团队编写的CSS3动画库"},
                    { name:"css3please", url: "http://css3please.com/", discrible: "常用的CSS3具体代码参考"},
                    { name:"css3ClickChart", url: "http://css3clickchart.com/", discrible: "可以查询到目前CSS3草案部分的相关属性"}
                ]
            },
            { type: "技巧/教程",
                webfont: [
                    { name:"W3SCHOO", url: "http://www.w3school.com.cn/css3/", discrible: ""},
                    { name:"W3CPLUS", url: "http://www.w3cplus.com/blog/tags/11.html", discrible: ""},
                    { name:"Mozilla CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3", discrible: ""}
                ]
            }
        ]
    },
    { title: "JAVASCRIPT",
        content: [
            { type: "综合",
                webfont: [
                    { name:"jQuery", url: "http://jquery.com/", discrible: "jQuery是继prototype之后又一个优秀的Javascrīpt框架。其宗旨是——WRITE LESS,DO MORE,写更少的代码,做更多的事情。"},
                    { name:"mootools", url: "http://mootools.net/", discrible: "MooTools是一个简洁，模块化，面向对象的JavaScript框架，它能够帮助你更快，更简单地编写可扩展和兼容性强的JavaScript代码"},
                    { name:"Dojo", url: "http://dojotoolkit.org/", discrible: "Dojo是一个强大的面向对象JavaScript框架，主要由三大模块组成：Core、Dijit、DojoX"},
                    { name:"ExtJS", url: "http://www.sencha.com/products/extjs/", discrible: "ExtJS是一种主要用于创建前端用户界面，是一个基本与后台技术无关的前端Ajax框架"},
                    { name:"Prototype.js", url: "http://prototypejs.org/", discrible: "Prototype.js 是一个由Sam Stephenson写的JavaScript包，是目前应用最为广泛的Ajax开发框架，其的特点是功能实用而且尺寸较小，非常适合在中小型的Web应用中使用"},
                    { name:"YUI", url: "http://yuilibrary.com/", discrible: "Yahoo! UI Library (YUI) 是一个开放源代码的 JavaScript 函数库，为了能建立一个高互动的网页，它采用了AJAX, DHTML 和 DOM 等程式码技术，它也包含了许多 CSS 资源"},
                    { name:"sizzlejs", url: "http://sizzlejs.com/", discrible: "Sizzle是jQuery作者John Resig开发的DOM选择器引擎(Dom Selector Engine)"},
                    { name:"Zepto", url: "http://zeptojs.com/", discrible: "Zepto是一个轻量级的针对现代高级浏览器的JavaScript库， 它与jquery有着类似的api。 如果你会用jquery，那么你也会用zepto"},
                    { name:"Moment.js", url: "http://momentjs.com/", discrible: "一款大名鼎鼎的js日期处理插件"},
                    { name:"facebook开源的最新js框架", url: "http://facebook.github.io/react/", discrible: "facebook开源的最新js框架"}
                ]
            },
            { type: "node.js",
                webfont: [
                    { name:"node.js官方", url: "http://www.nodejs.org/", discrible: "Node.js是一个基于Chrome V8引擎封装后运行的一个平台"},
                    { name:"node.js中文社区", url: "http://cnodejs.org/", discrible: "CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入"},
                ]
            },
            { type: "grunt.js",
                webfont: [
                    { name:"grunt.js官方", url: "http://gruntjs.com/", discrible: "Grunt是一个基于node.js的自动化项目构建工具，支持压缩、合并、测试等功能"},
                    { name:"grunt.js中文站点", url: "http://gruntjs.cn/", discrible: ""},
                    { name:"Yeoman", url: "http://yeoman.io/", discrible: "一款前端自动化工作流工具，集成Grunt和bower，实现了项目的快速搭建、自动化前端构建，以及前端包依赖和包管理"}
                ]
            },
            { type: "gulp.js",
                webfont: [
                    { name:"gulpjs官方", url: "http://gulpjs.com/", discrible: "比Grunt更简单的自动化的项目构建利器"},
                    { name:"智图gulp插件", url: "https://github.com/targetkiller/gulp-imageisux", discrible: "腾讯智图，一款图片压缩产品，支持生成webp/jpg/png。此为gulp插件，基于智图的api，实测压缩率大于Tinypng"},
                ]
            },
            { type: "MVC",
                webfont: [
                    { name:"backbonejs", url: "http://backbonejs.org/", discrible: "Backbone.js是一个可以在前端组织MVC的javascript框架"},
                    { name:"angularjs", url: "http://angularjs.org/", discrible: "AngularJS是由Google创建的一种JS框架，使用它可以扩展应用程序中的HTML词汇，从而在web应用程序中使用HTML声明动态内容"},
                    { name:"emberjs", url: "http://emberjs.com/", discrible: "Ember.js同样是一个用于创建web应用的JavaScript MVC 框架"},
                    { name:"knockoutjs", url: "http://knockoutjs.com/", discrible: "Knockout 是个JavaScript library，帮助创建丰富的显示和编辑器UI，通过干净的底层数据模型，你可以在任何时候动态更新UI的选择部分"},
                ]
            },
            { type: "模块化",
                webfont: [
                    { name:"commonjs", url: "http://www.commonjs.org/", discrible: ""},
                    { name:"seajs", url: "http://seajs.org/docs/", discrible: ""},
                    { name:"requirejs", url: "http://requirejs.org/", discrible: ""},
                    { name:"nodejs", url: "http://nodejs.org/", discrible: ""},
                    { name:"curl.js", url: "http://nodejs.org/", discrible: ""}
                ]
            },
            { type: "HTML5框架",
                webfont: [
                    { name:"ImpactJS", url: "http://impactjs.com/", discrible: "ImpactJS是一个基于JavaScript的HTML5游戏引擎，同时支持PC和移动平台浏览器。它是目前除了Construct2之外最受欢迎的HTML5游戏引擎，使用需要支付99美元"},
                    { name:"createjs", url: "http://www.createjs.com/", discrible: "CreateJS是Adobe官方赞助的开源开发框架，它大部分API都是基于Flash原有的API来模仿实现的，并且官方提供了直接把Flash动画转成JS数据包的工具，调用起来很方便"},
                    { name:"craftyjs", url: "http://craftyjs.com/", discrible: "Crafty是一个体积小、简单、轻量级的2D的HTML5游戏引擎，它提供了通过Canvas或DOM来绘制实体，提供了精灵Map以及SAT高级碰撞监测支持"},
                    { name:"threejs", url: "http://threejs.org/", discrible: "Three.js是一个轻量级的JavaScript库，用于在浏览器上创建和显示3D图形"},
                    { name:"melonjs", url: "http://melonjs.org/", discrible: "melonJS是melonJS团队对Javascript热情以及开发经验的结晶，是一个简单、免费、而且独立的类库"},
                    { name:"gamejs", url: "http://gamejs.org/", discrible: "GameJs是一个轻量的JavaScript游戏引擎，用于基于HTML5 Canvas的游戏开发"},
                    { name:"LimeJS", url: "http://www.limejs.com/", discrible: "LimeJS是一个JavaScript游戏开发框架，允许开发者创建基于HTML5的游戏，支持主流浏览器包括iOS"},
                    { name:"audio5js", url: "http://zohararad.github.io/audio5js/", discrible: "HTML5 音频真棒，很容易实现，性能也很好。唯一能阻止你使用的可能就是旧版浏览器不支持。Audio5js 是一个轻量级的 JavaScript 库 ，很好地解决了这一兼容性问题"}
                ]
            },
            { type: "技巧/教程",
                webfont: [
                    { name:"JS秘密花园", url: "http://bonsaiden.github.io/JavaScript-Garden/zh/", discrible: "JavaScript秘密花园是一个不断更新，主要关心JavaScript一些古怪用法的文档"},
                    { name:"MozillaJavaScriptGuide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", discrible: "Mozilla Developer Network出的JS教程"},
                    { name:"GoogleJavaScriptGuide", url: "http://chajn.org/jsguide/javascriptguide.html", discrible: ""},
                    { name:"JavaScriptSource", url: "http://www.javascriptsource.com/", discrible: "高质量JS源码实例分享学习网站"}
                ]
            },
            { type: "jQuery插件",
                webfont: [
                    { name:"jQueryUI", url: "http://jqueryui.com/", discrible: "jQueryUI是一套jQuery的页面UI插件，包含很多种常用的页面效果，例如 Tab切换 、对话框、拖放效果、日期选择、颜色选择、数据排序、窗体大小调整等"},
                    { name:"validate", url: "http://jqueryvalidation.org/", discrible: "jquery.validate.js是jquery下的一个验证插件，功能比较强大"},
                    { name:"colorbox", url: "http://plugins.jquery.com/colorbox/", discrible: "ColorBox是一个基于jQuery的轻量级，自定义弹出灯箱插件，功能非常强大，支持图片，图片组，ajax，inline和iframed内容，灯箱样式完全由用户控制"},
                    { name:"datepicker", url: "http://marcgrabanski.com/jquery-ui-datepicker/", discrible: "jQuery UI Datepicker作为jQuery UI的日期选择组件在日常开发中使用还是非常广泛的"},
                    { name:"fullPage.js", url: "https://github.com/alvarotrigo/fullPage.js", discrible: "一款JQuery的插件，让你轻松实现满屏滚动"}
                ]
            }
        ]
    },
    { title: "多终端",
        content: [
            { type: "UI/JS框架",
                webfont: [
                    { name:"jQueryMobile", url: "http://jquerymobile.com/", discrible: "jQuery Mobile（jQueryMobile）是jQuery在手机上和平板设备上的版本，支持全球主流的移动平台"},
                    { name:"Joapp", url: "http://joapp.com/", discrible: "Jo是一款开源的HTML5移动应用框架，允许开发者创建基于iOS、webOS、Symbian和Android平台的移动应用"},
                    { name:"52framework", url: "http://52framework.com/", discrible: "52Framework是最流行的HTML5和CSS3的框架之一"},
                    { name:"Fries", url: "http://getfri.es/", discrible: "Fries是一个用于创建类似于Android原生UI的框架"},
                    { name:"zoey", url: "http://blog.angeloff.name/zoey/", discrible: "提供了一些标准的UI控件，非常适合于创建简单的移动Web应用"}
                ]
            },
            { type: "工具/资源",
                webfont: [
                    { name:"HTML5支持性查询", url: "http://mobilehtml5.org/", discrible: "HTML5支持性查询"},
                    { name:"多终端屏幕分辨率查询", url: "http://screensiz.es/phon", discrible: "HTML5支持性查询"},
                    { name:"HTML5浏览器测试", url: "http://html5test.com/", discrible: "HTML5支持性查询"},
                    { name:"html5please", url: "http://html5please.com/", discrible: "查看最新HTML5 CSS3特性的站点"}
                ]
            },
            { type: "技巧/教程",
                webfont: [
                    { name:"WIN8开发指南", url: "http://msdn.microsoft.com/library/windows/apps/br211385.aspx", discrible: ""},
                    { name:"IOS官方教程", url: "https://developer.apple.com/cn/technologies/ios/", discrible: ""}
                ]
            }
        ]
    },
    { title: "综合资源库",
        content: [
            { type: "前端书籍推荐",
                webfont: [
                    { name:"JavaScript高级程序设计(第3版)", url: "http://www.amazon.cn/gp/product/B007OQQVMY/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B007OQQVMY&linkCode=as2&tag=whycss-23", discrible: ""},
					{ name:"JavaScript权威指南(第6版)", url: "http://www.amazon.cn/gp/product/B007VISQ1Y/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B007VISQ1Y&linkCode=as2&tag=whycss-23", discrible: ""},
					{ name:"JavaScript DOM编程艺术(第2版)", url: "http://www.amazon.cn/gp/product/B004VJM5KE/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B004VJM5KE&linkCode=as2&tag=whycss-23", discrible: ""},
					{ name:"JavaScript设计模式", url: "http://www.amazon.cn/gp/product/B00D6MT3LG/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00D6MT3LG&linkCode=as2&tag=whycss-23", discrible: ""},
					{ name:"锋利的jQuery(第2版)", url: "http://www.amazon.cn/gp/product/B0089TDFNS/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0089TDFNS&linkCode=as2&tag=whycss-23", discrible: ""},
					{ name:"JavaScript语言精粹(修订版)", url: "http://www.amazon.cn/gp/product/B0097CON2S/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0097CON2S&linkCode=as2&tag=whycss-23", discrible: ""},
					{ name:"JavaScript模式", url: "http://www.amazon.cn/gp/product/B008QTG1HS/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B008QTG1HS&linkCode=as2&tag=whycss-23", discrible: ""},
					{ name:"HTTP权威指南", url: "http://www.amazon.cn/gp/product/B008XFDQ14/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B008XFDQ14&linkCode=as2&tag=whycss-23", discrible: ""},
					{ name:"深入浅出Node.js", url: "http://www.amazon.cn/gp/product/B00GOM5IL4/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B00GOM5IL4&linkCode=as2&tag=whycss-23", discrible: ""},
					{ name:"精通正则表达式(第3版)", url: "http://www.amazon.cn/gp/product/B008UCHA58/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B008UCHA58&linkCode=as2&tag=whycss-23", discrible: ""}
                ]
            },
            { type: "周刊/订阅",
                webfont: [
                    { name:"JavaScriptWeekly", url: "http://javascriptweekly.com/", discrible: "关于JavaScript新闻和文章的每周邮件聚合订阅"},
                    { name:"HTML5Weekly", url: "http://html5weekly.com/", discrible: "HTML5 周刊，关注最新动态"},
                    { name:"SidebarIO", url: "http://sidebar.io/", discrible: "关于设计的The best design links, every day. 可以订阅daily, twice a week, weekly"},
                    { name:"奇舞团周刊", url: "http://www.75team.com/weekly/", discrible: "奇舞团的周刊，内容质量很高，比较精"},
                    { name:"码农周刊", url: "http://weekly.manong.io/", discrible: "综合的码农相关文章，资料很多，覆盖面广"},
                    { name:"OurJS周刊", url: "http://ourjs.com/", discrible: "很多 JS 有关的文章，比较好"},
                    { name:"WebDesignWeekly", url: "http://web-design-weekly.com/", discrible: "设计动向和经典作品"},
                    { name:"WebToolsWeekly", url: "http://webtoolsweekly.com/", discrible: "最新的开发工具、插件组件等等"},
                    { name:"ResponsiveDesignWeekly", url: "http://responsivedesignweekly.com/", discrible: "响应式设计动态、技巧等"},
                    { name:"FeWeekly", url: "http://www.feweekly.com/", discrible: "聚焦最新前端技术、框架、教程、工具、资讯和文章"}
                ]
            },
            { type: "互联网业界",
                webfont: [
                    { name:"infoq", url: "http://www.infoq.com/cn/", discrible: "促进软件开发领域知识与创新的传播,覆盖众多领域"},
                    { name:"36氪", url: "http://www.36kr.com/", discrible: "报道最新的互联网新闻及最有潜力的互联网创业企业"},
                    { name:"极客公园", url: "http://www.geekpark.net/", discrible: "热点产品的深度分析，发掘产品和趋势的价值"},
                    { name:"爱范儿", url: "http://www.ifanr.com/", discrible: "爱范儿成立于2008年10月，依托于国内移动互联网的发展大潮，用敏锐的触觉，出色的内容，聚焦 TMT 领域资讯，迅速成为国内最为出色的新锐科技媒体"}
                ]
            },
            { type: "问答社区",
                webfont: [
                    { name:"stackoverflow", url: "http://stackoverflow.com/", discrible: ""},
                    { name:"quora", url: "http://www.quora.com/", discrible: ""},
                    { name:"知乎", url: "http://www.zhihu.com/", discrible: ""}
                ]
            }
        ]
    },
    { title: "设计和交互",
        content: [
            { type: "综合",
                webfont: [
                    { name:"Dribbble", url: "http://dribbble.com/", discrible: "UI设计师必备站点,全球最好的UI设计社区"},
                    { name:"站酷", url: "http://www.zcool.com.cn/", discrible: "站酷网是中国最具人气的大型综合性设计网站，2006年8月创立于北京。"},
                    { name:"优设", url: "http://www.uisdc.com/", discrible: ""},
                    { name:"iconfans", url: "http://www.iconfans.org/", discrible: ""},
                    { name:"视觉同盟", url: "http://www.visionunion.com/", discrible: ""},
                    { name:"视觉中国", url: "http://shijue.me/", discrible: ""},
                    { name:"68design", url: "http://68design.net/", discrible: ""},
                    { name:"UI中国", url: "http://www.ui.cn/", discrible: ""}
                ]
            },
            { type: "社区/组织",
                webfont: [
                    { name:"UPA中国", url: "http://www.uxpachina.org/", discrible: "成立于2004年4月18日， 北京光华设计发展基金会用户体验研究中心(DDF.UPA中国)是中国本土的第一个非盈利性可用性组织，它为我们中国那些活跃在产品分析，设计，实现，和评估等领域内，旨在为为人类创造更高可用性的产品的人们提供一个专业的交流和学习平台"},
                    { name:"IXDC", url: "http://ixdc.org/", discrible: "国际体验设计协会（IXDC）是由20多家中国知名公司和大学联合支持在2010年成立的非盈利机构。向社会推广体验创新价值的理念是首要职责，搭建展示和交流的国际平台是重要任务"}
                ]
            },
            { type: "图标",
                webfont: [
                    { name:"iconfinder", url: "https://www.iconfinder.com/", discrible: ""},
                    { name:"findicons", url: "http://findicons.com/", discrible: ""},
                    { name:"icon font", url: "http://www.iconfont.cn/", discrible: "阿里巴巴矢量图标库"}
                ]
            },
            { type: "字体",
                webfont: [
                    { name:"Google Fonts", url: "https://www.google.com/fonts", discrible: "Google在线WEB字体，可下载或在线定制"},
                    { name:"Chinaz Fon", url: "http://font.chinaz.com/", discrible: "站长之家字体素材库"},
                    { name:"Knowsky Font", url: "http://font.knowsky.com/", discrible: "字体下载大宝库"}
                ]
            },
            { type: "配色",
                webfont: [
                    { name:"kuler", url: "https://kuler.adobe.com/create/color-wheel/", discrible: "Adob​​e旗下配色网站，创建和共享颜色主题"},
                    { name:"peise", url: "http://www.peise.net/tools/web/", discrible: ""},
                    { name:"ColorSchemeDesigner", url: "http://colorschemedesigner.com/", discrible: ""},
                    { name:"DesignSeeds", url: "http://www.design-seeds.com/", discrible: "创立于2009年的设计配色网站"},
                    { name:"colorCombos", url: "http://www.colorcombos.com/combolibrary.html", discrible: "提供了各种WEB配色方案"}
                ]
            },
            { type: "交互/思维导图",
                webfont: [
                    { name:"processon", url: "http://www.processon.com/", discrible: "ProcessOn是一个方便易用、免费高效的在线作图工具，运用它可以免费制作多种图，例如：Flowchart流程图，BPMN图等"},
                    { name:"mindManager", url: "http://www.mindjet.com/mindmanager/", discrible: "mindManager是由Mindjet公司开发的一款商业项目管理的应用程序，可以让用户通过思维导图的方法进行可视化的知识管理"}
                ]
            },
            { type: "其他",
                webfont: [
                    { name:"MobilePatterns", url: "http://www.mobile-patterns.com/", discrible: "一个集合iOS界面截图给设计者灵感的酷站"},
                    { name:"pixeden", url: "http://www.pixeden.com/", discrible: "免费优质界面设计源文件及有网站模板"},
                    { name:"全球LOGO汇集", url: "http://logopond.com/", discrible: "一个汇集了全球LOGO的网站"}
                ]
            }
        ]
    }
]
/*
G_contentSource 结构说明
G_contentSource = {
    html: [导航栏目
        {id: 序号,
         type: 内容类型, 
         title:内容标题,
         titleClass: 内容样式,
         discription: 内容简述,
         contentClass: 内容简述样式, 
         linkPath: 查看内容具体信息路径,
         aStyle: 查看内容具体信息a标签的样式 
        }
    ]
};
*/
const G_contentSource = {
    index: [
        {id: 1, type: "方式",title:"费曼学习法", titleClass: "content-modle-title",
         discription:"李笑来在《新生》一书里提到：概念是一切知识架构的基石。所谓的“独立思考” ，对其最朴素的描述无非是：能够独立地、正确地使用正确的概念",
         contentClass:"content-modle-discription", linkPath:"index/feiMan.html", aStyle: "content-modle-more"
        },
        {id: 2, type: "方式",title:"思维导图学习法", titleClass: "content-modle-title",
         discription:"思维导图学习法的好处很多：方便记录，加强记忆; 过程非常自由，结果十分清晰;",
         contentClass:"content-modle-discription", linkPath:"index/xmind.html", aStyle: "content-modle-more"
        },
        {id: 3, type: "方式",title:"SQ3R阅读法", titleClass: "content-modle-title",
            discription:"SQ3R这个阅读技巧的名字由五个单词的首字母组成，分别是Surveyl（浏览），Question（提问）， Read（阅读）， Recite（复述）， Review（复习）",
            contentClass:"content-modle-discription", linkPath:"index/xmind.html", aStyle: "content-modle-more"
        }
    ],
    html: [
        {id: 1, type: "公共", title:"html定义", titleClass: "content-modle-title",  discription:"HTML ,是超文本标记语言的英文缩写，是为网页创建和其他可在网页浏览器展示文字、以及非文字如图片、链接、音乐和程序等信息而设计的一种标记语言。", contentClass:"content-modle-discription", linkPath:"source/text.txt", aStyle: "content-modle-more"},
        {id: 2, type: "公共",title:"标准通用标记语言", titleClass: "content-modle-title",  discription:"标准通用标记语言 ,又称通用标言，是一种定义电子文档结构、描述其内容的国际标准语言，有良好的扩展性，常用于数据分类和索引。一般在科技文献和政府办公中广泛应用。", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"}
    ],
    CSS: [
        {id: 1, type: "公共", title:"CSS历史", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"},
        {id: 2, type: "CSS",title:"CSS定义", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"}
    ],
    JavaScript: [
        {id: 1, type: "Json",title:"JSON概念", titleClass: "content-modle-title",  discription:"ECMA-262(E3) 中没有将JSON概念写到标准中，还好在 ECMA-262(E5) 中JSON的概念被正式引入了，包括全局的JSON对象和Date的toJSON方法。", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"},
        {id: 2, type: "Json",title:"转换JSON的几种方式", titleClass: "content-modle-title",  discription:"方式1：eval(),　方式2: 构造函数Function(), 方式3：使用全局的JSON对象JSON.parse()", linkPath:"index/switchjson.html", aStyle: "content-modle-more"},
        {id: 2, type: "JS",title:"JS设计模式类别", titleClass: "content-modle-title",  discription:"设计模式确定所包含的类和实例、它们的角色，协作方式以及职责分配。", linkPath:"index/JavascriptMoudle.html", aStyle: "content-modle-more"}
    ],
    echarts: [
        {id: 1, type: "公共", title:"echarts", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"},
        {id: 2, type: "echarts",title:"echarts", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"}
    ],
    react: [
        {id: 1, type: "react", title:"什么是react？", titleClass: "content-modle-title",  discription:"React 是一个性能高、逻辑简单，且用于构建用户界面的JavaScript库", contentClass:"content-modle-discription", linkPath:"doc/react.html", aStyle: "content-modle-more"},
        {id: 2, type: "react",title:"react", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"}
    ],
    IFT: [
        {id: 0, type: "公共", title:"百度IFE前端技术学院", titleClass: "content-modle-title",  discription:"由百度创办的免费前端技术学习实践、交流、分享平台。由百度校园招聘组、百度校园品牌部、百度前端技术部以及多个百度的前端团队联合创办。", contentClass:"content-modle-discription", linkPath:"http://ife.baidu.com/", aStyle: "content-modle-more"},
        {id: 1, type: "HTML",title:"任务一 零基础HTML编码", titleClass: "content-modle-title",  discription:"HTML ,是超文本标记语言的英文缩写，是为网页创建和其他可在网页浏览器展示文字、以及非文字如图片、链接、音乐和程序等信息而设计的一种标记语言。", contentClass:"content-modle-discription", linkPath:"HTML_task/01/01.html", aStyle: "content-modle-more"},
        {id: 2, type: "HTML",title:"任务二 HTML基础与css编码", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"HTML_task/02/02.html", aStyle: "content-modle-more"},
        {id: 3, type: "HTML",title:"任务三 三栏式布局", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"HTML_task/03/03.html", aStyle: "content-modle-more"},
        {id: 4, type: "HTML",title:"任务四 定位与居中", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"HTML_task/04/04.html", aStyle: "content-modle-more"},
        {id: 5, type: "HTML",title:"任务五", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"HTML_task/05/05.html", aStyle: "content-modle-more"},
        {id: 6, type: "HTML",title:"任务六", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"HTML_task/06/06.html", aStyle: "content-modle-more"},
        {id: 7, type: "HTML",title:"任务七", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"HTML_task/07/07.html", aStyle: "content-modle-more"},
        {id: 1, type: "JS",title:"任务一 DOM文档结构", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/01/01.html", aStyle: "content-modle-more"},
        {id: 2, type: "JS",title:"任务二 js的if、for等取赋值", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/02/02.html", aStyle: "content-modle-more"},
        {id: 3, type: "JS",title:"任务三", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/03/03.html", aStyle: "content-modle-more"},
        {id: 4, type: "JS",title:"任务四", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/04/04.html", aStyle: "content-modle-more"},
        {id: 5, type: "JS",title:"任务五", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/05/05.html", aStyle: "content-modle-more"},
        {id: 6, type: "JS",title:"任务六", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/06/06.html", aStyle: "content-modle-more"},
        {id: 7, type: "JS",title:"任务七", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/07/07.html", aStyle: "content-modle-more"},
        {id: 8, type: "JS",title:"任务八", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/08/08.html", aStyle: "content-modle-more"},
        {id: 9, type: "JS",title:"任务九 ", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/09/09.html", aStyle: "content-modle-more"},
        {id: 10, type: "JS",title:"任务十", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/10/10.html", aStyle: "content-modle-more"},
        {id: 11, type: "JS",title:"任务十一", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/11/11.html", aStyle: "content-modle-more"},
        {id: 12, type: "JS",title:"任务十二", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/12/12.html", aStyle: "content-modle-more"},
        {id: 13, type: "JS",title:"任务十三", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/13/13.html", aStyle: "content-modle-more"},
        {id: 14, type: "JS",title:"任务十四", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/14/14.html", aStyle: "content-modle-more"},
        {id: 15, type: "JS",title:"任务十五", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/15/15.html", aStyle: "content-modle-more"},
        {id: 16, type: "JS",title:"任务十六", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/16/16.html", aStyle: "content-modle-more"},
        {id: 17, type: "JS",title:"任务十七", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/17/17.html", aStyle: "content-modle-more"},
        {id: 18, type: "JS",title:"任务十八", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/18/18.html", aStyle: "content-modle-more"}
    ],
    audition: [
        {id: 1, type: "react", title:"react", titleClass: "content-modle-title",  discription:"面试 ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"},
        {id: 2, type: "react",title:"react", titleClass: "content-modle-title",  discription:"面试 ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"}
    ],
    webaddress: G_webSource,
    other:[
        {id: 1, type: "scroll", title:"原生js编写滚动条样式", titleClass: "content-modle-title",  discription:"原生js编写滚动条样式", contentClass:"content-modle-discription", linkPath:"index/scroll.html", aStyle: "content-modle-more"},
    ]
};