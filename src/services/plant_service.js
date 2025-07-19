import plants from "../data/plants.json";

const plantService = {
  async getPlants() {
    return Promise.resolve(plants);
  },
};

export default plantService;
