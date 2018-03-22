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
    ScrollView,

} from 'react-native';

import PropTypes from 'prop-types';

import { StackNavigator, TabNavigator, DrawerNavigator, TabBarBottom} from 'react-navigation';
import Swiper from 'react-native-swiper'
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'

//货主船舶详情页，点击InfoCard显示
import GoodsDetailsPage from './GoodsDetailsPage';

//物流圈/订单/发布/信息/我的 页面及跳转
import GoodsBillPage from './GoodsBillPage'
import GoodsPublishPage from './GoodsPublishPage'
import GoodsMessagePage from './GoodsMessagePage'
import GoodsMyInfoPage from './GoodsMyInfoPage'


import TabBottom from './TabBottom';


class RightHeader extends Component {
    onSortBtnPress = () => {
        Alert.alert("排序");
    }
    onScreenBtnPress = () => {
        //Alert.alert("筛选");
        //Alert.alert(this.props.Navg.navigate('GoodsDetailsPage'));
        this.props.Navg.navigate('GoodsDetailsPage')
        //GoodsPage.jumpToGoodsDetailsPage();
    }
    render() {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center' , alignItems: 'center'}}>
                <TouchableHighlight
                    onPress={this.onSortBtnPress}
                >
                    <Image
                        source={require('../img/sort.png')}
                        style={{ width: 18, height: 18, marginLeft: 10, marginRight: 10,}}
                    />
                </TouchableHighlight>
                <View style={{ width: 0, height: 15, borderWidth: 1, opacity: .1 }} />
                <TouchableHighlight
                    onPress={this.onScreenBtnPress}
                >
                    <Image
                        source={require('../img/screen.png')}
                        style={{ width: 20, height: 20, marginLeft: 10, marginRight: 10, }}
                    />
                </TouchableHighlight>
            </View>
        )
    }
}


const tabTitles = ['空船', '我的货'];
// //FIXME:默认图标
// const tabIcon = [
//     require('../img/role.png'),
//     require('../img/role.png'),
// ];
// //FIXME:选中图标
// const tabSelectedIcon = [
//     require('../img/role.png'),
//     require('../img/role.png'),
// ];

