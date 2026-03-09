"use client";

import { useSignUp } from "@clerk/nextjs";

export default function PhoneSignUpTest() {
  const { signUp } = useSignUp();

  const testSignUpWithPhoneNumber = async () => {
    await signUp.create({
      phoneNumber: "+12015550100",
    });

    await signUp.preparePhoneNumberVerification();

    const res = await signUp.attemptPhoneNumberVerification({
      code: "424242",
    });

    if (res.verifications.phoneNumber.status === "verified") {
      console.log("success");
    } else {
      console.log("error");
    }
  };

  return <button onClick={testSignUpWithPhoneNumber}>Test Phone Signup</button>;
}
