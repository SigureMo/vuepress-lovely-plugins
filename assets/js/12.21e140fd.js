(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{386:function(t,e,a){"use strict";a.r(e);var s=a(7),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-meting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-meting"}},[t._v("#")]),t._v(" vuepress-plugin-meting "),a("GitHubLink",{attrs:{repo:"moefyit/vuepress-plugin-meting"}})],1),t._v(" "),a("p",[t._v("🍰 A simple plugin connect APlayer, Meting and VuePress.")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-plugin-meting",target:"_blank"}},[a("img",{attrs:{alt:"npm",src:"https://img.shields.io/npm/v/vuepress-plugin-meting.svg"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-meting/stargazers",target:"_blank"}},[a("img",{attrs:{alt:"GitHub stars",src:"https://img.shields.io/github/stars/moefyit/vuepress-plugin-meting"}})]),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-plugin-meting",target:"_blank"}},[a("img",{attrs:{alt:"downloads",src:"https://img.shields.io/npm/dt/vuepress-plugin-meting.svg"}})]),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-plugin-meting",target:"_blank"}},[a("img",{attrs:{alt:"downloads",src:"https://img.shields.io/npm/dm/vuepress-plugin-meting.svg"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-meting/blob/master/LICENSE",target:"_blank"}},[a("img",{attrs:{alt:"GitHub license",src:"https://img.shields.io/github/license/moefyit/vuepress-plugin-meting"}})])]),t._v(" "),a("ul",[a("li",[t._v("Document: "),a("a",{attrs:{href:"https://moefyit.github.io/moefy-vuepress/",target:"_blank",rel:"noopener noreferrer"}},[t._v("moefy-vuepress"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("LiveDemo: "),a("a",{attrs:{href:"https://nyakku.moe/",target:"_blank",rel:"noopener noreferrer"}},[t._v("notev"),a("OutboundLink")],1)])]),t._v(" "),a("Meting",{attrs:{server:"netease",type:"playlist",mid:"2539599584","lrc-type":3}}),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-meting -D\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or use npm")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vuepress-plugin-meting -D\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         metingApi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         meting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         aplayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         mobile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用该插件后将自动注册 "),a("code",[t._v("<Meting/>")]),t._v(" 组件与 "),a("code",[t._v("<APlayer/>")]),t._v(" 组件，你可以在任意位置使用它们")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<Meting/>")]),t._v(" 组件支持 "),a("code",[t._v("meting")]),t._v(" Options 和 "),a("code",[t._v("aplayer")]),t._v(" Options，其中 "),a("code",[t._v("aplayer")]),t._v(" 的 "),a("code",[t._v("audio")]),t._v(" 选项将自动通过 metingApi 获取，如果想要额外添加 "),a("code",[t._v("audio")]),t._v(" 的话，可以通过 "),a("code",[t._v("additionalAudios")]),t._v(" 选项实现")]),t._v(" "),a("li",[a("code",[t._v("<APlayer/>")]),t._v(" 组件支持 "),a("code",[t._v("aplayer")]),t._v(" Options，当然，你需要自行提供 "),a("code",[t._v("audio")]),t._v(" 音乐源")])]),t._v(" "),a("p",[a("code",[t._v("config.js")]),t._v(" 中的 "),a("code",[t._v("meting")]),t._v(" 选项、"),a("code",[t._v("aplayer")]),t._v(" 选项和 "),a("code",[t._v("mobile")]),t._v(" 选项是全局 UI 组件的配置项，当 "),a("code",[t._v("meting")]),t._v(" 选项被配置后，将自动注册一个全局 UI 组件 "),a("code",[t._v("<Meting/>")]),t._v("（吸底模式），这三个配置项不影响其他组件的配置项")]),t._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("p",[t._v("Options 分为 "),a("code",[t._v("metingApi")]),t._v("、"),a("code",[t._v("meting")]),t._v("、"),a("code",[t._v("aplayer")]),t._v("、"),a("code",[t._v("mobile")]),t._v(" 四部分")]),t._v(" "),a("h3",{attrs:{id:"metingapi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metingapi"}},[t._v("#")]),t._v(" metingApi")]),t._v(" "),a("p",[t._v("即 "),a("code",[t._v("Meting")]),t._v(" 的 "),a("code",[t._v("api")]),t._v("，默认为 @metowolf 提供的 "),a("code",[t._v("api")]),t._v("，你也可以通过自建修改该选项")]),t._v(" "),a("h3",{attrs:{id:"meting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meting"}},[t._v("#")]),t._v(" meting")]),t._v(" "),a("p",[a("code",[t._v("Meting")]),t._v(" 相关选项")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("server")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[t._v("描述：MetingApi 中的 "),a("code",[t._v("server")]),t._v(" 参数，即音乐平台")]),t._v(" "),a("li",[t._v("可选值： "),a("code",[t._v('"netease" | "tencent" | "xiami" | "kugou" | "baidu"')])])])]),t._v(" "),a("li",[a("p",[t._v("type")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[t._v("描述：MetingApi 中的 "),a("code",[t._v("type")]),t._v(" 参数，即资源类型（播放列表、单曲、专辑等）")]),t._v(" "),a("li",[t._v("可选值： "),a("code",[t._v('"song" | "album" | "artist" | "playlist"')])])])]),t._v(" "),a("li",[a("p",[t._v("mid")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[t._v("描述：MetingApi 中的 "),a("code",[t._v("id")]),t._v(" 参数，即资源 ID")])])]),t._v(" "),a("li",[a("p",[t._v("auto")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值："),a("code",[t._v('""')])]),t._v(" "),a("li",[t._v("描述：资源 "),a("code",[t._v("url")]),t._v("，填写后可通过资源 "),a("code",[t._v("url")]),t._v(" 自动解析资源平台、类型、ID，上述三个选项将被覆盖（本参数仅支持 "),a("code",[t._v("netease")]),t._v("、"),a("code",[t._v("tencent")]),t._v("、"),a("code",[t._v("xiami")]),t._v(" 三平台）")])])])]),t._v(" "),a("p",[t._v("该 Option 可分别填写 "),a("code",[t._v("server")]),t._v("、"),a("code",[t._v("type")]),t._v("、"),a("code",[t._v("mid")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("meting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"netease"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"playlist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2539599584"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("也可以只填写 "),a("code",[t._v("auto")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("meting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   auto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://music.163.com/#/playlist?id=2539599584'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"aplayer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aplayer"}},[t._v("#")]),t._v(" aplayer")]),t._v(" "),a("blockquote",[a("p",[t._v("详情见 "),a("s",[a("a",{attrs:{href:"https://aplayer.moefe.org/docs/options/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-aplayer 文档（当前无法访问）"),a("OutboundLink")],1)]),t._v(" "),a("a",{attrs:{href:"https://github.com/MoePlayer/vue-aplayer/blob/dev/docs/options/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-aplayer 文档 GitHub 页面"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("fixed")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("false")])]),t._v(" "),a("li",[t._v("描述：是否开启吸底模式")])])]),t._v(" "),a("li",[a("p",[t._v("mini")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("false")])]),t._v(" "),a("li",[t._v("描述：是否开启迷你模式")])])]),t._v(" "),a("li",[a("p",[t._v("autoplay")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("false")])]),t._v(" "),a("li",[t._v("描述：是否开启自动播放")])])]),t._v(" "),a("li",[a("p",[t._v("theme")]),t._v(" "),a("ul",[a("li",[t._v("类型： "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("#b7daff")])]),t._v(" "),a("li",[t._v("描述：设置播放器默认主题颜色")])])]),t._v(" "),a("li",[a("p",[t._v("loop")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("APlayer.LoopMode")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("all")])]),t._v(" "),a("li",[t._v("描述：设置播放器的初始循环模式")]),t._v(" "),a("li",[t._v("可选值："),a("code",[t._v("'all' | 'one' | 'none'")])])])]),t._v(" "),a("li",[a("p",[t._v("order")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("APlayer.OrderMode")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("list")])]),t._v(" "),a("li",[t._v("描述：设置播放器的初始顺序模式")]),t._v(" "),a("li",[t._v("可选值： "),a("code",[t._v("'list' | 'random'")])])])]),t._v(" "),a("li",[a("p",[t._v("preload")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("APlayer.Preload")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("auto")])]),t._v(" "),a("li",[t._v("描述：设置音频的预加载模式")]),t._v(" "),a("li",[t._v("可选值："),a("code",[t._v("'none' | 'metadata' | 'auto'")])])])]),t._v(" "),a("li",[a("p",[t._v("volume")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("number")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("0.7")])]),t._v(" "),a("li",[t._v("描述：设置播放器的音量")])])]),t._v(" "),a("li",[a("p",[t._v("additionalAudios")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("Array<APlayer.Audio>")])]),t._v(" "),a("li",[t._v("默认值："),a("code",[t._v("[]")])]),t._v(" "),a("li",[t._v("描述：除 Meting 解析的 audio 外额外添加的 audio\n"),a("blockquote",[a("p",[t._v("详情见 "),a("a",{attrs:{href:"https://github.com/MoePlayer/vue-aplayer/blob/dev/docs/options/README.md#audio-",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-aplayer 文档的 audio 选项"),a("OutboundLink")],1),t._v("，另外，作为 "),a("code",[t._v("<APlayer />")]),t._v(" 组件使用的时候仍应该使用 audio 选项。")])])])])]),t._v(" "),a("li",[a("p",[t._v("customAudioType（见 "),a("a",{attrs:{href:"https://github.com/MoePlayer/vue-aplayer/blob/dev/docs/options/README.md#customaudiotype-",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-aplayer 文档"),a("OutboundLink")],1),t._v("）")])]),t._v(" "),a("li",[a("p",[t._v("mutex")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("true")])]),t._v(" "),a("li",[t._v("描述：是否开启互斥模式")])])]),t._v(" "),a("li",[a("p",[t._v("lrcType")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("APlayer.LrcType?")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("0")])]),t._v(" "),a("li",[t._v("描述：设置 lrc 歌词解析模式")]),t._v(" "),a("li",[t._v("可选值： "),a("code",[t._v("3 | 1 | 0")]),t._v("（"),a("code",[t._v("0")]),t._v("：禁用 lrc 歌词，"),a("code",[t._v("1")]),t._v("：lrc 格式的字符串，"),a("code",[t._v("3")]),t._v("：lrc 文件 url）")])])]),t._v(" "),a("li",[a("p",[t._v("listFolded")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("false")])]),t._v(" "),a("li",[t._v("描述：是否折叠播放列表")])])]),t._v(" "),a("li",[a("p",[t._v("listMaxHeight")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("number")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("250")])]),t._v(" "),a("li",[t._v("描述：设置播放列表最大高度，单位为像素")])])]),t._v(" "),a("li",[a("p",[t._v("storageName")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("vuepress-plugin-meting")])]),t._v(" "),a("li",[t._v("描述：设置存储播放器设置的 "),a("code",[t._v("localStorage")]),t._v(" key")])])])]),t._v(" "),a("h3",{attrs:{id:"mobile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobile"}},[t._v("#")]),t._v(" mobile")]),t._v(" "),a("p",[t._v("用于控制全局吸底播放器在移动设备上的一些特殊选项")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("cover")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("true")])]),t._v(" "),a("li",[t._v("描述：是否显示封面图，如果隐藏的话可以防止播放器遮挡移动设备上的文字内容")])])]),t._v(" "),a("li",[a("p",[t._v("lrc")]),t._v(" "),a("ul",[a("li",[t._v("类型："),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值： "),a("code",[t._v("true")])]),t._v(" "),a("li",[t._v("描述：是否显示歌词")])])])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个 API 是不可用的，只是作为示例而已")]),t._v("\n         metingApi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://meting.example.com/api/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         meting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'netease'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'playlist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            mid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2539599584'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不配置该项的话不会出现全局播放器")]),t._v("\n         aplayer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            lrcType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- about.md --\x3e")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Meting")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("netease"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("playlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mid")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2539599584"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":lrc-type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这样就可以在 about.html 页面单独引入一个播放器咯～ --\x3e")]),t._v("\n")])])]),a("h2",{attrs:{id:"thanks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thanks"}},[t._v("#")]),t._v(" Thanks")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/MoePlayer/APlayer",target:"_blank",rel:"noopener noreferrer"}},[t._v("APlayer"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/MoePlayer/vue-aplayer",target:"_blank",rel:"noopener noreferrer"}},[t._v("VueAPlayer"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/metowolf/Meting",target:"_blank",rel:"noopener noreferrer"}},[t._v("Meting"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/metowolf/MetingJS",target:"_blank",rel:"noopener noreferrer"}},[t._v("MetingJS"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);