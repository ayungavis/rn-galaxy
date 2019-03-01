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

import styles from '../assets/styles';
import { colors } from '../assets/color';
import Navigation from '../navigation/navigation';

export default class Saturnus extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			
			<Container style={styles.container}>
				<ScrollView>
					<Content>
						<ImageBackground source={require('../assets/img/post/header-saturnus.png')} style={styles.postHeaderImg}>
							<View>
								<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
									<Icon style={styles.postHeaderButton} name={'arrow-left'} size={15} color={colors.primary} />
								</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<View >
							<Text style={styles.h1Black}>Saturnus</Text>
							<Text style={styles.textBlack}>
								Saturnus termasuk planet nomor dua terbesar dalam tata surya. Saturnus dikelilingi sebuah cincin raksasa yang terdiri dari debu-debu dan partikel-partikel kecil berwarna kekuning-kuningan.
							</Text>
							<Image style={{ 
								width: 300,
								height: 168.75,
								marginTop: 10,
								marginBottom: 10,
								marginLeft: 40,
								marginRight: 40
							}} source={require('../assets/img/post/saturnus-img.png')} />
							<Text style={styles.textBlack}>
								Memiliki garis tengah 120.000 km dan jaraknya 1.428 juta km dari Matahari. Untuk berevolusi, Saturnus membutuhkan waktu 29,5 tahun.{'\n'}
							</Text>
							<Text style={styles.textBlack}>
								Saturnus memiliki 21 satelit dan yang terbesar adalah Titan. Suhu permukaan Saturnus cukup dingin, sekitar -145 derajat celsius.
							</Text>
						</View>
						<View>
							<Text style={styles.refTitle}>Reference:</Text>
							<Text style={styles.refText}>
								https://id.wikipedia.org/wiki/Saturnus
							</Text>
						</View>
					</Content>
				</ScrollView>
			</Container>
			
		);
	}
}