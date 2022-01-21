import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import { Button, Text } from 'react-native-paper';

export default function Main() {
    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 1 }} >
                <Text>Logo</Text>
            </View>
            <View style={{ flex: 3 }} >
                <Text>Frase</Text>
            </View>
            <View style={{ flex: 1 }} >
                <Text>Quiero saber más</Text>
            </View>
            <View style={{ flex: 4 }} >
                <Text>Astronauta</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }} >
                <Button color="white"
                    labelStyle={{ color: "#1b71a7", fontSize: 18 }} 
                    uppercase={false}
                    style={{ width: "75%" }} 
                    mode="contained" 
                    onPress={() => console.log('Pressed')}>
                    ¡Quiero ser parte!
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

