// write product card here
// import React from "react";
import Button from "./button";
const productImage = "https://picsum.photos/200";
const name = "Scenic Frame";
const price = "$49.99";

const Productcard = () => {
  return (
    <div style={styles.card}>
      <img src={productImage} alt="" style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.price}>Price: {price}</p>
      <Button />
    </div>
  );
};

const styles = {
  image: {
    width: "200px",
    height: "120px",
    borderRadius: "10px",
    borderWidth: "20px",
  },

  card: {
    border: "1px white",
    borderRadius: "9px",
    padding: "15px",
    backgroundColor: "#F4D793",
  },

  name: {
    color: "#09122C",
    fontSize: "1.5em",
  },

  price: {
    color: "#09122C",
    fontSize: "1em",
  },
};

export default Productcard;
