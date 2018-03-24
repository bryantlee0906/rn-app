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
    ScrollView,

} from 'react-native';

//适配Platform.OS === 'ios'

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

import InfoCard from './InfoCard'

//顶部tab样式分离。
import TabTop from './TabTop';

//顶部右边的图标，这段代码不可复用，但是可以复制修改使用。
class RightHeader extends Component {
    onSortBtnPress = () => {
        Alert.alert("排序");
    }
    onScreenBtnPress = () => {
        Alert.alert("筛选");
        // 
        //this.props.Navg.navigate('GoodsDetailsPage')
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
                        <TabTop
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
                            <InfoCard Navg={this.props.navigation}/>

                            <InfoCard Navg={this.props.navigation} />

                            <InfoCard Navg={this.props.navigation} />

                            <InfoCard Navg={this.props.navigation} />

                            <InfoCard Navg={this.props.navigation} />
                        </ScrollView>
                    </View>
                    <View tabLabel="2">
                        <ScrollView>
                            <InfoCard Navg={this.props.navigation} />

                            <InfoCard Navg={this.props.navigation} />

                            <InfoCard Navg={this.props.navigation} />

                            <InfoCard Navg={this.props.navigation} />

                            <InfoCard Navg={this.props.navigation} />
                        </ScrollView>
                    </View>
                </ScrollableTabView>


            </View >
        )
    }
}


const GoodsTabnav = TabNavigator({
    //物流圈
    GoodsPage: { 
        screen: GoodsPage,
        navigationOptions: {
            tabBarLabel: '物流圈',
        }
    },
    //订单
    GoodsBillPage: {
        screen: GoodsBillPage,
        navigationOptions: {
            tabBarLabel: '订单',
        }
    },

    //发布
    GoodsPublishPage: {
        screen: GoodsPublishPage,
        // navigationOptions: ({ navigation }) => ({
        //     tabBarLabel: '发布',
        //     tabBarIcon: ({ focused, tintColor }) => {
        //         const { routeName } = navigation.state;
        //         let iconPath;
        //         if (routeName === 'GoodsPublishPage') {
        //             //FIXME: 改成加号
        //             iconPath = require("../img/tabPublish.png");
        //         }
        //         // You can return any component that you like here! We usually use an
        //         // icon component from react-native-vector-icons
        //         return <Image source={iconPath} style={{ position: 'absolute', width: 60, height: 60,    }}></Image>;
        //     },
        //     
        // }),

        // tabBarOptions: {
        //     //FIXME: 修改不了颜色，样式
        //     //activeTintColor: '#000',
        //     inactiveTintColor: '#000',
        //     style: {
        //         //backgroundColor: '#0ff', 
        //         height: 40,   
        //         overflow: 'visible',
        //     },
        //     tabStyle: {
        //         //backgroundColor: '#ff0', 
        //         overflow: 'visible',
        //     },
        //     indicatorStyle: {
        //         //backgroundColor: '#ff0',
        //         overflow: 'visible',
        //     },
        //     labelStyle: {
        //         marginTop: -5,
        //         fontSize: 10, // 文字大小  
        //     },
        // },
        
    },
    //消息
    GoodsMessagePage: {
        screen: GoodsMessagePage,
        navigationOptions: {
            tabBarLabel: '消息',
        }
    },
    //我的
    GoodsMyInfoPage: {
        screen: GoodsMyInfoPage,
        navigationOptions: {
            tabBarLabel: '我的',
        }
    },
    
}, 
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconPath;
                if (routeName === 'GoodsPage') {
                    iconPath = focused ? require("../img/tabGoods.png") : require("../img/tabGoods-outline.png");
                } else if (routeName === 'GoodsBillPage') {
                    iconPath = focused ? require("../img/tabOrders.png") : require("../img/tabOrders-outline.png");
                } else if (routeName === 'GoodsPublishPage') {
                    //FIXME: 改成加号
                    iconPath = focused ? require("../img/tabTemp.png") : require("../img/tabTemp.png");
                }
                else if (routeName === 'GoodsMessagePage') {
                    iconPath = focused ? require("../img/tabMessage.png") : require("../img/tabMessage-outline.png");
                }
                else if (routeName === 'GoodsMyInfoPage') {
                    iconPath = focused ? require("../img/tabMyInfo.png") : require("../img/tabMyInfo-outline.png");
                }


                {/* <Image
                    source={require('../img/sort.png')}
                    style={{ width: 18, height: 18, marginLeft: 10, marginRight: 10, }}
                /> */}
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Image source={iconPath} style={{width: 25, height:25}}></Image>;
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#2D9BFD',
            inactiveTintColor: '#6A6A6A',
            labelStyle: {
                marginTop: 0,
                fontSize: 10, // 文字大小  
                fontWeight: '700',
            }, 
            //tabStyle的父容器 
            style: { 
                //backgroundColor: '#0ff', 
                height: 50, 

                //position: 'absolute',
                //overflow: 'visible',
            },  
            //这个是tab Image的父容器
            tabStyle: {
                //marginTop: 30,
                height: 50,   
                //backgroundColor: '#ff0', 

                //position: 'relative',
                //overflow: 'visible',
            },

            //TabBar下面显示一条线//安卓
            indicatorStyle : {
                height: 0,
            },

        },
        animationEnabled: false,
        swipeEnabled: false,
    }
)


const GoodsStack = StackNavigator({
    GoodsTabnav: {
        screen: GoodsTabnav,
    },
    GoodsDetailsPage: {
        screen: GoodsDetailsPage,
    },

}, {
        initialRouteName: 'GoodsTabnav',

        navigationOptions: ({ navigation }) => (
            Platform.OS === 'ios'?
            {
                headerStyle: {
                    marginTop: -20,
                },
            }:
            {}
        )
        
    });


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

export default GoodsStack;