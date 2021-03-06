import React, {Component} from "react";
import Navbar from "./navbar/Navbar.js"
import FormField from "./formfield/FormField.js"
import Coolbutton  from "./coolbutton/Coolbutton.js"
import Message from "./message/Message.js"

class App extends Component{
  render(){
    return (
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <Coolbutton isSmall isDanger className="is-rounded my-class">Button 1</Coolbutton>
      <Coolbutton isSmall isSuccess>Button 2</Coolbutton> 
      
    </div>
    )
    }
  }
    

export default App;
