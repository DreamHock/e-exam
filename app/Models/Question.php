<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ["question", "mark", "exam_id"];
    use HasFactory;

    function answers()
    {
        return $this->hasMany(Answer::class);
    }

    function exam()
    {
        return $this->belongsTo(Exam::class);
    }
}
