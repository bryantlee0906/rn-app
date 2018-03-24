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

const checkNum = (num) => {
    if (num) {
        //// 1. 全手机号验证
        // if(num.length === 1) {
        //     if (num[0] == "1") {
        //         return num;
        //     } else {
        //         return "";
        //     }
        // }
        // else if (num.length === 2) {
        //     // var phoneReg = /[3,4,5,7,8]/;
        //     if (num[0] == "1" 
        //     && 
        //     (num[1] == "3" || num[1] == "4" || num[1] == "5" || num[1] == "7" || num[1] == "8") ) {
        //         return num;
        //     } else {
        //         // Alert.alert(num);
        //         return num.slice(0, num.length - 1);
        //     }
        // }
        // else if (num.length >= 3 && num.length <= 11) {
        //     // Alert.alert('ok?');
        //     return num;
        // }
        // else if (num.length > 11) {
        //     return num.slice(0, 11);
        // }

        //// 2. 手机号长度验证
        if (num.length > 11) {
            return num.slice(0, 11);
        }
        else {
            return num;
        }

    }

}

export default class Login extends Component {
    static propTypes = {
        // sendChkCode: PropTypes.string,
        // phoneNumPlh: PropTypes.string,
        ispassword: PropTypes.bool
    }

    static defaultProps = {
        role: '选择用户角色',
    }
    constructor(props) {
        super(props)
        this.state = {
            phoneNum: "",
            password: "",
            role: "",

            ispassword: true,
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            // headerTitle: <Text>标题</Text>,
            headerLeft: null,

        }
    }

    onEyeBtnPress = () => {
        if (this.state.ispassword) {
            this.setState({
                ispassword: false,
            })
        } else {
            this.setState({
                ispassword: true,
            })
        }
    }

    onLoginBtnPress = () => {
        this.props.navigation.navigate('GoodsPage')
        //Alert.alert('登陆按钮被按下！');
    }

    onRegBtnPress = () => {
        this.props.navigation.navigate('Register')
        //Alert.alert('注册按钮被按下！');
    }

    render() {
        var { style } = this.props
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={require('../img/role.png')} />

                <View style={styles.wrapper}>
                    <View style={styles.txtBorder}>

                        <TextInput
                            keyboardType={'numeric'}
                            underlineColorAndroid={'transparent'}
                            style={styles.textInput}
                            multiline={false}
                            placeholder={'请输入手机号'}
                            password={false}
                            onChangeText={(text) => {
                                this.setState({
                                    phoneNum: checkNum(text)
                                })
                            }}
                            value={this.state.phoneNum}
                        />
                        {/* <Text
                            style={styles.sendChk}
                            onPress={this.onSendChkCodeBtnPress}
                        >{this.state.sendChk.length == 5 ? this.state.sendChk : '              ' + this.state.sendChk}</Text> */}
                    </View>
                </View>
                
                <View style={styles.wrapper}>
                    <View style={styles.txtBorder}>

                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={styles.textInput}
                            multiline={false}
                            placeholder={'请输入密码'}
                            secureTextEntry={this.state.ispassword}
                            onChangeText={(text) => {
                                this.setState({
                                    password: text
                                })
                            }}
                            value={this.state.password}
                        />
                        {/* <Text style={styles.sendChk}>眼睛</Text> */}
                        <TouchableHighlight style={styles.eyeImgWrap} onPress={this.onEyeBtnPress}>
                            {
                                this.state.ispassword ?
                                    <Image style={styles.eyeImg} source={require('../img/eye-close.png')} ></Image>
                                    : <Image style={styles.eyeImg} source={require('../img/eye-open.png')} ></Image>
                            }
                        </TouchableHighlight >
                    </View>
                </View>

                <View style={styles.cfmButton}>
                    {/* <Text
                        style={styles.cfmBtn}
                        onPress={onCfmButtonPress}
                        title="确定"
                        accessibilityLabel="pressed confirm button"
                    >
                    </Text> */}
                    <Text
                        style={styles.cfmBtn}
                        onPress={this.onLoginBtnPress}
                    >
                        登陆
                    </Text>

                </View>

                {/* touchable是为了显示更好的点击效果，既然是要支持ios就算了 */}
                {/* <Touchable></Touchable> */}

                <View style={styles.backBtn}>
                    <Text>
                        or
                    </Text>
                    {/* <Text>
                        {'&nbsp'}
                    </Text> */}
                    <Text
                        style={styles.backTxt}
                        onPress={this.onRegBtnPress}
                    >
                        注册一个
                    </Text>
                    {/* <Button
                        onPress={onCfmButtonPress}
                        title="返回登陆"
                        accessibilityLabel="pressed back button"
                    >
                    </Button> */}
                </View>

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
        alignItems: 'center',
        flexDirection: 'column',
    },
    img: {
        marginTop: 60,
        marginBottom: 20,
        width: 100,
        height: 100,
    },
    wrapper: {
        flexDirection: 'row'
    },
    textInput: {
        height: 50,
        //width: 200
        flex: 1,
        //backgroundColor: '#0ff',
    },
    txtBorder: {
        height: 40,
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#999',
        marginLeft: 50,
        marginRight: 50,
        flexDirection: 'row',
        //backgroundColor: '#0ff',

        justifyContent: 'space-between',
    },
    eyeImgWrap: {
        marginLeft: Platform.OS === 'ios' ? 68 : 28,
        marginRight: 0,
        marginTop: 8,
        height: 30,
        width: 32,
        //borderWidth: 1,
    },
    eyeImg: {
        opacity: .6,
        height: 30,
        width: 30,
        //marginLeft: 30,
        //marginRight: 0,
        //marginTop: 8,
        //borderWidth: 1,
    },
    
    cfmButton: {
        //width: 
        marginTop: Platform.OS === 'ios' ? 260 : 160,
        marginBottom: 0,
        width: 100,
        height: 40,
        alignItems: 'center',
        backgroundColor: "#60BBFE",
        borderRadius: 20,
        //borderWidth: 1,

    },
    cfmBtn: {
        //width: 35,
        height: 40,
        fontSize: 15,
        //alignItems: 'center',
        // borderWidth:1,
        //borderRadius: 20,
        //backgroundColor: '#fff',
        marginTop: 10,
        //borderWidth: 1,
        color: '#fff',
    },
    backBtn: {
        flexDirection: 'row',
        marginTop: 10,
    },
    backTxt: {
        color: '#3EA3FC',
    },
})

{/* module.exports = Register; */}
