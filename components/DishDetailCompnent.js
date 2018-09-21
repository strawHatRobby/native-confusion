import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Card } from 'react-native-elements';

function RenderDish(props){
  const dish = props.dish;
  

  if(dish != null){
    const imageSrc =  dish.image ? dish.image.toString() : "."
    return(
      <Card
        featuredTitle={dish.name}
        image={require(imageSrc)}
      >
      <Text style={{margin: 10}}>
        {dish.description}
        </Text>
      </Card>
    );
  }
  else{
    return(
      <View></View>
    )
  };
};

export default function DishDetail(props){
  return(
    <RenderDish dish={props.dish}/>
  );
};
