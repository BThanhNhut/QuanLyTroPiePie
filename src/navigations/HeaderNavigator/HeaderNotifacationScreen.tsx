import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../assets/Colors';
import Icon5 from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

function HeaderNotifacationScreen({navigation}: any) {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity activeOpacity={0.8}>
          <Icon5
            name="back"
            size={22}
            color={Colors.white}
            onPress={goBack}></Icon5>
        </TouchableOpacity>
        <Text style={styles.title}>Thông báo</Text>
        <View></View>
      </View>
    </View>
  );
}
export default HeaderNotifacationScreen;

const styles = StyleSheet.create({
  container: {
    height: height * 0.1,
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  row: {
    marginTop: 17,
    width: width,
    height: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: Colors.white,
    // marginRight: width * 0.64,
    // marginLeft: 10,
  },
});
