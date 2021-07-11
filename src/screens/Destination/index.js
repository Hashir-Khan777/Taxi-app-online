import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../Styles';
import {Button, Input, Text} from '../../common';
import MapView, {Marker} from 'react-native-maps';
import IonIcon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Destination = ({route}) => {
  const navigation = useNavigation();

  const latitude = route.params.latitude;
  const longitude = route.params.longitude;
  const [destinationLatitude, setdestinationLatitude] = useState(24.8836648);
  const [destinationLongitude, setdestinationLongitude] = useState(67.0653497);

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar translucent backgroundColor="transparent" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: destinationLatitude ? destinationLatitude : latitude,
          longitude: destinationLongitude ? destinationLongitude : longitude,
          longitudeDelta: 0,
          latitudeDelta: 0,
        }}
        zoomEnabled
        paddingAdjustmentBehavior="always"
        provider="google"
        showsMyLocationButton
        showsCompass
        mapType="standard">
        <Marker
          coordinate={{
            latitude: destinationLatitude ? destinationLatitude : latitude,
            longitude: destinationLongitude ? destinationLongitude : longitude,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }}
        />
      </MapView>
      <View style={styles.mainContainer}>
        <TouchableOpacity activeOpacity={0.6}>
          <IonIcon name="menu" size={40} color={Colors.TEXT_BLACK} />
        </TouchableOpacity>
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={0.7} style={styles.yourLocation}>
            <IonIcon
              name="locate"
              color={Colors.WHITE}
              style={styles.icon}
              size={20}
            />
            <View style={styles.textContainer}>
              <Text TextStyles={styles.text}>Your Location</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.yourLocation}>
            <IonIcon
              name="location"
              color={Colors.WHITE}
              style={styles.icon}
              size={20}
            />
            <View style={styles.textContainer}>
              <Text TextStyles={styles.text}>Your Destination</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <LinearGradient
        colors={['rgba(220,220,220,0.1)', 'rgba(211,211,211,1)']}
        style={styles.location}>
        <Text TextStyles={styles.heading}>Your Destination?</Text>
        <View style={styles.inputView}>
          <Input placeholder="Your Destination?" inputStyle={styles.input} />
        </View>
        <Button
          buttonStyles={styles.button}
          onPress={() => navigation.navigate('Driver', {latitude, longitude})}>
          Confirm Destination
        </Button>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Destination;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  heading: {
    marginVertical: 5,
    marginHorizontal: 10,
    alignSelf: 'flex-start',
    fontSize: 30,
  },
  inputView: {
    backgroundColor: Colors.WHITE,
    marginVertical: 10,
    width: '90%',
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
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },
  yourLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.TEXT_BLACK,
    width: '65%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  icon: {
    borderRightColor: '#FFF',
    borderRightWidth: 1,
    paddingRight: 10,
  },
  text: {
    color: Colors.WHITE,
    textAlign: 'center',
    alignSelf: 'center',
  },
  textContainer: {
    width: '90%',
  },
  input: {
    backgroundColor: 'transparent',
    borderRadius: 0,
  },
});
