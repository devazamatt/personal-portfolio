const themeSettings = (mode) => {
  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 900,
        lg: 1200,
        xl: 1536
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          body: {
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              width: '0.6rem',
              borderRadius: '0.5rem',
              backgroundColor:
                theme.palette.mode === 'light'
                  ? 'hsl(207, 4%, 75%)'
                  : 'hsl(207, 4%, 15%)'
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              borderRadius: '0.5rem',
              backgroundColor:
                theme.palette.mode === 'light'
                  ? 'hsl(207, 4%, 65%)'
                  : 'hsl(207, 4%, 25%)'
            },
            '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
              {
                backgroundColor:
                  theme.palette.mode === 'light'
                    ? 'hsl(207, 4%, 55%)'
                    : 'hsl(207, 4%, 35%)'
              },
            transition: `background-color 0.4s`
          }
        })
      }
    },
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: 'hsl(207, 65%, 65%)',
              light: 'hsl(207, 4%, 56%)'
            },
            text: {
              primary: 'hsl(207, 4%, 65%)',
              secondary: 'hsl(207, 4%, 56%)',
              title: 'hsl(207, 4%, 95%)'
            },
            background: {
              paper: 'hsl(207, 4%, 12%)',
              default: 'hsl(207, 4%, 10%)'
            }
          }
        : {
            primary: {
              main: 'hsl(207, 65%, 65%)',
              light: 'hsl(207, 4%, 56%)'
            },
            text: {
              primary: 'hsl(207, 4%, 28%)',
              secondary: 'hsl(207, 4%, 56%)',
              title: 'hsl(207, 4%, 16%)'
            },
            background: {
              paper: 'hsl(207, 4%, 95%)',
              default: 'hsl(207, 4%, 99%)'
            }
          })
    },
    typography: {
      body1: {
        fontFamily: ['Roboto', 'sans-serif'].join(','),
        fontWeight: 400,
        fontSize: '0.938rem',
        lineHeight: 'initial',
        letterSpacing: 'initial'
      }
    }
  }
}

export default themeSettings
