<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;


class ProfileController extends Controller
{
    //

    public function editProfile(Request $request){

        try{
            $this->validate($request, [
                'email' => 'required|email|unique:users',
                'name' => 'required',
                'age' => 'required|integer',
                'gender'=>'required'
            ]);
        }catch (ValidationException $exception) {
            return $exception->errors();
        }


        User::where('id', $request->user_id)->update([
            'email'=>$request->email,
            'name'=>$request->name,
            'age'=>$request->age,
            'gender'=>$request->gender,
            'interests'=>$request->interests

        ]);

        return"Profile Updated!";
    }


}
