import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'; 
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../screens/Posts'


export default class Home extends React.Component{
    state={
        popularSelected:true
    }
    onTabPressed=()=>{
        this.setState({popularSelected:!this.state.popularSelected})
    }
    render(){
        return(
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                height:"100%",
                backgroundColor:"#cc4e5c"
            }}
          >
              <View style={{
                  height:260,
                  width:"100%",
                  paddingHorizontal:35
              }}>
                  <View style={{
                      flexDirection:"row",
                      width:"100%",
                      paddingTop:40,
                      alignItems:"center"
                  }}>
                      <View style={{
                          width:"50%"
                      }}>
                          <MaterialIcons name = "food-bank"
                            size={22}
                            color="#d2d2d2"
                            style={{
                                marginRight:-7,
                                marginTop:7
                            }}/>
                      </View>
                      <View style={{
                          width:"50%",
                          alignItems:"flex-end",
                      }}>
                          <Icon name = "dots-two-vertical"
                            size={22}
                            color="#d2d2d2"
                            style={{
                                marginRight:-7,
                                marginTop:7
                            }}/>
                      </View>
                  </View>


                <Text style={{
                    fontFamily:"Bold",
                    fontSize:25,
                    color:"#FFF",
                    paddingVertical:25,
                    textAlign:'center'
                }}>Community of food bloggers</Text>

                <View style={{
                    flexDirection:"row",
                    borderColor:"#9ca1a2",
                    borderRadius:20,
                    borderWidth:0.2,
                    paddingVertical:5,
                    alignItems:"center"
                }}>
                    <TextInput
                        placeholder="search ..."
                        style={{
                            paddingHorizontal:20,
                            fontFamily:"Medium",
                            fontSize:15,
                            width:"90%",
                            color:"#9ca1a2"
                        }}
                    />
                    <Icon name="magnifying-glass"
                          size={17}
                          color="#9ca1a2"/>
                </View>

              </View>

              <View style={{
                  backgroundColor:"#FFF",
                  borderTopLeftRadius:40,
                  borderTopRightRadius:40,
                  height:1000,
                  paddingHorizontal:35
              }}>
                  <View style={{
                      flexDirection:"row",
                      paddingTop:20
                  }}>
                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#8f1439":"#FFF",
                            borderBottomWidth:4,
                            paddingVertical:6
                        }}
                      >
                          <Text style={{
                              fontFamily:"Bold",
                              color:this.state.popularSelected ? "#8f1439":"#9ca1a2"
                          }}>POPULAR</Text>
                      </TouchableOpacity>


                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#FFF":"#8f1439",
                            borderBottomWidth:4,
                            paddingVertical:6,
                            marginLeft:30
                        }}
                      >
                          <Text style={{
                              fontFamily:"Bold",
                              color:this.state.popularSelected ? "#9ca1a2":"#8f1439"
                          }}>RECENT</Text>
                      </TouchableOpacity>
                  </View>

                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Emma Song"
                        profile={require('../images/es.jpg')}
                        photo={require('../images/pizza.jpg')}
                      />

                  </View>

                  <View style={{
                      flexDirection:"row"
                  }}>

                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Ron Staily"
                        profile={require('../images/rs.jpg')}
                        photo={require('../images/pasta.jpeg')}
                      />

                  </View>

                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Emma Song"
                        profile={require('../images/es.jpg')}
                        photo={require('../images/taco.jpg')}
                      />

                  </View>
              </View>

          </ScrollView>
        )
    }
}