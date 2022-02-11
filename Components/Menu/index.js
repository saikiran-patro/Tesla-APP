import React from 'react';
import {View,Text,StyleSheet,ImageBackground,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
const Menu=()=>{

    return (

        <View>
           <TouchableOpacity>
                <View style={styles.funRow}>
                    
                    <Icon style={styles.funLeftIcon} name="music" size={24} color="white" />
                    <Text style={styles.funText}>  Media</Text>
                    <Icon style={styles.funRightIcon} name="chevron-right" size={24} color="#4D4D4E" />

                </View>
           </TouchableOpacity>
           <TouchableOpacity>
                <View style={styles.funRow}>
                    
                    <Icon style={styles.funLeftIcon} name="clock" size={24} color="white" />
                    <View style={{flexGrow:1}}>
                        <Text style={styles.funText}>  Software updates</Text>
                        <Text style={{marginLeft:18,color:"#4D4D4E"}}>Approximate time to install: 50 min</Text>
                    </View>
                    
                    <Icon style={styles.funRightIcon} name="chevron-right" size={24} color="#4D4D4E" />

                </View>
           </TouchableOpacity>
           <TouchableOpacity>
                <View style={styles.funRow}>
                    
                    <Icon style={{marginLeft:25,marginRight:10}} name="thermometer-half" size={26} color="white" />
                    <View style={{flexGrow:1,flexDirection:"column"}}>
                        <Text style={styles.funText}>  Climate</Text>
                        <Text style={{marginLeft:18,color:"#4D4D4E"}}>20 F</Text>
                    </View>
                    <Icon style={styles.funRightIcon} name="chevron-right" size={24} color="#4D4D4E" />

                </View>
           </TouchableOpacity>
           <TouchableOpacity>
           <View style={styles.funRow}>
               
               <Icon style={styles.funLeftIcon} name="car" size={24} color="white" />
               <Text style={styles.funText}>  Controls</Text>
               <Icon style={styles.funRightIcon} name="chevron-right" size={24} color="#4D4D4E" />

           </View>
           </TouchableOpacity>
           <TouchableOpacity>
                <View style={styles.funRow}>
                    
                    <Icon style={styles.funLeftIcon} name="bolt" size={24} color="white" />
                    <Text style={styles.funText}>  charging</Text>
                    <Icon style={styles.funRightIcon} name="chevron-right" size={24} color="#4D4D4E" />

                </View>
           </TouchableOpacity>
          
           <TouchableOpacity>
                <View style={styles.funRow}>
                    
                    <Icon style={styles.funLeftIcon} name="map-marker-alt" size={24} color="white" />
                    <Text style={styles.funText}>  Location</Text>
                    <Icon style={styles.funRightIcon} name="chevron-right" size={24} color="#4D4D4E" />

                </View>
           </TouchableOpacity>
           <TouchableOpacity>
                <View style={styles.funRow}>
                    
                    <Icon style={styles.funLeftIcon} name="shopping-bag" size={24} color="white" />
                    <Text style={styles.funText}>  upgrades</Text>
                    <Icon style={styles.funRightIcon} name="chevron-right" size={24} color="#4D4D4E" />

                </View>
           </TouchableOpacity>
           <TouchableOpacity>
                <View style={styles.funRow}>
                    
                    <Icon style={styles.funLeftIcon} name="key" size={24} color="white" />
                    <View style={{flexGrow:1,flexDirection:"column"}}>
                        <Text style={styles.funText}>  Phone key</Text>
                        <Text style={{marginLeft:18,color:"#4D4D4E"}}>Disconnected</Text>
                    </View>
                    <Icon style={styles.funRightIcon} name="chevron-right" size={24} color="#4D4D4E" />

                </View>
           </TouchableOpacity>
           <TouchableOpacity>
                <View style={styles.funRow}>
                    
                    <Icon style={styles.funLeftIcon} name="wrench" size={24} color="white" />
                    <Text style={styles.funText}>  services</Text>
                    <Icon style={styles.funRightIcon} name="chevron-right" size={24} color="#4D4D4E" />

                </View>
           </TouchableOpacity>
           <TouchableOpacity>
                <View style={styles.funRow}>
                    
                    <Icon style={styles.funLeftIcon} name="exclamation-triangle" size={24} color="white" />
                    <Text style={styles.funText}>  Road assistance</Text>
                    <Icon style={styles.funRightIcon} name="chevron-right" size={24} color="#4D4D4E" />

                </View>
           </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({

    funRow: {
        marginLeft:10,
        marginRight:10,
        marginTop:30,
        flexDirection:"row",
        alignItems:"center",



    },
    funText: {
        marginLeft:10,
        flexGrow:1,
        color: "white",
        fontSize:20,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    funRightIcon:{
        marginRight:20,
        marginLeft:20,
    },
    funLeftIcon:{
        marginLeft:20,
        marginRight:5
    }
})
export default Menu;