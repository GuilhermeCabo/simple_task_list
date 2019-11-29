import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';

export default createAppContainer(
  createStackNavigator(
    {
      Main,
    },
    {
      initialRouteName: 'Main',
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    },
  ),
);
