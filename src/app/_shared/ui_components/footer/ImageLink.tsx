export interface IImageLink {
  img: string;
  href: string;
  alt?: string;
  scale?: boolean;
}

export default function ImageLink({ img, href, alt, scale }: IImageLink) {
  return (
    <a href={href} className={` ${scale ? "scale-75" : ""}`}>
      <img src={img} alt={alt ?? ""} />
    </a>
  );
}
