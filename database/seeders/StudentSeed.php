<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB ;
use Illuminate\Support\Facades\Hash;

class StudentSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i=0; $i < 50; $i++) { 
            # code...
            DB::table("users")->insert([
                "role"=>"student",
                "email"=>fake()->unique()->email(),
                "name"=>fake()->userName()." ".fake()->lastName(),
                "password"=>Hash::make("password"),
                
            ]);
        }
    }
}
