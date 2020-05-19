import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn248161Navigator from '../features/SignIn248161/navigator';
import Settings48106Navigator from '../features/Settings48106/navigator';
import UserProfile48099Navigator from '../features/UserProfile48099/navigator';
import Settings48098Navigator from '../features/Settings48098/navigator';
import Settings48096Navigator from '../features/Settings48096/navigator';
import SignIn248094Navigator from '../features/SignIn248094/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
SignIn248161: { screen: SignIn248161Navigator },
Settings48106: { screen: Settings48106Navigator },
UserProfile48099: { screen: UserProfile48099Navigator },
Settings48098: { screen: Settings48098Navigator },
Settings48096: { screen: Settings48096Navigator },
SignIn248094: { screen: SignIn248094Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
