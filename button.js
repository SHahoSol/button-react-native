import React, { Component } from 'react';
import Button from 'react-native-button';

export default class button extends Component {
  constructor(props, context) {
    super(props, context);
  }
  _handlePress() {
    console.log('Pressed!');
  }
  render() {
    return (
      <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => this._handlePress()}>
        Press Me!
      </Button>
    );
  }
};


<Button
  containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
  disabledContainerStyle={{backgroundColor: 'grey'}}
  style={{fontSize: 20, color: 'green'}}>
  Press me!
</Button>
