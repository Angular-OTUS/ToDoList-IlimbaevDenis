export class Extensions {
  static addNewEl(arr: MyTask[], newValue: MyTask): MyTask[] {
    arr.push(newValue);
    return arr;
  }
  static delNewEl(arr: MyTask[], id: number): MyTask[] {
    arr.splice(id, 1);
    return arr;
  }
}
export type MyTask = {
  id: number;
  text: string | undefined;
}