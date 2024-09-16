import Sidebar from "@/components/Sidebar";
import { signIn, useSession } from "next-auth/react";

export default function Layout({children}) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className={"bg-blue-900  h-screen flex items-center"}>
        <div className="text-center w-full">
          <button
            className="bg-white p-2 rounded-lg px-4"
            onClick={() => signIn("google")}
          >
            Login With Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-blue-900 h-screen flex">
      <Sidebar />
      <div className="bg-white mt-1 mr-1.5 p-2 flex-grow rounded-lg">
        {children} 
      </div>
    </div>
  );
}
