import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Main } from "@/components/main";
import { Subscriptions } from "@/components/subcriptions";
import { Toolbox } from "@/components/toolbox";

export default function Home() {
  return (
    <div>
      <Main />
      <Toolbox />
      <Subscriptions />
      <FAQ />
      <Footer />
    </div>
  );
}
