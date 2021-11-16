<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\SortImage;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ArticlesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $footer = Article::where('title', 'Blockchain')->first();
        if (!$footer) {
            DB::table('articles')->insert([
                'title' => 'Blockchain',
                'description' => 'Platform Celo Crypto',
            ]);
        }
    }
}
