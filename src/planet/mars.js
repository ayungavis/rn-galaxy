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

export default class Mars extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			
			<Container style={styles.container}>
				<ScrollView>
					<Content>
						<ImageBackground source={require('../assets/img/post/header-mars.png')} style={styles.postHeaderImg}>
							<View>
								<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
									<Icon style={styles.postHeaderButton} name={'arrow-left'} size={15} color={colors.primary} />
								</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<View >
							<Text style={styles.h1Black}>Mars</Text>
							<Text style={styles.textBlack}>
								Keadaan Mars hampir mirip dengan bumi sehingga para ahli menyelidiki apakah di mars terdapat kehidupan.
							</Text>
							<Image style={{ 
								width: 300,
								height: 168.75,
								marginTop: 10,
								marginBottom: 10,
								marginLeft: 40,
								marginRight: 40
							}} source={require('../assets/img/post/mars-img.png')} />
							<Text style={styles.textBlack}>
								Planet Mars berwarna kemerah-merahan dan memiliki garis tengah sekitar 6.780 km jaraknya dengan matahari sekitar 228 juta km dan membutuhkan waktu 687 hari untuk mengelilingi matahari. {'\n'}
							</Text>
							<Text style={styles.textBlack}>
								Permukaan Mars juga kering seperti venus. Mars memiliki lapisan atmosfer yang tipis. Di antara Mars dan Jupiter terdapat kumpulan benda langit kecil yang disebut asteroid atau planetoid. Mars mempunyai dua satelit, Demos dan Fobos.
							</Text>
						</View>
						<View>
							<Text style={styles.refTitle}>Reference:</Text>
							<Text style={styles.refText}>
								https://id.wikipedia.org/wiki/Mars
							</Text>
						</View>
					</Content>
				</ScrollView>
			</Container>
			
		);
	}
}