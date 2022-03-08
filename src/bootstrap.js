import * as Font from 'expo-font'

export async function bootstrap(){
    await Font.loadAsync({
        'Raleway-bold': require('../assets/fonts/Raleway-Bold.ttf'),
        'Raleway-light': require('../assets/fonts/Raleway-Light.ttf'),
        'Raleway-medium': require('../assets/fonts/Raleway-Medium.ttf'),
        'Raleway-regular': require('../assets/fonts/Raleway-Regular.ttf'),
        'Raleway-thin': require('../assets/fonts/Raleway-Thin.ttf'),
    })
}