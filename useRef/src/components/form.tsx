import { useRef } from 'react';

export default function BirthdayForm() {
  const surname = useRef<HTMLInputElement>(null);
  const birthday = useRef<HTMLInputElement>(null);

  const checkBirthday = () => {
    if (surname.current && birthday.current) {
      const refSurnameValue = surname.current.value;
      const refBirthdayValue = new Date(birthday.current.value);
      const actualDate = new Date();

      const isBirthday = actualDate.getDate() == refBirthdayValue.getDate() && actualDate.getMonth() == refBirthdayValue.getMonth();

      if (isBirthday) {
        window.alert(`Happy Birthday, ${refSurnameValue}!`);
      } else {
        window.alert("Today is not your birthday.");
      }
    }
  };

  return (
    <div>
      <p>Vorname</p>
      <input type="text" ref={surname} />
      <p>Geburtstag</p>
      <input type="date" ref={birthday} />
      <button onClick={checkBirthday}>Habe ich heute Geburtstag?</button>
    </div>
  );
}
