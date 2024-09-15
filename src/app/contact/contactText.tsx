export interface IContactText {
  text: string;
}


export default function ContactText({ text }: IContactText) {
  return (
    <p className="font-aventa_Semibold font-normal text-[#072222] text-[24px] lg:text-[32px] trailing-[-2%] leading-[31.68px] lg:leading-[42.24px] ">
      {text}
    </p>
  );
}

export function ContactSubText({ text }: IContactText) {
  return (
    <h3 className="font-aventa_Medium text-[16px] font-normal text-[#072222CC]">
      {text}
    </h3>
  );
}

