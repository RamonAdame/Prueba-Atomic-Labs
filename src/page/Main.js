import { StyleSheet, View, ScrollView, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useRef } from 'react';
import { Button, Text, Card } from 'react-native-paper';
import { Col, Row, Grid } from "react-native-easy-grid";

export default function Main(props) {
    const { navigation } = props;
    //let scrollRef = useRef(null);

    // const toNextPage = () => {
    //     if (scrollRef.current !== null) {
    //         console.log(scrollRef.current.scrollTo)
    //         scrollRef.current.scrollTo({
    //             x: 5,
    //             animated: true,
    //         });
    //     }
    // };

    return (
        <ImageBackground source={require('../assets/MaskGroup12x.png')}
            style={{
                height: "100%",
                width: "100%", flex: 1
            }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ flex: 3, alignItems: 'center' }} >
                        <Text style={[styles.white, { fontSize: 40 }]}>Desarrolla todo</Text>
                        <Text style={[styles.orange, { fontSize: 40 }]}>tu POTENCIAL</Text>
                        <Text style={[styles.white, { fontSize: 30 }]}>dentro del equipo</Text>
                        <Text style={[styles.orange, { fontSize: 40 }]}>ATOMIC
                            <Text style={[styles.white, { fontSize: 40 }]}>LABS</Text>
                        </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }} >
                        <TouchableOpacity
                            onPress={() => console.log("hola")}>
                            <Image
                                style={styles.setIcon}
                                source={require('../assets/Group4013.png')} />
                        </TouchableOpacity>
                        <Text
                            style={[styles.white, styles.fontSize_18]}>Quiero saber más</Text>
                    </View>
                    <View style={{ flex: 4, alignItems: 'center' }} >
                        <Image
                            style={styles.astronaut}
                            source={require('../assets/Group4032.png')} />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }} >
                        <Button
                            color="white"
                            labelStyle={{ color: "#1b71a7", fontSize: 18 }}
                            uppercase={false}
                            style={[styles.borderRadius20, { width: "60%", padding: 5 }]}
                            mode="contained"
                            onPress={() => navigation.navigate('Formulario')}>
                            ¡Quiero ser parte!
                        </Button>
                    </View>
                    <View style={{ flex: 3, alignItems: 'center' }} >
                        <Text style={[styles.white, { fontSize: 30 }]}>SOMOS EL BRAZO</Text>
                        <Text style={[styles.white, { fontSize: 30 }]}>DERECHO
                            <Text style={[styles.orange, { fontSize: 30 }]}> DE LA</Text>
                        </Text>
                        <Text style={[styles.orange, { fontSize: 30 }]}>TECNOLOGÍA</Text>
                    </View>
                </View>
                {/* <View style={{ flex: 4, alignItems: 'center' }}>
                    <Card.Content style={{
                        alignItems: 'center',
                        backgroundColor: '#FA4D09',
                        borderRadius: 12,
                        width: "80%"
                    }}>
                        <Image
                            style={styles.astronaut}
                            source={require('../assets/Group4036.png')} />
                        <Text style={[styles.white, { fontSize: 40 }]}>IMAGINA</Text>

                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.white}>{'\u2022'}</Text>
                                <Text style={[styles.white, { marginBottom: 10 }]}>
                                    Estrategia Digital
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.white}>{'\u2022'}</Text>
                                <Text style={[styles.white, { marginBottom: 10 }]}>
                                    Big Data & Analysis
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.white}>{'\u2022'}</Text>
                                <Text style={[styles.white, { marginBottom: 10 }]}>
                                    Consultoría Tecnólogica
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.white}>{'\u2022'}</Text>
                                <Text style={[styles.white, { marginBottom: 10 }]}>
                                    Reducción de costos TI
                                </Text>
                            </View>
                        </View>
                    </Card.Content>
                </View> */}
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
        borderRadius: 15
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
        height: 50,
        width: 50,
        resizeMode: 'stretch',
    },
    astronaut: {
        marginVertical: 5,
        height: 280,
        width: 280,
        resizeMode: 'stretch',
    },
});

