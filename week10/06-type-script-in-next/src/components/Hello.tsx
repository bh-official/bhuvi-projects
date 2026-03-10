type HelloProps = {
  name: string;
  age: number;
};

export default function Hello({ name, age }: HelloProps) {
  return (
    <div>
      Hello {name} who is {age}
    </div>
  );
}
