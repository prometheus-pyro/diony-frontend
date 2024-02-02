import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { forwardRef } from "react";

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
    <nav className={`${className} flex h-12`}>
      <div>
        <Link href={"/profile"}>프로필</Link>
      </div>
      <div>
        <Link href={"/generation"}>음악생성</Link>
      </div>
      <div>
        <Link href={"/community"}>커뮤니티</Link>
      </div>
      <div>
        <Link href={"/"}>랜딩페이지</Link>
      </div>
      <div>
        <Link href={"/auth"}>로그인</Link>
      </div>
    </nav>
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
