import { View, Text } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyJobsScreen, NewJobsScreen, Settings } from '../../Screens'



const Tab = createBottomTabNavigator()

const MainScreen = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="New Jobs" component={NewJobsScreen}  options={{headerShown: false}}/>
            <Tab.Screen name="My Jobs" component={MyJobsScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Settings" component={Settings} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}

export default MainScreen