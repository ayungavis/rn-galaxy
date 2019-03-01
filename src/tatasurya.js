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

export default class TataSurya extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			
			<Container style={styles.container}>
				<ScrollView>
					<Content>
						<ImageBackground source={require('./assets/img/post/header-tatasurya.png')} style={styles.postHeaderImg}>
							<View>
								<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
									<Icon style={styles.postHeaderButton} name={'arrow-left'} size={15} color={colors.primary} />
								</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<View >
							<Text style={styles.h1Black}>Tata Surya</Text>
							<Text style={styles.textBlack}>
								Kumpulan dari matahari, planet, dan benda langit lainnya yang bergerak pada garis edarnya mengelilingi matahari. Benda-benda langit tersebut terdiri dari: satelit, asteroid, meteor, komet, dan benda-benda angkasa lainnya. Lintasan peredaran tata surya berbentuk elips. 
							</Text>
							<Image style={{ 
								width: 300,
								height: 157.56,
								marginTop: 10,
								marginBottom: 10,
								marginLeft: 40,
								marginRight: 40
							}} source={require('./assets/img/post/tata-surya-img-1.jpg')} />
							<Text style={styles.textBlack}>
								Komponen utama sistem tata surya adalah matahari, sebuah bintang deret utama kelas G2 yang mengandung 99,86 persen massa dari sistem dan mendominasi seluruh dengan gaya gravitasinya. Jupiter dan saturnus, dua komponen terbesar yang mengedari matahari, mencakup kira-kira 90 persen massa selebihnya.
								{'\n'}
							</Text>
							<Text style={styles.textBlack}>
								Planet-planet dan objek-objek tata surya juga mengorbit mengelilingi matahari berlawanan dengan arah jarum jam jika dilihat dari atas kutub utara matahari.
							</Text>
						</View>
						<View>
							<Text style={styles.refTitle}>Reference:</Text>
							<Text style={styles.refText}>
								https://id.wikipedia.org/wiki/Tata_Surya
							</Text>
						</View>
					</Content>
				</ScrollView>
			</Container>
			
		);
	}
}