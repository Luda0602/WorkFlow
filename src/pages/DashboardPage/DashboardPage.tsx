import { useState } from "react";
import StatCard from "../../components/StatCard/StatCard";
import "./DashboardPage.css";
import TaskItem from "../../components/TaskItem/TaskItem";

type Task = {
  id: number;
  title: string;
  status: "todo" | "in-progress" | "done";
  isOverdue: boolean;
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Create Sidebar",
    status: "done",
    isOverdue: false,
  },
  {
    id: 2,
    title: "Create Login Page",
    status: "in-progress",
    isOverdue: false,
  },
  {
    id: 3,
    title: "Connect API",
    status: "todo",
    isOverdue: true,
  },
  {
    id: 4,
    title: "Mobile Layout",
    status: "done",
    isOverdue: false,
  },
  {
    id: 5,
    title: "Testing",
    status: "in-progress",
    isOverdue: true,
  },
  {
    id: 6,
    title: "Write README",
    status: "todo",
    isOverdue: false,
  },
];

function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [taskTitle, setTaskTitle] = useState("");

  // 1. Статистика завдань
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.status === "done").length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "in-progress",
  ).length;

  const overdueTasks = tasks.filter(
    (task) => task.isOverdue && task.status !== "done",
  ).length;

  // 2. Масив даних для карток
  const stats = [
    {
      id: 1,
      title: "Total Tasks",
      value: totalTasks,
    },
    {
      id: 2,
      title: "Completed Tasks",
      value: completedTasks,
    },
    {
      id: 3,
      title: "In Progress",
      value: inProgressTasks,
    },
    {
      id: 4,
      title: "Overdue Tasks",
      value: overdueTasks,
    },
  ];

  // 3. Додавання нового завдання
  function handleAddTask() {
    const title = taskTitle.trim();

    if (!title) {
      return;
    }

    setTasks((prevTasks) => {
      const newTask: Task = {
        id: Math.max(0, ...prevTasks.map((task) => task.id)) + 1,
        title: title,
        status: "todo",
        isOverdue: false,
      };

      return [...prevTasks, newTask];
    });

    setTaskTitle("");
  }

  // 4. Початок виконання завдання
  function handleStartTask(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map(
        (task): Task =>
          task.id === id && task.status === "todo"
            ? { ...task, status: "in-progress" }
            : task,
      ),
    );
  }

  // 5. Завершення завдання
  function handleCompleteTask(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map(
        (task): Task => (task.id === id ? { ...task, status: "done" } : task),
      ),
    );
  }

  // 6. Видалення завдання
  function handleDeleteTask(id: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to WorkFlow!</p>

      {/* Статистика */}
      <div className="stats-grid">
        {stats.map((item) => (
          <StatCard key={item.id} title={item.title} value={item.value} />
        ))}
      </div>

      {/* Форма додавання завдання */}
      <h2>Add New Task</h2>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAddTask();
        }}
      >
        <input
          type="text"
          placeholder="Enter task name"
          aria-label="Task name"
          value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>

      {/* Список завдань */}
      <h2>My Tasks</h2>

      {tasks.length === 0 && <p>No tasks yet. Add your first task!</p>}

      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            status={task.status}
            onStart={handleStartTask}
            onComplete={handleCompleteTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </ul>
    </section>
  );
}

export default DashboardPage;
