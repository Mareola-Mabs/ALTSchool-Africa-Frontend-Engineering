import "./assets/app.css";
import { useState } from "react";

// Form Without External Library
const WithoutLibrary = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const form = e.target;

      const payload = {
        id: crypto.randomUUID(),
        name: form.name.value.trim(),
        description: form.description.value.trim() || null,
        price: Number(form.price.value),
        compareAtPrice: null,
        sku: null,
        barcode: form.barcode.value.trim() || null,
        quantity: Number(form.quantity.value),
        category: form.category.value.trim() || null,
        tags: form.tags.value.trim() || null,
        images: "", // placeholder (API expects string)
        featured: form.featured.checked,
        published: form.published.checked,
        isDefault: null,
        owner: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const res = await fetch("https://api.oluwasetemi.dev/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data);
        setMessage("Failed to create product");
        return;
      }

      setMessage("Product created successfully ✅");
      console.log(payload)
      form.reset();
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Product</h2>

      <input
        name="name"
        type="text"
        placeholder="Product Name"
        required
        minLength={1}
        maxLength={500}
      />

      <input
        name="price"
        type="number"
        placeholder="Enter a Price"
        min="0"
        required
      />

      <input name="barcode" type="text" placeholder="Barcode (optional)" />

      <input name="category" type="text" placeholder="Category" />

      <textarea name="description" placeholder="Description" />

      <label>
        <input type="checkbox" name="featured" />
        Featured
      </label>

      {/* Image upload UI only (not yet sent to API) */}
      <label>
        Product Images
        <input name="images" type="file" accept="image/*" multiple />
      </label>

      <input
        name="quantity"
        type="number"
        min="0"
        placeholder="Quantity"
        required
      />

      <input name="tags" type="text" placeholder="Tags (comma separated)" />

      <label>
        <input type="checkbox" name="published" defaultChecked />
        Published
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Product"}
      </button>

      {message && <p>{message}</p>}
    </form>
  );
};

// Form With React Library
const WithLibrary = () => {
  return (
    <form action="" method="post">
      <h2>Create Product (No Form Library)</h2>

      <input name="name" type="text" placeholder="Product Name" required />

      <input name="price" type="number" placeholder="Enter a Price" required />

      <label htmlFor="barcode">
        Barcode Image
        <input name="barcode" id="barcode" type="file" />
      </label>

      <input name="category" placeholder="Category" type="text" />

      <textarea name="description" placeholder="Description" />

      <label>
        <input type="checkbox" name="featured" />
        Featured
      </label>

      <label
        htmlFor="image"
        style={{ display: "flex", flexDirection: "column" }}
      >
        Images
        <input name="image" id="image" type="file" />
      </label>

      <input type="text" name="quantity" min="0" />

      <input name="tags" placeholder="Tags (comma separated)" type="text" />

      <label>
        <input type="checkbox" name="published" />
        Published
      </label>

      <button type="submit">Create Product</button>
    </form>
  );
};

// Create root Component
const App = () => {
  return (
    <div className="container">
      <div className="parent">
        <WithoutLibrary />
        <WithLibrary />
      </div>
    </div>
  );
};

export default App;
