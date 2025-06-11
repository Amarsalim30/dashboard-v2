import { LoginForm } from "@/components/features/auth/login-form"
import AuthLayout from "@/components/layout/authLayout"
import { cn } from "@/lib/utils"

export default function LoginPage() {
  return (
    <AuthLayout>
        <LoginForm />
    </AuthLayout>
  );
}
