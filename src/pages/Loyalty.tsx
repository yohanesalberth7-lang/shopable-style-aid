import { MobileLayout } from "@/components/layout/MobileLayout";
import { Trophy, Star, Gift, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const currentTier = "Silver";
const currentPoints = 1250;
const nextTierPoints = 2000;
const progressPercentage = (currentPoints / nextTierPoints) * 100;

const tiers = [
  { name: "Bronze", icon: Star, color: "text-yellow-600", minPoints: 0 },
  { name: "Silver", icon: Trophy, color: "text-gray-500", minPoints: 500 },
  { name: "Gold", icon: Crown, color: "text-yellow-500", minPoints: 2000 },
  { name: "Platinum", icon: Crown, color: "text-purple-500", minPoints: 5000 }
];

const rewards = [
  {
    id: 1,
    title: "10% Off Next Purchase",
    points: 500,
    type: "discount",
    available: true
  },
  {
    id: 2,
    title: "Free Shipping",
    points: 300,
    type: "shipping",
    available: true
  },
  {
    id: 3,
    title: "Exclusive Early Access",
    points: 1000,
    type: "access",
    available: false
  }
];

export default function Loyalty() {
  return (
    <MobileLayout>
      <div className="px-6 py-8 space-y-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center">
            <Trophy className="w-8 h-8 text-accent-foreground" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-foreground">Loyalty Rewards</h1>
            <p className="text-elegant">You're doing great! Keep shopping to unlock more rewards</p>
          </div>
        </div>

        {/* Current Status */}
        <div className="card-elegant p-6 space-y-4">
          <div className="text-center space-y-2">
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              {currentTier} Member
            </Badge>
            <div className="text-3xl font-bold text-accent">{currentPoints}</div>
            <p className="text-sm text-muted-foreground">points earned</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress to Gold</span>
              <span className="text-foreground">{nextTierPoints - currentPoints} points to go</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>

        {/* Tier Levels */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-foreground">Membership Tiers</h2>
          
          <div className="grid grid-cols-2 gap-3">
            {tiers.map((tier) => {
              const IconComponent = tier.icon;
              const isCurrentTier = tier.name === currentTier;
              const isUnlocked = currentPoints >= tier.minPoints;
              
              return (
                <div
                  key={tier.name}
                  className={`card-elegant p-4 text-center space-y-2 ${
                    isCurrentTier ? 'ring-2 ring-accent' : ''
                  }`}
                >
                  <IconComponent className={`w-6 h-6 mx-auto ${tier.color}`} />
                  <div className="space-y-1">
                    <h3 className="font-medium text-foreground">{tier.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {tier.minPoints}+ points
                    </p>
                  </div>
                  {isCurrentTier && (
                    <Badge variant="secondary" className="text-xs bg-accent text-accent-foreground">
                      Current
                    </Badge>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Available Rewards */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-foreground">Available Rewards</h2>
          
          <div className="space-y-3">
            {rewards.map((reward) => (
              <div key={reward.id} className="card-elegant p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                      <Gift className="w-5 h-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium text-foreground">{reward.title}</h3>
                      <p className="text-sm text-muted-foreground">{reward.points} points</p>
                    </div>
                  </div>
                  
                  <Button
                    size="sm"
                    disabled={!reward.available || currentPoints < reward.points}
                    className="bg-primary text-primary-foreground disabled:opacity-50"
                  >
                    {reward.available && currentPoints >= reward.points ? 'Redeem' : 'Locked'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}