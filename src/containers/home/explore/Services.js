import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


import * as colors from '../../../themes/Colors'
import * as images from '../../../assets/images'


const ServicesCard = ({ item }) => {
  const navigation = useNavigation();
  const online = item?.expert?.online

  const [clickFavorite, setClickFavorite] = useState(true)
  const onClickCard = () => {

  }

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View>
        <View>
          <Image source={{ uri: item?.image }} style={styles.serviceImage} defaultSource={images.NoImage}/>
        </View>
        {online ? (
          <View style={styles.statusContainer}>
            <Text style={{ color: '#091', fontWeight: '700' }}>🟢 Online</Text>
          </View>
        ) : (<></>)}
        <TouchableOpacity style={styles.favoriteIcon} onPress={() => { setClickFavorite(!clickFavorite) }}>
          {clickFavorite ? (
            <FontAwesome name='heart-o' size={28} color={'#f00'} />
          ) :
            (<FontAwesome name='heart' size={28} color={'#f00'} />)
          }
        </TouchableOpacity>
        <LinearGradient colors={[colors.BorderColor, `rgba(000,000,000, 1)`]} style={{ height: 50 }}>
          <View style={{marginTop:20}}>
            <Text style={styles.cardText}>⭐⭐⭐⭐⭐{item?.rating} ({item?.ratingCounts} Reviews)</Text>
          </View>
        </LinearGradient>
        <View style={{marginHorizontal:20}}>
          <Text style={styles.primartTitleText}>{item?.serviceName}</Text>
          <Text>{item?.currency}{' '}{item?.price}</Text>
          <Text>Duration: {item?.expert?.yearsOfExperience} .hrs</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

const ItemSeparatorView = () => {
  return (
    <View
      style={{
        marginTop: 14,
        width: '100%',
      }}
    />
  );
};

const ItemView = ({ item, index }) => <ServicesCard item={item} />;

const Services = () => {
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState([])


  const getData = () => {
    axios.get(`https://stage-api.serw.io/v1/services`)
      .then((response) => {
        setCardData(response.data.services)
        console.log(response.data.services);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginBottom: 130,
          }}>
          <ActivityIndicator size={40} color={colors.PrimaryColor} />
        </View>
      ) : (
        <View style={{ alignItems: 'center' }}>
          <FlatList
            contentContainerStyle={{ paddingBottom: 130, flexGrow: 1 }}
            data={cardData}
            keyExtractor={item => item.id}
            renderItem={ItemView}
            ItemSeparatorComponent={ItemSeparatorView}
            enableEmptySections={true}
            showsVerticalScrollIndicator={true}
            scrollEnabled={true}
          // ListEmptyComponent={NoResultFount}
          />
        </View>

      )}
    </View>
  )
}

export default Services

const styles = StyleSheet.create({
  cardText: {
    color: colors.BorderColor,
    fontSize: 14,
  },
  serviceImage: {
    width: 250,
    height: 180,
  },
  cardContainer: {
    borderRadius: 10,
    borderColor: colors.BorderColor,
    borderWidth: 1,
    marginVertical: 15,
    marginHorizontal: 17,
    backgroundColor: colors.BorderColor,
    alignItems: 'center',
    marginHorizontal: 25,
    height: 300
  },
  statusContainer: {
    position: 'absolute',
    backgroundColor: colors.BorderColor,
    borderColor: colors.BorderColor,
    borderWidth: 1,
    borderRadius: 20,
    width: 80,
    height: 25,
    marginVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 5
  },
  favoriteIcon: {
    position: 'absolute',
    marginLeft: 180,
    borderRadius: 24,
    height: 47,
    width: 47,
    borderWidth: 2,
    borderColor: colors.BorderColor,
    backgroundColor: colors.BorderColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  primartTitleText:{
    color:colors.Black,
    fontWeight:'700',
    fontSize:18
  }
})