import { useSearchParams } from "react-router";

export default function Plain() {
  const [params, setParams] = useSearchParams();
  console.log(params.get("sortBy"));
  return (
    <div>
      <p>Query String</p>
    </div>
  );
}
