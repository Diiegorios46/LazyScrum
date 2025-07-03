<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Board;

class Users extends Model
{
    protected $fillable = ['name', 'email', 'password' , 'language'];

    public function boards()
    {
        return $this->belongsToMany(Board::class);
    }

}
