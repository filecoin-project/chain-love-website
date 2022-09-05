import { AppTheme } from '.';

const colors = {
  ...AppTheme.colors,
  background: {
    topbar: 'rgb(33, 36, 41)',
    sidebar: 'rgb(33, 36, 41)',
    wrapper: 'rgb(25, 27, 31)',
    code: 'rgb(52, 52, 52)',
  },
  font: 'white'
}

export const darkTheme = {
  ...AppTheme,
  colors
}