import axios from "axios";
import React, { useCallback, useState } from "react";

import "./Debounce.css";
export const DebounceSrcatch = () => {
  const [suggestions, setSuggestions] = useState("");

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (value) => {
    if (value.length < 3) {
      return false;
    }
    if (value.length === 0) {
      setSuggestions({ name: [] });
      return false;
    }
    axios.get(`http://localhost:3001/students?q=${value}`).then((res) => {
      console.log(res.data, "ha ider");
      setSuggestions(res.data);
    });
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Student's Data</h2>

      <input
        type="text"
        className="search"
        placeholder="Enter something here..."
        onChange={(e) => optimizedFn(e.target.value)}
      />
      <div className="Appis">
        {suggestions.length > 0 && (
          <div className="autocomplete">
            {suggestions.map((el, i) => (
              <div key={i} className="autocompleteItems">
                <span
                  onClick={() => {
                    window.location.href = `/info/${el.id}`;
                  }}
                >
                  {el.id}.{el.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

// export default DebounceSrcatch;
