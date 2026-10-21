// за відображення одного завдання.

type TaskItemProps = {
  id: number;
  title: string;
  status: "todo" | "in-progress" | "done";
  onStart: (id: number) => void;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
};

function TaskItem({
  id,
  title,
  status,
  onStart,
  onComplete,
  onDelete,
}: TaskItemProps) {
  return (
    <li>
      <span>
        {title} — {status}
      </span>

      {status === "todo" && (
        <button type="button" onClick={() => onStart(id)}>
          Start
        </button>
      )}

      <button
        type="button"
        onClick={() => onComplete(id)}
        disabled={status === "done"}
      >
        {status === "done" ? "Done" : "Complete"}
      </button>

      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
