import { IMAGE_MAP } from "@/constants";
import plantService from "@/services/plant_service";
import { useEffect, useState } from "react";
import { Button } from "@/components";

const PRODUCT_FEATURES = [
  "Air Purifying Plants",
  "Aromatic Fragrant Plants",
  "Low Maintenance Plants",
  "Medicinal Plants",
  "Edible Plants",
];

const ProductList = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const data = await plantService.getPlants();
      setPlants(data);
    };
    fetchPlants();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {PRODUCT_FEATURES.map((feature) => (
        <div className="flex flex-col gap-2 mb-12">
          <div className="w-max">
            <div className="h-[4px] bg-primary/60 rounded"></div>
            <h2 className="font-bold text-2xl">{feature}</h2>
            <div className="h-[4px] bg-primary/60 rounded"></div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-4">
            {plants
              .filter(
                (u) =>
                  u.commonFeature.toLowerCase() == feature.toLocaleLowerCase()
              )
              .map((plant) => (
                <div className=" bg-primary/40 p-4 rounded-sm flex flex-col justify-center items-center">
                  <p className="font-medium mb-2 text-center text-[18px]">
                    {plant.name}
                  </p>
                  <img
                    className="max-w-full aspect-square rounded-sm object-cover object-center"
                    src={IMAGE_MAP[plant.imageThumbnail]}
                    alt={plant.name}
                  />
                  <p>{plant.description}</p>
                  <Button className="cursor-pointer mt-4 flex justify-self-end">
                    Add to cart
                  </Button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
