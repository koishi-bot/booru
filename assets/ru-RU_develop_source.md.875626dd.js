import{_ as s,t as n,v as a,S as t}from"./chunks/framework.dbf0e487.js";const x=JSON.parse('{"title":"图源","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/develop/source.md"}'),o={name:"ru-RU/develop/source.md"},e=t(`<h1 id="图源" tabindex="-1">图源 <a class="header-anchor" href="#图源" aria-label="Permalink to &quot;图源&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>图源插件是用于获取图片的插件，它可以从网络、本地文件、剪贴板、数据库等地方获取图片。</p><p>由于图源插件本身也是一个标准的 <a href="https://koishi.chat/zh-CN/guide/plugin/#%E6%8F%92%E4%BB%B6%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%BD%A2%E5%BC%8F" target="_blank" rel="noreferrer">Koishi 插件</a>，这意味着它必须导出一个函数，或者一个带有 <code>apply</code> 方法的对象。为了方便开发，我们提供了一个抽象类 <code>ImageSource</code>，当你继承它并实现相应方法后以默认方式导出，就可以作为 Koishi 插件被加载，这有助于插件作者快速开发图源插件。</p><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>在此，我们将假设你已经阅读了<a href="https://koishi.chat/zh-CN/guide/plugin/" target="_blank" rel="noreferrer">认识插件</a>，并且配置好了 Koishi 插件的开发环境。</p><p>图源插件需要继承的 <code>ImageSource</code> 类定义在 <code>koishi-plugin-booru</code> 包中，因此你需要将 <code>koishi-plugin-booru</code> 插件列为你的图源插件的对等依赖 (peerDependencies)。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">{</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">&quot;peerDependencies&quot;</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-parameter);">&quot;booru&quot;</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&quot;^1.2.0&quot;</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span></code></pre></div><p><strong>请根据你所需求的功能酌情升级对等依赖的 booru 插件的版本</strong></p><h2 id="开发图源插件" tabindex="-1">开发图源插件 <a class="header-anchor" href="#开发图源插件" aria-label="Permalink to &quot;开发图源插件&quot;">​</a></h2><p>此处以简化版的 <code>lolicon</code> 插件为例，可以从 <code>https://api.lolicon.net/</code> 的 API 获取图片及元信息。它的官方实现可以在 <a href="https://github.com/koishijs/koishi-plugin-booru/tree/main/packages/lolicon" target="_blank" rel="noreferrer">这里</a>。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">Context</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">Schema</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi&#39;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-token-text);"> { </span><span style="color:var(--shiki-token-parameter);">ImageSource</span><span style="color:var(--shiki-token-text);"> } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">&#39;koishi-plugin-booru&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">class</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">LoliconImageSource</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">extends</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">ImageSource</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">LoliconImageSource</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">&gt; {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 定义图源支持的语言</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 如 lolicon 支持日语、英语和汉语-简体中文等</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-parameter);">languages</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">[] </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> [</span><span style="color:var(--shiki-token-string);">&#39;en&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;zh-CN&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-string);">&#39;ja&#39;</span><span style="color:var(--shiki-token-text);">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">constructor</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Context</span><span style="color:var(--shiki-token-text);">, </span><span style="color:#E06C75;font-style:italic;">config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">LoliconImageSource</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 调用父类的拟构函数以注册图源</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#E5C07B;font-style:italic;">super</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">ctx</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">config</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// \`booru\` 默认将标签转换为类 \`danbooru\` 的形式，即「空格分割标签，下划线替代空格」。</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:#7F848E;font-style:italic;">// 而 lolicon 支持的标签不带空格，因此此处需要将其重载为空格分割。</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">override</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">tokenize</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">query</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">): </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-token-text);">[] {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">query</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">split</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-parameter);">/\\s</span><span style="color:var(--shiki-token-number);">+</span><span style="color:var(--shiki-token-parameter);">/</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">async</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-function);">get</span><span style="color:var(--shiki-token-text);">(</span><span style="color:#E06C75;font-style:italic;">query</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">ImageSource</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">Query</span><span style="color:var(--shiki-token-text);">): </span><span style="color:var(--shiki-token-constant);">Promise</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">ImageSource</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">Result</span><span style="color:var(--shiki-token-text);">[]&gt; {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">param</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:#7F848E;font-style:italic;">// \`tags\` 是一个字符串数组，根据 Lolicon API 的文档，传入数组等于「与」操作。</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">tag</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">query</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">tags</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:#7F848E;font-style:italic;">// 指定获取数量</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-parameter);">num</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">query</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">count</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 注：根据图源设计规范，当 \`query.tags\` 为空数组或空时，应当返回随机图片。</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 由于 Lolicon API 默认对空标签会返回随机图，因此不需要做特别处理，</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 但对于其他图源可能需要传入特别的参数才能使用随机图片功能。</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">resp</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">await</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">this</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">http</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">post</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-string);">&#39;https://api.lolicon.app/setu/v2&#39;</span><span style="color:var(--shiki-token-text);">, </span><span style="color:var(--shiki-token-parameter);">param</span><span style="color:var(--shiki-token-text);">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-token-text);"> (</span><span style="color:var(--shiki-token-operator);">!</span><span style="color:var(--shiki-token-constant);">Array</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">isArray</span><span style="color:var(--shiki-token-text);">(</span><span style="color:var(--shiki-token-constant);">resp</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">data</span><span style="color:var(--shiki-token-text);">)) {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-keyword);">return</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 返回类型为 \`Result\` 的数组，可用字段可参考类型提示。</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 其中 \`urls.*\` 字段是图片的地址，也可以是 \`base64\` 编码。</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 其中 \`original\` 是必须字段，应当是原图尺寸的 URL。</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 另外还有 \`large\` (1200px) \`medium\` (600px) \`small\` (300px) \`thumbnail\` 等字段。</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 括号中为该尺寸的参考大小，如果图源不提供对应尺寸，可以忽略此字段。</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">resp</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">data</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">map</span><span style="color:var(--shiki-token-text);">((</span><span style="color:#E06C75;font-style:italic;">setu</span><span style="color:var(--shiki-token-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        </span><span style="color:var(--shiki-token-parameter);">urls</span><span style="color:var(--shiki-token-text);">: {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">          </span><span style="color:var(--shiki-token-parameter);">original</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">setu</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">urls</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">original</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">          </span><span style="color:var(--shiki-token-parameter);">large</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">setu</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">urls</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">regular</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">          </span><span style="color:var(--shiki-token-parameter);">medium</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">setu</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">urls</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">small</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">          </span><span style="color:var(--shiki-token-parameter);">small</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">setu</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">urls</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">thumb</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">          </span><span style="color:var(--shiki-token-parameter);">thumbnail</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">setu</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">urls</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">mini</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        },</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        </span><span style="color:var(--shiki-token-parameter);">title</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">setu</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">title</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        </span><span style="color:var(--shiki-token-parameter);">author</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">setu</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">author</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        </span><span style="color:var(--shiki-token-parameter);">nsfw</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">setu</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">r18</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        </span><span style="color:var(--shiki-token-parameter);">tags</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">setu</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">tags</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">        </span><span style="color:var(--shiki-token-parameter);">pageUrl</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">\`https://pixiv.net/i/</span><span style="color:var(--shiki-token-keyword);">\${</span><span style="color:var(--shiki-token-constant);">setu</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-parameter);">pid</span><span style="color:var(--shiki-token-keyword);">}</span><span style="color:var(--shiki-token-string);">\`</span><span style="color:var(--shiki-token-text);">,</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">      }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    })</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 图源插件还需要导出配置项，因此我们采用 TypeScript 的 namespace</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 将配置项 Config 与上面的 class 定义合并。</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">namespace</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">LoliconImageSource</span><span style="color:var(--shiki-token-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">interface</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">extends</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">ImageSource</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-text);">  </span><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">const</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">&lt;</span><span style="color:var(--shiki-token-constant);">Config</span><span style="color:var(--shiki-token-text);">&gt; </span><span style="color:var(--shiki-token-operator);">=</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-constant);">Schema</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">intersect</span><span style="color:var(--shiki-token-text);">([</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 结合使用 \`Svchema.intersect\` 和 \`createSchema\` 辅助函数，</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:#7F848E;font-style:italic;">// 向图源插件的配置项里添加全局的通用配置，\`label\` 一般为图源插件名。</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">    </span><span style="color:var(--shiki-token-constant);">ImageSource</span><span style="color:var(--shiki-token-text);">.</span><span style="color:var(--shiki-token-function);">createSchema</span><span style="color:var(--shiki-token-text);">({ </span><span style="color:var(--shiki-token-parameter);">label</span><span style="color:var(--shiki-token-text);">: </span><span style="color:var(--shiki-token-string);">&#39;lolicon&#39;</span><span style="color:var(--shiki-token-text);"> }),</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">  ])</span></span>
<span class="line"><span style="color:var(--shiki-token-text);">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 以默认导出方式导出整个命名空间</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-parameter);">LoliconImageSource</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>上述代码为介绍与解释 <code>booru</code> 图源的开发步骤有一定简化，你可以直接在 <a href="https://github.com/koishijs/koishi-plugin-booru/tree/main/packages/lolicon" target="_blank" rel="noreferrer">GitHub</a> 上阅读 lolicon 插件真正的源码。</p></div>`,13),l=[e];function p(r,i,k,c,y,h){return n(),a("div",null,l)}const u=s(o,[["render",p]]);export{x as __pageData,u as default};
