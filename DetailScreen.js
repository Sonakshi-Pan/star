import * as React from 'react';
import{SytleSheet,View,Button,TouchableOpacity,FlatList,Alert,ListItem, SafeAreaView} from 'react-native';
import axios from "axios";
import {ListItem} from "react-native-elements";
export  default class DetailScreen extends React.Component
{
    constructor(props){
         super(props);
         this.state={
            details:{},
            imagePath:"",
            url:"http://127.0.0.1:5000"
         };
          }  
    componentDidMount(){
            this.getDetails();
        }
    getDetails =()=>{
      const {url}=this.state;
        axios
            .get(url)
            .then(response =>{
                this.setDetails(response.data.data);
            })
            .catch(error =>{
                Alert.alert(error.message);
            });
        } 
    setDetails=starDetails=>{
        
        
        this.setState({
            details:starDetails,
            imagePath:imagePath
        })
        render() 
        {
        const{details,imagePath} = this.state;
        if(details.specification){
            return(
                <View style={StyleSheet.container}>
                    <Card
                        title={details.name}
                        image={imagePath}
                        imageProps={{resizeMode:"contain",width:"100%"}}  
                        >
                     <View>
                        
                        <Text style={styles.cardItem}>
                            {`Distance from us :${details.distance}`}
                        </Text>
                        <Text style={styles.cardItem}>
                            {`gravity :${details.gravity}`}
                        </Text>
                        
                        
                        <Text style={styles.cardItem}>
                            {`star mass:${details.mass}`}
                        </Text>
                        <Text style={styles.cardItem}>
                            {`star radius':${details.radius}`}
                        </Text>
                       
                     </View>
                     <View style={[styles.cardItem,{flexDirection:"column"}]}>
                        <Text>
                            {details.specification?`Specification:`:" "}
                        </Text>
                        {details.specification.map((item,index)=>(
                            <Text
                            key={index.toString()} style={{marginLeft:50}}
                            >
                                {item}
                            </Text>
                        ))}
                     </View>
                    </Card>  
                </View>
            );
        }
        return null
    }
    }  
   
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    cardItem:{
        marginBottom:10
    },
  });
