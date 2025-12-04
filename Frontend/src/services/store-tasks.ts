import { Signal } from "@angular/core";
import { MyTask } from "./tasks-services"
import {  patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { addEntity, removeEntity, setAllEntities, updateEntities, updateEntity, withEntities } from '@ngrx/signals/entities';
import  {withDevtools} from '@angular-architects/ngrx-toolkit'

const initialState: MyTask[] = [
 {   id: 0,
    title: '',
    description: '',
    status: 'Progress'
 }
]
export const MyTaskStore = signalStore(
    { providedIn: 'root' },
    withState<MyTask[]>(initialState),
    withEntities<MyTask>(),
    withDevtools('Task Storage'),
    withMethods((state) => ({
        addTask: (task: MyTask): void => {
            patchState(state, addEntity(task))
        },
        deleteTask: (id: number): void => {
            patchState(state, removeEntity(id))
        },
        getTask: (id: number):  MyTask | undefined => {
            return state.entities().find(x => x.id == id)
        },
        getTasks: (): Signal<MyTask[]> => {
            return state.entities
        },
        updateTask: (id: number, newValue: MyTask): void => {
            id -= 1;
            patchState(state, removeEntity(id), addEntity(newValue))
        },
    }))
)