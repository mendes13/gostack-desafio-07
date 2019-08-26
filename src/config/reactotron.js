import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import ReactotronSaga from 'reactotron-redux-saga';
import Config from 'react-native-config';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(ReactotronSaga())
    .connect({ host: '' });

  console.tron = tron;
  tron.clear();
}
