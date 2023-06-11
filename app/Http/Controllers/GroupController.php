<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $groups = Group::all();
        
        return Inertia::render('Teacher/ListGroups', ["groups" => $groups]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $availibleStudents = User::where([
            ["role","=","student"],
            ["group_id","=",null]
        ])->get();
        return Inertia::render('Teacher/CreateGroup',[
            "students"=>$availibleStudents,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $newGroup = Group::create([
            "groupsName"=>$request->name,
            
        ]);

        if($newGroup){
            User::whereIn("id",$request->selectedStudents)->update(["group_id"=>$newGroup->id]);
        }
        return redirect("/groups");
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
        //
        $Group  = Group::find($id);
        $GroupStudent = $Group->user()->get();
        $studentWithNoGroup = User::where([
            ["role","=","student"],
            ["group_id","=",null]
        ])->get();

         return Inertia::render('Teacher/EditeGroup',[
            "group" =>$Group,
            "groupStudent"=>$GroupStudent,
            "studentWithNoGroup"=>$studentWithNoGroup,

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //=
        Group::where("id",$id)->update(["groupsName"=>$request->name]);

        User::whereIn("id",$request->selectedStudents)->update([
            "group_id"=>$id,
        ]);

        User::whereIn("id",$request->unWantedStudents)->update([
            "group_id"=>null,
        ]);

        return redirect('/groups');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        User::where([["role", "=", "student"], ["group_id", "=", $id]])->update(["group_id" => null]);
        Group::where("id", $id)->delete();
    }
}
