class Task {
  id;
  title;
  category;
  description;
  dueDate;
  urgency;
  assignTo;
  phase;

  constructor(id, title, category, description, dueDate, urgency, assignTo, phase) {
      this.id = id;
      this.title = title;
      this.category = category;
      this.description = description;
      this.dueDate = dueDate;
      this.urgency = urgency;
      this.assignTo = assignTo;
      this.phase = phase;
    }
}