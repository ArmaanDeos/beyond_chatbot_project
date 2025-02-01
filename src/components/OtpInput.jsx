import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DUMMY_OTP = "123456"; // Predefined Dummy OTP

const OtpInput = () => {
  const [otp, setOtp] = useState(""); // Store OTP input
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resend, setResend] = useState(false);
  const navigate = useNavigate();

  const handleVerify = () => {
    if (otp === DUMMY_OTP) {
      setSuccess(true);
      setError(false);
      setResend(false);
      navigate("/organization-setup");

      console.log("OTP Verified Successfully!");
    } else {
      setError(true);
      setSuccess(false);
      setResend(true);
      console.log("Invalid OTP, Please Try Again.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <InputOTP maxLength={6} value={otp} onChange={setOtp}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      {error && <p className="text-red-500 text-sm">Invalid OTP, try again.</p>}
      {success && <p className="text-green-500 text-sm">OTP Verified!</p>}

      <Button className="w-full mt-3" onClick={handleVerify}>
        Verify OTP
      </Button>
      {resend && <Button className="w-1/2 mt-2">Resend Code</Button>}
    </div>
  );
};

export default OtpInput;
