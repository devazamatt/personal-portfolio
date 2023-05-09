const themeSettings = (mode) => {
  return {
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          body: {
            transition: `background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`
          }
        })
      },
      MuiLink: {
        defaultProps: {
          underline: 'none'
        }
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
      h1: {
        fontFamily: ['Lora', 'serif'].join(','),
        fontWeight: 500,
        fontSize: '1.5rem',
        lineHeight: 'initial',
        letterSpacing: 'initial'
      },
      h2: {
        fontFamily: ['Lora', 'serif'].join(','),
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 'initial',
        letterSpacing: 'initial'
      },
      h3: {
        fontFamily: ['Lora', 'serif'].join(','),
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: 'initial',
        letterSpacing: 'initial'
      },
      body1: {
        fontFamily: ['Roboto', 'sans-serif'].join(','),
        fontWeight: 400,
        fontSize: '0.938rem',
        lineHeight: '1.5',
        letterSpacing: 'initial'
      },
      body2: {
        fontFamily: ['Lora', 'serif'].join(','),
        fontWeight: 500,
        fontSize: '0.938rem',
        lineHeight: 'initial',
        letterSpacing: 'initial'
      }
    }
  }
}

export default themeSettings
