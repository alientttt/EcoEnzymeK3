import { lazy, Suspense } from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import HeroSectionV2 from "../../components/organism/HeroSectionV2";
const LazyStep = lazy(() => import("../../components/organism/StepSection"));
const LazyVidioWrapper = lazy(
  () => import("../../components/organism/VideoSection")
);
const LazyManfaat = lazy(
  () => import("../../components/organism/BenefitSection")
);
const LazyAbout = lazy(() => import("../../components/organism/AboutSection"));
const LazyTeam = lazy(() => import("../../components/organism/TeamSection"));
const LazyFooter = lazy(() => import("../../components/organism/Footer"));
const LoadingFallback = () => (
  <div style={{ padding: "50px", textAlign: "center" }}>
    Memuat bagian konten...
  </div>
);
export default function Home() {
  const { isNearScreen, fromRef } = useNearScreen("300px");
  // set '300px' artinya konten akan mulai dimuat saat elemen berjarak 300px dari viewport.
  return (
    <>
      <HeroSectionV2 />
      <div ref={fromRef}>
        {isNearScreen ? (
          <Suspense fallback={<LoadingFallback />}>
            <LazyStep />
            <LazyVidioWrapper />
            <LazyManfaat />
            <LazyAbout />
            <LazyTeam />
            <LazyFooter />
          </Suspense>
        ) : (
          <div style={{ minHeight: "200vh" }}>
            <LoadingFallback />
          </div>
        )}
      </div>
    </>
  );
}
