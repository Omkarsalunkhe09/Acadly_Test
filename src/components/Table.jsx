import React from "react";
import { useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import "./Table.css";
import { DebounceSrcatch } from "./Debouncing";
import { useDispatch } from "react-redux";
import { setStudents } from "./redux/action/studentAction";
import { useSelector } from "react-redux";

export const Table = () => {
  const [items, setItems] = useState([]);
  const [more, setMore] = useState(true);
  const [page, setPage] = useState(2);
  const students = useSelector((state) => state.allStudents.students);

  const dispatach = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3001/students").then((res) => {
      console.log(res.data);
      dispatach(setStudents(res.data));
    });
  }, []);
  console.log(students);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/students?_page=1&_limit=20`)
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      });
  }, []);

  const fetchData = () => {
    const com = axios
      .get(`http://localhost:3001/students?_page=${page}&_limit=20`)
      .then((res) => {
        setItems([...items, ...res.data]);
      });

    if (com.length === 0 || items.length < 20) {
      setMore(false);
    }

    setPage(page + 1);
    // console.log("done");
  };

  return (
    <div>
      <DebounceSrcatch />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={more}
        loader={<b>Yay! You have seen it all</b>}
      >
        <table class="table w-75 m-auto">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Attendence</th>
              <th scope="col">Imgae</th>
            </tr>
          </thead>
          <tbody>
            {items.map((ele) => {
              return (
                <tr
                  key={ele.id}
                  onClick={() => {
                    console.log(ele.id);

                    window.location.href = `/info/${ele.id}`;
                  }}
                >
                  <th scope="row">{ele.id}</th>
                  <td>{ele.name}</td>
                  <td>
                    {ele.lecturesAttended}/{ele.totalLectures}
                  </td>
                  <td>
                    <img src={ele.avatarURL} alt="pic" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </InfiniteScroll>
    </div>
  );
};
