import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default ()=>{
    return (
        <View style={styles.offlineContainer}>
            <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 30
    },
    offlineText: { color: '#fff' }
});
