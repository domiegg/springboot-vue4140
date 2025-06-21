
var projectName = '基于SpringBoot的冬奥会科普平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '冬奥会项目',
	url: './pages/dongaohuixiangmu/list.html'
}, 
{
	name: '精彩视频',
	url: './pages/jingcaishipin/list.html'
}, 

{
	name: '冬奥论坛',
	url: './pages/forum/list.html'
}, 
{
	name: '冬奥新闻',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springbooth5z62/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["新增","查看","修改","删除"],"menu":"项目类型","menuJump":"列表","tableName":"xiangmuleixing"}],"menu":"项目类型管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除","查看评论"],"menu":"冬奥会项目","menuJump":"列表","tableName":"dongaohuixiangmu"}],"menu":"冬奥会项目管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除","查看评论"],"menu":"精彩视频","menuJump":"列表","tableName":"jingcaishipin"}],"menu":"精彩视频管理"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["新增","查看","修改","删除"],"menu":"冬奥论坛","tableName":"forum"}],"menu":"冬奥论坛"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"冬奥新闻","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"冬奥会项目列表","menuJump":"列表","tableName":"dongaohuixiangmu"}],"menu":"冬奥会项目模块"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看"],"menu":"精彩视频列表","menuJump":"列表","tableName":"jingcaishipin"}],"menu":"精彩视频模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"冬奥会项目列表","menuJump":"列表","tableName":"dongaohuixiangmu"}],"menu":"冬奥会项目模块"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看"],"menu":"精彩视频列表","menuJump":"列表","tableName":"jingcaishipin"}],"menu":"精彩视频模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
