import { MobileLayout } from "@/components/layout/MobileLayout";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { SearchBar } from "@/components/home/SearchBar";
import { QuickAlerts } from "@/components/home/QuickAlerts";
import { TrendingPicks } from "@/components/home/TrendingPicks";
import { FinishYourLook } from "@/components/home/FinishYourLook";

export default function Home() {
  return (
    <MobileLayout>
      <div className="space-y-2">
        <WelcomeSection />
        <SearchBar />
        <QuickAlerts />
        <TrendingPicks />
        <FinishYourLook />
      </div>
    </MobileLayout>
  );
}