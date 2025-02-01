import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const dummyUser = {
  name: "John Doe",
  email: "john@example.com",
  password: "password123",
};

const AuthPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      dummyUser.name === name &&
      dummyUser.email === email &&
      dummyUser.password === password
    ) {
      navigate(`/auth/login/otp-verification`);
    } else {
      setError(true);
      console.log("Invalid Credential");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-[500px] bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-800/50 hover:border-cyan-500/30 transition-all group relative overflow-hidden text-white">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold mt-4">
            Welcome Back!
          </CardTitle>
          <CardDescription className="text-center text-md text-gray-400">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label>Name</Label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Email</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Password</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm">
                  Invalid credentials, please try again.
                </p>
              )}
            </div>
            <CardFooter className="flex flex-col gap-3 mt-4">
              <Button className="w-full p-4" type="submit">
                Register
              </Button>
              <h2 className="text-center">Or</h2>
              <Button variant="outline" className="w-full p-4 text-black">
                <FcGoogle className="mr-2" /> Continue with Google
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
