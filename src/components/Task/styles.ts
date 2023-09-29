import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    marginBottom: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_400,
    borderRadius: 8,

    backgroundColor: THEME.COLORS.GRAY_500,
  },

  taskDescription: {
    flex: 1,
    fontSize: 14,
    lineHeight: 19.6,
    color: THEME.COLORS.GRAY_100,
  },

  doneTaskDescription: {
    flex: 1,
    fontSize: 14,
    lineHeight: 19.6,
    textDecorationLine: 'line-through',
    color: THEME.COLORS.GRAY_300,
  },
})
