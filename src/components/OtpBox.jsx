import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import OtpInput from "./OtpInput";

const OtpBox = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-800/50 hover:border-cyan-500/30 transition-all group relative overflow-hidden text-white ">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold mt-4">
            Verify Your Email
          </CardTitle>
        </CardHeader>
        <CardDescription className="text-center text-white">
          Please enter the OTP sent to your email
        </CardDescription>
        <CardContent className="flex items-center justify-center flex-col">
          <OtpInput />
        </CardContent>
      </Card>
    </div>
  );
};

export default OtpBox;
