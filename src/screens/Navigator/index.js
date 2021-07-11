import React from 'react';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import * as Screens from '..';

const Stack = createStackNavigator();

const MyTransition = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

const StackNavigation = () => (
  <Stack.Navigator initialRouteName="Splash" headerMode="none">
    <Stack.Screen
      name="Slash"
      component={Screens.Splash}
      options={MyTransition}
    />
    <Stack.Screen name="Home" component={Screens.Home} options={MyTransition} />
    <Stack.Screen
      name="SignIn"
      component={Screens.SignIn}
      options={MyTransition}
    />
    <Stack.Screen
      name="OTPScreen"
      component={Screens.OTPScreen}
      options={MyTransition}
    />
    <Stack.Screen
      name="Destination"
      component={Screens.Destination}
      options={MyTransition}
    />
    <Stack.Screen
      name="Driver"
      component={Screens.Driver}
      options={MyTransition}
    />
  </Stack.Navigator>
);

export {StackNavigation};
