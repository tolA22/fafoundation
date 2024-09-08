import PillButton from "../button";

export interface IHomeCard {
  title?: string;
  content?: string;
  imageUrl?: string;
  action?: () => void;
}

export default function HomeCard(props: IHomeCard) {
  const { title, content, imageUrl, action } = props;
  return (
    <div>
      <section></section>
      <section className="text-[#072222] font-normal">
        <h4 className="text-xl leading-[24.7px]">{title}</h4>
        <h5 className="text-base leading-[24.48px] pt-2">{content}</h5>
      </section>
      <section className="pt-2">
        <PillButton color="yellow" buttonText="Learn More" />
      </section>
    </div>
  );
}
