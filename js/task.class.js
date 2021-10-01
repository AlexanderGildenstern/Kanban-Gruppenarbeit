class Task {
  id;
  title;
  category;
  description;
  date;
  createAt;
  urgency;
  assignTo;
  phase;

  constructor(title, category, description, date, urgency, assignTo) {
    this.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
    this.title = title;
    this.category = category;
    this.description = description;
    this.date = date;
    this.createAt = new Date().getTime();
    this.urgency = urgency;
    this.assignTo = assignTo;
    this.phase = phase.TODO;
  }
}