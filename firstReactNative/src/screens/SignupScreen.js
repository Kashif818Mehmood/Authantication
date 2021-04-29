import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Button} from 'react-native';
import {Auth} from '../services';
import Spacer from '../components/Spacer';
// import { colors } from '../constants';
import {Input} from 'react-native-elements';
// services
// import {Auth} from '../services'
const {width, height} = Dimensions.get('window');

export default SignupScreen = ({navigation}) => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Spacer>
        <Input
          placeholder="Full Name"
          value={userName}
          onChangeText={e => setUserName(e)}
        />
      </Spacer>
      <Spacer>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={e => setEmail(e)}
        />
      </Spacer>
      <Spacer>
        <Input
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={e => setPassword(e)}
        />
      </Spacer>
      <Spacer>
        <Button
          title="Signup"
          onPress={() => Auth.signUp(userName, email, password)}
        />
      </Spacer>
      <Spacer>
        <Button
          title="Have an account? Login"
          onPress={() => navigation.navigate('Login')}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width,
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
  },
});
