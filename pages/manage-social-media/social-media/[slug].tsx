import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import List from "../../../components/List/List";
import { ResponseData, getUserInfo } from "../../api/getUserInfo";
import Image from "next/image";

const Instagram = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState<ResponseData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getUserInfo(slug as string);
      setData(res);
    }

    fetchData();
  }, [slug]);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="p-4">
      <button onClick={handleGoBack} className="mt-4">
        Go Back
      </button>
      <h1 className="mb-10 text-white text-center">Social Media Connections</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <div key={item.id} className="mb-10">
              <div className="flex flex-col m-auto items-center gap-4 mb-4 bg-white rounded-xl md:w-2/3 xl:w-1/4 p-4">
                <Image
                  className="rounded-md"
                  src={item.avatar_url}
                  alt="avatar"
                  width={200}
                  height={200}
                />
                <h1 className="text-black">{item.name}</h1>
                <h1 className="text-black">Followers {item.followers}</h1>
                <div>
                  <h1 className="text-blue-800 font-bold text-center mb-2">
                    Biography
                  </h1>
                  <p className="text-black text-left">{item.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div>
          <h1 color="black">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Instagram;
