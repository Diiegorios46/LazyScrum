<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    protected $fillable = ['name', 'email', 'urlUser'];
}
