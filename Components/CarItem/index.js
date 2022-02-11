import React,{useState} from "react";
import {View,Text,StyleSheet,ImageBackground,TouchableOpacity,ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Menu from "../Menu/index";

const carItem=()=>{
     const [Lock,setLock]=useState(1);

     const clickLock=()=>{
         setLock(!Lock);
     }
    return (
        <View style={styles.carContainer}  >
             <ImageBackground source={require("../TeslaCloneAssets/assets/background.png")} style={styles.backgroundImg} />
             
            <View style={styles.carHeader}>
                <TouchableOpacity>
                <Icon name="cog" size={30} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}> Sk Tesla </Text>
                <TouchableOpacity>
                <Icon name="toolbox" size={30} color="white" />
                </TouchableOpacity>
           </View>

           
           <View style={styles.batterySection}>
                <ImageBackground source={require("../TeslaCloneAssets/assets/battery.png")} style={styles.battery} />
                <Text style={styles.batteryInfo}> 140 KM </Text>
           </View>  
           <View style={styles.status}>
                <Text style={styles.statusText}> Parked</Text>
           
           </View>
           <ScrollView>
           <View  style={styles.controls}>
                 <TouchableOpacity>
                 <View style={styles.controlOption}>
                        
                        <Icon name="fan" size={25} color="white" />
                        
                 </View>
                 </TouchableOpacity>
                 <TouchableOpacity>
                 <View style={styles.controlOption}>
                        
                        <Icon name="key" size={25} color="white" />
                        
                 
                 </View>
                 </TouchableOpacity>
                 {Lock?(
                    <TouchableOpacity onPress={clickLock}>
                    <View style={styles.controlOption}>
                           
                           <Icon name="lock" size={25} color="white" />
                         
                    </View>
                    </TouchableOpacity>
                 ):(
                    <TouchableOpacity onPress={clickLock}>
                    <View style={styles.controlOption}>
                           
                           <Icon name="unlock-alt" size={25} color="white" />
                         
                    </View>
                    </TouchableOpacity>

                 )}
                 
            </View>
            <Menu/>
            </ScrollView>
           
        </View>

    )
    
}
const styles=StyleSheet.create({
     
    carContainer:{
        width:"100%",
        height:"100%",
        backgroundColor:"#343A40"
    },
     carHeader:{
         marginTop:25,
         marginLeft:20,
         marginRight:20,
         display:"flex",
         flexDirection:"row",
         justifyContent:"space-between",
         alignItems:"center"
         
     },
     headerTitle:{
         fontSize:15,
         fontWeight:"bold",
         textAlign:"center"
     },
     backgroundImg:{
         width:"100%",
         height:"100%",
         resizeMode:"cover",
         position:"absolute",
       
     },

     batterySection:{
         marginTop:20,
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
         flexDirection:"row"

     },
     battery:{
      
         width:70,
         height:26,
         marginRight:10
         
     },
     batteryInfo:{
         color:"white",
         fontSize:25,
         fontWeight:"bold",
          
     },
     status:{
         marginTop:10,
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
         flexDirection:"row"

     },
     statusText:{
         color:"#9FE6A0",
         fontSize:18,
         fontWeight:"bold",
     },
     controls:{
         marginTop:175,
         display:"flex",
         flexDirection:"row",
         justifyContent:"space-evenly",
         alignItems:"center",
     },
     controlOption:{
         borderWidth:1,
         borderColor:"white",
         borderStyle:"solid",
         borderRadius:50,
         padding:15

     }
     

})
export default carItem;