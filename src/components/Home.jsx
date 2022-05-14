// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { useEffect } from "react";
// export const Home = () => {
//   const [items, setItems] = useState([]);
//   const [more, setMore] = useState(true);
//   const [page, setPage] = useState(2);
//   useEffect(() => {
//     axios
//       .get(`http://localhost:3001/comments?_page=1&_limit=20`)
//       .then((res) => {
//         console.log(res.data);
//         setItems(res.data);
//       });
//   }, []);

//   const fetchData = () => {
//     const com = axios
//       .get(`http://localhost:3001/comments?_page=${page}&_limit=20`)
//       .then((res) => {
//         setItems([...items, ...res.data]);
//         // console.log(items);
//       });

//     if (com.length === 0 || items.length < 20) {
//       setMore(false);
//       //   console.log("over now");
//     }

//     setPage(page + 1);
//   };
//   return (
//     <div>
//       <InfiniteScroll
//         dataLength={items.length} //This is important field to render the next data
//         next={fetchData}
//         hasMore={more}
//         loader={<b>Yay! You have seen it all</b>}
//         // endMessage={
//         //   <p style={{ textAlign: "center" }}>
//         //     <b>Yay! You have seen it all</b>
//         //   </p>
//         // }
//       >
//         {items.map((e) => {
//           return (
//             <div>
//               <div>ID:-{e.id}</div>
//               <div>
//                 <img src={e.avatarURL} alt="img" />
//               </div>
//               <div>{e.name}</div>
//               <div>{e.lecturesAttended}</div>
//               <hr />
//             </div>
//           );
//         })}
//       </InfiniteScroll>
//     </div>
//   );
// };
