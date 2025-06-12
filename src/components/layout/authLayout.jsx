export default function AuthLayout({ children }) {
    return (
         <div
      className=
        "min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/highCity.jpg')" }}
      >
    <div
      className="bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-6 py-2 text-center ">
      <div className="w-full max-w-sm md:max-w-3xl">
        {children}              
      </div>    
    </div>
    </div>
    );
}