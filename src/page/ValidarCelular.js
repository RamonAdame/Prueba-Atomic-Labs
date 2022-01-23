import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image, ImageBackground } from 'react-native';
import { Button, Text, Avatar } from 'react-native-paper';
import Bar from './ProgressBAr'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, child } from 'firebase/database'
import { firebaseConfig } from '../utils/firebase';

const app = initializeApp(firebaseConfig);

const ValidarCelular = (props) => {
    const { navigation, route } = props;
    const { params } = route;
    const { nombre, apellidos } = params;
    const { navigate } = navigation;

    const [form, setForm] = useState({ tel: null });
    const [disabled, setDisabled] = useState(false);
    const [celular, setCelular] = useState(false);

    useEffect(() => {
        if ((form.tel === null || form.tel === "")) {
            setDisabled(true)
        } else {
            setDisabled(false);
        }
    }, [form.tel])

    useEffect(() => {
        setCelular(true);
    }, [])

    //PARA GUARDAR LOS DATOS EN EL ESTADO "FORM"
    const setDatos = (e, type) => {
        setForm({ ...form, [type]: e.nativeEvent.text })
    }

    //ENVIAR LA INFORMACION A FIREBASE
    const Send = async () => {
        const db = await getDatabase(app);

        const newKey = push(child(ref(db), 'posts')).key;

        set(ref(db, 'form/' + newKey), {
            nombre: nombre,
            apellidos: apellidos,
            tel: form.tel
        }).then(resp => {
            navigate('Final', { id: newKey });
            setForm({ tel: null });
        }).catch(err => {
            alert(err)
        });
    }

    return (
        <ImageBackground source={require('../assets/MaskGroup12x.png')}
            style={{
                height: "100%",
                width: "100%", flex: 1
            }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.flex1} >
                        <Bar celular={celular} />
                    </View>
                    <View style={[styles.flex2, styles.flexRow]} >
                        <View style={{ marginTop: 30, marginLeft: 30 }}>
                            <Avatar.Image size={40} source={require('../assets/Group40232x.png')} />
                        </View>
                        <View style={{ marginTop: 20, marginLeft: 50 }}>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                color: 'white'
                            }}>VALIDA TU{"\n"}
                                <Text style={styles.orange}>CELULAR</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.flex4} >
                        <View style={styles.marginTopBottom}>
                            <Text style={[styles.fontSize_18, styles.white]}>Necesitamos validar tu número para continuar</Text>
                        </View>
                        <View style={styles.marginTopBottom}>
                            <Text style={[styles.fontSize_18, styles.white]}>Ingresa tu número a 10 dígitos y te enviaremos un código SMS</Text>
                        </View>
                        <View style={{ marginBottom: "5%" }}>
                            <Text style={[styles.fontSize_20, styles.white]}>Número de Celular</Text>
                            <View style={[styles.setSection1]}>
                                <TextInput
                                    keyboardType="numeric"
                                    underlineColorAndroid="transparent"
                                    style={[styles.inputs]}
                                    onChange={(e) => setDatos(e, "tel")}
                                    value={form.tel}
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
                            onPress={() => Send()}>
                            Continuar
                        </Button>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image
                            style={styles.astronaut}
                            source={require('../assets/Group4039.png')} />
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
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
    white: {
        color: "#fff"
    },
    fontSize_18: {
        fontSize: 18
    },
    marginTopBottom: {
        marginTop: 10,
        marginBottom: 10
    },
    marginTop20P: {
        marginTop: 40
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
    astronaut: {
        marginVertical: 5,
        height: 350,
        width: 350,
        resizeMode: 'stretch',
    },
});

export default ValidarCelular;
