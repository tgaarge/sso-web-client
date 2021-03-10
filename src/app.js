import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import config from './config.json'

//Styles
import './assets/styles/main.scss'

//Router
import Router from './routes/router';


//Snackbar
import SnackBar from './components/common/snackBar'

//Redux&Redux-thunk&middlaware
import { compose, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import Reducers from './redux/reducers'
import thunk from 'redux-thunk';

const allEnhancers = compose(
    applyMiddleware(thunk)
);
var store = createStore(Reducers, {}, allEnhancers);

const outerTheme = createMuiTheme({
    palette: {
        primary: {
            main: config.theme.primaryColor,
        }
    },
});

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <ThemeProvider theme={outerTheme}>
                        <Router />
                    </ThemeProvider>
                    <SnackBar />
                </div>
            </Provider>
        )
    }
}
export default App