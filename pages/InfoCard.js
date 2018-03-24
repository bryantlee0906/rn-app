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


export default class InfoCard extends Component {
    static propTypes = {
        // sendChkCode: PropTypes.string,
        // phoneNumPlh: PropTypes.string,
        // ispassword: PropTypes.bool
    }

    static defaultProps = {
        billNum: 'GYY177923001',
        billDate: '22日22:23',

        billShipPortName: '连云港港',
        billShipName: '太平123',

        billShipLoad: '10000T',

        
    }
    constructor(props) {
        super(props)
        this.state = {
            billNum: 'G'
            
        }
    }

    onGoodsCardPress = () => {
        this.props.Navg.navigate('GoodsDetailsPage')
    }

    render() {
        var { style } = this.props
        return (
            <TouchableHighlight 
                style={styles.container}
                onPress={this.onGoodsCardPress}
                >
                <Text>Card page</Text>
            </TouchableHighlight >
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
        marginBottom: 10,
        flex: 1,
        height: 120,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#D3D3D3',
    },
})

