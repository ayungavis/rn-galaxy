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

export default class About extends Component {
	render() {
		return(
			<Container style={styles.container}>
				<Content>
					<ImageBackground source={require('./assets/img/header.png')} style={{ flex: 1, width: '100%', height: 280 }}>
						<View style={{postition: 'absolute'}}>
							<View style={{ justifyContent: 'center', alignItems: 'center' }}>
								<Image style={styles.logo} source={require('./assets/img/logo.png')} />
							</View>
						 	<Text style={styles.h1}>Tentang Galaxy</Text>
						 	<Text style={styles.text}>
						 		<Text style={{ fontWeight: 'bold', color: colors.primary }}>Galaxy</Text> merupakan sebuah aplikasi edukasi tentang ilmu pengetahuan tata surya yang diperuntunkan untuk siswa Sekolah Dasar. Aplikasi ini berisikan informasi mengenai apa saja yang ada di tata surya ini.
						 	</Text>
						</View>
					</ImageBackground>
					<Text style={styles.aboutTitle}>Tim</Text>
					<Text style={styles.textBlack}>
						- <Text style={{ fontWeight: 'bold' }}>Al Fauzi Nurrohmatulloh</Text> (1801025135){'\n'}
						- <Text style={{ fontWeight: 'bold' }}>Annisa Dyah Ika Putri</Text> (1801025070){'\n'}
						- <Text style={{ fontWeight: 'bold' }}>Fahri Ashari</Text> (1801025330){'\n'}
						- <Text style={{ fontWeight: 'bold' }}>Sayyidah Intan Nurul Izzah</Text> (1801025382)
					</Text>						
				</Content>
				<View style={styles.footer}>
					<Text style={styles.footerText}>© 2019{'\n'}Version 1.0{'\n'}<Text style={{ fontWeight: 'bold', fontSize: 10, color: 'gray' }}>Tranity Project</Text></Text>
			 	</View>
			</Container>
		);
	}
}