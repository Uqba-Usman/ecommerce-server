import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const CartProduct = ({ book }) => {
  const [quantity, setQuantity] = React.useState(book.quantity);
  const [itemDelete, setItemDelete] = React.useState(true);
  console.log("Price", book.price);
  const handleIncrement = () => {
    const inc = quantity + 1;
    setQuantity(inc);
    changeCookieQuantity(inc);
  };
  const changeCookieQuantity = async (qty) => {
    const cookieData = cookies.get("cart");
    const index = cookieData.findIndex((c) => c._id === book._id);
    cookieData[index].quantity = qty;
    await cookies.set("cart", cookieData);
    console.log("NewCookie", cookies.get("cart"));
  };
  const handleDecrement = () => {
    if (Number(quantity) === 1) return;
    const dec = quantity - 1;
    setQuantity(dec);
    changeCookieQuantity(dec);
  };

  const handleDelete = () => {
    const cookieData = cookies.get("cart");
    console.log("CD", cookieData);
    const index = cookieData.findIndex((c) => c._id === book._id);
    cookieData.splice(index, 1);
    cookies.set("cart", cookieData);
    console.log("CookieData", cookieData);
    window.location.reload();
  };
  return (
    <tr>
      <td className="cart-product-remove">
        <Link onClick={handleDelete}>
          <i className="fa fa-times" />
        </Link>
      </td>
      <td className="cart-product-thumbnail">
        <Link href="#">
          <img src="polo/images/shop/products/1.jpg" alt={book.title}></img>
        </Link>
        <div className="cart-product-thumbnail-name">{book.title}</div>
      </td>
      <td className="cart-product-description">
        <span>{book.description}</span>
      </td>
      <td className="cart-product-price">
        <span className="amount">{`${book.price}$`}</span>
      </td>
      <td className="cart-product-quantity">
        <span>{book.quantity}</span>
      </td>
      <td className="cart-product-subtotal">
        <span className="amount">{`${Number(book.price) * quantity}$`}</span>
      </td>
    </tr>
  );
};

export default CartProduct;
