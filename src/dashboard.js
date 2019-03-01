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
import BackgroundImage from './header';
import Navigation from './navigation/navigation';

export default class Dashboard extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			
			<Container style={styles.container}>
				<ScrollView>
					<Content>
						<ImageBackground source={require('./assets/img/header.png')} style={styles.header}>
							<View style={{postition: 'absolute'}}>
								<View style={{ justifyContent: 'center', alignItems: 'center' }}>
									<Image style={styles.logo} source={require('./assets/img/logo.png')} />
								</View>
							 	<Text style={styles.h1}>Selamat Datang!</Text>
							 	<Text style={styles.text}>
							 		<Text style={{ fontWeight: 'bold', color: colors.primary }}>Galaxy</Text> punya banyak informasi mengenai tata surya, yuk simak informasinya di bawah ini!
							 	</Text>
							 	<TouchableWithoutFeedback onPress={() => navigate('TataSurya')}>
							 		<View style={styles.shape}>
							 			<View style={styles.inlineShape}>
							 				<Thumbnail square style={styles.thumbImage} source={require('./assets/img/tatasurya.png')} />
							 				<Body style={styles.thumbBody}>
							 					<Text>
							 						<Text style={styles.thumbTitle}>TATA SURYA {'\n'}</Text>
							 						<Text style={styles.thumbSubtitle}>Pengertian dan persebaran{'\n'}dari tata surya.</Text>
							 					</Text>
							 					<Body style={styles.thumbIcon}>
									 				<Icon style={{marginRight: 20}} name={'angle-right'} size={20} color={colors.text} />
									 			</Body>
							 				</Body>
								 		</View>
								 	</View>
							 	</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<TouchableWithoutFeedback onPress={() => navigate('Matahari')}>
					 		<View style={styles.shape}>
					 			<View style={styles.inlineShape}>
					 				<Thumbnail square style={styles.thumbImage} source={require('./assets/img/matahari.png')} />
					 				<Body style={styles.thumbBody}>
					 					<Text>
					 						<Text style={styles.thumbTitle}>MATAHARI {'\n'}</Text>
					 						<Text style={styles.thumbSubtitle}>Pengertian dan karakteristik{'\n'}dari matahari.</Text>
					 					</Text>
					 					<Body style={styles.thumbIcon}>
							 				<Icon style={{marginRight: 20}} name={'angle-right'} size={20} color={colors.text} />
							 			</Body>
					 				</Body>
						 		</View>
						 	</View>
					 	</TouchableWithoutFeedback>
					 	<TouchableWithoutFeedback onPress={() => navigate('Asteroid')}>
					 		<View style={styles.shape}>
					 			<View style={styles.inlineShape}>
					 				<Thumbnail square style={styles.thumbImage} source={require('./assets/img/asteroid.png')} />
					 				<Body style={styles.thumbBody}>
					 					<Text>
					 						<Text style={styles.thumbTitle}>ASTEROID {'\n'}</Text>
					 						<Text style={styles.thumbSubtitle}>Asteroid dalam sistem{'\n'}tata surya.</Text>
					 					</Text>
					 					<Body style={styles.thumbIcon}>
							 				<Icon style={{marginRight: 20}} name={'angle-right'} size={20} color={colors.text} />
							 			</Body>
					 				</Body>
						 		</View>
						 	</View>
					 	</TouchableWithoutFeedback>
					 	<TouchableWithoutFeedback onPress={() => navigate('Meteoroid')}>
					 		<View style={styles.shape}>
					 			<View style={styles.inlineShape}>
					 				<Thumbnail square style={styles.thumbImage} source={require('./assets/img/meteor.png')} />
					 				<Body style={styles.thumbBody}>
					 					<Text>
					 						<Text style={styles.thumbTitle}>METEOROID {'\n'}</Text>
					 						<Text style={styles.thumbSubtitle}>Informasi dan komposisi{'\n'}mengenai meteor.</Text>
					 					</Text>
					 					<Body style={styles.thumbIcon}>
							 				<Icon style={{marginRight: 20}} name={'angle-right'} size={20} color={colors.text} />
							 			</Body>
					 				</Body>
						 		</View>
						 	</View>
					 	</TouchableWithoutFeedback>
					 	<TouchableWithoutFeedback onPress={() => navigate('Komet')}>
					 		<View style={styles.shape}>
					 			<View style={styles.inlineShape}>
					 				<Thumbnail square style={styles.thumbImage} source={require('./assets/img/komet.png')} />
					 				<Body style={styles.thumbBody}>
					 					<Text>
					 						<Text style={styles.thumbTitle}>KOMET {'\n'}</Text>
					 						<Text style={styles.thumbSubtitle}>Fakta menarik mengenai{'\n'}komet.</Text>
					 					</Text>
					 					<Body style={styles.thumbIcon}>
							 				<Icon style={{marginRight: 20}} name={'angle-right'} size={20} color={colors.text} />
							 			</Body>
					 				</Body>
						 		</View>
						 	</View>
					 	</TouchableWithoutFeedback>
					 	<View style={{marginBottom: 20}}></View>

					</Content>
				</ScrollView>
			</Container>
			
		);
	}
}