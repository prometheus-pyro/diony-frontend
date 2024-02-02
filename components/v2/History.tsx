import { forwardRef } from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

interface HistoryChildProps extends Props {
  title?: string;
  prompt?: string;
  imgSrc?: string;
  musicSrc?: string;
}

const ForwardRef = forwardRef<HTMLDivElement, Props>(
  ({ children, className, style }: Props, ref) => {
    return (
      <div style={style} className={`${className}`} ref={ref}>
        {children}
      </div>
    );
  }
);

ForwardRef.displayName = "ForwardRef";

const HistoryElement = ({
  className,
  children,
  imgSrc,
  musicSrc,
  prompt,
  style,
  title,
}: HistoryChildProps) => {
  return (
    <div className={`${className}`}>
      <div>HistoryElement</div>
    </div>
  );
};

const HistoryCurrent = ({
  className,
  children,
  imgSrc,
  musicSrc,
  prompt,
  style,
  title,
}: HistoryChildProps) => {
  return (
    <div className={`${className}`}>
      <div>{}</div>
    </div>
  );
};

const History = Object.assign(ForwardRef, {
  HistoryElement,
  HistoryCurrent,
});

export default History;
