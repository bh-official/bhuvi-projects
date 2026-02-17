import { useState } from "react";

export default function ComplexForm() {
  const [formInfo, setFormInfo] = useState({});
  console.log(formInfo);

  function handleChange(e) {
    console.log(e.target.name);

    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <form>
      <input name="username" onChange={handleChange} />
      <input name="password" onChange={handleChange} type="password" />
      <input name="location" onChange={handleChange} />
      <input name="age" onChange={handleChange} />
      <input required name="creditcard" onChange={handleChange} />
      <input name="mothers_birthday" onChange={handleChange} />
      <input name="bank" onChange={handleChange} />
      <input name="pet_name" onChange={handleChange} />
      <input name="foo" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
