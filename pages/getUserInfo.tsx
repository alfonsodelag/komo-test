import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";

const UserInfo = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{data.name}</h1>
      <div>
        <Image src={data.avatar_url} alt="avatar" />
        <div>
          <h1>Name: {data.name}</h1>
          <h1>Followers: {data.followers}</h1>
          <h1>Bio: {data.bio}</h1>
        </div>
      </div>
      <h1>Latest Posts</h1>
    </div>
  );
};

export default UserInfo;
