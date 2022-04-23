import React, { ReactNode } from "react";
import "./wrapper.scss";

interface IWrrapper {
  children: ReactNode;
}

const Wrapper = (props: IWrrapper) => {
  return (
    <section className='wrapper'>
      {props.children}
    </section>
  );
}

export default Wrapper;