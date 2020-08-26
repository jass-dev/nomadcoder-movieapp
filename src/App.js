import React from 'react';
import Potato from "./Potato";
import propTypes from "prop-types";

function Food2(props) {
  return <div>
      <h1> FOOD2 : I like {props.name} again</h1>
      <h1>  {props.desc} </h1>
    </div>
}

function Food({name, desc}) {
  return <div>
      <h1> FOOD1 : I like {name} again</h1>
      <h1>  {desc} </h1>
    </div>
}

function renderFood (dish){
  return <Food key={dish.id} name={dish.name} desc={dish.desc}></Food>
}

Food.propTypes={
  name : propTypes.string.isRequired,
  desc : propTypes.string.isRequired,
  rating : propTypes.number.isRequired
};

const foodILike = [{id:"1", name : "kimchi", desc : "it is kimchi", rating:4}, {id:"2",name : "smagiopsal", desc : "it is pork",rating:3}, {id:"3",name : "pidzza", desc : "it is pizza",rating:2}]

function App() {
  return (
    <div className="App">
      Hello
      <Potato/>
      <Food key="0" name="kimch"/>
      <Food2 key="0" name="samkyeopsal"/>
      <Food2 key="5" name="pizza"/>
      {foodILike.map(dish => <Food2 key={dish.id} name={dish.name + "!"} desc = {dish.desc}/>)}
      {foodILike.map(dish => <Food key={dish.id} name={dish.name + "!"} desc = {dish.desc}/>)}

      {foodILike.map(renderFood)}
    </div>
    
  );
}

export default App;
