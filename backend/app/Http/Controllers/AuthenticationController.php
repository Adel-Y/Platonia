<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class AuthenticationController extends Controller
{
    //

    public function register(Request $request){
        try{
            $this->validate($request, [
                'email' => 'required|email|unique:users',
                'name' => 'required',
                'age' => 'required|integer',
                'password' => ['required', 'confirmed', Password::defaults()],
                'gender'=>'required'
            ]);
        }catch (ValidationException $exception) {
            return $exception->errors();
        }
        $user=User::create([
            'email'=>$request->email,
            'name'=>$request->name,
            'password'=> Hash::make($request->password),
            'age'=>$request->age,
            'gender'=>$request->gender,

        ]);

        return "success";
    }

    public function login(Request $request){
        //VALIDATE
        try{
            $this->validate($request, [
                'email' => 'required|email',
                'password' => 'required',
            ]);
        }catch (ValidationException $exception) {
            return $exception->errors();
        }

        $user = User::where('email', $request->email)->first();


        if (!$user || !Hash::check($request->password, $user->password)){
            return "unauthorized";
        }

        return $user;
    }

    public function getUser($id){
        return User::find($id);
    }
}
