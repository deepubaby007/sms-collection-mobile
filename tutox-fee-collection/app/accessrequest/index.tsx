import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AccessRequest = () => {
    const handleRequestAccess = () => {
        // Handle access request logic here
        console.log('Access requested');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Access Request</Text>
            <Button title="Request Access" onPress={handleRequestAccess} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default AccessRequest;