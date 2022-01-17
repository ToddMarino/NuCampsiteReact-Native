import React from 'react'
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

function Directory(props) {

    const renderDirectoryItem = ( {item} ) => {
        return (
            <ListItem
                title={item.name}
                subtitle={(item.description)}
                onPress= { () => props.onPress(item.id)}
                // LeftAvatar requires an object. 
                // First braces to embed javascript. 
                // Second to define the object literal
                leftAvatar={ { source: require('./images/react-lake.jpg')} }
            />
        );
    };

    return (
        <FlatList
            data={props.campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    )

}

export default Directory