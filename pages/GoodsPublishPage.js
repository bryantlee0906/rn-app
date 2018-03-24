import React, { Component } from 'react';

import {
    Platform,
    Image,
    Text,
    TextInput,
    View,
    StyleSheet,
    ToastAndroid,
    Button,
    Alert,
    Picker,
    TouchableHighlight,
} from 'react-native'

import PropTypes from 'prop-types';


export default class GoodsPublishPage extends Component {
    static propTypes = {
        // sendChkCode: PropTypes.string,
        // phoneNumPlh: PropTypes.string,
        // ispassword: PropTypes.bool
    }

    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: '发布',
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconPath;
            if (routeName === 'GoodsPublishPage') {
                //FIXME: 改成加号
                iconPath = require("../img/tabPublish.png");
            }

            return <Image source={iconPath} style={{
                position: 'absolute',
                overflow: 'visible', 
                bottom: Platform.OS === 'ios' ? 5 : -3,
                //marginTop: Platform.OS === 'ios' ? 10 : -50,
                //marginBottom: Platform.OS === 'ios'? 10:50,
                width: Platform.OS === 'ios' ? 60 : 40, 
                height: Platform.OS === 'ios' ? 60 : 40,  }}></Image>;
        },
        
    })

    static tabBarOptions = ({ navigation }) => ({
        activeTintColor: '#000',
        inactiveTintColor: '#6A6A6A',
    })

    static defaultProps = {
        //role: '',
    }
    constructor(props) {
        super(props)
        this.state = {
            //phoneNum: "",

        }
    }

    onXxxBtnPress = () => {
        Alert.alert('xx按钮被按下！');
    }

    render() {
        var { style } = this.props
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20 }}>发布页</Text>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    test: {
        borderWidth: 1,
        borderColor: '#999',
        //borderRadius: 20,

        alignSelf: 'center',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',

        marginTop: 60,
        marginBottom: 20,

        width: 100,
        height: 100,

        color: '#3EA3FC',
        fontSize: 15,
        opacity: .6,

        backgroundColor: "#60BBFE",

    },
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

