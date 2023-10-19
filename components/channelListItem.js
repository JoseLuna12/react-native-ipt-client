import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
/**
 * Represents a ChannelItem.
 * @constructor
 * @param {string} image - the image of the channel.
 * @param {string} name - the name of the channel.
 * @param {string} playlist - the live video of the channel.
 */
export default function ChannelItem({ image, name, playlist }) {
    const navigation = useNavigation()

    const navigate = () => {
        navigation.navigate('channel', {
            title: name,
            playlist: playlist
        });
    }
    return (
        <Pressable onPress={navigate}>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image
                        source={{ uri: image }}
                        style={{ height: "100%" }}
                        contentFit="contain"
                    />
                </View>

                <Text>{name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        marginHorizontal: 9,
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white"
    },
    image: {
        width: 50,
        height: 50,
        marginEnd: 15
    }
});