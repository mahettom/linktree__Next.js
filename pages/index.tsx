import Image from "next/image";
import data from "../data.json";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image: string;
}) {

  return (
    <a
      href={href}
      className="flex item-center p-1 w-full rounded-md hover:scale-105 transition-all border border-gray-300 mb-3"
    >
      <div className="flex text-center w-full">

        <Image
          className="rounded-md"
          src={image}
          width={40}
          height={40}
          alt={title}
        />
        <h2 className="font-semibold w-full">{title}</h2>

      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto w-full mt-16 px-14">
      <Image
        className="rounded-full"
        src={data.avatar}
        width={96}
        height={96}
        alt={data.name}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  );
}
