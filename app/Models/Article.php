<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $table = "articles";

    protected $primary = "id";

    public $timestamps = true;

    protected $fillable = [
        'title',
        'description'
    ];

}
