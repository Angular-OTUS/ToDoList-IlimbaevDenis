export class Extensions {
  static addNewEl<T>(arr: T[], newValue: T): T[] {
    arr.push(newValue);
    return arr;
  }
  static delNewEl<T>(arr: T[], id: number): T[] {
    arr.splice(id, 1);
    return arr;
  }
}
