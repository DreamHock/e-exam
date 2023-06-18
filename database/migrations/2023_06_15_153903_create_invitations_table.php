<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invitations', function (Blueprint $table) {
            $table->id();
            $table->foreignId("group_id")->constrained("groups")->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId("exam_id")->constrained("exams")->cascadeOnDelete()->cascadeOnUpdate();
            $table->date("date");
            $table->time("start_at");
            $table->string("startTime");
            $table->time("end_at");
            $table->string("endTime");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invitations');
    }
};
