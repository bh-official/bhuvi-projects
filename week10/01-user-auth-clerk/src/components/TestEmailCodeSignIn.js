"use client";

import { useSignIn } from "@clerk/nextjs";

export default function TestEmailCodeSignIn() {
  const { signIn } = useSignIn();

  const testSignInWithEmailCode = async () => {
    const emailAddress = "john+clerk_test@example.com";

    const signInResp = await signIn.create({ identifier: emailAddress });

    const emailFactor = signInResp.supportedFirstFactors.find(
      (ff) =>
        ff.strategy === "email_code" && ff.safeIdentifier === emailAddress,
    );

    const emailAddressId = emailFactor.emailAddressId;

    await signIn.prepareFirstFactor({
      strategy: "email_code",
      emailAddressId: emailAddressId,
    });

    const attemptResponse = await signIn.attemptFirstFactor({
      strategy: "email_code",
      code: "424242",
    });

    if (attemptResponse.status === "complete") {
      console.log("success");
    } else {
      console.log("error");
    }
  };

  return (
    <button onClick={testSignInWithEmailCode}>Test Email Code Sign In</button>
  );
}
