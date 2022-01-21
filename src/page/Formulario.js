import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Button, Text, TextInput, Avatar } from 'react-native-paper';

const Formulario = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.flex1} >
                    <Text>Slide</Text>
                </View>
                <View style={[styles.flex2, styles.flexRow]} >
                    <View>
                        <Avatar.Image source={require('../assets/Group_40142x.png')} />
                    </View>
                    <View>
                        <Text>TE QUEREMOS
                            <Text style={styles.orange}>CONOCER</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.flex4} >
                    <View style={styles.marginTopBottom}>
                        <Text>Queremos saber que eres tú, por favor ingresa los siguientes datos:</Text>
                    </View>
                    <View style={{ marginBottom: "8%" }}>
                        <Text style={styles.fontSize_20}>Nombre (s)</Text>
                        <TextInput />
                    </View>
                    <View>
                        <Text style={styles.fontSize_20}>Apellidos</Text>
                        <TextInput />
                    </View>
                </View>
                <View style={[styles.flex1, styles.alingItemsCenter,styles.marginTop20P]} >
                    <Button color="orange"
                        labelStyle={{ fontSize: 18 }}
                        uppercase={false}
                        style={{ width: "75%", borderRadius: 20 }}
                        mode="contained"
                        onPress={() => console.log('Pressed')}>
                        Enviar
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: "column"
    },
    alingItemsCenter:{
        alignItems: 'center'
    },
    borderRadius20: {
        borderRadius: 20
    },
    orange: {
        color: "#fa4d09"
    },
    fontSize_20: {
        fontSize: 20
    },
    marginTopBottom: {
        marginTop: 50,
        marginBottom: 50
    },
    marginTop20P: {
        marginTop: "20%"
    },
    widht75:{
        width: "75%"
    },
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2
    },
    flex3: {
        flex: 3
    },
    flex4: {
        flex: 4
    },
    flexRow: {
        flexDirection: "row"
    }
});

export default Formulario;
