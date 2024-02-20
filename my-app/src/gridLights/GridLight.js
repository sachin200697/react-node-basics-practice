import React, { useEffect, useRef, useState } from "react";
import "./grid-light.css";

function GridLight() {
  const gridRef = useRef([]);
  const [grids, setGrids] = useState(() => {
    const arr = new Array(9);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = { isActive: false, show: true };
    }
    //if we don't want to show some of the div then make show = false 
    arr[4].show = false;
    return arr;
  });
  const [activeGrids, setActiveGrids] = useState([]);

  const onGridClick = (index) => {
    let newCurentGrid = grids[index];
    let newGrids = [...grids];
    newCurentGrid.isActive = !newCurentGrid.isActive;

    newGrids[index] = newCurentGrid;
    setGrids(newGrids);

    let updateActiveGrids = [index, ...activeGrids];
    setActiveGrids(updateActiveGrids);
  };

  useEffect(() => {
    function fun(index) {
      setTimeout(() => {
        let newCurentGrid = grids[activeGrids[index]];
        let newGrids = [...grids];
        newCurentGrid.isActive = !newCurentGrid.isActive;

        newGrids[activeGrids[index]] = newCurentGrid;
        setGrids((prev) => newGrids);
      }, 1000 * index);
    }
    
    if (activeGrids.length === grids.filter(grid=>grid.show).length) {
      for (let i = 0; i < activeGrids.length; i++) {
        fun(i);
      }
      setActiveGrids([]);
    }
  }, [activeGrids]);
  console.log(grids);
  return (
    <div className="grid-container">
      {grids.map((grid, index) => {
        const activeClass = grid.isActive ? "active" : "";

        if(grid.show){

            return (
              <div
                key={index}
                ref={(element) => (gridRef.current[index] = element)}
                className={`grids ${activeClass}`}
                onClick={() => onGridClick(index)}
              >
                {index}
              </div>
            );
        }
        else {
            return <div></div>;
        }
      })}
    </div>
  );
}

export default GridLight;
