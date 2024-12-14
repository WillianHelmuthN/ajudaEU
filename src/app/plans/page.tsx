import BusinesslPlans from "@/components/Plans/BusinessPlans";
import PesonalPlans from "@/components/Plans/PesonalPlans";

export default function PagePlans() {
    return (
        <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
            <PesonalPlans />
            <BusinesslPlans />
        </div>
    );
}