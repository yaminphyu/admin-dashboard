import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import useWindowDimension from "@/hook/useWindowDimension";

export default function Home() {
  const { width } = useWindowDimension();

  const [ isSiebar, setIsSiebar ] = useState(true);

  useEffect(() => {
    width < 640 && setIsSiebar(false);
  }, []);

  return (
    <div>
      <NavBar
        setIsSiebar={setIsSiebar}
        isSiebar={isSiebar}
      />
      <SideBar 
        setIsSiebar={setIsSiebar}
        isSiebar={isSiebar} 
        width={width} 
      />
    </div>
  );
}
