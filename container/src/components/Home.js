import { mount } from "home/Home";
import React, { useRef, useEffect } from "react";

// can use this exact same approach with just about any
// other framework that we ever use inside of a child

// application, as long as that framework can render itself
// or render its app into some arbitrary HTML element.

// Should probably be able to use this kind of pattern
// with any other library or framework.

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
