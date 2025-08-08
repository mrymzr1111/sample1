
import { useState } from "react";

export default function Card({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  return (
    <div className="   col-md-6 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm shadow-sm bg-light    ">
        <  img
               src={product.image}
                         className="card-img-top"
          alt={product.title}
          style={{ height: "250px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text text-muted">{product.description}</p>
          <p className="card-text fw-bold">${product.price}</p>

           {/* Dropdown  */}
          <select
            className="form-select mb-3"
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(e.target.value)}
          >
            {product.variants.map((variant, index) => (
              <option key={index} value={variant}>
                {variant}
              </option>
            ))}
          </select>

        
          <button
            className={`btn ${
              product.inStock ? "btn-primary" : "btn-danger"
            } mt-auto`}
            disabled={!product.inStock}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}
