@php
    use Carbon\Carbon;
    $currentDate = Carbon::now();
    $formattedDate = $currentDate->format('Y-m-d');
    $yesterday = Carbon::now()->subDay();
@endphp
@extends('layouts.screen')
@section('content')
@include('main.appointment')
@include('main.reporttypemain')
@include('main.reporttypesub')
@endsection
