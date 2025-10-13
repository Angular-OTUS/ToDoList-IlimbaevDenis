class TaskService
{
    public List<MyTask> List { get; set; } = [
       new MyTask(){Id = 0,Title = "Fix bags", Description = "Tomorrow", Status = Status.Progress.ToString()},
       new MyTask(){Id = 1,Title = "Complete previous", Description = "Now", Status = Status.Progress.ToString() },
       new MyTask(){Id = 2,Title = "Create some angular app", Description = "Yesterday", Status = Status.Progress.ToString() }
    ];
    public MyTask? GetTaskById(int id) =>  List.Where(x => x.Id == id).SingleOrDefault();
    public void AddTask(MyTask task) => List.Add(task);
    public void DeleteTask(int id) => List.RemoveAll(x => x.Id == id);

}