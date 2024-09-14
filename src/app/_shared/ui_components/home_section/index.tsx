import clsx from "clsx";

export interface IHomeSection {
  title: string;
  description: string;
  center?: boolean;
  titleClassName?: string;
  descriptionClassName?: string;
  sectionClassName?: string;
  descriptionHeaderStyle?: boolean;
  header?: boolean;
}

export default function HomeSection(props: IHomeSection) {
  const {
    title,
    description,
    center,
    sectionClassName,
    titleClassName,
    descriptionClassName,
    descriptionHeaderStyle,
    header,
  } = props;
  return (
    <section
      className={clsx(
        "text-center  text-[#072222]",
        {
          "lg:text-left": !center,
        },
        sectionClassName
      )}
    >
      <h6
        className={clsx(
          "font-normal text-sm leading-[20.02px] font-aventa_Medium",
          titleClassName ?? ""
        )}
      >
        {title}
      </h6>
      <h2
        className={clsx(
          " font-medium  font-sentient_italic pt-2 ",
          {
            "lg:w-[33%]": !center,
            "text-[36px] leading-[44.64px] lg:text-[60px] lg:leading-[62.4px]":
              !!descriptionHeaderStyle,
            "text-3xl leading-[39.6px]": !descriptionHeaderStyle,
            "lg:w-[45%] lg:mx-auto": center && !header,
          },
          descriptionClassName ?? ""
        )}
      >
        {description}
      </h2>
    </section>
  );
}
