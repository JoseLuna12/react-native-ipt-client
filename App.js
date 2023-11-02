import HomePage from './pages/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlaylistsPage from './pages/playlists';
import SettingsPage from './pages/settings';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Playlist" component={PlaylistsPage} />
      <Tab.Screen name="Settings" component={SettingsPage} />
    </Tab.Navigator>

  );
}

