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

export default class Meteoroid extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return(
			<Container style={styles.container}>
				<ScrollView>
					<Content>
						<ImageBackground source={require('./assets/img/post/header-meteor.png')} style={styles.postHeaderImg}>
							<View>
								<TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
									<Icon style={styles.postHeaderButton} name={'arrow-left'} size={15} color={colors.primary} />
								</TouchableWithoutFeedback>
							</View>
						</ImageBackground>
						<View >
							<Text style={styles.h1Black}>Meteoroid</Text>
							<Text style={styles.textBlack}>
								Meteoroid yang masuk ke dalam sebuah planet disebut dengan meteor. Sementara meteoroid sendiri merupakan bebatuan luar angkasa yang mengandung besi dan dia bergerak bebas di angkasa.
							</Text>
							<Image style={{ 
								width: 300,
								height: 205,
								marginTop: 10,
								marginBottom: 10,
								marginLeft: 40,
								marginRight: 40
							}} source={require('./assets/img/post/meteor-img.png')} />
							<Text style={styles.textBlack}>
								Meteoroid yang melayang-layang di angkasa dan tidak mempunyai lintasan. Benda ini kadang-kadang menubruk planet termasuk planet bumi. Ketika memasuki bumi, benda ini tampak berpijar karena bergesekan dengan atmosfer.{'\n'}
							</Text>
							<Text style={styles.textBlack}>
								Sebagian besar meteor habis bergesekan dengan atmosfer tersebut. Adapun yang sempat sampai ke permukaan bumi disebut dengan meteorit. Meteor disebut juga bintang jatuh atau bintang beralih.
							</Text>
						</View>
						<View>
							<Text style={styles.refTitle}>Reference:</Text>
							<Text style={styles.refText}>
								https://id.wikipedia.org/wiki/Meteoroid
							</Text>
						</View>
					</Content>
				</ScrollView>
			</Container>
		);
	}
}