import React, {useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Colors, Typography} from '../../Styles';
import {Button, Input, Text} from '../../common';
import MapView, {Marker} from 'react-native-maps';
import IonIcon from 'react-native-vector-icons/Ionicons';
import GetLocation from 'react-native-get-location';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const [latitude, setlatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);
  const [timingModal, setTimingModal] = useState(false);
  const [timingIndex, setTimingIndex] = useState(0);
  const [loading, setloading] = useState(false);

  const timings = [
    {
      _id: 1,
      time: 'now',
    },
    {
      _id: 2,
      time: '8 hours',
    },
    {
      _id: 4,
      time: '4 hours',
    },
    {
      _id: 5,
      time: '30 mins',
    },
    {
      _id: 6,
      time: '1 hour',
    },
  ];

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setlatitude(location.latitude);
        setlongitude(location.longitude);
      })
      .catch(error => {
        const {code, message} = error;
        code === 'UNAVAILABLE'
          ? Alert.alert(code, message, [
              {
                text: 'Cancel',
              },
              {text: 'OK'},
            ])
          : null;
      });
  }, [GetLocation.getCurrentPosition]);

  useEffect(() => {
    if (latitude === null && longitude === null) {
      setloading(true);
    } else {
      setloading(false);
    }
  }, [latitude, longitude]);

  const SelectTimingModal = () => (
    <Modal visible={timingModal} transparent animationType="fade">
      <View style={styles.modalView}>
        <View style={styles.modalContainer}>
          <Text TextStyles={styles.modalHeading}>Select Timing</Text>
          <FlatList
            data={timings}
            showsVerticalScrollIndicator
            keyExtractor={item => item._id}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => setTimingIndex(index)}
                activeOpacity={0.6}
                style={
                  timingIndex === index
                    ? styles.activeButton
                    : styles.inActiveButton
                }>
                <Text
                  TextStyles={
                    timingIndex === index
                      ? styles.activeText
                      : styles.inActiveText
                  }>
                  {item.time}
                </Text>
              </TouchableOpacity>
            )}
            ListFooterComponent={
              <Button
                onPress={() => {
                  setTimingModal(false);
                  navigation.navigate('Destination', {latitude, longitude});
                }}
                buttonStyles={styles.modalButton}
                textStyles={styles.modalText}>
                Set Destination
              </Button>
            }
          />
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar translucent backgroundColor="transparent" />
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={Colors.YELLOW} size="large" />
        </View>
      ) : (
        <View style={styles.map}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
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
                latitude: latitude,
                longitude: longitude,
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
            <Text TextStyles={styles.heading}>Your Location?</Text>
            <View style={styles.inputView}>
              <Input placeholder="Your location?" inputStyle={styles.input} />
            </View>
            <Button
              onPress={() => setTimingModal(true)}
              buttonStyles={styles.button}>
              Confirm location
            </Button>
          </LinearGradient>
        </View>
      )}
      <SelectTimingModal />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  modalText: {
    fontSize: 13,
  },
  modalButton: {
    marginTop: 10,
  },
  inActiveText: {
    fontSize: 13,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  activeText: {
    fontSize: 13,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.WHITE,
  },
  inActiveButton: {
    marginVertical: 0,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  activeButton: {
    marginVertical: 0,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: Colors.YELLOW,
    borderRadius: 5,
  },
  modalContainer: {
    width: '80%',
    height: '47%',
    borderRadius: 10,
    zIndex: 999999,
    backgroundColor: '#FFF',
    padding: 10,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  modalHeading: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
  },
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
