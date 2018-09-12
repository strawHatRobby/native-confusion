import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';



export default function Menu(props){
  const renderMenuItem = ({item, index}) => {
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

  return(
    <FlatList
      data={props.dishes}
      renderItem={renderMenuItem}
      keyExtractor={item => item.id.toString()}
    />
  )
}
