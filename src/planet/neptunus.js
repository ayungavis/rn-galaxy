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

export default class Neptunus extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			
			<Container style={styles.container}>
				<ScrollView>
					<Content>
						<ImageBackground source={require('../assets/img/post/header-neptunus.png')} style={styles.postHeaderImg}>
							<View>
								<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
									<Icon style={styles.postHeaderButton} name={'arrow-left'} size={15} color={colors.primary} />
								</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<View >
							<Text style={styles.h1Black}>Neptunus</Text>
							<Text style={styles.textBlack}>
								Planet ini tampak seperti kembaran Uranus karena ukurannya yang hampir sama. Neptunus berdiameter kurang lebih 48.600 km. Jika dilihat menggunakan teleskop, Neptunus tampak berwarna kehijau-hijauan.
							</Text>
							<Image style={{ 
								width: 300,
								height: 200.96,
								marginTop: 10,
								marginBottom: 10,
								marginLeft: 40,
								marginRight: 40
							}} source={require('../assets/img/post/neptunus-img.png')} />
							<Text style={styles.textBlack}>
								Neptunus memiliki jarak dengan Matahari sekitar 4.495 juta km dan garis tengahnya 48.600 km. Suhu permukaannya lebih dingin dari Uranus, yaitu sekitar -190 derajat celsius.{'\n'}
							</Text>
							<Text style={styles.textBlack}>
								Untuk sekali berevolusi, Neptunus membutuhkan waktu 165 tahun. Satelit Neptunus ada dua, Triton dan Nereid.
							</Text>
						</View>
						<View>
							<Text style={styles.refTitle}>Reference:</Text>
							<Text style={styles.refText}>
								https://id.wikipedia.org/wiki/Neptunus
							</Text>
						</View>
					</Content>
				</ScrollView>
			</Container>
			
		);
	}
}