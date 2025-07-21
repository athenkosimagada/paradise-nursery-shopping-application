import plantService from "@/services/plant_service";
import { useEffect, useState } from "react";
import ProductItem from "./product_item";

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
      {PRODUCT_FEATURES.map((feature, index) => (
        <div key={index} className="flex flex-col gap-2 mb-14">
          <div className="w-max mx-auto">
            <div className="h-[4px] bg-primary/60 rounded"></div>
            <h2 className="font-bold text-2xl">{feature}</h2>
            <div className="h-[4px] bg-primary/60 rounded"></div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-12">
            {plants
              .filter(
                (u) =>
                  u.commonFeature.toLowerCase() == feature.toLocaleLowerCase()
              )
              .map((plant) => (
                <ProductItem key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
