import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import { Col, Row, Grid } from "react-native-easy-grid";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from 'firebase/database'
import { firebaseConfig } from '../utils/firebase';

const app = initializeApp(firebaseConfig);

const Final = (props) => {
    const { route } = props;
    const { params } = route;
    const { id } = params;
    const [name, setName] = useState({ apellidos: "", nombre: "", tel: "" });

    useEffect(() => {
        const db = getDatabase(app);
        get(child(ref(db), `form/${id}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setName({ nombre: snapshot.val().nombre, apellidos: snapshot.val().apellidos })
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])

    return (
        <ImageBackground source={require('../assets/MaskGroup12x.png')}
            style={{
                height: "100%",
                width: "100%", flex: 1
            }}>
            <ScrollView>
                <View style={styles.container}>
                    <Grid style={styles.marginTop20P}>
                        <Row>
                            <Col style={{ alignItems: 'center' }}>
                                <Text style={[styles.white, {
                                    fontSize: 25,
                                    fontWeight: "bold"
                                }]}>TUS DATOS</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ alignItems: 'center' }}>
                                <Text style={[styles.white, {
                                    fontSize: 25,
                                    fontWeight: "bold"
                                }]}>HAN SIDO
                                    <Text style={[styles.orange, {
                                        fontSize: 25,
                                        fontWeight: "bold"
                                    }]}> ENVIADOS</Text>
                                </Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ alignItems: 'center' }}>
                                <Text style={[styles.orange, {
                                    fontSize: 25,
                                    fontWeight: "bold"
                                }]}>CON ÉXITO</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ alignItems: 'center' }}>
                                <Text style={[styles.fontSize_18,
                                styles.white,
                                { fontWeight: "bold" }]}>
                                    {name.nombre} {name.apellidos}
                                </Text>
                            </Col>
                        </Row>
                    </Grid>
                    <View style={styles.flex4} >
                        <View style={styles.marginTopBottom}>
                            <Text style={[styles.fontSize_18, styles.white]}>En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs.</Text>
                        </View>
                        <View style={styles.marginTopBottom}>
                            <Text style={[styles.fontSize_18, styles.white]}>Recuerda revisar tu bandeja de SPAM ¡Esperamos verte pronto!</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground >
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
        fontSize: 20
    },
    marginTopBottom: {
        marginTop: 15,
        marginBottom: 5
    },
    marginTop20P: {
        marginTop: "15%"
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

export default Final;
