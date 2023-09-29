import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  created: {
    fontSize: 14,
    color: THEME.COLORS.BLUE,
    fontWeight: '700',
  },

  done: {
    fontSize: 14,
    color: THEME.COLORS.PURPLE,
    fontWeight: '700',
  },

  counter: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 9,
    overflow: 'hidden',

    fontSize: 12,
    fontWeight: '700',
    color: THEME.COLORS.GRAY_200,
    backgroundColor: THEME.COLORS.GRAY_400,
  },
})
