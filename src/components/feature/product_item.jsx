import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components";
import { IMAGE_MAP } from "@/constants";
import { addItemToCart } from "@/redux/counter_slice";

const ProductItem = ({ plant }) => {
  const cartProducts = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const isInCart = () => {
    return cartProducts[plant.id];
  };

  const addToCart = () => {
    if (!isInCart()) {
      dispatch(addItemToCart({ ...plant, quantity: 1 }));
    }

    console.log("added to cart");
  };

  return (
    <div className="overflow-hidden bg-white p-4 rounded-sm flex flex-col justify-center items-center relative">
      {plant.isOnSale && (
        <span className="absolute top-0 right-0 rounded-sm bg-red-500 text-white px-2 py-1 text-xs font-semibold">
          Sale
        </span>
      )}
      <p className="font-bold mb-2 text-center text-[18px]">{plant.name}</p>
      <img
        src={IMAGE_MAP[plant.imageThumbnail]}
        alt={plant.name}
        className="max-w-[300px] aspect-square object-cover object-center rounded-md mb-2"
      />
      <p className="text-red-400 mb-2">${plant.price}</p>
      <p className="mb-2 text-center">{plant.description}</p>
      <Button
        className={`${
          isInCart()
            ? "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
        } text-white py-2 px-4 rounded`}
        disabled={isInCart()}
        onClick={addToCart}
      >
        {isInCart() ? "Added to cart" : "Add to cart"}
      </Button>
    </div>
  );
};

export default ProductItem;
