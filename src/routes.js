import { IndexRoute, Route, BrowserRouter } from 'react-router'
import App from './components/App'
import Counter from './components/Counter'
import NotFound from './components/NotFound'
import HelloWorld from './components/HelloWorld'

export default () => (
    <BrowserRouter>
        <Route path="/" component={App}>
            <IndexRoute component={Counter}/>
            <Route path="hello-world" component={HelloWorld}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </BrowserRouter>
)

