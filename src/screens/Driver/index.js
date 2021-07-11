import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../Styles';
import {Button, Text} from '../../common';
import MapView, {Marker} from 'react-native-maps';
import IonIcon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const Driver = ({route}) => {
  const latitude = route.params.latitude;
  const longitude = route.params.longitude;
  const [destinationLatitude, setdestinationLatitude] = useState(24.8836648);
  const [destinationLongitude, setdestinationLongitude] = useState(67.0653497);

  const BikersCoordinates = [
    {
      _id: 1,
      latitude: latitude + 0.0001,
      longitude: longitude + 0.0001,
    },
    {
      _id: 2,
      latitude: latitude + 0.0002,
      longitude: longitude + 0.0002,
    },
    {
      _id: 3,
      latitude: latitude + 0.00001,
      longitude: longitude + 0.00004,
    },
    {
      _id: 4,
      latitude: latitude + -0.00001,
      longitude: longitude + -0.0001,
    },
    {
      _id: 5,
      latitude: latitude + -0.0001,
      longitude: longitude + -0.0001,
    },
    {
      _id: 6,
      latitude: latitude + -0.0002,
      longitude: longitude + -0.0002,
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar translucent backgroundColor="transparent" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: BikersCoordinates[0].latitude,
          longitude: BikersCoordinates[0].longitude,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}
        zoomEnabled
        paddingAdjustmentBehavior="always"
        provider="google"
        showsMyLocationButton
        showsCompass
        mapType="standard">
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }}
        />
        {BikersCoordinates.map(item => (
          <Marker
            key={item._id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
              latitudeDelta: 0,
              longitudeDelta: 0,
            }}>
            <FontAwesomeIcon name="biking" size={30} color={Colors.YELLOW} />
          </Marker>
        ))}
        <Marker
          coordinate={{
            latitude: destinationLatitude,
            longitude: destinationLongitude,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }}
        />
      </MapView>
      <View style={styles.mainContainer}>
        <TouchableOpacity activeOpacity={0.6}>
          <IonIcon name="menu" size={40} color={Colors.TEXT_BLACK} />
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={['rgba(220,220,220,0.1)', 'rgba(211,211,211,1)']}
        style={styles.location}>
        <View style={styles.priceContainer}>
          <Text TextStyles={styles.price}>Rs. 86 - 104</Text>
        </View>
        <Button buttonStyles={styles.button}>Go</Button>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Driver;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  button: {
    width: '90%',
    marginBottom: 10,
  },
  location: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  mainContainer: {
    position: 'absolute',
    zIndex: 999,
    width: '100%',
    marginTop: 50,
  },
  input: {
    backgroundColor: 'transparent',
    borderRadius: 0,
  },
  priceContainer: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    width: '90%',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  price: {
    color: Colors.TEXT_GRAY,
  },
});
