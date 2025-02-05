import FsaeLiveLogo from "@/app/ui/fsaelive-logo";
import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Login',
};
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-24 w-full items-end rounded-lg bg-gray-900	p-3 md:h-24">
          <div className="w-44 text-white md:w-44">
            <FsaeLiveLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}