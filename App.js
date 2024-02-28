//StAuth10244: I Alen Varghese Cheruvally Kunjumon, 000837873 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';

import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps'
import { Checkbox } from 'react-native-paper';
import {data} from "./data.js"
import * as Device from 'expo-device';


export default function App() {
  const [isCheckedHamilton, setCheckedHamilton] = useState(false);
  const [isCheckedAncaster, setCheckedAncaster] = useState(false);
  const [isCheckedStoneyCreek, setCheckedStoneyCreek] = useState(false);
  const [isCheckedGlanbrook, setCheckedGlanbrook] = useState(false);
  const [isCheckedDundas, setCheckedDundas] = useState(false);
  const [isCheckedFlamborough, setCheckedFlamborough] = useState(false);
  const [deviceType,setDeviceType] = useState("")
  //mohawk college coordinates
  //lat : 43.238
  //lng: -79.881

  //my location
    //lat : 43.218
  //lng: -79.897
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [markers,setMarkers] = 
        useState([]);
  
 

  const handleFindMePress = () => {
  let addedMarker = markers.slice();
    const newLatitude = parseFloat(latitude);
    const newLongitude = parseFloat(longitude);

    if (!isNaN(newLatitude) && !isNaN(newLongitude)) {
      setLatitude(newLatitude);
      setLongitude(newLongitude);
      addedMarker.push(
        {
                      latlng:{latitude:newLatitude,longitude:newLongitude},
                      description:"Your Coordinate Marker",
                      title:"Your Coordinate Marker",
                      pinColor:"#f54242"
        }
      )
      setMarkers(addedMarker)
    }
  };

function newMarker(){
  let addedMarker = markers.slice();
  addedMarker.push(
    {
                  latlng:{latitude:43.218,longitude:-79.897},
                  description:"Tim Hortons",
                  title:"Tim Hortons"
    }
  )

}

function hamiltonChecked() {
  let allMarkers = markers.slice();

  
  if (isCheckedHamilton) {
    
    allMarkers = allMarkers.filter((marker) => {
      return marker.pinColor !== "#51f542";
    });
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].properties.COMMUNITY === "Hamilton") {
        allMarkers.push({
          latlng: {
            latitude: data[i].geometry.coordinates[1],
            longitude: data[i].geometry.coordinates[0],
          },
          description: data[i].properties.ADDRESS,
          title: data[i].properties.STATION_NAME,
          pinColor: "#51f542",
        });
      }
    }
  }

  setMarkers(allMarkers);
  setCheckedHamilton(!isCheckedHamilton);
}

function ancasterChecked() {
  let allMarkers = markers.slice();

  if (isCheckedAncaster) {
    allMarkers = allMarkers.filter((marker) => {
      return marker.pinColor !== "#f54242";
    });
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].properties.COMMUNITY === "Ancaster") {
        allMarkers.push({
          latlng: {
            latitude: data[i].geometry.coordinates[1],
            longitude: data[i].geometry.coordinates[0],
          },
          description: data[i].properties.ADDRESS,
          title: data[i].properties.STATION_NAME,
          pinColor: "#f54242",
        });
      }
    }
  }

  setMarkers(allMarkers);
  setCheckedAncaster(!isCheckedAncaster);
}

function stoneyCreekChecked() {
  let allMarkers = markers.slice();

  if (isCheckedStoneyCreek) {
    allMarkers = allMarkers.filter((marker) => {
      return marker.pinColor !== "#4630EB";
    });
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].properties.COMMUNITY === "Stoney Creek") {
        allMarkers.push({
          latlng: {
            latitude: data[i].geometry.coordinates[1],
            longitude: data[i].geometry.coordinates[0],
          },
          description: data[i].properties.ADDRESS,
          title: data[i].properties.STATION_NAME,
          pinColor: "#4630EB",
        });
      }
    }
  }

  setMarkers(allMarkers);
  setCheckedStoneyCreek(!isCheckedStoneyCreek);
}

function glanbrookChecked() {
  let allMarkers = markers.slice();

  if (isCheckedGlanbrook) {
    allMarkers = allMarkers.filter((marker) => {
      return marker.pinColor !== "#ddf542";
    });
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].properties.COMMUNITY === "Glanbrook") {
        allMarkers.push({
          latlng: {
            latitude: data[i].geometry.coordinates[1],
            longitude: data[i].geometry.coordinates[0],
          },
          description: data[i].properties.ADDRESS,
          title: data[i].properties.STATION_NAME,
          pinColor: "#ddf542",
        });
      }
    }
  }

  setMarkers(allMarkers);
  setCheckedGlanbrook(!isCheckedGlanbrook);
}

function dundasChecked() {
  let allMarkers = markers.slice();

  if (isCheckedDundas) {
    allMarkers = allMarkers.filter((marker) => {
      return marker.pinColor !== "#f542e9";
    });
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].properties.COMMUNITY === "Dundas") {
        allMarkers.push({
          latlng: {
            latitude: data[i].geometry.coordinates[1],
            longitude: data[i].geometry.coordinates[0],
          },
          description: data[i].properties.ADDRESS,
          title: data[i].properties.STATION_NAME,
          pinColor: "#f542e9",
        });
      }
    }
  }

  setMarkers(allMarkers);
  setCheckedDundas(!isCheckedDundas);
}

