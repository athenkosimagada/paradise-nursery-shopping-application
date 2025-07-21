import CartItem from "./cart_item";

const CartList = ({ cartProducts }) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-8 w-full">
      {Object.keys(cartProducts).map((productId) => (
        <CartItem
          key={productId}
          item={{ productId, ...cartProducts[productId] }}
        />
      ))}
    </div>
  );
};

export default CartList;
