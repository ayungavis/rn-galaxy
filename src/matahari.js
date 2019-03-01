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

export default class Matahari extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			
			<Container style={styles.container}>
				<ScrollView>
					<Content>
						<ImageBackground source={require('./assets/img/post/header-matahari.png')} style={styles.postHeaderImg}>
							<View>
								<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
									<Icon style={styles.postHeaderButton} name={'arrow-left'} size={15} color={colors.primary} />
								</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<View >
							<Text style={styles.h1Black}>Matahari</Text>
							<Text style={styles.textBlack}>
								Matahari adalah pusat tata surya, yang merupakan bintang sejati karena dapat memancarkan cahaya sendiri. Matahari menjadi anggota tata surya yang terbesar. Matahari berbentuk gumpalan gas yang berpijar yang terdiri dari gas, terutama gas hidrogen.
							</Text>
							<Image style={{ 
								width: 300,
								height: 195.5,
								marginTop: 10,
								marginBottom: 10,
								marginLeft: 40,
								marginRight: 40
							}} source={require('./assets/img/post/matahari-img.png')} />
							<Text style={styles.textBlack}>
								Matahari memiliki diameter sepanjang 1.392.500 km, kira-kira ukuran ini 109 kali diameter bumi dan sepuluh kali lebih besar dari planet Jupiter. Secara umum, matahari tersusun oleh beberapa lapisan yang terdiri dari; korona, kromosfer, fotosfer, dan lapisan inti.{'\n'}
							</Text>
							<Text style={styles.textBlack}>
								{'\u2022'} Korona{'\n'}
								   Korona adalah lapisan luar atmosfer matahari.{'\n'}
								{'\u2022'} Kromosfer{'\n'}
								   Kromosfer adalah lapisan di atas fotosfer dan bertindak sebagai atmosfer matahari.{'\n'}
								{'\u2022'} Fotosfer{'\n'}
								   Fotosfer adalah bagian permukaan matahari. Lapisan ini mengeluarkan cahaya sehingga mampu memberikan penerangan sehari-hari.{'\n'}
								{'\u2022'} Inti Matahari{'\n'}
								   Inti matahari adalah lapisan paling dalam dari matahari tempat berlangsungnya reaksi fusi yang menghasilkan energi bagi matahari.
							</Text>
						</View>
						<View>
							<Text style={styles.refTitle}>Reference:</Text>
							<Text style={styles.refText}>
								https://www.ilmusiana.com/2015/12/tata-surya-pengertian-sistem-susunan.html
							</Text>
						</View>
					</Content>
				</ScrollView>
			</Container>
			
		);
	}
}