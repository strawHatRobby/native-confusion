import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared.dishes';



export default class Menu extends Component{
  constructor(props){
  super(props);
  this.state = {
    dishes: DISHES,
   }
  }
  renderMenuItem = ({item, index}) => {
    console.log(item);
    return(
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          onPress={() => props.onPress(item.id)}
          avatar={require('../shared/images/vadonut.png') }
          roundAvatar
          />

    );
  };
  render(){
  return(
    <FlatList
      data={props.dishes}
      renderItem={renderMenuItem}
      keyExtractor={item => item.id.toString()}
    />
  )
  }
}
