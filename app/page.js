import Hero from "@/components/landing/Hero";
import Purpose from "@/components/landing/Purpose";
import RankingSystem from "@/components/landing/RankingSystem";
import FooterCta from "@/components/landing/FooterCta";

export default function Home() {
  return (
      <div className={'bg-purple-300 text-black'}>
          <Hero/>

          <div className={'h-4 sm:h-24'}/>

          <Purpose/>
          <div className={'h-4 sm:h-24'}/>


          <RankingSystem />
          <div className={'h-4 sm:h-24'}/>

          <FooterCta/>

      </div>
  );
}