function flamboroughChecked() {
  let allMarkers = markers.slice();

  if (isCheckedFlamborough) {
    allMarkers = allMarkers.filter((marker) => {
      return marker.pinColor !== "#42f5f5";
    });
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].properties.COMMUNITY === "Flamborough") {
        allMarkers.push({
          latlng: {
            latitude: data[i].geometry.coordinates[1],
            longitude: data[i].geometry.coordinates[0],
          },
          description: data[i].properties.ADDRESS,
          title: data[i].properties.STATION_NAME,
          pinColor: "#42f5f5",
        });
      }
    }
  }

  setMarkers(allMarkers);
  setCheckedFlamborough(!isCheckedFlamborough);
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>EMS STATION</Text>
        <Button style={styles.devicePower} onPress={()=>{setDeviceType(Device.brand)}} title="DEVICE STATUS"/>
        <Text style={styles.status}>{deviceType}</Text>

      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="ENTER LATITUDE"
          onChangeText={(text) => setLatitude(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="ENTER LONGITUDE"
          onChangeText={(text) => setLongitude(text)}
        />
        <Button
          title="Find me!"
          onPress={handleFindMePress}
        />
      </View>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 43.2387,
          longitude: -79.88,
          latitudeDelta: 0.1922,
          longitudeDelta: 0.1421,
        }}
      >
      {markers.map((marker,index)=>(
        <Marker 
        key={index}
        coordinate={marker.latlng}
        description={marker.description}
        title={marker.title}
        pinColor={marker.pinColor}
         />
      ))}
        
      </MapView>
      <View style={styles.bottomRow}>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxRow}>
            <Checkbox
              style={styles.checkbox}
              status={isCheckedHamilton ? 'checked' : 'unchecked'}
              //onValueChange={setCheckedHamilton(!isCheckedHamilton)}
              onPress={() => {
                setCheckedHamilton(!isCheckedHamilton)
                hamiltonChecked(isCheckedHamilton)

              } }
              color="#51f542"
            />
            <Text style={styles.checkboxLabel}>Hamilton</Text>
          </View>
          <View style={styles.checkboxRow}>
            <Checkbox
              style={styles.checkbox}
              status={isCheckedAncaster ? 'checked' : 'unchecked'}
              onPress={() => {
                setCheckedAncaster(!isCheckedAncaster);
                ancasterChecked(isCheckedAncaster)
                } }
              color="#f54242"
            />
            <Text style={styles.checkboxLabel}>Ancaster</Text>
          </View>
          <View style={styles.checkboxRow}>
            <Checkbox
              style={styles.checkbox}
              status={isCheckedStoneyCreek ? 'checked' : 'unchecked'}
              onPress={() => 
              {
                setCheckedStoneyCreek(!isCheckedStoneyCreek);
                stoneyCreekChecked(isCheckedStoneyCreek)
              }}
              color="#4630EB"
            />
            <Text style={styles.checkboxLabel}>Stoney Creek</Text>
          </View>
        </View>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxRow}>
            <Checkbox
              style={styles.checkbox}
              status={isCheckedGlanbrook ? 'checked' : 'unchecked'}
              onPress={() =>
              {
                setCheckedGlanbrook(!isCheckedGlanbrook)
                glanbrookChecked(isCheckedGlanbrook)

              }
               }
              color="#ddf542"
            />
            <Text style={styles.checkboxLabel}>Glanbrook</Text>
          </View>
          <View style={styles.checkboxRow}>
            <Checkbox
              style={styles.checkbox}
              status={isCheckedDundas ? 'checked' : 'unchecked'}
              onPress={() =>
              {
               setCheckedDundas(!isCheckedDundas)
                dundasChecked(isCheckedDundas)
              }}
              color="#f542e9"
            />
            <Text style={styles.checkboxLabel}>Dundas</Text>
          </View>
          <View style={styles.checkboxRow}>
            <Checkbox
              style={styles.checkbox}
              status={isCheckedFlamborough ? 'checked' : 'unchecked'}
              onPress={() =>
              {
                setCheckedFlamborough(!isCheckedFlamborough)
                flamboroughChecked(isCheckedFlamborough)
              }
               }
              color="#42f5f5"
            />
            <Text style={styles.checkboxLabel}>Flamborough</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  titleContainer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f0f0f0'

  },
 
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  devicePower: {
    fontSize: 14,
    marginLeft: 8,
    color: 'gray', 
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.1,
    padding: 10,
    backgroundColor: '#f0f0f0'

  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
  bottomRow: {
    height: Dimensions.get('window').height * 0.2,
    justifyContent: 'space-evenly',
     backgroundColor: '#f0f0f0'


  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
  },
});
