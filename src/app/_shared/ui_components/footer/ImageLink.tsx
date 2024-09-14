export interface IImageLink {
  img: string;
  href: string;
  alt?: string;
}

export default function ImageLink({ img, href, alt }: IImageLink) {
  return (
    <a href={href}>
      <img src={img} alt={alt ?? ""} />
    </a>
  );
}
