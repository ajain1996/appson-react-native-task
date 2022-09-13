import { View, Text, TextInput, StyleSheet, TouchableHighlight, Dimensions } from 'react-native'
import React from 'react'
import { windowWidth } from '../utils/utils'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.bicycleText}>
                    <Text style={{ fontSize: 16, color: "#944135" }}>Bicycle</Text>
                </View>
                <View style={{ height: 50 }} />

                <TextInput
                    placeholder='Email'
                    placeholderTextColor="#999"
                    style={styles.inputStyle}
                />
                <Text />

                <TextInput
                    placeholder='Password'
                    placeholderTextColor="#999"
                    style={styles.inputStyle}
                />
                <Text style={{ fontSize: 14, color: "#999", marginTop: 8 }}>
                    Forgot Password
                </Text>

                <TouchableHighlight style={styles.loginBtn}>
                    <Text style={{ fontSize: 14, color: "#999" }}>LOGIN</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%", height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    inputStyle: {
        width: windowWidth - 120, height: 48,
        backgroundColor: "#FFBFCB",
        textAlign: "center", fontSize: 14,
        borderRadius: 50
    },
    loginBtn: {
        width: windowWidth - 60, height: 48,
        backgroundColor: "#FE1394",
        borderRadius: 50,
        marginTop: 60,
        justifyContent: "center",
        alignItems: 'center'
    },
    bicycleText: {
        borderWidth: 4,
        borderRadius: 100,
        borderColor: "#944135",
        width: 80, height: 80,
        justifyContent: "center",
        alignItems: 'center'
    }
})
