import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
// service
import {Auth} from '../services';

export default Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.scroll}>
      <Text style={styles.heading}>Login</Text>

      <Input
        placeholder="Email"
        value={email}
        onChangeText={e => setEmail(e)}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={e => setPassword(e)}
      />
      <Spacer>
        <Button title="Login" onPress={() => Auth.signIn(email, password)} />
      </Spacer>
      <Spacer>
        <Button
          title="Have not an account? SignUp"
          onPress={() => navigation.navigate('SignupScreen')}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});
