import ReactDOM from "react-dom";
import React from "react"
import style from "./css/main.scss";
import App from "./App";


class BoilingVerdict extends React.Component {

	 constructor(props){
 	 super(props);
 }
	render(){
		 if (this.props.celsius >= 100) {
		    return <p>水会烧开</p>;
		  }
		  return <p>水不会烧开</p>;
	}
 	test(){
 		console.log(11111);
 	};
}


class Calculator extends React.Component {
 
 constructor(props){
 	 super(props);
 	 //this.myRef = React.createRef();
 }
  render() {
   console.log(this.props.children);
   
    return (
      <fieldset>
        <legend>输入一个摄氏温度</legend>
        <BoilingVerdict celsius='100' ref='boil'  />
        	{this.props.children}
      </fieldset>
    );
  }
  componentDidMount(){
  	console.log(this);
  	console.log(this.refs);
  	//setTimeout(() => console.log(this.myRef.test()),0)
  	this.refs.boil.test();
  }
}

ReactDOM.render(
  <Calculator><BoilingVerdict celsius='50'/></Calculator>,
  document.getElementById('root')
);