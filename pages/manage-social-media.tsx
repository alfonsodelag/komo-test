import List from "../components/List/List";
import { socialMediaList } from "../data";
import { useRouter } from "next/router";

const ManageSocialMedia = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 p-4">
      <button onClick={handleGoBack} className="mt-4">
        Go Back
      </button>
      <h1 className="text-2xl font-bold mb-10 text-center">
        Manage Social Media
      </h1>
      <div className="flex justify-between">
        {socialMediaList.map((item, index) => {
          return <List key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ManageSocialMedia;
