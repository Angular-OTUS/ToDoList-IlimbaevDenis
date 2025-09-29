class TaskService
{
    public List<MyTask> List { get; set; } = [
       new MyTask(){Tilte = "Fix bags", Description = "Tomorrow", },
       new MyTask(){Tilte = "Complete previous", Description = "Now", },
       new MyTask(){Tilte = "Create some angular app", Description = "Yesterday" }
    ];
    public List<MyTask> GetTasks()
    {
        return List.Select(item => new MyTask()
        {
            Tilte = item.Tilte,
            Description = item.Description,
            Status = Status.Progress.ToString()
        }).ToList();
    }
    public MyTask GetTaskById(int id)
    {
        return List[id];
    }
    public void AddTask(MyTask task) => List.Add(task);

}