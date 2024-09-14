import clsx from "clsx";
import PillButton from "../button";

export interface IHomeCard {
  title?: string;
  content?: string;
  imageUrl?: string;
  action?: () => void;
  swap?: boolean;
  imageBgColor?: string;
  imageMainText?: string;
  imageSubText?: string;
  imageTextBottom?: boolean;
  imageTextRight?: boolean;
  hideButton?: boolean;
  hasBorder?: boolean;
  colMode?: boolean;
  className?: string;
}

export default function HomeCard(props: IHomeCard) {
  const {
    title,
    content,
    imageUrl,
    action,
    swap,
    imageBgColor,
    imageMainText,
    imageSubText,
    imageTextBottom,
    imageTextRight,
    hideButton,
    hasBorder,
    colMode,
    className,
  } = props;

  return (
    <div
      className={clsx(
        "flex flex-col   gap-4 lg:gap-9 ",
        {
          "!lg:flex-col": colMode,
          "lg:flex-row": !colMode,
          "!border-[0.57px] border-[#DBDBDB] p-3 rounded-2xl": hasBorder,
        },
        className ?? ""
      )}
    >
      <section
        className={clsx("flex w-full  ", {
          "lg:order-2": !swap,
          "!w-full": colMode,
          "lg:w-1/2": !colMode,
        })}
      >
        <section
          className={clsx(
            " bg-cover w-full rounded-2xl min-h-[300px] p-2 text-white",
            { "content-end": !!imageTextBottom }
          )}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <section
            className={clsx(
              "w-3/4 lg:w-1/4 rounded-2xl flex lg:flex-col items-center p-2 gap-4 lg:gap-1",
              {
                "ml-auto": !!imageTextRight,
                "!w-3/4 !flex-row !gap-4": colMode,
              }
            )}
            style={{ backgroundColor: imageBgColor ?? "" }}
          >
            <section className="text-3xl font-sentient_italic font-medium  justify-center">
              {imageMainText ?? ""}
            </section>
            <section
              className={clsx(
                "text-sm font-aventa !text-[#FFFFFFE5] justify-center ",
                {
                  "lg:text-center": !colMode,
                }
              )}
            >
              {imageSubText ?? ""}
            </section>
          </section>
        </section>
      </section>
      <section
        className={clsx(
          "text-[#072222] font-normal  font-aventa flex w-full  flex-col justify-center",
          { "lg:order-1": !!swap, "!w-full ": colMode, "lg:w-2/5": !colMode }
        )}
      >
        <h4 className="text-xl leading-[24.7px] font-aventa_Semibold">
          {title}
        </h4>
        <h5 className="text-base leading-[24.48px] pt-2 ">{content}</h5>
        {!hideButton && (
          <section className="pt-2">
            <PillButton color="yellow" buttonText="Learn More" />
          </section>
        )}
      </section>
    </div>
  );
}
