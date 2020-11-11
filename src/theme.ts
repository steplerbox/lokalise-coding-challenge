const theme = {
  palette: {
    primary: {
      main: '#5489dc',
      light: '#80acee',
      dark: '#3c64c8'
    },
    secondary: {
      main: '#888888',
      light: '#CCCCCC',
      dark: '#777777'
    },
    success: {
      main: '#5489DC'
    },
    error: {
      main: '#DB1F35'
    },
    warning: {
      main: '#FFC500'
    },
    text: {
      primary: '#FFFFFF'
    }
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  typography: {
    h1: {
      'font-weight': 'normal',
      'font-size': '21px'
    },
    h2: {
      'font-weight': 'bold',
      'font-size': '13px'
    },
    caption: {
      'font-weight': 'normal',
      'font-size': '10px',
      'text-transform': 'uppercase'
    },
    button: {
      'font-weight': 'bold',
      'font-size': '12px',
      'line-height': '12px'
    }
  }
};

export default theme;
