import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { useNavigate } from "react-router-dom";
import CompanyDetailForm from "@/components/organizationSetup/CompanyDetailForm";
import WebsiteScraping from "@/components/organizationSetup/WebsiteScraping";

const OrganizationSetup = () => {
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [isTraining, setIsTraining] = useState(false);
  const navigate = useNavigate();

  // Simulate training progress
  useEffect(() => {
    if (!isTraining) return;

    const interval = setInterval(() => {
      setTrainingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isTraining]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-5xl  bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-800/50 hover:border-cyan-500/30 transition-all group relative overflow-hidden text-white">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            Organization Setup
          </CardTitle>
          <CardDescription>
            Configure your company details and website integration
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Company Details Form */}
          <CompanyDetailForm />

          {/* Scraping Status Section */}
          <WebsiteScraping />

          {/* Training Progress */}
          {isTraining && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Training Progress</span>
                <span>{trainingProgress}%</span>
              </div>
              <Progress value={trainingProgress} />
            </div>
          )}
        </CardContent>

        {/* Action Buttons */}
        <CardContent className="flex flex-col md:flex-row gap-2 justify-end">
          <Button
            variant={isTraining ? "secondary" : "default"}
            onClick={() => {
              setIsTraining(true);
              if (trainingProgress >= 100) setTrainingProgress(0);
            }}
            disabled={isTraining}
          >
            {isTraining ? "Training in Progress..." : "Start Training"}
          </Button>
          <Button onClick={() => navigate("/chatbot")}>Continue Setup</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrganizationSetup;
