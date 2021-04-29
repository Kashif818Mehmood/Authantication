import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Auth} from '../services';
import Spacer from '../components/Spacer';

export default HomeScreen = () => {
  return (
    <View style={styles.signinstyle}>
      <Text style={{fontSize: 20}}>Home Screen</Text>
      <Spacer>
        <TouchableOpacity onPress={() => Auth.signOut()}>
          <Text style={{fontSize: 20, color: 'blue'}}>Sign Out</Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};
const styles = StyleSheet.create({
  signinstyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