class GoodsPage extends Component {
    static propTypes = {
        // sendChkCode: PropTypes.string,
        // phoneNumPlh: PropTypes.string,
        // ispassword: PropTypes.bool
    }
    static navigationOptions = ({ navigation}) => {
        return {
        // headerTitle: <Text>标题</Text>,

        headerLeft: <Text style={{marginLeft: 10}}>友船友货</Text>,
        headerRight: 
            <RightHeader Navg={navigation}></RightHeader>

        }
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

    static jumpToGoodsDetailsPage = () => {

        Alert.alert(this.props.navigation);
        //this.props.navigation.navigate('GoodsDetailsPage')
    }

    onXxxBtnPress = () => {
        Alert.alert('xx按钮被按下！');
    }
    //onChangeTabs = ({i}) => 'light-content';
    render() {
        var { style } = this.props
        return (
            <View style={styles.container}>
                {/* <View style={styles.swiperWrap}> */}
                    <Swiper
                    style={styles.swiperWrap}
                    showsButtons={false}
                    autoplay={true}
                    //隐藏小圆点
                    dot={<View></View>}
                    activeDot={<View></View>}
                    >
                        <View style={styles.swiperView}>
                            <Image
                                source={require('../img/swiper.png')}
                                style={styles.swiperImg}
                            />
                        </View>
                        <View style={styles.swiperView}>
                            <Image
                                source={require('../img/swiper.png')}
                                style={styles.swiperImg}
                            />
                        </View>
                        <View style={styles.swiperView}>
                            <Image
                                source={require('../img/swiper.png')}
                                style={styles.swiperImg}
                            />
                        </View>
                            
                    </Swiper>

                {/* </View> */}

                <ScrollableTabView 
                    renderTabBar={() =>
                        <TabBottom
                            tabNames={tabTitles}
                            //FIXME:tabIconNames={tabIcon}
                            //FIXME:selectedTabIconNames={tabSelectedIcon}
                            />}
                    
                    style={styles.tabView}
                    tabBarPosition='top'
                    //onChangeTab={this.onChangeTabs}>
                >
                    <View tabLabel="1">
                        <ScrollView>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione ad magnam maiores repellat! Dicta facilis obcaecati at! Expedita reiciendis cumque quidem tempore. Quibusdam quam dolores at. Ipsa, blanditiis odit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime esse nemo? Quas sunt amet obcaecati ex quo et, in, corporis quia accusamus vel beatae officia nulla quasi eligendi veniam?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non perferendis, aperiam aut ut fuga laboriosam recusandae enim minus itaque veniam sequi illo adipisci placeat facere quod perspiciatis a quaerat? Sapiente?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quisquam quae dolorum illo beatae ullam delectus sint soluta vero pariatur aliquid corrupti quas molestiae hic temporibus consectetur, quos error esse?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nam aliquid quaerat quidem! Dicta modi, reiciendis libero porro sed laboriosam amet repellendus magni unde corporis, enim facilis, tempore odio commodi!
                            </Text>
                        </ScrollView>
                    </View>
                    <View tabLabel="2">
                        <ScrollView>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione ad magnam maiores repellat! Dicta facilis obcaecati at! Expedita reiciendis cumque quidem tempore. Quibusdam quam dolores at. Ipsa, blanditiis odit.

                            </Text>
                        </ScrollView>
                    </View>
                </ScrollableTabView>


            </View >
        )
    }
}

const GoodsStack = StackNavigator({
    GoodsPage: {
        screen: GoodsPage,
    },
    GoodsDetailsPage: {
        screen: GoodsDetailsPage,
    },
});

export default TabNavigator({
    //物流圈
    GoodsPage: { 
        screen: GoodsStack 
    },
    //订单
    GoodsBillPage: {
        screen: GoodsBillPage
    },
    //发布
    GoodsPublishPage: {
        screen: GoodsPublishPage
    },
    //消息
    GoodsMessagePage: {
        screen: GoodsMessagePage
    },
    //我的
    GoodsMyInfoPage: {
        screen: GoodsMyInfoPage
    },
    
}, 
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconPath;
                if (routeName === 'GoodsPage') {
                    iconPath = require("../img/tabTemp.png");
                } else if (routeName === 'GoodsBillPage') {
                    iconPath = require("../img/tabTemp.png");
                } else if (routeName === 'GoodsPublishPage') {
                    iconPath = require("../img/tabTemp.png");
                }
                else if (routeName === 'GoodsMessagePage') {
                    iconPath = require("../img/tabTemp.png");
                }
                else if (routeName === 'GoodsMyInfoPage') {
                    iconPath = require("../img/tabTemp.png");
                }


                {/* <Image
                    source={require('../img/sort.png')}
                    style={{ width: 18, height: 18, marginLeft: 10, marginRight: 10, }}
                /> */}
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Image source={iconPath} style={{width: 20, height:20}}></Image>;
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
)

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
        //width: 100,
        //height: 100,
        //alignSelf: 'flex-start',
        //alignItems: 'flex-start',
        //justifyContent: 'flex-start',
        //backgroundColor: '#000'
        //borderWidth: 1,
        flexDirection: 'column',
        flex: 1,

        padding: 10,
        //borderWidth: 1,
        backgroundColor: '#fff',
    },
    swiperWrap: {
        //marginTop: 0,
        //height: 120,
        //backgroundColor: '#0ff',
        //flex: 0,
    },
    swiperView: {
        //height: 150, 
        //margin: 10,
        //backgroundColor: '#0ff',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    swiperImg: {
        height: 120,
        resizeMode: 'contain',
        margin: 10,
    },
    tabView: {
        marginTop: -240,
        //flex: 0,
        //backgroundColor: '#00f',
    }
})

