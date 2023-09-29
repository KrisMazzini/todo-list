import { ClipboardText } from 'phosphor-react-native'
import { Text, View } from 'react-native'

import { THEME } from '../../theme'
import { styles } from './styles'

export function EmptyList() {
  return (
    <View style={styles.container}>
      <ClipboardText size={56} color={THEME.COLORS.GRAY_400} />

      <Text style={styles.boldText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.regularText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
