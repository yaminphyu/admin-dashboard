
import { AiOutlineDashboard, AiOutlinePieChart } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import { GrTreeOption } from "react-icons/gr";

export const sideBars = [
    {
      id: 1,
      name: 'Dashboard',
      icon: <AiOutlineDashboard />,
      path: '/'
    },
    {
      id: 2,
      name: 'Lists',
      icon: <RxDashboard />,
      path: 'lists'
    },
    {
      id: 3,
      name: 'Create',
      icon: <MdOutlineInsertDriveFile />,
      path: 'create'
    },
    {
      id: 4,
      name: 'Update',
      icon: <AiOutlinePieChart />,
      path: 'update'
    },
    {
      id: 5,
      name: 'Delete',
      icon: <GrTreeOption />,
      path: 'delete'
    },
];