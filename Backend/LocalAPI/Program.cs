using System.Text.Json;
using LocalApi;
using Newtonsoft.Json;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<TaskService>();
builder.Services.AddCors();

var app = builder.Build();

app.UseCors(opt => opt.WithOrigins(builder.Configuration.GetValue<string>("ClientHost")!));

app.MapGet("/", () => "Server is worked!");

app.MapGet("/tasks",  () =>
{
    Console.WriteLine("Connected");

    var taskService = app.Services.GetService<TaskService>();

    var tasks = taskService?.GetTasks();

    var root = new Root() { Tasks = tasks.ToArray() };

    string json = JsonConvert.SerializeObject(root).Replace('\\', ' ');

    return Results.Content(json, contentType: "application/json");
});
app.MapPost("/tasks", (Root root) =>
{
    var taskService = app.Services.GetService<TaskService>();

    var task = root?.Tasks.LastOrDefault();

    taskService?.AddTask(task!);
});
app.MapPut("/tasks" , (Root root) =>
{
    var taskService = app.Services.GetService<TaskService>();

    taskService!.List = root!.Tasks.ToList();

});
app.Run();
