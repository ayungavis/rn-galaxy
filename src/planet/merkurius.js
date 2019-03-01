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

export default class Merkurius extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			
			<Container style={styles.container}>
				<ScrollView>
					<Content>
						<ImageBackground source={require('../assets/img/post/header-merkurius.png')} style={styles.postHeaderImg}>
							<View>
								<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
									<Icon style={styles.postHeaderButton} name={'arrow-left'} size={15} color={colors.primary} />
								</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<View >
							<Text style={styles.h1Black}>Merkurius</Text>
							<Text style={styles.textBlack}>
								Merkurius merupakan planet yang paling dekat dengan Matahari dan memiliki diameter 4.862 km sehingga merupakan planet terkecil. Jarak planet Merkurius dengan Matahari sekitar 58 juta km.
							</Text>
							<Image style={{ 
								width: 300,
								height: 172,
								marginTop: 10,
								marginBottom: 10,
								marginLeft: 40,
								marginRight: 40
							}} source={require('../assets/img/post/merkurius-img.png')} />
							<Text style={styles.textBlack}>
								Merkurius membutuhkan 88 hari untuk berputar mengelilingi Matahari satu kali. Merkurius terlihat paling terang dari Bumi dan kadang-kadang menampakkan diri sebagai titik kecil saat Matahari terbenam atau fajar menyingsing.{'\n'}
							</Text>
							<Text style={styles.textBlack}>
								Suhunya di siang hari mencapai 430°C, tetapi di malam hari mencapai -170°C. Merkurius tidak memiliki satelit.
							</Text>
						</View>
						<View>
							<Text style={styles.refTitle}>Reference:</Text>
							<Text style={styles.refText}>
								https://id.wikipedia.org/wiki/Merkurius
							</Text>
						</View>
					</Content>
				</ScrollView>
			</Container>
			
		);
	}
}