const theme = {
  palette: {
    primary: {
      main: '#5489dc',
      light: '#5489dc',
      dark: '#5489DC'
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
    background: {
      body: '#FFF'
    },
    text: {
      primary: '#FFF'
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
    body: {
      'font-weight': 'normal',
      'font-size': '12px'
    },
    button: {
      'font-weight': 'bold',
      'font-size': '12px'
    }
  }
};

export default theme;
