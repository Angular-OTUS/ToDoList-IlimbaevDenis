using Newtonsoft.Json;
public static class ApiHelper
{
    public static async Task<MyTask?> GetTaskFromRequest(HttpContext httpContext)
    {
        using var reader = new StreamReader(httpContext.Request.Body);

        var json = await reader.ReadToEndAsync();

        var task = JsonConvert.DeserializeObject<MyTask>(json);

        return task;
    }
}