import { Dimensions } from 'react-native';
import React, { useState } from 'react';
import { TabView, TabBar } from 'react-native-tab-view';
import convert from 'convert-units';

const measures = convert().measures();

const HeaderView = ({ renderScene }) => {
    const [index, setIndex] = useState(0);
    const [routes] = useState(measures.map(m => ({ key: m, title: unCamelCase(m) })));

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: Dimensions.get('window').width }}
            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    scrollEnabled
                    tabStyle={{ width: 'auto' }}
                    style={{ backgroundColor: '#052F5F' }}
                    indicatorStyle={{ backgroundColor: 'white' }}
                >
                </TabBar>
            )}
        >
        </TabView>
    )
}

const unCamelCase = (value) => {
    return value.replace(/([A-Z])/g, ' $1');
}


export default HeaderView;