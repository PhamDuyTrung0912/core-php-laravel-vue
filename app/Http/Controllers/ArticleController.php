<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return response()->json(Article::get());
    }

    public function show($id)
    {
        return response()->json(Article::find($id));
    }
}
