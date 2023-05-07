<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'teacher',
            'email' => 'teacher@example.com',
            'type' => 'teacher'
        ]);
        \App\Models\User::factory()->create([
            'name' => 'student',
            'email' => 'student@example.com',
            'type' => 'student'
        ]);
    }
}
