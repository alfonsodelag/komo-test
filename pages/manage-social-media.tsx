import List from "../components/List/List";
import { socialMediaList } from "../data";

const ManageSocialMedia = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Manage Social Media</h1>
      {socialMediaList.map((item, index) => {
        return <List key={index} item={item} />;
      })}
    </div>
  );
};

export default ManageSocialMedia;
