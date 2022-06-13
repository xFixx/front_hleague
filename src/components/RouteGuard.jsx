import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

function hasJWT() {
  let flag

  //check user has JWT token
  (localStorage.getItem('access') ? (flag = true) : (flag = false)) ||
    (sessionStorage.getItem('access') ? (flag = true) : (flag = false))

  return flag
}

const RouteGuard = ({ component: Component, ...rest }) => {
  const router = useHistory();

  return (
    <Route
      {...rest}
      render={(props) =>
        hasJWT()
        ? (<Component {...props} />)
        : (
          // <Redirect to={{ pathname: `/login` }} />
          router.push('/login')
        )
      }
    />
  )
}

export default RouteGuard
