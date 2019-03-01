import React, { Component } from 'react';
import {
	ImageBackground,
	View,
} from 'react-native';

import styles from './assets/styles';

export default class BackgroundImage extends Component {
	render() {
		return (
			<ImageBackground source={require('./assets/img/header.png')} style={styles.header}>
				{this.props.childern}
			</ImageBackground>
		);
	}
}