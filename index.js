import React from 'react';
import ReactDOM from  "react-dom/client";
import DisplayLocation from './DisplayLocation';


class App extends  React.Component { //React.component tha parent class also cllaed as super class
  constructor(props){
    super(props)

  // super nala nee parent class data use panlam nu solrom

    this.state = {lattitude:null, errorMessage : ''} //latitude enanu therla atha null

    //App name vechi call panale constructor ru call agum so input vagura code ingayae kodukalam

     window.navigator.geolocation.getCurrentPosition(
       (position) => {this.setState({latitude:position.coords.latitude})},
       /*
       data va update pananum na setstate method la tha kodukanum athu ulla this.lattitude athula
       input data vangi veikurom position la tha set panrom and coords na coordinate geolocationla irukum browser
       inspect pana theriyum then athoda latitude vanguraom atha "position.coords.latiitude"
       */
        (error) =>   {this.setState({errorMessage:error.message})}

     );

}


   render(){
     //condition based render
      if(this.state.errorMessage && !this.state.latitude){
        return <div><h1> Error:{this.state.errorMessage}</h1> </div>
      } if( !this.state.errorMessage && this.state.latitude){
        return <div><h2> <DisplayLocation  latitude={this.state.lattitude} />  </h2> </div>
      } else {
         return <div><h3> Waiting for your permission </h3></div>

      }

  }
}

 const root = ReactDOM.createRoot(document.querySelector('#root')) //root crete panni tha call panna mudiyum update mathitaga
root.render(
  <App/>

)
