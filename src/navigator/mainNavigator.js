import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen210595Navigator from '../features/BlankScreen210595/navigator';
import BlankScreen110594Navigator from '../features/BlankScreen110594/navigator';
import BlankScreen010593Navigator from '../features/BlankScreen010593/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen210595: { screen: BlankScreen210595Navigator },
BlankScreen110594: { screen: BlankScreen110594Navigator },
BlankScreen010593: { screen: BlankScreen010593Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
