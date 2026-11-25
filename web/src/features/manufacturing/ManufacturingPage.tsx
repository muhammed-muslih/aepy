import ManufacturingHero from "./components/manufacturingHero/ManufacturingHero";
import ManufacturingJourney from "./components/manufacturingJourney/ManufacturingJourney";
import MidcFacility from "./components/midcFacility/MidcFacility";
import StationRoadProduction from "./components/stationRoadProduction/StationRoadProduction";
import QualityHygiene from "./components/qualityHygiene/QualityHygiene";

const ManufacturingPage = () => {
  return (
    <main>
      <ManufacturingHero />
      <ManufacturingJourney />
      <MidcFacility />
      <StationRoadProduction />
      <QualityHygiene />
    </main>
  );
};
export default ManufacturingPage;
