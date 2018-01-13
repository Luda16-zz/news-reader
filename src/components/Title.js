//Component for Title 

import React, { PropTypes } from 'react';

//Import component of Sytle --> global.js
import {
	StyleSheet, //Import created constant
	Text 		//Import created constant's variable
} from 'react-native';

//Import component previously created in  AppText.js
import AppText from './AppText';

//Import components globally
import * as globalStyles from '../styles/global';

	const Title = ({ style, children }) => (
		<AppText style={[styles.title, style]}>
			{children}
		</AppText>
	);

	Title.propTypes = {
		style: Text.propTypes.style,
		children: PropTypes.node
	};

	const styles = StyleSheet.create({
		title: {
			fontFamily: 'HelveticaNeue-CondensedBold',
			fontSize: 18,
			color: globalStyles.HEADER_TEXT_COLOR,
			backgroundColor: `${globalStyles.BG_COLOR}99`
		}
	});

	export default Title;