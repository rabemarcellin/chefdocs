import { BrowserRouter, Route, Routes } from "react-router";
import routes from '../routes';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        {
            routes.map(route => (
                route.children ? (
                    <Route path={route.path} element={route.element}>
                        {route.children.map(childrenRoute => (
                    <Route path={childrenRoute.path} element={childrenRoute.element} />
                ))}

                    </Route>
                ): (
                    <Route path={route.path} element={route.element} />
                )
            ))
        }
    </Routes>
    </BrowserRouter>
  )
}

export default App