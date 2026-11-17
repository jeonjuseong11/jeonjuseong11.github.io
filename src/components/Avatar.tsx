import Image from "next/image";
import photo from "../../public/profile.png";

// 프로필 사진. public/profile.png 를 바꾸면 교체됩니다.
export default function Avatar({ className = "" }: { className?: string }) {
  return (
    <Image
      src={photo}
      alt="전주성 프로필 사진"
      priority
      className={`rounded-full bg-white object-cover object-top ${className}`}
    />
  );
}
