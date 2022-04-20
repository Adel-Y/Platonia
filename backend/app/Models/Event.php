<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'planner_name',
        'event_topic',
        'event_place',
        'event_date',
        'event_time',
        'event_capacity',
        'event_description',
    ];
}
