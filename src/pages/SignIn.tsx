
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log("Sign in attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-purple-600">
            Streelancer
          </Link>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-purple-600 hover:text-purple-700 font-semibold">
              Join Now
            </Link>
          </p>
          <Link to="/" className="text-purple-600 hover:text-purple-700 text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
