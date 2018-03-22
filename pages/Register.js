
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

const checkNum = (num) => {
    if(num) {

        if (num.length > 11) {
            return num.slice(0, 11);
        }
        else {
            return num;
        }
        
    }
    
}

class Register extends Component {
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
            chkCode: "",
            password: "",
            // role_ships role_goods
            role: "",
            sendChk: "发送验证码",

            ispassword: true,
        }
    }

    onCfmButtonPress = () => {
        Alert.alert('确定按钮被按下！');
    }
    
    onBackBtnPress = () => {
        Alert.alert('返回登陆按钮被按下！');
    }
    
    onSendChkCodeBtnPress = () => {
        // Alert.alert('发送验证码按钮被按下！倒计时！');
        if (this.state.sendChk == "发送验证码")
            this.chkCodeCount();
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

    chkCodeCount = () => {
        that = this;
        chkCodeCountInt = setInterval(function () {
            var sendChkSelf = that.state.sendChk;


            var count = 60;
            if (sendChkSelf === "发送验证码"){

                sendChkSelf = count;

                that.setState({
                    sendChk: sendChkSelf
                })
            } else if (sendChkSelf === 0) {

                sendChkSelf = "发送验证码";
                
                that.setState({
                    sendChk: sendChkSelf
                })

                clearInterval(this.chkCodeCountInt);

            } else {
                
                
                // Alert.alert('' + count);
                sendChkSelf -= 1;
                that.setState({
                    sendChk: sendChkSelf
                })
                // Alert.alert('in it');
            }
            
            
        }, 1000);
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
                        <Text 
                            style={styles.sendChk}
                            onPress={this.onSendChkCodeBtnPress}
                        >{this.state.sendChk.length == 5 ? this.state.sendChk : '              ' + this.state.sendChk}</Text>
                    </View>
                </View>
                
                <View style={styles.wrapper}>
                    <View style={styles.txtBorder}>

                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={styles.textInput}
                            multiline={false}
                            placeholder={'请输入验证码'}
                            password={false}
                            onChangeText={(text) => {
                                this.setState({
                                    chkCode: text
                                })
                            }}
                            value={this.state.chkCode}
                        />
                    </View>
                </View>

                <View style={styles.wrapper}>
                    <View style={styles.txtBorder}>

                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={styles.textInput}
                            multiline={false}
                            placeholder={'请设置密码'}
                            secureTextEntry ={this.state.ispassword}
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
                                this.state.ispassword? 
                                    <Image style={styles.eyeImg} source={require('../img/eye-close.png')} ></Image>
                                    : <Image style={styles.eyeImg} source={require('../img/eye-open.png')} ></Image>
                            }
                        </TouchableHighlight >
                    </View>
                </View>

                <View style={styles.wrapper}>
                    <View style={styles.rolePicker}>

                        {/* <TextInput
                            underlineColorAndroid={'transparent'}
                            style={styles.textInput}
                            multiline={false}
                            placeholder={'请选择角色'}
                            password={ispassword}
                            onChangeText={(text) => {
                                this.setState({
                                    txtValue: text
                                })
                            }}
                            value={this.state.txtValue}
                        /> */}

                        <Picker
                            mode= {"dropdown"}
                            selectedValue={this.state.role}
                            onValueChange={(myRole) => 
                            {
                                
                                this.setState({ role: myRole })
                                //Alert.alert(this.state.role);
                            }
                                
                                }>
                            <Picker.Item label="我是船主" value="role_ships" />
                            <Picker.Item label="我是货主" value="role_goods" />
                        </Picker>


                        {/* <Text style={styles.sendChk}>箭头</Text> */}
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
                        onPress={this.onCfmButtonPress}
                    >
                        确定
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
                        onPress={this.onBackBtnPress}
                        >
                        返回登陆
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
    getValue() {
        return this.state.txtValue
    }
}

const styles = StyleSheet.create({
    
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
    txtBorder: {
        height: 40,
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#999',
        marginLeft: 50,
        marginRight: 50,
        flexDirection: 'row'
    },
    sendChk: {
        height: 20,
        width: 75,
        marginLeft: -20,
        marginRight: 0,
        fontSize: 15,
        marginTop: 15,
        color: '#999',
        

    },
    eyeImgWrap: {
        marginLeft: 28,
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
    textInput: {
        height: 50,
        width: 200
    },
    cfmButton: {
        //width: 
        marginTop: 80,
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
    
    rolePicker: {
        marginLeft: 50,
        marginRight: 50,

        height: 40,
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#999',
        //backgroundColor: '#999',
        //color: '#999',
        opacity: .6,

        //fontSize: 5,
    }
})

module.exports = Register;