<?php

namespace App\Http\Controllers;

use App\Models\student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
   public function index()
   {
    $students=student::all();

    return response($students,201);
   }
   public function store(Request $request)
   {
    $student=new student;
    $student->name=$request->name;
    $student->address=$request->address;
    $student->phone=$request->phone;

    $student->save();

    return response([
        'message'=>"student enterd succesfully",

    ],201);
   }

   public function delete($id)
   {
    $student=student::find($id);
    $student->delete();
    return response([
        'message'=>"Student Deleted succesfully"
    ],201);
   }

   public function update(Request $request,$id)
   {
     $student=student::find($id);
     $student->name=$request->name;
     $student->address=$request->address;
     $student->phone=$request->phone;

     $student->save();


     return response([
        'message'=>'student updated succesfully'
    ],201);

   }


}
