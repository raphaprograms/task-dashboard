export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export type TaskPriority = 'low' | 'medium' | 'high';

export type Task = {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    createdAt: string;
    updatedAt: string;
};

export type TaskFormData = {
    title: string;
    description: string;
    priority: TaskPriority;
};

export type TaskFilter = {
    status: TaskStatus | 'all';
    priority: TaskPriority | 'all';
    searchQuery: string;
};

export type TaskSortField = 'createdAt' | 'updatedAt' | 'priority' | 'title';
export type TaskSortOrder = 'asc' | 'desc';

export type TaskSort = { 
    field: TaskSortField;
    order: TaskSortOrder;
}