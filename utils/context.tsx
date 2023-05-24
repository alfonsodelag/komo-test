import { createContext, useState, ReactNode } from "react";
import { ResponseData } from "../pages/api/getUserInfo";

type AppContextType = {
  data: ResponseData;
  updateData: (newData: ResponseData) => void;
};

const defaultValues: AppContextType = {
  data: {
    avatar_url: "",
    bio: "",
    followers: "",
    id: 0,
    name: "",
    lastestPost: [],
  },
  updateData: (data) => data,
};

const AppContext = createContext<AppContextType>(defaultValues);

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [data, setData] = useState<ResponseData>({
    avatar_url: "",
    bio: "",
    followers: "",
    id: 0,
    name: "",
    lastestPost: [],
  });

  const updateData = (newData: ResponseData) => {
    setData(newData);
  };

  return (
    <AppContext.Provider value={{ data, updateData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
