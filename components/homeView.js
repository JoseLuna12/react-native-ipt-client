import useIpptvData from "../helpers/getIptvDataHook";
import ChannelItem from "./channelListItem";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
export default function HomeView() {
    const data = useIpptvData(2000)
    return (
        <View styles={styles.container}>
            <View style={{ height: 10 }} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <ChannelItem image={item.tvg.logo} name={item.name} playlist={item.url} />
                    )
                }}
                keyExtractor={item => item.rnId}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f6',
    }
});
