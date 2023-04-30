import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `一个爱代码的设计师Tomda
![关注公众号](https://s1.ax1x.com/2023/04/30/p93cj56.png)
-🙇 亲爱的用户，因请求繁忙， 成本已失控。如您感觉好用可以赞赏支持，感谢您助力每一个梦想
- 如果本项目对你有所帮助，可以关注公众号 [Tomda]
- 网站密码请关注上方公众号回复“密码”获取，请勿滥用，长期使用或部署同款网站联系下方V
- [个人网站](https://www.tomda.top/)
- AI交流群联系V：UIUX09
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
