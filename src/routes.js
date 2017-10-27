import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import Counter from './components/Counter'
import NotFound from './components/NotFound'
import HelloWorld from './components/HelloWorld'

export default () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={Counter}/>
                <Route path="/hello-world" component={HelloWorld}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </App>
    </BrowserRouter>
)
