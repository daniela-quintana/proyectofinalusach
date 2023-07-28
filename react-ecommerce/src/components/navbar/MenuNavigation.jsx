import { menuDatas } from "../../Data/Data";
import { BsXLg, BsChevronDown } from "react-icons/bs";
import { useState } from "react";
function MenuNavigation({ menuToggle, setMenuToggle }) {
  const [activeData, setActiveData] = useState(null);
  const handleClick = (id) => {
    setActiveData(id === activeData ? null : id);
  };
  return (
    <div className={`${menuToggle ? "menuNavigation open" : "menuNavigation"}`}>
      <div className="menu">
        <div className="minim">inatentamente</div>
        <div className="menuX" onClick={(prev) => setMenuToggle(!prev)}>
          <BsXLg />
        </div>
      </div>
      <div className="menuDatas">
        {menuDatas.map((menuData, id) => {
          return (
            <div
              className="dataGroup"
              key={menuData.id}
              onClick={() => handleClick(id)}
            >
              <div className="dataGroupName">
                <div>{menuData.dataGroupName}</div>
                <BsChevronDown
                  className={`${id === activeData ? "rotate180" : "rotate0"}`}
                />
              </div>

              {id === activeData && (
                <div className="dataItems">
                  {menuData.dataItems.map((dataItem, index) => (
                    <a href="" key={index}>
                      {dataItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="callUs">Contacto</div>
      <div className="openHours">Lorem ipsum dolor sit amet consectetur</div>
    </div>
  );
}

export default MenuNavigation;
