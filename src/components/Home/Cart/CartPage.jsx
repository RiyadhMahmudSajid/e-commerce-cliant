import { useContext } from "react";
import { CartContext } from "../../../providers/CartProvider";
import { useNavigate } from "react-router";
import { AuthContex } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const CartPage = () => {
    const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();
    const {user} = useContext(AuthContex)
    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <div className="text-6xl mb-4">🛒</div>
                <h2 className="text-2xl font-bold text-[var(--color-text-main)]">Your cart is empty</h2>
                <p className="text-[var(--color-text-muted)] mt-2">Looks like you haven't added anything to your cart yet.</p>
                <button 
                    onClick={() => navigate("/")}
                    className="mt-6 px-6 py-2 bg-[var(--color-accent)] text-white rounded-full font-medium hover:bg-[var(--color-accent-hover)] transition-all"
                >
                    Continue Shopping
                </button>
            </div>
        );
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen bg-[var(--color-bg-secondary)] py-12 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
                <header className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-[var(--color-text-main)] tracking-tight">Shopping Bag</h1>
                        <p className="text-[var(--color-text-muted)]">{cart.length} items in your cart</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Cart Items List */}
                    <div className="lg:col-span-8 space-y-4">
                        {cart.map(item => (
                            <div
                                key={item._id}
                                className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl border transition-all hover:shadow-md"
                                style={{
                                    background: "var(--color-bg-primary)",
                                    borderColor: "var(--color-border-color)",
                                }}
                            >
                                {/* Product Image (Placeholder logic) */}
                                <div className="h-24 w-24 bg-[var(--color-bg-secondary)] rounded-xl flex-shrink-0 overflow-hidden border border-[var(--color-border-color)]">
                                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                </div>

                                <div className="flex-1 text-center sm:text-left">
                                    <h2 className="font-bold text-[var(--color-text-main)] text-lg">{item.name}</h2>
                                    <p className="text-[var(--color-text-muted)] font-medium">৳{item.price}</p>
                                    
                                    <button
                                        onClick={() => removeFromCart(item._id)}
                                        className="text-[var(--color-danger)] text-xs font-bold uppercase tracking-widest mt-2 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-4 bg-[var(--color-bg-secondary)] px-4 py-2 rounded-full border border-[var(--color-border-color)]">
                                    <button 
                                        className="text-xl font-bold hover:text-[var(--color-accent)] transition-colors px-2"
                                        onClick={() => decreaseQty(item._id)}
                                    >
                                        −
                                    </button>
                                    <span className="font-bold text-[var(--color-text-main)] w-4 text-center">{item.quantity}</span>
                                    <button 
                                        className="text-xl font-bold hover:text-[var(--color-accent)] transition-colors px-2"
                                        onClick={() => increaseQty(item._id)}
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="text-right min-w-[100px]">
                                    <p className="font-bold text-[var(--color-text-main)] text-xl">
                                        ৳{item.price * item.quantity}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary Section */}
                    <div className="lg:col-span-4">
                        <div className="bg-[var(--color-bg-primary)] p-6 rounded-3xl border border-[var(--color-border-color)] shadow-sm sticky top-8">
                            <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-6">Summary</h3>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between text-[var(--color-text-muted)] font-medium">
                                    <span>Subtotal</span>
                                    <span>৳{total}</span>
                                </div>
                                <div className="flex justify-between text-[var(--color-text-muted)] font-medium">
                                    <span>Shipping</span>
                                    <span className="text-[var(--color-success)] font-bold uppercase text-xs">Calculated at next step</span>
                                </div>
                                <div className="pt-4 border-t border-[var(--color-border-color)]">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-[var(--color-text-main)]">Total</span>
                                        <span className="text-2xl font-black text-[var(--color-text-main)]">৳{total}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                               
                                onClick={() => {if(!user){
                                    return toast.error('Log in Firs')
                                } navigate("/checkout")}}
                                className="w-full mt-8 py-4 rounded-2xl font-bold text-white shadow-lg transition-all active:scale-95"
                                style={{
                                    background: "var(--color-accent)",
                                }}
                                onMouseOver={(e) => e.target.style.background = "var(--color-accent-hover)"}
                                onMouseOut={(e) => e.target.style.background = "var(--color-accent)"}
                            >
                                Checkout Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;