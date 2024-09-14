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
  } = props;

  return (
    <div className="flex flex-col lg:flex-row  gap-4 lg:gap-9 ">
      <section
        className={clsx("flex w-full lg:w-1/2 ", {
          "lg:order-2": !swap,
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
              { "ml-auto": !!imageTextRight }
            )}
            style={{ backgroundColor: imageBgColor ?? "" }}
          >
            <section className="text-3xl font-sentient font-medium italic justify-center">
              {imageMainText ?? ""}
            </section>
            <section className="text-sm font-aventa !text-[#FFFFFFE5] justify-center lg:text-center">
              {imageSubText ?? ""}
            </section>
          </section>
        </section>
      </section>
      <section
        className={clsx(
          "text-[#072222] font-normal  font-aventa flex w-full lg:w-2/5 flex-col justify-center",
          { "lg:order-1": !!swap }
        )}
      >
        <h4 className="text-xl leading-[24.7px]">{title}</h4>
        <h5 className="text-base leading-[24.48px] pt-2">{content}</h5>
        <section className="pt-2">
          <PillButton color="yellow" buttonText="Learn More" />
        </section>
      </section>
    </div>
  );
}
