

class Habit {
  constructor(name, description, id) {
    this.name = name;
    this.description = description;
    this.startDate = null;

    this.completedDates = [];
    this.completed = false;
    this.id = id;
  }

  markCompleted(date) {
    this.completedDates.push(date);
    this.completed = true;
  }

  markIncomplete(date) {
    this.completedDates = this.completedDates.filter((completedDate) => {
      return completedDate !== date;
    });
    this.completed = false;
  }

  getStreak() {
    return this.completedDates.length;
  }
}

export default Habit;