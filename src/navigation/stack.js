import React from 'react';
import {
	createAppContainer,
	createStackNavigator,
	StackActions,
	NavigationActions
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../assets/color'; 
import Test from '../test';
import Dashboard from '../dashboard';

const Stack = createStackNavigator({
	Test: { screen: Test }
}, {
	navigationOptions: {
		headerStyle: {
			backgroundColor: colors.theme
		},
		headerTinColor: colors.primary,
	}
});

export default createAppContainer(Stack);