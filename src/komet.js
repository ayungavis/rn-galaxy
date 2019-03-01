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

export default class Komet extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			
			<Container style={styles.container}>	
				<ScrollView>
					<Content>
						<ImageBackground source={require('./assets/img/post/header-komet.png')} style={styles.postHeaderImg}>
							<View>
								<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
									<Icon style={styles.postHeaderButton} name={'arrow-left'} size={15} color={colors.primary} />
								</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<View >
							<Text style={styles.h1Black}>Komet</Text>
							<Text style={styles.textBlack}>
								Komet merupakan benda langit yang terbentuk dari debu dan gas yang diselimuti oleh es. Ada sekitar sepuluh triliun komet. Mereka adalah salju debu sebesar gunung, tetapi tak bisa terlihat mata. 
							</Text>
							<Image style={{ 
								width: 300,
								height: 199.8,
								marginTop: 10,
								marginBottom: 10,
								marginLeft: 40,
								marginRight: 40
							}} source={require('./assets/img/post/komet-img.png')} />
							<Text style={styles.textBlack}>
								Terkadang, salah satu komet melewati bumi dan menjadi cukup besar dan terang untuk dilihat. Komet ini ikut mengelilingi matahari namun tidak mengikuti orbit planet. Orbit dari komet lonjong dan panjang. Komet biasanya juga disebut bintang berekor.{'\n'}
							</Text>
							<Text style={styles.textBlack}>
								Sementara komet dalam Bahasa Yunani memiliki arti berambut panjang. Salah satu komet yang pernah sangat dekat dengan bumi adalah komet Halley. Salah satu komet yang muncul 76 tahun sekali adalah Komet Halley.
							</Text>
						</View>
						<View>
							<Text style={styles.refTitle}>Reference:</Text>
							<Text style={styles.refText}>
								http://rimasikomet.blogspot.com/2013/04/komet-halley-fakta-dari-sebuah-komet.html
							</Text>
						</View>
					</Content>
				</ScrollView>
			</Container>
		);
	}
}