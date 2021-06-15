import React from 'react';
import Header from './Header';
import { StyleSheet, View } from 'react-native';

const Layout = ({ children }) => {
    return ( 
        <View>
            <Header />
            {children}
        </View>
     );
}

const styles = StyleSheet.create({

});
 
export default Layout;