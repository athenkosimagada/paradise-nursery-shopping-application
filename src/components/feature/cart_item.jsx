import { IMAGE_MAP } from "@/constants";
import { useState } from "react";
import { Button } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  decrementQuantity,
  incrementQuantity,
  removeItemFromCart,
} from "@/redux/counter_slice";

const CartItem = ({ item }) => {
  const cartProducts = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const quantity = () => {
    console.log(cartProducts[item.productId]);
    return cartProducts[item.productId].quantity;
  };

  const removeFromCart = () => {
    dispatch(removeItemFromCart(item.productId));
  };

  return (
    <div className="bg-white p-4 rounded-sm flex gap-8 max-w-[650px]">
      <img
        src={IMAGE_MAP[item.imageThumbnail]}
        alt={item.name}
        className="max-w-[300px] aspect-[15/16] object-cover object-center rounded-md mb-2"
      />
      <div className="flex-1 flex flex-col gap-2">
        <p className="font-bold mb-2 text-2xl">{item.name}</p>
        <p className="mb-2">{item.description}</p>
        <p className="font-medium">R {item.price}</p>

        <div className="flex items-center gap-4">
          <span
            onClick={() => dispatch(decrementQuantity(item.productId))}
            className="cursor-pointer bg-gray-100 px-4 py-2 rounded-sm font-semibold"
          >
            -
          </span>
          <span className="font-semibold">{quantity()}</span>
          <span
            onClick={() => dispatch(incrementQuantity(item.productId))}
            className="cursor-pointer bg-gray-100 px-4 py-2 rounded-sm font-semibold"
          >
            +
          </span>
        </div>

        <p className="font-semibold">
          Total: R {item.quantity * item.price}.00
        </p>

        <Button
          variant="destructive"
          onClick={removeFromCart}
          className="cursor-pointer w-fit"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
