import {Routes , Route} from 'react-router-dom';
import PageNotFound from '../pages/Common/PageNotFound';
import Layout from '../pages/Layout/Outlet/Layout';
import { ALL, BASE, USER_SIGNUP } from './CONSTANTS';
const RouterConfig = () =>{
    return(
        <Routes>
            <Route path={BASE} element={<Layout />}>
                <Route path={ALL} element={<PageNotFound />}/>
            </Route>
        </Routes>
    )
}
export default RouterConfig;