import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 48,
    borderTopColor: THEME.COLORS.GRAY_400,
    borderTopWidth: 1,
  },

  boldText: {
    marginTop: 16,

    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19.6,
    color: THEME.COLORS.GRAY_300,
  },

  regularText: {
    fontSize: 14,
    lineHeight: 19.6,
    color: THEME.COLORS.GRAY_300,
  },
})
