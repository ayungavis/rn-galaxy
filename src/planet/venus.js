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

export default class Venus extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			
			<Container style={styles.container}>
				<ScrollView>
					<Content>
						<ImageBackground source={require('../assets/img/post/header-venus.png')} style={styles.postHeaderImg}>
							<View>
								<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
									<Icon style={styles.postHeaderButton} name={'arrow-left'} size={15} color={colors.primary} />
								</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<View >
							<Text style={styles.h1Black}>Venus</Text>
							<Text style={styles.textBlack}>
								Venus terletak antara orbit Merkurius dan orbit Bumi, memiliki garis tengah sekitar 12.100 km dan merupakan planet terdekat dengan Bumi. Ukurannya yang hampir sama dengan Bumi membuatnya disebut sebagai Bumi kebar.
							</Text>
							<Image style={{ 
								width: 300,
								height: 168.82,
								marginTop: 10,
								marginBottom: 10,
								marginLeft: 40,
								marginRight: 40
							}} source={require('../assets/img/post/venus-img.png')} />
							<Text style={styles.textBlack}>
								Dengan jarak 108 juta km dari matahari, Venus membutuhkan waktu 225 hari untuk sekali berevolusi mengelilingi matahari. Suhu permukaan Venus dapat mencapai 480 derajat Celsius sehingga sangat kering. {'\n'}
							</Text>
							<Text style={styles.textBlack}>
								Venus merupakan planet putih yang bercahaya terang, tampak indah dan cemerlang. Planet ini tampak menjelang Matahari terbit atau beberapa saat sesudah Matahari tenggelam. Orang menamakannya bintang fajar atau bintang timur atau bintang kejora.
							</Text>
						</View>
						<View>
							<Text style={styles.refTitle}>Reference:</Text>
							<Text style={styles.refText}>
								https://id.wikipedia.org/wiki/Venus
							</Text>
						</View>
					</Content>
				</ScrollView>
			</Container>
			
		);
	}
}