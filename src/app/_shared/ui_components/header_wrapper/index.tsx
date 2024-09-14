import clsx from "clsx";
import { ReactNode } from "react";

export interface IHeaderWrapper {
  children: ReactNode;
  className?: string;
}
// pb-[12em]
export default function HeaderWrapper({ children, className }: IHeaderWrapper) {
  return (
    <section
      className={clsx(
        'bg-[url("/hero_mobile.svg")] lg:bg-[url("/Hero-bg.svg")] bg-cover bg-no-repeat min-h-[400px] flex  lg:min-h-[700px] justify-center  ',
        className ?? ""
      )}
    >
      {children}
    </section>
  );
}
