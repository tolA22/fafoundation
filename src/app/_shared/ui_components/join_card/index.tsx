import Image from "next/image";
import PillButton from "../button";

interface IJoinCard {
  title: string;
  description: string;
  actionText: string;
  action?: () => void;
  actionColor: string;
  img: string;
}

export default function JoinCard(props: IJoinCard) {
  const { title, description, actionText, action, img, actionColor } = props;

  return (
    <div className="flex flex-col gap-y-5 rounded-3xl bg-white px-4 py-6">
      <section>
        <h3 className="font-normal text-2xl text-[#072222] leading-[29.64px] ">
          {title}
        </h3>
        <h5 className="font-normal text-[#072222E5] leading-[21.42px]  text-sm pt-2">
          {description}
        </h5>
      </section>
      <section className="">
        <PillButton buttonText={actionText} color={actionColor} />
      </section>
      <Image
        src={img!}
        alt="Vercel Logo"
        className="dark:invert w-full rounded"
        width={100}
        height={24}
        priority
      />
    </div>
  );
}
