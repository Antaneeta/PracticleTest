import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


import * as colors from '../../../themes/Colors'
import * as images from '../../../assets/images/index'


const ExpertCard = ({ item }) => {
  const navigation = useNavigation();
  const onClickCard = () => {

  }

  return (
    <TouchableOpacity style={styles.cardContainer}>
        <View>
          <View style={styles.expertImage}>
            <Image source={{uri: item?.profilePic }} defaultSource={images.NoImage}/>
          </View>
          <Text style={styles.cardText}>{item?.name}</Text>
          <Text style={styles.cardText}> ⏹️ {item.country}</Text>
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

const ItemView = ({ item, index }) => <ExpertCard item={item} />;

const Expert = () => {
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState([])


  const getData = () => {
    axios.get(`https://stage-api.serw.io/v1/experts`)
      .then((response) => {
        setCardData(response.data.experts)
        console.log(response.data.experts);
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
            keyExtractor={item => item?.profileId}
            renderItem={ItemView}
            ItemSeparatorComponent={ItemSeparatorView}
            enableEmptySections={true}
            showsVerticalScrollIndicator={true}
            scrollEnabled={true}
            numColumns={2}
          // ListEmptyComponent={NoResultFount}
          />
        </View>

      )}
    </View>
  )
}

export default Expert

const styles = StyleSheet.create({
  cardText:{
    color:colors.BorderColor,
    fontSize:14,
  },
  expertImage:{
    borderRadius:50, 
    width:100,
    height:100, 
    borderWidth:2, 
    borderColor:colors.Gray,
    marginHorizontal:25
  },
  cardContainer: {
    borderRadius: 10,
    borderColor: colors.Gray,
    borderWidth: 1,
    width: '40%',
    height: 180,
    marginVertical: 15,
    marginHorizontal: 17,
    backgroundColor: colors.Black,
    justifyContent:'center',
    alignItems:'center'
  }
})