
export class ToDoInsetDto {
  title!: string;
  userId!: number;
}

export class ToDoCreateData {
  title!: string;
  userId!: number;
  completed?: boolean;
}

export class ToDoResponseDto {
  title!: string;
  userId!: number;
  completed!: boolean;
}