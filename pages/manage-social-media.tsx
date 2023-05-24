import { useRouter } from "next/router";
import Link from "next/link";
import List from "../components/List/List";
import { socialMediaList } from "../data";

const ManageSocialMedia = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="px-10 p-4">
      <button onClick={handleGoBack} className="mt-4">
        Go Back
      </button>
      <h1 className="text-2xl font-bold mb-10 text-center">
        Manage Social Media
      </h1>
      {socialMediaList.map((item, index) => {
        const slug = item?.name?.toLowerCase();
        return (
          <Link href={`/manage-social-media/social-media/${slug}`} key={index}>
            <List item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default ManageSocialMedia;
