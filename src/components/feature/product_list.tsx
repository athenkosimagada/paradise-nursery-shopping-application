import { IMAGE_MAP } from "@/constants";
import plantService from "@/services/plant_service";
import { useEffect, useState } from "react";

const PRODUCT_FEATURES = [
  "Air Purifying Plants",
  "Aromatic Fragrant Plants",
  "ow Maintenance Plants",
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
        <div className="flex flex-col gap-2">
          <div className="w-max">
            <div className="h-[4px] bg-primary/60 rounded"></div>
            <h2 className="font-bold text-2xl">{feature}</h2>
            <div className="h-[4px] bg-primary/60 rounded"></div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {plants
              .filter(
                (u) =>
                  u.commonFeature.toLowerCase() == feature.toLocaleLowerCase()
              )
              .map((plant) => (
                <div>
                  <p>{plant.name}</p>
                  <img
                    className="max-w-full aspect-square"
                    src={IMAGE_MAP[plant.imageThumbnail]}
                    alt={plant.name}
                  />
                  <p>{plant.description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
