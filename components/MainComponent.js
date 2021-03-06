import NetInfo from '@react-native-community/netinfo';
import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text, ScrollView, Image, Alert, ToastAndroid } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { connect } from 'react-redux';
import { fetchCampsites, fetchComments, fetchPromotions, fetchPartners } from '../redux/ActionCreators';
import About from './AboutComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Constants from 'expo-constants';
import Contact from './ContactComponents';
import Directory from './DirectoryComponent';
import Home from './HomeComponent';
import Favorites from './FavoritesComponent';
import Login from './LoginComponent';
import Reservation from './ReservationComponent';

const mapDispatchToProps = {
    fetchCampsites,
    fetchComments,
    fetchPromotions,
    fetchPartners  
};


// **************************************************************************
//                 Stack Navigator
// **************************************************************************

const DirectoryNavigator = createStackNavigator (
    {
        Directory: { 
            screen: Directory,
            navigationOptions: ( { navigation }) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        CampsiteInfo: { screen: CampsiteInfo }
    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: { 
            headerStyle: {
                backgroundColor: '#5637dd'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const LoginNavigator = createStackNavigator (
    {
        Login: { screen: Login },
    },
    {
        defaultNavigationOptions: ({navigation}) =>  ({ 
            headerStyle: {
                backgroundColor: '#5637dd'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                    name='sign-in'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
        })
    } 
);

const HomeNavigator = createStackNavigator (
    {
        Home: { screen: Home },
    },
    {
        defaultNavigationOptions: ({navigation}) =>  ({ 
            headerStyle: {
                backgroundColor: '#5637dd'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                    name='home'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
        })
    } 
);

const AboutNavigator = createStackNavigator (
    {
        About: { screen: About }
    },
    {
        defaultNavigationOptions: ({navigation}) =>  ({ 
            headerStyle: {
                backgroundColor: '#5637dd'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                    name='info-circle'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
        })
    }
);
const FavoritesNavigator = createStackNavigator (
    {
        Favorites: { screen: Favorites }
    },
    {
        defaultNavigationOptions: ({navigation}) =>  ({ 
            headerStyle: {
                backgroundColor: '#5637dd'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                    name='heart'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
        })
    }
);

const ContactNavigator = createStackNavigator (
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: ({navigation}) =>  ({ 
            headerStyle: {
                backgroundColor: '#5637dd'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                    name='address-card'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
        })
    }
)

const ReservationNavigator = createStackNavigator (
    {
        Reservation: { screen: Reservation }
    },
    {
        defaultNavigationOptions: ({navigation}) =>  ({ 
            headerStyle: {
                backgroundColor: '#5637dd'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                    name='tree'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
        })
    }
)

// **************************************************************************
//                 Drawer Navigator
// **************************************************************************

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={ { top: 'always', horizontal: 'never' } }
        >
            <View style={styles.drawerHeader}>
                <View style={ { flex: 1 } }>
                    <Image 
                        source={require('./images/logo.png')}
                        style={styles.drawerImage}
                    />
                </View>
                <View style={ { flex: 2 } }>
                    <Text style={styles.drawerHeaderText}>NuCamp</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
)

const MainNavigator = createDrawerNavigator(
    {
        Login: {
            screen: LoginNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name="sign-in"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name="home"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Directory: {
            screen: DirectoryNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name="list"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Reservation: {
            screen: ReservationNavigator,
            navigationOptions: {
                drawerLabel: 'Reserve Campsite',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name="tree"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Favorites: {
            screen: FavoritesNavigator,
            navigationOptions: {
                drawerLabel: 'My Favorites',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name="heart"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name="info-circle"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name="address-card"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }
    },
// **************************************************************************
//                 Custom Options
// **************************************************************************
    {
        initialRouteName: 'Home',
        drawerBackgroundColor: '#cec8ff',
        contentComponent: CustomDrawerContentComponent
    }
);

const AppNavigator = createAppContainer(MainNavigator)


// **************************************************************************
//                 Main Component
// **************************************************************************
class Main extends Component {

    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchPartners();
        this.props.fetchPromotions();
        this.showNetInfo();
        
        
        this.unsubscribeNetInfo = NetInfo.addEventListener(connectionInfo => {
            this.handleConnectivityChange(connectionInfo);
        })
    }
    
    showNetInfo = async () => {
            await NetInfo.fetch().then(connectionInfo => {
                (Platform.OS === 'ios')
                    ? Alert.alert('Initial Network Connectivity Type: ' + connectionInfo.type)
                    : ToastAndroid.show('Initial Network Connectivity Type: ' + connectionInfo.type, ToastAndroid.LONG)
            });
    }


    componentWillUnmount() {
        this.unsubscribeNetInfo();
    }

    handleConnectivityChange = connectionInfo => {
        let connectionMsg = 'You are now connected to an active network.'
        switch (connectionInfo.type) {
            case 'none':
                connectionMsg = 'No network connection is active.'
                break;
            case 'unknown':
                connectionMsg =  'The network connection state is now unknown.'
                break;
            case 'cellular':
                connectionMsg =  'You are now connected to a cellular network.'
                break;
            case 'wifi': 
                connectionMsg = 'You are now connected to a wifi network.'
                break;
        }
        (Platform.OS === 'ios')
            ? Alert.alert('Connection change:', connectionMsg)
            : ToastAndroid.show(connectionMsg, ToastAndroid.LONG)
    }

    render() {
        return (
            <View 
                style={{ 
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                    }}>
                <AppNavigator />
            </View>   
        );
    }
}

// **************************************************************************
//                 Stylesheet
// **************************************************************************
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#5637dd',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
})

export default connect(null, mapDispatchToProps)(Main);