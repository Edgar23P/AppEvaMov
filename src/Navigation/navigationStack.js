import { StackNavigator ,createAppContainer,createStackNavigator} from "react-navigation";

import AssistancePass from '../screens/modules/Assistance/AssistancePass';
//import Logout from "../Components/screen2";
import Login from "../screens/modules/Security/SignIn";

const navigator =  StackNavigator({
  login: {
    screen: Login
  },
  screen1: {
    screen: AssistancePass
  },
 
});

export default navigator;