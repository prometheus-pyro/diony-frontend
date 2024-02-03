import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { forwardRef } from "react";
import "./temp.css";

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const ForwardRef = forwardRef<HTMLDivElement, Props>(
  ({ children, className, style }: Props, ref) => {
    return (
      <div style={style} className={`flex flex-col ${className}`} ref={ref}>
        {children}
      </div>
    );
  }
);

ForwardRef.displayName = "ForwardRef";

const Header = ({ className }: Props) => {
  return (
    // <nav className={`${className} flex h-12`}>
    //   {/* <div> */}
    //     {/* <Link href={"/profile"}>Profile</Link> */}
    //   {/* </div> */}
    //   {/* <div>
    //     <Link href={"/generation"}>음악생성</Link>
    //   </div> */}
    //   <div>
    //     <Link href={"/community"}>Community</Link>
    //   </div>
    //   <div>
    //     <Link href={"/"}>Home</Link>
    //   </div>
    //   <div>
    //     <Link href={"/auth"}>Sign In</Link>
    //   </div>
    // </nav>
    <div className="header">
      <div className="contents">
        <div className="left">
          <img className="logo" src="logo.png" alt="" />
        </div>
        <div className="right">
          <ul className="menu">
            <li className="location.href='community.html'">COMMUNITY</li>
            <li className="location.href='generator.html'">GENERATOR</li>
            <li className="location.href='login.html'">LOGIN</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Content = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>;
};

const Background = Object.assign(ForwardRef, {
  Header,
  Content,
});

export default Background;
