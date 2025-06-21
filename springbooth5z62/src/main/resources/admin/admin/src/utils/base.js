const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooth5z62/",
            name: "springbooth5z62",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooth5z62/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于SpringBoot的冬奥会科普平台"
        } 
    }
}
export default base
