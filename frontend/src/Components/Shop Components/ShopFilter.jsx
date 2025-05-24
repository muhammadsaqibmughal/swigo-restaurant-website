import { useState } from "react";
import "./ShopFilter.css";

function ShopFilter() {
  const [sliderValue, setSliderValue] = useState(50);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const closeFilter = () => {
    setIsFilterVisible(false);
  };

  const itemName = [
    "Pizza",
    "Burger",
    "Hamburger",
    "Cold Drink",
    "Sandwich",
    "Muffin",
    "Burrito",
    "Taco",
    "Hot Dog",
  ];

  return (
    <>
    
      <div>
      <button className="filter-button" onClick={toggleFilter}>
        Filter
      </button>
      </div>
      {isFilterVisible && (
        <div className="filter">
          <div className="currentSearch">
            <h1 className="filterHead">Current Search</h1>
            <div className="bottomBorder"></div>
            <div className="buttonWrapper">
              <button>Burger</button>
              <button>Restaurant</button>
              <button>Pizza</button>
            </div>
          </div>
          <div className="categories_Filter">
            <h1 className="filterHead">Refine By Categories</h1>
            <div className="bottomBorder"></div>
            {itemName.map((item) => (
              <div className="category" key={item}>
                <input type="checkbox" value={item} className="checkBox" />
                <label htmlFor="" style={{ fontSize: "22px" }}>
                  {item}
                </label>
              </div>
            ))}
          </div>
          <div className="priceRange">
            <h1 className="filterHead">Price Range</h1>
            <div className="bottomBorder"></div>
            <div className="range-container">
              <div className="range-value">{sliderValue}</div>
              <input
                type="range"
                min="10"
                max="100"
                value={sliderValue}
                onChange={handleSliderChange}
                className="range-slider"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShopFilter;
