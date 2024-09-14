import clsx from "clsx";

export interface IHomeSection {
  title: string;
  description: string;
  center?: boolean;
}

export default function HomeSection(props: IHomeSection) {
  const { title, description, center } = props;
  return (
<<<<<<< HEAD
    <section className="lg:mt-24 text-center lg:text-left text-[#072222]">
      <h6 className="lg:text-center font-normal text-sm leading-[20.02px]  ">{title}</h6>
      <h2 className=" lg:text-center lg:max-w-[476px] mx-auto  text-3xl font-medium leading-[39.6px]  italic pt-2">
=======
    <section
      className={clsx("text-center  text-[#072222]", {
        "lg:text-left": !center,
      })}
    >
      <h6 className="font-normal text-sm leading-[20.02px]  ">{title}</h6>
      <h2
        className={clsx(
          "text-3xl font-medium leading-[39.6px] font-sentient  italic pt-2 ",
          {
            "lg:w-[33%]": !center,
          }
        )}
      >
>>>>>>> 1887159 (chore : home page)
        {description}
      </h2>
    </section>
  );
}
