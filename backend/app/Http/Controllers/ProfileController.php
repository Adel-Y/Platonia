<?php

namespace App\Http\Controllers;

use App\Models\Event;
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
                'name' => 'required',
                'age' => 'required|integer',
                'gender'=>'required'
            ]);
        }catch (ValidationException $exception) {
            return ['updated'=>false ,$exception->errors()];
        }

         $name=User::where('id', $request->id)->pluck('name')->first();

      $user=  User::where('id', $request->id)->update([
            'name'=>$request->name,
            'age'=>$request->age,
            'gender'=>$request->gender,
            'interests'=>$request->interests

        ]);

      Event::where('planner_name',$name)->update([
          'planner_name'=>$request->name
      ]);


        $response = collect(['updated' => true,'user'=>$user]);
        return $response;

    }


}
