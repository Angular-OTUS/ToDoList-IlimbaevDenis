
using Newtonsoft.Json;

namespace LocalApi
{
    class Root
    {
        [JsonProperty(PropertyName = "tasks")]
        public MyTask[]? Tasks;
    }
}

