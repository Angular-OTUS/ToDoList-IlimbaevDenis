using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

public class MyTask
{
    [JsonProperty(PropertyName = "id")]
    public int Id;

    [JsonProperty(PropertyName = "title")]
    public string Title = null!;
     [JsonProperty(PropertyName = "status")]
    public string Status = null!;
    [JsonProperty(PropertyName = "description")]
    public string Description = null!;
}
enum Status {
    Progress,
    Completed
}