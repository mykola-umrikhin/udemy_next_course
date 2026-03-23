import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  imgUrl?: string;
  alt?: string;
  value: string | number;
  title: string;
  textStyles?: string;
  href?: string;
  isAuthor?: boolean;
  imageStyles?: string;
}

const Metric = ({
  imgUrl = "",
  alt = "",
  value,
  title,
  href,
  textStyles,
  isAuthor,
  imageStyles,
}: Props) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`rounded-full object-contain ${imageStyles || ""}`}
      />

      <p className={`${textStyles} ml-1 flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
        >
          {title}
        </span>
      </p>
    </>
  );
  return href ? (
    <Link href={href} className="flex">
      {metricContent}
    </Link>
  ) : (
    <div>{metricContent}</div>
  );
};

export default Metric;
