import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Colors, Typography} from '../../Styles';
import {Button, Icon, Text} from '../../common';
import {taxi} from '../../assets/icons';
import CodeInput from 'react-native-confirmation-code-input';
import {useNavigation} from '@react-navigation/native';

const OTPScreen = () => {
  const navigation = useNavigation();

  const [OTP, setOTP] = useState();

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
          <View style={styles.OTPContainer}>
            <Text>Enter OTP</Text>
            <CodeInput
              className="border-circle"
              autoFocus
              value={OTP}
              style={styles.OTPInput}
              inputPosition="center"
              placeholderTextColor={Colors.BG_LIGHT_GRAY}
              onFulfill={e => setOTP(e)}
            />
            <Button
              buttonStyles={styles.forgotPassword}
              textStyles={styles.forgotText}>
              Resend OTP
            </Button>
            <Button
              buttonStyles={styles.buttonStyles}
              onPress={() => navigation.navigate('Home')}>
              Go
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  forgotPassword: {
    backgroundColor: 'transparent',
  },
  forgotText: {
    color: Colors.TEXT_GRAY,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: Typography.PADDING_HORIZONTAL,
    marginTop: 60,
  },
  heading: {
    fontSize: 30,
  },
  buttonStyles: {
    width: '75%',
    marginTop: 30,
  },
  main: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  OTPContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130,
  },
  OTPInput: {
    borderWidth: 1,
    textAlign: 'center',
    marginHorizontal: 6,
    paddingHorizontal: 8,
    borderColor: Colors.TEXT_GRAY,
    borderRadius: 10,
  },
});
