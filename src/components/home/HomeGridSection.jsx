import BeneficiosOsteopatia from "./BeneficiosOsteopatia";
import ImagenColumna from "./ImagenColumna";
import FAQ from "./FAQ";

const HomeGridSection = () => (
  <>
    {/* Desktop grid */}
    <div className="hidden md:grid grid-cols-3 gap-10 w-full max-w-6xl mx-auto py-16">
      <div className="flex flex-col items-center">
        <BeneficiosOsteopatia />
      </div>
      <div className="flex flex-col items-center">
        <ImagenColumna />
      </div>
      <div className="flex flex-col items-center">
        <FAQ />
      </div>
    </div>
    {/* Mobile stack */}
    <div className="flex flex-col gap-10 w-full md:hidden">
      <BeneficiosOsteopatia />
      <ImagenColumna />
      <FAQ />
    </div>
  </>
);

export default HomeGridSection;
