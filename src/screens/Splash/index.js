import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors} from '../../Styles';
import {CommonActions} from '@react-navigation/routers';
import {useNavigation} from '@react-navigation/native';
import {Icon, Text} from '../../common';
import {taxi} from '../../assets/icons';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(
      () =>
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'SignIn'}],
          }),
        ),
      2000,
    );
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Icon name={taxi} iconHeight={100} fill={Colors.YELLOW} />
        <View style={styles.container}>
          <Text TextStyles={styles.taxi}>Taxi</Text>
          <Text TextStyles={styles.textStyles}> App</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: Colors.WHITE,
  },
  textStyles: {
    color: Colors.YELLOW,
    fontSize: 30,
  },
  taxi: {
    color: Colors.TEXT_GRAY,
    fontSize: 30,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
