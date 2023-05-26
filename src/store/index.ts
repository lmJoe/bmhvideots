import { combineReducers, legacy_createStore as createStore } from 'redux';
import videoPage,{ videoReducer } from './videoRedux/reducer';
import channelPage,{ channelReducer } from './channelRedux/reducer';
import mediaPage,{ mediaReducer } from './mediaTopRedux/reducer';
// 1. 引入相关文件
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//2. 定义配置的信息
const persitConfig = {
  key:"root",
  storage,
  //黑名单 不缓存
  blacklist: ['videoPage']
}
let allReducers = combineReducers({
  videoPage: videoPage,
  channelPage:channelPage,
  mediaPage:mediaPage
})
// 3. 持久化根reducer和配置,并返回所有
const persistedReducer = persistReducer(persitConfig, allReducers)
// 4. 创建 持久化store对象
let store = createStore(persistedReducer)
// 5. 持久化store对象
let persistor = persistStore(store)
export interface ReducerState {
  videoPage: videoReducer;
  channelPage: channelReducer;
  mediaPage: mediaReducer;
}
// 6. 导出 注意导出方式
export default store
export { persistor }

// export default combineReducers({
//   videoPage,
//   channelPage,
//   mediaPage
// });