<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Task;

class ToDo extends Model
{
    protected $fillable = ['check','checktext','task_id'];

    public function task(){
        return $this->belongsTo(Task::class);
    }
}
