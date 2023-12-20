import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

type MenuProps = {
    activeTab: string,
    setActiveTab: Function,
}

const Menu: React.FC<MenuProps> = ({ activeTab, setActiveTab }) => {
    return (
        <View style={styles.buttomMenu}>
            <TouchableOpacity
                onPress={() => setActiveTab('home')}
                style={[
                    styles.touchable,
                    activeTab === 'home' && styles.activeTouchable,
                ]}
            >
                <Image source={require("../../assets/home.png")} style={styles.icon} />
                <Text style={styles.text}>Accueil</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setActiveTab('services')}
                style={[
                    styles.touchable,
                    activeTab === 'services' && styles.activeTouchable,
                ]}
            >
                <Image source={require("../../assets/info.png")} style={styles.icon} />
                <Text style={styles.text}>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setActiveTab('activity')}
                style={[
                    styles.touchable,
                    activeTab === 'activity' && styles.activeTouchable,
                ]}
            >
                <Image source={require("../../assets/activity.png")} style={styles.icon} />
                <Text style={styles.text}>Activités</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setActiveTab('profile')}
                style={[
                    styles.touchable,
                    activeTab === 'profile' && styles.activeTouchable,
                ]}
            >
                <Image source={require("../../assets/profile.png")} style={styles.icon} />
                <Text style={styles.text}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    buttomMenu: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 30,
        marginHorizontal: 20,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon:{
        width: 25, 
        height: 25, 
        marginBottom: 4
    },
    touchable: {
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
    },
    activeTouchable: {
        backgroundColor: 'gray',
    },
    text:{ 
        color: '#fff', 
        fontWeight: 'bold', 
        textAlign:"center", 
        fontSize: 10
    }
})