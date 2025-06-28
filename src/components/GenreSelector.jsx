// src/components/GenreSelector.jsx
import React, { useState } from "react";

function GenreSelector() {
  const [activeField, setActiveField] = useState("작곡");
  const [activeGenre, setActiveGenre] = useState(null);
  const [activeSubGenre, setActiveSubGenre] = useState(null);
  
  const handleFieldClick = (name) => {
    setActiveField(name);
  };

  const handleGenreClick = (id) => {
    if (activeGenre === id) {
      setActiveGenre(null);
      setActiveSubGenre(null);
    } else {
      setActiveGenre(id);
      setActiveSubGenre(null);
    }
  };

  const handleSubGenreClick = (name) => {
    if (activeSubGenre === name) {
      setActiveSubGenre(null);
    } else {
      setActiveSubGenre(name);
    }
  };

  return (
    <div id="option">
      <span>*는 필수선택입니다.</span>
      <div id="option-menu">
        <div className="option-list">
          <h1>분야*</h1>
          <ul className="list-set">
            {["작곡", "작사", "믹싱", "보컬"].map((field) => (
              <li
                key={field}
                className={activeField === field ? "on" : ""}
                onClick={() => handleFieldClick(field)}
              >
                {field}
              </li>
            ))}
          </ul>
        </div>
        <div className="option-list">
          <h1>장르*</h1>
          <ul className="list-set">
            <li onClick={() => handleGenreClick("data1")} className={activeGenre === "data1" ? "on" : ""}>클래식&재즈</li>
            <li onClick={() => handleGenreClick("data2")} className={activeGenre === "data2" ? "on" : ""}>대중음악</li>
            <li onClick={() => handleGenreClick("data3")} className={activeGenre === "data3" ? "on" : ""}>전자음악</li>
            <li onClick={() => handleGenreClick("data4")} className={activeGenre === "data4" ? "on" : ""}>힙합&알앤비</li>
          </ul>
        </div>
        <div id="option-list-det">
          <h1 style={{ display: activeGenre && activeGenre !== "data1" ? "block" : "none" }}>세부장르</h1>
          {["data2", "data3", "data4"].map((id) => (
            <ul
              className="list-set"
              id={id}
              key={id}
              style={{ display: activeGenre === id ? "flex" : "none" }}
            >
              {(
                id === "data2"
                  ? ["POP", "K-POP", "J-POP", "CityPOP", "Ballad", "Rock"]
                  : id === "data3"
                  ? ["Trap", "Boombap", "Lofi", "R&B", "Funk"]
                  : ["House", "Techno", "Ambient", "Drum&Bass", "UK garage", "Dubstep"]
              ).map((name) => (
                <li
                  key={name}
                  onClick={() => handleSubGenreClick(name)}
                  className={activeSubGenre === name ? "on" : ""}
                >
                  {name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GenreSelector;
