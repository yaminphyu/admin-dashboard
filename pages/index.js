import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import useWindowDimension from "@/hook/useWindowDimension";

export default function Home() {
  const { width } = useWindowDimension();

  const [ isSidebar, setIsSidebar ] = useState(true);

  useEffect(() => {
    width < 640 && setIsSidebar(false);
  }, []);

  return (
    <div>
      <NavBar
        setIsSidebar={setIsSidebar}
        isSidebar={isSidebar}
      />
      <SideBar 
        setIsSidebar={setIsSidebar}
        isSidebar={isSidebar} 
        width={width} 
      />
    </div>
  );
}
