import { TouchableOpacity, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import Title from '../../components/Title'

export default function Categorie() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <Title texto="Categorie" />
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
            <Text>Home</Text>
        </TouchableOpacity>
    </View>
  )
}