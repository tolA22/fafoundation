export interface IHomeSection {
  title: string;
  description: string;
}

export default function HomeSection(props: IHomeSection) {
  const { title, description } = props;
  return (
    <section className="text-center lg:text-left text-[#072222]">
      <h6 className="font-normal text-sm leading-[20.02px]  ">{title}</h6>
      <h2 className="text-3xl font-medium leading-[39.6px]  italic pt-2">
        {description}
      </h2>
    </section>
  );
}
