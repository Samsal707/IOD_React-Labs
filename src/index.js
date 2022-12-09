// @TODO1: Create a Greeting component (as a class) which renders a text “Hello World”.
import React, {component } from 'react'
class Greeting extends React.Component {
    
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// need to 
// @TODO2: Pass a prop called ‘name’ down to the Greeting component and render the text ‘Hello <yourname>’ (e.g. Hello John).
<Greeting name="Sam" />