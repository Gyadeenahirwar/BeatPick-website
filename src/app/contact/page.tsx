import LegalPage from "@/components/layout/LegalPage";
import { Mail, MessageSquare, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <LegalPage title="Contact Us">
      <p>Have a question or feedback? We'd love to hear from you!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 not-prose">
        <div className="p-8 rounded-3xl border bg-card text-center space-y-4">
          <div className="h-12 w-12 rounded-full bg-[#FF9900]/10 flex items-center justify-center mx-auto text-[#FF9900]">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="font-bold">Email Us</h3>
          <p className="text-sm text-muted-foreground">hello@bestpick.com</p>
        </div>
        <div className="p-8 rounded-3xl border bg-card text-center space-y-4">
          <div className="h-12 w-12 rounded-full bg-[#FF9900]/10 flex items-center justify-center mx-auto text-[#FF9900]">
            <MessageSquare className="h-6 w-6" />
          </div>
          <h3 className="font-bold">Live Chat</h3>
          <p className="text-sm text-muted-foreground">Available 9am - 5pm EST</p>
        </div>
        <div className="p-8 rounded-3xl border bg-card text-center space-y-4">
          <div className="h-12 w-12 rounded-full bg-[#FF9900]/10 flex items-center justify-center mx-auto text-[#FF9900]">
            <MapPin className="h-6 w-6" />
          </div>
          <h3 className="font-bold">Office</h3>
          <p className="text-sm text-muted-foreground">New York, NY 10001</p>
        </div>
      </div>
    </LegalPage>
  );
}
