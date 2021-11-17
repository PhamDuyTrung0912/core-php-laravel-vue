<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Exception;
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

    public function create(Request $request)
    {
        try {
            $validateData = $request->validate([
                'title' => 'string|nullable',
                'description' => 'string|nullable',
            ]);

            $article = Article::create($validateData);
            return response()->json($article);
        } catch (Exception $e) {
            return response(500)->json([
                'msg' => $e
            ]);
        }
    }
}
