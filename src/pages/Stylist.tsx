import { MobileLayout } from "@/components/layout/MobileLayout";
import { Sparkles, MessageCircle, Camera, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Stylist() {
  return (
    <MobileLayout>
      <div className="px-6 py-8 space-y-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-accent-foreground" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-foreground">AI Stylist</h1>
            <p className="text-elegant">Your personal fashion assistant, ready to help</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card-elegant p-6 space-y-4">
            <h2 className="text-lg font-medium text-foreground">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-3">
              <Button variant="outline" className="justify-start h-12 text-left">
                <MessageCircle className="w-5 h-5 mr-3 text-accent" />
                <div>
                  <div className="font-medium">Ask the Stylist</div>
                  <div className="text-sm text-muted-foreground">Get style advice & tips</div>
                </div>
              </Button>
              
              <Button variant="outline" className="justify-start h-12 text-left">
                <Camera className="w-5 h-5 mr-3 text-accent" />
                <div>
                  <div className="font-medium">Style My Outfit</div>
                  <div className="text-sm text-muted-foreground">Upload photo for styling</div>
                </div>
              </Button>
              
              <Button variant="outline" className="justify-start h-12 text-left">
                <Wand2 className="w-5 h-5 mr-3 text-accent" />
                <div>
                  <div className="font-medium">Build a Capsule</div>
                  <div className="text-sm text-muted-foreground">Create curated wardrobe</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}