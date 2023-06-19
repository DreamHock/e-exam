<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    protected $fillable = [
        "name",
        "user_id",
        
    ];
    use HasFactory;

    function questions() {
        return $this->hasMany(Question::class);
    }
    
    public function groups(){
        return $this->belongsToMany(Group::class,"invitations");
    }
}
