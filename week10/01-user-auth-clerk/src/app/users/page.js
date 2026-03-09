import { auth, currentUser } from "@clerk/nextjs/server";
import PhoneSignUpTest from "@/components/PhoneSignUpTest";
import Image from "next/image";
import TestEmailCodeSignIn from "@/components/TestEmailCodeSignIn";

export default async function Page() {
  const authUser = await auth();
  console.log(authUser);
  const user = await currentUser();
  console.log(user);
  return (
    <div>
      <h2> This is users page </h2>
      <h3>{user.firstName}</h3>
      <Image height={400} width={400} src={user.imageUrl} alt="" />
      <PhoneSignUpTest />
      <TestEmailCodeSignIn />
    </div>
  );
}
