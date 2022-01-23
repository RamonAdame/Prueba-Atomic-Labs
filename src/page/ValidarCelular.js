import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { Button, Text, Avatar } from 'react-native-paper';
import Bar from './ProgressBAr'

const ValidarCelular = () => {
    const [form, setForm] = useState({ tel: null });
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if ((form.tel === null || form.tel === "")) {
            setDisabled(true)
        } else {
            setDisabled(false);
        }
    }, [form.tel])

    //PARA GUARDAR LOS DATOS EN EL ESTADO "FORM"
    const setDatos = (e, type) => {
        setForm({ ...form, [type]: e.nativeEvent.text })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.flex1} >
                    <Bar />
                </View>
                <View style={[styles.flex2, styles.flexRow]} >
                    <View style={{ marginTop: 30, marginLeft: 30 }}>
                        <Avatar.Image size={40} source={require('../assets/Group40232x.png')} />
                    </View>
                    <View style={{ marginTop: 20, marginLeft: 50 }}>
                        <Text style={{
                            fontSize: 25,
                            fontWeight: "bold"
                        }}>VALIDA TU{"\n"}
                            <Text style={styles.orange}>CELULAR</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.flex4} >
                    <View style={styles.marginTopBottom}>
                        <Text style={styles.fontSize_18}>Necesitamos validar tu número para continuar</Text>
                    </View>
                    <View style={styles.marginTopBottom}>
                        <Text style={styles.fontSize_18}>Ingresa tu número a 10 dígitos y te enviaremos un código SMS</Text>
                    </View>
                    <View style={{ marginBottom: "5%" }}>
                        <Text style={styles.fontSize_20}>Número de Celular</Text>
                        <View style={[styles.setSection1]}>
                            <TextInput
                                keyboardType="numeric"
                                underlineColorAndroid="transparent"
                                style={[styles.inputs]}
                                onChange={(e) => setDatos(e, "tel")}
                            />
                            <Image
                                tintColor='gray'
                                style={styles.setIcon}
                                source={require('../assets/ic_lock_24px.png')} />
                        </View>
                    </View>
                </View>
                <View style={[styles.flex1, styles.alingItemsCenter, styles.marginTop20P]} >
                    <Button
                        color="#FA4D09"
                        labelStyle={{ fontSize: 18 }}
                        uppercase={false}
                        style={{ width: "60%", borderRadius: 20 }}
                        mode="contained"
                        disabled={disabled}
                        onPress={() => console.log('Pressed')}>
                        Continuar
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
    alingItemsCenter: {
        alignItems: 'center'
    },
    borderRadius20: {
        borderRadius: 20
    },
    orange: {
        color: "#fa4d09"
    },
    fontSize_18: {
        fontSize: 18
    },
    marginTopBottom: {
        marginTop: 10,
        marginBottom: 10
    },
    marginTop20P: {
        marginTop: "20%"
    },
    inputs: {
        height: 35,
        width: "86%"
    },
    widht75: {
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
    },
    colorRed: {
        color: 'red'
    },
    borderRed: {
        borderColor: 'red'
    },
    setSection1: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        paddingLeft: 5
    },
    setSection2: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        paddingLeft: 5
    },
    setIcon: {
        marginTop: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
});

export default ValidarCelular;
