import { Text, View } from 'react-native'
import { styles } from './styles'

interface StatisticProps {
  variant: 'created' | 'done'
  counter: number
}

export function Statistic({ variant, counter }: StatisticProps) {
  return (
    <View style={styles.container}>
      {variant === 'created' ? (
        <Text style={styles.created}>Criadas</Text>
      ) : (
        <Text style={styles.done}>Concluídas</Text>
      )}
      <Text style={styles.counter}>{counter}</Text>
    </View>
  )
}
