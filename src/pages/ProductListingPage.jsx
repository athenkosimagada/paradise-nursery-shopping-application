import { useEffect, useState } from "react";
import plantService from "@/services/plant_service";
import { IMAGE_MAP } from "../constants";

const ProductListingPage = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const data = await plantService.getPlants();
      setPlants(data);
    };
    fetchPlants();
  }, []);
  return (
    <div>
      <h1>Product Listing Page</h1>
      {plants.map((plant) => (
        <div>
          <p>{plant.name}</p>
          <img
            className="max-w-[300px]"
            src={IMAGE_MAP[plant.imageThumbnail]}
            alt={plant.name}
          />
          <p>{plant.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
