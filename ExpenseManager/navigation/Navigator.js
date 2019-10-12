import React from 'react'
import SplashScreen from '../components/screens/SplashScreen'
import MainScreen from '../components/screens/MainScreen'
import AddExpenseScreen from '../components/screens/AddExpenseScreen'
import { createStackNavigator,
    createAppContainer,
} from 'react-navigation'


const RootStack = createStackNavigator({
    SplashScreen: { screen: SplashScreen },
    MainScreen: { screen: MainScreen },
    AddExpenseScreen: { screen: AddExpenseScreen },
},{
    initialRouteName: 'SplashScreen',
    headerMode: 'none'

})


const App = createAppContainer(RootStack)

export default App