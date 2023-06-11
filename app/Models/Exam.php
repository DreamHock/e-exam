<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    protected $fillable = [
        "name",
        "date",
        "start",
        "end",
        "user_id",
        "startTime",
        "endTime"
    ];
    use HasFactory;

    function questions() {
        return $this->hasMany(Question::class);
    }
}
