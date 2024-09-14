export interface IHeaderText {
  text: string;
}

export default function HeaderText({ text }: IHeaderText) {
  return <h3 className="text-sm leading-[20.02px]">{text}</h3>;
}

export function HeaderSubText({ text }: IHeaderText) {
  return (
    <h3 className="text-[#FFFFFFE5] leading-[22.88px] text-base">{text}</h3>
  );
}
