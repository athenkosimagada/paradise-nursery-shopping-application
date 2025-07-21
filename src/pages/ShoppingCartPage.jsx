import { useSelector } from "react-redux";
import CartItem from "@/components/feature/cart_item";
import CartList from "@/components/feature/cart_list";
import { Link } from "react-router-dom";
import { Button } from "@/components";

const ShoppingCartPage = () => {
  const cartProducts = useSelector((state) => state.cart.cart);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    Object.keys(cartProducts).forEach((productId) => {
      totalAmount +=
        cartProducts[productId].quantity * cartProducts[productId].price;
    });
    return totalAmount.toFixed(2);
  };

  return (
    <div className="max-w-[1024px] m-auto p-8 flex flex-col items-center">
      <p className="font-bold text-2xl">
        Total Cart Amount: R {getTotalCartAmount()}
      </p>

      {Object.keys(cartProducts).length > 0 && (
        <CartList cartProducts={cartProducts} />
      )}

      {Object.keys(cartProducts).length === 0 && (
        <p className="text-2xl mt-8">Cart is empty</p>
      )}

      <div className="flex flex-col items-center">
        <Link to="/app/products" className="w-full">
          <Button className="mt-8 w-full">Continue Shopping</Button>
        </Link>

        {Object.keys(cartProducts).length > 0 && (
          <Link to="#" className="w-full">
            <Button className="mt-8 w-full">Checkout</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
