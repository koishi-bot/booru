import{_ as e,t as o,v as a,S as r}from"./chunks/framework.dbf0e487.js";const _=JSON.parse('{"title":"koishi-plugin-booru-gelbooru","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/plugins/gelbooru.md"}'),i={name:"zh-TW/plugins/gelbooru.md"},l=r('<h1 id="koishi-plugin-booru-gelbooru" tabindex="-1">koishi-plugin-booru-gelbooru <a class="header-anchor" href="#koishi-plugin-booru-gelbooru" aria-label="Permalink to &quot;koishi-plugin-booru-gelbooru&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ol><li>在 Koishi 中下载并安装本插件，若你还未安装 <a href="./../">Booru 插件</a>，请先安装。</li></ol><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><h3 id="全局设置" tabindex="-1">全局设置 <a class="header-anchor" href="#全局设置" aria-label="Permalink to &quot;全局设置&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>此处的配置项可参考<a href="./../config.html#图源全局设置">图源全局设置</a></p></div><h3 id="搜索设置" tabindex="-1">搜索设置 <a class="header-anchor" href="#搜索设置" aria-label="Permalink to &quot;搜索设置&quot;">​</a></h3><br><h4 id="endpoint" tabindex="-1">endpoint <a class="header-anchor" href="#endpoint" aria-label="Permalink to &quot;endpoint&quot;">​</a></h4><ul><li>类型：<code>string</code></li><li>默认值：<code>https://gelbooru.com/index.php</code></li></ul><p>Gelbooru 的 API 地址。</p><h4 id="keypairs" tabindex="-1">keyPairs <a class="header-anchor" href="#keypairs" aria-label="Permalink to &quot;keyPairs&quot;">​</a></h4><ul><li>类型：<code>string[]</code></li><li>默认值：<code>[]</code></li></ul><p>Gelbooru 的登录凭据。如该项为空，则使用匿名登录。</p><p>由于 Gelbooru 的 API 限制，匿名用户极易触发防火墙限制（这表现为请求时无法获取图片，并返回 403 错误码）。因此推荐设置至少一个登录凭据用于检索图片，当登录凭据设置为多个时，将会针对每个凭据的搜索次数进行平均分配。</p><h2 id="configure-credentials" tabindex="-1">获取与设置登录凭据 <a class="header-anchor" href="#configure-credentials" aria-label="Permalink to &quot;获取与设置登录凭据 {#configure-credentials}&quot;">​</a></h2><ol><li>访问 <a href="https://gelbooru.com" target="_blank" rel="noreferrer">Gelbooru</a> 并登录。如果你还没有账号，你需要先注册一个账号。</li><li>访问 <a href="https://gelbooru.com/index.php?page=account&amp;s=options" target="_blank" rel="noreferrer">个人页面</a> 并翻阅到页面底部找到 <code>API Access Credentials</code> 字样，复制其右侧的文本框的内容。</li><li>在 Koishi 端的 <code>kayPairs</code> 配置项中添加项目，并粘贴刚刚复制的内容。</li><li>保存配置。</li></ol>',17),t=[l];function n(s,c,h,d,u,p){return o(),a("div",null,t)}const g=e(i,[["render",n]]);export{_ as __pageData,g as default};
