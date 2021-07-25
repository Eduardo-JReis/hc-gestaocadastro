import {Route, Switch} from 'react-router-dom';
import { Main } from './components/Main';
import { Products } from './components/Products';
import { Users } from './components/Users';

export function Router(){
    return (
        <Switch>
            <Route path="/users" component={Users} />
            <Route path='/products' component={Products}/>
            <Route path='/' exact component={Main} />
        </Switch>
    );
}