export class Extensions {
  static addNewEl(arr: MyTask[], newValue: MyTask): MyTask[] {
    arr.push(newValue);
    return arr;
  }
  static delNewEl(arr: MyTask[], id: number): MyTask[] {
    arr.splice(id, 1);
    return arr;
  }
  static updateElProp<K extends keyof MyTask>(
    arr: MyTask[],
    id: number,
    propertyForChange: K,
    newValue: any,
  ): MyTask[] {
    const obj = arr[id];
    obj[propertyForChange] = newValue;
    return arr;
  }
}
export type MyTask = {
  id: number;
  text: string;
  description: string | undefined;
  status: 'Progress' | 'Completed';
};
