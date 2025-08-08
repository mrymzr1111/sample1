
// import "./App.css";

// import data from "./database/db.json";
// import Card from "./components/Cart";

// const products = data.products;

// function App() {
//   return (
//     <div className="wrapper">
//    <div className="container py-5">
//       <div className="row">
//           {products.map((product) => (
//             <Card key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import "bootstrap/dist/css/bootstrap.min.css";
import data from "./database/db.json";
import Card from "./components/Cart";

function App() {
  return (
    <div className="container py-5">
      <div className="row">
        {data.products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
