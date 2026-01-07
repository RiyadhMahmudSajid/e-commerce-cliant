import { useContext } from "react";
import { CartContext } from "../../../providers/CartProvider";
import { AuthContex } from "../../../providers/AuthProvider";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(AuthContex);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 15.00 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)] py-12 px-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
       
        <header className="mb-12">
          <h1 className="text-3xl font-semibold text-[var(--color-text-main)] tracking-tight">
            Checkout
          </h1>
          <p className="text-[var(--color-text-muted)] mt-2">Review your items and complete your order.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
         
          <div className="lg:col-span-7 space-y-6">

            <div className="bg-[var(--color-bg-primary)] p-6 rounded-2xl border border-[var(--color-border-color)] shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                Shipping Information
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-[var(--color-border-color)] border-opacity-50">
                  <span className="text-[var(--color-text-muted)]">Name</span>
                  <span className="font-medium text-[var(--color-text-main)]">{user?.displayName || "Guest"}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[var(--color-text-muted)]">Email</span>
                  <span className="font-medium text-[var(--color-text-main)]">{user?.email}</span>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-bg-primary)] rounded-2xl border border-[var(--color-border-color)] shadow-sm overflow-hidden">
              <div className="p-5 border-b border-[var(--color-border-color)] flex justify-between items-center bg-[var(--color-bg-secondary)] bg-opacity-30">
                <span className="font-semibold text-[var(--color-text-main)]">Your Bag</span>
                <span className="text-xs bg-[var(--color-accent-soft)] text-[var(--color-accent)] px-3 py-1 rounded-full font-bold">
                  {cart.length} Items
                </span>
              </div>
              <div className="divide-y divide-[var(--color-border-color)] divide-opacity-40">
                {cart.map((item) => (
                  <div key={item._id} className="p-6 flex items-center gap-4 group">
                    <div className="h-20 w-20 flex-shrink-0 rounded-xl bg-[var(--color-bg-secondary)] overflow-hidden border border-[var(--color-border-color)]">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--color-text-main)]">{item.name}</h4>
                      <p className="text-sm text-[var(--color-text-muted)]">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right font-semibold text-[var(--color-text-main)]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[var(--color-bg-primary)] p-8 rounded-3xl border border-[var(--color-border-color)] shadow-xl sticky top-8">
              <h3 className="text-lg font-semibold text-[var(--color-text-main)] mb-6">Order Summary</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Subtotal</span>
                  <span className="text-[var(--color-text-main)] font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Shipping</span>
                  <span className="text-[var(--color-text-main)] font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-[var(--color-border-color)] flex justify-between items-end">
                  <span className="text-base font-semibold text-[var(--color-text-main)]">Total</span>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[var(--color-text-main)] leading-none">${total.toFixed(2)}</p>
                    <p className="text-[10px] text-[var(--color-text-muted)] mt-1 uppercase tracking-tighter">Including VAT</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-[var(--color-accent-soft)] active:scale-[0.98]">
                Place Order
              </button>

              <p className="mt-6 text-[10px] text-center text-[var(--color-text-muted)] leading-relaxed">
                By placing your order, you agree to our <br /> 
                <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;