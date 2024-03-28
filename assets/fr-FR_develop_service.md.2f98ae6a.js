import{_ as i,q as e,t as p,v as k,E as t,J as a,S as r,M as n,z as s}from"./chunks/framework.dbf0e487.js";const q=JSON.parse('{"title":"service","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/develop/service.md"}'),c={name:"fr-FR/develop/service.md"},y=r(`<h1 id="service" tabindex="-1">service <a class="header-anchor" href="#service" aria-label="Permalink to &quot;service&quot;">​</a></h1><p><code>booru</code> 插件会注册名为 <code>booru</code> 的服务，可以被其他插件调用。</p><h2 id="检测图源" tabindex="-1">检测图源 <a class="header-anchor" href="#检测图源" aria-label="Permalink to &quot;检测图源&quot;">​</a></h2><p><code>booru</code> 服务提供了 <code>hasSource()</code> 方法，可以用于判断是否存在任意图源，或是否存在指定的图源。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">function</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">booru</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">hasSource</span><span style="color:var(--shiki-token-text);">() </span><span style="color:#7F848E;font-style:italic;">// 是否存在任意图源</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">boooru</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">hasSource</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;pixiv&#39;</span><span style="color:var(--shiki-token-text);">) </span><span style="color:#7F848E;font-style:italic;">// 是否存在 pixiv 图源</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h2 id="获取图片" tabindex="-1">获取图片 <a class="header-anchor" href="#获取图片" aria-label="Permalink to &quot;获取图片&quot;">​</a></h2><p><code>booru</code> 服务提供了 <code>get()</code> 方法，可以用于获取图片。</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">function</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">command</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;恋恋最可爱&#39;</span><span style="color:var(--shiki-token-text);">).</span><span style="color:var(--shiki-token-function);">action</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-keyword);">async</span><span style="color:var(--shiki-token-text);"> () </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">image</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">booru</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">get</span><span style="color:var(--shiki-token-text);">({ </span><span style="color:var(--shiki-token-parameter);">tags</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;komeiji koishi&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">raw</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;komeiji koishi&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">count</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-number);">1</span><span style="color:var(--shiki-token-text);"> })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> &lt;</span><span style="color:var(--shiki-token-parameter);">image</span><span style="color:var(--shiki-token-text);"> </span><span style="color:#D19A66;font-style:italic;">url</span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-keyword);">{</span><span style="color:var(--shiki-token-constant);">image</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">url</span><span style="color:var(--shiki-token-keyword);">}</span><span style="color:var(--shiki-token-text);"> /&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div>`,8),h=s("picture",null,[s("source",{srcset:"https://pixiv.nl/101250949.jpg"}),s("source",{srcset:"https://pixiv.re/101250949.jpg"}),s("img",{src:"https://pixiv.cat/101250949.jpg"})],-1),v=s("br",null,null,-1),x=s("br",null,null,-1),d=s("br",null,null,-1),u=s("br",null,null,-1),_=s("br",null,null,-1),m=s("br",null,null,-1),f=r(`<h2 id="注册图源" tabindex="-1">注册图源 <a class="header-anchor" href="#注册图源" aria-label="Permalink to &quot;注册图源&quot;">​</a></h2><p><code>booru</code> 服务提供了 <code>register()</code> 方法，可以用于注册图源。</p><p>:::warn 如果你在开发图源插件，只需要继承 <code>ImageSource</code> 类，它会自动将自己注册到 <code>booru</code> 服务中。 :::</p><p>你也可以手动注册和注销图源，这在你需要动态注册图源时非常有用。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">class</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">PixivSource</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;pixiv&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">languages</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> [</span><span style="color:var(--shiki-token-string);">&#39;zh-CN&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;ja&#39;</span><span style="color:var(--shiki-token-text);">]</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">async</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">get</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">query</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">ImageSource</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">Query</span><span style="color:var(--shiki-token-text);">): </span><span style="color:var(--shiki-token-constant);">Promise</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">ImageSource</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">Result</span><span style="color:var(--shiki-token-text);">[]&gt; {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">function</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">apply</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 注册图源</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">dispose</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">booru</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">register</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-keyword);">new</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">PixivSource</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">ctx</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">config</span><span style="color:var(--shiki-token-text);">))</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 注销图源</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">dispose</span><span style="color:var(--shiki-token-text);">()</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div>`,5);function g(w,b,C,S,E,P){const o=e("chat-message"),l=e("chat-panel");return p(),k("div",null,[y,t(l,null,{default:a(()=>[t(o,{nickname:"Alice"},{default:a(()=>[n("恋恋最可爱")]),_:1}),t(o,{nickname:"Koishi"},{default:a(()=>[h,n(" I miss You "),v,n(" 作者: 京田スズカ "),x,n(" 页面地址: https://www.pixiv.net/artworks/101250949 "),d,n(" 作者主页: https://www.pixiv.net/users/3718340 "),u,n(" 图源: pixiv "),_,n(" 标签: 東方 東方Project 古明地こいし こいしちゃんうふふ こいしちゃんマジ天使 目がハート 東方Project1000users入り 白抜きまつ毛 "),m]),_:1})]),_:1}),f])}const j=i(c,[["render",g]]);export{q as __pageData,j as default};
