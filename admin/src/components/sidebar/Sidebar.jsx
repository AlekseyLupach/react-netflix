import "./sidebar.css";
import {
  Home,
  PermIdentity,
  List,
  AddCircleOutline,
  PlayCircleOutline,
} from "@material-ui/icons";
import SidebarMenu from "../sidebarMenu/sidebarMenu";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <SidebarMenu
          title="Dashboard"
          items={[
            {
              id: "1",
              name: "Home",
              link: "/",
              icons: <Home />,
              title: "Dashboard",
            },
            { id: "2", name: "Users", link: "/users", icons: <PermIdentity /> },
            {
              id: "3",
              name: "Movies",
              link: "/movies",
              icons: <PlayCircleOutline />,
              title: "Movies Menu",
            },
            {
              id: "4",
              name: "Create Movie",
              link: "/newproduct",
              icons: <AddCircleOutline />,
            },
            {
              id: "5",
              name: "Lists",
              link: "/lists",
              icons: <List />,
              title: "Lists Menu",
            },
            {
              id: "6",
              name: "Create List",
              link: "/newlist",
              icons: <AddCircleOutline />,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Sidebar;
