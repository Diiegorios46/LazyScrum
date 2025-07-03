<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\ToDo;
use app\Models\Comentario;
use app\Models\Card;

class Task extends Model
{
    protected $fillable = ['text','textCard','dateCreate', 'dateLimit']; 

    public function comentarios(){
        return $this->hasMany(Comentario::class);
    }
    public function toDos(){
        return $this->hasMany(ToDo::class);
    }

    public function card(){
        return $this->belongsTo(Card::class);
    }

}
