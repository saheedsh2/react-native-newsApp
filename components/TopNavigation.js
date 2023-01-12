import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import {MaterialCommunityIcons, SimpleLineIcons, AntDesign} from "@expo/vector-icons"
import { NewsContext } from '../API/context'



const TopNavigation = ({index, setIndex}) => {

    const {fetchNews, darkTheme, setDarkTheme} = useContext(NewsContext);


  return (
    <View style={{...styles.container, backgroundColor: darkTheme ? "#282c35" : "white"}}>
      {index === 0 ? 
      (<TouchableOpacity style={styles.left}
        onPress={() => setDarkTheme(!darkTheme)}
      >
        <Text style={{...styles.text, color: darkTheme ? "lightgrey" : "black"}}>
            <MaterialCommunityIcons
            name='theme-light-dark'
            size={24}
            color="#007EFF"
             />
        </Text>

      </TouchableOpacity>
      ) : (
      <TouchableOpacity style={styles.left} onPress={() => setIndex(index === 0 ? 1 : 0)}>
        <SimpleLineIcons name="arrow-left" size={25} color="#007FFF" />
        <Text style={{...styles.text, color: darkTheme ? "lightgrey" : "black"}}>Discover</Text>
        </TouchableOpacity>
        )} 
        <Text style={{...styles.center, color: darkTheme ? "white" : "black"}}>
            {index ? "All News" : "Discover"}
        </Text>
        {
            index ? (
                <TouchableOpacity style ={styles.right}
                onPress={() => fetchNews("general")}
                >

                    <Text style={styles.text}>
                        <AntDesign name="reload1" size={24} color="#007FFF"/>

                    </Text>

                </TouchableOpacity>
                
            ) : (
                <TouchableOpacity style={styles.left} onPress={() => setIndex(index === 0 ? 1 : 0)}>
                    <Text style={{...styles.text, color: darkTheme ? "lightgrey" : "black"}}>All News</Text>
                </TouchableOpacity>
            )
        }
    </View>
  );
}

export default TopNavigation

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
    },
    left:{
        flexDirection: "row",
        alignItems: "center",
        width: 80,
        justifyContent: "space-between"
    },
    text:{
        fontSize: 16,
    },
    right:{
        width:80,
        alignItems: "flex-end"
    },
    center:{
        paddingBottom: 6,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "700",

    }



})