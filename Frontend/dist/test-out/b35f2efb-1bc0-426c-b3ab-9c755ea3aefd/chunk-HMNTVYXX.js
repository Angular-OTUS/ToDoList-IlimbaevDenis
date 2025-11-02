import {
  HttpClient,
  init_http
} from "./chunk-CIJU22KD.js";
import {
  Injectable,
  __decorate,
  __esm,
  __name,
  catchError,
  init_core,
  init_esm,
  init_tslib_es6,
  inject,
  of
} from "./chunk-A5WWXBEI.js";

// src/services/fake-api-service.ts
function isTask(data) {
  return data !== null;
}
var _a, FakeApiService;
var init_fake_api_service = __esm({
  "src/services/fake-api-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_http();
    init_core();
    init_esm();
    FakeApiService = (_a = class {
      httpClient = inject(HttpClient);
      apiUrl = `http://localhost:5125/tasks`;
      getTasks(func) {
        return this.httpClient.get(this.apiUrl).pipe(catchError((error) => {
          console.error("Error fetching data:", error);
          return of([]);
        })).subscribe(func);
      }
      // post
      addTask(task) {
        console.log("now task: ");
        console.log(task);
        this.httpClient.post(this.apiUrl, task).subscribe(() => {
          console.log("Adding");
        });
      }
      //put
      updateTask(id, property, newValue) {
        this.getTasks((root) => {
          if (!isTask(root)) {
            return;
          }
          const task = root.tasks.find((x) => x.id == id);
          task[property] = newValue;
          this.httpClient.put(this.apiUrl, JSON.stringify(task)).subscribe(() => {
            console.log("Updating");
          });
        });
      }
      // delete
      deleteTask(id) {
        console.log(this.apiUrl + "/" + id);
        this.httpClient.delete(this.apiUrl + "/" + id).subscribe(() => {
          console.log("Deleting");
        });
      }
    }, __name(_a, "FakeApiService"), _a);
    FakeApiService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], FakeApiService);
    __name(isTask, "isTask");
  }
});

// src/services/tasks-services.ts
var _a2, TaskServices;
var init_tasks_services = __esm({
  "src/services/tasks-services.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_fake_api_service();
    init_esm();
    TaskServices = (_a2 = class {
      tasksAPI = inject(FakeApiService);
      addNewElId(newValue) {
        this.tasksAPI.addTask(newValue);
      }
      addNewEl(arr, newValue) {
        arr.push(newValue);
        this.addNewElId(newValue);
        return arr;
      }
      delNewElId(id) {
        this.tasksAPI.deleteTask(id);
      }
      delNewEl(arr, id) {
        const index = arr.indexOf(arr.find((x) => x.id == id));
        console.log("index was: " + index);
        arr.splice(index, 1);
        this.delNewElId(id);
        return arr;
      }
      updateElPropId(id, propertyForChange, newValue) {
        this.tasksAPI.updateTask(id, propertyForChange, newValue);
      }
      updateElProp(arr, id, propertyForChange, newValue) {
        const obj = arr.find((x) => x.id == id);
        obj[propertyForChange] = newValue;
        this.updateElPropId(id, propertyForChange, newValue);
        return arr;
      }
      getTask(id, delegate) {
        this.getTasks((list) => {
          const task = list.find((x) => x.id == id);
          delegate(task);
        });
      }
      getTasks(delegate) {
        return this.tasksAPI.getTasks((root) => {
          if (isTask(root)) {
            console.log(root);
            delegate(root.tasks);
            return of(root.tasks);
          }
          return of([]);
        });
      }
    }, __name(_a2, "TaskServices"), _a2);
    TaskServices = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], TaskServices);
  }
});

export {
  TaskServices,
  init_tasks_services
};
//# sourceMappingURL=chunk-HMNTVYXX.js.map
