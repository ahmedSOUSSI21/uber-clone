import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Main from '../components/home/Main'
import Menu from '../components/home/Menu'
import Services from '../components/services/Services'
import Profile from '../components/profile/Profile'
import Activity from '../components/activity/Activity'
import Splash from '../components/splash/Splash'

const tabData = (setActiveTab: Function) : any => {
    return {
        "home": <Main setActiveTab={setActiveTab} />,
        "services": <Services />,
        "activity": <Activity />,
        "profile": <Profile />,
        "splash": <Splash setActiveTab={setActiveTab} nextScreen='home'/>
    }
}

const Home = () => {
    const [activeTab, setActiveTab] = React.useState('splash' as string)
    return (
        <SafeAreaView style={styles.container}>
            {tabData(setActiveTab)[activeTab]}
            {activeTab != "splash" && <Menu activeTab={activeTab} setActiveTab={setActiveTab} />}
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'space-between',
    }
})