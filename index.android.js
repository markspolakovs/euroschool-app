import { AppRegistry } from 'react-native';
import Euroschool from './build/src';
import Raven from 'raven-js';
//import { Client } from 'bugsnag-react-native';

//const bugsnag = new Client();

AppRegistry.registerComponent('euroschoolApp', () => Euroschool);
