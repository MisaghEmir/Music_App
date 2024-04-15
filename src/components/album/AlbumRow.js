import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'


const AlbumRow = ({item, type}) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ color: "#fff", fontSize: 15, fontWeight: "700" }}>
            {item.name} ({item.singer})
          </Text>
          <View style={{ flexDirection: "row", gap: 4, marginTop: 5 }}>
           
            <Text style={{ color: "#bababa", fontSize: 12,alignItems: "center", flexDirection: "row" }}>
             2023 {type ? <Entypo name="dot-single" size={11} color="#fff" /> : ""} {type} 
            </Text>
          </View>
        </View>
      </View>
      <View>
      </View>
    </View>
  );
};

export default AlbumRow;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        marginTop: 15
    },
    image: {
        width: 80,
        height: 77,
        borderWidth: 1,
        borderRadius: 1,
        objectFit: "cover",
        borderColor: "rgba(255,255,255,0.1)",
    }
});
