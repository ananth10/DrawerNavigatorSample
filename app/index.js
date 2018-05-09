/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import  {RootNavigation} from './routes';

export default class CustomDrawer extends Component {
  render () {
    return (
      <RootNavigation/>
    );
  }
}

AppRegistry.registerComponent('CustomDrawer', () => CustomDrawer);
