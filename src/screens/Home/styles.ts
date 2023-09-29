import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  header: {
    height: 173,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GRAY_700,
  },

  main: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: THEME.COLORS.GRAY_600,
  },

  form: {
    marginTop: -26,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  input: {
    flex: 1,
    height: 54,
    padding: 16,
    borderColor: THEME.COLORS.GRAY_700,
    borderWidth: 1,
    borderRadius: 6,

    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.GRAY_100,
    backgroundColor: THEME.COLORS.GRAY_500,
  },

  addButton: {
    height: 52,
    width: 52,
    borderRadius: 6,

    justifyContent: 'center',
    alignItems: 'center',

    color: THEME.COLORS.GRAY_100,
    backgroundColor: THEME.COLORS.BLUE_DARK,
  },

  disabledAddButton: {
    height: 52,
    width: 52,
    borderRadius: 6,

    justifyContent: 'center',
    alignItems: 'center',

    color: THEME.COLORS.GRAY_100,
    backgroundColor: THEME.COLORS.GRAY_300,
  },

  summary: {
    marginTop: 32,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },

  progressBar: {
    height: 8,
    width: '100%',
    marginVertical: 20,
    borderRadius: 4,
    backgroundColor: THEME.COLORS.GRAY_500,
  },

  progressBarThumb: {
    height: 8,
    borderRadius: 4,
  },
})
