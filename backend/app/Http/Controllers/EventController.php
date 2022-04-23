<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\UserEvent;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class EventController extends Controller
{
    //
    public function showFeed(){

        $event= Event::all();

        if (!$event){
            return "no events in the current time";
        }

        return $event;
    }

    public function createEvent(Request $request){
        try{
            $this->validate($request, [
                'planner_name' => 'required',
                'event_topic' => 'required',
                'event_place' => 'required',
                'event_date' => 'required|date',
                'event_time'=>'required|date_format:H:i',
                'event_capacity'=>'required|integer',
                'event_description'=>'required'
            ]);
        }catch (ValidationException $exception) {
            return $exception->errors();
        }
        $event=Event::create([
            'planner_name'=>$request->planner_name,
            'event_topic'=>$request->event_topic,
            'event_place'=> $request->event_place,
            'event_date'=>$request->event_date,
            'event_time'=>$request->event_time,
            'event_capacity'=>$request->event_capacity,
            'event_description'=>$request->event_description
        ]);
    }

    public function getEvent($id){
        return Event::find($id);
    }

    public function getUserEvent($user_id){
      $user_events=  UserEvent::all()->where('user_id',$user_id)->pluck('event_id');

      $event= Event::whereIn('id',$user_events)->get();

        return $event;

    }

    public function joinEvent(Request $request){

    $event = Event::find($request->event_id);
    $cap=   $event->event_capacity;
    $user_event= UserEvent::where('event_id',$request->event_id);
    $members = $user_event->count();

    $check = UserEvent::where('user_id',$request->user_id)->where('event_id',$request->product_id)->get();

    if($members >= $cap){
        return "The event capacity is full!";
    }else{
        if ($check->count() > 0){
            return "You have already joined the event";
        }
    }

    UserEvent::create([
        'event_id'=> $request->event_id,
        'user_id'=>$request->user_id
    ]);

    return "You have joined successfully";

    }
}
