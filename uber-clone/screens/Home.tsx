import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Main from '../components/home/Main'
import Menu from '../components/home/Menu'
import Services from '../components/services/Services'
import Profile from '../components/profile/Profile'
import Activity from '../components/activity/Activity'

const Home = () => {
    const [activeTab, setActiveTab] = React.useState('home' as string)
    return (
        <SafeAreaView style={styles.container}>
            {
                activeTab === 'home' && <Main />
            }
            {
                activeTab === 'services' && <Services />
            }
            {
                activeTab === 'activity' && <Activity />
            }
            {
                activeTab === 'profile' && <Profile />    
            }
            <Menu activeTab={activeTab} setActiveTab={setActiveTab}/>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'space-between', // Add this line
    }
})