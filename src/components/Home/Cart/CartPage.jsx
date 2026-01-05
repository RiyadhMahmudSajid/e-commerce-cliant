import { useContext } from "react";
import { CartContext } from "../../../providers/CartProvider";
import { Navigate, useNavigate } from "react-router";


const CartPage = () => {
    const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
   const navigate = useNavigate()
    if (cart.length === 0) {
        return (
            <div className="text-center mt-20 text-text-muted">
                Your cart is empty 🛒
            </div>
        );
    }
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6 text-text-main">
                Shopping Cart
            </h1>

            <div className="space-y-4">
                {cart.map(item => (
                    <div
                        key={item._id}
                        className="flex justify-between items-center p-4 rounded-lg border"
                        style={{
                            background: "var(--color-surface)",
                            borderColor: "var(--color-border-color)",
                        }}
                    >
                        <div>
                            <h2 className="font-medium">{item.name}</h2>
                            <p className="text-sm text-text-muted">
                                Price: ৳{item.price}
                            </p>
                        </div>

                        <div className="font-semibold">
                            Qty: {item.quantity}
                        </div>

                        <div className="font-semibold">
                            ৳{item.price * item.quantity}
                        </div>
                        <div className="flex items-center gap-3">
                            <button onClick={() => decreaseQty(item._id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQty(item._id)}>+</button>
                        </div>

                        <button
                            onClick={() => removeFromCart(item._id)}
                            className="text-red-500"
                        >
                            Remove
                        </button>

                    </div>

                ))}
                <div>
                    <button
                     className="bg-accent text-white px-6 py-3 rounded-lg"
                     onClick={()=>navigate("/checkout")}>CheckOut</button>
                </div>

                <div className="mt-8 text-right">
                    <h2 className="text-xl font-semibold">
                        Total: ৳{total}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
