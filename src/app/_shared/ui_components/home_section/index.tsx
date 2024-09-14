export interface IHomeSection {
  title: string;
  description: string;
}

export default function HomeSection(props: IHomeSection) {
  const { title, description } = props;
  return (
    <section className="lg:mt-24 text-center lg:text-left text-[#072222]">
      <h6 className="lg:text-center font-normal text-sm leading-[20.02px]  ">{title}</h6>
      <h2 className=" lg:text-center lg:max-w-[476px] mx-auto  text-3xl font-medium leading-[39.6px]  italic pt-2">
        {description}
      </h2>
    </section>
  );
}
