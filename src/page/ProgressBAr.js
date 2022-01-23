import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { Col, Row, Grid } from "react-native-easy-grid";

const Bar = () => {
    return (
        <View style={styles.marginTop}>
            <Grid>
                <Row>
                    <Col style={{alignItems: 'center'}}>
                        <Image
                            source={require('../assets/Group4015.png')}
                            resizeMode="stretch" />
                    </Col>
                    <Col style={{alignItems: 'center'}}>
                        <Image
                            source={require('../assets/Group4019.png')} />
                    </Col>
                </Row>
                <Row>
                    <Progress.Bar
                        color="#FA4D09"
                        progress={0.5}
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
