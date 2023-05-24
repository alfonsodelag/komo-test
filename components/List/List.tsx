import Image from "next/image";
import { ListProps } from "./ListProps";
import { useRouter } from "next/router";

const List = ({ item }: ListProps) => {
  const router = useRouter();

  const { name, link, avatar_url, bio, followers } = item;

  const handleButtonClick = () => {
    if (link) {
      router.push(link);
    }
  };

  const Icon = item?.icon;

  return (
    <div className="pl-0 md:pl-4 pr-0 md:pr-5 py-2.5 my-3 flex items-center">
      {avatar_url && (
        <Image src={avatar_url} alt="avatar" width={50} height={50} />
      )}
      <button onClick={handleButtonClick}>
        <div className="px-2">
          <div className="flex items-center gap-4">
            {Icon && <Icon />}
            <p className="font-mono text-white font-bold text-xl">{name}</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default List;
