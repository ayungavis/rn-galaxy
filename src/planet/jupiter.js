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

export default class Jupiter extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			
			<Container style={styles.container}>
				<ScrollView>
					<Content>
						<ImageBackground source={require('../assets/img/post/header-jupiter.png')} style={styles.postHeaderImg}>
							<View>
								<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
									<Icon style={styles.postHeaderButton} name={'arrow-left'} size={15} color={colors.primary} />
								</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<View >
							<Text style={styles.h1Black}>Jupiter</Text>
							<Text style={styles.textBlack}>
								Jupiter merupakan planet terbesar dalam tata surya dan berwarna kekuning-kuningan. Garis tengahnya 11 kali diameter Bumi atau sekitar 143.000 km.
							</Text>
							<Image style={{ 
								width: 300,
								height: 168.75,
								marginTop: 10,
								marginBottom: 10,
								marginLeft: 40,
								marginRight: 40
							}} source={require('../assets/img/post/jupiter-img.png')} />
							<Text style={styles.textBlack}>
								Dengan jarak 778 juta km dari Matahari, Jupiter membutuhkan 12 tahun untuk mengelilingi matahari. Atmosfer Jupiter banyak mengandung gas hidrogen dan helium.{'\n'}
							</Text>
							<Text style={styles.textBlack}>
								Karena batas permukaan Jupiter dan atmosfernya yang kurang jelas, Jupiter menyerupai bola gas yang amat besar. Jumlah satelit Jupiter ada 16 dan yang terbesar adalah Ganymeda. 
							</Text>
						</View>
						<View>
							<Text style={styles.refTitle}>Reference:</Text>
							<Text style={styles.refText}>
								https://id.wikipedia.org/wiki/Yupiter
							</Text>
						</View>
					</Content>
				</ScrollView>
			</Container>
			
		);
	}
}