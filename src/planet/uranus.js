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

export default class Uranus extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			
			<Container style={styles.container}>
				<ScrollView>
					<Content>
						<ImageBackground source={require('../assets/img/post/header-uranus.png')} style={styles.postHeaderImg}>
							<View>
								<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
									<Icon style={styles.postHeaderButton} name={'arrow-left'} size={15} color={colors.primary} />
								</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<View >
							<Text style={styles.h1Black}>Uranus</Text>
							<Text style={styles.textBlack}>
								Uranus merupakan planet ketiga terbesar setelah Jupiter dan Saturnus. Diameter Uranus hampir empat kali diameter bumi atau kurang lebih 50.800 km.
							</Text>
							<Image style={{ 
								width: 300,
								height: 143.75,
								marginTop: 10,
								marginBottom: 10,
								marginLeft: 40,
								marginRight: 40
							}} source={require('../assets/img/post/uranus-img.png')} />
							<Text style={styles.textBlack}>
								Karena jaraknya yang sangat jauh dari bumi serta atmosfernya sangat tebal, Uranus angat sulit diamati dari bumi. Uranus dikelilingi lima buah satelit dan yang paling besar adalah Titania. Memiliki garis tengah sekitar 51.1118 km. Jarak Uranis dengan Matahari kira-kira 2.869 juta km.{'\n'}
							</Text>
							<Text style={styles.textBlack}>
								Uranus mengelilingi Matahari sekali edar membutuhkan waktu sekitar 84 tahun. Arah rotasi Uranis berlawanan dengan planet lain. Permukaan Uranus selalu diliputi awan tebal. Uranus memiliki lima belas buah satelit dan yang terbesar adalah Ariel.
							</Text>
						</View>
						<View>
							<Text style={styles.refTitle}>Reference:</Text>
							<Text style={styles.refText}>
								https://id.wikipedia.org/wiki/Uranus
							</Text>
						</View>
					</Content>
				</ScrollView>
			</Container>
			
		);
	}
}