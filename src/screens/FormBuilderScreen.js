import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native'
import React from 'react'
import { windowWidth } from '../utils/utils'

export default function FormBuilderScreen() {
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState("");

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: "#fff" }}>
            <StatusBar backgroundColor="#5f0bf4" barStyle="light-content" />
            <View style={styles.formHeader}>
                <Text style={styles.headerText}>React Native Paper Form Builder</Text>
            </View>
            <View style={{ height: 20 }} />

            <View style={{ alignItems: 'center' }}>
                <Text style={styles.formHeading}>Form Builder</Text>

                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder='Name'
                        placeholderTextColor="#999"
                        style={styles.inputStyle}
                    />
                    <Text style={styles.nameLabel}>Name</Text>
                </View>

                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor="#999"
                        style={styles.inputStyle}
                        autoCapitalize={false}
                        keyboardType="email-address"
                        onChangeText={(val) => {
                            if (!(val.includes("@")) || !(val.includes("gmail.com"))) {
                                setError("Email is not valid!")
                            } else {
                                setError("")
                            }
                        }}
                    />
                    <Text style={styles.nameLabel}>Email Address</Text>
                    {error.length !== 0 ? <Text style={styles.error}>{error}</Text> : <></>}
                </View>

                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor="#999"
                        secureTextEntry={true}
                        style={styles.inputStyle}
                    />
                    <Text style={styles.nameLabel}>Password</Text>
                </View>

                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder='Gender'
                        placeholderTextColor="#999"
                        style={styles.inputStyle}
                    />
                    <Text style={styles.nameLabel}>Gender</Text>
                </View>

                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder='City'
                        placeholderTextColor="#999"
                        style={styles.inputStyle}
                    />
                    <Text style={styles.nameLabel}>City</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formHeader: {
        width: "100%", height: 60,
        backgroundColor: '#5f0bf4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 14, color: "#fff",
    },
    formHeading: {
        fontSize: 16, color: "#000",
    },
    inputWrapper: {
        marginTop: 25
    },
    inputStyle: {
        width: windowWidth - 60, height: 52,
        fontSize: 14, borderRadius: 4,
        paddingHorizontal: 20, color: "#000",
        borderWidth: 1, borderColor: "#999"
    },
    nameLabel: {
        position: 'absolute', top: -10, left: 8,
        fontSize: 11, color: "#999",
        backgroundColor: "#fff", paddingHorizontal: 5
    },
    error: {
        fontSize: 13, color: "red"
    }
})
