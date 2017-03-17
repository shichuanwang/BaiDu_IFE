// 设置公共对象样式
const styles = {
    navline: "float:left;width:90px;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;",// 导航栏目样式
    webfont: {
        wrapper:"width:100%;",
        title: "width:100%;height:35px;text-align:center;line-height:35px;background:#5a887b;color:#9dccb6;"
    }
}

// 设置公共的数据源 , 所用名称前加上大写G_
// 导航条数据
const G_navData = [
    { linkPath: "" , navType: "index", text:"首页" },
    { linkPath: "" , navType: "html", text:"html" },
    { linkPath: "" , navType: "CSS", text:"CSS3" },
    { linkPath: "" , navType: "JavaScript", text:"javaScript" },
    { linkPath: "" , navType: "echarts", text:"echarts" },
    { linkPath: "" , navType: "react", text:"react" },
    { linkPath: "" , navType: "IFT", text:"百度IFE任务" }
];


// 前端资源网站汇总
const G_webSource = [
    { title: "前端这个圈子",
      content: [
            { type: "社区/组织",
                webfont: [
                    { name:"W3C", url: "http://www.w3.org/", discrible: "万维网联盟创建于1994年，是WEB技术领域最具权威和影响力的国际中立性技术标准机构"}
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
        {id: 2, type: "首页",title:"待添加内容", titleClass: "content-modle-title",  discription:"HTML ,又称超文本标记语言", contentClass:"content-modle-discription", linkPath:"", aStyle: "content-modle-more"}
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
    ]
};