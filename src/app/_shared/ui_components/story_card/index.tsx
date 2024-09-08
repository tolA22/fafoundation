import Image from "next/image";

interface IStoryCard {
  content: string;
  fullName?: string;
  profession?: string;
}

export default function StoryCard({
  content,
  fullName,
  profession,
}: IStoryCard) {
  return (
    <div className="grid min-h-[300px] min-w-[290px] bg-[#EBF4E1] rounded-xl p-4 gap-y-16 text-[#072222]">
      <h3>{content}</h3>
      <section className="flex gap-x-4 items-center 	">
        <Image
          src="/tunde.svg"
          alt="User Profile Logo"
          className="dark:invert flex h-[60px] w-[60px] rounded-full border border-solid"
          width={60}
          height={40}
          priority
        />
        <section className="font-normal  ">
          <h3 className=" text-[15.39px] leading-[20.31px] ">{fullName}</h3>
          <h5 className="text-[11.97px] leading-[15.8px] text-[#072222B2]">
            {profession}
          </h5>
        </section>
      </section>
    </div>
  );
}
