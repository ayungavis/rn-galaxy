import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { colors } from './color';

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary
	},
	header: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	logo: {
		width: 131,
		height: 42,
		marginTop: 20,
	},

	// Dashboard
	shape: {
		width: 300,
		height: 95,
		marginTop: 20,
		marginLeft: 40,
		marginRight: 40,
		backgroundColor: colors.primary,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 5,
		borderRadius: 10
	},
	inlineShape: {
		marginTop: 15,
		marginLeft: 15,
		flexDirection: 'row',
	},
	thumbImage: {
		width: 54,
		height: 54,
		marginTop: 6,
		marginLeft: 6,
		marginBottom: 6,
	},
	thumbBody: {
		marginLeft: 10,
		flexDirection: 'row',
	},
	thumbIcon: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	thumbTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'left',
		color: colors.text,
	},
	thumbSubtitle: {
		fontSize: 12,
		textAlign: 'justify',
		color: colors.text,
	},

	// Planet
	shapePlanetLeft: {
		width: 130,
		height: 130,
		marginTop: 20,
		marginLeft: 50,
		backgroundColor: colors.primary,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 5,
		borderRadius: 10,
	},
	shapePlanetRight: {
		width: 130,
		height: 130,
		marginTop: 20,
		marginLeft: 25,
		backgroundColor: colors.primary,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 5,
		borderRadius: 10,
	},
	thumbPlanet: {
		width: 130,
		height: 90,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	thumbPlanetTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'left',
		color: colors.text,
		marginTop: -2,
		marginLeft: 10,
	},

	// Post Header
	postHeaderImg: {
		flex: 1,
		width: 390,
		height: 210,
	},
	postHeaderButton: {
		flexDirection: 'column',
		marginTop: 20,
		marginLeft: 20,
	},
	postImage: {
		width: 313,
		height: 164,
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 40,
		marginRight: 40
	},

	// About
	aboutTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'left',
		marginTop: 0,
		marginLeft: 40,
		marginBottom: 10,
	},

	// Header and Body Text
	title: {
		fontSize: 18,
		fontWeight: 'bold', 
		textAlign: 'center',
		color: colors.text,
		marginTop: 12
	},
	h1: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'left',
		marginTop: 15,
		marginLeft: 40,
		marginBottom: 10,
		marginRight: 40,
		color: colors.primary,
	},
	text: {
		fontSize: 14,
		lineHeight: 20,
		textAlign: 'justify',
		marginLeft: 40,
		marginRight: 40,
		color: colors.primary,
	},
	h1Black: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'left',
		marginTop: 15,
		marginLeft: 40,
		marginBottom: 10,
	},	
	textBlack: {
		fontSize: 14,
		lineHeight: 20,
		textAlign: 'justify',
		marginLeft: 40,
		marginRight: 40,
	},
	refTitle: {
		fontSize: 10,
		fontWeight: 'bold',
		textAlign: 'justify',
		marginLeft: 40,
		marginTop: 10,
	},
	refText: {
		fontSize: 10,
		textAlign: 'justify',
		marginLeft: 40,
		marginBottom: 20,
	},
	footer: {
		width: '100%', 
		height: 50, 
		backgroundColor: 'transparent', 
		justifyContent: 'center', 
		alignItems: 'center',
		position: 'absolute',
		bottom: 0
	},
	footerText: {
		fontSize: 10,
		textAlign: 'center',
		color: 'gray',
	},
});

export default style;