import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Layout = props => <View style={[styles.container, props.style]}>{props.children}</View>

export default Layout

const styles = StyleSheet.create ({
    container:{
        backgroundColor:'#fff',
        flex:1
    }
})