import React, {Component} from 'react';
import {
    Platform,
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View
}
from
'react-native';
import PropTypes from 'prop-types';

export default class TabTop extends Component {

    static propType = {
        goToPage    : PropTypes.func,
        activeTab   : PropTypes.number,
        tabs        : PropTypes.array,

        tabNames    : PropTypes.array,
        tabIconNames: PropTypes.array,
        selectedTabIconNames: PropTypes.array
    };

    componentDidMount() {
        this.props.scrollValue.addListener(this.setAnimationValue);
    }

    setAnimationValue({value}) {
        console.log(value);
    }

    render() {
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => {
                    let color = this.props.activeTab === i ? '#2D9BFD' : '#6A6A6A';
                    let _tabName = this.props.activeTab === i ? <View style={styles._under}></View> : <View style={styles._noUnder}></View>;
                    //let icon = this.props.activeTab == i ? this.props.selectedTabIconNames[i] : this.props.tabIconNames[i];
                    return (
                        <TouchableOpacity
                            key={i}
                            activeOpacity={0.8}
                            style={styles.tab}
                            onPress={()=>this.props.goToPage(i)}>
                            <View style={styles.tabItem}>
                                {/* <Image
                                    style={styles.icon}
                                    source={icon}/> */}
                                <Text style={{color: color, fontSize: 16, fontWeight: '700' }}>
                                    {this.props.tabNames[i]}
                                </Text>
                                {_tabName}

                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    tabs: {
        flexDirection: 'row',
        height: 49,
        //borderTopColor: '#d9d9d9',
        //borderTopWidth:2
        //flex: 1,
        marginTop: Platform.OS === 'ios' ?  -20 : 20,
        //backgroundColor: '#0ff',
    },
    tab: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        marginLeft: 20,
    },
    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',

        // borderRadius: 25,
        // borderBottomWidth:5,
        // borderBottomColor: '#2D9BFD',
    },
    // icon: {
    //     width: 26,
    //     height: 26,
    //     marginBottom: 2
    // },
    _under: {
        width: 25,
        height: 0,
        marginTop:5,
        borderTopWidth:2,
        borderBottomWidth:2,
        borderRadius: 4,
        borderTopColor: '#2D9BFD',
        borderBottomColor: '#2D9BFD',
    },
    _noUnder: {
        width: 25,
        height: 0,
        marginTop:5,
        borderTopWidth:2,
        borderBottomWidth:2,
        borderRadius: 4,
        borderTopColor: '#2D9BFD00',
        borderBottomColor: '#2D9BFD00',
    }
});