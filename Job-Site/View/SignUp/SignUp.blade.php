@extends('layout/layout')
@section('test')
@foreach ($test as $row)
@if($row > 40)
<h1>{{ $row }}</h1>
@endif
@endforeach
@stop
