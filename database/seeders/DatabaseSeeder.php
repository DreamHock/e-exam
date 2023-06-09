<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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
            'role' => 'teacher',
            'password' => Hash::make('teacher123')
        ]);
        \App\Models\User::factory()->create([
            'name' => 'student',
            'email' => 'student@example.com',
            'role' => 'student',
            'password' => Hash::make('student123')
        ]);
    }
}
