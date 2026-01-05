import { useContext } from "react";
import { CartContext } from "../../../providers/CartProvider";
import { AuthContex } from "../../../providers/AuthProvider";
import useAxios from "../../../hooks/useAxios";


const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(AuthContex);
  const axios = useAxios();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    const order = {
      email: user.email,
      items: cart.map(item => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalAmount: total,
      status: "pending",
    //   paymentStatus: "unpaid",
    };

    const res = await axios.post("/orders/create", order);

    if (res.data?.gatewayUrl) {
      window.location.replace(res.data.gatewayUrl);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: ${total}</p>
      <button onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
