import { ThemeProvider } from './context/Theme'
import Layout from './components/Layout'
import Home from './routes/Home'
import Form from './routes/Form'
import PrivacyPolicy from './routes/PrivacyPolicy'
import { GlobalStyle } from './styles/globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <ThemeProvider>
            <GlobalStyle />
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/form">
                            <Form />
                        </Route>
                        <Route path="/policy">
                            <PrivacyPolicy />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider>
    )
}

export default App
