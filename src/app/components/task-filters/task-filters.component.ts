import { TaskPriority, TaskStatus } from './../../models/task.model';
import { Component, computed, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-filters',
  standalone: true,
  imports: [],
  templateUrl: './task-filters.component.html',
  styleUrl: './task-filters.component.scss',
})
export class TaskFiltersComponent {
  private taskService = inject(TaskService);
  public priorities: (TaskPriority | 'Todas')[] = ['Todas', 'Baixa', 'Média', 'Alta'];
  public statuses: (TaskStatus | 'Todos')[] = ['Todos', 'Pendente', 'Concluída'];
  public search = computed(() => this.taskService.filters().search);
  public priority = computed(() => this.taskService.filters().priority);
  public status = computed(() => this.taskService.filters().status);

  updateSearch(value: string) {
    this.taskService.updateFilters({ search: value });
  }

  updatePriority(value: TaskPriority | 'Todas') {
    this.taskService.updateFilters({ priority: value });
  }

  updateStatus(value: TaskStatus | 'Todos') {
    this.taskService.updateFilters({ status: value });
  }

  reset() {
    this.taskService.resetFilters();
  }
}
