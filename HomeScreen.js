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
            <View>
                <Text>loading</Text>  
            </View>
        );
    }
    return(
        <View>
            <SafeAreaView/>
            <View style={styles.upperContainer}>
                <Text>PlanetsWorld</Text>
            </View>
            <View>
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








