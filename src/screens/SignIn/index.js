import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {taxi} from '../../assets/icons';
import {Button, Icon, Input, Text} from '../../common';
import {Colors, Typography} from '../../Styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 40}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Icon name={taxi} iconHeight={100} fill={Colors.YELLOW} />
            <View style={styles.center}>
              <Text TextStyles={[styles.heading, {color: Colors.TEXT_GRAY}]}>
                Taxi{' '}
              </Text>
              <Text TextStyles={[styles.heading, {color: Colors.YELLOW}]}>
                App
              </Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Input placeholder="Email" type="email-address" />
            <Input placeholder="Password" type="default" secure />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              buttonStyles={styles.buttonStyles}
              onPress={() => navigation.navigate('OTPScreen')}>
              Go
            </Button>
            <Button
              buttonStyles={styles.forgotPassword}
              textStyles={styles.forgotText}>
              Forgot Password?
            </Button>
          </View>
          <View style={styles.loginSection}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text TextStyles={styles.orText}> OR </Text>
            </View>
            <View style={styles.icons}>
              <TouchableOpacity activeOpacity={0.7}>
                <IonIcon color="#E84033" name="logo-google" size={25} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <IonIcon name="logo-facebook" color="#139EF8" size={25} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <IonIcon name="call" color={Colors.YELLOW} size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  loginSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  orText: {
    color: Colors.TEXT_GRAY,
  },
  line: {
    backgroundColor: Colors.TEXT_GRAY,
    width: 80,
    height: 2,
    borderRadius: 50,
  },
  main: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: Typography.PADDING_HORIZONTAL,
    marginTop: 60,
  },
  inputContainer: {
    marginTop: 100,
  },
  buttonStyles: {
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  forgotPassword: {
    backgroundColor: 'transparent',
  },
  forgotText: {
    color: Colors.TEXT_GRAY,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 10,
  },
});
