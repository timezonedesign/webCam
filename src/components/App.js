import React from 'react';
import Webcamera from "./webcamera"
import Products from "./products"


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={x11:0,y11:0,x22:0,y22:0,x33:0,y33:0,x44:0,y44:0}
    this.getChildheights=this.getChildheights.bind(this)
  }
 
 getChildheights=function(data){
  var doc=document.getElementById("child").getBoundingClientRect();
  this.setState({x11:doc.left})
  this.setState({y11:data.prod1.bottom-40})

  this.setState({x22:doc.left})
  this.setState({y22:data.prod2.bottom-40})

  this.setState({x33:doc.left})
  this.setState({y33:data.prod3.bottom-40})

  this.setState({x44:doc.left})
  this.setState({y44:data.prod4.bottom-40})
 }
render(){

  if(window.screen.width<=576) return (  // for mibile devices
    <div id="main">
    <svg id="canvas">
  <line x1={this.state.x11+10} y1={this.state.y11} x2={this.state.x11-60} y2={this.state.y11}  style={{stroke:"rgb(255,0,0)","stroke-width":"2"}} />
  <line x1={this.state.x22+10} y1={this.state.y22} x2={this.state.x22-60} y2={this.state.y22}  style={{stroke:"rgb(255,0,0)","stroke-width":"2"}} />
  <line x1={this.state.x33+10} y1={this.state.y33} x2={this.state.x33-60} y2={this.state.y33}  style={{stroke:"rgb(255,0,0)","stroke-width":"2"}} />
  <line x1={this.state.x44+10} y1={this.state.y44} x2={this.state.x44-60} y2={this.state.y44}  style={{stroke:"rgb(255,0,0)","stroke-width":"2"}} />
</svg>
      <div  className="navbar">
       

      </div>
      <div className="container-fluid " >

        <div className="camera-div">
          
            <Webcamera /> 
        </div>
        <div className="product-div-sm" id="child">
         <Products callback={this.getChildheights}></Products>
            
        </div>
      </div>

    </div>
  );
  
  else return (
    <div id="main">
    <svg id="canvas">
  <line x1={this.state.x11+5} y1={this.state.y11} x2={this.state.x11-100} y2={this.state.y11}  style={{stroke:"rgb(255,0,0)","stroke-width":"2"}} />
  <line x1={this.state.x22+5} y1={this.state.y22} x2={this.state.x22-100} y2={this.state.y22}  style={{stroke:"rgb(255,0,0)","stroke-width":"2"}} />
  <line x1={this.state.x33+5} y1={this.state.y33} x2={this.state.x33-100} y2={this.state.y33}  style={{stroke:"rgb(255,0,0)","stroke-width":"2"}} />
  <line x1={this.state.x44+5} y1={this.state.y44} x2={this.state.x44-100} y2={this.state.y44}  style={{stroke:"rgb(255,0,0)","stroke-width":"2"}} />
</svg>
      <div  className="navbar">
       
      </div>
      <div className="container-fluid " >

        <div className="camera-div">
          
            <Webcamera /> 
        </div>
        <div className="product-div-lg" id="child">
         <Products callback={this.getChildheights}></Products>
            
        </div>
      </div>

    </div>
  );
}
}

export default App;
