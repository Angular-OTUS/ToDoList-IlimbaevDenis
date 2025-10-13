using System.Text.Json;
using LocalApi;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<TaskService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyAllowSpecificOrigins",
                              org =>
                              {
                                  org.WithOrigins(
                                         builder.Configuration.GetValue<string>("ClientHost")!) 
                                         .AllowAnyHeader()
                                         .AllowAnyMethod();
                              });
});
builder.Services.AddTransient<ILogger, Logger<Program>>();
var app = builder.Build();

app.UseCors("MyAllowSpecificOrigins");

app.MapGet("/", () => "Server is worked!");

app.MapGet("/tasks",  () =>
{
    var logger = app.Services.GetService<ILogger>()!;

    logger.LogInformation("Get request");

    var taskService = app.Services.GetService<TaskService>();

    var tasks = taskService?.List;

    var root = new Root() { Tasks = tasks!.ToArray() };

    string json = JsonConvert.SerializeObject(root).Replace('\\', ' ');

    return Results.Content(json, contentType: "application/json");
});
app.MapPost("/tasks", async (HttpContext httpContext) =>
{
    var taskService = app.Services.GetService<TaskService>();
    var logger = app.Services.GetService<ILogger>()!;

    logger.LogInformation("Post request");

    var task = await ApiHelper.GetTaskFromRequest(httpContext);

    if (task is null) return Results.BadRequest();

    taskService?.AddTask(task!);

    return Results.Ok();
});
app.MapPut("/tasks" , async (HttpContext httpContext) =>
{
    var taskService = app.Services.GetService<TaskService>();
    var logger = app.Services.GetService<ILogger>()!;

    logger.LogInformation("Put request");
   
    var task = await ApiHelper.GetTaskFromRequest(httpContext);

    if (task is null) return Results.BadRequest();

    var currentTask = taskService!.List.Where(x => x.Id == task.Id).SingleOrDefault();

    if (currentTask is null) return Results.BadRequest();

    foreach (var prop in currentTask.GetType().GetFields())
    {
        var propWithReq = task.GetType().GetFields().Where(x => x.Name == prop.Name).SingleOrDefault();

        prop.SetValue(currentTask, propWithReq!.GetValue(task));

    }

    return Results.Ok()
;
});
app.MapDelete("/tasks/{id:int}", (int id) =>
{
    var taskService = app.Services.GetService<TaskService>()!;
    var logger = app.Services.GetService<ILogger>()!;

    logger.LogInformation("Delete request");

    taskService.DeleteTask(id);

    return Results.Ok();
});
app.Run();
