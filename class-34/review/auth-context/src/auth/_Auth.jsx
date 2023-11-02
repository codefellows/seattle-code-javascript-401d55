import React from 'react';
import { When } from 'react-if';

import { LoginContext } from './_Context';

function Login(props) {

  let context = React.useContext(LoginContext);

  const isLoggedIn = context.loggedIn;
  const canDo = props.capability ? context.can(props.capability) : true;
  const okToRender = isLoggedIn && canDo;

  return (
    <When condition={okToRender}>
      {props.children}
    </When>
  );
}

export default Login;
