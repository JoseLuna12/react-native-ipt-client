import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ChannelItem from '../components/channelListItem';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useIpptvData from '../helpers/getIptvDataHook';
import HomeView from '../components/homeView';
const Stack = createNativeStackNavigator();



export default function HomePage() {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeView}
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

