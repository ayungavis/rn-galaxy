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

export default class Asteroid extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			
			<Container style={styles.container}>
				<ScrollView>
					<Content>
						<ImageBackground source={require('./assets/img/post/header-asteroid.png')} style={styles.postHeaderImg}>
							<View>
								<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
									<Icon style={styles.postHeaderButton} name={'arrow-left'} size={15} color={colors.primary} />
								</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<View >
							<Text style={styles.h1Black}>Asteroid</Text>
							<Text style={styles.textBlack}>
								Asteroida merupakan benda langit yang berukuran kecil-kecil dan mengelilingi matahari. Asteroida ini berada di antara orbit planet Mars dan Jupiter. Asteroid merupakan sisa-sisa bahan pembentuk planet.
							</Text>
							<Image style={{ 
								width: 300,
								height: 205,
								marginTop: 10,
								marginBottom: 10,
								marginLeft: 40,
								marginRight: 40
							}} source={require('./assets/img/post/asteroid-img.png')} />
							<Text style={styles.textBlack}>
								Jumlah asteroid sangat banyak, semuanya secara teratur berkumpul membentuk sabuk asteroid. Diameter sabuk asteroid sekitar 100 km. Sabuk asteroid ini berbentuk melingkar di antara Planet Mars dan Jupiter. Sedangkan, sabuk lainnya bernama Sabuk Edgeworth-Kuiper, terletak jauh di belakang Planet Neptunus.{'\n'}
							</Text>
							<Text style={styles.textBlack}>
								Sabuk asteroid memerlukan waktu sekitar 3 hingga 6 tahun untuk sekali mengitari Matahari. Asteroid yang satu dengan lainnya terpisah sejauh ribuan kilometer. Meskipun terpisah jauh, terkadang asteroid-asteroid itu bertubrukan. Tubrukan tersebut menghasilkan pecahan batu yang lebih kecil atau disebut meteoroid.
							</Text>
						</View>
						<View>
							<Text style={styles.refTitle}>Reference:</Text>
							<Text style={styles.refText}>
								https://id.wikipedia.org/wiki/Asteroid
							</Text>
						</View>
					</Content>
				</ScrollView>
			</Container>
			
		);
	}
}