import { SlowComponent } from "@/components/SlowComponent";

export default function Page() {
  return (
    <div>
      <p>I sure wish I could read this text right away!</p>
      <SlowComponent />
    </div>
  );
}
