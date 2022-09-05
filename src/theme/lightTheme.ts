import { AppTheme } from '.';

const colors = {
  ...AppTheme.colors,
  background: {
    topbar: '#f9f9f9',
    sidebar: '#f9f9f9',
    wrapper: 'white',
    code: 'rgb(30, 30, 30)',

  },
  font: 'black'
}

export const lightTheme = {
  ...AppTheme,
  colors
}