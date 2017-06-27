import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import DeviceInfo from 'react-native-device-info';
import rootReducer from './reducers';
import { getUserSetting } from './actions/userSetting';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

store.dispatch(getUserSetting(DeviceInfo.getUniqueID()));

export default store;
