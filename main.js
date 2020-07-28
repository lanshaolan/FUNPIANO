console.log("我是JS");


// 元件應用：分頁重複內容 - 導覽列、頁尾
Vue.component("navbar", { 
    template: `
    <nav>
        <a href="./index.html">隨聲琴奏</a>
        <a href="./about.html">關於我們</a>
        <a href="./product.html">產品</a>
        <a href="./service.html">支援服務</a>
        <a href="./new.html">最新消息</a>
        <a href="./contact.html">聯絡我們</a>
    </nav>
    `
})

var navbar = new Vue({
    el: "#navbar"
})