import Home from './Home';
import Notification from './Page2/Notification';
import Payment from './Page3/Payment';
import Profile from './Page1/Profile';
import SideMenu from './SideMenu/SideMenu';
import {DrawerNavigator, StackNavigator} from 'react-navigation';

const Stack = {
  Prof: {
    screen: Profile
  },
  Noti: {
    screen: Notification
  },
  Pay: {
    screen: Payment
  }

};

const DrawerRoutes = {
  FirstViewStack: {
    name: 'FirstViewStack',
    screen: StackNavigator(Stack, {initialRouteName: 'Profile'})
  },
  SecondViewStack: {
    name: 'SecondViewStack',
    screen: StackNavigator(Stack, {initialRouteName: 'Notification'})
  },
  ThirdViewStack: {
    name: 'ThirdViewStack',
    screen: StackNavigator(Stack, {initialRouteName: 'Payment'})
  }

};

export const RootNavigation = StackNavigator(
  {

    Drawer: {
      name: 'Drawer',
      screen: DrawerNavigator(DrawerRoutes, {
        contentComponent: SideMenu
      })
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        statusBarHidden: true
      }
    }
  },

  {
    initialRouteName: 'Home'
  },

  {
    mode: 'modal',
    headerMode: 'none'
  },
);

/* This is working without StackNavigator*/

// export const RootNavigation = DrawerNavigator({
//   Profile: {
//     screen: Profile
//   },
//   Notification: {
//     screen: Notification
//   },
//   Payment: {
//     screen: Payment
//   }
// }, {
//   contentComponent: SideMenu,
//   drawerWidth: 300
// });

