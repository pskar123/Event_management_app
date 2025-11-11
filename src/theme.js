import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#222222' },
    secondary: { main: '#c41230' },
    accent: { main: '#ffcc00' }
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 }
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } }
  }
})

export default theme
