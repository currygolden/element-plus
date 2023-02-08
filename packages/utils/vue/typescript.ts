import type { AppContext, Plugin } from 'vue'

// 定义有install方法的sfc 即插件
export type SFCWithInstall<T> = T & Plugin

// 两种的联合类型
export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}
