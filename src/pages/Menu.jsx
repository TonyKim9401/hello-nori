import React, { useState } from "react";
import Layout from "../components/Layout";
import Section from "../components/menu/Section";
import MenuItem from "../components/menu/MenuItem";
import HandrollItem from "../components/menu/HandrollItem";
import DrinkItem from "../components/menu/DrinkItem";
import MenuPopup from "../components/menu/MenuPopup";
import menuData from "../../public/data/menuData.json";

function MenuPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem((prev) => (prev?.name === item.name ? null : item));
  };

  return (
    <Layout>
      <div className="text-black max-w-4xl mx-auto p-6 text-left min-h-screen">
        <div className="flex flex-col md:flex-row gap-8 mx-auto w-full">
          <div className="flex-1 flex flex-col gap-6 mx-auto w-[98%] md:w-[30%]">
            {menuData.map((section, idx) => (
              <Section key={idx} title={section.section}>
                {section.section === "Set Menus" ? (
                  <div
                    style={{
                      display: "flex",
                      gap: "1%",
                      justifyContent: "center",
                    }}
                  >
                    {section.items.map((item, itemIdx) => (
                      <MenuItem
                        key={itemIdx}
                        item={item}
                        priceRight={false}
                        onClick={handleItemClick}
                      />
                    ))}
                  </div>
                ) : (
                  section.items.map((item, itemIdx) => {
                    const sectionName = section.section;

                    if (sectionName === "Handrolls") {
                      return (
                        <HandrollItem
                          key={itemIdx}
                          item={item}
                          onClick={handleItemClick}
                        />
                      );
                    }

                    if (sectionName === "Drinks") {
                      return (
                        <DrinkItem
                          key={itemIdx}
                          item={item}
                          onClick={handleItemClick}
                        />
                      );
                    }

                    return (
                      <MenuItem
                        key={itemIdx}
                        item={item}
                        onClick={handleItemClick}
                      />
                    );
                  })
                )}
              </Section>
            ))}
          </div>
        </div>
      </div>

      {selectedItem && (
        <MenuPopup item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </Layout>
  );
}

export default MenuPage;
