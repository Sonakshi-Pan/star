import * as React from 'react';
import{SytleSheet,View,Button,TouchableOpacity,FlatList,Alert,ListItem, SafeAreaView} from 'react-native';
import axios from "axios";
import {ListItem} from "react-native-elements";
export  default class HomeScreen extends React.Component
{
    constructor(props){
         super(props);
         this.state={
            listdata:[],
            url:"http://127.0.0.1:5000",
         };
        }
componentDidMount(){
    this.getStars()
}
getStars =()=>{
    const {url}=this.state;
    axios
        .get(url)
        .then(response =>{
           return this.setState({
                listData:response.data.gotdata
        });
    })
    .catch(error =>{
        Alert.alert(error.message);
    })
}

renderItem=({item,index})=>(
  <ListItem
    key={index}
    title={`Star:${item.name}`}
    subtile={'distance from earth: ${item.distance_from_earth}'}
    titleStyle={styles.title}
    containerSyle={styles.listContainer}
    bottomDivider
    chevron
    onPress={()=>   
    this.props.navigation.navigate("Details",{star_name:item.name})
    }
   
  />          

)

keyExtractor =(item,index) =>index.toString();

render() 
    {
    const{listData} = this.state;
    if(listData.length==0){
        return(
            <View style={styles.emptyContainer}>
                <Text style={styles.headerText}>loading</Text>  
            </View>
        );
    }
    return(
        <View style={styles.container}>
            <SafeAreaView/>
            <View style={styles.upperContainer}>
                <Text style={styles.headerText}>Stars World</Text>
            </View>
            <View style={styles.lowercontainer}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.listDate}
                    renderItem={this.renderItem}
                />
            </View>
        </View>
    )
 }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#edc988"
    },
    upperContainer:{
        flex:0.1,
        justifyContent:"center",
        alignItems:"center"
    },
    headerText:{
        fontSize:30,
        fontWeight:"bold",
        color:"#132743"
    },
    lowercontainer:{
        flex:0.9
    },
    emptyContainerText:{
        fontSize:20
    },
    emptyContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        color:"#d7385e"
    },
    listContainer:{
        backgroundColor:"#eeecda"
    }
});








