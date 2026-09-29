import { View , Text , StyleSheet} from 'react-native'
import { Stack , Link } from 'expo-router'


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen  options={{ title : "Opps! Not found" }}  />
      <View>
        <Link href="/">Go back home</Link>
      </View>
    </>
  )
}
