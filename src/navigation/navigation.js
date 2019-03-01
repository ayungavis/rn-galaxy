import React from 'react';
import {
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator,
	StackActions,
	NavigationActions
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../assets/color'; 

import Dashboard from '../dashboard';
import Planet from '../planet';
import About from '../about';
import TataSurya from '../tatasurya';
import Matahari from '../matahari';
import Asteroid from '../asteroid';
import Meteoroid from '../meteoroid';
import Komet from '../komet';

import Merkurius from '../planet/merkurius';
import Venus from '../planet/venus';
import Bumi from '../planet/bumi';
import Mars from '../planet/mars';
import Jupiter from '../planet/jupiter';
import Saturnus from '../planet/saturnus';
import Uranus from '../planet/uranus';
import Neptunus from '../planet/neptunus';

const Navigation = createBottomTabNavigator({
	Beranda: { screen: Dashboard },
	Planet: { screen: Planet },
	Tentang: { screen: About }
}, {
	defaultNavigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			const { routeName } = navigation.state;
			let IconComponent = Icon;
			let iconName;
			if (routeName === 'Beranda') {
				iconName = `ios-home`;
				// IconComponent = HomeIconWithBadge;
			}
			else if (routeName === 'Planet') {
				iconName = `ios-planet`;
			}
			else if (routeName === 'Tentang') {
				iconName = `ios-information-circle`;
			}
			return <IconComponent name={iconName} size={25} color={tintColor} />;
		},
		tabBarVisible: () => {
			const { routeName } = navigation.state;
			let tabBarVisible = false;
			if (routeName === 'Beranda' || routeName === 'Planet' || routeName === 'Tentang') {
				tabBarVisible = true;
				// IconComponent = HomeIconWithBadge;
			}
			return tabBarVisible;
		},
	}),
	tabBarOptions: {
		activeTintColor: colors.theme,
		inactiveTintColor: 'gray',
	},
});

const DashboardStack = createStackNavigator({
	Beranda: { 
		screen: Navigation,
		navigationOptions: {
			header: null,
		}
	},
	TataSurya: { screen: TataSurya },
	Matahari: { screen: Matahari },
	Asteroid: { screen: Asteroid },
	Meteoroid: { screen: Meteoroid },
	Komet: { screen: Komet },
	Merkurius: { screen: Merkurius },
	Venus: { screen: Venus },
	Bumi: { screen: Bumi },
	Mars: { screen: Mars},
	Jupiter: { screen: Jupiter },
	Saturnus: { screen: Saturnus },
	Uranus: { screen: Uranus },
	Neptunus: { screen: Neptunus }
}, {
	headerMode: 'none',
});



export default createAppContainer(DashboardStack);