/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert
} from 'react-native';


export default class Touchable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
    	<View>
    		<TouchableNativeFeedback
	      		onPress={()=>{
					Alert.alert('已点击确定按钮！');
		      	}}
		      	onLongPress={()=>{
		      		{/* Alert.alert('提示','确认删除吗？',[
		      			{
		      				text: '取消',
		      				onPress: ()=>{

		      				},
		      				style: 'cancel'
		      			},
		      			{
		      				text: '确定',
		      				onPress: ()=>{

		      				}
		      			},
		      		]) */}
		      	}
				  }
		    >
		      	<View style={styles.button}>
		      		<Text style={styles.buttonText}>
		      			确定
		      		</Text>
		      	</View>
		    </TouchableNativeFeedback>
    	</View>
    );
  }
}

const styles=StyleSheet.create({
	button:{
		width: 100,
		height: 40,
		alignItems: 'center',
		// borderWidth:1,
		borderRadius: 20,
		backgroundColor: '#60BBFE',
		marginTop: 80,

	},
	buttonText:{
		// height: 40,
		fontSize: 16,
		color: '#fff',
		marginTop: 8,
	},
	
});