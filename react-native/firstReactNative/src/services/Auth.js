import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
const signUp = (fullName, email, password) => {
  if (!fullName || !email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }

  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      const {uid} = cred.user;

      auth().currentUser.updateProfile({
        displayName: fullName,
      });

      return uid;
    })

    .catch(err => Alert.alert(err.code, err.message));
};

const signOut = () => {
  return auth().signOut();
};

const signIn = (email, password) => {
  if (!email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }

  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(err => Alert.alert(err.code, err.message));
};

const Auth = {
  signUp,
  signOut,
  signIn,
};
export default Auth;
