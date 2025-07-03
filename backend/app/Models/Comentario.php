<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Task;

class Comentario extends Model
{
    protected $fillable = ['description','task_id'];

    public function task(){
        return $this->belongsTo(Task::class);
    }

}
