import React, { Component } from 'react';
import { 
	StyleSheet,
	TouchableWithoutFeedback,
	View,
	Image,
	ImageBackground,
	ScrollView,
} from 'react-native';
import {
 	Container,
	Header,
	Title,
	Content,
	Button,
	Left,
	Right,
	Body,
	Text,
	Thumbnail,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './assets/styles';
import { colors } from './assets/color';
import Navigation from './navigation/navigation';

export default class Planet extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			
			<Container style={styles.container}>
				<ScrollView>
					<Content>
						<ImageBackground source={require('./assets/img/header.png')} style={styles.header}>
							<View style={{ flex: 1, postition: 'absolute', flexDirection: 'column' }}>
								<View style={{ justifyContent: 'center', alignItems: 'center' }}>
									<Image style={styles.logo} source={require('./assets/img/logo.png')} />
								</View>
							 	<Text style={styles.h1}>Planet</Text>
							 	<Text style={styles.text}>
							 		<Text style={{ fontWeight: 'bold', color: colors.primary }}>Planet</Text> adalah benda langit yang mengorbit atau mengelilingi suatu bintang dengan lintasan dan kecepatan tertentu. Contohnya Bumi mengelilingi Matahari.
							 	</Text>

							 	<View style={{ flexDirection: 'row' }}>
									<TouchableWithoutFeedback onPress={() => navigate('Merkurius')}>						
								 		<View style={styles.shapePlanetLeft}>
								 			<Image style={styles.thumbPlanet} source={require('./assets/img/merkurius.png')} />
								 			<Body style={{flexDirection: 'row', justifyContent: 'flex-start',}}>
								 				<Text style={styles.thumbPlanetTitle}>Merkurius</Text>
								 				<Body style={styles.thumbIcon}>
									 				<Icon style={{marginRight: 12}} name={'angle-right'} size={15} color={colors.text} />
									 			</Body>
									 		</Body>
									 	</View>
									</TouchableWithoutFeedback>
									<TouchableWithoutFeedback onPress={() => navigate('Venus')}>							
									 	<View style={styles.shapePlanetRight}>
								 			<Image style={styles.thumbPlanet} source={require('./assets/img/venus.png')} />
								 			<Body style={{flexDirection: 'row', justifyContent: 'flex-start',}}>
								 				<Text style={styles.thumbPlanetTitle}>Venus</Text>
								 				<Body style={styles.thumbIcon}>
									 				<Icon style={{marginRight: 12}} name={'angle-right'} size={15} color={colors.text} />
									 			</Body>
									 		</Body>
									 	</View>
									</TouchableWithoutFeedback>
								</View>
							</View>
						</ImageBackground>
						<View style={{ flexDirection: 'row' }}>
							<TouchableWithoutFeedback onPress={() => navigate('Bumi')}>
						 		<View style={styles.shapePlanetLeft}>
						 			<Image style={styles.thumbPlanet} source={require('./assets/img/bumi.png')} />
						 			<Body style={{flexDirection: 'row', justifyContent: 'flex-start',}}>
						 				<Text style={styles.thumbPlanetTitle}>Bumi</Text>
						 				<Body style={styles.thumbIcon}>
							 				<Icon style={{marginRight: 12}} name={'angle-right'} size={15} color={colors.text} />
							 			</Body>
							 		</Body>
							 	</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => navigate('Mars')}>							
							 	<View style={styles.shapePlanetRight}>
						 			<Image style={styles.thumbPlanet} source={require('./assets/img/mars.png')} />
						 			<Body style={{flexDirection: 'row', justifyContent: 'flex-start',}}>
						 				<Text style={styles.thumbPlanetTitle}>Mars</Text>
						 				<Body style={styles.thumbIcon}>
							 				<Icon style={{marginRight: 12}} name={'angle-right'} size={15} color={colors.text} />
							 			</Body>
							 		</Body>
							 	</View>
							</TouchableWithoutFeedback>
					 	</View>
					 	<View style={{ flexDirection: 'row' }}>
							<TouchableWithoutFeedback onPress={() => navigate('Jupiter')}>
					 		
						 		<View style={styles.shapePlanetLeft}>
						 			<Image style={styles.thumbPlanet} source={require('./assets/img/jupiter.png')} />
						 			<Body style={{flexDirection: 'row', justifyContent: 'flex-start',}}>
						 				<Text style={styles.thumbPlanetTitle}>Jupiter</Text>
						 				<Body style={styles.thumbIcon}>
							 				<Icon style={{marginRight: 12}} name={'angle-right'} size={15} color={colors.text} />
							 			</Body>
							 		</Body>
							 	</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => navigate('Saturnus')}>							
							 	<View style={styles.shapePlanetRight}>
						 			<Image style={styles.thumbPlanet} source={require('./assets/img/saturnus.png')} />
						 			<Body style={{flexDirection: 'row', justifyContent: 'flex-start',}}>
						 				<Text style={styles.thumbPlanetTitle}>Saturnus</Text>
						 				<Body style={styles.thumbIcon}>
							 				<Icon style={{marginRight: 12}} name={'angle-right'} size={15} color={colors.text} />
							 			</Body>
							 		</Body>
							 	</View>
							</TouchableWithoutFeedback>
					 	</View>
					 	<View style={{ flexDirection: 'row' }}>
							<TouchableWithoutFeedback onPress={() => navigate('Uranus')}>
					 		
						 		<View style={styles.shapePlanetLeft}>
						 			<Image style={styles.thumbPlanet} source={require('./assets/img/uranus.png')} />
						 			<Body style={{flexDirection: 'row', justifyContent: 'flex-start',}}>
						 				<Text style={styles.thumbPlanetTitle}>Uranus</Text>
						 				<Body style={styles.thumbIcon}>
							 				<Icon style={{marginRight: 12}} name={'angle-right'} size={15} color={colors.text} />
							 			</Body>
							 		</Body>
							 	</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => navigate('Neptunus')}>							
							 	<View style={styles.shapePlanetRight}>
						 			<Image style={styles.thumbPlanet} source={require('./assets/img/neptunus.png')} />
						 			<Body style={{flexDirection: 'row', justifyContent: 'flex-start',}}>
						 				<Text style={styles.thumbPlanetTitle}>Neptunus</Text>
						 				<Body style={styles.thumbIcon}>
							 				<Icon style={{marginRight: 12}} name={'angle-right'} size={15} color={colors.text} />
							 			</Body>
							 		</Body>
							 	</View>
							</TouchableWithoutFeedback>
					 	</View>
					 	<View style={{marginBottom: 20}}></View>

					</Content>
				</ScrollView>
			</Container>
			
		);
	}
}