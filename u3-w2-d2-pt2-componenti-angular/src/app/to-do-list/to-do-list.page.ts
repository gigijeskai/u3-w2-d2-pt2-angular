import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
})
export class ToDoListPage implements OnInit {
  todos = [
    {
      id: 1,
      text: 'todo a caso',
      check: '',
    },
    {
      id: 2,
      text: 'todo a caso due',
      check: 'check',
    },
    {
      id: 3,
      text: 'todo a caso tre',
      check: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  removeTodo(i: number) {
    this.todos.splice(i, 1);
  }
  checkTodo(i: number): void {
    this.todos[i].check = this.todos[i].check === 'check' ? '' : 'check';
  }
}
