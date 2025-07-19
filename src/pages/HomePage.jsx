import { Button } from "@/components";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/app/products");
  };

  return (
    <div className="h-dvh max-w-[1440px] mx-auto px-8 flex justify-between items-center bg-background text-foreground">
      <div className="max-w-[300px] flex-1 text-center">
        <div className="flex flex-col items-center  mb-3">
          <h1 className="font-bold text-4xl mb-4 text-foreground">
            Welcome To Paradise Nursery
          </h1>
          <div className="h-[4px] w-[40px] bg-primary/60 rounded"></div>
        </div>
        <p className="mb-4">Where Green Meets Serenity</p>

        <Button className="cursor-pointer" onClick={handleGetStarted}>
          Get Started
        </Button>
      </div>

      <div className="flex-3 max-w-[900px]">
        <h3 className="font-medium text-2xl mb-4">
          Welcome to Paradise Nursery, where green meets serenity!
        </h3>

        <p>
          At Paradise Nursery, we are passionate about nurturing the natural
          beauty of our surroundings. Our mission is to provide a haven for
          nature lovers, where they can immerse themselves in the tranquility of
          the natural world. Whether you are a seasoned nature enthusiast or a
          newcomer to the wonders of the outdoors, Paradise Nursery is the
          perfect place to start your journey of exploration.
          <br />
          <br />
          Our mission is to provide a haven for nature lovers, where they can
          immerse themselves in the tranquility of the natural world. Whether
          you are a seasoned nature enthusiast or a newcomer to the wonders of
          the outdoors, Paradise Nursery is the perfect place to start your
          journey of exploration.
          <br />
          <br />
          Join us on this enchanting journey and let the beauty of nature
          inspire you to embrace the wonders of the outdoors.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
