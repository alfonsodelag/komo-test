import Image from "next/image";
import { ListViewProps } from "./ListProps";
import { useRouter } from "next/router";

const List = ({ item }: ListViewProps) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/manage-social-media");
  };

  const Icon = item?.icon;

  return (
    <div className="border-b-1 border-gray-800 pl-0 md:pl-4 pr-0 md:pr-5 py-2.5 my-3">
      <button
        onClick={handleButtonClick}
        className="flex items-center justify-between space-x-2 md:space-x-3"
      >
        <div className="px-2">
          <div className="flex items-center gap-4">
            <Icon />
            <p className="font-mono text-gray-800 font-bold">{item.name}</p>
          </div>
        </div>
        <div className="flex-grow"></div>
      </button>
    </div>
  );
};

export default List;
