import { Button } from "@/components/ui/button";
import { Mail, Sparkles } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl bg-[#FF9900] p-8 md:p-16 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-black">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/10 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-3 w-3 mr-2" />
                Never Miss a Deal
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Get the best deals delivered to your inbox.
              </h2>
              <p className="text-lg opacity-90 font-medium">
                Subscribe to our newsletter and stay updated with the latest reviews and exclusive discounts.
              </p>
            </div>

            <div className="bg-white p-2 rounded-2xl shadow-xl flex flex-col sm:flex-row gap-2">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 h-14 rounded-xl border-none focus:ring-0 text-black"
                />
              </div>
              <Button className="h-14 px-8 rounded-xl bg-black text-white hover:bg-black/90 font-bold">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
