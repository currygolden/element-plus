import InfiniteScroll from './src'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils'

const _InfiniteScroll = InfiniteScroll as SFCWithInstall<typeof InfiniteScroll>
// 可以当插件使用
_InfiniteScroll.install = (app: App) => {
  app.directive('InfiniteScroll', _InfiniteScroll)
}

export default _InfiniteScroll
export const ElInfiniteScroll = _InfiniteScroll
