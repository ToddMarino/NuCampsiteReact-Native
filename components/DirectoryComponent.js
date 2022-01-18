import React, { Component } from 'react'
import { CAMPSITES } from '../shared/campsites'
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

class Directory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            campsites: CAMPSITES
        }
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const { navigate } = this.props.navigation
        const renderDirectoryItem = ( {item} ) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={(item.description)}
                    onPress= { () => navigate('CampsiteInfo', { campsiteID: item.id} ) }
                    // LeftAvatar requires an object. 
                    // First braces to embed javascript. 
                    // Second to define the object literal
                    leftAvatar={ { source: require('./images/react-lake.jpg')} }
                />
            );
        };
    
        return (
            <FlatList
                data={this.state.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}

export default Directory