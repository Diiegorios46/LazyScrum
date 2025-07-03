<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

//Llamada a los modelos
use App\Models\Task; 
use App\Models\Board; 

class Card extends Model
{
    protected $fillable = ['text','task_id']; 
    
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function board()
    {
        return $this->belongsTo(Board::class);
    }
} 
