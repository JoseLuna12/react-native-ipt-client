import { View, Text, Button } from "react-native";
import { Video, ResizeMode } from 'expo-av';
import * as React from 'react';



/**
 * Represents a Channel Detail page.
 * @constructor
 * @param route The route parameters passed on navigation trigger.
 * @param params The parameters passed on navigation trigger.
 * @param {string} params.name - the name of the channel.
 * @param {string} params.playlist - the live video of the channel.
 */
export default function ChannelDetail({ route }) {
    const { params: { title, playlist } } = route
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    React.useEffect(() => {
        if (video) {
            video.current.playAsync()
        }
    }, [video])

    return (
        <View>
            <Text>{playlist}</Text>
            <Text>{title}</Text>
            <Button
                title={status.isPlaying ? 'Pause' : 'Play'}
                onPress={() =>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                }
            />
            <Video
                ref={video}
                style={{ width: "100%", height: 400 }}
                source={{
                    uri: playlist,
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
    )
}