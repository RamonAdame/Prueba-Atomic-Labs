import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image, ImageBackground } from 'react-native';
import { Button, Text, Avatar } from 'react-native-paper';
import Bar from './ProgressBAr';

const Formulario = (props) => {
    const { navigation } = props;
    const { navigate } = navigation;
    const [form, setForm] = useState({ name: null, lastName: null });
    const [formErrorName, setFormErrorName] = useState({ name: false });
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if ((form.lastName === null || form.lastName === "") || (form.name === null || form.name === "")) {
            setDisabled(true)
        } else {
            setDisabled(false);
        }
    }, [form.lastName, form.name])

    //PARA GUARDAR LOS DATOS EN EL ESTADO "FORM"
    const setDatos = (e, type) => {
        let errors = {}
        if (type === "name" && e.nativeEvent.text.length < 5) {
            errors.name = true;
            setForm({ ...form, [type]: null })
        } else {
            errors.name = false;
            setForm({ ...form, [type]: e.nativeEvent.text })
        }
        setFormErrorName(errors)
    }

    //PARA ENVIAR LOS DATOS COMO PARAMETROS AL PAGE DE CELULAR
    const Send = async () => {
        navigate('ValidarCelular', {
            nombre: form.name,
            apellidos: form.lastName
        });
        setForm({ name: null, lastName: null })
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
                        <Bar />
                    </View>
                    <View style={[styles.flex2, styles.flexRow]} >
                        <View style={{ marginTop: 30, marginLeft: 30 }}>
                            <Avatar.Image size={40} source={require('../assets/Group_40142x.png')} />
                        </View>
                        <View style={{ marginTop: 20, marginLeft: 50 }}>
                            <Text style={[styles.white, {
                                fontSize: 25,
                                fontWeight: "bold"
                            }]}>TE QUEREMOS
                            </Text>
                            <Text style={[styles.orange, {
                                fontSize: 25,
                                fontWeight: "bold"
                            }]}>CONOCER</Text>
                        </View>
                    </View>
                    <View style={styles.flex4} >
                        <View style={styles.marginTopBottom}>
                            <Text style={styles.fontSize_18, styles.white}>Queremos saber que eres tú, por favor ingresa los siguientes datos:</Text>
                        </View>
                        <View style={{ marginBottom: "5%" }}>
                            <Text style={styles.fontSize_20, styles.white}>Nombre (s)</Text>
                            <View style={[styles.setSection1,
                            formErrorName.name && styles.borderRed]}>
                                <TextInput
                                    underlineColorAndroid="transparent"
                                    style={[styles.inputs]}
                                    onChange={(e) => setDatos(e, "name")}
                                    value={form.name}
                                />
                                <Image
                                    tintColor='gray'
                                    style={styles.setIcon}
                                    source={require('../assets/ic_lock_24px.png')} />
                            </View>
                            {formErrorName.name &&
                                <Text style={styles.colorRed}>El nombre deberá tener mínimo 5 caracteres</Text>}
                        </View>
                        <View>
                            <Text style={styles.fontSize_20, styles.white}>Apellidos</Text>
                            <View style={styles.setSection2}>
                                <TextInput
                                    underlineColorAndroid="transparent"
                                    style={[styles.inputs]}
                                    onChange={(e) => setDatos(e, "lastName")}
                                    value={form.lastName}
                                />
                                <Image
                                    tintColor='gray'
                                    style={styles.setIcon}
                                    source={require('../assets/ic_lock_24px.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.flex1,
                         styles.alingItemsCenter, styles.marginTop20P]} >
                        <Button
                            color="#FA4D09"
                            labelStyle={{ fontSize: 18 }}
                            uppercase={false}
                            style={{ width: "60%", borderRadius: 20 }}
                            mode="contained"
                            disabled={disabled}
                            onPress={() => Send()}>
                            Enviar
                        </Button>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Image
                            style={styles.astronaut}
                            source={require('../assets/Group4033.png')} />
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
        marginTop: 25,
        marginBottom: 25
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

export default Formulario;
