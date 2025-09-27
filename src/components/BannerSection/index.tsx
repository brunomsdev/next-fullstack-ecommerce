import { BsArrowRight } from "react-icons/bs";
import CustomButton from "../CustomButton";

export default function BannerSection(){
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#5593f7] to-[#5593f7]/50 py-5 md:p-12 mt-10 md:mt-15">
      <div className="relative z-10 mx-auto w-full max-w-screen md-w-2xl px-6">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Ofertas Especiais
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6">
          Descubra produtos incríveis com até 70% de desconto. Promoções por tempo limitado.
        </p>
        <CustomButton
          variant="outline"
          width="sm:w-[200px]"
          className="text-sm sm:text-base"
        >
          Ver Ofertas
          <BsArrowRight />
        </CustomButton>
      </div>
    </section>
  );
}