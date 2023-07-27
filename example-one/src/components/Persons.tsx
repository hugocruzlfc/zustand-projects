import React from "react";
import useStore from "../store/personStore";

interface PersonsProps {}

const Persons: React.FC<PersonsProps> = () => {
  const [firstName, updateFirstName] = useStore((state) => [
    state.firstName,
    state.updateFirstName,
  ]);

  return (
    <main>
      <label>
        First name
        <input
          // Update the "firstName" state
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>

      <p>
        Hello, <strong>{firstName}!</strong>
      </p>
    </main>
  );
};

export default Persons;
