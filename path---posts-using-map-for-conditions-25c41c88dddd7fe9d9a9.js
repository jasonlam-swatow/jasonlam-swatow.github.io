webpackJsonp([0xa34d5232f77f],{417:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Jason Lam",subtitle:"慎獨｜純亦不已",author:{name:"Jason Lam",twitter:"jasonlam0619"},disqusShortname:"",url:"https://lumen.netlify.com"}},markdownRemark:{id:"/Users/mac/jasonlam-swatow.github.io/src/pages/articles/2018-11-06---使用 Map 作條件判斷/index.md absPath of file >>> MarkdownRemark",html:'<p>JavaScript 中遇到複雜邏輯判斷時，通常用 <code class="language-text">switch</code> 代替 <code class="language-text">if/else</code>。隨著邏輯複雜度增加，這兩種條件判斷方式都會變得臃腫、難明。本文旨在介紹一些優雅的條件判斷方式。</p>\n<h2>使用 Object</h2>\n<p>將判斷條件作為對象的鍵，處理行為作為相應值，再透過查找對象屬性的方式來作條件判斷——這種寫法尤適合一元條件判斷之情況，亦為眾所知：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">\'1\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'processing\'</span><span class="token punctuation">,</span> <span class="token string">\'IndexPage\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">\'2\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'fail\'</span><span class="token punctuation">,</span> <span class="token string">\'FailPage\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">\'3\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'fail\'</span><span class="token punctuation">,</span> <span class="token string">\'FailPage\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">\'4\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'success\'</span><span class="token punctuation">,</span> <span class="token string">\'SuccessPage\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">\'5\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'cancel\'</span><span class="token punctuation">,</span> <span class="token string">\'CancelPage\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">\'default\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'other\'</span><span class="token punctuation">,</span> <span class="token string">\'IndexPage\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/**\n * 按鈕點擊事件\n * @param {number} status 活動狀態：1 開團進行中，2 開團失敗，3 商品售罄，4 開團成功，5 系統取消\n */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">onButtonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> action <span class="token operator">=</span> actions<span class="token punctuation">[</span>status<span class="token punctuation">]</span> <span class="token operator">||</span> actions<span class="token punctuation">[</span><span class="token string">\'default\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      logName <span class="token operator">=</span> action<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      pageName <span class="token operator">=</span> action<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\n  <span class="token function">sendLog</span><span class="token punctuation">(</span>logName<span class="token punctuation">)</span>\n  <span class="token function">jumpTo</span><span class="token punctuation">(</span>pageName<span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>使用 Map</h2>\n<p>ES2015 推出的 Map 對象，與 Object 對象之區別在於：</p>\n<ul>\n<li>Object 的鍵祇能是字符串或 Symbol，但 Map 的鍵可以是任意值</li>\n<li>可透過 <code class="language-text">size</code> 屬性輕易地得到一 Map 的鍵值對數</li>\n</ul>\n<h3>基本</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'processing\'</span><span class="token punctuation">,</span> <span class="token string">\'IndexPage\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'fail\'</span><span class="token punctuation">,</span> <span class="token string">\'FailPage\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'fail\'</span><span class="token punctuation">,</span> <span class="token string">\'FailPage\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'success\'</span><span class="token punctuation">,</span> <span class="token string">\'SuccessPage\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'cancel\'</span><span class="token punctuation">,</span> <span class="token string">\'CancelPage\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">\'default\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'other\'</span><span class="token punctuation">,</span> <span class="token string">\'Index\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token comment">/**\n * 按鈕點擊事件\n * @param {number} status 活動狀態：1 開團進行中，2 開團失敗，3 商品售罄，4 開團成功，5 系統取消\n */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">onButtonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> action <span class="token operator">=</span> actions<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token operator">||</span> actions<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'default\'</span><span class="token punctuation">)</span>\n  <span class="token function">sendLog</span><span class="token punctuation">(</span>action<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token function">jumpTo</span><span class="token punctuation">(</span>action<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>多元條件判斷</h3>\n<p>現在把問題升級一下，在判斷 <code class="language-text">status</code> 的同時，還需要判斷用戶的身份。若用 <code class="language-text">if/else</code> 或 <code class="language-text">switch</code> 來寫，會非常囉嗦冗長；但用 Map 就能寫得清爽：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string">\'guest_1\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">\'guest_2\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">\'guest_3\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">\'guest_4\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">\'guest_5\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">\'master_1\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">\'master_2\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">\'master_3\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">\'master_4\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">\'master_5\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">\'default\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token comment">/**\n * 按鈕點擊事件\n * @param {string} identity 身份標識：guest客態 master主態\n * @param {number} status 活動狀態：1 開團進行中，2 開團失敗，3 開團成功，4 商品售罄，5 有庫存未開團\n */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">onButtonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>identity<span class="token punctuation">,</span> status<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> action <span class="token operator">=</span> actions<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>identity<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span> <span class="token operator">||</span> actions<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'default\'</span><span class="token punctuation">)</span>\n  action<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>上例代碼用把兩個條件拼接成字符串為鍵、以處理函數為值的 Map 進行查找和執行，這種寫法尤適合多元條件判斷。當然這種方式用 Object 也是可行的。若嫌把查詢條件拼成字符串略顯彆扭，則還可用 Object 作鍵：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token punctuation">{</span>identity<span class="token punctuation">:</span> <span class="token string">\'guest\'</span><span class="token punctuation">,</span> status<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token punctuation">{</span>identity<span class="token punctuation">:</span> <span class="token string">\'guest\'</span><span class="token punctuation">,</span> status<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">onButtonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>identity<span class="token punctuation">,</span> status<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> action <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>actions<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>key<span class="token punctuation">.</span>identity <span class="token operator">==</span> identity <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span>status <span class="token operator">==</span> status<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  action<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">=></span>value<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>合併查詢結果</h3>\n<p>再對需求作升級：identity 為 <code class="language-text">guest</code> 的情況下，status 為 <code class="language-text">1-4</code> 時的處理邏輯都一樣（即執行同一個函數）。可以這樣寫：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">actions</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">functionA</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">functionB</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token punctuation">{</span>identity<span class="token punctuation">:</span> <span class="token string">\'guest\'</span><span class="token punctuation">,</span> status<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> functionA<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token punctuation">{</span>identity<span class="token punctuation">:</span> <span class="token string">\'guest\'</span><span class="token punctuation">,</span> status<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> functionA<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token punctuation">{</span>identity<span class="token punctuation">:</span> <span class="token string">\'guest\'</span><span class="token punctuation">,</span> status<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> functionA<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token punctuation">{</span>identity<span class="token punctuation">:</span> <span class="token string">\'guest\'</span><span class="token punctuation">,</span> status<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> functionA<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token punctuation">{</span>identity<span class="token punctuation">:</span> <span class="token string">\'guest\'</span><span class="token punctuation">,</span> status<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span> functionB<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">onButtonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>identity<span class="token punctuation">,</span> status<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> action <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>key<span class="token punctuation">.</span>identity <span class="token operator">==</span> identity <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span>status <span class="token operator">==</span> status<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  action<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">=></span>value<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>上例重寫了 4 次 <code class="language-text">functionA</code>，而且假如判斷條件愈加複雜，需要定義的處理邏輯亦將增多。此時 Map 就顯出優勢了：可以使用正則類型作鍵。改寫如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">actions</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">functionA</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">functionB</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*do sth*/</span><span class="token punctuation">}</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">functionC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/*send log*/</span><span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token regex">/^guest_[1-4]$/</span><span class="token punctuation">,</span> functionA<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token regex">/^guest_5$/</span><span class="token punctuation">,</span> functionB<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token regex">/^guest_.*$/</span><span class="token punctuation">,</span> functionC<span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 甚至可作通配，實現凡是 guest 都要發送一日誌埋點</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">onButtonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>identity<span class="token punctuation">,</span> status<span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>\n  <span class="token keyword">let</span> action <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>identity<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  action<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">=></span>value<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>完 :)</p>',
fields:{tagSlugs:["/tags/java-script/"]},frontmatter:{title:"使用 Map 作條件判斷",tags:["JavaScript"],date:"2018-11-06T22:40:32.169Z",description:"JavaScript 通常使用 if/else、switch 作條件判斷，它們雖然全能，惟實現臃腫。其實 ES2015 的 Map 亦能用於複雜的條件判斷。"}}},pathContext:{slug:"/posts/using-map-for-conditions"}}}});
//# sourceMappingURL=path---posts-using-map-for-conditions-25c41c88dddd7fe9d9a9.js.map