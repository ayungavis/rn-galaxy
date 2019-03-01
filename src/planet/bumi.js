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

export default class Bumi extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			
			<Container style={styles.container}>
				<ScrollView>
					<Content>
						<ImageBackground source={require('../assets/img/post/header-bumi.png')} style={styles.postHeaderImg}>
							<View>
								<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
									<Icon style={styles.postHeaderButton} name={'arrow-left'} size={15} color={colors.primary} />
								</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<View >
							<Text style={styles.h1Black}>Bumi</Text>
							<Text style={styles.textBlack}>
								Bumi merupakan satu-satunya planet di tata surya yang memiliki kehidupan, serta permukaannya terdiri dari lautan dan daratan. Permukaan bumi akan terlihat berwarna hijau kebiru-biruan jika dilihat dari angkasa luar. 
							</Text>
							<Image style={{ 
								width: 300,
								height: 168.82,
								marginTop: 10,
								marginBottom: 10,
								marginLeft: 40,
								marginRight: 40
							}} source={require('../assets/img/post/bumi-img.png')} />
							<Text style={styles.textBlack}>
								Bentuk bumi bulat dan bergaris tengah 12.750 km. Jarak bumi dengan matahari sekitar 150 juta km dan 2/3 luas permukaan bumi ditutupi lautan. Bumi memiliki lapisan udara atau atmosfer. Kandungan atmosfer terdiri dari gas, yaitu oksigen dan nitrogen. Jenis gas lain tidak terlalu besar volumenya.{'\n'}
							</Text>
							<Text style={styles.textBlack}>
								Atmosfer melindungi bumi dari sinar radiasi matahari yang membahayakan benda-benda langit yang tertari oleh gaya gravitasi bumi. Lapisan atmosfer juga menjaga suhu bumi di siang hari tidak terlalu panas dan pada malam hari tidak terlalu dingin. Bumi memiliki satu satelit, yaitu bulan. 
							</Text>
						</View>
						<View>
							<Text style={styles.refTitle}>Reference:</Text>
							<Text style={styles.refText}>
								https://id.wikipedia.org/wiki/Bumi
							</Text>
						</View>
					</Content>
				</ScrollView>
			</Container>
			
		);
	}
}