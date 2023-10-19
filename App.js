import HomePage from './pages/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChannelDetail from './pages/channel';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerTitle: "Test app",
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                color="#fff"
                title="More" />
            )
          }}
        />
        <Stack.Screen
          name="channel" component={ChannelDetail}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

