import OutletsHero from "./components/outletsHero/OutletsHero";
import OutletGrid from "./components/outletGrid/OutletGrid";
import FindUsOnMap from "./components/findUsOnMap/FindUsOnMap";
import OutletsCTA from "./components/outletsCTA/OutletsCTA";

const OutletsPage = () => {
  return (
    <>
      <OutletsHero />
      <OutletGrid />
      <FindUsOnMap />
      <OutletsCTA />
    </>
  );
};

export default OutletsPage;
