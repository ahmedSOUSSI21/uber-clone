import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Auth from './screens/Auth';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false
}

export default function App() {
  const authenticated = false;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" screenOptions={screenOptions}>
        {authenticated ?
          <>
            <Stack.Screen name="Home" component={Home} />
          </>
          :
          <>
            <Stack.Screen name="Auth" component={Auth} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
