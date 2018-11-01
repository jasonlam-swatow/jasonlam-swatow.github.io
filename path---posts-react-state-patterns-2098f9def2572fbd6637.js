webpackJsonp([0xed5748c8da4],{416:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Jason Lam",subtitle:"慎獨｜純亦不已",author:{name:"Jason Lam",twitter:"jasonlam0619"},disqusShortname:"",url:"https://lumen.netlify.com"}},markdownRemark:{id:"/Users/mac/jasonlam-swatow.github.io/src/pages/articles/2018-09-01---React-State-Pattern/index.md absPath of file >>> MarkdownRemark",html:'<h2>狀態定義</h2>\n<p>React 應用有四種不同的狀態：</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1-6296f8fbed07ffbee8371d8db1a53bac-36541.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 38.6034255599473%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3gQH/8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQABBQJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAGBAAAwEBAAAAAAAAAAAAAAAAAAEhEVH/2gAIAQEAAT8hpyCeH//aAAwDAQACAAMAAAAQA8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhMWH/2gAIAQEAAT8QKK12I6xXYIpfZ//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="React 應用的四種狀態"\n        title=""\n        src="/static/1-6296f8fbed07ffbee8371d8db1a53bac-d564d.jpg"\n        srcset="/static/1-6296f8fbed07ffbee8371d8db1a53bac-865fd.jpg 240w,\n/static/1-6296f8fbed07ffbee8371d8db1a53bac-d40a0.jpg 480w,\n/static/1-6296f8fbed07ffbee8371d8db1a53bac-d564d.jpg 960w,\n/static/1-6296f8fbed07ffbee8371d8db1a53bac-c67c1.jpg 1440w,\n/static/1-6296f8fbed07ffbee8371d8db1a53bac-36541.jpg 1518w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ul>\n<li>全局狀態：在組件樹外部維護的狀態，典型者為 Redux。此處的狀態能為應用中任意一處所訪問。</li>\n<li>組件狀態：在組件（container）中透過 <code class="language-text">setState</code> 持有並維護的狀態。</li>\n<li>相對狀態：從父組件傳至子組件的狀態。</li>\n<li>供給狀態：被一個 provider 置入上下文（使用 React 的 Context API）的狀態，能被組件單獨取用而毋須在組件樹中傳遞。</li>\n</ul>\n<h2>Pattern 1: Prop-drilling</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/2-42bc63fa303ac73efe0ca5ee07531f08-5a92a.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 778px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 82.51928020565552%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAARABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe9OimCAAf/EABUQAQEAAAAAAAAAAAAAAAAAACAR/9oACAEBAAEFAjR//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQAGPwIf/8QAHBABAQACAgMAAAAAAAAAAAAAAQAhMRBBEVGB/9oACAEBAAE/IVz4jHA+7qAbbr5M7b//2gAMAwEAAgADAAAAEGMAAP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EABwQAQADAAIDAAAAAAAAAAAAAAEAEUEhMVFxof/aAAgBAQABPxDyBHVRXnYNlwLWnPUEsNXkAoLmJ16J9U//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Prop-drilling pattern"\n        title=""\n        src="/static/2-42bc63fa303ac73efe0ca5ee07531f08-5a92a.jpg"\n        srcset="/static/2-42bc63fa303ac73efe0ca5ee07531f08-c34a1.jpg 240w,\n/static/2-42bc63fa303ac73efe0ca5ee07531f08-ecebb.jpg 480w,\n/static/2-42bc63fa303ac73efe0ca5ee07531f08-5a92a.jpg 778w"\n        sizes="(max-width: 778px) 100vw, 778px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>這是最為常見的模式。其理念是僅有 containers（smart components）負責創建狀態，也僅有它們可以取用全局 store 的狀態。它們能透過 <code class="language-text">setState</code> 創建其自己的狀態，並用 <code class="language-text">props</code> 傳給組件樹。</p>\n<p>當全局狀態需要變化，該變化會在 container 處激發（如 Redux 的 dispatch 一個 action）。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/3-88cea6468c895e2b7f06eed880695750-5a92a.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 778px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 82.51928020565552%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAARABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe9OimCAAf/EABUQAQEAAAAAAAAAAAAAAAAAACAR/9oACAEBAAEFAjR//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQAGPwIf/8QAHBABAQACAgMAAAAAAAAAAAAAAQAhMRARQVHR/9oACAEBAAE/IVz1GOB93iAbb5M7b//aAAwDAQACAAMAAAAQIwAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAGxABAAMBAAMAAAAAAAAAAAAAAQARIUExcaH/2gAIAQEAAT8Qs0TI6qK72DZcC1pviCWGr5AKCycJ69E+qf/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Prop-drilling pattern: 全局狀態的變動只能發生在 container"\n        title=""\n        src="/static/3-88cea6468c895e2b7f06eed880695750-5a92a.jpg"\n        srcset="/static/3-88cea6468c895e2b7f06eed880695750-c34a1.jpg 240w,\n/static/3-88cea6468c895e2b7f06eed880695750-ecebb.jpg 480w,\n/static/3-88cea6468c895e2b7f06eed880695750-5a92a.jpg 778w"\n        sizes="(max-width: 778px) 100vw, 778px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>這個模式有三種類型的狀態：全局狀態、組件狀態及相對狀態。</p>\n<p>優點在於職責定義清晰。我們知道全局狀態的變動只能發生在 container，而組件接收的狀態只能來自於 container。</p>\n<p>缺點來自相對狀態。當傳遞多於兩層時，就會變得混亂。</p>\n<h2>Pattern 2: Redux-centric</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/4-9f01d8f50014d049eb981b2a0f423f07-1f7c9.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 786px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 81.67938931297711%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe9Gi0D/xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAEFAl//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAZEAADAQEBAAAAAAAAAAAAAAAAAREhQVH/2gAIAQEAAT8hb0WeiL0pYf/aAAwDAQACAAMAAAAQcN//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAADAQEAAwAAAAAAAAAAAAAAAREhMVFhof/aAAgBAQABPxDgdh4noaoSWtvwhW7d4JMOuej/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Redux-centric pattern"\n        title=""\n        src="/static/4-9f01d8f50014d049eb981b2a0f423f07-1f7c9.jpg"\n        srcset="/static/4-9f01d8f50014d049eb981b2a0f423f07-c0b80.jpg 240w,\n/static/4-9f01d8f50014d049eb981b2a0f423f07-05f89.jpg 480w,\n/static/4-9f01d8f50014d049eb981b2a0f423f07-1f7c9.jpg 786w"\n        sizes="(max-width: 786px) 100vw, 786px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>與前一個模式不同之處在於，dumb components 現在不那麼 dumb 了。它們能自己訪問到全局狀態，而毋需 Container 傳遞。</p>\n<p>但這帶來的壞處是模糊了職責的定義，現在 container 和 dumb components 皆能自行訪問全局狀態；dumb components 何時應接收相對狀態、何時應使用全局狀態亦不明確。</p>\n<p>最重要的是，全局狀態並不遵循 React 組件的生命週期。如果使用相對狀態模式，當 container 卸載時，其狀態會重置，意味著從 container 接收數據的組件不再擁有那些 props。但是如果該組件是從全局拉取其狀態的，而當其卸載時，該狀態仍存在於全局。當它重新掛載時，將會收到如舊的數據。這通常引致 bug。組件現在與相關的全局狀態緊密耦合了，降低其復用性。</p>\n<p>一個方法是在組件卸載時重置該部分全局狀態。但這也說明了如果需要這樣做，或許更宜使用組件內的狀態。</p>\n<h2>Pattern 3: Provided State</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/5-530c3e0b12f5045ea70503318fc0944a-a7a74.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 816px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 72.4264705882353%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB35Ckj//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEAAQUCX//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABkQAAIDAQAAAAAAAAAAAAAAAAARARAhQf/aAAgBAQABPyGSMp9GhrD/2gAMAwEAAgADAAAAEHMP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGxABAAIDAQEAAAAAAAAAAAAAAQAhETFBUWH/2gAIAQEAAT8QTotgU4O3cHJkldNz4F3Hm15P/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Provided state pattern"\n        title=""\n        src="/static/5-530c3e0b12f5045ea70503318fc0944a-a7a74.jpg"\n        srcset="/static/5-530c3e0b12f5045ea70503318fc0944a-e5b4f.jpg 240w,\n/static/5-530c3e0b12f5045ea70503318fc0944a-220ea.jpg 480w,\n/static/5-530c3e0b12f5045ea70503318fc0944a-a7a74.jpg 816w"\n        sizes="(max-width: 816px) 100vw, 816px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>React v16.3 後正式支援 Context API。每個 context 都有一個 <code class="language-text">provider</code> 和 <code class="language-text">consumer</code>。在上圖中，Containers 是 context 的 providers，而 Components 是 consumers。Containers 能從全局狀態中承繼 state，亦能自己創造 state 並「provide」予 context。然後 Components 能從 context 中挑揀所需的 props，而毋須依賴 container 或全局狀態。</p>\n<p>這種分工類似於 pattern 1——containers 是唯一能操縱並使用全局狀態的組件，components 只從 context 處獲取 props 並展現之。</p>\n<p>這種模式解決了之前的問題：</p>\n<ol>\n<li>由於 component 能從 context 處獲取其所需的任意內容，毋須從 container 傳遞，雖然一定程度上還需要組件間的相對狀態，但完全消弭了 prop-drilling 問題。</li>\n<li>毋須再顧慮 component 位於組件樹中的何處，增強了復用性。在 pattern 1 中，一旦 component 被置於組件樹中並接收 props，它就不能被隨意移動——除非重構其 props 來源。</li>\n<li>每個 context state 都與 provider 的生命週期綁定起來，當向 context 提供 state 的 container 卸載時，所有 state 都自動 reset，亦是減少耦合、提高復用。</li>\n</ol>\n<p><strong>一個 provided pattern 例子</strong>：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// table.container.js</span>\n\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Table<span class="token punctuation">,</span> Body<span class="token punctuation">,</span> Header<span class="token punctuation">,</span> TableContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'../table.component\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">TableContainer</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    activeRow<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n    data<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      year<span class="token punctuation">:</span> <span class="token string">\'1961\'</span><span class="token punctuation">,</span>\n      make<span class="token punctuation">:</span> <span class="token string">\'Jaguar\'</span><span class="token punctuation">,</span>\n      model<span class="token punctuation">:</span> <span class="token string">\'E-Type\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      id<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n      year<span class="token punctuation">:</span> <span class="token string">\'1969\'</span><span class="token punctuation">,</span>\n      make<span class="token punctuation">:</span> <span class="token string">\'Farrari\'</span><span class="token punctuation">,</span>\n      model<span class="token punctuation">:</span> <span class="token string">\'365 GT 2 + 2\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    columns<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'id\'</span><span class="token punctuation">,</span>\n      editable<span class="token punctuation">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'year\'</span><span class="token punctuation">,</span>\n      editable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'make\'</span><span class="token punctuation">,</span>\n      editable<span class="token punctuation">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'model\'</span><span class="token punctuation">,</span>\n      editable<span class="token punctuation">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> columns<span class="token punctuation">,</span> activeRow <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>TableContext<span class="token punctuation">.</span>Provider\n        value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n          data<span class="token punctuation">,</span>\n          columns<span class="token punctuation">,</span>\n          activeRow<span class="token punctuation">,</span>\n          selectRow<span class="token punctuation">:</span> id <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> activeRow<span class="token punctuation">:</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          updateRow<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateRow</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Table<span class="token operator">></span>\n          <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>Body <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Table<span class="token operator">></span>\n        <span class="token punctuation">{</span>activeRow <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> activeRow<span class="token punctuation">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Done<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n        <span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>TableContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">updateRow</span><span class="token punctuation">(</span>rowId<span class="token punctuation">,</span> field<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state\n    <span class="token keyword">const</span> index <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> id <span class="token operator">===</span> rowId<span class="token punctuation">)</span>\n    data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span>field<span class="token punctuation">]</span> <span class="token operator">=</span> value\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// table.component.js</span>\n\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> createContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'../shared/inputs\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> TableContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Row</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> row <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>TableContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>\n    <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> columns <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n      columns<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>field<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>td key<span class="token operator">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>row<span class="token punctuation">[</span>field<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>TableContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">EditRow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> row <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>TableContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>\n    <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> columns<span class="token punctuation">,</span> updateRow <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n      columns<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>field<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>td key<span class="token operator">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token operator">></span>\n          <span class="token punctuation">{</span>field<span class="token punctuation">.</span>editable <span class="token operator">?</span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>input\n              value<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">[</span>field<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">}</span>\n              onChange<span class="token operator">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> <span class="token function">updateRow</span><span class="token punctuation">(</span>row<span class="token punctuation">.</span>id<span class="token punctuation">,</span> field<span class="token punctuation">.</span>name<span class="token punctuation">,</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>\n            row<span class="token punctuation">[</span>field<span class="token punctuation">.</span>name<span class="token punctuation">]</span>\n          <span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>\n      <span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>TableContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Body</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>TableContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>\n    <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> columns<span class="token punctuation">,</span> data<span class="token punctuation">,</span> activeRow<span class="token punctuation">,</span> selectRow <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>tbody<span class="token operator">></span>\n        <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>tr key<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">.</span>id<span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">selectRow</span><span class="token punctuation">(</span>row<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token punctuation">{</span>activeRow <span class="token operator">===</span> row<span class="token punctuation">.</span>id <span class="token operator">?</span> <span class="token operator">&lt;</span>EditRow row<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span> <span class="token punctuation">:</span> <span class="token operator">&lt;</span>Row row<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>tbody<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>TableContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Header</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>TableContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>\n    <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> columns <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>thead<span class="token operator">></span>\n        <span class="token operator">&lt;</span>tr<span class="token operator">></span><span class="token punctuation">{</span>columns<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>field<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>th key<span class="token operator">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>field<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>thead<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>TableContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Table</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>table<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>table<span class="token operator">></span></code></pre>\n      </div>\n<p>完 :)</p>',
fields:{tagSlugs:["/tags/react/","/tags/大前端/"]},frontmatter:{title:"React 狀態管理模式",tags:["React","大前端"],date:"2018-09-01T22:40:32.169Z",description:"如果你的 React 應用沒有用上恰當的狀態管理模式，開發會變得非常辛苦。"}}},pathContext:{slug:"/posts/react-state-patterns"}}}});
//# sourceMappingURL=path---posts-react-state-patterns-2098f9def2572fbd6637.js.map