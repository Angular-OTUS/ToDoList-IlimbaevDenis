using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Components.Web;
using Newtonsoft.Json;

class MyTask
{
    [JsonProperty(PropertyName = "title")]
    public string? Tilte;
    [JsonProperty(PropertyName = "status")]
    public string? Status;
    [JsonProperty(PropertyName = "description")]
    public string? Description;
}
enum Status {
    Progress,
    Completed
}