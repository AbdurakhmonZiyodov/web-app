import NotificationIcon from "assets/icons/NotificationIcon";
import { COLORS } from "constants/colors";
import { useCallback, useMemo, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { menuList } from "./HeaderRight.constants";

import { findIndex, map } from "lodash";

const HeaderRight = () => {
  return (
    <div className="header-rightbar">
      <MenuList />

      <AdditionBar />
    </div>
  );
};

// MenuList
const MenuList = () => {
  const [activeLinkName, setActiveLinkName] = useState(menuList[0].name);

  const activeIndex = useMemo(
    () => findIndex(menuList, { name: activeLinkName }),
    [activeLinkName]
  );

  const renderItem = useCallback(
    ({ name, Icon }: (typeof menuList)[0]) => (
      <button key={name} onClick={() => setActiveLinkName(name)}>
        <Icon
          size={23}
          color={activeLinkName === name ? COLORS.pink : COLORS.baseIcon}
        />
      </button>
    ),
    [activeLinkName]
  );

  const renderMenuList = useCallback(
    () => map(menuList, renderItem),
    [renderItem]
  );

  const animatedLineStyle = useMemo(
    () => ({
      left: `${25 * activeIndex}%`,
      transition: "all 0.3s",
    }),
    [activeIndex]
  );

  return (
    <div className="menu-list">
      {renderMenuList()}

      <span className="animate-line" style={animatedLineStyle} />
    </div>
  );
};

// AdditionBar
const AdditionBar = () => (
  <div className="addition-bar">
    <button className="notification-btn">
      <NotificationIcon size={25} color={COLORS.baseIcon} />
    </button>

    <button className="user-dropdown">
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        alt="user-img"
        className="user-image"
      />

      <IoIosArrowDown className="icon" />
    </button>
  </div>
);

export default HeaderRight;
