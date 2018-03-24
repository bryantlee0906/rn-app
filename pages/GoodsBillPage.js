import React, { Component } from 'react';

import {
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


export default class GoodsBillPage extends Component {
    static propTypes = {
        // sendChkCode: PropTypes.string,
        // phoneNumPlh: PropTypes.string,
        // ispassword: PropTypes.bool
    }

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
                <Text style={{fontSize: 20}}>订单页</Text>
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

