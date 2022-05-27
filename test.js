// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/api/v1/products")
//       .then((response) => {
//         console.log(response.data);
//         setProducts(response.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       <form style={{ magin: "auto" }}>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search Name.."
//           onChange={(e) => setQuery(e.target.value)}
//           value={query}
//         />
//       </form>
//       <table id="products">
//         <tr>
//           <th>
//             <b>Name</b>
//           </th>
//           <th>
//             <b>Price</b>
//           </th>
//           <th>
//             <b>Description</b>
//           </th>
//           <th>
//             <b>Category</b>
//           </th>
//           <th>
//             <b>Rating</b>
//           </th>
//         </tr>
//         {products
//           .filter((product) => product.name.toLowerCase().includes(query))
//           .map((product) => (
//             <tr key={product._id}>
//               <td>{product.name}</td>
//               <td>₹{product.price}</td>
//               <td>{product.description}</td>
//               <td>{product.category}</td>
//               <td>{product.ratings}</td>
//             </tr>
//           ))}
//       </table>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [q, setQ] = useState("");
//   const [searchParam] = useState(["name"]);
//   const [filterParam, setFilterParam] = useState(["All"]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/api/v1/products")
//       .then((response) => {
//         console.log(response.data);
//         setProducts(response.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   function search(items) {
//     return items.filter((item) => {
//       return searchParam.some((newItem) => {
//         if (item.category == filterParam) {
//           return searchParam.some((newItem) => {
//             return (
//               item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) >
//               -1
//             );
//           });
//         } else if (filterParam == "All") {
//           return searchParam.some((newItem) => {
//             return (
//               item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) >
//               -1
//             );
//           });
//         }
//         // return (
//         //   item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
//         // );
//       });
//     });
//   }

//   return (
//     <div>
//       <form style={{ magin: "auto" }}>
//         <input
//           type="search"
//           className="form-control"
//           placeholder="Search Name.."
//           onChange={(e) => setQ(e.target.value)}
//           value={q}
//         />
//       </form>
//       <table id="products">
//         <tr>
//           <th>
//             <b>Name</b>
//           </th>
//           <th>
//             <b>Price</b>
//           </th>
//           <th>
//             <b>Description</b>
//           </th>
//           <th>
//             <b>Category</b>
//           </th>
//           <th>
//             <b>Rating</b>
//           </th>
//         </tr>
//         {search(products).map((item) => (
//           <tr>
//             <td>{item.name}</td>
//             <td>₹{item.price}</td>
//             <td>{item.description}</td>
//             <td>{item.category}</td>
//             <td>{item.ratings}</td>
//           </tr>
//         ))}
//       </table>
//       <div className="select">
//         <select
//           onChange={(e) => {
//             setFilterParam(e.target.value);
//           }}
//           className="custom-select"
//           aria-label="Filter Product Data By Category"
//         >
//           <option value="All">Filter By Category</option>
//           <option value="electronics">Electronics</option>
//           <option value="footwear">Footwear</option>
//           <option value="clothing">Clothing</option>
//           <option value="home & furniture">Home & Furniture</option>
//         </select>
//         <span className="focus"></span>
//       </div>
//     </div>
//   );
// };

// export default Home;
