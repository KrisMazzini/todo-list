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

    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    lineHeight: 19.6,
    color: THEME.COLORS.GRAY_300,
  },

  regularText: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    lineHeight: 19.6,
    color: THEME.COLORS.GRAY_300,
  },
})
