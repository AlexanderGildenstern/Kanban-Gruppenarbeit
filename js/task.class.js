class Task {
  id;
  title;
  category;
  description;
  dueDate;
  urgency;
  assignTo;
  phase;

  constructor(title, category, description, dueDate, urgency, assignTo, phase) {
      this.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
      this.title = title;
      this.category = category;
      this.description = description;
      this.dueDate = dueDate;
      this.urgency = urgency;
      this.assignTo = assignTo;
      this.phase = phase;
    }
}