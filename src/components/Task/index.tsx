import { Text, TouchableOpacity, View } from 'react-native'
import { Circle, CheckCircle, Trash } from 'phosphor-react-native'

import { THEME } from '../../theme'
import { styles } from './styles'

interface TaskProps {
  description: string
  done: boolean
  onToggleDone: () => void
  onRemove: () => void
}

export function Task({ description, done, onToggleDone, onRemove }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggleDone}>
        {done ? (
          <CheckCircle color={THEME.COLORS.PURPLE_DARK} weight="fill" />
        ) : (
          <Circle color={THEME.COLORS.BLUE} />
        )}
      </TouchableOpacity>

      <Text style={done ? styles.doneTaskDescription : styles.taskDescription}>
        {description}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Trash size={20} color={THEME.COLORS.GRAY_300} />
      </TouchableOpacity>
    </View>
  )
}
