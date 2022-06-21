import React,{useContext} from 'react'
import {View,Text,StyleSheet,FlatList,Button, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {AntDesign} from '@expo/vector-icons'
import {BlogContext}  from '../context/BlogContext'

const ShowScreen = ({route, navigation})=>{
    const {id}  =  route.params;
    const{state,dispatch} = useContext(BlogContext)
    const BlogPost  = state.find((post)=>{
        return post.id === id
    })
    return(
        <View style={{
            flexDirection:"column",
            justifyContent:"space-between",
            marginHorizontal:10,
            marginBottom:5,
            backgroundColor:"white",
            padding:10,
            elevation:4,
            alignItems: "center",
            justifyContent: "center"
            }}>
                
                <TouchableOpacity
                   onPress={()=>navigation.navigate("edit", {id})}
                   >
                        <View>
                        
                        <Feather name="edit" size={24} 

                        />
                        </View>    
                   </TouchableOpacity>

            <Text>{BlogPost.title}</Text>
            <Text>{BlogPost.content}</Text>
        </View>
    )
}


export default ShowScreen