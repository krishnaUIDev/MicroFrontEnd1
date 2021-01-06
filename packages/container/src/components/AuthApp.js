import React, { useRef, useEffect } from "react";
import { mount } from "auths/AuthsApp";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathName } = history.location;
        if (pathName !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: () => {
        console.log("user sigined in");
      },
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
