import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { Col, Row, Grid } from "react-native-easy-grid";

const Bar = (props) => {
    const { celular } = props;
    console.log(celular)
    return (
        <View style={styles.marginTop}>
            <Grid>
                <Row style={{marginBottom: 10}}>
                    <Col style={{ alignItems: 'center' }}>
                        {!celular ?
                            <Image
                                source={require('../assets/Group4015.png')}
                                resizeMode="stretch" />
                            :
                            <Image
                                source={require('../assets/Group4016.png')}
                                resizeMode="stretch" />
                        }
                    </Col>
                    <Col style={{ alignItems: 'center' }}>
                        {!celular ?
                            <Image
                                source={require('../assets/Group4019.png')} />
                            :
                            <Image
                                source={require('../assets/Group4020.png')} />
                        }
                    </Col>
                </Row>
                <Row>
                    <Progress.Bar
                        color="#FA4D09"
                        progress={!celular ? 0.3 : 1}
                        width={350}
                    />
                </Row>
            </Grid>
        </View>
    );
};

const styles = StyleSheet.create({
    marginTop: {
        marginTop: 25
    }
})

export default Bar;
