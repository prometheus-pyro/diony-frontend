import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { forwardRef } from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const ForwardRef = forwardRef<HTMLDivElement, Props>(
  ({ children, className }: Props, ref) => {
    return (
      <div className={`flex ${className}`} ref={ref}>
        {children}
      </div>
    );
  }
);

ForwardRef.displayName = "ForwardRef";

const SideNav = ({ className }: Props) => {
  return (
    <nav className={`${className}`}>
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
  SideNav,
  Content,
});

export default Background;
