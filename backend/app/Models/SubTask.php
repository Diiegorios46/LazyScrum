<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubTask extends Model
{
    use HasFactory;

    // Si tu clave primaria no se llama "id"
    protected $primaryKey = 'idSubTask';

    // Campos que se pueden asignar de forma masiva
    protected $fillable = ['task', 'checked', 'task_id'];

    // Relación: una subtask pertenece a una task
    public function task()
    {
        return $this->belongsTo(Task::class, 'task_id', 'idTask');
    }
}
