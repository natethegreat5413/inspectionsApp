import { View, Button, Text, StyleSheet } from "react-native"

const MyJobsScreen = ({navigation}) => {
    return(
        <View style={styles.myJobsContainer}>
            <Text>My Jobs</Text>
            <Button onPress={() => navigation.navigate('AuthIntro')} title="Log out" style={styles.logout} />
        </View>
    )
}

export default MyJobsScreen


const styles = StyleSheet.create({
    myJobsContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    logout: {
        color: 'purple'
    }
})