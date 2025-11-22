import { Signal } from "@angular/core";
import { MyTask } from "./tasks-services"
import {  patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { addEntity, removeEntity, setAllEntities, updateEntity, withEntities } from '@ngrx/signals/entities';
type MyTaskState = {
    tasks: MyTask[],
    loading: boolean
}
const initialState: MyTaskState = {
    tasks: [],
    loading: false
}
export const MyTaskStore = signalStore(
    { providedIn: 'root' },
    withState<MyTaskState>(initialState),
    withEntities<MyTask>(),
    withMethods((state) => ({
        loadTasks: (): void => {
            patchState(state, {loading: true});
            patchState(state, setAllEntities(initialState.tasks), {loading: false})
        },
        addTask: (task: MyTask): void => {
            patchState(state, addEntity(task))
        },
        deleteTask: (id: number): void => {
            patchState(state, removeEntity(id))
        },
        getTask: (id: number):  MyTask | undefined => {
            return state.tasks().find(x => x.id === id)
        },
        getTasks: (): Signal<MyTask[]> => {
            return state.tasks
        },
        updateTask: (id: number, newState: MyTask): void => {
            patchState(state, updateEntity({id: id, changes: newState}))
        },
    }))
)