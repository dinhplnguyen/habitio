import HabitClass from '../../../assets/HabitClass';
import FormatDate from '../../../assets/FormatDate';

import HabitData from './HabitData';

export default function HabitDetails() {

  // const habit = new HabitClass("Drink Water", "Drink 8 glasses of water a day", new Date(), 1);

  return (
    <div className="habitdetail__container">
      <h1>HabitDetail</h1>
      {
        HabitData.map((habit) => (
          <div key={habit.id}>
            <h2>{habit.name}</h2>
            <h3>{habit.description}</h3>
          </div>
        ))
      }
    </div>
  );
}