import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ProductDetails from "@/components/ProductDetails";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function ProductDrop({ blok }: { blok: any }) {
  const k75 = blok.body?.find((b: any) => b.component === "K75 Content");
  const banners =
    blok.body?.filter((b: any) => b.component === "announcement_banner") ?? [];

  return (
    <main
      className="min-h-screen bg-neutral-950"
      {...storyblokEditable(blok)}
    >
      {banners.map((banner: any) => (
        <StoryblokServerComponent blok={banner} key={banner._uid} />
      ))}

      <Navbar offset={banners.some((b: any) => b.is_visible)} />

      <div {...(k75 ? storyblokEditable(k75) : {})}>
        <Hero
          availability={k75?.availability}
          launchMessage={k75?.launch_message}
          ctaText={k75?.cta_text}
          imageUrl={k75?.image?.filename}
        />
      </div>

      <FeatureGrid />
      <ProductDetails />
      <FAQ />

      <FinalCTA
        launchMessage={k75?.launch_message}
        ctaText={k75?.cta_text}
      />

      <Footer />
    </main>
  );
}