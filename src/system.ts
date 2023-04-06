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

export const defaultMessage = `Powered by OpenAI Vercel
![关注公众号](https://s1.ax1x.com/2023/04/03/pp49O74.png)
- 如果本项目对你有所帮助，可以关注公众号 [Tomda]但不接受任何付费功能请求。
- 本网站仅作为项目演示，不提供长期服务，网站密码为 \`ourongxing\`，请勿滥用，长期使用请 [自行部署](https://github.com/Tomccc520/chatgpt-tomda)，简单成本低。
- [个人网站](https://www.tomda.top/)
- 独享key或账号联系V：UIUX08
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
