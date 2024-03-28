import{_ as s,t as a,v as n,S as t}from"./chunks/framework.dbf0e487.js";const x=JSON.parse('{"title":"API","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/develop/api.md"}'),o={name:"fr-FR/develop/api.md"},e=t(`<h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h1><h2 id="服务方法" tabindex="-1">服务方法 <a class="header-anchor" href="#服务方法" aria-label="Permalink to &quot;服务方法&quot;">​</a></h2><h3 id="ctx-booru-register" tabindex="-1"><code>ctx.booru.register()</code> <a class="header-anchor" href="#ctx-booru-register" aria-label="Permalink to &quot;\`ctx.booru.register()\`&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">booru</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">register</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">source</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-parameter);">ImageSource</span><span style="color:var(--shiki-token-text);">): () </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">void</span></span></code></pre></div><p>注册一个图源，返回一个 dispose 函数，调用此函数可以注销此图源。</p><h3 id="ctx-booru-hassource" tabindex="-1"><code>ctx.booru.hasSource()</code> <a class="header-anchor" href="#ctx-booru-hassource" aria-label="Permalink to &quot;\`ctx.booru.hasSource()\`&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">booru</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">hasSource</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">name</span><span style="color:var(--shiki-token-keyword);">?:</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">string</span><span style="color:var(--shiki-token-text);">): </span><span style="color:var(--shiki-token-parameter);">boolean</span></span></code></pre></div><p>当不传入参数时，判断是否存在激活的图源；当传入参数时，判断是否存在指定名称的图源。</p><h3 id="ctx-booru-get" tabindex="-1"><code>ctx.booru.get()</code> <a class="header-anchor" href="#ctx-booru-get" aria-label="Permalink to &quot;\`ctx.booru.get()\`&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">booru</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">get</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">query</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">ImageService</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">Query</span><span style="color:var(--shiki-token-text);">): </span><span style="color:var(--shiki-token-constant);">Promise</span><span style="color:var(--shiki-token-operator);">&lt;</span><span style="color:var(--shiki-token-constant);">ImageSource</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">Result</span><span style="color:var(--shiki-token-text);">[]</span><span style="color:var(--shiki-token-operator);">&gt;</span></span></code></pre></div><p>获取符合条件的图片，返回一个 Promise，resolve 时返回一个图片数组。</p><p>当 <code>query.tags</code> 为空时，应当返回随机的图片。</p><p>当获取不到图片时，应当返回 <code>undefined</code>。</p><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><h3 id="imagesource" tabindex="-1"><code>ImageSource</code> <a class="header-anchor" href="#imagesource" aria-label="Permalink to &quot;\`ImageSource\`&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">abstract</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">class</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">ImageSource</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">extends</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">ImageSource</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">ImageSource</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">&gt; {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">languages</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">[] </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> [</span><span style="color:var(--shiki-token-string);">&#39;en&#39;</span><span style="color:var(--shiki-token-text);">] </span><span style="color:#7F848E;font-style:italic;">// 图源支持的语言</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">constructor</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-keyword);">public</span><span style="color:var(--shiki-token-text);"> </span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-keyword);">public</span><span style="color:var(--shiki-token-text);"> </span><span style="color:#E06C75;font-style:italic;">config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">this</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">ctx</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">booru</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">register</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">this</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 对标签进行分词，返回一个标签数组</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-function);">tokenize</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">query</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">): </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 获取图片</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">abstract</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">get</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">query</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">ImageSource</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">Query</span><span style="color:var(--shiki-token-text);">): </span><span style="color:var(--shiki-token-constant);">Promise</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">ImageSource</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">Result</span><span style="color:var(--shiki-token-text);">[]&gt;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h3 id="imagesource-query" tabindex="-1"><code>ImageSource.Query</code> <a class="header-anchor" href="#imagesource-query" aria-label="Permalink to &quot;\`ImageSource.Query\`&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Query</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">tags</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">[]</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">/** raw query */</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">raw</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">count</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">number</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><h3 id="imagesource-result" tabindex="-1"><code>ImageSource.Result</code> <a class="header-anchor" href="#imagesource-result" aria-label="Permalink to &quot;\`ImageSource.Result\`&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">type</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">NsfwType</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;furry&#39;</span><span style="color:var(--shiki-token-text);"> | </span><span style="color:var(--shiki-token-string);">&#39;guro&#39;</span><span style="color:var(--shiki-token-text);"> | </span><span style="color:var(--shiki-token-string);">&#39;shota&#39;</span><span style="color:var(--shiki-token-text);"> | </span><span style="color:var(--shiki-token-string);">&#39;bl&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">enum</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">PreferSize</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">Original</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;original&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">Large</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;large&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">Medium</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;medium&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">Small</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;small&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">Thumbnail</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;thumbnail&#39;</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Result</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">urls</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Partial</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">Record</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">Exclude</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">PreferSize</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;original&#39;</span><span style="color:var(--shiki-token-text);">&gt;, </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">&gt;&gt; &amp; { </span><span style="color:var(--shiki-token-parameter);">original</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);"> }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">pageUrl</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">author</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">authorUrl</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">title</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">desc</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">tags</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">[]</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">nsfw</span><span style="color:var(--shiki-token-keyword);">?</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">boolean</span><span style="color:var(--shiki-token-text);"> | </span><span style="color:var(--shiki-token-constant);">NsfwType</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div>`,20),r=[e];function l(p,i,k,c,y,h){return a(),n("div",null,r)}const u=s(o,[["render",l]]);export{x as __pageData,u as default};
