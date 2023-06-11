<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ExamController  extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $exams = Exam::all();
        return Inertia::render('Teacher/ListExams', ["exams" => $exams]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Teacher/CreateExam');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $createdExam = Exam::create([
            "name" => $request->name,
            "date" => $request->date,
            "start" => $request->startTime["hour"] . ":" . $request->startTime["minute"] . ":00",
            "startTime" => $request->startTime["time"],
            "end" => $request->endTime["hour"] . ":" . $request->endTime["minute"] . ":00",
            "endTime" => $request->endTime["time"],
            "user_id" => Auth::id(),
        ]);


        // return dd($request->all());
        foreach ($request->questions as $question) {
            $q = new QuestionController();
            $q->store($createdExam->id, $question["question"], $question["mark"], $question["answers"]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $editedExam = Exam::with('questions.answers')->find($id);
        return Inertia::render('Teacher/EditExam', ['exam' => $editedExam]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $updatedExam = Exam::find($id);
        $updatedExam->isActive = $request->enabled;
        $updatedExam->save();
        // return $id;
        // return dd($request->enabled);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Exam $exam)
    {
        // return $exam;
        $exam->delete();
    }
}
