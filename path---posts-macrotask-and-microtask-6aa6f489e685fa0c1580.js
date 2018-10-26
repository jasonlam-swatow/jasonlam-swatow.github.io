webpackJsonp([0x9382a1a6709a],{400:function(a,t){a.exports={data:{site:{siteMetadata:{title:"Jason Lam",subtitle:"慎獨｜純亦不已",author:{name:"Jason Lam",twitter:"https://twitter.com/jasonlam0619"},disqusShortname:"",url:"https://lumen.netlify.com"}},markdownRemark:{id:"/Users/mac/jasonlam-swatow.github.io/src/pages/articles/2018-06-01---Macrotask-and-Microtask/index.md absPath of file >>> MarkdownRemark",html:'<h2>定義</h2>\n<p>一個事件循環（event loop）中會有一個正在執行的任務（task），這個任務就是從 macrotask 中來的。當該 macrotask 執行結束後，所有可用的 microtask 將會在同一個事件循環中執行，當這些 microtask 執行結束後還能繼續添加 microtask 直至整個 microtask 隊列執行結束。</p>\n<h2>用法</h2>\n<p>當我們想以同步的方式處理異步任務時就用 microtask（比如需要直接在某斷代碼後去執行某個任務，正如 Promise）。其他情況就直接用 macrotask。</p>\n<ul>\n<li>macrotasks: <code class="language-text">setTimeout</code>、<code class="language-text">setInterval</code>、I/O、UI 渲染</li>\n<li>microtasks: Promise、<code class="language-text">process.nextTick</code>、<code class="language-text">Object.observe</code>、MutationObserver</li>\n</ul>\n<h2>規範</h2>\n<p>根據 WHATWG 規範：</p>\n<ul>\n<li>一個 event loop 會有一個或多個 task queue 即 macrotask queue</li>\n<li>每個 event loop 都有一個 microtask queue</li>\n<li>task queue == macrotask queue != microtask queue</li>\n<li>一個 task 可放入 macrotask queue 亦可放入 microtask queue</li>\n<li>當一個 task 被放入 queue（macro/micro）則該 task 可被立即執行</li>\n</ul>\n<p>當 call stack 為空時，開始依次執行：</p>\n<ol>\n<li>把最早的任務 task A 放入任務隊列</li>\n<li>若 task A 為 null（則任務隊列為空），直接跳到第 6 步</li>\n<li>將 currently running task 設為 task A</li>\n<li>執行 task A（即執行回調函式）</li>\n<li>將 currently running task 設為 null 並移出 task A</li>\n<li>\n<p>執行 microtask queue</p>\n<ol>\n<li>在 microtask 中選出最早的任務 task X</li>\n<li>若 task X 為 null，直接跳到 xii</li>\n<li>將 currently running task X 設為 task X</li>\n<li>執行 task X</li>\n<li>將 currently running task 設為 null 並移出 task X</li>\n<li>在 microtask 中選出最早的任務，跳到 ii</li>\n<li>結束 microtask queue</li>\n</ol>\n</li>\n<li>跳到第 1 步</li>\n</ol>\n<p>上面是一個簡單的 event loop 執行模型。再簡單點可總結為：</p>\n<ol>\n<li>在 macrotask queue 中執行最早的 task，然後移出</li>\n<li>執行 microtask 隊列中所有可用的任務，然後移出</li>\n<li>下一個循環，執行下一個 macrotask 中的任務（跳到第 2 步）</li>\n</ol>\n<h2>其他</h2>\n<ul>\n<li>\n<p>當一個 macrotask 正處執行狀態，亦可能會有新的事件被註冊（創建新 task）。比如：</p>\n<ul>\n<li>\n<p><code class="language-text">promiseA.then()</code> 的回調就是一個 task</p>\n<ul>\n<li><code class="language-text">promiseA</code> 是 resolved 或 rejected，則該 task 會放入當前事件循環回合的 microtask queue</li>\n<li><code class="language-text">promiseA</code> 是 pending，則該 task 會放入事件循環的未來某個回合的 microtask queue</li>\n</ul>\n</li>\n<li><code class="language-text">setTimeout</code> 的回調也是 task，它會被放入 macrotask queue（即使是 0ms）</li>\n</ul>\n</li>\n<li>microtask queue 中的 task 會在事件循環的當前回合中執行，因此 macrotask queue 中的 task 就只能等到事件循環的下一個回合執行</li>\n<li>click、Ajax、<code class="language-text">setTimeout</code> 的回調都是 task，包裹在一個 <code class="language-text">&lt;script&gt;</code> 標籤中的 JS 代碼亦是一個 task——它們都是 macrotask。</li>\n</ul>\n<p>完 :)</p>',fields:{tagSlugs:["/tags/java-script/","/tags/大前端/"]},frontmatter:{title:"事件循環之 Macrotask & Microtask",tags:["JavaScript","大前端"],date:"2018-06-01T22:40:32.169Z",description:"JavaScript 的事件循環（Event Loop）中，macrotask 和 microtask 同屬於異步任務。二者有什麼區別？何時使用何者？"}}},pathContext:{slug:"/posts/macrotask-and-microtask/"}}}});
//# sourceMappingURL=path---posts-macrotask-and-microtask-6aa6f489e685fa0c1580.js.map