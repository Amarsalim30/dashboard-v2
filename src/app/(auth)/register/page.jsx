import { RegisterForm } from "@/components/features/auth/register-form";
import AuthLayout from "@/components/layout/authLayout";

export default function RegisterPage() {
    return (
        <AuthLayout >
            <RegisterForm />
        </AuthLayout>
    );
}