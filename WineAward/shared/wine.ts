export class Wine {
  constructor(
    public id: string,
    public titel: string,
    public vintage: number,
    public awardyear: number,
    public awards: string[]
  ) { }
}
