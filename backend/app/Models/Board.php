<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Users;
use App\Models\Card;

class Board extends Model
{
    protected $fillable = ['text', 'bgColor'];

    public function cards()
    {
        return $this->hasMany(Card::class);
    } 

    public function users()
    {
        return $this->belongsToMany(Users::class);
    }
}
