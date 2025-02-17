import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/log-in");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">I'm testing Better-Auth</h1>
      <h2>Welcome {session.user.name}</h2>
      <form
        action={async () => {
          "use server";
          await auth.api.signOut({ headers: await headers() });
          return redirect("/log-in");
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </div>
  );
}
