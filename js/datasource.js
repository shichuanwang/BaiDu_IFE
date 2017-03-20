// 设置公共对象样式
const styles = {
    navline: "float:left;width:90px;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;",// 导航栏目样式
    webfont: {
        wrapper:"width:100%;border-bottom:1px dotted #005f3c;",
        title: "width:100%;height:35px;text-align:center;line-height:35px;background:#005f3c;color:#9dccb6;",
        type: "margin:5px;padding:0 5px;background:#9dccb6;font-size:14px;color:#005f3c;border-radius:2px;",
        webfont: "display:inline-block;font-size:12px;color:#005f3c;margin: 0 5px;"
    }
}

//每页内容条数 设为number
const G_PAGECOUNT = 15;

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
    { linkPath: "" , navType: "audition", text:"面试" }
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
                    { name:"HTML5研究小组", url: "http://www.mhtml5.com/", discrible: "HTML5研究小组是由个人和企业HTML5开发者于2011年共同发起，是中国首个HTML5推广和交流的开放组织，于2012年2月正式加入W3C"},
                    { name:"阿里技术嘉年华", url: "http://adc.alibabatech.org/", discrible: ""},
                    { name:"京/沪JS", url: "http://jsconf.cn/", discrible: ""},
                    { name:"前端圈", url: "http://fequan.com/", discrible: ""},
                    { name:"HTML5梦工厂", url: "http://www.html5dw.com/", discrible: ""},
                    { name:"无障碍联盟", url: "http://accessibilityunion.org/", discrible: ""}
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
                    { name:"腾讯TGideas", url: "http://tgideas.qq.com", discrible: ""}
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
            { type: "腾讯系",
                webfont: [
                    { name:"腾讯TGideas", url: "http://tgideas.qq.com", discrible: ""}
                ]
            }
        ]
    },
    { title: "CSS/HTML",
        content: [
            { type: "CSS框架",
                webfont: [
                    { name:"Normalize.css", url: "http://necolas.github.io/normalize.css/", discrible: ""},
                    { name:"lessFramework", url: "http://lessframework.com/", discrible: ""},
                    { name:"Formee", url: "http://www.formee.org/", discrible: ""},
                    { name:"960GRID", url: "http://960.gs/", discrible: ""},
                    { name:"ResponsiveGridSystem", url: "http://responsive.gs/", discrible: ""}
                ]
            }
        ]
    },
    { title: "JAVASCRIPT",
        content: [
            { type: "腾讯系",
                webfont: [
                    { name:"腾讯TGideas", url: "http://tgideas.qq.com", discrible: ""}
                ]
            }
        ]
    },
    { title: "多终端",
        content: [
            { type: "腾讯系",
                webfont: [
                    { name:"腾讯TGideas", url: "http://tgideas.qq.com", discrible: ""}
                ]
            }
        ]
    },
    { title: "综合资源库",
        content: [
            { type: "腾讯系",
                webfont: [
                    { name:"腾讯TGideas", url: "http://tgideas.qq.com", discrible: ""}
                ]
            }
        ]
    },
    { title: "设计和交互",
        content: [
            { type: "腾讯系",
                webfont: [
                    { name:"腾讯TGideas", url: "http://tgideas.qq.com", discrible: ""}
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
        {id: 1, type: "公共", title:"html历史", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"},
        {id: 2, type: "HTML5",title:"html语义化", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"}
    ],
    CSS: [
        {id: 1, type: "公共", title:"CSS历史", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"},
        {id: 2, type: "CSS",title:"CSS定义", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"}
    ],
    JavaScript: [
        {id: 1, type: "公共", title:"JavaScript", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"},
        {id: 2, type: "JavaScript",title:"JavaScript", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"}
    ],
    echarts: [
        {id: 1, type: "公共", title:"echarts", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"},
        {id: 2, type: "echarts",title:"echarts", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"}
    ],
    react: [
        {id: 1, type: "react", title:"react", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"},
        {id: 2, type: "react",title:"react", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"}
    ],
    IFT: [
        {id: 0, type: "公共", title:"什么是IFE？", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"},
        {id: 1, type: "HTML",title:"任务一 HTML语义化", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"HTML_task/01/01.html", aStyle: "content-modle-more"},
        {id: 2, type: "HTML",title:"任务二 HTML基础与css编码", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"HTML_task/02/02.html", aStyle: "content-modle-more"},
        {id: 3, type: "HTML",title:"任务三 三栏式布局", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"HTML_task/03/03.html", aStyle: "content-modle-more"},
        {id: 4, type: "HTML",title:"任务四 定位与居中", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"HTML_task/04/04.html", aStyle: "content-modle-more"},
        {id: 5, type: "HTML",title:"任务五", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"HTML_task/05/05.html", aStyle: "content-modle-more"},
        {id: 6, type: "HTML",title:"任务六", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"HTML_task/06/06.html", aStyle: "content-modle-more"},
        {id: 7, type: "HTML",title:"任务七", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"HTML_task/07/07.html", aStyle: "content-modle-more"},
        {id: 1, type: "JavaScript",title:"任务一 DOM文档结构", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/01/01.html", aStyle: "content-modle-more"},
        {id: 2, type: "JavaScript",title:"任务二 js的if、for等取赋值", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/02/02.html", aStyle: "content-modle-more"},
        {id: 3, type: "JavaScript",title:"任务三", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/03/03.html", aStyle: "content-modle-more"},
        {id: 4, type: "JavaScript",title:"任务四", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/04/04.html", aStyle: "content-modle-more"},
        {id: 5, type: "JavaScript",title:"任务五", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/05/05.html", aStyle: "content-modle-more"},
        {id: 6, type: "JavaScript",title:"任务六", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/06/06.html", aStyle: "content-modle-more"},
        {id: 7, type: "JavaScript",title:"任务七", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/07/07.html", aStyle: "content-modle-more"},
        {id: 8, type: "JavaScript",title:"任务八", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/08/08.html", aStyle: "content-modle-more"},
        {id: 9, type: "JavaScript",title:"任务九 ", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/09/09.html", aStyle: "content-modle-more"},
        {id: 10, type: "JavaScript",title:"任务十", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/10/10.html", aStyle: "content-modle-more"},
        {id: 11, type: "JavaScript",title:"任务十一", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/11/11.html", aStyle: "content-modle-more"},
        {id: 12, type: "JavaScript",title:"任务十二", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/12/12.html", aStyle: "content-modle-more"},
        {id: 13, type: "JavaScript",title:"任务十三", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/13/13.html", aStyle: "content-modle-more"},
        {id: 14, type: "JavaScript",title:"任务十四", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/14/14.html", aStyle: "content-modle-more"},
        {id: 15, type: "JavaScript",title:"任务十五", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/15/15.html", aStyle: "content-modle-more"},
        {id: 16, type: "JavaScript",title:"任务十六", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/16/16.html", aStyle: "content-modle-more"},
        {id: 17, type: "JavaScript",title:"任务十七", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/17/17.html", aStyle: "content-modle-more"},
        {id: 18, type: "JavaScript",title:"任务十八", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"JS_task/18/18.html", aStyle: "content-modle-more"}
    ],
    audition: [
        {id: 1, type: "react", title:"react", titleClass: "content-modle-title",  discription:"面试 ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"},
        {id: 2, type: "react",title:"react", titleClass: "content-modle-title",  discription:"面试 ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"}
    ],
};