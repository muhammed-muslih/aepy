import ManufacturingHero from "./components/manufacturingHero/ManufacturingHero";
import ManufacturingJourney from "./components/manufacturingJourney/ManufacturingJourney";
import MidcFacility from "./components/midcFacility/MidcFacility";
import StationRoadProduction from "./components/stationRoadProduction/StationRoadProduction";

const ManufacturingPage = () => {
  return (
    <main>
      <ManufacturingHero />
      <ManufacturingJourney />
      <MidcFacility />
      <StationRoadProduction />
    </main>
  );
};
export default ManufacturingPage;
