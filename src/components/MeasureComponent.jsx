import { useState, useLayoutEffect, useRef } from "react";

function SmallScreen() {
  return <h1>I am a small screen</h1>;
}

function BigScreen() {
  return <h1>I am a big screen</h1>;
}

function MeasureComponent() {
  const divRef = useRef();
  const [size, setSize] = useState(0);

  useLayoutEffect(() => {
    setSize(divRef.current.getBoundingClientRect().width);
  }, []);

  return (
    <div ref={divRef}>
      Width: {size}px
      {size > 500 ? <BigScreen /> : <SmallScreen />}
    </div>
  );
}

export default MeasureComponent;
